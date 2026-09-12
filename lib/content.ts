import type { NavLink, Project, TechGroup } from "./types";

export const site = {
  name: "Devember",
  nav: [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavLink[],
  hero: {
    title: "We make apps.",
    description:
      "Devember is a small independent software company in Sweden. We design, build and operate our own digital products.",
    meta: ["Stockholm, Sweden", "3 products shipped", "iOS & Android"],
  },
  analytics: {
    number: "02",
    label: "Product analytics",
    title: "Built. Shipped. Measured.",
    paragraphs: [
      "Every important interaction is tracked. We use Mixpanel to understand how people actually use our products — from onboarding and engagement to retention, funnels and conversions.",
      "Instead of guessing what users want, we use real product data to understand what's working, what's not, and what to improve next.",
    ],
    steps: ["Build", "Ship", "Measure", "Learn", "Iterate"],
    screenshot: {
      alt: "Mixpanel funnel and retention report from Insynskollen",
      label: "Mixpanel screenshot\nfunnel / retention report",
      tone: "neutral" as const,
    },
    caption: "Real dashboard from Insynskollen — drop the export here.",
  },
  tech: {
    number: "03",
    label: "Tools & technology",
    intro: "What the products are actually built and run on.",
  },
  about: {
    number: "04",
    label: "About",
    title: "Small company.\nReal products.",
    description:
      "Devember AB is an independent Swedish software company. We take products from idea to production — design, development, backend, analytics, payments, App Store releases and ongoing iteration.",
  },
  footer: {
    title: "Want to talk?",
    legal: "Devember AB — Sweden",
    copyright: "© 2026",
    links: [
      { label: "Email ↗", href: "mailto:hello@devember.se" },
      { label: "LinkedIn ↗", href: "#" },
      { label: "GitHub ↗", href: "#" },
    ] satisfies NavLink[],
  },
};

export const projects: Project[] = [
  {
    id: "insynskollen",
    name: "Insynskollen",
    description:
      "Makes Swedish insider trading easier to discover, follow and understand. Includes tracking and monitoring of the holdings you care about.",
    metric: "35+ paying users",
    layout: "textMedia",
    icon: {
      alt: "Insynskollen app icon",
      label: "icon",
      tone: "frost",
    },
    screenshots: [
      {
        alt: "Insynskollen insider feed",
        label: "app screenshot\ninsider feed",
        tone: "frost",
      },
      {
        alt: "Insynskollen monitoring",
        label: "app screenshot\nmonitoring",
        tone: "frost",
      },
    ],
    stores: [
      { label: "App Store ↗", href: "#" },
      { label: "Google Play ↗", href: "#" },
    ],
    stack: ["Swift", "Kotlin", "Node", "Postgres", "Stripe", "Mixpanel"],
  },
  {
    id: "kudoo",
    name: "Kudoo WeightLoss",
    description:
      "Weight-loss tracking built around one idea: progress should be easy to understand and easy to keep following.",
    layout: "mediaText",
    icon: {
      alt: "Kudoo WeightLoss app icon",
      label: "icon",
      tone: "green",
    },
    screenshots: [
      {
        alt: "Kudoo weight graph",
        label: "app screenshot\nweight graph",
        tone: "green",
      },
      {
        alt: "Kudoo daily log",
        label: "app screenshot\ndaily log",
        tone: "green",
      },
    ],
    stores: [
      { label: "App Store ↗", href: "#" },
      { label: "Google Play ↗", href: "#" },
    ],
    stack: ["Swift", "Kotlin", "HealthKit", "Firebase", "Mixpanel"],
  },
  {
    id: "quiz-game",
    name: "Quiz game",
    description:
      "Where it started. A small trivia game, built to learn how to finish something and actually put it in a store.",
    eyebrow: "First app ever shipped",
    layout: "compact",
    icon: {
      alt: "Quiz game app icon",
      label: "icon",
      tone: "ember",
    },
    screenshots: [
      {
        alt: "Quiz game screenshot",
        label: "screenshot",
        tone: "ember",
      },
    ],
  },
];

export const techStack: TechGroup[] = [
  {
    title: "Mobile",
    items: ["Swift / SwiftUI", "Kotlin / Compose", "StoreKit & Play Billing", "HealthKit"],
  },
  {
    title: "Web",
    items: ["TypeScript", "React", "Next.js", "HTML & CSS"],
  },
  {
    title: "Backend & data",
    items: ["Node.js", "PostgreSQL", "REST APIs", "Scrapers & ETL jobs"],
  },
  {
    title: "Infrastructure",
    items: ["Docker", "CI/CD pipelines", "Cloud hosting", "Monitoring & alerts"],
  },
  {
    title: "Product & analytics",
    items: ["Mixpanel", "A/B testing", "Stripe & subscriptions", "App Store & Play Console"],
  },
];
