import { About } from "@/components/about";
import { Events } from "@/components/events";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { JoinForm } from "@/components/join-form";
import { RunningLevels } from "@/components/running-levels";
import { Statistics } from "@/components/statistics";
import { Testimonials } from "@/components/testimonials";
import { TrainingSchedule } from "@/components/training-schedule";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <TrainingSchedule />
        <RunningLevels />
        <Statistics />
        <Events />
        <Gallery />
        <Testimonials />
        <JoinForm />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
