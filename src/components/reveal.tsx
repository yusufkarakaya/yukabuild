import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Scroll entry. A plain element with a class: the animation lives in CSS and is
 * gated behind `prefers-reduced-motion: no-preference` and `@supports
 * (animation-timeline: view())`, so the content is visible with no script and
 * no animation support.
 */
export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("reveal", className)}>{children}</div>;
}

/**
 * Load-in for above-the-fold content, where a scroll timeline would never run.
 * `step` staggers the sequence.
 */
export function Rise({ children, step = 0, className }: { children: ReactNode; step?: number; className?: string }) {
  return (
    <div className={cn("rise", className)} style={{ "--rise-step": step } as CSSProperties}>
      {children}
    </div>
  );
}
