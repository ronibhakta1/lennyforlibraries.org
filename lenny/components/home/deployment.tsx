import { Container, Section } from "@/components/layout/container"
import { H2, Text } from "@/components/ui/typography"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Server, Cpu, Cloud, Check } from "lucide-react"

export function DeploymentOptions() {
  const options = [
    {
      title: "Self-Hosted",
      description: "Run Lenny as a Docker container on your own server. Full control, full flexibility, zero vendor lock-in.",
      icon: <Server className="h-6 w-6" />,
      features: ["Open source & customizable", "Runs on standard Linux infrastructure", "Integrated with Open Library metadata"],
      cta: "Get Started",
      variant: "outline"
    },
    {
      title: "Plug & Play",
      description: "Get Lenny pre-installed on a Raspberry Pi. Plug it in and start lending digital books securely.",
      icon: <Cpu className="h-6 w-6" />,
      features: ["No setup required", "Offline-ready local lending", "Simple updates & connectivity"],
      cta: "Coming Soon",
      variant: "secondary",
      recommended: true
    },
    {
      title: "Hosted",
      description: "Let us take care of everything. A hosted Lenny instance with a web dashboard for simple, secure access.",
      icon: <Cloud className="h-6 w-6" />,
      features: ["Zero maintenance", "Web-based admin tools", "Scalable and secure infrastructure"],
      cta: "Coming Soon",
      variant: "secondary"
    }
  ]

  return (
    <Section className="py-16">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <H2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-3">Choose Your Deployment</H2>
          <Text className="text-base text-muted-foreground">
            Lenny is designed to be flexible. Whether you want total control or a zero-effort setup, we have an option for you.
          </Text>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {options.map((option, i) => (
            <Card key={i} className="flex flex-col h-full rounded-[2rem] border-zinc-200 dark:border-zinc-800 p-4 transition-all hover:scale-[1.02]">
              <CardHeader>
                <div className="h-12 w-12 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4 text-zinc-900 dark:text-zinc-100">
                  {option.icon}
                </div>
                <CardTitle className="text-xl">{option.title}</CardTitle>
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
              <CardFooter className="pt-6">
                <Button variant={option.variant as any} className="w-full rounded-2xl h-10">
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
