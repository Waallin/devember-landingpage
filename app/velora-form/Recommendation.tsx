import { useState, type CSSProperties } from "react";
import {
  buildRecommendationDates,
  buildRecommendationInsights,
  createBooking,
  recommendationEyebrow,
  recommendationHeadline,
  recommendationIntro,
  recommendationNextSteps,
  type BookingSlot,
} from "./recommendation-summary";

type RecommendationProps = {
  goal?: string;
  tried: string[];
  missing?: string;
  booking: BookingSlot | null;
  onBook: (slot: BookingSlot) => void;
};

function Check({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
      <path
        d="M3.2 8.2 6.3 11.2 12.8 4.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" fill="none" aria-hidden="true">
      <path d="M6 3.5 10.5 8 6 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const sectionTitle = "text-[1.45rem] font-medium leading-tight tracking-[-0.028em]";

function delay(ms: number): CSSProperties {
  return { "--velora-delay": `${ms}ms` } as CSSProperties;
}

function BookingButton({ time, onClick }: { time: string | null; onClick: () => void }) {
  const label = time ? `Boka ${time}` : "Boka";

  return (
    <button type="button" className="velora-btn w-full cursor-pointer sm:w-auto" disabled={!time} onClick={onClick}>
      <span className="velora-btn-swap">
        <span className="velora-btn-swap-sizer" aria-hidden="true">
          Boka 00:00
        </span>
        <span className="velora-btn-swap-label" data-hidden={time ? "true" : undefined} aria-hidden={time ? true : undefined}>
          Boka
        </span>
        <span className="velora-btn-swap-label" data-hidden={time ? undefined : "true"} aria-hidden={time ? undefined : true}>
          {label}
        </span>
      </span>
      <Arrow />
    </button>
  );
}

export function Recommendation({ goal, tried, missing, booking, onBook }: RecommendationProps) {
  const [dates] = useState(() => buildRecommendationDates());
  const [dateId, setDateId] = useState(dates[0]?.id ?? "");
  const [time, setTime] = useState<string | null>(null);
  const activeDate = dates.find((date) => date.id === dateId) ?? dates[0];
  const insights = buildRecommendationInsights({ goal, tried, missing });

  function chooseDate(id: string) {
    if (id === dateId) return;
    setDateId(id);
    setTime(null);
  }

  if (booking) {
    return (
      <div>
        <p className="sr-only" aria-live="polite">
          Ditt samtal är bokat {booking.dateLine} klockan {booking.time}.
        </p>
        <span className="velora-confirm-mark" aria-hidden="true">
          <Check className="size-3.5" />
        </span>
        <div className="velora-rise" style={delay(180)}>
          <p className="text-[12px] font-medium leading-5 tracking-[0.08em] velora-muted">KLART</p>
          <h2 className="mt-4 text-[clamp(1.85rem,3vw,2.45rem)] font-medium leading-[1.14] tracking-[-0.032em] text-balance">
            Ditt samtal är bokat.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed velora-muted">Vi ser fram emot att träffa dig.</p>
        </div>

        <div className="velora-rise" style={delay(260)}>
          <div className="mt-12">
            <p className={sectionTitle}>{booking.dateLine}</p>
            <p className="mt-2 text-[15px] font-medium tracking-[-0.011em]">
              {booking.time}–{booking.endTime}
            </p>
            <p className="mt-1 text-[15px] leading-relaxed velora-muted">Digitalt möte</p>
          </div>

          <div className="mt-12 border-t border-velora-border pt-8">
            <h3 className="text-[15px] font-medium tracking-[-0.011em]">Inför mötet</h3>
            <p className="mt-3 max-w-[38rem] text-[15px] leading-relaxed">
              Du får information om mötet skickad till dig. Under samtalet går ni tillsammans igenom dina förutsättningar och
              möjliga nästa steg.
            </p>
          </div>

          <div className="mt-10 flex sm:justify-end">
            <button type="button" className="velora-btn w-full cursor-pointer sm:w-auto">
              Klart
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-w-0">
      <p className="text-[12px] font-medium leading-5 tracking-[0.08em] velora-muted">{recommendationEyebrow}</p>
      <h2 className="mt-4 text-[clamp(1.85rem,3vw,2.45rem)] font-medium leading-[1.14] tracking-[-0.032em] text-balance">
        {recommendationHeadline}
      </h2>
      <p className="mt-5 text-[15px] leading-relaxed">{recommendationIntro}</p>

      <div className="mt-12 rounded-2xl bg-velora-blush px-5 py-6 sm:mt-14 sm:px-8 sm:py-8">
        <h3 className="text-[15px] font-medium tracking-[-0.011em]">Det här har vi förstått om dig</h3>
        <ul className="mt-6 space-y-5 sm:mt-7 sm:space-y-6">
          {insights.map((insight) => (
            <li key={insight.label} className="flex gap-3.5">
              <Check className="mt-px size-3.5 shrink-0 text-velora-burgundy" />
              <div className="min-w-0">
                <p className="text-[11px] font-medium uppercase leading-4 tracking-[0.12em] velora-muted">{insight.label}</p>
                <p className="mt-1.5 text-[15px] font-medium leading-snug tracking-[-0.011em]">{insight.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-14 sm:mt-16">
        <h3 className={sectionTitle}>Vad händer nu?</h3>
        <ol className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {recommendationNextSteps.map((item) => (
            <li key={item.number}>
              <p className="text-[12px] font-medium tracking-[0.08em] text-velora-burgundy">{item.number}</p>
              <p className="mt-3 text-[15px] font-medium leading-snug tracking-[-0.011em]">{item.title}</p>
              <p className="mt-1.5 text-[15px] leading-relaxed velora-muted">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-14 border-t border-velora-border pt-12 sm:mt-16">
        <h3 className={sectionTitle}>Boka ditt första samtal</h3>
        <p className="mt-3 text-[15px] leading-relaxed">Välj en tid som passar dig.</p>
        <p className="mt-1.5 text-[13px] leading-5 velora-muted">30 min · Digitalt möte</p>

        {activeDate ? (
          <>
            <div
              role="radiogroup"
              aria-label="Välj datum"
              className="-mx-1 mt-7 flex gap-2 overflow-x-auto overflow-y-hidden px-1 py-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {dates.map((date) => {
                const selected = date.id === activeDate.id;
                return (
                  <button
                    key={date.id}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    onClick={() => chooseDate(date.id)}
                    className="velora-slot flex min-h-[4.5rem] min-w-[5.5rem] shrink-0 flex-col items-center justify-center rounded-[14px] px-3 py-2.5"
                  >
                    <span className={`text-[10px] font-medium tracking-[0.14em] ${selected ? "" : "velora-muted"}`}>
                      {date.kicker}
                    </span>
                    <span className="mt-1 text-[15px] font-medium tracking-[-0.02em]">{date.dayLabel}</span>
                  </button>
                );
              })}
            </div>

            <div role="radiogroup" aria-label={`Tider ${activeDate.dateLine}`} className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {activeDate.times.map((slot) => {
                const selected = time === slot;
                return (
                  <button
                    key={slot}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    onClick={() => setTime(slot)}
                    className="velora-slot flex min-h-12 items-center justify-center rounded-[14px] px-3 text-[15px] font-medium tracking-[-0.011em] tabular-nums"
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          </>
        ) : null}

        <div className="mt-8 sm:flex sm:flex-col sm:items-end">
          <BookingButton
            time={time}
            onClick={() => {
              if (!time || !activeDate) return;
              onBook(createBooking(activeDate, time));
            }}
          />
          <p className="mt-3 text-center text-[13px] leading-5 velora-muted sm:text-right">
            Du får en bekräftelse med all information inför mötet.
          </p>
        </div>
      </div>
    </div>
  );
}
