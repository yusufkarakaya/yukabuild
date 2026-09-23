import Image from "next/image";
import { LogoMark } from "@/components/logo";
import { Panel } from "@/components/panel";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { about, sections, site } from "@/content/site";

/**
 * Editorial column with a sticky portrait. The photo is greyscale under a
 * bottom fade, so a placeholder does not bring its own colours, and the brand
 * mark and tagline sit on it like a poster. Collapses to one column below lg.
 */
export function Founder() {
  return (
    <section id="about" className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 py-24 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:py-32">
      <Reveal className="lg:col-span-5">
        <Panel className="py-0 lg:sticky lg:top-28">
          <AspectRatio ratio={4 / 5}>
            <Image
              src={about.media.src}
              alt={about.media.alt}
              fill
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover contrast-125 grayscale"
            />
            <div aria-hidden className="absolute inset-0 bg-linear-to-t from-background via-background/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
              <p className="font-heading text-3xl leading-none font-semibold tracking-tighter">{site.tagline}</p>
              <LogoMark aria-hidden className="size-9" />
            </div>
          </AspectRatio>
        </Panel>
      </Reveal>

      <div className="flex flex-col gap-6 lg:col-span-7">
        <Reveal>
          <SectionHeading eyebrow={sections.about} title={about.headline} />
        </Reveal>

        {about.body.map((paragraph, index) => (
          <Reveal key={paragraph.slice(0, 24)}>
            <p
              className={cn(
                "max-w-[60ch] leading-relaxed",
                index === 0 ? "text-xl text-foreground lg:text-2xl" : "text-lg text-muted-foreground",
              )}
            >
              {paragraph}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
