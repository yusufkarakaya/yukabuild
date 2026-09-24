import { Container } from "@/components/panel";
import { site, social } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const linkClass = "transition-colors hover:text-foreground";

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-4 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {site.name}
        </p>
        <ul className="flex flex-wrap gap-6">
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
      </Container>
    </footer>
  );
}
