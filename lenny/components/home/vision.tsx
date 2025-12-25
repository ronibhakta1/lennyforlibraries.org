import { Container, Section } from "@/components/layout/container"
import { H2, Text } from "@/components/ui/typography"

export function Vision() {
  return (
    <Section id="about" className="py-16 bg-transparent">
      <Container className="max-w-5xl text-center">
        <div className="relative inline-block mb-12">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-700 blur-xl opacity-20"></div>
            <H2 className="relative text-3xl sm:text-4xl md:text-5xl font-bold tracking-tightest mb-0">
              A Federated Future <br className="hidden sm:block" /> for Libraries
            </H2>
        </div>
        
         <Text className="text-lg sm:text-xl md:text-2xl text-zinc-900 dark:text-zinc-100 mb-8 max-w-3xl mx-auto font-medium tracking-tight leading-tight">
            Empowering libraries to join a global network of sovereign, interoperable digital collections.
         </Text>
         
         <div className="max-w-2xl mx-auto border-t border-zinc-200 dark:border-zinc-800 pt-8">
           <p className="text-base text-muted-foreground leading-relaxed">
             We believe that libraries should own their digital infrastructure, not just rent access to it. 
             Lenny enables a decentralized network where every library can be a node, sharing resources 
             while maintaining local control.
           </p>
         </div>

         <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
           <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-6">
             The Open Ecosystem
           </h3>
           <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
             <a href="https://openlibrary.org" target="_blank" rel="noopener noreferrer" className="block p-3 sm:p-4 rounded-xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors text-center">
               <div className="font-bold text-base sm:text-lg mb-1">OpenLibrary.org</div>
               <p className="text-xs text-muted-foreground">11.5M readers find and borrow books</p>
             </a>
             <a href="https://openlibrary.press" target="_blank" rel="noopener noreferrer" className="block p-4 rounded-xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors text-center">
               <div className="font-bold text-lg mb-1">OpenLibrary.press</div>
               <p className="text-xs text-muted-foreground">Authors sell DRM-free books</p>
             </a>
             <a href="https://archive.org" target="_blank" rel="noopener noreferrer" className="block p-4 rounded-xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors text-center">
               <div className="font-bold text-lg mb-1">Internet Archive</div>
               <p className="text-xs text-muted-foreground">Universal access to knowledge</p>
             </a>
           </div>
         </div>
      </Container>
    </Section>
  )
}
