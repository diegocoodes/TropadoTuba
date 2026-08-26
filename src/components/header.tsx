"use client";

import { useCallback, useRef, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";

const links = [
  ["Início", "#inicio"],
  ["Sobre", "#sobre"],
  ["Treinos", "#treinos"],
  ["Eventos", "#eventos"],
  ["Galeria", "#galeria"],
  ["Contato", "#contato"],
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    requestAnimationFrame(() => menuButtonRef.current?.focus());
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/95 backdrop-blur-sm">
        <div className="site-container flex h-[76px] items-center justify-between">
          <a href="#inicio" aria-label="Tropa do Tubarão, início" className="outline-none focus-visible:ring-2 focus-visible:ring-cyan">
            <Logo eager />
          </a>
          <nav className="hidden lg:block" aria-label="Navegação principal">
            <ul className="flex items-center gap-7">
              {links.map(([label, href]) => (
                <li key={href}>
                  <a
                    className="relative py-3 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-ice outline-none transition-colors after:absolute after:inset-x-0 after:bottom-1 after:h-0.5 after:origin-right after:scale-x-0 after:bg-cyan after:transition-transform hover:text-cyan hover:after:origin-left hover:after:scale-x-100 focus-visible:text-cyan"
                    href={href}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden lg:block">
            <Button asChild size="sm"><a href="#inscricao">Faça parte</a></Button>
          </div>
          <button
            ref={menuButtonRef}
            type="button"
            className="flex size-12 items-center justify-center border border-line text-white outline-none transition-colors hover:border-cyan hover:text-cyan focus-visible:ring-2 focus-visible:ring-cyan lg:hidden"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="size-5" />
          </button>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}
