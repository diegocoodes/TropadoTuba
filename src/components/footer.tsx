import Image from "next/image";
import { Instagram, MapPin, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/utils";

const footerLinks = [
  ["Início", "#inicio"],
  ["Sobre", "#sobre"],
  ["Treinos", "#treinos"],
  ["Eventos", "#eventos"],
  ["Galeria", "#galeria"],
  ["Faça parte", "#inscricao"],
] as const;

export function Footer() {
  const contactUrl = whatsappUrl("Olá! Conheci a Tropa do Tubarão pelo site e gostaria de saber como participar dos treinos.");

  return (
    <footer id="contato" className="border-t border-line bg-ink pt-16">
      <div className="site-container">
        <div className="grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-[1.25fr_.75fr_1fr]">
          <div>
            <div>
              <Image
                src="/images/tubarao-com nome.png.PNG"
                alt="Brasão Tropa do Tubarão, correr, superar, vencer"
                width={500}
                height={500}
                sizes="160px"
                className="size-40 object-contain drop-shadow-[0_0_28px_rgba(0,207,255,0.16)]"
              />
            </div>
            <p className="mt-6 font-title text-3xl font-bold uppercase leading-none text-white">
              Correr <span className="text-cyan">•</span> Superar <span className="text-magenta">•</span> Vencer
            </p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-muted">Corrida para todas as idades. Uma comunidade feita para evoluir junto em Paulista, PE.</p>
          </div>
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-[0.16em] text-cyan">Links rápidos</h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3">
              {footerLinks.map(([label, href]) => (
                <li key={href}><a href={href} className="text-sm text-ice/80 outline-none transition-colors hover:text-cyan focus-visible:text-cyan">{label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-[0.16em] text-cyan">Encontre a Tropa</h2>
            <ul className="mt-5 space-y-4 text-sm text-ice/80">
              <li><a href="https://www.instagram.com/tropadotubaraorun" target="_blank" rel="noreferrer" className="flex items-center gap-3 outline-none transition-colors hover:text-cyan focus-visible:text-cyan"><Instagram className="size-4 text-cyan" /> @tropadotubaraorun</a></li>
              <li>
                <a href={contactUrl ?? "#inscricao"} target={contactUrl ? "_blank" : undefined} rel={contactUrl ? "noreferrer" : undefined} className="flex items-center gap-3 outline-none transition-colors hover:text-cyan focus-visible:text-cyan">
                  <MessageCircle className="size-4 text-cyan" /> Fale com a equipe no WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3"><MapPin className="size-4 text-cyan" /> Paulista, PE</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-line py-6 text-[0.7rem] text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Tropa do Tubarão. Todos os direitos reservados.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="/politica-de-privacidade" className="outline-none hover:text-white focus-visible:text-cyan">Política de privacidade</a>
            <span>Site desenvolvido para a Tropa do Tubarão</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
