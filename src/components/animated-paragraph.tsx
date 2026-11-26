"use client";

import { cn } from "cn";
import { motion } from "framer-motion";

type AnimatedParagraphProps = {
  children: React.ReactNode;
  className?: string;
};

export default function AnimatedParagraph({
  children,
  className,
}: AnimatedParagraphProps) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "max-xl:text-center font-[400] w-full lg:w-[776px] text-[13px] sm:text-paragraph text-secondary-foreground",
        className,
      )}
    >
      {children}
    </motion.p>
  );
}
