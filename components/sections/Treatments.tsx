"use client";

import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { siteContent } from "@/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whatsappUrl } from "@/content";
import { springs, variants, viewport } from "@/lib/motion";

export function Treatments() {
  return <section id="treatment" className="bg-background px-5 py-24 sm:px-8 lg:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><SectionHeading {...siteContent.sectionHeadings.treatments} /><motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={variants.staggerChildren} className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{siteContent.treatments.map((treatment) => <motion.article key={treatment.name} variants={variants.fadeUp} whileHover={{ y: -6 }} transition={springs.hover} className="overflow-hidden rounded-2xl border border-sand/80 bg-white shadow-[0_4px_18px_rgba(23,42,38,0.03)]"><div className="relative aspect-[1.22] overflow-hidden"><Image src={treatment.image} alt={treatment.alt} fill sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 30vw" className="object-cover" /><div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-teal backdrop-blur">{treatment.category}</div></div><div className="p-6"><div className="flex items-start justify-between gap-4"><h3 className="font-display text-xl font-semibold tracking-[-0.04em]">{treatment.name}</h3><span className="shrink-0 rounded-full bg-teal-tint px-3 py-1.5 text-[11px] font-semibold text-teal">{siteContent.ui.pricePrefix} {treatment.price}</span></div><p className="mt-3 min-h-12 text-sm leading-6 text-muted">{treatment.description}</p><a href={whatsappUrl(`${siteContent.messages.treatment} ${treatment.name}.`)} target="_blank" rel="noreferrer" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal">{siteContent.ui.treatmentQuestion} <ArrowUpRight size={16} aria-hidden="true" /></a></div></motion.article>)}</motion.div></div></section>;
}
