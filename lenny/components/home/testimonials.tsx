"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote } from "lucide-react"

import { Container, Section } from "@/components/layout/container"
import { H2 } from "@/components/ui/typography"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote: "Lenny for Libraries has transformed how we engage with our patrons. The open access tools are a game changer.",
    author: "Sarah Jenkins",
    role: "Head Librarian, Westview Public Library",
  },
  {
    quote: "Finally, a platform that truly understands the mission of public libraries. It's intuitive, robust, and community-focused.",
    author: "Michael Chen",
    role: "Director, City Knowledge Center",
  },
  {
    quote: "The support for open standards means we own our data. That is critical for the long-term sustainability of our digital services.",
    author: "Elena Rodriguez",
    role: "Digital Archivist",
  },
]

export function Testimonials() {
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <Section>
      <Container className="text-center">
        <H2 className="mb-12">Trusted by Librarians</H2>
        <div className="relative mx-auto max-w-3xl min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <Card className="flex h-full flex-col items-center justify-center border-none bg-transparent shadow-none">
                <CardContent className="flex flex-col items-center gap-6">
                  <Quote className="h-12 w-12 text-muted-foreground/30" />
                  <blockquote className="text-2xl font-medium leading-relaxed italic text-foreground">
                    &quot;{testimonials[current].quote}&quot;
                  </blockquote>
                  <div className="text-center">
                    <div className="font-semibold">{testimonials[current].author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[current].role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === current ? "bg-primary w-6" : "bg-muted-foreground/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
