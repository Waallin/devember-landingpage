export type MediaAsset = {
  src: string;
  alt: string;
};

export type StoreLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  featured?: boolean;
  badge?: string;
  metric?: { value: string; label: string };
  icon: MediaAsset;
  screenshots: MediaAsset[];
  stores: StoreLink[];
  stack: string[];
};

export type TechGroup = {
  title: string;
  items: string[];
};

export type NavLink = {
  label: string;
  href: string;
};

export type AnalyticsStep = {
  label: string;
  text: string;
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
