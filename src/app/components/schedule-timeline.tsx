"use client"
import { TournamentCard } from "./tournament-card"
import { schedule2025 } from "@/data/schedule"
import type { MonthSchedule as MonthScheduleProps } from "@/data/types"

export function MonthSchedule({ month, tournaments }: MonthScheduleProps) {
  return (
    <div className="relative">
      <div className="sticky top-24 z-10 mb-8">
        <div className="inline-block bg-white/80 backdrop-blur-md border-2 border-accent-gold rounded-2xl px-4 md:px-6 lg:px-8 py-3 md:py-4 shadow-xl">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-display font-bold text-sage-900 tracking-tight">
            {month}
          </h2>
        </div>
      </div>
      
      <div className="relative pl-8 border-l-2 border-accent-gold/30">
        <div className="absolute -left-[9px] top-0 w-4 h-4 bg-accent-gold rounded-full shadow-lg shadow-accent-gold/50"></div>
        
        <div className="space-y-6">
          {tournaments.map((tournament, index) => (
            <div key={index} className="relative">
              <div className={`absolute -left-[41px] top-8 w-4 h-4 rounded-full ${
                tournament.status === 'completed' ? 'bg-gray-400' : 
                tournament.status === 'in-progress' ? 'bg-accent-gold animate-pulse' : 
                'bg-accent-gold/60'
              }`}></div>
              <TournamentCard {...tournament} />
            </div>
          ))}
        </div>
        
        <div className="absolute -left-[9px] bottom-0 w-4 h-4 bg-accent-gold/50 rounded-full"></div>
      </div>
    </div>
  )
}

export function ScheduleTimeline() {
  const upcomingMonths = schedule2025.filter(month => 
    month.tournaments.some(t => t.status === 'upcoming' || t.status === 'in-progress')
  )
  
  const completedMonths = schedule2025.filter(month => 
    month.tournaments.every(t => t.status === 'completed')
  ).reverse()
  
  const hasUpcoming = upcomingMonths.length > 0
  const hasCompleted = completedMonths.length > 0
  
  return (
    <section className="relative bg-gradient-to-b from-cream-50 via-sage-50 to-cream-100 pt-32 md:pt-36 pb-20 lg:pb-32 px-6 lg:px-20">
      <div className="absolute inset-0"></div>
      <div className="relative container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-xl font-body font-medium text-sage-900 max-w-2xl mx-auto mb-12">
            Track my competitive schedule and see where you can catch me on the course throughout the season.
          </p>
          
          <div className="flex flex-nowrap justify-center gap-3 md:gap-6 text-xs md:text-sm font-body font-semibold">
            <div className="flex items-center gap-1.5 md:gap-2">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-accent-gold rounded-full"></div>
              <span className="text-sage-800">Upcoming</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-accent-gold rounded-full animate-pulse"></div>
              <span className="text-sage-800">Live</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-gray-400 rounded-full"></div>
              <span className="text-sage-800">Completed</span>
            </div>
          </div>
        </div>
        
        {hasUpcoming && (
          <>
            <div className="mb-12">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-sage-900 text-center mb-2">
                Upcoming Events
              </h3>
              <div className="h-1 w-24 bg-accent-gold mx-auto"></div>
            </div>
            
            <div className="space-y-20 mb-24">
              {upcomingMonths.map((monthData, index) => (
                <MonthSchedule key={index} month={monthData.month} tournaments={monthData.tournaments} />
              ))}
            </div>
          </>
        )}
        
        {hasCompleted && (
          <>
            <div className="mb-12">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-600 text-center mb-2">
                Past Events
              </h3>
              <div className="h-1 w-24 bg-gray-400 mx-auto"></div>
            </div>
            
            <div className="space-y-20 opacity-75">
              {completedMonths.map((monthData, index) => (
                <MonthSchedule key={index} month={monthData.month} tournaments={monthData.tournaments} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

