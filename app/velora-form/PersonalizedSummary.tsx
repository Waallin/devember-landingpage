import type { ReactNode } from "react";

type PersonalizedSummaryProps = {
  eyebrow: string;
  headline: string;
  paragraphs: string[];
  note?: string;
  children?: ReactNode;
};

export function PersonalizedSummary({ eyebrow, headline, paragraphs, children }: PersonalizedSummaryProps) {
  return (
    <div className="velora-reveal">
      <p className="text-[12px] font-medium leading-5 tracking-[0.08em] velora-muted">{eyebrow}</p>
      <h2 className="mt-4 text-[clamp(1.85rem,3vw,2.45rem)] font-medium leading-[1.14] tracking-[-0.032em] text-balance">
        {headline}
      </h2>
      <div className="mt-6 max-w-[38rem] space-y-4">
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-[15px] leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
      {children}
    </div>
  );
}
