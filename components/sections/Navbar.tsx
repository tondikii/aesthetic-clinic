"use client";

import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";
import { siteContent } from "@/content";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { springs, variants } from "@/lib/motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [demoDismissed, setDemoDismissed] = useState(false);

  const dismissDemoBanner = () => setDemoDismissed(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-sand/70 bg-background/90 shadow-[0_8px_30px_rgba(23,42,38,0.05)] backdrop-blur-xl" : "bg-transparent"}`}>
      <AnimatePresence>
        {!demoDismissed && (
          <motion.div
            key="demo-banner"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative flex items-center justify-center gap-2 overflow-hidden border-b border-sand/70 bg-teal-tint px-4 py-1.5 text-center"
          >
            <span className="rounded-full bg-teal px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-background">
              {siteContent.ui.demoBanner.badge}
            </span>
            <p className="text-xs text-muted">{siteContent.ui.demoBanner.text}</p>
            <button
              type="button"
              onClick={dismissDemoBanner}
              aria-label={siteContent.ui.demoBanner.close}
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-muted/70 transition-colors duration-200 hover:bg-teal/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
            >
              <X size={14} aria-hidden="true" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#top" className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-teal/30 text-teal"><span className="font-display text-lg">L</span></span>
          <span className="leading-none"><span className="block font-display text-[17px] font-bold tracking-[-0.04em]">{siteContent.brand.name}</span><span className="mt-1 block text-[8px] font-semibold uppercase tracking-[0.18em] text-muted">{siteContent.brand.descriptor}</span></span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigasi utama">
          {siteContent.nav.map((item) => <a key={item.href} href={item.href} className="py-3 text-[13px] font-medium text-muted transition-colors hover:text-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal">{item.label}</a>)}
        </nav>
        <div className="hidden lg:block"><WhatsAppButton>{siteContent.brand.whatsappLabel}</WhatsAppButton></div>
        <button type="button" aria-label={open ? siteContent.ui.closeMenu : siteContent.ui.openMenu} aria-expanded={open} onClick={() => setOpen(!open)} className="flex h-11 w-11 items-center justify-center rounded-full border border-sand text-foreground lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal">
          {open ? <X size={21} aria-hidden="true" /> : <List size={21} aria-hidden="true" />}
        </button>
      </div>
      <AnimatePresence>
        {open && <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={springs.soft} className="border-t border-sand/70 bg-background px-5 py-6 lg:hidden">
          <motion.nav initial="hidden" animate="visible" variants={variants.staggerChildren} className="flex flex-col gap-2" aria-label="Navigasi mobile">
            {siteContent.nav.map((item) => <motion.a variants={variants.fadeUp} key={item.href} href={item.href} onClick={() => setOpen(false)} className="border-b border-sand/70 py-4 font-display text-2xl font-semibold tracking-[-0.04em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal">{item.label}</motion.a>)}
            <motion.div variants={variants.fadeUp} className="pt-4"><WhatsAppButton className="w-full">{siteContent.brand.whatsappLabel}</WhatsAppButton></motion.div>
          </motion.nav>
        </motion.div>}
      </AnimatePresence>
    </header>
  );
}
