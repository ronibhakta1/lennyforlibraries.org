import Link from "next/link"
import { Library } from "lucide-react"

import { Container } from "@/components/layout/container"

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center space-x-2">
              <Library className="h-6 w-6" />
              <span className="font-bold">Lenny for Libraries</span>
            </Link>
            <p className="text-sm text-muted-foreground font-medium">
               An open-source project by <br />
               <a href="https://archivelabs.org" className="underline underline-offset-4 hover:text-foreground">Archive Labs</a> & 
               <a href="https://openlibrary.org" className="underline underline-offset-4 hover:text-foreground ml-1">Open Library</a>.
            </p>
            <div className="flex gap-4">
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Resources</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/blog" className="hover:text-foreground">Blog</Link></li>
              <li><Link href="/about" className="hover:text-foreground">About Us</Link></li>
              <li><Link href="/faq" className="hover:text-foreground">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Community</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground">Twitter</Link></li>
              <li><Link href="#" className="hover:text-foreground">GitHub</Link></li>
              <li><Link href="#" className="hover:text-foreground">Discord</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Lenny for Libraries. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}
