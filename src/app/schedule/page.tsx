import type { Metadata } from "next"
import { ScheduleBanner } from "@/app/components/schedule-banner"
import { SeasonStats } from "@/app/components/season-stats"
import { ScheduleTimeline } from "@/app/components/schedule-timeline"

export const metadata: Metadata = {
  title: "Schedule | Will Cannon - Professional Golfer",
  description: "Follow Will Cannon's tournament schedule and competitive journey throughout the professional golf season.",
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
