"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Container, Section } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { H1, Lead } from "@/components/ui/typography"

export function Hero() {
  return (
    <Section className="flex min-h-[80vh] flex-col items-center justify-center overflow-hidden py-8 md:py-16 relative">
      <Container className="relative z-10 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-20 items-center text-left">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5 }}
             className="flex flex-col gap-6 sm:gap-8"
          >
            <H1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tightest font-bold text-primary leading-[0.95]">
              Lenny: The <br className="hidden sm:block" />Library-in-a-Box
            </H1>
            <Lead className="max-w-xl text-base md:text-lg text-muted-foreground font-medium tracking-tight">
               Lenny is a plug-and-play, open-source, Library-in-a-Box that empowers libraries to preserve, own, and lend digital books on their own terms.
            </Lead>

            <div className="flex flex-wrap gap-3 mt-2">
              <a href="#installation">
                <Button size="lg" variant="accent" className="h-12 px-7 text-base rounded-lg">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#about">
                <Button variant="outline" size="lg" className="h-12 px-6 text-base rounded-lg border-zinc-300 text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800">
                  Our Mission
                </Button>
              </a>
              <a href="https://reader.archive.org/?opds=https://lennyforlibraries.org/v1/api/opds" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="lg" className="h-12 px-6 text-base rounded-lg text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800">
                  Playground
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="w-full relative"
          >
             <div className="relative w-full aspect-[16/9] rounded-2xl md:rounded-3xl border border-zinc-200 bg-black shadow-2xl dark:border-zinc-800 overflow-hidden group">
                <iframe 
                  src="https://archive.org/embed/lenny_202508" 
                  className="w-full h-full"
                  frameBorder="0" 
                  allowFullScreen
                />
                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-2xl md:rounded-3xl"></div>
             </div>
          </motion.div>
        </div>
      </Container>
      
      {/* Background Grid Pattern & Glows */}
      <div className="absolute inset-0 -z-10 h-full w-full">
         <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-950"></div>
         <div className="absolute h-full w-full bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      </div>
    </Section>
  )
}
