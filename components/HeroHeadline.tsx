"use client";

import { useEffect, useState } from "react";

const PREFIX = "Think";
const STEPS = ["Think Developer", "Think Dev", "Think Devember."] as const;
const TYPE_MS = 100;
const DELETE_MS = 60;
const HOLD_MS = 2000;
const EMBER_TAIL = "ember.";

function splitHeadline(displayed: string) {
  if (displayed.length <= PREFIX.length) {
    return { prefix: displayed, rest: "" };
  }

  return {
    prefix: PREFIX,
    rest: displayed.slice(PREFIX.length).trimStart(),
  };
}

function Rest({ rest, ember }: { rest: string; ember: boolean }) {
  if (!rest) {
    return null;
  }

  // "Devember." is the only case with an "ember." tail; "Developer"/"Dev" just get frost styling
  const tail =
    rest.startsWith("Dev") && rest.length > 3 ? rest.slice(3) : null;
  const emberTail = ember && tail !== null && EMBER_TAIL.startsWith(tail);

  if (emberTail) {
    return (
      <>
        <span className="text-frost">
          {" "}
          <span className="ember-word">Dev</span>
        </span>
        {tail ? <span className="ember-word text-ember">{tail}</span> : null}
      </>
    );
  }

  return (
    <span className="text-frost">
      {" "}
      <span className="ember-word">{rest}</span>
    </span>
  );
}

function Cursor({ ember, pulse }: { ember: boolean; pulse?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`mb-[0.12em] ml-[0.1em] inline-block h-[0.72em] w-[2px] align-middle ${
        ember ? "bg-ember" : "bg-frost/55"
      } ${pulse ? "hero-cursor-pulse" : ""}`}
    />
  );
}

export function HeroHeadline() {
  const [displayed, setDisplayed] = useState("");
  const [step, setStep] = useState(0);

  useEffect(() => {
    const target = STEPS[step];

    if (displayed === target) {
      if (step >= STEPS.length - 1) {
        return;
      }

      const delay = step === 0 ? HOLD_MS : 0;
      const timer = window.setTimeout(() => setStep((current) => current + 1), delay);
      return () => window.clearTimeout(timer);
    }

    const deleting =
      displayed.length > target.length || !target.startsWith(displayed);
    const delay = deleting ? DELETE_MS : TYPE_MS;
    const timer = window.setTimeout(() => {
      setDisplayed((current) =>
        deleting ? current.slice(0, -1) : target.slice(0, current.length + 1),
      );
    }, delay);

    return () => window.clearTimeout(timer);
  }, [displayed, step]);

  const { prefix, rest } = splitHeadline(displayed);
  const done = displayed === STEPS[STEPS.length - 1];
  const emberCursor = step >= 2;

  return (
    <>
      <span className="sr-only">Think Devember.</span>
      <span
        className="hero-static inline-flex flex-wrap items-baseline justify-center gap-x-[0.28em]"
        aria-hidden="true"
      >
        <span className="ember-word text-snow">{PREFIX}</span>
        <span className="inline-flex items-baseline">
          <span className="text-frost">
            {" "}
            <span className="ember-word">Dev</span>
          </span>
          <span className="ember-word text-ember">ember.</span>
          <Cursor ember />
        </span>
      </span>
      <span
        className="hero-animated inline-flex flex-wrap items-baseline justify-center gap-x-[0.28em]"
        aria-hidden="true"
      >
        <span className="inline-grid">
          {STEPS.map((item) => (
            <span
              key={item}
              className="invisible col-start-1 row-start-1 whitespace-nowrap"
            >
              {item}
            </span>
          ))}
          <span className="col-start-1 row-start-1 whitespace-nowrap">
            {prefix ? <span className="ember-word text-snow">{prefix}</span> : null}
            <Rest rest={rest} ember={emberCursor} />
            <Cursor ember={emberCursor} pulse={done} />
          </span>
        </span>
      </span>
    </>
  );
}
