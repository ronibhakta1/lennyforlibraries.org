"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2 font-display font-semibold text-lg hover:opacity-80 transition-opacity duration-150"
        >
          <BookOpen className="w-6 h-6" />
          <span>Lenny</span>
          <span className="text-muted-foreground font-normal hidden sm:inline">for Libraries</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="#features" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-150"
          >
            Features
          </Link>
          <Link 
            href="#about" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-150"
          >
            About
          </Link>
          <Link 
            href="#installation" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-150"
          >
            Installation
          </Link>
        </div>

        {/* CTA Button */}
        <Button 
          asChild
          className="transition-all duration-200 hover:shadow-md hover:translate-y-[-1px] active:scale-[0.98]"
        >
          <Link href="#installation">Try Lenny</Link>
        </Button>
      </div>
    </nav>
  );
}
