"use client"

import { Container, Section } from "@/components/layout/container"
import { H1, H2, Text, Lead } from "@/components/ui/typography"
import { Card, CardContent } from "@/components/ui/card"

const team = [
  {
    name: "Alex Rivera",
    role: "Executive Director",
    bio: "Former library director with 15 years of experience in public service and digital equity.",
    // Placeholder image would go here
  },
  {
    name: "Jamie Lin",
    role: "Head of Engineering",
    bio: "Open source advocate and systems architect building resilient library infrastructure.",
  },
  {
    name: "Sam Harper",
    role: "Community Manager",
    bio: "Connecting librarians and developers to build better tools together.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Section className="bg-muted/30 py-24">
        <Container className="text-center">
          <H1 className="mb-6">Our Mission</H1>
          <Lead className="mx-auto max-w-3xl">
            To empower public libraries with open, sustainable, and privacy-focused technology that strengthens their role as pillars of democracy and knowledge.
          </Lead>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <H2>Who We Are</H2>
              <Text>
                Lenny for Libraries is a non-profit initiative dedicated to bridging the digital divide. We believe that libraries are essential infrastructure for a healthy society, and they deserve technology that respects their values.
              </Text>
              <Text>
                Our team is composed of librarians, technologists, and advocates who are passionate about open knowledge. We build open-source solutions that give libraries ownership of their data and digital presence.
              </Text>
            </div>
            <div className="rounded-lg border bg-muted/20 p-8">
              <h3 className="mb-4 text-xl font-semibold">Our Values</h3>
              <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                <li>Public Ownership of Digital Infrastructure</li>
                <li>Privacy by Default</li>
                <li>Accessibility for All</li>
                <li>Community-Driven Development</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-background">
        <Container>
           <div className="mb-12 text-center">
            <H2>Meet the Team</H2>
            <Text className="text-muted-foreground">The people behind the mission.</Text>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-none bg-transparent">
                <div className="aspect-square w-full rounded-xl bg-muted/50 mb-4 transition-colors hover:bg-muted/80">
                  {/* Actual image component would go here */}
                </div>
                <CardContent className="p-0 text-center">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <div className="text-sm text-primary font-medium mb-2">{member.role}</div>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  )
}
