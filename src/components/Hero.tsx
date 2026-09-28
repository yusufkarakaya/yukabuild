import { CheckIcon } from "lucide-react";
import { HeroVisual } from "@/components/HeroVisual";
import { Container } from "@/components/panel";
import { Rise } from "@/components/reveal";
import { StartProject } from "@/components/StartProject";
import { Button } from "@/components/ui/button";
import { cta, hero } from "@/content/site";

/** Headline, one orange call to action and the facts on the left; the photo on the right. */
export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div aria-hidden className="blueprint-grid absolute inset-0 -z-10" />
      <Container className="grid grid-cols-1 items-center gap-16 py-20 lg:min-h-[calc(100dvh-4rem)] lg:grid-cols-12 lg:gap-12 lg:py-24">
        <div className="flex flex-col gap-8 lg:col-span-7">
          <Rise step={0}>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-sm font-medium">
              <span aria-hidden className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              {hero.status}
            </p>
          </Rise>
          <Rise step={1}>
            <h1 className="max-w-[14ch] text-6xl leading-[0.95] font-semibold tracking-[-0.045em] text-balance sm:text-7xl lg:text-[84px]">
              {hero.headline.lead} <span className="text-blue">{hero.headline.accent}</span>
            </h1>
          </Rise>
          <Rise step={2}>
            <p className="max-w-[48ch] text-lg leading-relaxed text-muted-foreground sm:text-xl">{hero.subline}</p>
          </Rise>
          <Rise step={3} className="flex flex-col gap-3 sm:flex-row">
            <StartProject />
            <Button size="cta" variant="outline" render={<a href="#products" />} nativeButton={false}>
              {cta.viewWork}
            </Button>
          </Rise>
          <Rise step={4}>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-muted-foreground">
              {hero.facts.map((fact) => (
                <li key={fact} className="flex items-center gap-2">
                  <CheckIcon aria-hidden className="size-4 text-blue" />
                  {fact}
                </li>
              ))}
            </ul>
          </Rise>
        </div>

        <Rise step={3} className="mx-auto w-full max-w-[480px] lg:col-span-5">
          <HeroVisual />
        </Rise>
      </Container>
    </section>
  );
}
