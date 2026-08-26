import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/logo";

export const metadata: Metadata = {
  title: "Política de Privacidade | Tropa do Tubarão",
  description: "Política de privacidade do site da comunidade Tropa do Tubarão.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-ink py-10 text-ice md:py-16">
      <article className="site-container max-w-3xl">
        <div className="flex items-center justify-between border-b border-line pb-7">
          <Logo />
          <Link href="/" className="flex min-h-11 items-center gap-2 text-xs font-extrabold uppercase tracking-[0.1em] text-cyan outline-none hover:text-white focus-visible:ring-2 focus-visible:ring-cyan">
            <ArrowLeft className="size-4" /> Voltar
          </Link>
        </div>
        <span className="section-kicker mt-14">Transparência</span>
        <h1 className="mt-5 font-title text-5xl font-extrabold uppercase leading-none md:text-7xl">Política de privacidade</h1>
        <p className="mt-5 text-sm text-muted">Última atualização: 25 de agosto de 2026.</p>

        <div className="mt-12 space-y-10 text-base leading-8 text-muted">
          <section>
            <h2 className="font-title text-3xl font-bold uppercase text-white">Sobre este site</h2>
            <p className="mt-3">Este site apresenta a comunidade Tropa do Tubarão e facilita o contato de pessoas interessadas nos treinos e eventos.</p>
          </section>
          <section>
            <h2 className="font-title text-3xl font-bold uppercase text-white">Contato pelo WhatsApp</h2>
            <p className="mt-3">O site não coleta dados em formulário. Ao tocar nos botões de contato, uma mensagem é preparada e a conversa continua diretamente no WhatsApp.</p>
          </section>
          <section>
            <h2 className="font-title text-3xl font-bold uppercase text-white">Serviços externos</h2>
            <p className="mt-3">Ao acessar links do WhatsApp ou Instagram, você passa a utilizar serviços de terceiros, sujeitos às políticas de privacidade de cada plataforma.</p>
          </section>
          <section>
            <h2 className="font-title text-3xl font-bold uppercase text-white">Métricas e cookies</h2>
            <p className="mt-3">Esta versão inicial não instala ferramentas próprias de analytics nem utiliza cookies de rastreamento. Caso isso mude, esta política deverá ser atualizada antes da ativação.</p>
          </section>
          <section>
            <h2 className="font-title text-3xl font-bold uppercase text-white">Contato</h2>
            <p className="mt-3">Dúvidas sobre privacidade podem ser enviadas pelos canais oficiais da Tropa do Tubarão informados na página inicial.</p>
          </section>
        </div>
      </article>
    </main>
  );
}
