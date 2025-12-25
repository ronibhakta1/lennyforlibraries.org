import { Container, Section } from "@/components/layout/container"
import { H2, Text } from "@/components/ui/typography"

export function Vision() {
  return (
    <Section className="py-24 bg-transparent">
      <Container className="max-w-5xl text-center">
        <div className="relative inline-block mb-12">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-700 blur-xl opacity-20"></div>
            <H2 className="relative text-5xl md:text-7xl font-bold tracking-tightest mb-0">
              A Federated Future <br className="hidden md:block" /> for Libraries
            </H2>
        </div>
        
         <Text className="text-2xl md:text-3xl text-zinc-900 dark:text-zinc-100 mb-12 max-w-3xl mx-auto font-medium tracking-tight leading-tight">
            Empowering libraries to join a global network of sovereign, interoperable digital collections.
         </Text>
         
         <div className="max-w-2xl mx-auto border-t border-zinc-200 dark:border-zinc-800 pt-12">
           <p className="text-lg text-muted-foreground leading-relaxed">
             We believe that libraries should own their digital infrastructure, not just rent access to it. 
             Lenny enables a decentralized network where every library can be a node, sharing resources 
             while maintaining local control.
           </p>
         </div>
      </Container>
    </Section>
  )
}
