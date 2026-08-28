"use client";

import { motion, useMotionValue, useReducedMotion } from "framer-motion";
import { Menu } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";
import { Button } from "@/components/ui/button";
import { cn, WHATSAPP_GROUP_URL } from "@/lib/utils";

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
  const [compact, setCompact] = useState(false);
  const [activeHref, setActiveHref] = useState("#inicio");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const scrollProgress = useMotionValue(0);
  const reducedMotion = useReducedMotion();

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    requestAnimationFrame(() => menuButtonRef.current?.focus());
  }, []);

  useEffect(() => {
    let frame = 0;

    const updateHeader = () => {
      frame = 0;
      const scrollTop = window.scrollY;
      const scrollable = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const marker = scrollTop + window.innerHeight * 0.36;
      const nextCompact = scrollTop > 20;
      let currentHref: string = links[0][1];

      for (const [, href] of links) {
        const section = document.getElementById(href.slice(1));
        if (section && section.offsetTop <= marker) currentHref = href;
      }

      scrollProgress.set(Math.min(1, Math.max(0, scrollTop / scrollable)));
      setCompact((current) => (current === nextCompact ? current : nextCompact));
      setActiveHref((current) => (current === currentHref ? current : currentHref));
    };

    const requestUpdate = () => {
      if (frame === 0) frame = requestAnimationFrame(updateHeader);
    };

    updateHeader();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [scrollProgress]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300",
          compact
            ? "border-cyan/20 bg-ink/90 shadow-[0_14px_40px_rgba(0,0,0,0.28)]"
            : "border-white/10 bg-ink/78",
        )}
      >
        <motion.div
          className="site-container flex items-center justify-between"
          animate={{ height: compact ? 64 : 76 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.a
            href="#inicio"
            aria-label="Tropa do Tubarão, início"
            className="origin-left outline-none focus-visible:ring-2 focus-visible:ring-cyan"
            animate={{ scale: compact ? 0.9 : 1 }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.26 }}
          >
            <Logo eager />
          </motion.a>

          <nav className="hidden lg:block" aria-label="Navegação principal">
            <ul className="flex items-center gap-7">
              {links.map(([label, href]) => {
                const active = activeHref === href;

                return (
                  <li key={href}>
                    <a
                      className={cn(
                        "relative py-3 text-[0.72rem] font-bold uppercase tracking-[0.14em] outline-none transition-colors after:absolute after:inset-x-0 after:bottom-1 after:h-0.5 after:bg-cyan after:transition-transform after:duration-300 hover:text-cyan focus-visible:text-cyan",
                        active
                          ? "text-cyan after:scale-x-100"
                          : "text-ice after:origin-right after:scale-x-0 hover:after:origin-left hover:after:scale-x-100",
                      )}
                      href={href}
                      aria-current={active ? "location" : undefined}
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <motion.div
            className="hidden lg:block"
            animate={{ scale: compact ? 0.94 : 1 }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.26 }}
          >
            <Button asChild size="sm">
              <a href={WHATSAPP_GROUP_URL} target="_blank" rel="noreferrer" aria-label="Entrar no grupo da Tropa no WhatsApp">
                Faça parte
              </a>
            </Button>
          </motion.div>

          <motion.button
            ref={menuButtonRef}
            type="button"
            className={cn(
              "flex items-center justify-center border border-line text-white outline-none transition-[width,height,border-color,color] hover:border-cyan hover:text-cyan focus-visible:ring-2 focus-visible:ring-cyan lg:hidden",
              compact ? "size-10" : "size-12",
            )}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            whileTap={{ scale: reducedMotion ? 1 : 0.94 }}
          >
            <Menu className="size-5" />
          </motion.button>
        </motion.div>

        <motion.span
          className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-gradient-to-r from-cyan via-blue to-magenta"
          style={{ scaleX: scrollProgress }}
          aria-hidden="true"
        />
      </header>
      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}
