import logo from "@/assets/devember/logo.png";
import profilePicture from "@/assets/devember/profilepicture.png";
import insynskollenIcon from "@/assets/insynskollen/icon.png";
import insynskollenShot1 from "@/assets/insynskollen/screenshot1.png";
import insynskollenShot2 from "@/assets/insynskollen/screenshot2.png";
import insynskollenShot3 from "@/assets/insynskollen/screenshot3.png";
import kudooIcon from "@/assets/kudoo/icon.png";
import kudooShot1 from "@/assets/kudoo/screenshot1.png";
import kudooShot2 from "@/assets/kudoo/screenshot2.png";
import kudooShot3 from "@/assets/kudoo/screenshot3.png";
import mixpanelImage from "@/assets/mixpanel/image.png";
import primeIcon from "@/assets/prime/icon.png";
import primeShot1 from "@/assets/prime/screenshot1.png";
import primeShot2 from "@/assets/prime/screenshot2.png";
import primeShot3 from "@/assets/prime/screenshot3.png";
import type { AboutContent, NavLink, Project, TechGroup } from "./types";

export const site = {
  name: "Devember",
  logo: {
    src: logo.src,
    alt: "Devember",
  },
  nav: [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavLink[],
  hero: {
    eyebrow: "Independent software studio",
    prefix: "I am",
    words: ["Developer", "Devember"],
    description:
      "I design, build and ship digital products.\nDevember is my independent software studio.",
    primaryCta: { label: "View apps →", href: "#projects" },
    secondaryCta: { label: "Get in touch", href: "#contact" },
    scrollLabel: "Scroll",
  },
  analytics: {
    number: "02",
    label: "Product analytics",
    title: "Built. Shipped.\nMeasured.",
    paragraph:
      "I’d rather ship an MVP and learn from real users than guess what they want. That’s why I add tracking from the start — I want to understand what people actually do in the product and use that to decide what comes next.",
    statement: "Real behavior beats assumptions.",
    steps: ["Build", "Ship", "Measure", "Learn", "Iterate"],
    screenshot: {
      src: mixpanelImage.src,
      alt: "Mixpanel funnel and retention report from Insynskollen",
      label: "Mixpanel screenshot\nfunnel / retention report",
      tone: "neutral" as const,
    },
    annotation: "Live product data / Insynskollen",
  },
  tech: {
    number: "03",
    label: "Tools & technology",
    intro: "What the products are actually built and run on.",
  },
  about: {
    number: "04",
    label: "About",
    title: "A little about me.",
    intro: "Hi, I’m Viktor. I started Devember as a place for my own ideas and projects.",
    paragraphs: [
      "I enjoy building things and figuring things out along the way. Some ideas stay small, some make it to the App Store, and some turn into products people actually pay for.",
      "Devember is where I turn ideas into things I can actually use.",
    ],
    portrait: {
      src: profilePicture.src,
      alt: "Viktor, the developer behind Devember",
    },
  } satisfies AboutContent as AboutContent,
  footer: {
    title: "Want to talk?",
    legal: "Devember AB — Sweden",
    copyright: "© 2026",
    email: "viktor@devember.se",
    links: [
      { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/viktor-wallin-2aa173252/?skipRedirect=true" },
    ] satisfies NavLink[],
  },
};

export const projects: Project[] = [
  {
    id: "insynskollen",
    name: "Insynskollen",
    description:
      "I wanted to make insider trading easier to follow. Insynskollen uses AI summaries and push notifications to cut through the noise and help me find interesting companies on the Swedish stock market.",
    metric: "35+ paying users",
    layout: "textMedia",
    icon: {
      src: insynskollenIcon.src,
      alt: "Insynskollen app icon",
      label: "icon",
      tone: "frost",
    },
    screenshots: [
      {
        src: insynskollenShot1.src,
        alt: "Insynskollen App Store screenshot — insider trading feed",
        label: "screenshot-1",
        tone: "frost",
      },
      {
        src: insynskollenShot2.src,
        alt: "Insynskollen App Store screenshot — company analysis",
        label: "screenshot-2",
        tone: "frost",
      },
      {
        src: insynskollenShot3.src,
        alt: "Insynskollen App Store screenshot — favorite companies",
        label: "screenshot-3",
        tone: "frost",
      },
    ],
    stores: [
      { label: "App Store ↗", href: "https://apps.apple.com/se/app/insynskollen/id6737434122" },
      { label: "Google Play ↗", href: "https://play.google.com/store/apps/details?id=com.devember.Insynskollen" },
    ],
    stack: ["Firebase", "React Native", "ChatGPT", "Puppeteer"],
  },
  {
    id: "kudoo",
    name: "Kudoo WeightLoss",
    description:
      "I wanted weight loss to feel simpler than counting calories. Kudoo uses a points system, daily step goals and AI food scanning to turn what you eat into points — making progress easier to understand and stick with.",
    layout: "mediaText",
    icon: {
      src: kudooIcon.src,
      alt: "Kudoo WeightLoss app icon",
      label: "icon",
      tone: "green",
    },
    screenshots: [
      {
        src: kudooShot1.src,
        alt: "Kudoo App Store screenshot — daily dashboard",
        label: "screenshot-1",
        tone: "green",
      },
      {
        src: kudooShot2.src,
        alt: "Kudoo App Store screenshot — daily points",
        label: "screenshot-2",
        tone: "green",
      },
      {
        src: kudooShot3.src,
        alt: "Kudoo App Store screenshot — meal photo scan",
        label: "screenshot-3",
        tone: "green",
      },
    ],
    stores: [
      {
        label: "App Store ↗",
        href: "https://apps.apple.com/se/app/kudoo-weight-loss/id6761327514",
      },
    ],
    stack: ["Claude Design", "OpenArt", "Cursor", "HealthKit", "RevenueCat", "React Native", "Firebase"],
  },
  {
    id: "quiz-game",
    name: "Prime Quiz",
    description:
      "I just wanted to take an idea all the way to the App Store. It took a while, I learned a lot, and eventually I shipped my first app.",
    eyebrow: "First app ever shipped",
    layout: "compact",
    icon: {
      src: primeIcon.src,
      alt: "Quiz game app icon",
      label: "icon",
      tone: "ember",
    },
    screenshots: [
      {
        src: primeShot1.src,
        alt: "Quiz game App Store screenshot — music quiz",
        label: "screenshot-1",
        tone: "ember",
      },
      {
        src: primeShot2.src,
        alt: "Quiz game App Store screenshot — geography quiz",
        label: "screenshot-2",
        tone: "ember",
      },
      {
        src: primeShot3.src,
        alt: "Quiz game App Store screenshot — challenge friends",
        label: "screenshot-3",
        tone: "ember",
      },
    ],
    stores: [
      {
        label: "App Store ↗",
        href: "https://apps.apple.com/se/app/prime/id6476791256",
      },
    ],
    stack: ["Firebase", "React Native"],
  },
];

export const techStack: TechGroup[] = [
  {
    title: "AI & Building",
    items: ["Claude / Claude Design", "ChatGPT", "Cursor", "OpenArt"],
  },
  {
    title: "Technology",
    items: ["Next.js", "React", "React Native", "JavaScript / TypeScript", "HTML / CSS"],
  },
  {
    title: "Product & Shipping",
    items: ["Expo", "App Store Connect", "Google Play Console", "RevenueCat", "Mixpanel"],
  },
  {
    title: "Design & Workflow",
    items: ["Figma", "Linear", "GitHub", "GitHub Actions", "Gitlab"],
  },
];
