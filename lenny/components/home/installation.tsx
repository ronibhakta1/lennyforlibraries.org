"use client"

import { useState } from "react"
import { Check, Copy, Terminal } from "lucide-react"

import { Container, Section } from "@/components/layout/container"
import { H2, Text } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"

export function Installation() {
  const [copied, setCopied] = useState(false)
  const command = "curl -fsSL https://raw.githubusercontent.com/ArchiveLabs/lenny/refs/heads/main/install.sh | sudo sh"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Section id="installation" className="py-16 bg-background overflow-hidden">
      <Container className="max-w-4xl text-center relative">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-zinc-200/50 dark:bg-zinc-800/20 rounded-full blur-3xl -z-10"></div>
        
        <H2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-3">Quick Installation</H2>
        <Text className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto tracking-tight">
          Get Lenny running in minutes with our simple one-line installation command.
        </Text>
        
        <div className="relative group mx-auto max-w-3xl">
          <div className="rounded-3xl border border-zinc-200 bg-white p-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:border-zinc-800 dark:bg-zinc-900/50 backdrop-blur-sm">
             <div className="flex items-center justify-between rounded-[1.25rem] bg-zinc-50 border border-zinc-100 p-3 sm:p-4 dark:bg-zinc-950 dark:border-zinc-800">
                <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto pl-1 sm:pl-2">
                   <Terminal className="h-4 w-4 sm:h-5 sm:w-5 text-zinc-400 flex-shrink-0" />
                   <code className="font-mono text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 whitespace-nowrap text-left select-all">
                      {command}
                   </code>
                </div>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={copyToClipboard}
                  className="ml-2 sm:ml-4 h-8 w-8 sm:h-10 sm:w-10 p-0 rounded-lg sm:rounded-xl bg-white border border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 shadow-sm flex-shrink-0"
                >
                  {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  <span className="sr-only">Copy command</span>
                </Button>
             </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-8 sm:mt-10 max-w-3xl mx-auto">
          <div className="p-3 sm:p-4 rounded-xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 text-center">
            <div className="font-bold text-xs sm:text-sm mb-1">Downloads Dependencies</div>
            <p className="text-xs text-muted-foreground">Automatically installs Docker and all required components</p>
          </div>
          <div className="p-4 rounded-xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 text-center">
            <div className="font-bold text-sm mb-1">Quick Setup</div>
            <p className="text-xs text-muted-foreground">Configures Lenny with sensible defaults for immediate use</p>
          </div>
          <div className="p-4 rounded-xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 text-center">
            <div className="font-bold text-sm mb-1">Production Ready</div>
            <p className="text-xs text-muted-foreground">Includes security settings and optimization for library use</p>
          </div>
        </div>

        {/* System Requirements note */}
        <p className="mt-6 text-xs text-muted-foreground max-w-2xl mx-auto">
          <strong>System Requirements:</strong> Requires a Mac & Linux system with curl and sudo access. Compatible with Ubuntu, Debian, and most modern Linux distributions.
        </p>
      </Container>
    </Section>
  )
}
