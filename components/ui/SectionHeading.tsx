import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { motion } from "motion/react";
import { variants, viewport } from "@/lib/motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  link?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "left", link }: SectionHeadingProps) {
  return (
    <motion.div
      className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants.staggerChildren}
    >
      <motion.p variants={variants.fadeUp} className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-teal">
        {eyebrow}
      </motion.p>
      <motion.h2 variants={variants.fadeUp} className="font-display text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-foreground sm:text-4xl lg:text-[3.25rem]">
        {title}
      </motion.h2>
      {description && <motion.p variants={variants.fadeUp} className="mt-5 max-w-xl text-[15px] leading-7 text-muted">{description}</motion.p>}
      {link && <motion.a variants={variants.fadeUp} href={link} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal">Lihat semua <ArrowUpRight size={16} aria-hidden="true" /></motion.a>}
    </motion.div>
  );
}
