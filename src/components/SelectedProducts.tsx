import Image from "next/image";
import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react";
import { Container, Surface } from "@/components/panel";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { cta, products, site, type Product } from "@/content/site";

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
                <dd className="text-[15px] font-medium">{item.value}</dd>
              </div>
            ))}
          </dl>
          <ul className="flex flex-wrap gap-2">
            {product.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-lg border border-border px-3 py-2 text-[15px] font-medium transition-colors hover:border-blue/40 hover:text-blue"
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
        <div className="relative isolate flex justify-center overflow-hidden rounded-xl bg-blue/5 px-8 pt-12 lg:px-12 lg:pt-16">
          <div aria-hidden className="blueprint-grid absolute inset-0 -z-10" />
          {/* A plain navy device frame, cropped at the bottom edge of the panel. */}
          <div className="w-full max-w-[300px] overflow-hidden rounded-t-[28px] border-[6px] border-b-0 border-navy bg-navy shadow-2xl">
            <Image
              src={product.media.src}
              alt={product.media.alt}
              width={product.media.width}
              height={product.media.height}
              sizes="300px"
              className="aspect-[9/14] w-full rounded-t-[22px] object-cover object-top"
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
    <Surface className="flex flex-col gap-4 border-dashed shadow-none sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-semibold tracking-tight">{product.name}</h3>
        <p className="text-muted-foreground">{product.summary}</p>
      </div>
      <p className="flex items-center gap-2 self-start rounded-full bg-primary/10 px-3 py-1.5 font-mono text-[13px] tracking-widest text-primary uppercase sm:self-auto">
        <span aria-hidden className="size-1.5 rounded-full bg-primary" />
        {products.inBuild}
      </p>
    </Surface>
  );
}

/** Closes the list: an open slot for the visitor's product, with a way to reach out. */
function BuildTogether() {
  return (
    <Surface className="relative isolate flex flex-col gap-8 overflow-hidden p-8 sm:flex-row sm:items-center sm:justify-between lg:p-12">
      <div aria-hidden className="blueprint-grid absolute inset-0 -z-10" />
      <div className="flex flex-col gap-3">
        <h3 className="text-3xl font-semibold tracking-[-0.03em] lg:text-4xl">{products.cta.headline}</h3>
        <p className="max-w-[48ch] text-lg leading-relaxed text-muted-foreground">{products.cta.subline}</p>
      </div>
      <Button size="cta" className="self-start sm:self-auto" render={<a href={`mailto:${site.email}`} />} nativeButton={false}>
        {cta.startProject}
        <ArrowRightIcon data-icon="inline-end" />
      </Button>
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
          <li>
            <Reveal>
              <BuildTogether />
            </Reveal>
          </li>
        </ul>
      </Container>
    </section>
  );
}
