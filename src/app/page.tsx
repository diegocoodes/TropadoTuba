import { About } from "@/components/about";
import { Events } from "@/components/events";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { JoinCta } from "@/components/join-cta";
import { RaceDivider } from "@/components/race-divider";
import { RunningLevels } from "@/components/running-levels";
import { TrainingSchedule } from "@/components/training-schedule";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <RaceDivider />
        <TrainingSchedule />
        <RunningLevels />
        <Events />
        <Gallery />
        <JoinCta />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
