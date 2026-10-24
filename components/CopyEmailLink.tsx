"use client";

import { useEffect, useRef, useState } from "react";
import { EmberText } from "@/components/EmberText";

const COPIED_MS = 2400;

export function CopyEmailLink({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const copiedTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (copiedTimer.current) {
        clearTimeout(copiedTimer.current);
      }
    };
  }, []);

  function handleCopy() {
    setCopied(true);

    if (copiedTimer.current) {
      clearTimeout(copiedTimer.current);
    }

    copiedTimer.current = setTimeout(() => {
      setCopied(false);
      copiedTimer.current = null;
    }, COPIED_MS);

    void navigator.clipboard.writeText(email).catch(() => {
      // Popover still confirms the address if clipboard is unavailable.
    });
  }

  return (
    <div className="relative">
      <button type="button" onClick={handleCopy} className="btn btn-primary motion-link">
        Email me <span className="motion-arrow motion-arrow-forward">→</span>
      </button>
      {copied ? (
        <div
          role="status"
          aria-live="polite"
          className="absolute bottom-full left-0 z-10 mb-2 whitespace-nowrap rounded-md border border-ember bg-surface px-3 py-2 font-mono text-xs tracking-[0.03em] shadow-soft"
        >
          <p className="m-0 text-ember-ink">
            <EmberText text="Copied to clipboard" />
          </p>
          <p className="m-0 mt-1 text-snow">
            <EmberText text={email} />
          </p>
        </div>
      ) : null}
    </div>
  );
}
