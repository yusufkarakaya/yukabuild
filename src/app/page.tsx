import { FinalCta } from "@/components/FinalCta";
import { Hero } from "@/components/Hero";
import { SelectedProducts } from "@/components/SelectedProducts";
import { Services } from "@/components/Services";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { Stack } from "@/components/Stack";

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <SelectedProducts />
        <Services />
        <Stack />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
