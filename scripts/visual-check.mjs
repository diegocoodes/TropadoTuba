import { spawn } from "node:child_process";
import { writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const port = 9333;
const profile = join(tmpdir(), `tropa-cdp-${Date.now()}`);
const chrome = spawn(chromePath, [
  "--headless=new",
  "--disable-gpu",
  "--no-first-run",
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${profile}`,
  "about:blank",
], { stdio: "ignore" });

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getDebuggerUrl() {
  for (let attempt = 0; attempt < 50; attempt += 1) {
    try {
      const targets = await fetch(`http://127.0.0.1:${port}/json/list`).then((response) => response.json());
      const page = targets.find((target) => target.type === "page");
      if (page) return page.webSocketDebuggerUrl;
    } catch {}
    await sleep(100);
  }
  throw new Error("Chrome DevTools não ficou disponível.");
}

const ws = new WebSocket(await getDebuggerUrl());
await new Promise((resolve, reject) => {
  ws.addEventListener("open", resolve, { once: true });
  ws.addEventListener("error", reject, { once: true });
});

let commandId = 0;
const pending = new Map();
const events = new Map();
const consoleErrors = [];
const failedResponses = [];

ws.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  if (message.id) {
    const handler = pending.get(message.id);
    if (!handler) return;
    pending.delete(message.id);
    if (message.error) handler.reject(new Error(message.error.message));
    else handler.resolve(message.result);
    return;
  }
  if (message.method === "Runtime.exceptionThrown") {
    consoleErrors.push(message.params.exceptionDetails.text);
  }
  if (message.method === "Log.entryAdded" && message.params.entry.level === "error") {
    consoleErrors.push(message.params.entry.text);
  }
  if (message.method === "Network.responseReceived" && message.params.response.status >= 400) {
    failedResponses.push(`${message.params.response.status} ${message.params.response.url}`);
  }
  const listeners = events.get(message.method) ?? [];
  listeners.forEach((listener) => listener(message.params));
});

function send(method, params = {}) {
  const id = ++commandId;
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params }));
  });
}

function waitFor(method) {
  return new Promise((resolve) => {
    const listeners = events.get(method) ?? [];
    const listener = (params) => {
      events.set(method, (events.get(method) ?? []).filter((item) => item !== listener));
      resolve(params);
    };
    listeners.push(listener);
    events.set(method, listeners);
  });
}

async function evaluate(expression) {
  const result = await send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
  return result.result.value;
}

async function navigate(url) {
  const loaded = waitFor("Page.loadEventFired");
  await send("Page.navigate", { url });
  await loaded;
  await sleep(900);
}

async function screenshot(name) {
  const result = await send("Page.captureScreenshot", { format: "png", fromSurface: true });
  const path = join(tmpdir(), `tropa-check-${name}.png`);
  await writeFile(path, Buffer.from(result.data, "base64"));
  return path;
}

async function scrollToId(id) {
  const target = await evaluate(`Math.max(0, document.getElementById(${JSON.stringify(id)})?.offsetTop - 75 || 0)`);
  let current = await evaluate("scrollY");
  while (Math.abs(target - current) > 800) {
    current += Math.sign(target - current) * 700;
    await evaluate(`scrollTo({top:${current},behavior:"instant"})`);
    await sleep(80);
  }
  await evaluate(`document.getElementById(${JSON.stringify(id)})?.scrollIntoView({behavior:"instant",block:"start"})`);
  await sleep(800);
}

async function loadImagesForVisualAudit() {
  await evaluate(`Promise.all([...document.images].map((image)=>{image.loading="eager";if(image.complete)return Promise.resolve();return new Promise((resolve)=>{image.addEventListener("load",resolve,{once:true});image.addEventListener("error",resolve,{once:true})})}))`);
}

await Promise.all([
  send("Page.enable"),
  send("Runtime.enable"),
  send("Log.enable"),
  send("Network.enable"),
]);

const report = { views: [], interactions: {}, consoleErrors, failedResponses };

