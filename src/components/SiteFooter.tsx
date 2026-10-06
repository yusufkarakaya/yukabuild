import { Logo } from "@/components/logo";
import { Container } from "@/components/panel";
import { footer, site } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <Logo />
          <p className="text-xs text-muted-foreground">
            © {year} {site.name} · {footer.location}
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
          {footer.links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="transition-colors hover:text-blue">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
