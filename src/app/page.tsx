import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { ProjectPicker } from "@/components/ProjectPicker";
import { SelectedProducts } from "@/components/SelectedProducts";
import { Services } from "@/components/Services";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <ProjectPicker />
        <SelectedProducts />
        <Services />
        <Process />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
