"use client";

import { useState } from "react";
import { CheckIcon } from "lucide-react";
import { Container } from "@/components/panel";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StartProject } from "@/components/StartProject";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { picker } from "@/content/site";

/**
 * The band between the hero and the products: pick a kind of project, and the
 * panel shows what you get and the stack. Its button opens the project form
 * with that kind already ticked.
 */
export function ProjectPicker() {
  const [kind, setKind] = useState<string>(picker.options[1].kind);
  const index = picker.options.findIndex((option) => option.kind === kind);
  const option = picker.options[index];

  return (
    <section aria-labelledby="picker-heading" className="border-y border-border bg-card py-20">
      <Container>
        <Reveal className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <div className="flex flex-col gap-8 md:col-span-5">
            <SectionHeading eyebrow={picker.eyebrow} title={picker.headline} description={picker.description} />
            <ToggleGroup
              value={[kind]}
              // Single choice that can't be cleared: ignore the click that would empty it.
              onValueChange={(value) => value[0] && setKind(value[0])}
              aria-label={picker.headline}
              className="w-full flex-wrap"
            >
              {picker.options.map((item) => (
                <ToggleGroupItem
                  key={item.kind}
                  value={item.kind}
                  className="h-9 rounded-full border border-input px-4 text-foreground/80 hover:border-foreground/40 aria-pressed:border-blue aria-pressed:bg-blue aria-pressed:text-primary-foreground"
                >
                  {item.kind}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>

          <div aria-live="polite" className="md:col-span-7">
            {/* Keyed on the kind so each switch replays the entry animation. */}
            <div
              key={option.kind}
              className="flex h-full flex-col gap-6 rounded-xl border border-border bg-background p-6 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-300 sm:p-8"
            >
              <div className="flex flex-col gap-2">
                <p className="font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(2, "0")} / {String(picker.options.length).padStart(2, "0")}
                </p>
                <h3 className="font-heading text-3xl font-semibold tracking-[-0.02em]">{option.kind}</h3>
                <p className="leading-relaxed">{option.summary}</p>
              </div>

              <div className="flex flex-col gap-3 border-t border-border pt-5">
                <p className="text-[11px] font-semibold tracking-[0.12em] text-muted-foreground uppercase">{picker.deliverablesLabel}</p>
                <ul className="flex flex-col gap-2.5">
                  {option.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <CheckIcon aria-hidden className="mt-0.5 size-4 shrink-0 text-mint" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-[11px] font-semibold tracking-[0.12em] text-muted-foreground uppercase">{picker.stackLabel}</p>
                <ul className="flex flex-wrap gap-2">
                  {option.stack.map((item) => (
                    <li key={item} className="rounded-md border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <StartProject kind={option.kind} label={option.action} className="mt-auto self-start" />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
