"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export const MOTION_FAST_MS = 160;
export const MOTION_BASE_MS = 240;

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return reduced;
}

type ScreenTransitionState = {
  shown: ReactNode;
  leaving: boolean;
  animate: boolean;
  visibleKey: string;
};

export function useScreenTransition(key: string, node: ReactNode): ScreenTransitionState {
  const reduced = usePrefersReducedMotion();
  const [visibleKey, setVisibleKey] = useState(key);
  const [animate, setAnimate] = useState(false);
  const frozenRef = useRef(node);

  if (key === visibleKey) frozenRef.current = node;

  useEffect(() => {
    if (key === visibleKey) return undefined;

    if (reduced) {
      setVisibleKey(key);
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setAnimate(true);
      setVisibleKey(key);
    }, MOTION_BASE_MS);

    return () => window.clearTimeout(timer);
  }, [key, visibleKey, reduced]);

  const leaving = !reduced && key !== visibleKey;

  return {
    shown: leaving ? frozenRef.current : node,
    leaving,
    animate,
    visibleKey: leaving ? visibleKey : key,
  };
}

export function TransitionFrame({
  transitionKey,
  transition,
  progress,
  children,
}: {
  transitionKey: string;
  transition: ScreenTransitionState;
  progress?: ReactNode;
  children: ReactNode;
}) {
  const progressRef = useRef(progress);
  if (transition.visibleKey === transitionKey) progressRef.current = progress;

  return (
    <>
      {transition.visibleKey === transitionKey ? progress : progressRef.current}
      <div
        className="velora-screen"
        data-phase={transition.leaving ? "out" : "in"}
        data-animate={transition.animate ? "true" : undefined}
        inert={transition.leaving ? true : undefined}
      >
        {children}
      </div>
    </>
  );
}

export function ScreenTransition({
  transitionKey,
  progress,
  children,
}: {
  transitionKey: string;
  progress?: ReactNode;
  children: ReactNode;
}) {
  const transition = useScreenTransition(transitionKey, children);

  return (
    <TransitionFrame transitionKey={transitionKey} transition={transition} progress={progress}>
      {transition.shown}
    </TransitionFrame>
  );
}
