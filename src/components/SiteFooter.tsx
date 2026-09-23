import { LogoMark } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { footer, site } from "@/content/site";

/** Tagline and links, then the oversized wordmark with its mark as the closing image. */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="overflow-hidden">
      <Separator />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pt-16 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="flex max-w-[38ch] flex-col gap-3">
            <p className="font-heading text-2xl font-semibold tracking-tight">{site.tagline}</p>
            <p className="leading-relaxed text-muted-foreground">{footer.blurb}</p>
          </div>

          {footer.columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <ul className="flex flex-wrap gap-1">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Button
                      variant="ghost"
                      render={<a href={link.href} />}
                      nativeButton={false}
                      className="font-mono text-xs tracking-widest text-muted-foreground uppercase"
                    >
                      {link.label}
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div aria-hidden className="flex items-end gap-[0.04em] text-[clamp(3.5rem,15vw,13rem)] select-none">
          <p className="pb-[0.14em] font-heading leading-[0.8] font-semibold tracking-tighter">{site.name}</p>
          <LogoMark className="mb-[0.16em] size-[0.62em] shrink-0" />
        </div>
      </div>
      <Separator />
      <div className="mx-auto flex max-w-6xl justify-between gap-4 px-4 py-6 font-mono text-xs text-muted-foreground sm:px-6">
        <p>
          {year} {site.founder}
        </p>
        <p aria-hidden>{site.url.replace("https://", "")}</p>
      </div>
    </footer>
  );
}
