import { cn } from "@/lib/utils";

/**
 * The yukabuild wordmark: lowercase text only, no mark. "yu" is blue, "ka" and
 * the closing period are orange, "build" takes the navy foreground.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-label="yukabuild"
      className={cn("font-heading text-lg font-semibold tracking-tight text-foreground", className)}
    >
      <span aria-hidden className="text-blue">yu</span>
      <span aria-hidden className="text-primary">ka</span>
      <span aria-hidden>build</span>
      <span aria-hidden className="text-primary">.</span>
    </span>
  );
}
