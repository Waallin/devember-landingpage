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
      <button
        type="button"
        onClick={handleCopy}
        className="motion-link cursor-pointer border-0 border-b border-solid border-november bg-transparent p-0 pb-1.5 text-left font-[inherit] text-[inherit] tracking-[inherit] hover:border-ember hover:text-ember"
      >
        Email{" "}
        <span className="motion-arrow motion-arrow-external">↗</span>
      </button>
      {copied ? (
        <div
          role="status"
          aria-live="polite"
          className="absolute right-0 bottom-full z-10 mb-2 whitespace-nowrap rounded-md border border-ember bg-frame px-3 py-2 font-mono text-xs tracking-[0.03em]"
        >
          <p className="m-0 text-ember">
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
