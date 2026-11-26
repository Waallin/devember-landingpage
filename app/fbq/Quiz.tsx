"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import logo from "@/app/icon.png";
import { categories } from "./questions";

type Mark = 1;
type Results = Record<string, Record<number, Mark>>;
type State = {
  phase: "setup" | "play";
  teams: string[];
  played: string[];
  results: Results;
};

const STORAGE_KEY = "fbq-state-v1";
const MIN_TEAMS = 2;
const MAX_TEAMS = 6;
const ANSWER_SECONDS = 10;
const TOTAL = categories.reduce((n, c) => n + c.questions.length, 0);
const initial: State = { phase: "setup", teams: ["Lag 1", "Lag 2"], played: [], results: {} };

const keyOf = (c: number, q: number) => `${c}-${q}`;

function load(): State | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const s = JSON.parse(raw) as State;
    if (!Array.isArray(s.teams) || !Array.isArray(s.played)) return null;
    return s;
  } catch {
    return null;
  }
}

function save(s: State) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  } catch {
    // Privat läge eller blockerad lagring: spelet fungerar ändå, det sparas bara inte.
  }
}

function scoreOf(state: State, team: number) {
  let total = 0;
  categories.forEach((cat, c) =>
    cat.questions.forEach((q, i) => {
      const mark = state.results[keyOf(c, i)]?.[team];
      if (mark === 1) total += q.value; // inga minuspoäng
    }),
  );
  return total;
}

function Arrow() {
  return (
    <span className="dv-arrow" aria-hidden="true">
      →
    </span>
  );
}

