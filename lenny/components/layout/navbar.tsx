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
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
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
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Library className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              Lenny for Libraries
            </span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  pathname === item.href && "text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex md:items-center md:gap-4">
            <Link href="/login">
               <Button variant="ghost" size="sm">Log in</Button>
            </Link>
            <Link href="/donate">
              <Button size="sm">Donate</Button>
            </Link>
            <ModeToggle />
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
                   <Link href="/login">
                    <Button variant="outline" className="w-full justify-start">Log in</Button>
                   </Link>
                   <Link href="/donate">
                    <Button className="w-full justify-start">Donate</Button>
                   </Link>
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
