"use client";

import React from "react";
import { motion } from "framer-motion";

interface LiveGraphProps {
  colorClass?: string;
}

export function LiveGraph({ colorClass = "text-green-500" }: LiveGraphProps) {
  // We use scaleY from bottom origin for performant animation
  return (
    <div className={`flex items-end gap-1 h-6 mr-2 ${colorClass}`}>
      {[...Array(6)].map((_, i) => {
        // Vary the height scale sequences slightly based on index
        const scales =
          i % 2 === 0
            ? [0.3, 0.8, 0.4, 0.9, 0.5, 0.3]
            : [0.6, 0.2, 0.8, 0.4, 0.7, 0.6];

        // Slight randomization in duration and negative delay so they don't all start together
        const duration = 1.5 + i * 0.1;
        const delay = i * -0.3;

        return (
          <motion.div
            key={i}
            className="w-1.5 h-full bg-current rounded-full origin-bottom opacity-80"
            animate={{ scaleY: scales }}
            transition={{
              repeat: Infinity,
              duration,
              ease: "easeInOut",
              delay,
            }}
          />
        );
      })}
    </div>
  );
}
