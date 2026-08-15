"use client";

import { Sparkle } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { siteContent } from "@/content";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { variants, viewport } from "@/lib/motion";

export function FinalCTA() {
  const cta = siteContent.finalCta;
  return (
    <section className="px-5 pb-6 sm:px-8 lg:px-10">
      <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={variants.staggerChildren} className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-teal px-7 py-14 text-white sm:px-14 sm:py-20 lg:px-20">
        <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border border-teal-200/20" />
        <div className="absolute -bottom-28 right-28 h-72 w-72 rounded-full border border-teal-200/10" />
        <motion.p variants={variants.fadeUp} className="relative flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-100"><Sparkle size={14} weight="fill" aria-hidden="true" />{cta.eyebrow}</motion.p>
        <motion.h2 variants={variants.fadeUp} className="relative mt-5 max-w-2xl font-display text-3xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-[4rem]">{cta.title}</motion.h2>
        <motion.p variants={variants.fadeUp} className="relative mt-5 max-w-lg text-sm leading-7 text-teal-50/80">{cta.description}</motion.p>
        <motion.div variants={variants.fadeUp} className="relative mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center"><WhatsAppButton className="!bg-white !text-teal shadow-none hover:!bg-teal-tint" message={cta.whatsappMessage}>{cta.button}</WhatsAppButton><span className="text-xs text-teal-100/70">{cta.note}</span></motion.div>
      </motion.div>
    </section>
  );
}
