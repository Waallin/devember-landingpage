export const GOAL_QUESTION_TITLE = "Vad vill du framför allt uppnå?";
export const BARRIER_QUESTION_TITLE = "Vad har främst stått i vägen hittills?";

export const goalSummaryEyebrow = "UTIFRÅN DINA SVAR";
export const goalSummaryCta = "Se om Velora kan passa dig";

const goalPlaceholder = "{goalCopy}";

export const goalCopy: Record<string, string> = {
  "Gå ner i vikt och behålla resultatet": "gå ner i vikt och behålla resultatet",
  "Få bättre hälsa": "förbättra din hälsa",
  "Få mer energi och ork": "få mer energi och ork",
  "Känna mig mer bekväm i min kropp": "känna dig mer bekväm i din kropp",
  "Kunna leva ett mer aktivt liv": "kunna leva ett mer aktivt liv",
};

type BarrierCopy = {
  headline: string;
  paragraphs: string[];
};

export const barrierCopy: Record<string, BarrierCopy> = {
  "Jag går ner – men går upp igen": {
    headline: `Du vill ${goalPlaceholder} – utan att behöva börja om igen.`,
    paragraphs: [
      "Du berättar att du tidigare haft svårt att behålla resultatet över tid. Det är en vanlig utmaning – och något du inte behöver lösa på egen hand.",
      "Velora finns för att hjälpa dig hitta en mer hållbar väg framåt, med medicinsk behandling när det är lämpligt och stöd längs vägen.",
    ],
  },
  "Hunger och sug gör det svårt": {
    headline: "Det ska inte behöva vara en ständig kamp mot hunger.",
    paragraphs: [
      `Du vill ${goalPlaceholder}, men hunger och sug har gjort det svårt att nå dit.`,
      "Vikt påverkas av mer än viljestyrka. Velora hjälper dig att undersöka om medicinsk behandling kan vara ett alternativ för dig.",
    ],
  },
  "Jag får inte de resultat jag hoppas på": {
    headline: "Du har försökt. Nu är det dags att förstå vad som kan fungera för dig.",
    paragraphs: [
      `Du vill ${goalPlaceholder}, men dina tidigare försök har inte gett resultatet du hoppats på.`,
      "Velora hjälper dig att förstå dina förutsättningar och undersöka vilka behandlingsalternativ som kan vara relevanta för dig.",
    ],
  },
  "Det är svårt att hålla nya vanor över tid": {
    headline: "Förändring ska fungera i din vardag – inte bara i några veckor.",
    paragraphs: [
      `Du vill ${goalPlaceholder}, men det har varit svårt att få förändringen att hålla över tid.`,
      "Velora finns för att hjälpa dig hitta en väg framåt som utgår från dina förutsättningar och ger dig stöd längs vägen.",
    ],
  },
  "Jag vet inte vad som faktiskt fungerar": {
    headline: "Du behöver inte lista ut allt själv.",
    paragraphs: [
      `Du vet vart du vill – ${goalPlaceholder} – men vägen dit har inte varit lika självklar.`,
      "På Velora får du hjälp att förstå dina förutsättningar och vilken behandling som kan vara relevant för dig.",
    ],
  },
  "Jag har inte försökt tidigare": {
    headline: "Du behöver inte börja resan på egen hand.",
    paragraphs: [
      `Du vill ${goalPlaceholder}, och nu tar du ett första steg mot att förstå vilka alternativ som finns.`,
      "Velora hjälper dig att förstå dina förutsättningar och om behandling kan vara ett relevant nästa steg.",
    ],
  },
};

const fallbackSummary: GoalSummary = {
  headline: "Du har tagit första steget.",
  paragraphs: [
    "Nu vet vi lite mer om vad du vill uppnå. Nästa steg hjälper oss att förstå dina förutsättningar och om Velora kan vara rätt för dig.",
  ],
};

export type GoalSummary = {
  headline: string;
  paragraphs: string[];
};

function withGoalCopy(template: string, phrase: string) {
  return template.replaceAll(goalPlaceholder, phrase);
}

export function buildGoalSummary(goal: string | undefined, barrier: string | undefined): GoalSummary {
  const phrase = goal ? goalCopy[goal] : undefined;
  const copy = barrier ? barrierCopy[barrier] : undefined;

  if (!phrase || !copy) return fallbackSummary;

  const headline = withGoalCopy(copy.headline, phrase);
  const paragraphs = copy.paragraphs.map((paragraph) => withGoalCopy(paragraph, phrase));
  const rendered = [headline, ...paragraphs].join("\n");

  if (
    !headline.trim() ||
    paragraphs.some((paragraph) => !paragraph.trim()) ||
    rendered.includes(goalPlaceholder) ||
    rendered.includes("undefined") ||
    rendered.includes("null")
  ) {
    return fallbackSummary;
  }

  return { headline, paragraphs };
}
