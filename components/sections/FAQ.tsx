"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { siteContent } from "@/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { springs } from "@/lib/motion";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return <section id="faq" className="bg-background px-5 py-24 sm:px-8 lg:px-10 lg:py-32"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr]"><SectionHeading {...siteContent.faqHeading} /><div className="border-t border-sand">{siteContent.faq.map((item, index) => { const expanded = open === index; const answerId = `faq-answer-${index}`; return <div key={item.question} className="border-b border-sand"><button type="button" aria-expanded={expanded} aria-controls={answerId} onClick={() => setOpen(expanded ? null : index)} className="flex min-h-20 w-full items-center justify-between gap-5 text-left font-display text-base font-semibold tracking-[-0.02em] transition-colors hover:text-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal sm:text-lg">{item.question}<motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={springs.hover} className="shrink-0 text-teal"><CaretDown size={19} aria-hidden="true" /></motion.span></button><AnimatePresence initial={false}>{expanded && <motion.div id={answerId} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={springs.soft} className="overflow-hidden"><p className="max-w-2xl pb-6 pr-10 text-sm leading-7 text-muted">{item.answer}</p></motion.div>}</AnimatePresence></div>; })}</div></div></section>;
}
