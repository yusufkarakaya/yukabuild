import { Logo } from "@/components/logo";
import { Container } from "@/components/panel";
import { footer, site, social } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const linkClass = "transition-colors hover:text-blue";

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-10 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-3">
          <Logo />
          <p className="text-sm text-muted-foreground">{footer.tagline}</p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:items-end">
          <ul className="flex flex-wrap gap-6 font-medium text-foreground">
            <li>
              <a href={`mailto:${site.email}`} className={linkClass}>
                {site.email}
              </a>
            </li>
            {social.links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p>
            © {year} {site.name} · {footer.photoCredit}
          </p>
        </div>
      </Container>
    </footer>
  );
}
