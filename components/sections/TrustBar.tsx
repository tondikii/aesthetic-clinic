"use client";

import { MapPin, ShieldCheck, Sparkle, Star } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { siteContent } from "@/content";
import { variants, viewport } from "@/lib/motion";

const icons = { star: Star, sparkle: Sparkle, pin: MapPin, shield: ShieldCheck };

export function TrustBar() {
  return <section className="border-y border-sand/80 bg-white/60"><motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={variants.staggerChildren} className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-sand/80 sm:grid-cols-4 sm:divide-y-0 sm:px-8 lg:px-10">{siteContent.trust.map((item) => { const Icon = icons[item.icon]; return <motion.div variants={variants.fadeUp} key={item.label} className="flex items-center justify-center gap-3 px-4 py-5 sm:justify-start sm:border-r sm:border-sand/80 sm:last:border-r-0 lg:px-7"><span className="text-teal"><Icon size={21} weight="duotone" aria-hidden="true" /></span><div><p className="font-display text-lg font-bold tracking-[-0.04em]">{item.value}<span className="text-teal">{item.suffix}</span></p><p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.1em] text-muted">{item.label}</p></div></motion.div>; })}</motion.div><p className="mx-auto max-w-7xl px-5 py-2 text-center text-[10px] text-muted sm:px-8 lg:px-10">{siteContent.ui.trustDisclaimer}</p></section>;
}