await send("Emulation.setDeviceMetricsOverride", {
  width: 1440,
  height: 1000,
  deviceScaleFactor: 1,
  mobile: false,
});
await navigate("http://localhost:3010");
await loadImagesForVisualAudit();

for (const id of ["inicio", "sobre", "instinto", "treinos", "eventos", "galeria", "inscricao", "contato"]) {
  await scrollToId(id);
  const metrics = await evaluate(`({scrollWidth:document.documentElement.scrollWidth,clientWidth:document.documentElement.clientWidth,top:Math.round(scrollY),visibleImages:[...document.images].filter((image)=>{const rect=image.getBoundingClientRect();return rect.bottom>0&&rect.top<innerHeight}).map((image)=>({loaded:image.complete&&image.naturalWidth>0,src:image.currentSrc.split("/").pop()}))})`);
  const path = await screenshot(`desktop-${id}`);
  report.views.push({ viewport: "desktop", id, path, ...metrics });
}

await send("Emulation.setDeviceMetricsOverride", {
  width: 320,
  height: 720,
  deviceScaleFactor: 1,
  mobile: true,
});
await navigate("http://localhost:3010");
await loadImagesForVisualAudit();
await scrollToId("treinos");
report.views.push({
  viewport: "mobile-narrow",
  id: "treinos",
  path: await screenshot("mobile-narrow-treinos"),
  ...(await evaluate(`({scrollWidth:document.documentElement.scrollWidth,clientWidth:document.documentElement.clientWidth,top:Math.round(scrollY)})`)),
});

await send("Emulation.setDeviceMetricsOverride", {
  width: 390,
  height: 844,
  deviceScaleFactor: 1,
  mobile: true,
});
await navigate("http://localhost:3010");
await loadImagesForVisualAudit();

for (const id of ["inicio", "instinto", "treinos", "eventos", "galeria", "inscricao"]) {
  await scrollToId(id);
  const metrics = await evaluate(`({scrollWidth:document.documentElement.scrollWidth,clientWidth:document.documentElement.clientWidth,top:Math.round(scrollY),visibleImages:[...document.images].filter((image)=>{const rect=image.getBoundingClientRect();return rect.bottom>0&&rect.top<innerHeight}).map((image)=>({loaded:image.complete&&image.naturalWidth>0,src:image.currentSrc.split("/").pop()}))})`);
  const path = await screenshot(`mobile-${id}`);
  report.views.push({ viewport: "mobile", id, path, ...metrics });
}

await evaluate(`document.querySelector('#inscricao a[href^="https://wa.me/"]')?.scrollIntoView({behavior:"instant",block:"center"})`);
await sleep(800);
report.views.push({ viewport: "mobile", id: "whatsapp-cta", path: await screenshot("mobile-whatsapp-cta") });
report.interactions.whatsappCta = await evaluate(`document.querySelector('#inscricao a[href^="https://wa.me/"]')?.getAttribute("href") || null`);

await scrollToId("eventos");
report.interactions.peRunningEventLinks = await evaluate(`document.querySelectorAll('#eventos a[href^="https://www.perunning.com.br/events/"]').length`);
report.interactions.eventDates = await evaluate(`[...document.querySelectorAll('#eventos a[href^="https://www.perunning.com.br/events/"]')].map((card)=>card.textContent.includes("29 de agosto de 2026"))`);

await scrollToId("treinos");
report.interactions.trainingDate = await evaluate(`document.querySelector('#treinos')?.textContent.includes("28 de agosto") || false`);
report.interactions.trainingWhatsAppCta = await evaluate(`document.querySelector('#treinos a[href^="https://wa.me/"]')?.getAttribute("href") || null`);

await evaluate(`document.getElementById("inicio")?.scrollIntoView({behavior:"instant",block:"start"})`);
await evaluate(`document.querySelector('button[aria-label="Abrir menu"]')?.click()`);
await sleep(300);
report.views.push({ viewport: "mobile", id: "menu", path: await screenshot("mobile-menu") });

console.log(JSON.stringify(report, null, 2));
ws.close();
chrome.kill();
