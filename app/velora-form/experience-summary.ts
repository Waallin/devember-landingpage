export const TRIED_QUESTION_ID = "tried";
export const OUTCOME_QUESTION_ID = "outcome";
export const MISSING_QUESTION_ID = "missing";
export const NEVER_TRIED = "never";

export const experienceSummaryEyebrow = "UTIFRÅN DIN ERFARENHET";
export const experienceSummaryCta = "Fortsätt till din hälsa";

const missingTitle = "Vad saknade du mest för att lyckas långsiktigt?";
const missingTitleNeverTried = "Vad tror du skulle hjälpa dig mest att lyckas?";

export type ExperienceOption = {
  value: string;
  label: string;
};

export type ExperienceQuestion = {
  id: string;
  title: string;
  supporting?: string;
  multi?: boolean;
  options: ExperienceOption[];
};

export const experienceQuestions: ExperienceQuestion[] = [
  {
    id: TRIED_QUESTION_ID,
    title: "Vad har du provat för att gå ner i vikt tidigare?",
    supporting: "Välj allt som stämmer.",
    multi: true,
    options: [
      { value: "diet", label: "Ändrat min kost" },
      { value: "exercise", label: "Tränat mer" },
      { value: "program", label: "Följt ett viktminskningsprogram" },
      { value: "healthcare", label: "Fått hjälp av vården" },
      { value: "medication", label: "Provat läkemedel för viktminskning" },
      { value: "other", label: "Något annat" },
      { value: NEVER_TRIED, label: "Jag har inte försökt tidigare" },
    ],
  },
  {
    id: OUTCOME_QUESTION_ID,
    title: "Hur har det fungerat för dig?",
    options: [
      { value: "kept", label: "Jag gick ner och lyckades behålla vikten" },
      { value: "regained", label: "Jag gick ner, men gick upp igen" },
      { value: "partial", label: "Jag gick ner lite, men inte så mycket som jag önskade" },
      { value: "no_change", label: "Jag såg ingen större förändring" },
      { value: "hard_to_continue", label: "Jag hade svårt att fortsätta" },
      { value: NEVER_TRIED, label: "Jag har inte försökt tidigare" },
    ],
  },
  {
    id: MISSING_QUESTION_ID,
    title: missingTitle,
    supporting: "Välj det som stämmer bäst.",
    options: [
      { value: "treatment", label: "En behandling som faktiskt hjälper" },
      { value: "hunger", label: "Mindre hunger och sug" },
      { value: "plan", label: "En tydlig plan att följa" },
      { value: "support", label: "Stöd och uppföljning längs vägen" },
      { value: "results", label: "Resultat som motiverar mig att fortsätta" },
      { value: "everyday", label: "Något som fungerar i min vardag" },
      { value: "unsure", label: "Jag vet inte riktigt" },
    ],
  },
];

export function experienceMissingTitle(neverTried: boolean) {
  return neverTried ? missingTitleNeverTried : missingTitle;
}

export function toggleTried(current: string[], value: string) {
  if (value === NEVER_TRIED) return [NEVER_TRIED];
  const withoutNever = current.filter((item) => item !== NEVER_TRIED);
  if (withoutNever.includes(value)) return withoutNever.filter((item) => item !== value);
  return [...withoutNever, value];
}

export type ExperienceSummary = {
  headline: string;
  paragraphs: string[];
};

export type ExperienceAnswers = {
  tried?: string[];
  outcome?: string;
  missing?: string;
};

const fallbackSummary: ExperienceSummary = {
  headline: "Din erfarenhet hjälper oss förstå nästa steg.",
  paragraphs: [
    "Nu vet vi lite mer om vad du har provat och vad du behöver framåt. Nästa steg hjälper oss att förstå dina medicinska förutsättningar och om Velora kan vara rätt för dig.",
  ],
};

const neverTriedSummary: ExperienceSummary = {
  headline: "Du behöver inte börja resan på egen hand.",
  paragraphs: [
    "Det här är ett första steg mot att förstå vilka alternativ som finns för dig.",
    "Nästa steg hjälper oss att förstå dina medicinska förutsättningar och om Velora kan vara ett relevant alternativ.",
  ],
};

