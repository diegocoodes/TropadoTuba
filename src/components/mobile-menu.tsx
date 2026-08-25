"use client";

import { useEffect } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

const links = [
  ["Início", "#inicio"],
  ["Sobre", "#sobre"],
  ["Treinos", "#treinos"],
  ["Eventos", "#eventos"],
  ["Galeria", "#galeria"],
  ["Contato", "#contato"],
] as const;

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] lg:hidden" role="dialog" aria-modal="true" aria-label="Menu principal">
      <button className="absolute inset-0 bg-black/70" aria-label="Fechar menu" onClick={onClose} />
      <div className="absolute right-0 top-0 flex h-full w-[min(88vw,390px)] flex-col border-l border-line bg-ink p-6">
        <div className="flex items-center justify-between border-b border-line pb-6">
          <Logo />
          <button
            type="button"
            className="flex size-12 items-center justify-center border border-line text-white outline-none hover:border-cyan hover:text-cyan focus-visible:ring-2 focus-visible:ring-cyan"
            onClick={onClose}
            aria-label="Fechar menu"
            autoFocus
          >
            <X className="size-5" />
          </button>
        </div>
        <nav className="mt-8" aria-label="Navegação móvel">
          <ul className="divide-y divide-line">
            {links.map(([label, href], index) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={onClose}
                  className="group flex min-h-16 items-center justify-between font-title text-2xl font-bold uppercase text-white outline-none transition-colors hover:text-cyan focus-visible:text-cyan"
                >
                  <span><span className="mr-3 text-sm text-cyan">0{index + 1}</span>{label}</span>
                  <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Button asChild size="lg" className="mt-auto w-full">
          <a href="#inscricao" onClick={onClose}>Faça parte <ArrowUpRight className="size-4" /></a>
        </Button>
      </div>
    </div>
  );
}
