import { Container } from "@/components/panel";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { howItWorks } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * The four steps on the raised band. Each sits under a rule; the first rule is
 * blue because that is where every project starts.
 */
export function Process() {
  return (
    <section id="process" className="bg-card py-24">
      <Container className="flex flex-col gap-8">
        <Reveal>
          <SectionHeading eyebrow={howItWorks.eyebrow} title={howItWorks.headline} />
        </Reveal>
        <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-4">
          {howItWorks.steps.map((step, index) => (
            <li key={step.id}>
              <Reveal className={cn("flex flex-col gap-2 border-t-2 pt-3", index === 0 ? "border-blue" : "border-input")}>
                <p className="font-mono text-xs text-muted-foreground">{step.detail}</p>
                <h3 className="font-heading text-2xl font-semibold tracking-[-0.02em]">{step.title}</h3>
                <p className="text-sm leading-relaxed">{step.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