type OutcomeKey = "regained" | "limited" | "hard_to_continue";
type MissingKey = "treatment" | "hunger" | "plan" | "support" | "results" | "everyday" | "unsure";
type BlendKey = Exclude<MissingKey, "unsure">;
type Tone = "self" | "care";

const outcomeCopy: Record<OutcomeKey, ExperienceSummary> = {
  regained: {
    headline: "Du har redan visat att du kan gå ner i vikt. Nu handlar det om att få resultatet att hålla.",
    paragraphs: [
      "Att gå ner i vikt är en sak. Att behålla resultatet över tid kan vara en annan.",
      "Utifrån dina svar verkar det som att du behöver en väg framåt som fungerar mer långsiktigt. Velora kombinerar medicinsk bedömning med behandling när den är lämplig och stöd längs vägen.",
    ],
  },
  limited: {
    headline: "Ett nytt försök behöver inte betyda mer av samma.",
    paragraphs: [
      "Du har redan försökt göra förändringar utan att få resultatet du hoppats på.",
      "Nästa steg hjälper oss att förstå dina medicinska förutsättningar och om det finns andra alternativ som kan vara relevanta för dig.",
    ],
  },
  hard_to_continue: {
    headline: "Det som fungerar på kort sikt behöver också fungera i din vardag.",
    paragraphs: [
      "Du har redan tagit steg mot förändring, men det har varit svårt att få dem att hålla över tid.",
      "Velora finns för att hjälpa dig hitta en väg framåt utifrån dina förutsättningar, med stöd längs vägen.",
    ],
  },
};

const missingCopy: Record<MissingKey, ExperienceSummary> = {
  support: {
    headline: "Du ska inte behöva göra hela resan på egen hand.",
    paragraphs: [
      "Du berättar att stöd och uppföljning är något du saknat tidigare.",
      "Därför är uppföljning en viktig del av hur Velora hjälper sina patienter framåt, tillsammans med medicinsk bedömning och behandling när den är lämplig.",
    ],
  },
  hunger: {
    headline: "Det ska inte behöva kännas som en ständig kamp mot hunger.",
    paragraphs: [
      "Du berättar att hunger och sug har gjort det svårare att nå dit du vill.",
      "Vikt påverkas av flera faktorer. Nästa steg hjälper oss förstå dina förutsättningar och om medicinsk behandling kan vara relevant för dig.",
    ],
  },
  plan: {
    headline: "Det är lättare att ta nästa steg när vägen framåt är tydlig.",
    paragraphs: [
      "Du berättar att en tydligare plan hade kunnat hjälpa dig tidigare.",
      "Velora hjälper dig att förstå dina förutsättningar och, om behandling är lämplig, skapa en tydligare väg framåt.",
    ],
  },
  everyday: {
    headline: "En långsiktig förändring behöver fungera även i verkliga livet.",
    paragraphs: [
      "Du berättar att det viktigaste är att hitta något som fungerar i din vardag.",
      "Velora utgår från dina individuella förutsättningar för att bedöma vilket nästa steg som kan vara relevant.",
    ],
  },
  treatment: {
    headline: "Du ska inte behöva gissa dig fram till vad som hjälper.",
    paragraphs: [
      "Du berättar att du saknat en behandling som faktiskt hjälper.",
      "Nästa steg hjälper oss att förstå dina medicinska förutsättningar och om en behandling kan vara relevant för dig.",
    ],
  },
  results: {
    headline: "Det är lättare att fortsätta när resultatet går att känna.",
    paragraphs: [
      "Du berättar att resultat som motiverar dig att fortsätta är något du saknat.",
      "Nästa steg hjälper oss att förstå dina förutsättningar och vilka alternativ som kan vara relevanta för dig.",
    ],
  },
  unsure: {
    headline: "Du behöver inte ha alla svar redan nu.",
    paragraphs: [
      "Du har berättat om vad du har provat hittills, även om det inte är självklart vad som skulle göra störst skillnad.",
      "Nästa steg hjälper oss att förstå dina medicinska förutsättningar och om Velora kan vara ett relevant alternativ.",
    ],
  },
};

