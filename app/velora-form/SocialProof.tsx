type SocialProofProps = {
  quote: string;
  attribution: string;
};

export function SocialProof({ quote, attribution }: SocialProofProps) {
  return (
    <figure className="mt-10 max-w-[38rem] border-y border-velora-border py-6 sm:mt-12 sm:py-7">
      <blockquote>
        <p className="text-[17px] leading-[1.55] tracking-[-0.011em] velora-muted">“{quote}”</p>
      </blockquote>
      <figcaption className="mt-3 text-[13px] leading-5 text-velora-text-muted">— {attribution}</figcaption>
    </figure>
  );
}
