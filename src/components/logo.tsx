import { cn } from "@/lib/utils";

/**
 * The yukabuild wordmark, set in Fraunces bold: "yuka" and the closing period
 * are orange, "build" takes the navy foreground.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-label="yukabuild"
      className={cn("font-logo text-xl font-bold tracking-tight text-foreground", className)}
    >
      <span aria-hidden className="text-primary">yuka</span>
      <span aria-hidden>build</span>
      <span aria-hidden className="text-primary">.</span>
    </span>
  );
}