function blend(self: string, care: string, close: string): Record<Tone, string[]> {
  return {
    self: [self, close],
    care: [care, close],
  };
}

const blendCopy: Record<OutcomeKey, Record<BlendKey, Record<Tone, string[]>>> = {
  regained: {
    support: blend(
      "Du har redan gjort mycket på egen hand, men resultatet har varit svårt att behålla. Du berättar också att stöd och uppföljning är något du saknat tidigare.",
      "Du har redan sökt hjälp och gjort förändringar, men resultatet har varit svårt att behålla. Du berättar också att stöd och uppföljning är något du saknat tidigare.",
      "Velora finns för att hjälpa dig hitta en mer långsiktig väg framåt, med medicinsk bedömning, behandling när den är lämplig och stöd längs vägen.",
    ),
    hunger: blend(
      "Du har redan visat att du kan gå ner i vikt, men resultatet har varit svårt att behålla. Du berättar att hunger och sug har gjort det svårare att hålla i förändringen.",
      "Du har redan sökt hjälp och visat att du kan gå ner i vikt, men resultatet har varit svårt att behålla. Du berättar att hunger och sug har gjort det svårare att hålla i förändringen.",
      "Vikt påverkas av flera faktorer. Nästa steg hjälper oss förstå dina förutsättningar och om medicinsk behandling kan vara relevant för att göra resultatet lättare att hålla.",
    ),
    plan: blend(
      "Du har redan gått ner i vikt på egen hand, men resultatet har varit svårt att behålla. Du berättar att en tydligare plan hade kunnat hjälpa dig att hålla i förändringen.",
      "Du har redan gått ner i vikt med stöd på vägen, men resultatet har varit svårt att behålla. Du berättar att en tydligare plan hade kunnat hjälpa dig att hålla i förändringen.",
      "Velora hjälper dig att förstå dina förutsättningar och, om behandling är lämplig, skapa en tydligare väg framåt.",
    ),
    everyday: blend(
      "Du har redan gått ner i vikt på egen hand, men resultatet har varit svårt att behålla. Du berättar att det viktigaste är att hitta något som fungerar i din vardag.",
      "Du har redan gått ner i vikt med stöd på vägen, men resultatet har varit svårt att behålla. Du berättar att det viktigaste är att hitta något som fungerar i din vardag.",
      "Velora utgår från dina individuella förutsättningar för att bedöma vilket nästa steg som kan vara relevant.",
    ),
    treatment: blend(
      "Du har redan gått ner i vikt på egen hand, men resultatet har varit svårt att behålla. Du berättar att du saknat en behandling som faktiskt hjälper.",
      "Du har redan sökt hjälp och gått ner i vikt, men resultatet har varit svårt att behålla. Du berättar att du saknat en behandling som faktiskt hjälper.",
      "Nästa steg hjälper oss att förstå dina medicinska förutsättningar och om en behandling kan vara relevant för dig.",
    ),
    results: blend(
      "Du har redan gått ner i vikt på egen hand, men resultatet har varit svårt att behålla. Du berättar att tydligare resultat hade motiverat dig att fortsätta.",
      "Du har redan sökt hjälp och gått ner i vikt, men resultatet har varit svårt att behålla. Du berättar att tydligare resultat hade motiverat dig att fortsätta.",
      "Velora finns för att hjälpa dig hitta en mer långsiktig väg framåt, med medicinsk bedömning och behandling när den är lämplig.",
    ),
  },
  limited: {
    support: blend(
      "Du har redan försökt göra förändringar på egen hand utan att få resultatet du hoppats på. Du berättar också att stöd och uppföljning är något du saknat.",
      "Du har redan sökt hjälp och gjort förändringar utan att få resultatet du hoppats på. Du berättar också att stöd och uppföljning är något du saknat.",
      "Därför är uppföljning en viktig del av hur Velora hjälper sina patienter framåt, tillsammans med medicinsk bedömning och behandling när den är lämplig.",
    ),
    hunger: blend(
      "Du har redan försökt göra förändringar på egen hand utan att få resultatet du hoppats på. Du berättar att hunger och sug har gjort det svårare.",
      "Du har redan sökt hjälp och gjort förändringar utan att få resultatet du hoppats på. Du berättar att hunger och sug har gjort det svårare.",
      "Vikt påverkas av flera faktorer. Nästa steg hjälper oss förstå dina förutsättningar och om medicinsk behandling kan vara relevant för dig.",
    ),
    plan: blend(
      "Du har redan försökt göra förändringar på egen hand utan att få resultatet du hoppats på. Du berättar att en tydligare plan hade kunnat hjälpa dig.",
      "Du har redan sökt hjälp och gjort förändringar utan att få resultatet du hoppats på. Du berättar att en tydligare plan hade kunnat hjälpa dig.",
      "Velora hjälper dig att förstå dina förutsättningar och, om behandling är lämplig, skapa en tydligare väg framåt.",
    ),
    everyday: blend(
      "Du har redan försökt göra förändringar på egen hand utan att få resultatet du hoppats på. Du berättar att det viktigaste är att hitta något som fungerar i din vardag.",
      "Du har redan sökt hjälp och gjort förändringar utan att få resultatet du hoppats på. Du berättar att det viktigaste är att hitta något som fungerar i din vardag.",
      "Velora utgår från dina individuella förutsättningar för att bedöma vilket nästa steg som kan vara relevant.",
    ),
    treatment: blend(
      "Du har redan försökt göra förändringar på egen hand utan att få resultatet du hoppats på. Du berättar att du saknat en behandling som faktiskt hjälper.",
      "Du har redan sökt hjälp och gjort förändringar utan att få resultatet du hoppats på. Du berättar att du saknat en behandling som faktiskt hjälper.",
      "Nästa steg hjälper oss att förstå dina medicinska förutsättningar och om det finns andra alternativ som kan vara relevanta för dig.",
    ),
    results: blend(
      "Du har redan försökt göra förändringar på egen hand utan att få resultatet du hoppats på. Du berättar att tydligare resultat hade motiverat dig att fortsätta.",
      "Du har redan sökt hjälp och gjort förändringar utan att få resultatet du hoppats på. Du berättar att tydligare resultat hade motiverat dig att fortsätta.",
      "Nästa steg hjälper oss att förstå dina medicinska förutsättningar och om det finns andra alternativ som kan vara relevanta för dig.",
    ),
  },
  hard_to_continue: {
    support: blend(
      "Du har redan tagit steg mot förändring på egen hand, men det har varit svårt att få dem att hålla över tid. Du berättar också att stöd och uppföljning är något du saknat.",
      "Du har redan sökt hjälp och tagit steg mot förändring, men det har varit svårt att få dem att hålla över tid. Du berättar också att stöd och uppföljning är något du saknat.",
      "Velora finns för att hjälpa dig hitta en väg framåt utifrån dina förutsättningar, med stöd längs vägen.",
    ),
    hunger: blend(
      "Du har redan tagit steg mot förändring på egen hand, men det har varit svårt att fortsätta. Du berättar att hunger och sug har gjort det svårare att hålla i.",
      "Du har redan sökt hjälp och tagit steg mot förändring, men det har varit svårt att fortsätta. Du berättar att hunger och sug har gjort det svårare att hålla i.",
      "Vikt påverkas av flera faktorer. Nästa steg hjälper oss förstå dina förutsättningar och om medicinsk behandling kan vara relevant för dig.",
    ),
    plan: blend(
      "Du har redan tagit steg mot förändring på egen hand, men det har varit svårt att fortsätta. Du berättar att en tydligare plan hade kunnat hjälpa dig att hålla i.",
      "Du har redan sökt hjälp och tagit steg mot förändring, men det har varit svårt att fortsätta. Du berättar att en tydligare plan hade kunnat hjälpa dig att hålla i.",
      "Velora hjälper dig att förstå dina förutsättningar och, om behandling är lämplig, skapa en tydligare väg framåt.",
    ),
    everyday: blend(
      "Du har redan tagit steg mot förändring på egen hand, men det har varit svårt att få dem att hålla över tid. Du berättar att det viktigaste är att hitta något som fungerar i din vardag.",
      "Du har redan sökt hjälp och tagit steg mot förändring, men det har varit svårt att få dem att hålla över tid. Du berättar att det viktigaste är att hitta något som fungerar i din vardag.",
      "Velora finns för att hjälpa dig hitta en väg framåt utifrån dina förutsättningar, med stöd längs vägen.",
    ),
    treatment: blend(
      "Du har redan tagit steg mot förändring på egen hand, men det har varit svårt att fortsätta. Du berättar att du saknat en behandling som faktiskt hjälper.",
      "Du har redan sökt hjälp och tagit steg mot förändring, men det har varit svårt att fortsätta. Du berättar att du saknat en behandling som faktiskt hjälper.",
      "Nästa steg hjälper oss att förstå dina medicinska förutsättningar och om en behandling kan vara relevant för dig.",
    ),
    results: blend(
      "Du har redan tagit steg mot förändring på egen hand, men det har varit svårt att fortsätta. Du berättar att tydligare resultat hade motiverat dig att hålla i.",
      "Du har redan sökt hjälp och tagit steg mot förändring, men det har varit svårt att fortsätta. Du berättar att tydligare resultat hade motiverat dig att hålla i.",
      "Velora finns för att hjälpa dig hitta en väg framåt utifrån dina förutsättningar, med stöd längs vägen.",
    ),
  },
};

