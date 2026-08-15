"use client";

import { ChatCircleDots, FileText, Leaf, Path, type Icon } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { siteContent } from "@/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { variants, viewport } from "@/lib/motion";

const icons: Record<string, Icon> = { chat: ChatCircleDots, receipt: FileText, leaf: Leaf, path: Path };

export function Reasons() {
  return <section id="kenapa" className="bg-teal-tint px-5 py-24 sm:px-8 lg:px-10 lg:py-32"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-center"><SectionHeading {...siteContent.sectionHeadings.reasons} /><motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={variants.staggerChildren} className="grid gap-4 sm:grid-cols-2">{siteContent.reasons.map((reason, index) => { const Icon = icons[reason.icon]; return <motion.div variants={variants.fadeUp} key={reason.title} className={`rounded-2xl border border-teal/10 bg-white p-6 shadow-[0_8px_30px_rgba(15,118,110,0.05)] ${index % 2 ? "sm:translate-y-8" : ""}`}><div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-tint text-teal"><Icon size={22} weight="duotone" aria-hidden="true" /></div><h3 className="mt-6 font-display text-xl font-semibold tracking-[-0.04em]">{reason.title}</h3><p className="mt-2 text-sm leading-6 text-muted">{reason.description}</p></motion.div>; })}</motion.div></div></section>;
}
