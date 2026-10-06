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
    "YukaBuild is Yusuf Karakaya's one-person studio. I build web apps, mobile apps, SaaS products and WordPress and Shopify sites, ship them, then keep them running and help them get found.",
} as const;

/**
 * One label per intent, reused verbatim wherever the action appears. Two
 * different labels for the same action reads as two different actions.
 */
export const cta = {
  viewWork: "View work",
  startProject: "Start a project",
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
  eyebrow: "Independent web and mobile studio",
  /** The headline is split so the closing phrase can carry the blue underline. */
  headline: { lead: "I build apps and get them into", accent: "people's hands." },
  subline:
    "Web apps, iOS and Android apps, SaaS products, and WordPress and Shopify sites. You work with one person from the first call through launch, and after it.",
  facts: [
    { id: "platforms", label: "Web, iOS and Android" },
    { id: "builds", label: "A new build to click every week" },
    { id: "ownership", label: "The code is yours" },
  ],
} as const;

/** Real URLs from the shipped project. Do not invent replacements for these. */
export const oneSudoku = {
  site: "https://www.onesudoku.co",
  appStore: "https://apps.apple.com/us/app/one-sudoku-game/id6775040739",
  playStore: "https://play.google.com/store/apps/details?id=co.onesudoku.game",
} as const;

export const products = {
  eyebrow: "Products",
  headline: "Apps I ship myself",
  live: {
    id: "one-sudoku",
    status: "Live",
    /** PLACEHOLDER: confirm the launch year. */
    meta: "iOS · Android · 2026",
    name: "One Sudoku",
    summary: "A free sudoku game for iPhone, iPad and Android. A new daily challenge, and every puzzle works offline.",
    stack: ["React Native", "Expo"],
    /** A phone screenshot, shown inside a plain device frame. */
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
  /** PLACEHOLDER: becomes a second `live` card when the app ships. */
  inProgress: {
    eyebrow: "In progress",
    headline: "App number two is being built right now.",
    aside: "It shows up here the day it ships.",
  },
} as const;

/**
 * Two halves of the same job: getting something built, then keeping it
 * running and finding it an audience.
 */
export const build = {
  eyebrow: "Services",
  headline: "What I build",
  description: "Six kinds of work in two halves. Each one starts with a written plan and ends with code you own.",
  groups: [
    {
      id: "build",
      label: "Build",
      summary: "Something new, from the first sketch to launch day.",
      items: [
        {
          id: "web",
          title: "Web products",
          body: "SaaS platforms, dashboards and product sites. Accounts, billing and an admin panel come built in, not bolted on later.",
        },
        {
          id: "mobile",
          title: "Mobile apps",
          body: "One codebase for iOS and Android. I handle store review, the launch, and the updates that keep it running.",
        },
        {
          id: "cms",
          title: "WordPress and Shopify",
          body: "Sites and stores your team can edit without calling me. Custom themes, catalogs, checkout and only the plugins you need.",
        },
      ],
    },
    {
      id: "grow",
      label: "Run and grow",
      summary: "Something already live that needs to keep working and get found.",
      items: [
        {
          id: "engineering",
          title: "Product engineering",
          body: "For teams that already have a product. I ship features, fix performance and run releases alongside your people.",
        },
        {
          id: "maintenance",
          title: "Maintenance",
          body: "Updates, backups, uptime checks and security patches every month. When something breaks, the person who knows the code fixes it.",
        },
        {
          id: "seo",
          title: "SEO and marketing",
          body: "Technical SEO, page speed, analytics and landing pages. I fix what keeps you off page one and show you what's working.",
        },
      ],
    },
  ],
} as const;

export const howItWorks = {
  eyebrow: "Process",
  headline: "How it works",
  steps: [
    {
      id: "scope",
      title: "Scope",
      body: "We talk it through. You get a written plan with priorities and a price.",
      detail: "Week 1",
    },
    {
      id: "build",
      title: "Design and build",
      body: "Design and code move together. Every week there is a new build you can click.",
      detail: "Weekly builds",
    },
    {
      id: "launch",
      title: "Launch",
      body: "Store review, domain, payments and analytics. I set them up and see them through.",
      detail: "Live release",
    },
    {
      id: "run",
      title: "Run",
      body: "Maintenance, SEO and new features. The same person who built it keeps it running and helps it get found.",
      detail: "After launch",
    },
  ],
} as const;

export const about = {
  eyebrow: "About",
  headline: "One engineer, start to finish",
  lead: "I'm Yusuf, a full-stack engineer in Temecula, California. I've built for the web since 2019.",
  body: "Before YukaBuild I built client sites and products for agencies in New York and San Diego. Now I take projects from the first sketch to the deploy that keeps them running, and I ship my own apps on the side. When you hire me, you talk to the person writing the code.",
  stack: ["React", "Next.js", "Nuxt", "React Native", "WordPress", "Shopify", "PHP"],
} as const;

export const contact = {
  eyebrow: "Contact",
  headline: "Have something to build?",
  subline: "Send a few lines about the idea. I reply with questions, then a written plan.",
  instagram: { label: "@yukabuild on Instagram", href: "https://www.instagram.com/yukabuild/" },
} as const;

/**
 * The dialog behind every "Start a project" button. Submissions go to
 * FormSubmit, which forwards them to `site.email`.
 */
export const projectForm = {
  eyebrow: "Start a project",
  title: "Tell me what you're building.",
  description: "A few lines is plenty. I read every message myself and reply with an honest read on what it'll take.",
  fields: {
    name: { label: "Name", placeholder: "Your name" },
    email: { label: "Email", placeholder: "you@company.com" },
    kind: { label: "What is it?", options: ["Web app", "Mobile app", "SaaS", "WordPress or Shopify", "Maintenance", "SEO and marketing", "Something else"] },
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
  location: "Temecula, CA",
  links: [...nav.links, { label: "Email", href: `mailto:${site.email}` }],
} as const;
