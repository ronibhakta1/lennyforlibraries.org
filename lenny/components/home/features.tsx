"use client"

import { BookOpen, Users, Globe, ShieldCheck, Zap, Heart } from "lucide-react"
import { motion } from "framer-motion"

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { H2, Text } from "@/components/ui/typography"
import { Container, Section } from "@/components/layout/container"

const features = [
  {
    title: "Bookshelf",
    description: "Securely store and host millions of digital books on your own infrastructure.",
    header: (
      <div className="relative w-full h-full p-4 flex flex-col gap-2">
        <div className="h-4 w-1/2 bg-zinc-200 dark:bg-zinc-800 rounded-lg animate-pulse" />
        <div className="grid grid-cols-4 gap-2 flex-1">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="rounded-md bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 h-full" />
          ))}
        </div>
      </div>
    ),
    icon: <BookOpen className="h-5 w-5 text-zinc-500" />,
    className: "md:col-span-2",
  },
  {
    title: "Card Catalog",
    description: "Auto-sync metadata from OpenLibrary.org.",
    header: (
      <div className="w-full h-full flex flex-col items-center justify-center p-4">
        <div className="w-full h-12 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-100 dark:border-zinc-700 shadow-sm flex items-center px-4 gap-3">
          <div className="h-4 w-4 rounded-full bg-zinc-100 dark:bg-zinc-700" />
          <div className="h-2 w-24 bg-zinc-100 dark:bg-zinc-700 rounded-full" />
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
      <div className="w-full h-full flex items-end justify-center p-4">
        <div className="w-full h-24 bg-zinc-100 dark:bg-zinc-800 rounded-t-xl border-x border-t border-zinc-200 dark:border-zinc-700 p-2">
            <div className="h-2 w-1/2 bg-zinc-200 dark:bg-zinc-700 rounded-full mb-2" />
            <div className="h-2 w-3/4 bg-zinc-200 dark:bg-zinc-700 rounded-full" />
        </div>
      </div>
    ),
    icon: <ShieldCheck className="h-5 w-5 text-zinc-500" />,
    className: "md:col-span-1",
  },
  {
    title: "Thorium Reader",
    description: "High-performance browser reading.",
    header: (
      <div className="relative w-full h-full bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl m-2 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-6 bg-zinc-50 dark:bg-zinc-800 border-b border-zinc-100 dark:border-zinc-700 px-2 flex items-center gap-1">
          <div className="h-1.5 w-1.5 rounded-full bg-red-400" />
          <div className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
          <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
        </div>
        <div className="pt-8 p-4 space-y-2">
          <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full" />
          <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full" />
          <div className="h-2 w-2/3 bg-zinc-100 dark:bg-zinc-800 rounded-full" />
        </div>
      </div>
    ),
    icon: <Zap className="h-5 w-5 text-zinc-500" />,
    className: "md:col-span-1",
  },
  {
    title: "Marketplace",
    description: "Purchase new titles easily.",
    header: (
      <div className="w-full h-full p-6 flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
           <div className="h-16 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700" />
           <div className="h-16 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700" />
        </div>
      </div>
    ),
    icon: <Users className="h-5 w-5 text-zinc-500" />,
    className: "md:col-span-1",
  },
  {
    title: "Mobile Apps",
    description: "Directly load your Lenny feed.",
    header: (
      <div className="w-full h-full flex justify-center pt-8">
        <div className="w-[120px] h-[200px] bg-zinc-950 rounded-t-3xl border-x border-t border-zinc-800 p-3 shadow-2xl">
           <div className="h-1 w-8 bg-zinc-800 rounded-full mx-auto mb-4" />
           <div className="space-y-2">
              <div className="h-6 rounded-lg bg-zinc-900 border border-zinc-800" />
              <div className="h-6 rounded-lg bg-zinc-900 border border-zinc-800" />
           </div>
        </div>
      </div>
    ),
    icon: <BookOpen className="h-5 w-5 text-zinc-500" />,
    className: "md:col-span-1",
  },
  {
    title: "Preloaded Books",
    description: "Thousands of open access titles included.",
    header: (
      <div className="w-full h-full grid grid-cols-6 gap-2 p-4">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="aspect-[3/4] bg-white dark:bg-zinc-800 rounded-md border border-zinc-200 dark:border-zinc-700 shadow-sm" />
        ))}
      </div>
    ),
    icon: <Globe className="h-5 w-5 text-zinc-500" />,
    className: "md:col-span-3",
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
