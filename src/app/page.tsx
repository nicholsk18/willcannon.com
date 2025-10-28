import type { Metadata } from "next"
import { BannerHome } from "@/app/components/banner-home"
import { Career } from "@/app/components/career"
import { About } from "@/app/components/about"
import { ScrollReveal } from "@/app/components/scroll-reveal"
import { SponsorSlider } from "@/app/components/sponsor-slider"

export const metadata: Metadata = {
  title: "Will Cannon | Professional Golfer",
  description: "Follow Will on his professional journey",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <BannerHome />

      <div className="relative -mt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cream-50 to-sage-50 h-40"></div>
      </div>

      <div className="relative bg-gradient-to-b from-cream-50 via-sage-50 to-cream-100 px-4 md:px-6 lg:px-20 pt-8 md:pt-12 pb-16 md:pb-20 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEiIGZpbGw9InJnYmEoMTM5LDE2Niw0MiwwLjEpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
        
        <div className="relative container mx-auto max-w-7xl">
          <ScrollReveal delay={0.1}>
            <Career />
          </ScrollReveal>
          
          <div className="py-8 md:py-12">
            <SponsorSlider />
          </div>
          
          <ScrollReveal delay={0.2}>
            <About />
          </ScrollReveal>
        </div>
      </div>
    </main>
  )
}
