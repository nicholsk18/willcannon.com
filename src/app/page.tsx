import type { Metadata } from "next"
import { BannerHome } from "@/app/components/banner-home"
import { Career } from "@/app/components/career"
import { About } from "@/app/components/about"
import { Contact } from "@/app/components/contact"

export const metadata: Metadata = {
  title: "Will Cannon | Professional Golfer",
  description: "Follow Will on his professional journey",
}

export default function Home() {
  return (
    <>
      <BannerHome />

      <div className="bg-section px-20 py-28 overflow-hidden">
        <Career />
        <About />
      </div>

      <Contact />
    </>
  )
}
