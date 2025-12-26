"use client"

import { Container } from "@/components/layout/container"
import { Heart } from "lucide-react"

export function PartnersMarquee() {
  return (
    <div className="pt-32 pb-12 bg-background border-y border-border">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
          Built by Libraries, For Libraries
        </p>
        <p className="text-base text-foreground max-w-2xl mx-auto mb-6">
          Lenny is an open-source project by Archive Labs and the Internet Archive team behind Open Library.
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <span>Free &amp; Open Source</span>
          <span>•</span>
          <span className="flex items-center gap-1">Built with <Heart className="h-3 w-3 text-red-500" /> for the public good</span>
        </div>
      </Container>
    </div>
  )
}
