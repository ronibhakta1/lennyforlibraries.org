"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Container, Section } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { H1, Lead } from "@/components/ui/typography"

export function Hero() {
  return (
    <Section className="flex min-h-[90vh] flex-col justify-center overflow-hidden py-32 md:py-48 relative">
      <Container className="relative z-10 flex flex-col items-center text-center max-w-5xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           className="space-y-8"
        >
          <div className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-sm font-medium text-zinc-900 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100">
             <span className="flex h-2 w-2 rounded-full bg-black dark:bg-white mr-2"></span>
             Lenny v1.0 is now live
          </div>
          <H1 className="text-6xl md:text-8xl tracking-tightest font-bold text-primary">
            Lenny: The <br /> Library-in-a-Box
          </H1>
          <Lead className="mx-auto max-w-2xl text-xl md:text-2xl text-muted-foreground font-medium tracking-tight">
             Lenny is a plug-and-play, open-source, Library-in-a-Box that empowers libraries to preserve, own, and lend digital books on their own terms.
          </Lead>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <Link href="/contact">
            <Button size="lg" className="h-14 px-8 text-lg rounded-full">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full bg-white dark:bg-black">
              Our Mission
            </Button>
          </Link>
        </motion.div>

        {/* Abstract UI Representation - Simulated "Cal.com" style UI interaction */}
        <motion.div 
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="mt-24 w-full relative"
        >
           <div className="relative mx-auto max-w-[900px] aspect-[16/10] rounded-t-3xl border border-b-0 border-zinc-200 bg-white shadow-[0_-20px_80px_-20px_#ffffff_inset] dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-[0_-20px_80px_-20px_#000000_inset] overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-12 border-b border-zinc-100 bg-zinc-50/50 flex items-center px-4 space-x-2 dark:border-zinc-900 dark:bg-zinc-900/50">
                 <div className="h-3 w-3 rounded-full bg-red-400/20 border border-red-500/30"></div>
                 <div className="h-3 w-3 rounded-full bg-amber-400/20 border border-amber-500/30"></div>
                 <div className="h-3 w-3 rounded-full bg-green-400/20 border border-green-500/30"></div>
              </div>
              <div className="p-8 pt-20 grid grid-cols-3 gap-6 opacity-40 grayscale-[50%]">
                 {/* Skeletal UI content */}
                 <div className="col-span-1 h-40 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"></div>
                 <div className="col-span-2 h-40 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"></div>
                 <div className="col-span-3 h-24 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"></div>
              </div>
              {/* Gradient fade at bottom to blend with section */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F4F4F4] to-transparent dark:from-[#0C0C0C]"></div>
           </div>
        </motion.div>
      </Container>
      
      {/* Background Grid Pattern & Glows */}
      <div className="absolute inset-0 -z-10 h-full w-full">
         <div className="absolute inset-0 bg-[#F4F4F4] dark:bg-[#0C0C0C]"></div>
         <div className="absolute h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-white/50 to-transparent dark:from-zinc-900/20 -z-10"></div>
         <div className="absolute top-[10%] left-[10%] w-[30%] h-[30%] bg-zinc-200/40 dark:bg-zinc-800/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
         <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-zinc-200/40 dark:bg-zinc-800/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </Section>
  )
}
