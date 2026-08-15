"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Sparkle } from "@phosphor-icons/react";
import { AnimatePresence, animate, motion, useMotionValue, useReducedMotion, useTransform } from "motion/react";
import { siteContent } from "@/content";
import { springs, variants, viewport } from "@/lib/motion";

export function BeforeAfter() {
  const [active, setActive] = useState(0);
  const [value, setValue] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [interacted, setInteracted] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const dragRect = useRef<DOMRect | null>(null);
  const position = useMotionValue(50);
  const clip = useTransform(position, (v) => `inset(0 ${100 - v}% 0 0)`);
  const x = useTransform(position, (v) => (v / 100) * containerWidth);
  const current = siteContent.comparisons[active];

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;
    const update = () => setContainerWidth(element.getBoundingClientRect().width);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const setFromPointer = useCallback((clientX: number) => {
    const rect = dragRect.current ?? containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    position.set(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  }, [position]);

  useEffect(() => {
    if (!dragging) return;
    const move = (event: PointerEvent) => setFromPointer(event.clientX);
    const end = () => { setValue(Math.round(position.get())); setDragging(false); };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", end);
    return () => { window.removeEventListener("pointermove", move); window.removeEventListener("pointerup", end); };
  }, [dragging, position, setFromPointer]);

  const keyboardMove = (next: number) => {
    setInteracted(true);
    const target = Math.min(100, Math.max(0, next));
    setValue(target);
    if (reduced) position.set(target);
    else animate(position, target, springs.interactive);
  };

  const selectComparison = (index: number) => {
    setActive(index);
    setInteracted(false);
    setValue(50);
    if (reduced) position.set(50);
    else animate(position, 50, springs.interactive);
  };

  const startDrag = (clientX: number) => {
    dragRect.current = containerRef.current?.getBoundingClientRect() ?? null;
    setInteracted(true);
    setDragging(true);
    setFromPointer(clientX);
  };

  return (
    <section id="before-after" className="bg-teal-dark px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={variants.staggerChildren}>
              <motion.p variants={variants.fadeUp} className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-200"><Sparkle size={14} weight="fill" aria-hidden="true" />{current.note}</motion.p>
              <motion.h2 variants={variants.fadeUp} className="max-w-lg font-display text-3xl font-semibold leading-[1.08] tracking-[-0.05em] sm:text-4xl lg:text-[3.3rem]">{siteContent.showcase.title}</motion.h2>
              <motion.p variants={variants.fadeUp} className="mt-5 max-w-md text-sm leading-7 text-teal-100/75">{siteContent.showcase.description}</motion.p>
            </motion.div>
            <div className="mt-8 flex flex-wrap gap-2">{siteContent.comparisons.map((item, index) => <button key={item.label} type="button" aria-pressed={index === active} onClick={() => selectComparison(index)} className={`min-h-11 rounded-full border px-4 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-200 ${index === active ? "border-teal-200 bg-teal-200 text-teal-dark" : "border-teal-700 text-teal-100 hover:border-teal-300"}`}>{item.label}</button>)}</div>
          </div>
          <div ref={containerRef} onPointerDown={(event) => startDrag(event.clientX)} className="relative aspect-[1.15] w-full touch-none select-none overflow-hidden rounded-2xl border border-teal-700 bg-teal-900 shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:aspect-[1.45]">
            <AnimatePresence mode="wait"><motion.div key={current.label} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0.01 : 0.4 }} className="absolute inset-0"><Image src={current.after} alt={current.altAfter} fill sizes="(max-width: 1024px) 92vw, 66vw" className="object-cover" /></motion.div></AnimatePresence>
            <motion.div style={{ clipPath: clip }} className="absolute inset-0 z-10 overflow-hidden"><Image src={current.before} alt={current.altBefore} fill sizes="(max-width: 1024px) 92vw, 66vw" className="object-cover" /></motion.div>
            <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-between p-4 text-[10px] font-semibold uppercase tracking-[0.15em]"><span className="rounded-full bg-black/30 px-3 py-2 backdrop-blur">{siteContent.ui.beforeLabel}</span><span className="rounded-full bg-black/30 px-3 py-2 backdrop-blur">{siteContent.ui.afterLabel}</span></div>
            <motion.div style={{ x }} animate={{ scaleX: dragging ? 1.12 : 1 }} className="absolute inset-y-0 left-0 z-30 w-0">
              <div className="absolute inset-y-0 left-0 w-px bg-white" />
              <button type="button" role="slider" aria-label={siteContent.ui.compareHint} aria-valuemin={0} aria-valuemax={100} aria-valuenow={value} onKeyDown={(event) => { const step = event.shiftKey ? 20 : 5; if (event.key === "ArrowLeft") { event.preventDefault(); keyboardMove(value - step); } if (event.key === "ArrowRight") { event.preventDefault(); keyboardMove(value + step); } if (event.key === "Home") { event.preventDefault(); keyboardMove(0); } if (event.key === "End") { event.preventDefault(); keyboardMove(100); } }} onPointerDown={(event) => { event.stopPropagation(); startDrag(event.clientX); }} className="absolute left-0 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-teal text-white shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-200"><ArrowLeft size={15} aria-hidden="true" /><ArrowRight size={15} aria-hidden="true" /></button>
            </motion.div>
            {!interacted && <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="pointer-events-none absolute bottom-5 left-1/2 z-20 -translate-x-1/2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-teal-dark shadow-lg">{siteContent.ui.compareHint}</motion.div>}
          </div>
        </div>
      </div>
    </section>
  );
}
