import { Hero } from "@/components/home/hero"
import { Features } from "@/components/home/features"
import { Testimonials } from "@/components/home/testimonials"
import { Newsletter } from "@/components/home/newsletter"
import { Installation } from "@/components/home/installation"
import { Requirements } from "@/components/home/requirements"
import { Vision } from "@/components/home/vision"
import { PartnersMarquee } from "@/components/home/partners"
import { DeploymentOptions } from "@/components/home/deployment"
import { FAQ } from "@/components/home/faq"

export default function Home() {
  return (
    <div className="flex flex-col gap-0 bg-background">
      <Hero />
      <PartnersMarquee />
      <Installation />
      <Vision />
      <Features />
      <DeploymentOptions />
      <Requirements />
      <FAQ />
      <Testimonials />
      <Newsletter />
    </div>
  )
}
