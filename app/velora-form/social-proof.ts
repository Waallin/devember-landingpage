export type SocialProofItem = {
  quote: string;
  attribution: string;
};

export const socialProof = {
  goal: {
    quote: "För första gången kändes det som att jag fick hjälp utifrån mina förutsättningar. Att första samtalet var kostnadsfritt gjorde beslutet att komma igång mycket enklare.",
    attribution: "Velora-medlem",
  },
  experience: {
    quote: "Jag hade testat mycket tidigare. Skillnaden var att jag inte behövde göra allt själv.",
    attribution: "Velora-medlem",
  },
} satisfies Record<"goal" | "experience", SocialProofItem>;
