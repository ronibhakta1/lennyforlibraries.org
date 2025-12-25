"use client";

import { cn } from "@/lib/utils";
import { Card } from "./card";

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  rotation?: number;
  delay?: number;
}

export function FloatingCard({ 
  children, 
  className,
  rotation = 0,
  delay = 0
}: FloatingCardProps) {
  return (
    <Card 
      className={cn(
        "relative backdrop-blur-sm bg-card/90 border-white/20",
        "shadow-[0_20px_50px_rgba(0,0,0,0.15)]",
        "hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)]",
        "transition-all duration-300 hover:scale-105",
        "animate-float",
        className
      )}
      style={{
        transform: `rotate(${rotation}deg)`,
        animationDelay: `${delay}s`
      }}
    >
      {children}
    </Card>
  );
}
