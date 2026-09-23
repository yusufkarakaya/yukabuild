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
| `.env.local` → `NEXT_PUBLIC_FORM_ENDPOINT` | A Formspree or Web3Forms endpoint. See `.env.example`. |

One image is a seeded `picsum.photos` placeholder (`yukabuild-founder-desk`). The One Sudoku screenshot, logo and store links are real.

Without `NEXT_PUBLIC_FORM_ENDPOINT` the contact form shows its error state and
points at `site.email`. That is deliberate: a missing key fails visibly rather
than looking like it sent.

## Measured

Lighthouse on the production build, desktop preset: 100 performance, 100
accessibility, 100 best practices, 100 SEO. LCP 0.4s, CLS 0, TBT 0ms.

## Design rules this site is built to

The UI is built only from **shadcn/ui** (`base-nova` style, Base UI primitives,
lucide icons). Components live in `src/components/ui/` and are added with
`pnpm dlx shadcn@latest add <name>`. Do not hand-edit them for one-off styling.

- **Semantic tokens only.** `bg-background`, `text-muted-foreground`, `bg-primary`
  and friends, defined in `globals.css` for `:root` and `.dark`. No raw colours.
- **One brand colour.** "Build orange" is `--primary`, darker in light mode for
  contrast. It is the cursor at the end of the logo; nothing else competes with it.
  Everything else is a warm near-black / off-white neutral scale.
- **Dark first.** `next-themes` defaults to dark; light and system stay in the
  toggle in the nav.
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
