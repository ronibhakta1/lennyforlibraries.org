"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Library } from "lucide-react"

import { cn } from "@/lib/utils"
import { Container } from "@/components/layout/container"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

const navItems = [
  { name: "Features", href: "#features" },
  { name: "About", href: "#about" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  // Close mobile menu when route changes
  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <img 
            src="/images/lenny-transparent.png" 
            alt="Lenny Logo" 
            className="h-9 w-8 group-hover:scale-110 transition-transform"
          />
          <span className="font-extrabold text-xl tracking-tighter text-zinc-900 dark:text-zinc-100">
            Lennyforlibraries<span className="text-zinc-400 font-medium">.org</span>
          </span>
        </Link>
        
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  pathname === item.href && "text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:block h-4 w-px bg-border/60" />

          <div className="flex items-center gap-2">
            <div className="hidden md:flex md:items-center md:gap-4">
              <ModeToggle />
              <a href="https://reader.archive.org/?opds=https://lennyforlibraries.org/v1/api/opds" target="_blank" rel="noopener noreferrer">
                <Button size="sm" variant="outline" className="rounded-full px-5">
                  Playground
                </Button>
              </a>
              <a href="#installation">
                <Button size="sm" className="rounded-full px-5 shadow-sm">
                  Try Lenny
                </Button>
              </a>
            </div>
            <Button
              variant="ghost"
              className="md:hidden"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </div>
        </div>
      </Container>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b bg-background md:hidden"
          >
            <Container className="py-4">
              <nav className="grid gap-2">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "flex items-center py-2 text-sm font-medium text-muted-foreground hover:text-foreground",
                      pathname === item.href && "text-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-4 grid gap-2">
                   <a href="https://reader.archive.org/?opds=https://lennyforlibraries.org/v1/api/opds" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full justify-start">Playground</Button>
                   </a>
                   <a href="#installation">
                    <Button className="w-full justify-start">Try Lenny</Button>
                   </a>
                   <div className="pt-2">
                     <ModeToggle />
                   </div>
                </div>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
