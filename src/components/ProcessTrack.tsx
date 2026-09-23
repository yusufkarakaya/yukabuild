import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { process, sections } from "@/content/site";

/**
 * Four steps on one track. A single rule runs through the numbered markers,
 * horizontally from lg up and vertically below it.
 */
export function ProcessTrack() {
  return (
    <section id="process" className="mx-auto flex max-w-6xl flex-col gap-14 px-4 py-24 sm:px-6 lg:py-32">
      <Reveal>
        <SectionHeading eyebrow={sections.process} title={process.headline} />
      </Reveal>

      <ol className="relative grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-8">
        <span aria-hidden className="absolute top-2 bottom-2 left-[0.3125rem] w-px bg-border lg:top-[0.3125rem] lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-auto" />
        {process.steps.map((step, index) => (
          <li key={step.id} className="relative pl-8 lg:pt-10 lg:pl-0">
            <span
              aria-hidden
              className="absolute top-1 left-0 size-2.5 border border-primary bg-background lg:top-0 data-[last=true]:bg-primary"
              data-last={index === process.steps.length - 1}
            />
            <Reveal className="flex flex-col gap-3">
              <span className="font-mono text-xs tracking-widest text-primary">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="text-xl font-semibold tracking-tight">{step.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{step.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
