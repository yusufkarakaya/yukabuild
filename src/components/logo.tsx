import { cn } from "@/lib/utils";

/**
 * The yukabuild wordmark, set in Fraunces bold: "yuka" is blue, "build" takes
 * the off-white foreground, and the closing period is mint.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-label="yukabuild"
      className={cn("font-logo text-xl font-bold tracking-tight text-foreground", className)}
    >
      <span aria-hidden className="text-blue">yuka</span>
      <span aria-hidden>build</span>
      <span aria-hidden className="text-mint">.</span>
    </span>
  );
}
