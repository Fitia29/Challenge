"use client";

import { cn } from "cn";
import { motion } from "framer-motion";

type AnimatedTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export default function AnimatedTitle({
  children,
  className,
}: AnimatedTitleProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "text-secondary font-bold text-subtitle sm:text-[40px] max-xl:text-center max-md:w-full max-xl:w-[80%] xl:text-title uppercase xl:w-[776px] leading-[120%]",
        className,
      )}
    >
      {children}
    </motion.h2>
  );
}
