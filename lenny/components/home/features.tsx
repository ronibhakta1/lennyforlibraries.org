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
            "/images/features/book covers/0012622006-L.jpg",
            "/images/features/book covers/ring-lardner_jack-keefe-stories-c3c1432e-cover@2x.avif",
            "/images/features/book covers/w-r-burnett_little-caesar-c3c1432e-cover@2x.avif",
            "/images/features/book covers/c-s-forester_payment-deferred-c3c1432e-cover@2x.avif",
            "/images/features/book covers/h-g-wells_in-the-days-of-the-comet-c3c1432e-cover@2x.avif",
            "/images/features/book covers/0013220577-L.jpg",
            "/images/features/book covers/louis-joseph-vance_the-lone-wolf-c3c1432e-cover@2x.avif",
            "/images/features/book covers/r-austin-freeman_the-mystery-of-31-new-inn-c3c1432e-cover@2x.avif",
            "/images/features/book covers/walter-bagehot_the-english-constitution-c3c1432e-cover@2x.avif",
            "/images/features/book covers/william-gerhardie_futility-c3c1432e-cover@2x.avif"
          ].map((cover, i) => (
            <div key={i} className={cn(
              "aspect-[3/4.5] bg-zinc-100 dark:bg-zinc-800 rounded-lg border border-zinc-200/50 dark:border-zinc-700/50 shadow-sm transition-all duration-500 hover:scale-110 cursor-default overflow-hidden"
            )}>
              <img 
                src={cover} 
                className="w-full h-full object-cover"
                alt={`Book Cover ${i + 1}`}
              />
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
        <div className="relative w-[180px] h-full bg-zinc-950 rounded-t-[2.5rem] border-t-[6px] border-x-[6px] border-zinc-900 p-4 shadow-2xl ring-1 ring-white/10 overflow-hidden translate-y-2">
           {/* Dynamic Island */}
           <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-zinc-900 rounded-2xl flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-blue-500/50 ml-6" />
           </div>
           
           {/* Screen content */}
            <div className="mt-12 space-y-4">
               <div className="h-32 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 flex flex-col overflow-hidden">
                  <div className="p-2 pb-1">
                    <span className="text-[10px] font-semibold text-zinc-400">Now Reading</span>
                  </div>
                  <div className="flex-1 relative bg-zinc-800/30">
                     <img 
                       src="/images/features/book covers/0012622006-L.jpg" 
                       className="absolute inset-0 w-full h-full object-cover opacity-80"
                       alt="Book Cover"
                     />
                     <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                       <span className="text-[10px] font-bold text-white">The Dream</span>
                     </div>
                  </div>
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
        <div className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          Your Bookshelf
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
          {[
            { title: "English Constitution", cover: "/images/features/book covers/walter-bagehot_the-english-constitution-c3c1432e-cover@2x.avif" },
            { title: "The Lone Wolf", cover: "/images/features/book covers/louis-joseph-vance_the-lone-wolf-c3c1432e-cover@2x.avif" },
            { title: "31 New Inn", cover: "/images/features/book covers/r-austin-freeman_the-mystery-of-31-new-inn-c3c1432e-cover@2x.avif" },
            { title: "Disappointed Man", cover: "/images/features/book covers/w-n-p-barbellion_the-journal-of-a-disappointed-man-c3c1432e-cover@2x.avif" }
          ].map((book, i) => (
            <div key={i} className="rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 h-full flex flex-col overflow-hidden shadow-sm hover:shadow-md transition-shadow group/card">
               <div className="aspect-[3/4] w-full overflow-hidden border-b border-zinc-100 dark:border-zinc-800">
                 <img 
                   src={book.cover} 
                   alt={book.title}
                   className="w-full h-full object-cover grayscale transition-all group-hover/card:grayscale-0 group-hover/card:scale-105 duration-500"
                 />
               </div>
               <div className="p-3">
                 <div className="text-[10px] font-bold text-zinc-900 dark:text-zinc-100 truncate">
                   {book.title}
                 </div>
                 <div className="h-1 w-1/2 bg-zinc-100 dark:bg-zinc-800 rounded-full mt-1.5" />
               </div>
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
      <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-zinc-50 dark:bg-zinc-950/50">
        <div className="w-full max-w-[280px] flex flex-col gap-3 group-hover/bento:scale-105 transition-transform duration-500">
          {[
            {
              title: "King Solomon's Mines",
              author: "H. Rider Haggard",
              cover: "/images/features/book covers/0012622006-L.jpg"
            },
            {
              title: "Jack Keefe Stories",
              author: "Ring Lardner",
              cover: "/images/features/book covers/ring-lardner_jack-keefe-stories-c3c1432e-cover@2x.avif"
            },
            {
              title: "Little Caesar",
              author: "W. R. Burnett",
              cover: "/images/features/book covers/w-r-burnett_little-caesar-c3c1432e-cover@2x.avif"
            }
          ].map((book, i) => (
            <div key={i} className={cn(
              "h-16 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center px-3 gap-3 overflow-hidden",
              i === 1 ? "opacity-100" : "opacity-40"
            )}>
              <div className="h-10 w-7 shrink-0 rounded-md overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-sm">
                 <img 
                   src={book.cover} 
                   className="w-full h-full object-cover"
                   alt={book.title}
                 />
              </div>
              <div className="flex-1 space-y-0.5 min-w-0">
                <div className="text-[12px] font-bold text-zinc-900 dark:text-zinc-100 truncate">
                  {book.title}
                </div>
                <div className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400 truncate">
                  {book.author}
                </div>
              </div>
            </div>
          ))}
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
               <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                 The Great Gatsby
               </div>
               <div className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-[10px] font-bold text-green-700 dark:text-green-400 rounded-full border border-green-200/50 dark:border-green-800/50">
                 Edit 
               </div>
            </div>
            <div className="space-y-2">
               <div className="text-[11px] leading-relaxed text-zinc-500 dark:text-zinc-400 line-clamp-3">
                 A 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, it depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby.
               </div>
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
      <div className="relative w-full h-full bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-3xl m-6 overflow-hidden shadow-xl scale-105 group/mockup">
        <div className="absolute top-0 left-0 right-0 h-10 bg-zinc-50 dark:bg-zinc-800 border-b border-zinc-100 dark:border-zinc-700 px-4 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>
          <div className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
            Thorium Reader
          </div>
          <div className="w-12" /> {/* Spacer to center title */}
        </div>
        <div className="pt-10 h-full w-full">
          <div className="relative w-full h-full overflow-hidden border-t border-zinc-100 dark:border-zinc-800 group/image bg-zinc-950">
            <img 
              src="/images/features/thoriumreader/Screenshot 2025-12-25 at 7.01.08 PM.png"
              className="w-full h-full object-contain grayscale transition-all group-hover/mockup:grayscale-0 duration-700"
              alt="Thorium Reader"
            />
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
      <div className="w-full h-full p-8 flex flex-col items-center justify-center scale-110">
        <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
          {[
            { title: "Moby Dick", cover: "/images/features/book covers/0012622006-L.jpg", action: "Borrow", price: "Free" },
            { title: "The Odyssey", cover: "/images/features/book covers/ring-lardner_jack-keefe-stories-c3c1432e-cover@2x.avif", action: "Buy", price: "$2.99" },
            { title: "Great Gatsby", cover: "/images/features/book covers/w-r-burnett_little-caesar-c3c1432e-cover@2x.avif", action: "Borrow", price: "Free" },
            { title: "The Lone Wolf", cover: "/images/features/book covers/louis-joseph-vance_the-lone-wolf-c3c1432e-cover@2x.avif", action: "Buy", price: "$1.49" }
          ].map((item, i) => (
            <div key={i} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-3 shadow-sm flex flex-col gap-2 group/market-card hover:shadow-md transition-all">
               <div className="aspect-[3/4] rounded-lg overflow-hidden bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
                  <img src={item.cover} className="w-full h-full object-cover grayscale transition-all group-hover/market-card:grayscale-0" alt={item.title} />
               </div>
               <div className="flex flex-col gap-1">
                  <div className="text-[10px] font-bold truncate text-zinc-900 dark:text-zinc-100">{item.title}</div>
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-[9px] font-medium text-zinc-500 dark:text-zinc-400">{item.price}</span>
                    <div className={cn(
                      "px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider",
                      item.action === "Buy" ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900" : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    )}>
                      {item.action}
                    </div>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    ),
    icon: <Users className="h-5 w-5 text-zinc-500" />,
    className: "md:col-span-1",
  },
]

export function Features() {
  return (
    <Section id="features" className="bg-transparent">
      <Container>
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <H2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">What is Lenny?</H2>
          <Text className="text-base text-muted-foreground">
             Lenny is a library server that features everything you need to preserve, lend, and serve digital books your way.
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
