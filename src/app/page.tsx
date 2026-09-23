import { Contact } from "@/components/Contact";
import { Founder } from "@/components/Founder";
import { Hero } from "@/components/Hero";
import { ProcessTrack } from "@/components/ProcessTrack";
import { Services } from "@/components/Services";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { WorkBento } from "@/components/WorkBento";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Separator />
        <Services />
        <Separator />
        <ProcessTrack />
        <Separator />
        <WorkBento />
        <Separator />
        <Founder />
        <Separator />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
