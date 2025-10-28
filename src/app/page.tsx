import type { Metadata } from "next"
import { BannerHome } from "@/app/components/banner-home"
import { Career } from "@/app/components/career"
import { About } from "@/app/components/about"
import { ScrollReveal } from "@/app/components/scroll-reveal"
import { SponsorSlider } from "@/app/components/sponsor-slider"
import { StructuredData } from "@/app/components/structured-data"

export const metadata: Metadata = {
  title: "Will Cannon | Professional Golfer - Korn Ferry Tour",
  description: "Professional golfer Will Cannon competing on the Korn Ferry Tour. Follow his journey, tournament results, career highlights, and sponsorship opportunities.",
  keywords: ["Will Cannon", "Professional Golfer", "Korn Ferry Tour", "PGA Tour", "Golf Tournament", "Professional Golf", "Golf Career", "Golf Sponsorship"],
  authors: [{ name: "Will Cannon", url: "https://willcannon.com" }],
  creator: "Will Cannon",
  publisher: "Will Cannon",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://willcannon.com",
    title: "Will Cannon | Professional Golfer - Korn Ferry Tour",
    description: "Professional golfer competing on the Korn Ferry Tour. Follow tournament results, career highlights, and more.",
    siteName: "Will Cannon - Professional Golfer",
    images: [
      {
        url: "https://willcannon.com/static/banner-home.png",
        width: 1920,
        height: 1080,
        alt: "Will Cannon - Professional Golfer",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Will Cannon | Professional Golfer - Korn Ferry Tour",
    description: "Professional golfer competing on the Korn Ferry Tour. Follow tournament results, career highlights, and more.",
    images: ["https://willcannon.com/static/banner-home.png"],
  },
  alternates: {
    canonical: "https://willcannon.com",
  },
}

export default function Home() {
  return (
    <>
      <StructuredData />
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
    </>
  )
}
