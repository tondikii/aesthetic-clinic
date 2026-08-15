import type { Transition, Variants } from "motion/react";

export const springs = {
  hover: { type: "spring", stiffness: 300, damping: 25 } satisfies Transition,
  interactive: { type: "spring", stiffness: 400, damping: 40 } satisfies Transition,
  soft: { type: "spring", stiffness: 180, damping: 24 } satisfies Transition,
};

export const eases = {
  primary: [0.22, 1, 0.36, 1] as const,
};

export const variants: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: eases.primary } },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: eases.primary } },
  },
  maskReveal: {
    hidden: { y: "105%" },
    visible: { y: 0, transition: { duration: 0.8, ease: eases.primary } },
  },
  staggerChildren: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  },
};

export const viewport = { once: true, margin: "-80px" } as const;
