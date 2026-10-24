import { EmberText } from "@/components/EmberText";

export function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <p className="m-0 font-mono text-xs leading-4 font-medium tracking-[0.6px] text-meta">
      <EmberText text={`${number} · ${label}`} />
    </p>
  );
}
