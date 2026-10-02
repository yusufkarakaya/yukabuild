import { FinalCta } from "@/components/FinalCta";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
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
        <SelectedProducts />
        <Services />
        <Process />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
