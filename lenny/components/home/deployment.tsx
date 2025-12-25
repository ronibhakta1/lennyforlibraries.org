import { Container, Section } from "@/components/layout/container"
import { H2, Text } from "@/components/ui/typography"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Server, Cpu, Cloud, Check } from "lucide-react"

export function DeploymentOptions() {
  const options = [
    {
      title: "Self-Hosted",
      description: "Full control on your own hardware or VPS.",
      icon: <Server className="h-6 w-6" />,
      features: ["One-line installer", "Ubuntu compatible", "Open Source"],
      cta: "Get Started",
      variant: "outline"
    },
    {
      title: "Hardware",
      description: "Pre-configured, plug-and-play units for libraries.",
      icon: <Cpu className="h-6 w-6" />,
      features: ["No setup required", "Optimized performance", "Maintenance-free"],
      cta: "Coming Soon",
      variant: "secondary"
    },
    {
      title: "Cloud Hosted",
      description: "Managed instances running on Lenny's infrastructure.",
      icon: <Cloud className="h-6 w-6" />,
      features: ["Instant deployment", "Managed backups", "24/7 Support"],
      cta: "Coming Soon",
      variant: "secondary"
    }
  ]

  return (
    <Section className="py-24">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <H2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Choose Your Deployment</H2>
          <Text className="text-xl text-muted-foreground">
            Lenny is designed to be flexible. Whether you want total control or a zero-effort setup, we have an option for you.
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((option, i) => (
            <Card key={i} className="flex flex-col h-full rounded-[2rem] border-zinc-200 dark:border-zinc-800 p-4 transition-all hover:scale-[1.02]">
              <CardHeader>
                <div className="h-12 w-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4 text-zinc-900 dark:text-zinc-100">
                  {option.icon}
                </div>
                <CardTitle className="text-2xl">{option.title}</CardTitle>
                <Text className="text-muted-foreground mt-2">{option.description}</Text>
              </CardHeader>
              <CardContent className="flex-1 pt-4">
                <ul className="space-y-3">
                  {option.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-medium">
                      <Check className="h-4 w-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-8">
                <Button variant={option.variant as any} className="w-full rounded-2xl h-12">
                  {option.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
