import { Container } from "@/components/panel";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { howItWorks } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * The four steps as one connected line: blue numbered nodes on a blue rule,
 * the last node orange because that is where the product is live. The rule
 * runs across on desktop and down the left edge on mobile.
 */
export function Process() {
  const last = howItWorks.steps.length - 1;

  return (
    <section id="process" className="border-y border-border py-28 lg:py-40">
      <Container className="flex flex-col gap-16">
        <Reveal>
          <SectionHeading eyebrow={howItWorks.eyebrow} title={howItWorks.headline} description={howItWorks.description} />
        </Reveal>
        <ol className="relative grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
          {/* The connecting rule. */}
          <span aria-hidden className="absolute top-6 bottom-6 left-6 w-px bg-blue/30 md:right-[calc((100%-6rem)/4-1.5rem)] md:bottom-auto md:h-px md:w-auto" />
          {howItWorks.steps.map((step, index) => (
            <li key={step.id} className="relative flex gap-6 md:flex-col">
              <span
                className={cn(
                  "relative grid size-12 shrink-0 place-items-center rounded-full border-2 bg-background font-mono text-sm font-semibold",
                  index === last ? "border-primary text-primary" : "border-blue text-blue",
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <Reveal className="flex flex-col gap-3">
                <p className={cn("font-mono text-[13px] tracking-widest uppercase", index === last ? "text-primary" : "text-blue")}>
                  {step.detail}
                </p>
                <h3 className="text-2xl font-semibold tracking-[-0.03em]">{step.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{step.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
