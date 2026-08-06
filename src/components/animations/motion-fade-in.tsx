"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import * as React from "react";
import { cn } from "@/lib/utils";

interface MotionFadeInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
}

export function MotionFadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.8,
  ...props
}: MotionFadeInProps) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Custom elegant easing
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
