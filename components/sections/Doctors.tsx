"use client";

import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";
import { motion } from "motion/react";
import { siteContent, whatsappUrl } from "@/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { springs, variants, viewport } from "@/lib/motion";

export function Doctors() {
  return <section id="dokter" className="bg-white px-5 py-24 sm:px-8 lg:px-10 lg:py-32"><div className="mx-auto max-w-7xl"><SectionHeading {...siteContent.sectionHeadings.doctors} /><motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={variants.staggerChildren} className="mt-14 grid gap-5 md:grid-cols-3">{siteContent.doctors.map((doctor) => <motion.article key={doctor.name} variants={variants.fadeUp} whileHover={{ y: -5 }} transition={springs.hover} className="group"><div className="relative aspect-[0.82] overflow-hidden rounded-2xl bg-sand"><Image src={doctor.image} alt={doctor.alt} fill sizes="(max-width: 768px) 90vw, 30vw" className="object-cover grayscale-[0.08]" /></div><div className="px-1 pt-5"><div className="flex items-baseline justify-between gap-2"><h3 className="font-display text-xl font-semibold tracking-[-0.04em]">{doctor.name}</h3><span className="text-xs font-semibold text-teal">{doctor.title}</span></div><p className="mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-teal">{doctor.specialty}</p><p className="mt-3 text-sm leading-6 text-muted">{doctor.description}</p><a href={whatsappUrl(siteContent.messages.doctor)} target="_blank" rel="noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-foreground hover:text-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal">{siteContent.ui.doctorQuestion} <ArrowUpRight size={15} aria-hidden="true" /></a></div></motion.article>)}</motion.div></div></section>;
}
