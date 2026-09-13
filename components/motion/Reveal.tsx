"use client";

import {
  createElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

type RevealGroupProps = {
  as?: ElementType;
  className?: string;
  stagger?: number;
  children: ReactNode;
} & Record<string, unknown>;

export function RevealGroup({
  as = "div",
  className,
  stagger = 100,
  children,
  ...rest
}: RevealGroupProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [visible]);

  return createElement(
    as,
    {
      ...rest,
      ref,
      className: ["reveal-group", visible ? "is-visible" : null, className]
        .filter(Boolean)
        .join(" "),
      style: {
        "--reveal-stagger": `${stagger}ms`,
      } as CSSProperties,
    },
    children,
  );
}

type RevealItemProps = {
  step?: number;
  variant?: "default" | "label" | "portrait";
  className?: string;
  as?: ElementType;
  children: ReactNode;
};

export function RevealItem({
  step = 0,
  variant = "default",
  className,
  as = "div",
  children,
}: RevealItemProps) {
  return createElement(
    as,
    {
      className: [
        "reveal-item",
        variant === "label" ? "reveal-item-label" : null,
        variant === "portrait" ? "reveal-item-portrait" : null,
        className,
      ]
        .filter(Boolean)
        .join(" "),
      style: { "--reveal-step": step } as CSSProperties,
    },
    children,
  );
}

export function Reveal({
  className,
  variant = "default",
  children,
}: {
  className?: string;
  variant?: RevealItemProps["variant"];
  children: ReactNode;
}) {
  return (
    <RevealGroup className={className}>
      <RevealItem variant={variant}>{children}</RevealItem>
    </RevealGroup>
  );
}
