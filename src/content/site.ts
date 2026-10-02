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
  title: "Web apps, mobile apps and SaaS, built and shipped by one developer",
  description:
    "YukaBuild is Yusuf Karakaya's one-person studio. I build web apps, mobile apps and SaaS products, ship them, and keep them running after launch.",
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
  headline: { lead: "I build apps and get them", accent: "into people's hands." },
  subline:
    "Web apps, iOS and Android apps, SaaS. I design them, write the code, push them through launch and stay on after. You deal with one person the whole way, from the first call to the day it goes live.",
  facts: ["Web · iOS · Android", "A new build to click every week", "The code is yours"],
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
  headline: "Apps I've shipped myself.",
  description:
    "I design, build, release and run my own apps too. Your project goes through the same process that got One Sudoku into the App Store and Google Play.",
  inBuild: "In build",
  /** The invitation under the list: the next row could be the visitor's product. */
  cta: {
    headline: "Got an idea that won't leave you alone?",
    subline: "Send me a few lines about it. The next app on this list could be yours.",
  },
  items: [
    {
      id: "one-sudoku",
      name: "One Sudoku",
      summary: "Free sudoku for iPhone, iPad and Android, with a fresh daily challenge. Works offline, so it's fine on a plane.",
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
      summary: "App number two is being built right now. It shows up here the day it ships.",
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
  headline: "Software people will pay for.",
  description: "Bring me the problem and the people who have it. I'll come back with something they can log into on day one.",
  items: [
    {
      id: "web",
      title: "Web Products",
      body: "SaaS platforms, dashboards and product sites. Accounts, billing and the admin panel come built in, so you can charge from launch day.",
      image: images.web,
    },
    {
      id: "mobile",
      title: "Mobile Apps",
      body: "One codebase for iOS and Android. I handle store review, get it live, and keep fixing and updating it after launch.",
      image: images.mobile,
    },
    {
      id: "engineering",
      title: "Product Engineering",
      body: "Already have a product and a team? I'll join in, ship features, clear out what's slowing everyone down and get the next release out.",
      image: images.engineering,
    },
  ],
} as const;

export const howItWorks = {
  eyebrow: "How It Works",
  headline: "How a project runs.",
  description: "Four steps, and you talk to the same person in every one. Each week ends with something you can click.",
  steps: [
    {
      id: "scope",
      title: "Scope",
      body: "We get on a call about the problem. You get a written plan back: what ships first, what waits, and the price.",
      detail: "Week 1",
    },
    {
      id: "build",
      title: "Design & Build",
      body: "Design and code happen side by side. At the end of each week you get a build to open on your phone or in your browser.",
      detail: "Weekly builds",
    },
    {
      id: "launch",
      title: "Launch",
      body: "Store review, domains, payments and analytics all get sorted. Then it goes live and real users sign up.",
      detail: "Live release",
    },
    {
      id: "run",
      title: "Run",
      body: "Bug fixes, updates and new features after launch, from the person who wrote the code in the first place.",
      detail: "After launch",
    },
  ],
} as const;

export const finalCta = {
  eyebrow: "Start a Project",
  headline: "What are you building?",
  subline: "Tell me what it is and who it's for. I'll tell you straight what it takes, roughly what it costs, and where I'd start.",
  emailLabel: "Or email",
  about:
    "YukaBuild is Yusuf Karakaya's studio. The person on your first call is the one writing the code and shipping the release.",
} as const;

/**
 * The dialog behind every "Start a Project" button. Submissions go to
 * FormSubmit, which forwards them to `site.email`.
 */
export const projectForm = {
  eyebrow: "Start a Project",
  title: "Tell me what you're building.",
  description: "A few lines is plenty. I read every message myself and reply with an honest read on what it'll take.",
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

export const footer = {
  tagline: "Apps built and shipped by one developer.",
  photoCredit: "Photos: Unsplash",
} as const;

export const social = {
  links: [
    { label: "Instagram", href: "https://www.instagram.com/yukabuild/" },
  ],
} as const;
