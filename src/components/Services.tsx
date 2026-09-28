import Image from "next/image";
import { GlobeIcon, SmartphoneIcon, WrenchIcon, type LucideIcon } from "lucide-react";
import { Container } from "@/components/panel";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { build } from "@/content/site";

const icons: Record<(typeof build.items)[number]["id"], LucideIcon> = {
  web: GlobeIcon,
  mobile: SmartphoneIcon,
  engineering: WrenchIcon,
};

/** Three cards, each a photo over the offer. What gets built, not what it is built with. */
export function Services() {
  return (
    <section id="services" className="py-28 lg:py-40">
      <Container className="flex flex-col gap-16">
        <Reveal>
          <SectionHeading eyebrow={build.eyebrow} title={build.headline} description={build.description} />
        </Reveal>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {build.items.map((item, index) => {
            const Icon = icons[item.id];
            return (
              <li key={item.id}>
                <Reveal className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-[0_24px_48px_-24px_color-mix(in_srgb,var(--navy)_25%,transparent)]">
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      width={item.image.width}
                      height={item.image.height}
                      sizes="(min-width: 768px) 400px, 100vw"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-(--ease-out) group-hover:scale-[1.03]"
                    />
                    <span className="absolute top-4 left-4 rounded-md bg-background/95 px-2 py-1 font-mono text-[13px] font-medium text-blue">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex flex-col gap-4 p-8">
                    <span className="grid size-10 place-items-center rounded-lg bg-blue/10 text-blue">
                      <Icon aria-hidden className="size-5" />
                    </span>
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] lg:text-3xl">{item.title}</h3>
                    <p className="text-lg leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
