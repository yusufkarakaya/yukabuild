/**
 * Every visible string and data record on the site lives here.
 *
 * Nothing in src/components hardcodes copy. Editing this file changes the page,
 * and translating this file translates the site.
 *
 * Records marked PLACEHOLDER are invented and must be replaced before launch.
 */

export const site = {
  /** The one-line brand promise. Footer and about panel. */
  tagline: "Built end to end.",
  name: "yukabuild",
  /** PLACEHOLDER: no domain is registered yet. */
  url: "https://yukabuild.com",
  founder: "Yusuf Karakaya",
  /** PLACEHOLDER: swap for a dedicated studio inbox. */
  email: "hello@yukabuild.com",
  description:
    "yukabuild is the one-person studio of Yusuf Karakaya, building mobile apps, SaaS platforms, web projects and CMS work, and shipping its own products.",
} as const;

/**
 * One label per intent, reused verbatim in the nav, the hero, the work grid
 * and the footer. Two different labels for the same action reads as two
 * different actions.
 */
export const cta = {
  contact: "Start a project",
  work: "See the work",
} as const;

export const nav = {
  openMenu: "Open menu",
  menuTitle: "Menu",
  links: [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
  ],
} as const;

export const hero = {
  /** Short line above the headline. */
  eyebrow: "Taking on new projects",
  headline: "I build apps, SaaS and websites.",
  /** 19 words. The cap is 20. */
  subtext:
    "yukabuild is a one-person studio. I take your product from first sketch to launch, then keep it running.",
  /**
   * The terminal panel next to the headline. Not a real command: it is the
   * process below, told the way a build log would tell it.
   */
  terminal: {
    title: "~/yukabuild",
    command: 'yukabuild new "your product"',
    lines: [
      { label: "scope", value: "written, priced, approved" },
      { label: "design", value: "real screens, before code" },
      { label: "build", value: "a working slice every week" },
      { label: "ship", value: "live, and kept running" },
    ],
    status: "Ready when you are",
  },
  stackLabel: "Stack",
} as const;

/**
 * Mono labels above each section heading, numbered in page order. The number
 * is decoration, the label is what a screen reader hears.
 */
export const sections = {
  services: { index: "01", label: "Services" },
  process: { index: "02", label: "Process" },
  work: { index: "03", label: "Products" },
  about: { index: "04", label: "Studio" },
  contact: { index: "05", label: "Contact" },
} as const;

export const theme = {
  toggle: "Toggle theme",
  options: [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
    { value: "system", label: "System" },
  ],
} as const;

/**
 * The chips under the hero terminal. Only tools the services below already
 * name. Edit to match the real stack.
 */
export const stack = [
  "React Native",
  "iOS",
  "Android",
  "Next.js",
  "TypeScript",
  "Postgres",
  "Auth and billing",
  "Headless CMS",
] as const;

/** Real URLs from the shipped project. Do not invent replacements for these. */
export const oneSudoku = {
  site: "https://www.onesudoku.co",
  appStore: "https://apps.apple.com/us/app/one-sudoku-game/id6775040739",
  playStore: "https://play.google.com/store/apps/details?id=co.onesudoku.game",
} as const;

export type Project = {
  id: string;
  name: string;
  summary: string;
  tags: readonly string[];
  /** Square app icon. Omitted until the product has one. */
  logo?: { src: string; alt: string };
  /** A phone screenshot, shown cropped inside the product panel. */
  media?: { src: string; width: number; height: number; alt: string };
  links: readonly { label: string; href: string }[];
};

export const work = {
  headline: "Products the studio ships itself.",
  intro: "Between client projects I build and run my own apps. They are where new tools get tested before they go near yours.",
  inBuild: "In build",
  projects: [
    {
      id: "one-sudoku",
      name: "One Sudoku",
      summary: "A free sudoku game for iPhone, iPad and Android, with a daily challenge and offline play.",
      tags: ["React Native", "iOS", "Android"],
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
      /** PLACEHOLDER: real name, icon and links go here when it ships. */
      name: "Next product",
      summary: "The second yukabuild app is in build. It lands here when it ships.",
      tags: ["In build"],
      links: [],
    },
  ],
} as const satisfies {
  headline: string;
  intro: string;
  inBuild: string;
  projects: readonly Project[];
};

