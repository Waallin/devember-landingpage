"use client";

import { useEffect, useState } from "react";

type SectionProgressProps = {
  section: string;
  current: number;
  total: number;
};

export function SectionProgress({ section, current, total }: SectionProgressProps) {
  const percent = total > 0 ? (current / total) * 100 : 0;
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="mb-6">
      <div className="flex items-baseline justify-between gap-4">
        <p className="min-w-0 truncate text-[11px] font-medium uppercase leading-4 tracking-[0.12em] velora-muted">
          {section}
        </p>
        <p
          key={current}
          className="velora-count-fade shrink-0 text-[11px] font-medium uppercase leading-4 tracking-[0.12em] whitespace-nowrap velora-muted"
        >
          {current} av {total}
        </p>
      </div>
      <div
        className="mt-2.5 h-0.5 overflow-hidden rounded-full bg-velora-blush"
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={total}
        aria-valuenow={current}
        aria-label={`Fråga ${current} av ${total} i ${section}`}
      >
        <div
          className="velora-meter-fill h-full w-full origin-left rounded-full bg-velora-burgundy"
          data-ready={ready ? "true" : "false"}
          style={{ transform: `scaleX(${percent / 100})` }}
        />
      </div>
    </div>
  );
}
