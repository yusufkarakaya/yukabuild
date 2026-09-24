"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { hero } from "@/content/site";

/** three.js only loads in the browser, in its own chunk, after the page is up. */
const HeroScene = dynamic(() => import("@/components/HeroScene").then((mod) => mod.HeroScene), { ssr: false });

/**
 * The one 3D object on the site. A fixed square frame holds the space, so the
 * hero never shifts. Until the GLB arrives (or if it is missing) the frame shows
 * a quiet placeholder.
 */
export function HeroObject({ className }: { className?: string }) {
  const [ready, setReady] = useState(false);

  return (
    <div role="img" aria-label={hero.modelLabel} className={cn("relative aspect-square w-full", className)}>
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 grid place-items-center rounded-[10px] border border-border transition-opacity duration-700",
          ready && "opacity-0",
        )}
      >
        <span className="font-mono text-[13px] tracking-widest text-muted-foreground uppercase">3D</span>
      </div>
      <HeroScene src={hero.model} onReady={() => setReady(true)} className={cn("transition-opacity duration-700", ready ? "opacity-100" : "opacity-0")} />
    </div>
  );
}
