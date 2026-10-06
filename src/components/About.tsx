import { Container } from "@/components/panel";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { about } from "@/content/site";

/** Who is behind the studio: heading on the left, the story and the stack on the right. */
export function About() {
  return (
    <section id="about" className="py-24">
      <Container>
        <Reveal className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <SectionHeading eyebrow={about.eyebrow} title={about.headline} className="md:col-span-5" />
          <div className="flex flex-col gap-4 md:col-span-7">
            <p className="text-lg leading-relaxed">{about.lead}</p>
            <p className="text-sm leading-relaxed">{about.body}</p>
            <ul className="flex flex-wrap gap-2 pt-2">
              {about.stack.map((item) => (
                <li key={item} className="rounded-md border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
