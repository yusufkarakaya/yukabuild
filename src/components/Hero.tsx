import { HeroObject } from "@/components/HeroObject";
import { Container } from "@/components/panel";
import { Rise } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { cta, hero, site } from "@/content/site";

/** Oversized headline on the left, the one 3D object on the right. */
export function Hero() {
  return (
    <section id="top">
      <Container className="grid grid-cols-1 items-center gap-16 py-24 lg:min-h-[calc(100dvh-4rem)] lg:grid-cols-12 lg:gap-10 lg:py-32">
        <div className="flex flex-col gap-10 lg:col-span-7">
          <Rise step={0}>
            <h1 className="max-w-[14ch] text-6xl leading-[0.92] font-semibold tracking-[-0.045em] text-balance sm:text-7xl lg:text-[88px]">
              {hero.headline}
            </h1>
          </Rise>
          <Rise step={1}>
            <p className="max-w-[40ch] text-lg leading-relaxed text-muted-foreground sm:text-xl">{hero.subline}</p>
          </Rise>
          <Rise step={2} className="flex flex-col gap-3 sm:flex-row">
            <Button size="cta" render={<a href="#products" />} nativeButton={false}>
              {cta.viewWork}
            </Button>
            <Button size="cta" variant="outline" render={<a href={`mailto:${site.email}`} />} nativeButton={false}>
              {cta.startProject}
            </Button>
          </Rise>
        </div>

        <Rise step={3} className="mx-auto w-full max-w-[520px] lg:col-span-5">
          <HeroObject />
        </Rise>
      </Container>
    </section>
  );
}
