import { Activity, ArrowUpRight, MessageCircle } from "lucide-react";
import { MotionReveal } from "@/components/motion-reveal";
import { SectionHeading } from "@/components/section-heading";

const channels = [
  {
    name: "Grupo no WhatsApp",
    description: "Receba avisos dos treinos, tire dúvidas e acompanhe as novidades da comunidade.",
    href: "https://chat.whatsapp.com/DJ76xuBQOzH4hf4CSbPNFe?s=sw&p=i&mlu=4",
    action: "Entrar no grupo",
    icon: MessageCircle,
    accent: "text-cyan",
    line: "from-cyan to-blue",
  },
  {
    name: "Clube no Strava",
    description: "Acompanhe as atividades, compartilhe seus quilômetros e evolua junto com a Tropa.",
    href: "https://www.strava.com/clubs/2318364",
    action: "Acessar o Strava",
    icon: Activity,
    accent: "text-magenta",
    line: "from-magenta to-cyan",
  },
] as const;

export function CommunityChannels() {
  return (
    <section id="comunidade" className="section-padding relative overflow-hidden bg-navy">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(0,207,255,0.13),transparent_30%),radial-gradient(circle_at_16%_88%,rgba(217,35,165,0.11),transparent_28%)]"
        aria-hidden="true"
      />
      <div className="site-container relative">
        <SectionHeading
          kicker="Conecte-se com a Tropa"
          title="A corrida continua"
          outline="fora da pista"
          description="Entre nos canais oficiais da comunidade e acompanhe cada novo passo da Tropa."
          className="mb-10 md:mb-12"
        />

        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {channels.map((channel, index) => {
            const Icon = channel.icon;

            return (
              <MotionReveal key={channel.name} delay={index * 0.08}>
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex min-h-[260px] flex-col overflow-hidden border border-white/12 bg-ink/65 p-6 outline-none transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-cyan/55 hover:bg-ink/85 focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-4 focus-visible:ring-offset-navy sm:p-8"
                  aria-label={`${channel.action} — abre em uma nova aba`}
                >
                  <span className={`flex size-14 items-center justify-center border border-white/12 bg-white/[0.04] ${channel.accent}`}>
                    <Icon className="size-7" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <h3 className="mt-8 font-title text-3xl font-extrabold uppercase text-white sm:text-4xl">
                    {channel.name}
                  </h3>
                  <p className="mt-3 max-w-lg text-sm leading-7 text-muted">
                    {channel.description}
                  </p>
                  <span className={`mt-auto flex items-center gap-2 pt-7 text-xs font-extrabold uppercase tracking-[0.13em] ${channel.accent}`}>
                    {channel.action}
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                  </span>
                  <span
                    className={`absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r ${channel.line} transition-transform duration-500 group-hover:scale-x-100 group-focus-visible:scale-x-100`}
                    aria-hidden="true"
                  />
                </a>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
