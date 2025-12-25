"use client";

import React from "react";
import { World } from "@/components/ui/globe";
import { globeConfig, sampleArcs } from "@/data/globe-config";
import { cn } from "@/lib/utils";

export function GitHubGlobeCard({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl", className)}>
      <div className="absolute top-10 z-20 text-center px-4">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Global Network</h2>
        <p className="text-sm text-zinc-500 mt-2 max-w-[20rem] mx-auto">
          Imagine a world where every library is a critical destination in a unified, global network.
        </p>
      </div>
      <div className="absolute top-28 h-[30rem] w-[30rem]">
        <World data={sampleArcs} globeConfig={globeConfig} />
      </div>
      <div className="pointer-events-none absolute inset-0 h-full w-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  );
}
