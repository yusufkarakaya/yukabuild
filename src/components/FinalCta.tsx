import { Container } from "@/components/panel";
import { Reveal } from "@/components/reveal";
import { finalCta, site } from "@/content/site";

/** The close: one huge question, the email, and who is behind the studio. */
export function FinalCta() {
  return (
    <section id="contact" className="py-32 lg:py-52">
      <Container className="flex flex-col gap-12">
        <Reveal>
          <h2 className="max-w-[12ch] text-6xl leading-[0.9] font-semibold tracking-[-0.05em] text-balance sm:text-8xl lg:text-[120px]">
            {finalCta.headline}
          </h2>
        </Reveal>
        <Reveal>
          <a
            href={`mailto:${site.email}`}
            className="text-2xl font-medium tracking-tight underline decoration-border decoration-1 underline-offset-8 transition-colors hover:text-primary hover:decoration-primary sm:text-4xl lg:text-5xl"
          >
            {site.email}
          </a>
        </Reveal>
        <Reveal>
          <p id="about" className="max-w-[56ch] scroll-mt-40 text-lg leading-relaxed text-muted-foreground">
            {finalCta.about}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
