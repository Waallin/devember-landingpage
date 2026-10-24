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
import type { AboutContent, AnalyticsStep, NavLink, Project, TechGroup } from "./types";

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
    description:
      "I design, build and ship digital products. Devember is my independent studio. I build my own apps, ship them early and learn from how real people use them.",
    primaryCta: { label: "View apps →", href: "#projects" },
    secondaryCta: { label: "Get in touch →", href: "#contact" },
  },
  projects: {
    number: "01",
    label: "Projects",
    title: "Things I have built and shipped.",
    intro: "My own products, from first idea to the App Store.",
  },
  analytics: {
    number: "02",
    label: "Product analytics",
    title: "Built. Shipped. Measured.",
    paragraph:
      "I would rather ship an MVP and learn from real users than guess. Tracking goes in from the start, so the next step rests on real behavior.",
    statement: "Real behavior beats assumptions.",
    steps: [
      { label: "Build", text: "The smallest version that is useful." },
      { label: "Ship", text: "Out to the App Store and Google Play." },
      { label: "Measure", text: "Track what people actually do." },
      { label: "Learn", text: "Read funnels and retention." },
      { label: "Iterate", text: "Change one thing, then build again." },
    ] satisfies AnalyticsStep[],
    panel: {
      label: "Product data · Mixpanel",
      title: "Measured from day one.",
      text: "Live funnel and retention data from Insynskollen.",
      screenshot: {
        src: mixpanelImage.src,
        alt: "Mixpanel funnel and retention report from Insynskollen",
      },
    },
  },
  tech: {
    number: "03",
    label: "Tools & technology",
    title: "What I build with.",
  },
  about: {
    number: "04",
    label: "About",
    title: "A little about me.",
    intro:
      "I am Viktor. I started Devember for my own ideas. Some projects stay small, some reach the App Store, and some become paid products.",
    paragraphs: ["Devember is where I turn ideas into things I can use."],
    portrait: {
      src: profilePicture.src,
      alt: "Viktor, the developer behind Devember",
    },
  } satisfies AboutContent as AboutContent,
  footer: {
    label: "Contact",
    title: "Want to talk?",
    text: "An idea, a question or something you want built. Send me a line.",
    legal: "Devember AB · Sweden",
    copyright: "© 2026",
    email: "viktor@devember.se",
    links: [
      { label: "LinkedIn →", href: "https://www.linkedin.com/in/viktor-wallin-2aa173252/?skipRedirect=true" },
    ] satisfies NavLink[],
  },
};

export const projects: Project[] = [
  {
    id: "insynskollen",
    name: "Insynskollen",
    description:
      "Makes insider trading on the Swedish stock market easier to follow, with AI summaries and push notifications.",
    featured: true,
    metric: { value: "35+", label: "paying users" },
    icon: { src: insynskollenIcon.src, alt: "Insynskollen app icon" },
    screenshots: [
      { src: insynskollenShot1.src, alt: "Insynskollen App Store screenshot — insider trading feed" },
      { src: insynskollenShot2.src, alt: "Insynskollen App Store screenshot — company analysis" },
      { src: insynskollenShot3.src, alt: "Insynskollen App Store screenshot — favorite companies" },
    ],
    stores: [
      { label: "App Store →", href: "https://apps.apple.com/se/app/insynskollen/id6737434122" },
      { label: "Google Play →", href: "https://play.google.com/store/apps/details?id=com.devember.Insynskollen" },
    ],
    stack: ["Firebase", "React Native", "ChatGPT", "Puppeteer"],
  },
  {
    id: "kudoo",
    name: "Kudoo WeightLoss",
    description:
      "Makes weight loss simpler with a points system, daily step goals and AI food scanning.",
    icon: { src: kudooIcon.src, alt: "Kudoo WeightLoss app icon" },
    screenshots: [
      { src: kudooShot1.src, alt: "Kudoo App Store screenshot — daily dashboard" },
      { src: kudooShot2.src, alt: "Kudoo App Store screenshot — daily points" },
      { src: kudooShot3.src, alt: "Kudoo App Store screenshot — meal photo scan" },
    ],
    stores: [{ label: "App Store →", href: "https://apps.apple.com/se/app/kudoo-weight-loss/id6761327514" }],
    stack: ["React Native", "Firebase", "HealthKit", "RevenueCat", "Claude Design", "OpenArt", "Cursor"],
  },
  {
    id: "quiz-game",
    name: "Prime Quiz",
    description: "A quiz game, and the first app I took all the way to the App Store.",
    badge: "First app ever shipped",
    icon: { src: primeIcon.src, alt: "Quiz game app icon" },
    screenshots: [
      { src: primeShot1.src, alt: "Quiz game App Store screenshot — music quiz" },
      { src: primeShot2.src, alt: "Quiz game App Store screenshot — geography quiz" },
      { src: primeShot3.src, alt: "Quiz game App Store screenshot — challenge friends" },
    ],
    stores: [{ label: "App Store →", href: "https://apps.apple.com/se/app/prime/id6476791256" }],
    stack: ["React Native", "Firebase"],
  },
];

export const techStack: TechGroup[] = [
  {
    title: "AI & building",
    items: ["Claude / Claude Design", "ChatGPT", "Cursor", "OpenArt"],
  },
  {
    title: "Technology",
    items: ["Next.js", "React", "React Native", "JavaScript / TypeScript", "HTML / CSS"],
  },
  {
    title: "Product & shipping",
    items: ["Expo", "App Store Connect", "Google Play Console", "RevenueCat", "Mixpanel"],
  },
  {
    title: "Design & workflow",
    items: ["Figma", "Linear", "GitHub", "GitHub Actions", "GitLab"],
  },
];
