import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { site } from "@/content/site";

/**
 * The yukabuild mark: a two-stroke y inside crop brackets, followed by a block
 * cursor. The brackets are the frame being built, the cursor says the build is
 * still running. The y uses currentColor, the brackets are blue, the cursor orange.
 */
export function LogoMark({ className, ...props }: ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={cn("size-7 shrink-0", className)} {...props}>
      <g fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="square">
        <path d="M5 9V5h4M23 5h4v4M5 23v4h4M27 23v4h-4" className="stroke-blue" />
        <path d="M10 9l6 9M22 9l-8 15" />
      </g>
      <rect x="18.5" y="19" width="4" height="5" className="fill-primary" />
    </svg>
  );
}

/** Mark plus wordmark, as used in the nav. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <LogoMark />
      <span className="font-heading text-lg font-semibold tracking-tight">{site.name}</span>
    </span>
  );
}
