export type MediaTone = "frost" | "green" | "ember" | "neutral";

export type MediaAsset = {
  src?: string;
  alt: string;
  label: string;
  tone: MediaTone;
};

export type StoreLink = {
  label: string;
  href: string;
};

export type ProjectLayout = "textMedia" | "mediaText" | "compact";

export type Project = {
  id: string;
  name: string;
  description: string;
  eyebrow?: string;
  metric?: string;
  layout: ProjectLayout;
  icon: MediaAsset;
  screenshots: MediaAsset[];
  stores?: StoreLink[];
  stack?: string[];
};

export type TechGroup = {
  title: string;
  items: string[];
};

export type NavLink = {
  label: string;
  href: string;
};

export type AboutPortrait = {
  src: string;
  alt: string;
};

export type AboutContent = {
  number: string;
  label: string;
  title: string;
  intro: string;
  paragraphs: string[];
  portrait?: AboutPortrait;
};
