"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GridPinProps {
  x: number;
  y: number;
  content?: React.ReactNode;
  delay?: number;
  className?: string;
}

export function GridPin({ x, y, content, delay = 0, className }: GridPinProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        delay: delay,
        duration: 0.5,
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      className={cn(
        "absolute w-12 h-12 bg-white rounded-lg shadow-lg border border-zinc-100 flex items-center justify-center z-20",
        className
      )}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)"
      }}
    >
      <motion.div
        animate={{ y: [-2, 2, -2] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay * 2
        }}
      >
        {content}
      </motion.div>
    </motion.div>
  );
}
