"use client"

import { Container, Section } from "@/components/layout/container"
import { H1, Lead, H2, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card"
import { Check } from "lucide-react"

const tiers = [
  {
    name: "Supporter",
    price: "$10",
    frequency: "/month",
    description: "Help us keep the servers running.",
    features: ["Community Newsletter", "Mention in Annual Report", "Digital Supporter Badge"],
    cta: "Donate $10",
    variant: "outline",
  },
  {
    name: "Patron",
    price: "$50",
    frequency: "/month",
    description: "Directly fund open-source development.",
    features: ["All Supporter benefits", "Early access to new features", "Quarterly impact calls", "Lenny Tote Bag"],
    cta: "Donate $50",
    variant: "primary", // Uses default button style
  },
  {
    name: "Institution",
    price: "$500",
    frequency: "/month",
    description: "For libraries and organizations.",
    features: ["Priority Support", "Custom integrations", "Training sessions", "Board membership voting rights"],
    cta: "Contact Us",
    variant: "outline",
  },
]

export default function DonatePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Section className="py-24 text-center">
        <Container>
          <H1 className="mb-6">Support Open Knowledge</H1>
          <Lead className="mx-auto max-w-3xl">
            Lenny for Libraries is a 501(c)(3) non-profit. Your donation helps us build and maintain free tools for public libraries worldwide.
          </Lead>
        </Container>
      </Section>

      <Section className="bg-muted/30">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {tiers.map((tier, index) => (
              <Card key={index} className={`flex flex-col ${tier.name === 'Patron' ? 'border-primary shadow-lg scale-105 z-10' : ''}`}>
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground">{tier.frequency}</span>
                  </div>
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={tier.name === 'Patron' ? 'primary' : 'outline'}>
                    {tier.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center text-sm text-muted-foreground">
            Donations are tax-deductible in the US. Questions? Email donations@lennyforlibraries.org.
          </div>
        </Container>
      </Section>
    </div>
  )
}
