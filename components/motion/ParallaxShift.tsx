"use client";

import { useEffect, useRef, type ReactNode } from "react";

const ENABLE_QUERY =
  "(min-width: 768px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

export function ParallaxShift({
  children,
  className,
  range = 24,
}: {
  children: ReactNode;
  className?: string;
  range?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }

    const media = window.matchMedia(ENABLE_QUERY);
    let frame = 0;

    const apply = () => {
      frame = 0;
      if (!media.matches) {
        el.style.transform = "";
        return;
      }

      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      const total = viewH + rect.height;
      if (total <= 0) {
        return;
      }

      const progress = Math.min(1, Math.max(0, (viewH - rect.top) / total));
      const offset = (progress - 0.5) * range;
      el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
    };

    const requestApply = () => {
      if (frame) {
        return;
      }
      frame = window.requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", requestApply, { passive: true });
    window.addEventListener("resize", requestApply);
    media.addEventListener("change", requestApply);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", requestApply);
      window.removeEventListener("resize", requestApply);
      media.removeEventListener("change", requestApply);
      el.style.transform = "";
    };
  }, [range]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
