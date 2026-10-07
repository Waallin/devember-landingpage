export type AboutChoiceField = {
  kind: "choice";
  id: "sex";
  label: string;
  options: { value: string; label: string }[];
};

export type AboutNumberField = {
  kind: "number";
  id: "age" | "height" | "weight";
  label: string;
  unit: string;
  placeholder?: string;
};

export type AboutField = AboutChoiceField | AboutNumberField;

export type AboutView = {
  id: "basics" | "measures";
  title: string;
  fields: AboutField[];
};

export const aboutViews: AboutView[] = [
  {
    id: "basics",
    title: "Grunduppgifter",
    fields: [
      {
        kind: "choice",
        id: "sex",
        label: "Vilket kön registrerades du som vid födseln?",
        options: [
          { value: "Kvinna", label: "Kvinna" },
          { value: "Man", label: "Man" },
        ],
      },
      {
        kind: "number",
        id: "age",
        label: "Hur gammal är du?",
        unit: "år",
      },
    ],
  },
  {
    id: "measures",
    title: "Kroppsmått",
    fields: [
      {
        kind: "number",
        id: "height",
        label: "Hur lång är du?",
        unit: "cm",
        placeholder: "175",
      },
      {
        kind: "number",
        id: "weight",
        label: "Vad väger du idag?",
        unit: "kg",
        placeholder: "92",
      },
    ],
  },
];

export function aboutAnswerKey(id: AboutField["id"]) {
  return `about:${id}`;
}

export function sanitizeInteger(raw: string) {
  return raw.replace(/\D/g, "").replace(/^0+/, "");
}

export function isPositiveInteger(value: string | undefined) {
  return Boolean(value && /^[1-9]\d*$/.test(value));
}

export function aboutViewIsComplete(view: AboutView, values: Record<string, string | undefined>) {
  return view.fields.every((field) => {
    const value = values[field.id];
    if (field.kind === "choice") return Boolean(value);
    return isPositiveInteger(value);
  });
}
