"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { cn, whatsappUrl } from "@/lib/utils";

export function WhatsAppButton() {
  const [hidden, setHidden] = useState(false);
  const url = whatsappUrl("Olá! Conheci a Tropa do Tubarão pelo site e gostaria de saber como participar dos treinos.");

  useEffect(() => {
    const targets = [document.getElementById("inscricao"), document.getElementById("contato")].filter(Boolean) as Element[];
    const visibleTargets = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visibleTargets.add(entry.target);
          else visibleTargets.delete(entry.target);
        });
        setHidden(visibleTargets.size > 0);
      },
      { threshold: 0.04 },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar com a Tropa no WhatsApp"
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : undefined}
      className={cn(
        "fixed bottom-4 right-4 z-40 flex min-h-12 items-center gap-2 border border-cyan bg-ink px-4 text-xs font-extrabold uppercase tracking-[0.08em] text-white shadow-[4px_4px_0_#00cfff] outline-none transition-[opacity,transform] hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink md:bottom-6 md:right-6",
        hidden && "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <MessageCircle className="size-5 text-cyan" />
      <span className="hidden sm:inline">Fale com a Tropa</span>
    </a>
  );
}
