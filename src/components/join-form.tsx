"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Check, MessageCircle, ShieldCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { MotionReveal } from "@/components/motion-reveal";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().trim().min(3, "Informe seu nome completo."),
  whatsapp: z.string().trim().min(10, "Informe um WhatsApp válido.").refine(
    (value) => value.replace(/\D/g, "").length >= 10,
    "Inclua o DDD e o número.",
  ),
  age: z.string().trim().refine(
    (value) => {
      const age = Number(value);
      return Number.isInteger(age) && age >= 12 && age <= 100;
    },
    "Informe uma idade entre 12 e 100 anos.",
  ),
  level: z.enum(["Iniciante", "Intermediário", "Avançado"], {
    error: "Selecione seu nível atual.",
  }),
  distance: z.string().trim().min(1, "Informe a distância que costuma correr."),
  goal: z.string().trim().min(10, "Conte um pouco mais sobre seu objetivo."),
});

type JoinFormData = z.infer<typeof formSchema>;

function ErrorMessage({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs font-medium text-pink-300" role="alert">{message}</p>;
}

export function JoinForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<JoinFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", whatsapp: "", age: "", distance: "", goal: "" },
  });

  const onSubmit = (data: JoinFormData) => {
    const message = [
      "Olá! Conheci a Tropa do Tubarão pelo site e gostaria de participar dos treinos.",
      "",
      `Nome: ${data.name}`,
      `Meu WhatsApp: ${data.whatsapp}`,
      `Idade: ${data.age}`,
      `Nível atual: ${data.level}`,
      `Distância habitual: ${data.distance}`,
      `Objetivo principal: ${data.goal}`,
    ].join("\n");

    const url = whatsappUrl(message);
    if (!url) {
      setError("root", {
        message: "O WhatsApp da equipe ainda não foi configurado. Defina NEXT_PUBLIC_WHATSAPP_NUMBER para ativar o envio.",
      });
      return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="inscricao" className="section-padding relative overflow-hidden bg-ink">
      <svg aria-hidden="true" className="absolute -right-20 top-12 h-[420px] w-[520px] text-cyan opacity-[0.035]" viewBox="0 0 520 420" fill="currentColor">
        <path d="M7 308c109-30 185-119 239-286 87 79 122 168 99 267 56-37 111-57 168-60-41 106-139 166-265 167C145 397 61 366 7 308Z" />
      </svg>
      <div className="site-container relative">
        <div className="grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
          <MotionReveal>
            <span className="section-kicker">Vem com a gente</span>
            <h2 className="display-title">Pronto para correr <span className="text-cyan">com a Tropa?</span></h2>
            <p className="mt-7 max-w-lg text-base leading-8 text-muted">
              Conte um pouco sobre você. Com os dados preenchidos, abrimos uma mensagem pronta para a equipe continuar a conversa pelo WhatsApp.
            </p>
            <div className="mt-10 space-y-5 border-t border-line pt-8">
              {["Escolha o treino ideal para o seu nível", "Receba as orientações para o primeiro encontro", "Comece no seu ritmo e evolua em grupo"].map((text) => (
                <div key={text} className="flex items-start gap-3 text-sm text-ice/85">
                  <span className="flex size-6 shrink-0 items-center justify-center bg-cyan text-ink"><Check className="size-4" strokeWidth={3} /></span>
                  <span className="pt-0.5 leading-6">{text}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 flex items-center gap-3 text-xs leading-5 text-muted">
              <ShieldCheck className="size-5 shrink-0 text-cyan" />
              Seus dados são usados apenas para iniciar o atendimento com a Tropa.
            </div>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="border border-line bg-[#0a1029] p-5 sm:p-8 md:p-10"
              noValidate
            >
              <div className="mb-8 flex items-center justify-between border-b border-line pb-6">
                <div>
                  <span className="text-[0.65rem] font-extrabold uppercase tracking-[0.15em] text-cyan">Ficha rápida</span>
                  <h3 className="mt-1 font-title text-3xl font-bold uppercase text-white">Seu ponto de partida</h3>
                </div>
                <MessageCircle className="hidden size-8 text-cyan sm:block" />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="field-label">Nome completo</label>
                  <input id="name" autoComplete="name" className="field-control" placeholder="Como podemos chamar você?" aria-invalid={!!errors.name} {...register("name")} />
                  <ErrorMessage message={errors.name?.message} />
                </div>
                <div>
                  <label htmlFor="whatsapp" className="field-label">WhatsApp</label>
                  <input id="whatsapp" type="tel" inputMode="tel" autoComplete="tel" className="field-control" placeholder="(81) 99999-9999" aria-invalid={!!errors.whatsapp} {...register("whatsapp")} />
                  <ErrorMessage message={errors.whatsapp?.message} />
                </div>
                <div>
                  <label htmlFor="age" className="field-label">Idade</label>
                  <input id="age" type="number" inputMode="numeric" min="12" max="100" className="field-control" placeholder="Ex.: 32" aria-invalid={!!errors.age} {...register("age")} />
                  <ErrorMessage message={errors.age?.message} />
                </div>
                <div>
                  <label htmlFor="level" className="field-label">Nível atual</label>
                  <select id="level" className="field-control" defaultValue="" aria-invalid={!!errors.level} {...register("level")}>
                    <option value="" disabled>Selecione</option>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                  </select>
                  <ErrorMessage message={errors.level?.message} />
                </div>
                <div>
                  <label htmlFor="distance" className="field-label">Distância habitual</label>
                  <select id="distance" className="field-control" defaultValue="" aria-invalid={!!errors.distance} {...register("distance")}>
                    <option value="" disabled>Selecione</option>
                    <option value="Ainda não corro">Ainda não corro</option>
                    <option value="Até 3 km">Até 3 km</option>
                    <option value="5 km">5 km</option>
                    <option value="10 km">10 km</option>
                    <option value="Mais de 10 km">Mais de 10 km</option>
                  </select>
                  <ErrorMessage message={errors.distance?.message} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="goal" className="field-label">Objetivo principal</label>
                  <textarea id="goal" rows={4} className="field-control resize-y" placeholder="Ex.: completar meus primeiros 5 km e criar uma rotina..." aria-invalid={!!errors.goal} {...register("goal")} />
                  <ErrorMessage message={errors.goal?.message} />
                </div>
              </div>

              {errors.root?.message && (
                <div className="mt-5 border-l-4 border-magenta bg-magenta/10 p-4 text-sm leading-6 text-pink-100" role="alert">
                  {errors.root.message}
                </div>
              )}

              <Button type="submit" size="lg" className="mt-7 w-full" disabled={isSubmitting}>
                Quero entrar para a Tropa <ArrowRight className="size-4" />
              </Button>
              <p className="mt-4 text-center text-[0.68rem] leading-5 text-muted">
                Ao continuar, o WhatsApp abrirá em uma nova aba. Nenhuma informação é armazenada pelo site.
              </p>
            </form>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
