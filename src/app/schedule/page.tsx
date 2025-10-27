import type { Metadata } from "next"
import { Banner } from "@/app/components/banner"

export const metadata: Metadata = {
  title: "Will Cannon | Professional Golfer",
  description: "Follow Will on his professional journey",
}

export default function SchedulePage() {
  return (
    <>
      <Banner bgImage="/static/banner-home.png" />

      {/*<div className="bg-section px-20 py-28 overflow-hidden">*/}
      {/*  <Career />*/}
      {/*  <About />*/}
      {/*</div>*/}

      {/*<Contact />*/}
    </>
  )
}
