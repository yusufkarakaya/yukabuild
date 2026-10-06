import {
  LayoutGridIcon,
  LayoutTemplateIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
  TrendingUpIcon,
  WrenchIcon,
  type LucideIcon,
} from "lucide-react";
import { Container, Surface } from "@/components/panel";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { build } from "@/content/site";

type ServiceId = (typeof build.groups)[number]["items"][number]["id"];

const icons: Record<ServiceId, LucideIcon> = {
  web: LayoutGridIcon,
  mobile: SmartphoneIcon,
  cms: LayoutTemplateIcon,
  engineering: WrenchIcon,
  maintenance: ShieldCheckIcon,
  seo: TrendingUpIcon,
};

/**
 * Six cards in two rows: what gets built, then what keeps it running and found.
 * Numbering runs across both rows so the two halves read as one list.
 */
export function Services() {
  return (
    <section id="services" className="border-t border-border py-24">
      <Container className="flex flex-col gap-8">
        <Reveal>
          <SectionHeading eyebrow={build.eyebrow} title={build.headline} description={build.description} />
        </Reveal>
        {build.groups.map((group, groupIndex) => (
          <div key={group.id} className="flex flex-col gap-4">
            <Reveal className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
              <h3 className="font-mono text-sm font-medium text-blue">{group.label}</h3>
              <p className="text-sm text-muted-foreground">{group.summary}</p>
            </Reveal>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {group.items.map((item, index) => {
                const Icon = icons[item.id];
                const number = groupIndex * build.groups[0].items.length + index + 1;
                return (
                  <li key={item.id}>
                    <Reveal className="h-full">
                      <Surface className="flex h-full flex-col gap-3 p-5">
                        <div className="flex items-start justify-between">
                          <Icon aria-hidden className="size-5 text-blue" />
                          <span className="font-mono text-xs text-muted-foreground">{String(number).padStart(2, "0")}</span>
                        </div>
                        <h4 className="pt-2 font-heading text-2xl font-semibold tracking-[-0.02em]">{item.title}</h4>
                        <p className="text-sm leading-relaxed">{item.body}</p>
                      </Surface>
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </Container>
    </section>
  );
}
