export const healthIntroEyebrow = "DIN HÄLSA";
export const healthIntroHeadline = "Nu ser vi om behandling kan vara ett alternativ för dig.";
export const healthIntroParagraphs = [
  "Vi behöver ställa några frågor om din hälsa för att göra en första bedömning. Dina svar hjälper oss att förstå om det är relevant för dig att gå vidare.",
];
export const healthIntroNote = "Det tar ungefär 1 minut.";
export const healthIntroCta = "Fortsätt";

export const healthSummaryEyebrow = "NÄSTA STEG";
export const healthSummaryHeadline = "Tack – nu har vi en bättre bild av dina förutsättningar.";
export const healthSummaryParagraphs = [
  "Utifrån dina svar kan vi fortsätta med din personliga bedömning. Nu behöver vi bara några uppgifter om dig för att kunna anpassa nästa steg.",
];
export const healthSummaryCta = "Fortsätt med mina uppgifter";

export type HealthQuestion = {
  id: string;
  title: string;
  supporting?: string;
  options: { value: string; label: string }[];
};

export const healthQuestions: HealthQuestion[] = [];
