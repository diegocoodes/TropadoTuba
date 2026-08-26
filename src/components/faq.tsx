import { faqs } from "@/data/site-data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/section-heading";

export function FAQ() {
  return (
    <section className="section-padding bg-[#0a1029]" aria-labelledby="faq-titulo">
      <div className="site-container grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
        <div>
          <SectionHeading
            kicker="Dúvidas frequentes"
            title="Antes de"
            outline="começar"
            description="Se sua dúvida não estiver aqui, fale com a equipe. A gente ajuda a encontrar o melhor primeiro passo."
            className="mb-0 lg:sticky lg:top-28"
          />
        </div>
        <Accordion type="single" collapsible className="border-t border-line">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
