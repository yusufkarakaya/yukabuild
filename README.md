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
| `src/content/site.ts` → `site.url` | The real domain. Nothing is registered yet. |
| `src/content/site.ts` → `site.email` | A real studio inbox. |
| `src/content/site.ts` → `social.links` | Every `href` is `"#"` until the accounts exist. |
| `src/content/site.ts` → `work.projects[1]` | The second product: real name, screenshots, store links. |
| `src/content/site.ts` → `about.media` | A real photo of you or the workspace. |

One image is a seeded `picsum.photos` placeholder (`yukabuild-founder-desk`). The One Sudoku screenshot, logo and store links are real.

The "Start a Project" form posts to [FormSubmit](https://formsubmit.co) at
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
  and friends, defined once in `globals.css` on `:root`, plus `navy` and `blue`.
- **Four colours, no more.** White ground, navy type, blue for signals (eyebrows,
  diagrams, icons, links, focus) and orange (`--primary`) for calls to action and
  the logo cursor. Muted text and borders are navy at low opacity, never a new hue.
- **Light only.** White background from top to bottom; the closing card is the
  one navy block. Photos are from Unsplash, stored in `public/images`.
- **Base UI composition.** Links styled as buttons use
  `<Button render={<a href="..." />} nativeButton={false}>`, not `asChild`.
- **Two typefaces, one family.** Geist Sans for the page, Geist Mono for labels,
  numbers, chips and the terminal. Both from the `geist` package.
- **The mark.** A two-stroke `y` in crop brackets, followed by a block cursor
  (`src/components/logo.tsx`, `src/app/icon.svg`). The brackets reappear as
  `CornerMarks` on every `Panel` (`src/components/panel.tsx`).
- **Brand-board sections.** Each section opens with a mono index and label
  (`sections` in `site.ts`). `bg-grid` is the construction grid behind the hero
  and contact, `scaffold` hatches anything still in build, and a faint grain
  sits over the whole page.
- **No em-dashes.** Anywhere. Use a hyphen, a comma or two sentences.
- **Motion is CSS only.** `.rise`, `.reveal` and `.cursor` in `globals.css`, all
  gated behind `prefers-reduced-motion: no-preference`.
