import { stack } from "@/content/site";

/**
 * The stack as one sliding mono line. The list is rendered twice and the track
 * slides by half its width, so the loop has no seam. The second copy is hidden
 * from assistive tech and dropped entirely under reduced motion.
 */
export function Stack() {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-10 pr-10">
      {stack.items.map((item) => (
        <li key={item} className="flex items-center gap-10 font-mono text-[15px] font-medium whitespace-nowrap">
          {item}
          <span aria-hidden className="size-1.5 rounded-full bg-blue" />
        </li>
      ))}
    </ul>
  );

  return (
    <section
      aria-label={stack.label}
      className="marquee overflow-hidden py-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
    >
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}
