import { Container, Surface } from "@/components/panel";
import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { contact, site } from "@/content/site";

/** The close: one card with the question, the email as the action, and Instagram. */
export function Contact() {
  return (
    <section id="contact" className="pb-24">
      <Container>
        <Reveal>
          <Surface className="flex flex-col gap-8 p-8 sm:p-12 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-3">
              <Eyebrow>{contact.eyebrow}</Eyebrow>
              <h2 className="font-heading text-4xl leading-tight font-semibold tracking-[-0.02em]">{contact.headline}</h2>
              <p className="max-w-[40ch] text-lg leading-relaxed">{contact.subline}</p>
            </div>
            <div className="flex flex-col items-start gap-5">
              <Button size="cta" render={<a href={`mailto:${site.email}`} />} nativeButton={false}>
                {site.email}
              </Button>
              <a
                href={contact.instagram.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold underline decoration-blue decoration-2 underline-offset-4 transition-colors hover:text-blue"
              >
                {contact.instagram.label}
              </a>
            </div>
          </Surface>
        </Reveal>
      </Container>
    </section>
  );
}
