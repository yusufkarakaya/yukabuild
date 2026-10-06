import { Container } from "@/components/panel";
import { Rise } from "@/components/reveal";
import { Eyebrow } from "@/components/section-heading";
import { StartProject } from "@/components/StartProject";
import { Button } from "@/components/ui/button";
import { cta, hero } from "@/content/site";

/** Eyebrow, the serif headline with its underlined close, the subline and two actions. */
export function Hero() {
  return (
    <section id="top">
      <Container className="flex flex-col gap-6 pt-20 pb-14 lg:pt-24">
        <Rise step={0}>
          <Eyebrow>{hero.eyebrow}</Eyebrow>
        </Rise>
        <Rise step={1}>
          <h1 className="max-w-[18ch] font-heading text-5xl leading-[1.05] font-semibold tracking-[-0.025em] text-balance sm:text-6xl">
            {hero.headline.lead}{" "}
            <span className="underline decoration-blue decoration-[3px] underline-offset-[10px] [text-decoration-skip-ink:none]">{hero.headline.accent}</span>
          </h1>
        </Rise>
        <Rise step={2}>
          <p className="max-w-[46ch] text-lg leading-relaxed">{hero.subline}</p>
        </Rise>
        <Rise step={3} className="flex flex-col gap-3 pt-2 sm:flex-row">
          <StartProject />
          <Button size="cta" variant="outline" render={<a href="#products" />} nativeButton={false}>
            {cta.viewWork}
          </Button>
        </Rise>
      </Container>
    </section>
  );
}
