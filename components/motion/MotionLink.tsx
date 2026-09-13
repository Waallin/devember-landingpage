import type { ComponentProps, ReactNode } from "react";

type ArrowKind = "forward" | "external";

function splitArrow(label: string): {
  text: string;
  arrow: "→" | "↗" | null;
  kind: ArrowKind | null;
  spaced: boolean;
} {
  if (label.endsWith(" ↗")) {
    return { text: label.slice(0, -2), arrow: "↗", kind: "external", spaced: true };
  }
  if (label.endsWith("↗")) {
    return { text: label.slice(0, -1), arrow: "↗", kind: "external", spaced: false };
  }
  if (label.endsWith(" →")) {
    return { text: label.slice(0, -2), arrow: "→", kind: "forward", spaced: true };
  }
  if (label.endsWith("→")) {
    return { text: label.slice(0, -1), arrow: "→", kind: "forward", spaced: false };
  }
  return { text: label, arrow: null, kind: null, spaced: false };
}

export function MotionLink({
  href,
  children,
  className,
  ...props
}: ComponentProps<"a">) {
  const parsed = typeof children === "string" ? splitArrow(children) : null;

  return (
    <a href={href} className={["motion-link", className].filter(Boolean).join(" ")} {...props}>
      {parsed ? (
        <>
          {parsed.text}
          {parsed.arrow && parsed.kind ? (
            <>
              {parsed.spaced ? " " : null}
              <span className={`motion-arrow motion-arrow-${parsed.kind}`}>
                {parsed.arrow}
              </span>
            </>
          ) : null}
        </>
      ) : (
        (children as ReactNode)
      )}
    </a>
  );
}
