import { cn } from "@/lib/utils";

/**
 * The one heading every section uses: a small mono eyebrow, an oversized
 * headline, then an optional description.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <p className="flex items-center gap-3 font-mono text-[13px] tracking-widest text-blue uppercase">
        <span aria-hidden className="h-px w-8 bg-blue" />
        {eyebrow}
      </p>
      <h2 className="max-w-[16ch] text-5xl leading-[0.95] font-semibold tracking-[-0.035em] text-balance lg:text-7xl">{title}</h2>
      {description ? <p className="max-w-[56ch] text-lg leading-relaxed text-muted-foreground">{description}</p> : null}
    </div>
  );
}
