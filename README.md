# yukabuild

Studio site for yukabuild: client services (mobile apps, SaaS, web, CMS) and the
products the studio ships itself.

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build
pnpm typecheck
```

## Where things live

All visible copy and data are in **`src/content/site.ts`**. No component hardcodes
text, so editing that one file changes the site, and translating it translates the
site. The design tokens are in **`src/app/globals.css`**.

## What still needs your input

| Where | What to replace |
|---|---|
| `src/content/site.ts` → `products.live.meta` | Confirm the OneSudoku launch year. |
| `src/content/site.ts` → `products.inProgress` | Becomes a second product card when app two ships. |

The OneSudoku screenshot and store links are real.

The "Start a project" form posts to [FormSubmit](https://formsubmit.co) at
`site.email`; there is no account or key. The first submission sends that inbox
an activation email, and until it is confirmed the form shows its error state
with the email address rather than looking like it sent. Changing `site.email`
means activating the new inbox the same way.

## Measured

Lighthouse on the production build, desktop preset: 100 performance, 100
accessibility, 100 best practices, 100 SEO. LCP 0.4s, CLS 0, TBT 0ms.

## Design rules this site is built to

The UI is built only from **shadcn/ui** (`base-nova` style, Base UI primitives,
lucide icons). Components live in `src/components/ui/` and are added with
`pnpm dlx shadcn@latest add <name>`. Do not hand-edit them for one-off styling.

- **Semantic tokens only.** `bg-background`, `text-muted-foreground`, `bg-primary`
  and friends, defined once in `globals.css` on `:root`, plus `navy`, `blue` and `mint`.
- **Four colours, no more.** Dark navy `#101828` ground, off-white `#F9FAFB` type,
  electric blue `#2970FF` (`--primary`) for actions, links, icons and focus, and
  mint `#12B76A` for the "Live" status, the picker's ticks and the logo's period. Raised surfaces,
  muted text and borders are off-white mixed into navy, never a new hue. The
  form's error red is the only exception.
- **Dark only.** `<html>` always carries the `dark` class. No photos.
- **Base UI composition.** Links styled as buttons use
  `<Button render={<a href="..." />} nativeButton={false}>`, not `asChild`.
- **Three typefaces.** Fraunces for headings and the wordmark, Geist Sans for
  the page, Geist Mono for labels, numbers and chips.
- **The mark.** The `yukabuild.` wordmark in Fraunces bold: "yuka" blue, "build"
  off-white, the period mint (`src/components/logo.tsx`). The favicon is the same
  `y.` on navy (`src/app/icon.svg`).
- **No em-dashes.** Anywhere. Use a hyphen, a comma or two sentences.
- **Motion is CSS only.** `.rise`, `.reveal` and `.scroll-veil` in `globals.css`, all
  gated behind `prefers-reduced-motion: no-preference`.
