import { ArrowUpRightIcon } from "lucide-react";
import { Container, Surface } from "@/components/panel";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { clientWork, type ClientProject } from "@/content/site";

/** Smaller grid than the products: client, type and one line each. */
export function ClientWork() {
  return (
    <section id="work" className="border-t border-border py-32 lg:py-44">
      <Container className="flex flex-col gap-16">
        <Reveal>
          <SectionHeading eyebrow={clientWork.eyebrow} title={clientWork.headline} />
        </Reveal>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clientWork.items.map((item: ClientProject) => (
            <li key={item.id} className="flex">
              <Surface className="flex w-full flex-col gap-6">
                {/* PLACEHOLDER thumbnail: swap for a real screenshot. */}
                <div aria-hidden className="grid aspect-[16/10] place-items-center rounded-[8px] border border-border bg-background">
                  <span className="text-lg font-semibold tracking-tight text-muted-foreground">{item.client}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-mono text-[13px] tracking-widest text-muted-foreground uppercase">{item.kind}</p>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-primary">
                        {item.client}
                        <ArrowUpRightIcon aria-hidden className="size-4" />
                      </a>
                    ) : (
                      item.client
                    )}
                  </h3>
                  <p className="text-muted-foreground">{item.summary}</p>
                </div>
              </Surface>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
