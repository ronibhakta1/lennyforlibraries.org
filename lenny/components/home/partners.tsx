"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/layout/container"

const partners = [
  { name: "Internet Archive", logo: "Internet Archive" },
  { name: "Open Library", logo: "Open Library" },
  { name: "Archive Labs", logo: "Archive Labs" },
  { name: "The Common Crawl", logo: "Common Crawl" },
  { name: "DPLA", logo: "Digital Public Library" },
]

export function PartnersMarquee() {
  return (
    <div className="py-12 border-y border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/20 overflow-hidden">
      <Container>
        <div className="flex flex-col items-center gap-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            Built by Libraries, For Libraries
          </p>
          <div className="relative flex w-full overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap gap-16 items-center"
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
                  className="text-2xl md:text-3xl font-bold text-zinc-300 dark:text-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-default"
                >
                  {partner.name}
                </span>
              ))}
            </motion.div>
            
            {/* Gradients to fade edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-50/50 dark:from-zinc-950/20 to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-50/50 dark:from-zinc-950/20 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </Container>
    </div>
  )
}
