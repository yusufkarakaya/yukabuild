import { cn } from "@/lib/utils";

/**
 * The one heading style every section uses: a mono index and label on a thin
 * rule, then the headline, then an optional lead paragraph.
 */
export function SectionHeading({
  title,
  description,
  eyebrow,
  className,
}: {
  title: string;
  description?: string;
  eyebrow?: { index: string; label: string };
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-5", className)}>
      {eyebrow ? (
        <p className="flex items-center gap-3 font-mono text-xs tracking-widest text-muted-foreground uppercase">
          <span aria-hidden className="text-primary">
            {eyebrow.index}
          </span>
          <span aria-hidden className="h-px w-8 bg-border" />
          {eyebrow.label}
        </p>
      ) : null}
      <h2 className="max-w-[18ch] font-heading text-3xl leading-[1.05] font-semibold tracking-tighter text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? <p className="max-w-[56ch] text-lg leading-relaxed text-muted-foreground">{description}</p> : null}
    </div>
  );
}
