import type { Metadata } from "next"
import { ResultsBanner } from "@/app/components/results-banner"
import { CareerStats } from "@/app/components/career-stats"
import { ResultsTable } from "@/app/components/results-table"

export const metadata: Metadata = {
  title: "Tournament Results & Stats",
  description: "View Will Cannon's tournament results, performance statistics, scoring averages, and competitive achievements. Track career highlights, top finishes, and season performance on the Korn Ferry Tour.",
  keywords: ["Will Cannon Results", "Golf Tournament Results", "Korn Ferry Tour Results", "Golf Statistics", "Tournament Performance", "Career Stats", "Golf Leaderboard", "Professional Golf Results"],
  openGraph: {
    title: "Tournament Results & Stats | Will Cannon",
    description: "View Will Cannon's tournament results, performance statistics, and competitive achievements on the Korn Ferry Tour.",
    url: "https://willcannon.com/results",
    images: [
      {
        url: "https://willcannon.com/static/banner-home.png",
        width: 1920,
        height: 1080,
        alt: "Will Cannon Tournament Results",
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tournament Results & Stats | Will Cannon",
    description: "View Will Cannon's tournament results and performance statistics on the Korn Ferry Tour.",
    images: ["https://willcannon.com/static/banner-home.png"],
  },
  alternates: {
    canonical: "https://willcannon.com/results",
  },
}

export default function ResultsPage() {
  return (
    <main className="min-h-screen">
      <ResultsBanner />
      
      <CareerStats />
      
      <ResultsTable />
    </main>
  )
}
