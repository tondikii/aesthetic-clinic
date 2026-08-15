"use client";

import Image from "next/image";
import { ArrowDown, Check, MapPin } from "@phosphor-icons/react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { siteContent } from "@/content";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { springs, variants } from "@/lib/motion";

export function Hero() {
  const { scrollY } = useScroll();
  const reduced = useReducedMotion();
  const imageY = useTransform(scrollY, [0, 700], reduced ? [0, 0] : [0, 24]);
  const cardY = useTransform(scrollY, [0, 700], reduced ? [0, 0] : [0, -10]);
  const lines = siteContent.hero.title.split("\n");

  return <section id="top" className="relative overflow-hidden pt-28 lg:pt-36">
    <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:px-10 lg:pb-28">
      <motion.div initial="hidden" animate="visible" variants={variants.staggerChildren} className="relative z-10">
        <motion.div variants={variants.fadeUp} className="mb-7 inline-flex items-center gap-2 rounded-full border border-teal/20 bg-teal-tint px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-teal"><MapPin size={13} weight="fill" aria-hidden="true" />{siteContent.hero.eyebrow}</motion.div>
        <h1 className="max-w-[680px] font-display text-[clamp(2.9rem,6vw,5.7rem)] font-semibold leading-[0.98] tracking-[-0.065em] text-foreground">{lines.map((line) => <span key={line} className="block overflow-hidden pb-1"><motion.span variants={variants.maskReveal} className="inline-block">{line}</motion.span></span>)}</h1>
        <motion.p variants={variants.fadeUp} className="mt-7 max-w-lg text-base leading-7 text-muted sm:text-[17px]">{siteContent.hero.description}</motion.p>
        <motion.div variants={variants.fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"><WhatsAppButton message={siteContent.hero.whatsappMessage}>{siteContent.hero.primaryCta}</WhatsAppButton><a href="#treatment" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-foreground/15 px-5 text-sm font-semibold text-foreground transition-colors hover:border-teal hover:text-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal">{siteContent.hero.secondaryCta}<ArrowDown size={16} aria-hidden="true" /></a></motion.div>
        <motion.div variants={variants.fadeUp} className="mt-8 flex items-center gap-2 text-xs font-medium text-muted"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal text-white"><Check size={13} weight="bold" aria-hidden="true" /></span>{siteContent.hero.trustNote}</motion.div>
      </motion.div>
      <div className="relative mx-auto w-full max-w-[620px] lg:mr-0">
        <motion.div style={{ y: imageY }} className="relative aspect-[0.86] overflow-hidden rounded-[2rem] bg-sand shadow-[0_24px_70px_rgba(23,42,38,0.12)] sm:aspect-[0.94]"><Image src={siteContent.hero.image.src} alt={siteContent.hero.image.alt} fill priority sizes="(max-width: 1024px) 90vw, 52vw" className="object-cover" /></motion.div>
        <motion.div style={{ y: cardY }} transition={springs.soft} className="absolute -bottom-8 -left-4 w-36 overflow-hidden rounded-2xl border-8 border-background shadow-[0_18px_38px_rgba(23,42,38,0.18)] sm:-left-10 sm:w-48"><div className="relative aspect-[0.85]"><Image src={siteContent.hero.detailImage.src} alt={siteContent.hero.detailImage.alt} fill sizes="190px" className="object-cover" /></div><div className="bg-background px-3 py-3"><p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-teal">{siteContent.brand.name}</p><p className="mt-1 text-xs text-muted">{siteContent.brand.tagline}</p></div></motion.div>
        <div className="absolute -right-3 top-8 flex h-20 w-20 items-center justify-center rounded-full border border-white/60 bg-white/80 text-center shadow-lg backdrop-blur sm:-right-7 sm:h-24 sm:w-24"><span className="whitespace-pre-line font-display text-xs font-bold leading-tight text-teal">{siteContent.ui.floatingCare}</span></div>
      </div>
    </div>
  </section>;
}
