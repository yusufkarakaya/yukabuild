import type { ComponentProps, ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

/**
 * Crop brackets on the four corners of a panel, borrowed from the logo. Pure
 * decoration, so they are hidden from assistive tech and ignore the pointer.
 */
export function CornerMarks({ className }: { className?: string }) {
  const corner = "pointer-events-none absolute size-2.5 border-foreground/30";
  return (
    // Absolute, so the marks never take a slot in the card's flex gap.
    <span aria-hidden className={cn("pointer-events-none absolute inset-0 z-10", className)}>
      <span className={cn(corner, "top-2 left-2 border-t border-l")} />
      <span className={cn(corner, "top-2 right-2 border-t border-r")} />
      <span className={cn(corner, "bottom-2 left-2 border-b border-l")} />
      <span className={cn(corner, "right-2 bottom-2 border-r border-b")} />
    </span>
  );
}

/**
 * The brand-board panel: a shadcn Card with crop marks and an optional mono
 * label and page number along the top edge.
 */
export function Panel({
  label,
  index,
  className,
  children,
  ...props
}: ComponentProps<typeof Card> & { label?: ReactNode; index?: string }) {
  return (
    <Card className={cn("relative", className)} {...props}>
      <CornerMarks />
      {label || index ? (
        <div className="flex items-center justify-between gap-4 px-(--card-spacing) font-mono text-[0.7rem] tracking-widest text-muted-foreground uppercase">
          <span>{label}</span>
          {index ? <span aria-hidden>{index}</span> : null}
        </div>
      ) : null}
      {children}
    </Card>
  );
}
