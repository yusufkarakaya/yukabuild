import Image from "next/image";
import { ArrowUpRightIcon } from "lucide-react";
import { Container, Surface } from "@/components/panel";
import { Reveal } from "@/components/reveal";
import { Eyebrow, SectionHeading } from "@/components/section-heading";
import { products } from "@/content/site";

/** The shipped app: screenshot on one side, status, facts and store links on the other. */
function LiveProduct() {
  const product = products.live;

  return (
    <Surface className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div className="flex justify-center overflow-hidden rounded-lg bg-muted px-8 pt-8">
        {/* A plain navy device frame, cropped at the bottom edge of the box. */}
        <div className="w-full max-w-[200px] overflow-hidden rounded-t-[24px] border-[5px] border-b-0 border-navy bg-navy">
          <Image
            src={product.media.src}
            alt={product.media.alt}
            width={product.media.width}
            height={product.media.height}
            sizes="200px"
            className="aspect-[9/14] w-full rounded-t-[19px] object-cover object-top"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between gap-8 py-1">
        <div className="flex flex-col gap-3">
          <p className="flex items-center gap-2.5 text-xs text-muted-foreground">
            <span className="rounded-full bg-mint px-2 py-0.5 text-[11px] font-bold tracking-wider text-navy uppercase">{product.status}</span>
            {product.meta}
          </p>
          <h3 className="font-heading text-3xl font-semibold tracking-[-0.02em]">{product.name}</h3>
          <p className="max-w-[44ch] leading-relaxed">{product.summary}</p>
          <ul className="flex flex-wrap gap-2 pt-1">
            {product.stack.map((tag) => (
              <li key={tag} className="rounded-md border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground">
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {product.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold underline decoration-blue decoration-2 underline-offset-4 transition-colors hover:text-blue"
              >
                {link.label}
                <ArrowUpRightIcon aria-hidden className="size-3.5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Surface>
  );
}

/** The next app, still in build: one quiet dashed row, no screenshot it does not have yet. */
function InProgress() {
  const { eyebrow, headline, aside } = products.inProgress;

  return (
    <div className="flex flex-col gap-3 rounded-xl border border-dashed border-input px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col gap-1">
        <Eyebrow className="text-[10px]">{eyebrow}</Eyebrow>
        <h3 className="font-heading text-xl font-semibold">{headline}</h3>
      </div>
      <p className="text-sm text-muted-foreground">{aside}</p>
    </div>
  );
}

export function SelectedProducts() {
  return (
    <section id="products" className="pt-10 pb-24">
      <Container className="flex flex-col gap-6">
        <Reveal>
          <SectionHeading eyebrow={products.eyebrow} title={products.headline} />
        </Reveal>
        <Reveal>
          <LiveProduct />
        </Reveal>
        <Reveal className="pt-2">
          <InProgress />
        </Reveal>
      </Container>
    </section>
  );
}
