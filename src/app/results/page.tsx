import type { Metadata } from "next"
import { ResultsBanner } from "@/app/components/results-banner"
import { CareerStats } from "@/app/components/career-stats"
import { ResultsTable } from "@/app/components/results-table"

export const metadata: Metadata = {
  title: "Results | Will Cannon - Professional Golfer",
  description: "View Will Cannon's tournament results, performance statistics, and competitive achievements throughout his professional golf career.",
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
