"use client";

import { cn } from "@/lib/utils";

interface GridBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  pattern?: "dots" | "grid";
}

export function GridBackground({ 
  className, 
  children, 
  pattern = "grid" 
}: GridBackgroundProps) {
  return (
    <div className={cn("relative w-full", className)}>
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: pattern === "grid" 
            ? `linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
               linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)` 
            : `radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: pattern === "grid" ? "48px 48px" : "24px 24px",
        }}
      />
      
      {/* Grid Fade Effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-background" />
      
      {/* Plus markers at intersections */}
      {pattern === "grid" && (
        <>
          <div className="absolute left-[10%] top-[20%] text-muted-foreground/20 text-2xl select-none pointer-events-none">+</div>
          <div className="absolute right-[15%] top-[15%] text-muted-foreground/20 text-2xl select-none pointer-events-none">+</div>
          <div className="absolute left-[20%] bottom-[30%] text-muted-foreground/20 text-2xl select-none pointer-events-none">+</div>
          <div className="absolute right-[25%] bottom-[25%] text-muted-foreground/20 text-2xl select-none pointer-events-none">+</div>
        </>
      )}
      
      {children}
    </div>
  );
}
