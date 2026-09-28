import Image from "next/image";
import { RocketIcon } from "lucide-react";
import { hero, images } from "@/content/site";

/**
 * The hero photo with two small product cards floating over its edges: a
 * deploy that just went out, and the platforms it went to. The cards are
 * decoration, so they are hidden from assistive tech; the photo carries the alt.
 */
export function HeroVisual() {
  const { build, platforms } = hero.cards;

  return (
    <div className="relative px-4 pb-10 sm:px-0">
      {/* A blue offset frame behind the photo, like a drafting sheet. */}
      <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border border-blue/30 bg-blue/5" />
      <Image
        src={images.hero.src}
        alt={images.hero.alt}
        width={images.hero.width}
        height={images.hero.height}
        sizes="(min-width: 1024px) 480px, 100vw"
        fetchPriority="high"
        loading="eager"
        className="relative aspect-[4/5] w-full rounded-2xl object-cover shadow-[0_30px_60px_-30px_color-mix(in_srgb,var(--navy)_45%,transparent)]"
      />

      <div
        aria-hidden
        className="absolute top-8 -left-2 flex items-center gap-3 rounded-xl border border-border bg-background/95 p-3 pr-5 shadow-lg backdrop-blur sm:-left-10"
      >
        <span className="grid size-10 place-items-center rounded-lg bg-primary text-primary-foreground">
          <RocketIcon className="size-5" />
        </span>
        <span className="flex flex-col">
          <span className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">{build.label}</span>
          <span className="text-sm font-semibold">{build.value}</span>
        </span>
      </div>

      <div
        aria-hidden
        className="absolute right-0 bottom-0 flex flex-col gap-2 rounded-xl border border-border bg-background/95 p-4 shadow-lg backdrop-blur sm:-right-8"
      >
        <span className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">{platforms.label}</span>
        <span className="flex gap-2">
          {platforms.items.map((item) => (
            <span key={item} className="rounded-md bg-blue/10 px-2.5 py-1 text-sm font-medium text-blue">
              {item}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
