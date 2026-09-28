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
    { label: "Products", href: "#products" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
  ],
} as const;

export const hero = {
  status: "Taking on new projects",
  /** The headline is split so the middle phrase can carry the blue accent. */
  headline: { lead: "Software products, built from", accent: "idea to production." },
  subline:
    "I design, build and ship web apps, mobile apps and SaaS products, then keep them running after launch. One person, from the first call to the live release.",
  facts: ["Web · iOS · Android", "Weekly builds you can click", "You own the code"],
  /** The small floating cards on the hero photo. */
  cards: {
    build: { label: "Build #42", value: "Deployed to production" },
    platforms: { label: "Shipping to", items: ["Web", "iOS", "Android"] },
  },
} as const;

/**
 * Photos from Unsplash (unsplash.com/license: free for commercial use, no
 * attribution required). Downloaded into public/images, not hotlinked.
 */
export const images = {
  hero: {
    src: "/images/hero-desk.webp",
    width: 1400,
    height: 1750,
    alt: "A laptop showing code on a bright white desk, a monitor behind it.",
  },
  web: {
    src: "/images/web-dashboard.webp",
    width: 900,
    height: 675,
    alt: "An analytics dashboard with charts on a laptop screen.",
  },
  mobile: {
    src: "/images/mobile-phone.webp",
    width: 900,
    height: 675,
    alt: "A smartphone lying next to a laptop on a white desk.",
  },
  engineering: {
    src: "/images/product-wireframes.webp",
    width: 900,
    height: 675,
    alt: "A hand arranging app wireframes pinned to a wall.",
  },
  contact: {
    src: "/images/contact-typing.webp",
    width: 1200,
    height: 1500,
    alt: "Hands typing on a laptop keyboard.",
  },
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
  description:
    "Our own apps, designed, built, released and run end to end. The process that ships them is the one your project gets.",
  inBuild: "In build",
  /** The invitation under the list: the next row could be the visitor's product. */
  cta: {
    headline: "Let's build together.",
    subline: "What's on your mind? Reach out and tell me about it. The next product on this list could be yours.",
  },
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
  cta: { headline: string; subline: string };
  items: readonly Product[];
};

export const build = {
  eyebrow: "What I Build",
  headline: "Products, not tech stacks.",
  description: "You bring the problem and the people who have it. I bring back something they can sign up for, pay for and use.",
  items: [
    {
      id: "web",
      title: "Web Products",
      body: "SaaS platforms, dashboards and product sites. Accounts, billing and the admin side included, built to be charged for rather than demoed.",
      image: images.web,
    },
    {
      id: "mobile",
      title: "Mobile Apps",
      body: "iOS and Android apps from one codebase, taken through store review to a live release, and kept running after launch.",
      image: images.mobile,
    },
    {
      id: "engineering",
      title: "Product Engineering",
      body: "Joining an existing product to ship features, fix what slows the team down and get a release out the door.",
      image: images.engineering,
    },
  ],
} as const;

export const howItWorks = {
  eyebrow: "How It Works",
  headline: "From first call to live release.",
  description: "Four steps, no hand-offs. You see working software every week, not a status report.",
  steps: [
    {
      id: "scope",
      title: "Scope",
      body: "One call to understand the problem, then a written plan: what gets built first, what waits, and what it costs.",
      detail: "Week 1",
    },
    {
      id: "build",
      title: "Design & Build",
      body: "Screens and code move together. Every week ends with a build you can open on your own phone or browser.",
      detail: "Weekly builds",
    },
    {
      id: "launch",
      title: "Launch",
      body: "Store review, domains, payments, analytics. The release goes out and real users get in.",
      detail: "Live release",
    },
    {
      id: "run",
      title: "Run",
      body: "Fixes, updates and the next features, from the same person who wrote the code the first time.",
      detail: "After launch",
    },
  ],
} as const;

export const stack = {
  label: "Capabilities",
  items: ["React", "Next.js", "React Native", "Node.js", "TypeScript", "PostgreSQL", "Firebase", "Cloudflare"],
} as const;

export const finalCta = {
  eyebrow: "Start a Project",
  headline: "Have something to build?",
  subline: "Tell me what it is and who it's for. You get a straight answer on what it takes, what it costs and what to build first.",
  emailLabel: "Or email",
  about:
    "YukaBuild is the studio of Yusuf Karakaya. The person you talk to on the first call is the person writing the code and shipping the release.",
} as const;

/**
 * The dialog behind every "Start a Project" button. Submissions go to
 * FormSubmit, which forwards them to `site.email`.
 */
export const projectForm = {
  eyebrow: "Start a Project",
  title: "Tell me what you're building.",
  description: "A few lines is enough. I read every message myself and reply with a straight answer on what it takes.",
  fields: {
    name: { label: "Name", placeholder: "Your name" },
    email: { label: "Email", placeholder: "you@company.com" },
    kind: { label: "What is it?", options: ["Web app", "Mobile app", "SaaS", "Something else"] },
    /** PLACEHOLDER: confirm the ranges match what you quote. */
    budget: { label: "Budget", options: ["Under $5k", "$5k–15k", "$15k–40k", "$40k+", "Not sure yet"] },
    message: {
      label: "The project",
      placeholder: "The problem, who has it, and anything that already exists.",
    },
  },
  optional: "Optional",
  errors: {
    name: "Add your name.",
    email: "Add an email I can reply to.",
    message: "Add a line or two about the project.",
    send: "The message didn't go through. Try again, or email me at",
  },
  emailLabel: "Or email",
  submit: "Send",
  sending: "Sending",
  success: {
    title: "Message sent.",
    body: "Thanks. I'll read it and reply to you by email.",
    close: "Close",
  },
} as const;

/** PLACEHOLDER hrefs. The accounts do not exist yet. */
export const footer = {
  tagline: "Software products, from idea to production.",
  photoCredit: "Photos: Unsplash",
} as const;

export const social = {
  links: [
    { label: "X", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
} as const;