export const services = {
  headline: "What I build for clients.",
  intro:
    "Four things, done end to end. I write the code, ship the release and stay on for whatever breaks.",
  items: [
    {
      id: "mobile",
      icon: "mobile",
      title: "Mobile apps",
      body: "iOS and Android from one React Native codebase. I handle the build, the store listings and the review process, through to a live release.",
      points: ["React Native", "App Store and Play Store", "Offline first"],
    },
    {
      id: "saas",
      icon: "saas",
      title: "SaaS platforms",
      body: "Full stack product builds. Accounts, billing, dashboard and API, put together as something you can actually charge for rather than a demo.",
      points: ["Next.js", "Postgres", "Auth and billing"],
    },
    {
      id: "web",
      icon: "web",
      title: "Web projects",
      body: "Marketing sites, landing pages and product sites that load fast, read well on a phone and give search engines something to work with.",
      points: ["Next.js", "SEO groundwork", "Analytics"],
    },
    {
      id: "cms",
      icon: "cms",
      title: "CMS setup",
      body: "Content your team edits without opening a pull request. Schema, editor and preview, then I hand you the keys.",
      points: ["Headless CMS", "Editor training", "Preview builds"],
    },
  ],
} as const;

/**
 * Verb first. No "Stage 1 / Step 2" prefixes: the content is the label.
 */
export const process = {
  headline: "How a project actually runs.",
  steps: [
    {
      id: "scope",
      title: "Scope the work",
      body: "A call, then a written scope with what is in, what is out and what it costs. You approve it before anything starts.",
    },
    {
      id: "design",
      title: "Design the screens",
      body: "Real screens, not a mood board. You see the product before I write the code that builds it.",
    },
    {
      id: "build",
      title: "Build in weekly slices",
      body: "Every week ends with something you can open and use. No silence for a month followed by a surprise.",
    },
    {
      id: "ship",
      title: "Ship and keep it running",
      body: "Store submission, launch, and a support window after it goes live. Shipping is the start of the job, not the end.",
    },
  ],
} as const;

export const about = {
  headline: "One person, start to finish.",
  body: [
    "I am Yusuf Karakaya. yukabuild is my studio, and it is just me. The person you talk to on the first call is the person writing the code and pushing the release.",
    "That keeps things short. No account manager relaying questions, no team to spin up before work starts. It also means I take on a small number of projects at a time, so the one I am on gets real attention.",
    "Between client projects I build small products of my own. That is where I try new tools before I use them on yours.",
  ],
  media: {
    /** PLACEHOLDER: swap for a real photo of Yusuf or the workspace. */
    src: "https://picsum.photos/seed/yukabuild-founder-desk/1000/1250",
    width: 1000,
    height: 1250,
    alt: "Placeholder portrait standing in for a photo of Yusuf Karakaya at work.",
  },
} as const;

/**
 * PLACEHOLDER hrefs. The accounts do not exist yet, so every link points at "#"
 * until they do.
 *
 * `icon` names a Phosphor brand glyph rather than a CDN slug. Simple Icons
 * dropped its LinkedIn mark and now returns 404 for it, and one icon family
 * with no network dependency beats a logo that silently disappears.
 */
export const social = {
  /** Shown inside the contact section, not as its own section. */
  label: "Or follow the build",
  links: [
    { label: "X", icon: "x", href: "#" },
    { label: "GitHub", icon: "github", href: "#" },
    { label: "LinkedIn", icon: "linkedin", href: "#" },
    { label: "Instagram", icon: "instagram", href: "#" },
  ],
} as const;

export const contact = {
  headline: "Tell me what you want to build.",
  /** Mono title on the form panel. */
  formTitle: "new project",
  body: "Send a few lines about the project. I reply to everything within two working days.",
  fields: {
    name: { label: "Your name", placeholder: "Yusuf Karakaya" },
    email: { label: "Email", placeholder: "you@company.com" },
    kind: { label: "What do you need?" },
    message: {
      label: "About the project",
      placeholder: "What are you building, who is it for, and when do you need it live?",
      hint: "A rough idea is enough to start.",
    },
  },
  kinds: [
    { value: "mobile", label: "A mobile app" },
    { value: "saas", label: "A SaaS product" },
    { value: "web", label: "A website" },
    { value: "cms", label: "A CMS setup" },
    { value: "other", label: "Something else" },
  ],
  submit: "Send it",
  submitting: "Sending",
  success: {
    title: "Got it.",
    body: "Your message is in. I will reply within two working days.",
    again: "Send another",
  },
  errors: {
    name: "Add your name so I know who I am replying to.",
    email: "Add an email address I can reach you at.",
    emailFormat: "That email address does not look right.",
    message: "Tell me a little about the project.",
    network: "That did not send. Email me directly at",
  },
} as const;

export const footer = {
  blurb: "A one-person studio building mobile apps, SaaS platforms, web projects and CMS work.",
  columns: [
    {
      title: "Studio",
      links: [
        { label: "Services", href: "#services" },
        { label: "Process", href: "#process" },
        { label: "Work", href: "#work" },
        { label: "About", href: "#about" },
      ],
    },
  ],
} as const;
