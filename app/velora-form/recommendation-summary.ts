import { NEVER_TRIED } from "./experience-summary";

export const recommendationEyebrow = "DIN PERSONLIGA BEDÖMNING";
export const recommendationHeadline = "Du kan gå vidare till nästa steg.";
export const recommendationIntro =
  "Utifrån dina svar kan nästa steg vara en medicinsk bedömning hos Velora. Under ett digitalt möte går ni igenom din hälsa, dina mål och vilka behandlingsalternativ som kan vara relevanta för dig.";

export const recommendationNextSteps = [
  {
    number: "01",
    title: "Medicinsk bedömning",
    text: "Vi går igenom dina individuella förutsättningar.",
  },
  {
    number: "02",
    title: "Personligt nästa steg",
    text: "Om behandling är lämplig hjälper vi dig vidare.",
  },
  {
    number: "03",
    title: "Digitalt och enkelt",
    text: "Du träffar vårdteamet online.",
  },
] as const;

const goalInsight: Record<string, string> = {
  "Gå ner i vikt och behålla resultatet": "Gå ner i vikt och behålla resultatet",
  "Få bättre hälsa": "Få bättre hälsa",
  "Få mer energi och ork": "Få mer energi och ork",
  "Känna mig mer bekväm i min kropp": "Känna dig mer bekväm i kroppen",
  "Kunna leva ett mer aktivt liv": "Leva ett mer aktivt liv",
};

// Medication is left out on purpose. This surface should not repeat sensitive medical answers.
const triedInsight: Record<string, string> = {
  diet: "kost",
  exercise: "träning",
  program: "viktminskningsprogram",
  healthcare: "hjälp från vården",
  other: "andra försök",
};

const triedOrder = ["diet", "exercise", "program", "healthcare", "other"];

const seekingInsight: Record<string, string> = {
  treatment: "En behandling som faktiskt hjälper",
  hunger: "Mindre hunger och sug",
  plan: "En tydlig plan att följa",
  support: "Stöd och uppföljning",
  results: "Resultat som motiverar",
  everyday: "Något som fungerar i vardagen",
  unsure: "Hjälp att förstå nästa steg",
};

export type Insight = {
  label: string;
  text: string;
};

export type RecommendationDate = {
  id: string;
  kicker: string;
  dayLabel: string;
  dateLine: string;
  times: string[];
};

export type BookingSlot = {
  dateId: string;
  dateLine: string;
  time: string;
  endTime: string;
};

const weekdayShort = ["SÖN", "MÅN", "TIS", "ONS", "TOR", "FRE", "LÖR"];
const weekdayLong = ["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"];
const monthShort = ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];
const monthLong = [
  "januari",
  "februari",
  "mars",
  "april",
  "maj",
  "juni",
  "juli",
  "augusti",
  "september",
  "oktober",
  "november",
  "december",
];

const mockTimes = [
  ["09:00", "10:30", "13:00", "14:30", "16:00", "17:30"],
  ["08:30", "10:00", "11:30", "13:30", "15:00", "16:30"],
  ["09:30", "11:00", "13:00", "14:30", "16:00", "18:00"],
  ["09:00", "10:30", "12:30", "14:00", "15:30", "17:00"],
  ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30"],
];

function capitalize(value: string) {
  return value.charAt(0).toLocaleUpperCase("sv-SE") + value.slice(1);
}

function joinList(items: string[]) {
  if (items.length <= 1) return items[0] ?? "";
  if (items.length === 2) return `${items[0]} och ${items[1]}`;
  return `${items.slice(0, -1).join(", ")} och ${items[items.length - 1]}`;
}

function experienceInsight(tried: string[]) {
  if (tried.includes(NEVER_TRIED)) return "Ett första steg";

  const parts = triedOrder.flatMap((value) => {
    if (!tried.includes(value)) return [];
    const label = triedInsight[value];
    return label ? [label] : [];
  });

  if (parts.length === 0) return "Tidigare försök";
  return capitalize(joinList(parts));
}

export function buildRecommendationInsights(input: {
  goal?: string;
  tried: string[];
  missing?: string;
}): Insight[] {
  return [
    {
      label: "Ditt mål",
      text: (input.goal && goalInsight[input.goal]) || "Det du vill förändra",
    },
    {
      label: "Din erfarenhet",
      text: experienceInsight(input.tried),
    },
    {
      label: "Det du söker",
      text: (input.missing && seekingInsight[input.missing]) || "Ett nästa steg som passar dig",
    },
  ];
}

function addMinutes(time: string, minutes: number) {
  const [hours, mins] = time.split(":").map(Number);
  const total = hours * 60 + mins + minutes;
  return `${String(Math.floor(total / 60)).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;
}

export function buildRecommendationDates(now = new Date()): RecommendationDate[] {
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  return Array.from({ length: 5 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    const month = date.getMonth();
    const weekday = date.getDay();

    return {
      id: `${date.getFullYear()}-${String(month + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`,
      kicker: index === 0 ? "IDAG" : index === 1 ? "IMORGON" : weekdayShort[weekday],
      dayLabel: `${date.getDate()} ${monthShort[month]}`,
      dateLine: `${capitalize(weekdayLong[weekday])} ${date.getDate()} ${monthLong[month]}`,
      times: mockTimes[index] ?? mockTimes[0],
    };
  });
}

export function createBooking(date: RecommendationDate, time: string): BookingSlot {
  return {
    dateId: date.id,
    dateLine: date.dateLine,
    time,
    endTime: addMinutes(time, 30),
  };
}
