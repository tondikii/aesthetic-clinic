"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Clock, MapPin } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { siteContent } from "@/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { variants, viewport } from "@/lib/motion";

export function Clinic() {
  const [activeBranch, setActiveBranch] = useState(0);
  const branch = siteContent.clinic.branches[activeBranch];

  return (
    <section id="cabang" className="bg-white px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <SectionHeading {...siteContent.clinic.heading} />
          <motion.a initial="hidden" whileInView="visible" viewport={viewport} variants={variants.fadeUp} href={branch.maps} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-foreground/15 px-5 text-sm font-semibold text-foreground transition-colors hover:border-teal hover:text-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal">{siteContent.ui.viewOnMaps}<ArrowUpRight size={16} aria-hidden="true" /></motion.a>
        </div>
        <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label={siteContent.ui.branchTabs}>
          {siteContent.clinic.branches.map((item, index) => <button key={item.name} type="button" role="tab" aria-selected={index === activeBranch} onClick={() => setActiveBranch(index)} className={`min-h-11 rounded-full border px-5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal ${index === activeBranch ? "border-teal bg-teal text-white" : "border-sand text-muted hover:border-teal hover:text-teal"}`}>{item.name}</button>)}
        </div>
        <motion.div key={branch.name} initial="hidden" animate="visible" variants={variants.fadeUp} className="mt-6 flex flex-col gap-4 border-y border-sand py-5 text-sm text-muted sm:flex-row sm:items-center sm:gap-8"><span className="flex items-center gap-2"><MapPin size={17} className="text-teal" aria-hidden="true" />{branch.address}</span><span className="flex items-center gap-2"><Clock size={17} className="text-teal" aria-hidden="true" />{branch.hours}</span></motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={variants.staggerChildren} className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
          <motion.div variants={variants.fadeUp} className="relative col-span-2 aspect-[1.35] overflow-hidden rounded-2xl sm:row-span-2 sm:aspect-square"><Image src={siteContent.clinic.images[0].src} alt={siteContent.clinic.images[0].alt} fill sizes="(max-width: 640px) 92vw, 50vw" className="object-cover" /></motion.div>
          {siteContent.clinic.images.slice(1).map((image, index) => <motion.div variants={variants.fadeUp} key={image.src} className={`relative aspect-square overflow-hidden rounded-2xl ${index === 0 ? "col-span-2 sm:aspect-[2/1]" : index === 2 ? "col-span-2 sm:col-span-1" : "col-span-1"}`}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 45vw, 25vw" className="object-cover" /></motion.div>)}
        </motion.div>
      </div>
    </section>
  );
}