const triedValues = new Set(experienceQuestions[0].options.map((option) => option.value));
const outcomeValues = new Set(experienceQuestions[1].options.map((option) => option.value));
const missingValues = new Set(experienceQuestions[2].options.map((option) => option.value));
const careValues = new Set(["healthcare", "medication"]);

const outcomeKeyByValue: Record<string, OutcomeKey | "kept" | "never"> = {
  kept: "kept",
  regained: "regained",
  partial: "limited",
  no_change: "limited",
  hard_to_continue: "hard_to_continue",
  never: "never",
};

function safeSummary(summary: ExperienceSummary): ExperienceSummary {
  const rendered = [summary.headline, ...summary.paragraphs].join("\n");
  if (
    !summary.headline.trim() ||
    summary.paragraphs.length === 0 ||
    summary.paragraphs.some((paragraph) => !paragraph.trim()) ||
    rendered.includes("undefined") ||
    rendered.includes("null")
  ) {
    return fallbackSummary;
  }
  return summary;
}

export function buildExperienceSummary(answers: ExperienceAnswers): ExperienceSummary {
  const tried = (answers.tried ?? []).filter((value) => triedValues.has(value));
  const outcome = answers.outcome && outcomeValues.has(answers.outcome) ? answers.outcome : undefined;
  const missing = answers.missing && missingValues.has(answers.missing) ? (answers.missing as MissingKey) : undefined;
  const outcomeKey = outcome ? outcomeKeyByValue[outcome] : undefined;

  if (tried.includes(NEVER_TRIED) || outcomeKey === "never") return neverTriedSummary;

  if (outcomeKey === "regained" || outcomeKey === "limited" || outcomeKey === "hard_to_continue") {
    const tone: Tone = tried.some((value) => careValues.has(value)) ? "care" : "self";
    const blendParagraphs = missing && missing !== "unsure" ? blendCopy[outcomeKey][missing][tone] : undefined;
    if (blendParagraphs) {
      return safeSummary({ headline: outcomeCopy[outcomeKey].headline, paragraphs: blendParagraphs });
    }
    return safeSummary(outcomeCopy[outcomeKey]);
  }

  if (missing) return safeSummary(missingCopy[missing]);

  return fallbackSummary;
}