export function Quiz() {
  const [state, setState] = useState<State>(initial);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState<{ c: number; q: number } | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const saved = load();
    // eslint-disable-next-line react-hooks/set-state-in-effect -- läser sparat spel efter hydrering
    if (saved) setState(saved);
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) save(state);
  }, [state, ready]);

  const update = (fn: (s: State) => State) => setState((s) => fn(s));

  const newGame = () => {
    if (state.played.length > 0 && !window.confirm("Starta ett nytt spel? Poängen nollställs.")) return;
    update((s) => ({ ...initial, teams: s.teams }));
    setOpen(null);
  };

  const openQuestion = (c: number, q: number) => {
    setOpen({ c, q });
    setRevealed(state.played.includes(keyOf(c, q)));
  };

  const closeQuestion = () => {
    if (open) {
      const k = keyOf(open.c, open.q);
      update((s) => (s.played.includes(k) ? s : { ...s, played: [...s.played, k] }));
    }
    setOpen(null);
  };

  const mark = (team: number, m: Mark) => {
    if (!open) return;
    const k = keyOf(open.c, open.q);
    update((s) => {
      const current = { ...(s.results[k] ?? {}) };
      if (current[team] === m) delete current[team];
      else current[team] = m;
      return { ...s, results: { ...s.results, [k]: current } };
    });
  };

  const scores = state.teams.map((_, i) => scoreOf(state, i));
  const finished = state.phase === "play" && state.played.length === TOTAL;
  const best = Math.max(...scores);
  const winners = state.teams.filter((_, i) => scores[i] === best);

  return (
    <div className="dv-base fbq">
      <header className="dv-header">
        <div className="dv-container dv-header__inner">
          <Link className="dv-logo" href="/" aria-label="Devember, till startsidan">
            <Image src={logo} alt="" width={31} height={28} loading="eager" />
            <span className="dv-wordmark">Devember</span>
          </Link>
          {state.phase === "play" && (
            <button type="button" className="dv-btn dv-btn--quiet dv-btn--sm" onClick={newGame}>
              Nytt spel
            </button>
          )}
        </div>
      </header>

      <main className="dv-container fbq-main">
        {state.phase === "setup" ? (
          <Setup
            teams={state.teams}
            onChange={(teams) => update((s) => ({ ...s, teams }))}
            onStart={() =>
              update((s) => ({
                ...s,
                phase: "play",
                teams: s.teams.map((t, i) => t.trim() || `Lag ${i + 1}`),
              }))
            }
          />
        ) : (
          <div className="dv-stack dv-gap-8">
            <div className="dv-stack dv-gap-2">
              <p className="dv-meta">Fotbollsquiz · {state.played.length} av {TOTAL} frågor</p>
              <h1 className="dv-h2">{finished ? "Quizet är slut" : "Välj en ruta"}</h1>
            </div>

            <ol className="fbq-scores" aria-label="Poängställning">
              {state.teams.map((t, i) => (
                <li key={i} className="fbq-score" data-leading={finished && scores[i] === best ? "" : undefined}>
                  <span className="fbq-score__name">{t}</span>
                  <span className="fbq-score__value dv-num">{scores[i]}</span>
                </li>
              ))}
            </ol>

            {finished && (
              <div className="dv-card fbq-final" role="status">
                <p className="dv-meta">Slutresultat</p>
                <p className="dv-h2">
                  {winners.length === 1 ? `${winners[0]} vinner med ${best} poäng!` : `Delad seger: ${winners.join(" och ")} (${best} poäng)`}
                </p>
                <div>
                  <button type="button" className="dv-btn" onClick={newGame}>
                    Spela igen <Arrow />
                  </button>
                </div>
              </div>
            )}

            <div className="fbq-board">
              {categories.map((cat, c) => (
                <section key={cat.name} className="fbq-cat" aria-label={cat.name}>
                  <h2 className="fbq-cat__name">{cat.name}</h2>
                  {cat.questions.map((q, i) => {
                    const k = keyOf(c, i);
                    const played = state.played.includes(k);
                    const takers = state.teams.filter((_, t) => state.results[k]?.[t] === 1);
                    return (
                      <button
                        key={k}
                        type="button"
                        className="fbq-cell dv-num"
                        data-played={played ? "" : undefined}
                        onClick={() => openQuestion(c, i)}
                        aria-label={`${cat.name}, ${q.value} poäng${played ? ", spelad" : ""}`}
                      >
                        <span className="fbq-cell__value">{q.value}</span>
                        {played && takers.length > 0 && <span className="fbq-cell__taker">{takers.join(", ")}</span>}
                      </button>
                    );
                  })}
                </section>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="dv-footer">
        <div className="dv-container dv-footer__inner">
          <span>Ett fotbollsquiz från Devember</span>
          <Link href="/">devember.se</Link>
        </div>
      </footer>

      {open && (
        <QuestionView
          c={open.c}
          q={open.q}
          teams={state.teams}
          marks={state.results[keyOf(open.c, open.q)] ?? {}}
          revealed={revealed}
          onReveal={() => setRevealed(true)}
          onMark={mark}
          onClose={closeQuestion}
        />
      )}
    </div>
  );
}

function Setup({ teams, onChange, onStart }: { teams: string[]; onChange: (t: string[]) => void; onStart: () => void }) {
  return (
    <form
      className="dv-stack dv-gap-8 fbq-setup"
      onSubmit={(e) => {
        e.preventDefault();
        onStart();
      }}
    >
      <div className="dv-stack dv-gap-4">
        <p className="dv-meta">Fotbollsquiz · 5 kategorier · 25 frågor</p>
        <h1 className="dv-display">Fotbollsquiz</h1>
        <p className="dv-lead">
          Välj en ruta, läs frågan högt och svara muntligt. Laget har 10 sekunder på sig, sedan får alla svara. Den som leder spelet visar svaret och delar ut poängen: 100 för de lätta, 500 för de svåra.
        </p>
      </div>

      <fieldset className="dv-stack dv-gap-3 fbq-teams">
        <legend className="dv-h3">Lag</legend>
        {teams.map((t, i) => (
          <div key={i} className="fbq-team">
            <label className="dv-sr" htmlFor={`team-${i}`}>
              Namn på lag {i + 1}
            </label>
            <input
              id={`team-${i}`}
              className="fbq-input"
              value={t}
              maxLength={24}
              autoComplete="off"
              onChange={(e) => onChange(teams.map((x, j) => (j === i ? e.target.value : x)))}
            />
            {teams.length > MIN_TEAMS && (
              <button
                type="button"
                className="dv-iconbtn"
                aria-label={`Ta bort ${t || `lag ${i + 1}`}`}
                onClick={() => onChange(teams.filter((_, j) => j !== i))}
              >
                <svg className="dv-icon dv-icon--sm" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            )}
          </div>
        ))}
        {teams.length < MAX_TEAMS && (
          <div>
            <button type="button" className="dv-btn dv-btn--soft dv-btn--sm" onClick={() => onChange([...teams, `Lag ${teams.length + 1}`])}>
              Lägg till lag
            </button>
          </div>
        )}
      </fieldset>

      <div>
        <button type="submit" className="dv-btn">
          Starta quizet <Arrow />
        </button>
      </div>
    </form>
  );
}

function Countdown({ seconds }: { seconds: number }) {
  const total = seconds * 1000;
  const [left, setLeft] = useState(total);
  const [run, setRun] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const id = window.setInterval(() => {
      const l = Math.max(0, total - (performance.now() - start));
      setLeft(l);
      if (l === 0) window.clearInterval(id);
    }, 100);
    return () => window.clearInterval(id);
  }, [run, total]);

  const restart = () => {
    setLeft(total);
    setRun((r) => r + 1);
  };

  const shown = Math.ceil(left / 1000);
  const over = left === 0;
  const r = 28;
  const circ = 2 * Math.PI * r;

  return (
    <div className="fbq-timer" data-state={over ? "over" : shown <= 3 ? "low" : undefined}>
      <div className="fbq-timer__ring" role="timer" aria-label={over ? "Tiden är ute" : `${shown} sekunder kvar`}>
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <circle className="fbq-timer__track" cx="32" cy="32" r={r} />
          <circle
            className="fbq-timer__bar"
            cx="32"
            cy="32"
            r={r}
            strokeDasharray={circ}
            strokeDashoffset={circ * (1 - left / total)}
          />
        </svg>
        <span className="fbq-timer__num dv-num" aria-hidden="true">
          {shown}
        </span>
      </div>
      <div className="fbq-timer__text" role="status">
        {over ? (
          <>
            <p className="dv-h3">Tiden är ute!</p>
            <p className="dv-small">Nu får alla lag svara.</p>
          </>
        ) : (
          <p className="dv-small">{seconds} sekunder att svara</p>
        )}
      </div>
      <button type="button" className="dv-btn dv-btn--quiet dv-btn--sm fbq-timer__restart" onClick={restart}>
        Starta om
      </button>
    </div>
  );
}

function QuestionView({
  c,
  q,
  teams,
  marks,
  revealed,
  onReveal,
  onMark,
  onClose,
}: {
  c: number;
  q: number;
  teams: string[];
  marks: Record<number, Mark>;
  revealed: boolean;
  onReveal: () => void;
  onMark: (team: number, m: Mark) => void;
  onClose: () => void;
}) {
  const cat = categories[c];
  const item = cat.questions[q];
  const primary = useRef<HTMLButtonElement>(null);
  const closeRef = useRef(onClose);

  useEffect(() => {
    closeRef.current = onClose;
  });

  useEffect(() => {
    primary.current?.focus();
  }, [revealed]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeRef.current();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fbq-overlay" role="dialog" aria-modal="true" aria-labelledby="fbq-q">
      <div className="dv-container fbq-overlay__inner">
        <div className="fbq-overlay__top">
          <p className="dv-meta">
            {cat.name} · <span className="dv-num">{item.value}</span> poäng
          </p>
          <button type="button" className="dv-iconbtn" aria-label="Stäng och gå tillbaka till brädet" onClick={onClose}>
            <svg className="dv-icon dv-icon--sm" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="dv-stack dv-gap-8 fbq-overlay__body">
          <h2 id="fbq-q" className="dv-h1 fbq-question">
            {item.question}
          </h2>

          {!revealed ? (
            <div className="dv-stack dv-gap-6">
              <Countdown seconds={ANSWER_SECONDS} />
              <div>
                <button ref={primary} type="button" className="dv-btn" onClick={onReveal}>
                  Visa svar
                </button>
              </div>
            </div>
          ) : (
            <div className="dv-stack dv-gap-6" aria-live="polite">
              <div className="dv-stack dv-gap-2">
                <p className="dv-meta">Svar</p>
                <p className="dv-h2 fbq-answer">{item.answer}</p>
                {item.extra && <p className="dv-body dv-muted">{item.extra}</p>}
              </div>

              <div className="dv-stack dv-gap-3">
                <p className="dv-meta">Vem svarade rätt?</p>
                <ul className="fbq-marks">
                  {teams.map((t, i) => (
                    <li key={i} className="fbq-mark">
                      <span className="fbq-mark__name">{t}</span>
                      <span className="fbq-mark__btns">
                        <button type="button" className="fbq-toggle" data-tone="moss" aria-pressed={marks[i] === 1} onClick={() => onMark(i, 1)}>
                          Rätt +{item.value}
                        </button>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="fbq-overlay__foot">
          <button ref={revealed ? primary : undefined} type="button" className={revealed ? "dv-btn" : "dv-btn dv-btn--quiet"} onClick={onClose}>
            Tillbaka till brädet <Arrow />
          </button>
        </div>
      </div>
    </div>
  );
}
