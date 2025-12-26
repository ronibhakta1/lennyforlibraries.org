"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Container, Section } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { H1, Lead } from "@/components/ui/typography"

export function Hero() {
  return (
    <Section className="flex min-h-[70vh] md:min-h-[90vh] flex-col justify-center overflow-hidden py-16 md:py-32 lg:py-48 relative">
      <Container className="relative z-10 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-20 items-center text-left">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5 }}
             className="flex flex-col gap-6 sm:gap-8"
          >
            <H1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tightest font-bold text-primary leading-[0.95]">
              Lenny: The <br className="hidden sm:block" /> Library-in-a-Box
            </H1>
            <Lead className="max-w-xl text-base md:text-lg text-muted-foreground font-medium tracking-tight">
               Lenny is a plug-and-play, open-source, Library-in-a-Box that empowers libraries to preserve, own, and lend digital books on their own terms.
            </Lead>

            <div className="flex flex-wrap gap-3 mt-2">
              <a href="#installation">
                <Button size="lg" className="h-12 px-6 text-base rounded-full">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#about">
                <Button variant="outline" size="lg" className="h-12 px-6 text-base rounded-full bg-zinc-900 text-white hover:bg-zinc-800 hover:text-white border-zinc-900 dark:bg-black dark:text-white dark:border-zinc-800 dark:hover:bg-zinc-900 dark:hover:text-white">
                  Our Mission
                </Button>
              </a>
              <a href="https://reader.archive.org/?opds=https://lennyforlibraries.org/v1/api/opds" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="h-12 px-6 text-base rounded-full bg-white text-zinc-900 border-zinc-200 hover:bg-zinc-100 hover:text-zinc-900 dark:bg-black dark:text-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-900 dark:hover:text-zinc-50">
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
         <div className="absolute inset-0 bg-[#F4F4F4] dark:bg-[#0C0C0C]"></div>
         <div className="absolute h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] mask-radial-gradient"></div>
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-white/50 to-transparent dark:from-zinc-900/20 -z-10"></div>
         <div className="absolute top-[10%] left-[10%] w-[30%] h-[30%] bg-zinc-200/40 dark:bg-zinc-800/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
         <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-zinc-200/40 dark:bg-zinc-800/10 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </Section>
  )
}
