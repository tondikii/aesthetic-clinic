import { motion, type HTMLMotionProps } from "motion/react";
import { variants, viewport } from "@/lib/motion";

export function Reveal({ children, className = "", ...props }: HTMLMotionProps<"div">) {
  return <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={variants.fadeUp} className={className} {...props}>{children}</motion.div>;
}
