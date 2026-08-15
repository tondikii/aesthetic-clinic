import { ArrowUpRight, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { motion } from "motion/react";
import { springs } from "@/lib/motion";
import { whatsappUrl } from "@/content";

type WhatsAppButtonProps = { children: React.ReactNode; className?: string; message?: string; showArrow?: boolean };

export function WhatsAppButton({ children, className = "", message, showArrow = true }: WhatsAppButtonProps) {
  return (
    <motion.a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={springs.hover}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-teal px-5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(15,118,110,0.18)] transition-colors hover:bg-teal-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 ${className}`}
    >
      <WhatsappLogo size={18} weight="fill" aria-hidden="true" />
      {children}
      {showArrow && <ArrowUpRight size={16} aria-hidden="true" />}
    </motion.a>
  );
}
