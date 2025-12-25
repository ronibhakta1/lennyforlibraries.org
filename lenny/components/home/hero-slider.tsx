"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/layout/container"

const partners = [
  { name: "Internet Archive" },
  { name: "Open Library" },
  { name: "Archive Labs" },
  { name: "Internet Archive" },
  { name: "Open Library" },
  { name: "Archive Labs" },
]

export function HeroPartnerSlider() {
  return (
    <div className="py-4 -mt-16 md:-mt-24 lg:-mt-32 bg-background overflow-hidden relative z-20">
      <Container>
        <div className="flex flex-col items-center gap-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Built by Libraries, For Libraries
          </p>
          <div className="relative flex w-full overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap gap-8 sm:gap-12 md:gap-16 items-center"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {[...partners, ...partners].map((partner, i) => (
                  <span
                  key={i}
                  className="text-sm sm:text-lg md:text-xl font-bold text-zinc-300 dark:text-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-default"
                >
                  {partner.name}
                </span>
              ))}
            </motion.div>
            
            {/* Gradient fades */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
          </div>
        </div>
      </Container>
    </div>
  )
}
