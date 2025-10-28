import type { Metadata } from "next"
import { ScheduleBanner } from "@/app/components/schedule-banner"
import { SeasonStats } from "@/app/components/season-stats"
import { ScheduleTimeline } from "@/app/components/schedule-timeline"

export const metadata: Metadata = {
  title: "Tournament Schedule",
  description: "View Will Cannon's 2025 tournament schedule on the Korn Ferry Tour. Stay updated on upcoming events, competition dates, and where to watch Will compete throughout the golf season.",
  keywords: ["Will Cannon Schedule", "Golf Tournament Schedule", "Korn Ferry Tour Schedule", "PGA Tour Schedule", "Golf Events 2025", "Tournament Calendar", "Professional Golf Schedule"],
  openGraph: {
    title: "Tournament Schedule | Will Cannon",
    description: "View Will Cannon's 2025 tournament schedule on the Korn Ferry Tour. Follow his competitive journey throughout the season.",
    url: "https://willcannon.com/schedule",
    images: [
      {
        url: "https://willcannon.com/static/banner-schedule.png",
        width: 1920,
        height: 1080,
        alt: "Will Cannon Tournament Schedule",
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tournament Schedule | Will Cannon",
    description: "View Will Cannon's 2025 tournament schedule on the Korn Ferry Tour.",
    images: ["https://willcannon.com/static/banner-schedule.png"],
  },
  alternates: {
    canonical: "https://willcannon.com/schedule",
  },
}

export default function SchedulePage() {
  return (
    <main className="min-h-screen">
      <ScheduleBanner 
        bgImage="/static/banner-schedule.png" 
        title="Schedule" 
      />
      
      <SeasonStats />
      
      <ScheduleTimeline />
    </main>
  )
}
