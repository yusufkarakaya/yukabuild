import Image from "next/image";
import { ArrowUpRightIcon } from "lucide-react";
import { Container, Surface } from "@/components/panel";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { products, type Product } from "@/content/site";

/** A shipped product: large screenshot on one side, the facts on the other. */
function CaseStudy({ product }: { product: Product }) {
  return (
    <Surface className="grid grid-cols-1 gap-12 p-8 lg:grid-cols-2 lg:gap-16 lg:p-16">
      <div className="flex flex-col justify-between gap-12">
        <div className="flex flex-col gap-6">
          {product.logo ? (
            <Image src={product.logo.src} alt={product.logo.alt} width={56} height={56} className="size-14 rounded-[10px]" />
          ) : null}
          <h3 className="text-4xl font-semibold tracking-[-0.03em] lg:text-5xl">{product.name}</h3>
          <p className="max-w-[40ch] text-lg leading-relaxed text-muted-foreground">{product.summary}</p>
        </div>

        <div className="flex flex-col gap-8">
          <dl className="grid grid-cols-1 border-t border-border sm:grid-cols-3">
            {product.meta.map((item) => (
              <div key={item.label} className="flex flex-col gap-1 border-b border-border py-4 sm:border-b-0">
                <dt className="font-mono text-[13px] tracking-widest text-muted-foreground uppercase">{item.label}</dt>
                <dd className="text-[15px]">{item.value}</dd>
              </div>
            ))}
          </dl>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {product.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[15px] transition-colors hover:text-primary"
                >
                  {link.label}
                  <ArrowUpRightIcon aria-hidden className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {product.media ? (
        <div className="flex justify-center rounded-[10px] border border-border bg-background px-8 pt-12 lg:px-12 lg:pt-16">
          {/* A plain device frame, cropped at the bottom edge of the panel. */}
          <div className="w-full max-w-[300px] overflow-hidden rounded-t-[12px] border border-b-0 border-border p-2 pb-0">
            <Image
              src={product.media.src}
              alt={product.media.alt}
              width={product.media.width}
              height={product.media.height}
              sizes="300px"
              className="aspect-[9/14] w-full rounded-t-[8px] object-cover object-top"
            />
          </div>
        </div>
      ) : null}
    </Surface>
  );
}

/** A product still in build: one quiet row, no screenshot it does not have yet. */
function InBuild({ product }: { product: Product }) {
  return (
    <Surface className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-semibold tracking-tight">{product.name}</h3>
        <p className="text-muted-foreground">{product.summary}</p>
      </div>
      <p className="flex items-center gap-2 font-mono text-[13px] tracking-widest text-muted-foreground uppercase">
        <span aria-hidden className="size-1.5 rounded-full bg-primary" />
        {products.inBuild}
      </p>
    </Surface>
  );
}

export function SelectedProducts() {
  return (
    <section id="products" className="py-32 lg:py-44">
      <Container className="flex flex-col gap-16">
        <Reveal>
          <SectionHeading eyebrow={products.eyebrow} title={products.headline} description={products.description} />
        </Reveal>
        <ul className="flex flex-col gap-6">
          {products.items.map((product: Product) => (
            <li key={product.id}>
              <Reveal>{product.links.length > 0 ? <CaseStudy product={product} /> : <InBuild product={product} />}</Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
