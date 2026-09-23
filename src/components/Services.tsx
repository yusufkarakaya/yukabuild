import { GlobeIcon, LayersIcon, PenLineIcon, SmartphoneIcon } from "lucide-react";
import { Panel } from "@/components/panel";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { sections, services } from "@/content/site";

const icons = {
  mobile: SmartphoneIcon,
  saas: LayersIcon,
  web: GlobeIcon,
  cms: PenLineIcon,
} as const;

/** Four services as a 2x2 board of panels. One column below md, in reading order. */
export function Services() {
  return (
    <section id="services" className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-24 sm:px-6 lg:py-32">
      <Reveal>
        <SectionHeading eyebrow={sections.services} title={services.headline} description={services.intro} />
      </Reveal>

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {services.items.map((item, index) => {
          const Icon = icons[item.icon];
          return (
            <li key={item.id} className="flex">
              <Reveal className="flex w-full">
                <Panel
                  label={<Icon aria-hidden className="size-5 text-primary" />}
                  index={String(index + 1).padStart(2, "0")}
                  className="w-full gap-6 pt-5 [--card-spacing:--spacing(6)]"
                >
                  <CardHeader className="gap-3">
                    <CardTitle className="text-2xl font-semibold tracking-tight">{item.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{item.body}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <ul className="flex flex-wrap gap-1.5">
                      {item.points.map((point) => (
                        <li key={point}>
                          <Badge variant="outline" className="rounded-sm font-mono text-muted-foreground">
                            {point}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Panel>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
