import { Hero } from "@/components/home/hero"
import { HeroPartnerSlider } from "@/components/home/hero-slider"
import { Features } from "@/components/home/features"
import { Installation } from "@/components/home/installation"
import { Vision } from "@/components/home/vision"
import { PartnersMarquee } from "@/components/home/partners"
import { DeploymentOptions } from "@/components/home/deployment"

export default function Home() {
  return (
    <div className="flex flex-col gap-0 bg-background">
      <Hero />
      <HeroPartnerSlider />
      <Installation />
      <Features />
      <Vision />
      <DeploymentOptions />
      <PartnersMarquee />
    </div>
  )
}
