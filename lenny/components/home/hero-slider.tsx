"use client"

import { Container } from "@/components/layout/container"

const partners = [
  "Internet Archive",
  "Open Library", 
  "Archive Labs",
  "Internet Archive",
  "Open Library", 
  "Archive Labs",
]

export function HeroPartnerSlider() {
  return (
    <div className="py-8 -mt-8 md:-mt-12 bg-zinc-50 dark:bg-zinc-950 overflow-hidden relative z-20">
      <Container>
        <div className="flex flex-col items-center gap-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-500">
            Built by Libraries, For Libraries
          </p>
          <div 
            className="relative w-full overflow-hidden"
            style={{ 
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}
          >
            <div className="marquee-track">
              <div className="marquee-content">
                {partners.map((partner, i) => (
                  <span
                    key={`a-${i}`}
                    className="text-sm sm:text-lg md:text-xl font-semibold text-zinc-500 hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-300 transition-colors cursor-default mx-4 sm:mx-6"
                  >
                    {partner}
                  </span>
                ))}
              </div>
              <div className="marquee-content" aria-hidden="true">
                {partners.map((partner, i) => (
                  <span
                    key={`b-${i}`}
                    className="text-sm sm:text-lg md:text-xl font-semibold text-zinc-500 hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-300 transition-colors cursor-default mx-4 sm:mx-6"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
      
      <style jsx>{`
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        
        .marquee-content {
          display: flex;
          flex-shrink: 0;
        }
        
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </div>
  )
}
