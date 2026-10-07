import { ScreenTransition } from "./motion";
import { SectionProgress } from "./SectionProgress";
import { sanitizeInteger, type AboutView } from "./about-you";

type AboutYouProps = {
  section: string;
  view: AboutView;
  viewIndex: number;
  viewCount: number;
  values: Record<string, string | undefined>;
  onChange: (id: AboutView["fields"][number]["id"], value: string) => void;
};

function Check({ className, on }: { className?: string; on?: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      data-on={on === undefined ? undefined : on ? "true" : "false"}
      fill="none"
      aria-hidden="true"
    >
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

export function AboutYou({ section, view, viewIndex, viewCount, values, onChange }: AboutYouProps) {
  const current = viewIndex + 1;

  return (
    <ScreenTransition
      transitionKey={view.id}
      progress={<SectionProgress section={section} current={current} total={viewCount} />}
    >
      <p className="sr-only" aria-live="polite">
        {section}. Del {current} av {viewCount}. {view.title}
      </p>
      <h2 className="text-[clamp(1.85rem,3vw,2.45rem)] font-medium leading-[1.14] tracking-[-0.032em] text-balance">
        {view.title}
      </h2>
      <div className="mt-8 space-y-8">
        {view.fields.map((field) => {
          const value = values[field.id] ?? "";
          if (field.kind === "choice") {
            const labelId = `about-${field.id}-label`;
            return (
              <div key={field.id}>
                <p id={labelId} className="text-[17px] font-medium leading-snug tracking-[-0.02em]">
                  {field.label}
                </p>
                <div role="group" aria-labelledby={labelId} className="mt-3 grid grid-cols-2 gap-3">
                  {field.options.map((option) => {
                    const selected = value === option.value;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => onChange(field.id, option.value)}
                        className="velora-option"
                      >
                        <span>{option.label}</span>
                        <span className="velora-option-mark">
                          <Check className="velora-option-check size-3" on={selected} />
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          }

          const inputId = `about-${field.id}`;
          const unitId = `${inputId}-unit`;
          return (
            <div key={field.id}>
              <label htmlFor={inputId} className="text-[17px] font-medium leading-snug tracking-[-0.02em]">
                {field.label}
              </label>
              <div className="velora-field mt-3">
                <input
                  id={inputId}
                  inputMode="numeric"
                  autoComplete="off"
                  maxLength={3}
                  placeholder={field.placeholder}
                  value={value}
                  aria-describedby={unitId}
                  onChange={(event) => onChange(field.id, sanitizeInteger(event.target.value))}
                />
                <span id={unitId} className="velora-field-unit">
                  {field.unit}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </ScreenTransition>
  );
}
