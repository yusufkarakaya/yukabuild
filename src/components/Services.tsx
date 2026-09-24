import { Container } from "@/components/panel";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { build } from "@/content/site";

/** Three columns, split by thin rules. What gets built, not what it is built with. */
export function Services() {
  return (
    <section id="services" className="border-t border-border py-32 lg:py-44">
      <Container className="flex flex-col gap-16">
        <Reveal>
          <SectionHeading eyebrow={build.eyebrow} title={build.headline} />
        </Reveal>
        <ul className="grid grid-cols-1 border-t border-border md:grid-cols-3">
          {build.items.map((item, index) => (
            <li
              key={item.id}
              className="flex flex-col gap-4 border-b border-border py-10 md:border-b-0 md:px-10 md:first:pl-0 md:last:pr-0 md:not-first:border-l"
            >
              <span className="font-mono text-[13px] text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="text-3xl font-semibold tracking-[-0.03em]">{item.title}</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
