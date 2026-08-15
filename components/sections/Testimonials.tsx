"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Quotes, Star } from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { siteContent } from "@/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { springs } from "@/lib/motion";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const testimonials = siteContent.testimonials;
  const go = (direction: number) => setActive((current) => (current + direction + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (paused || reduced) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % testimonials.length), 6000);
    return () => window.clearInterval(timer);
  }, [paused, reduced, testimonials.length]);

  useEffect(() => {
    const section = document.getElementById("testimoni");
    if (!section) return;
    const pause = () => setPaused(true);
    const resume = () => setPaused(false);
    section.addEventListener("focusin", pause);
    section.addEventListener("focusout", resume);
    return () => { section.removeEventListener("focusin", pause); section.removeEventListener("focusout", resume); };
  }, []);

  const item = testimonials[active];
  return <section id="testimoni" className="bg-background px-5 py-24 sm:px-8 lg:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><SectionHeading {...siteContent.sectionHeadings.testimonials} /><div className="flex gap-2"><button type="button" aria-label={siteContent.ui.previous} onClick={() => go(-1)} className="flex h-12 w-12 items-center justify-center rounded-full border border-sand text-foreground transition-colors hover:border-teal hover:text-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"><ArrowLeft size={18} aria-hidden="true" /></button><button type="button" aria-label={siteContent.ui.next} onClick={() => go(1)} className="flex h-12 w-12 items-center justify-center rounded-full bg-teal text-white transition-colors hover:bg-teal-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"><ArrowRight size={18} aria-hidden="true" /></button></div></div><div className="mt-12" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}><p className="sr-only" aria-live="polite">{siteContent.ui.testimonialPosition} {active + 1} dari {testimonials.length}: {item.name}</p><AnimatePresence mode="wait"><motion.figure key={item.name} initial={{ opacity: 0, x: 20, scale: 0.98 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: -20, scale: 0.98 }} transition={springs.soft} className="relative overflow-hidden rounded-3xl bg-teal-dark px-7 py-10 text-white sm:px-14 sm:py-14 lg:px-20 lg:py-20"><Quotes size={100} weight="fill" className="absolute -right-3 -top-5 text-teal-700/50" aria-hidden="true" /><blockquote className="relative max-w-4xl font-display text-2xl font-medium leading-[1.2] tracking-[-0.04em] sm:text-4xl lg:text-5xl">“{item.quote}”</blockquote><figcaption className="relative mt-10 flex items-center gap-4"><span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-200 font-display text-sm font-bold text-teal-dark">{item.initials}</span><span><span className="block text-sm font-semibold">{item.name}</span><span className="mt-1 block text-xs text-teal-100/70">{item.detail}</span></span><span className="ml-auto hidden items-center gap-1 text-teal-200 sm:flex">{[1, 2, 3, 4, 5].map((star) => <Star key={star} size={14} weight="fill" aria-hidden="true" />)}</span></figcaption></motion.figure></AnimatePresence><div className="mt-5 flex items-center justify-between"><p className="text-xs font-medium text-muted"><span className="font-semibold text-foreground">{String(active + 1).padStart(2, "0")}</span> / {String(testimonials.length).padStart(2, "0")}</p><div className="flex gap-2" role="tablist" aria-label={siteContent.ui.testimonialTabs}>{testimonials.map((testimonial, index) => <button type="button" role="tab" aria-selected={index === active} aria-label={testimonial.name} key={testimonial.name} onClick={() => setActive(index)} className={`h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal ${index === active ? "w-8 bg-teal" : "w-2 bg-sand hover:bg-teal/50"}`} />)}</div></div></div></div></section>;
}
