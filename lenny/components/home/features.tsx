"use client"

import { BookOpen, Users, Globe, ShieldCheck, Zap, Heart } from "lucide-react"
import { motion } from "framer-motion"

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { H2, Text } from "@/components/ui/typography"
import { Container, Section } from "@/components/layout/container"
import { cn } from "@/lib/utils"

const features = [
  {
    title: "Preloaded Books",
    description: "Thousands of open access titles included out of the box.",
    header: (
      <div className="w-full h-full p-6 sm:p-8 bg-zinc-50/50 dark:bg-zinc-950/50 flex items-center justify-center overflow-hidden">
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 w-full max-w-lg">
          {[
            "from-blue-100 to-blue-200",
            "from-emerald-100 to-emerald-200",
            "from-orange-100 to-orange-200",
            "from-indigo-100 to-indigo-200",
            "from-rose-100 to-rose-200",
            "from-amber-100 to-amber-200",
            "from-cyan-100 to-cyan-200",
            "from-violet-100 to-violet-200",
            "from-slate-100 to-slate-200",
            "from-teal-100 to-teal-200"
          ].map((gradient, i) => (
            <div key={i} className={cn(
              "aspect-[3/4.5] bg-gradient-to-br rounded-lg border border-zinc-200/50 dark:border-zinc-700/50 shadow-sm transition-all duration-500 hover:scale-110 cursor-default",
              gradient,
              "dark:from-zinc-800 dark:to-zinc-900"
            )}>
              <div className="h-full w-full p-2 flex flex-col justify-end gap-1">
                 <div className="h-0.5 w-2/3 bg-black/5 dark:bg-white/5 rounded-full" />
                 <div className="h-0.5 w-1/2 bg-black/5 dark:bg-white/5 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    icon: <Globe className="h-5 w-5 text-zinc-500" />,
    className: "md:col-span-2",
  },
  {
    title: "Mobile Apps",
    description: "Load your Lenny feed on any device.",
    header: (
      <div className="w-full h-full flex justify-center items-end px-6">
        <div className="relative w-[140px] h-full bg-zinc-950 rounded-t-[2.5rem] border-t-[6px] border-x-[6px] border-zinc-900 p-4 shadow-2xl ring-1 ring-white/10 overflow-hidden translate-y-2">
           {/* Dynamic Island */}
           <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-zinc-900 rounded-2xl flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-blue-500/50 ml-6" />
           </div>
           
           {/* Screen content */}
           <div className="mt-12 space-y-4">
              <div className="h-32 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 flex flex-col p-3 gap-2">
                 <div className="w-2/3 h-2 bg-zinc-800 rounded-full" />
                 <div className="flex-1 bg-zinc-800/30 rounded-xl animate-pulse" />
              </div>
              <div className="h-12 rounded-xl bg-zinc-900/50 border border-zinc-800/50 flex items-center px-3">
                 <div className="w-1/2 h-2 bg-zinc-800 rounded-full" />
              </div>
              <div className="h-12 rounded-xl bg-zinc-900/50 border border-zinc-800/50 flex items-center px-3">
                 <div className="w-1/3 h-2 bg-zinc-800 rounded-full" />
              </div>
           </div>
        </div>
      </div>
    ),
    icon: <BookOpen className="h-5 w-5 text-zinc-500" />,
    className: "md:col-span-1",
  },
  {
    title: "Bookshelf",
    description: "Securely store and host millions of digital books.",
    header: (
      <div className="relative w-full h-full p-8 flex flex-col gap-6 overflow-hidden bg-zinc-50 dark:bg-zinc-950/50">
        <div className="h-6 w-1/4 bg-zinc-200 dark:bg-zinc-800 rounded-lg" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 h-full flex flex-col p-4 gap-3 shadow-sm hover:shadow-md transition-shadow">
               <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full" />
               <div className="flex-1 bg-zinc-50 dark:bg-zinc-950 rounded-xl border border-zinc-100 dark:border-zinc-900" />
               <div className="h-1.5 w-2/3 bg-zinc-50 dark:bg-zinc-800 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    ),
    icon: <BookOpen className="h-5 w-5 text-zinc-500" />,
    className: "md:col-span-2",
  },
  {
    title: "Card Catalog",
    description: "Auto-sync metadata from OpenLibrary.",
    header: (
      <div className="w-full h-full flex flex-col items-center justify-center p-10 bg-zinc-50 dark:bg-zinc-950/50">
        <div className="w-full h-24 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl flex items-center px-8 gap-6 group-hover/bento:scale-105 transition-transform duration-500">
          <div className="h-12 w-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400">
             <Globe className="h-6 w-6" />
          </div>
          <div className="flex-1 space-y-3">
            <div className="h-3 w-40 bg-zinc-100 dark:bg-zinc-800 rounded-full" />
            <div className="h-3 w-24 bg-zinc-50 dark:bg-zinc-900 rounded-full" />
          </div>
        </div>
      </div>
    ),
    icon: <Globe className="h-5 w-5 text-zinc-500" />,
    className: "md:col-span-1",
  },
  {
    title: "Lending System",
    description: "Configurable rules & LCP support.",
    header: (
      <div className="w-full h-full flex items-end justify-center p-8 scale-105">
        <div className="w-full h-40 bg-zinc-100 dark:bg-zinc-800 rounded-t-3xl border-x border-t border-zinc-200 dark:border-zinc-700 p-6 space-y-6 shadow-inner">
            <div className="flex items-center justify-between">
               <div className="h-4 w-24 bg-zinc-200 dark:bg-zinc-700 rounded-full" />
               <div className="h-6 w-12 bg-green-100 dark:bg-green-900/30 rounded-full" />
            </div>
            <div className="space-y-3">
               <div className="h-2.5 w-full bg-zinc-200 dark:bg-zinc-700 rounded-full" />
               <div className="h-2.5 w-full bg-zinc-200 dark:bg-zinc-700 rounded-full" />
               <div className="h-2.5 w-3/4 bg-zinc-200 dark:bg-zinc-700 rounded-full" />
            </div>
        </div>
      </div>
    ),
    icon: <ShieldCheck className="h-5 w-5 text-zinc-500" />,
    className: "md:col-span-1",
  },
  {
    title: "Thorium Reader",
    description: "High-performance reading experience.",
    header: (
      <div className="relative w-full h-full bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-3xl m-6 overflow-hidden shadow-xl scale-105">
        <div className="absolute top-0 left-0 right-0 h-10 bg-zinc-50 dark:bg-zinc-800 border-b border-zinc-100 dark:border-zinc-700 px-4 flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>
        <div className="pt-16 p-8 space-y-6">
          <div className="space-y-3">
            <div className="h-4 w-1/2 bg-zinc-900 dark:bg-zinc-100 rounded-full" />
            <div className="h-2.5 w-1/4 bg-zinc-400 dark:bg-zinc-500 rounded-full" />
          </div>
          <div className="space-y-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-2.5 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full" />
            ))}
          </div>
        </div>
      </div>
    ),
    icon: <Zap className="h-5 w-5 text-zinc-500" />,
    className: "md:col-span-1",
  },
  {
    title: "Marketplace",
    description: "Expand your collection with ease.",
    header: (
      <div className="w-full h-full p-10 flex flex-col gap-8 items-center justify-center scale-110">
        <div className="grid grid-cols-2 gap-5 w-full">
           <div className="h-28 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-lg flex flex-col p-4 gap-3">
              <div className="h-12 w-full bg-zinc-50 dark:bg-zinc-900 rounded-xl" />
              <div className="h-2.5 w-2/3 bg-zinc-100 dark:bg-zinc-700 rounded-full" />
           </div>
           <div className="h-28 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-lg flex flex-col p-4 gap-3">
              <div className="h-12 w-full bg-zinc-50 dark:bg-zinc-900 rounded-xl" />
              <div className="h-2.5 w-2/3 bg-zinc-100 dark:bg-zinc-700 rounded-full" />
           </div>
        </div>
      </div>
    ),
    icon: <Users className="h-5 w-5 text-zinc-500" />,
    className: "md:col-span-1",
  },
]

export function Features() {
  return (
    <Section className="bg-transparent">
      <Container>
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <H2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Why Lenny?</H2>
          <Text className="text-xl text-muted-foreground">
             We provide the technology and support libraries need to thrive in the digital age, packaged in a beautiful, open-source experience.
          </Text>
        </div>
        
        <BentoGrid className="max-w-6xl mx-auto">
           {features.map((item, i) => (
             <BentoGridItem
               key={i}
               title={item.title}
               description={item.description}
               header={item.header}
               icon={item.icon}
               className={item.className}
             />
           ))}
        </BentoGrid>
      </Container>
    </Section>
  )
}
