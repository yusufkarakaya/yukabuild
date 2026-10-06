import { cn } from "@/lib/utils";

/** The small uppercase label above every section headline. */
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("text-[11px] font-semibold tracking-[0.12em] text-muted-foreground uppercase", className)}>{children}</p>;
}

/**
 * The one heading every section uses: a small eyebrow, a serif headline, then
 * an optional description.
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
    <div className={cn("flex flex-col gap-3", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-heading text-4xl leading-tight font-semibold tracking-[-0.02em] text-balance lg:text-[42px]">{title}</h2>
      {description ? <p className="max-w-[46ch] text-lg leading-relaxed text-foreground/90">{description}</p> : null}
    </div>
  );
}
