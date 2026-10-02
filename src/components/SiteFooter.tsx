import { Logo } from "@/components/logo";
import { Container } from "@/components/panel";
import { footer, site, social } from "@/content/site";

/** lucide dropped brand marks, so the Instagram glyph is drawn inline in the same stroke style. */
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const socialIcons = { Instagram: InstagramIcon };

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
          <ul className="flex flex-wrap items-center gap-6 font-medium text-foreground">
            <li>
              <a href={`mailto:${site.email}`} className={linkClass}>
                {site.email}
              </a>
            </li>
            {social.links.map((link) => {
              const Icon = socialIcons[link.label];
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className={`inline-flex items-center ${linkClass}`}
                  >
                    <Icon className="size-5" />
                  </a>
                </li>
              );
            })}
          </ul>
          <p>
            © {year} {site.name}
          </p>
        </div>
      </Container>
    </footer>
  );
}
