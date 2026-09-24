/**
 * Every visible string and data record on the site lives here.
 *
 * Nothing in src/components hardcodes copy. Editing this file changes the page,
 * and translating this file translates the site.
 *
 * Records marked PLACEHOLDER are invented and must be replaced before launch.
 */

export const site = {
  name: "YukaBuild",
  url: "https://yukabuild.com",
  founder: "Yusuf Karakaya",
  email: "hello@yukabuild.com",
  title: "Software products, built from idea to production",
  description:
    "YukaBuild is the studio of Yusuf Karakaya: full-stack development, mobile apps and SaaS products, built from idea to production.",
} as const;

/**
 * One label per intent, reused verbatim wherever the action appears. Two
 * different labels for the same action reads as two different actions.
 */
export const cta = {
  viewWork: "View Work",
  startProject: "Start a Project",
  letsBuild: "Let's Build",
} as const;

export const nav = {
  openMenu: "Open menu",
  menuTitle: "Menu",
  links: [
    { label: "Work", href: "#work" },
    { label: "Products", href: "#products" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
  ],
} as const;

export const hero = {
  headline: "Software products, built from idea to production.",
  subline: "Full-stack development, mobile apps and SaaS products.",
  /** The one Blender object on the site. Exported from Blender as GLB. */
  model: "/models/yukabuild.glb",
  modelLabel: "YukaBuild 3D mark",
} as const;

/** Real URLs from the shipped project. Do not invent replacements for these. */
export const oneSudoku = {
  site: "https://www.onesudoku.co",
  appStore: "https://apps.apple.com/us/app/one-sudoku-game/id6775040739",
  playStore: "https://play.google.com/store/apps/details?id=co.onesudoku.game",
} as const;

export type Product = {
  id: string;
  name: string;
  summary: string;
  meta: readonly { label: string; value: string }[];
  logo?: { src: string; alt: string };
  /** A phone screenshot, shown inside a plain device frame. */
  media?: { src: string; width: number; height: number; alt: string };
  links: readonly { label: string; href: string }[];
};

export const products = {
  eyebrow: "Selected Products",
  headline: "Products we ship ourselves.",
  description: "Our own apps, built and run end to end. The same process goes into client work.",
  inBuild: "In build",
  items: [
    {
      id: "one-sudoku",
      name: "One Sudoku",
      summary: "A free sudoku game for iPhone, iPad and Android, with a daily challenge and offline play.",
      meta: [
        { label: "Platform", value: "iOS · Android" },
        { label: "Stack", value: "React Native · Expo" },
        /** PLACEHOLDER: confirm the launch year. */
        { label: "Year", value: "2026" },
      ],
      logo: { src: "/one-sudoku-logo.png", alt: "One Sudoku app icon" },
      media: {
        src: "/one-sudoku-home.webp",
        width: 720,
        height: 1516,
        alt: "The One Sudoku home screen on a phone.",
      },
      links: [
        { label: "App Store", href: oneSudoku.appStore },
        { label: "Google Play", href: oneSudoku.playStore },
        { label: "Website", href: oneSudoku.site },
      ],
    },
    {
      id: "next-product",
      /** PLACEHOLDER: real name, screenshot and links go here when it ships. */
      name: "Next product",
      summary: "The second YukaBuild product is in build. It lands here when it ships.",
      meta: [],
      links: [],
    },
  ],
} as const satisfies {
  eyebrow: string;
  headline: string;
  description: string;
  inBuild: string;
  items: readonly Product[];
};

export const build = {
  eyebrow: "What I Build",
  headline: "Products, not tech stacks.",
  items: [
    {
      id: "web",
      title: "Web Products",
      body: "SaaS platforms, dashboards and product sites. Accounts, billing and the admin side included, built to be charged for rather than demoed.",
    },
    {
      id: "mobile",
      title: "Mobile Apps",
      body: "iOS and Android apps from one codebase, taken through store review to a live release, and kept running after launch.",
    },
    {
      id: "engineering",
      title: "Product Engineering",
      body: "Joining an existing product to ship features, fix what slows the team down and get a release out the door.",
    },
  ],
} as const;

export type ClientProject = {
  id: string;
  client: string;
  kind: string;
  summary: string;
  href?: string;
};

/** PLACEHOLDER: every entry except the RooneyPartners name needs real details. */
export const clientWork = {
  eyebrow: "Selected Client Work",
  headline: "Built for clients.",
  items: [
    { id: "rooney", client: "RooneyPartners", kind: "Website", summary: "PLACEHOLDER: one line about the project." },
    { id: "webflow", client: "Client name", kind: "Webflow", summary: "PLACEHOLDER: one line about the project." },
    { id: "wordpress", client: "Client name", kind: "WordPress", summary: "PLACEHOLDER: one line about the project." },
    { id: "ecommerce", client: "Client name", kind: "E-commerce", summary: "PLACEHOLDER: one line about the project." },
    { id: "saas", client: "Client name", kind: "SaaS", summary: "PLACEHOLDER: one line about the project." },
    { id: "mobile", client: "Client name", kind: "Mobile app", summary: "PLACEHOLDER: one line about the project." },
  ],
} as const satisfies { eyebrow: string; headline: string; items: readonly ClientProject[] };

export const stack = {
  label: "Capabilities",
  items: ["React", "Next.js", "React Native", "Node.js", "TypeScript", "PostgreSQL", "Firebase", "Cloudflare"],
} as const;

export const finalCta = {
  headline: "Have something to build?",
  about:
    "YukaBuild is the studio of Yusuf Karakaya. The person you talk to on the first call is the person writing the code and shipping the release.",
} as const;

/** PLACEHOLDER hrefs. The accounts do not exist yet. */
export const social = {
  links: [
    { label: "X", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
} as const;
