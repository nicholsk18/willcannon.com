export interface TournamentSchedule {
  dates: string
  name: string
  location: string
  venue: string
  status?: "upcoming" | "completed" | "in-progress"
  result?: string
}

export interface MonthSchedule {
  month: string
  tournaments: TournamentSchedule[]
}

export interface TournamentResult {
  date: string
  tournament: string
  venue: string
  finish: string
  score: string
  earnings?: string
  rounds: string[]
}

export interface YearResults {
  year: string
  results: TournamentResult[]
}

export interface StatItem {
  label: string
  value: string
  rank?: string
  sublabel?: string
}

export interface GalleryImage {
  id: number
  src: string
  alt: string
  category: "tournament" | "training" | "lifestyle"
}

export interface CareerHighlight {
  text: string
  imagePath: string
}

