"use client";

import { cn } from "@/lib/utils";

interface RadialGradientProps {
  className?: string;
  children?: React.ReactNode;
  colors?: {
    color1: string;
    color2: string;
    color3?: string;
  };
  blur?: "sm" | "md" | "lg" | "xl";
}

export function RadialGradient({ 
  className, 
  children,
  colors = {
    color1: "rgba(139, 92, 246, 0.15)", // Purple
    color2: "rgba(236, 72, 153, 0.15)", // Pink
    color3: "rgba(59, 130, 246, 0.15)"  // Blue
  },
  blur = "xl"
}: RadialGradientProps) {
  const blurAmount = {
    sm: "blur-2xl",
    md: "blur-3xl",
    lg: "blur-[128px]",
    xl: "blur-[200px]"
  };

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      {/* Radial Gradient Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Top Left Purple Blob */}
        <div 
          className={cn("absolute -top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full opacity-70", blurAmount[blur])}
          style={{
            background: `radial-gradient(circle, ${colors.color1} 0%, transparent 70%)`
          }}
        />
        
        {/* Top Right Pink Blob */}
        <div 
          className={cn("absolute -top-[10%] -right-[15%] w-[600px] h-[600px] rounded-full opacity-60", blurAmount[blur])}
          style={{
            background: `radial-gradient(circle, ${colors.color2} 0%, transparent 70%)`
          }}
        />
        
        {/* Center Blue Blob */}
        {colors.color3 && (
          <div 
            className={cn("absolute top-[40%] left-[20%] w-[450px] h-[450px] rounded-full opacity-50", blurAmount[blur])}
            style={{
              background: `radial-gradient(circle, ${colors.color3} 0%, transparent 70%)`
            }}
          />
        )}
      </div>
      
      {children}
    </div>
  );
}
