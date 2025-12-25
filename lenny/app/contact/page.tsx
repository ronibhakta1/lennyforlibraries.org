"use client"

import { Container, Section } from "@/components/layout/container"
import { H1, Lead, H3, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Section className="py-24">
        <Container>
          <div className="mb-12 text-center">
            <H1 className="mb-4">Get in Touch</H1>
            <Lead className="mx-auto max-w-2xl">
              Have questions about Lenny? Want to get involved? We'd love to hear from you.
            </Lead>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
               <div>
                <H3 className="mb-6">Contact Information</H3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Headquarters</h4>
                      <p className="text-muted-foreground">123 Library Lane<br />Knowledge City, KC 90210</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-muted-foreground">hello@lennyforlibraries.org</p>
                    </div>
                  </div>
                   <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-8 shadow-sm">
              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">First name</label>
                    <input id="first-name" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Jane" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Last name</label>
                    <input id="last-name" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Doe" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                  <input id="email" type="email" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="jane@example.com" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                  <textarea id="message" className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="How can we help?" required />
                </div>
                <Button className="w-full" size="lg">Send Message</Button>
              </form>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
