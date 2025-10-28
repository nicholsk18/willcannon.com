"use client"
import { motion } from "framer-motion"

interface TournamentCardProps {
  dates: string
  name: string
  location: string
  venue: string
  status?: "upcoming" | "completed" | "in-progress"
  result?: string
}

export function TournamentCard({ 
  dates, 
  name, 
  location, 
  venue, 
  status = "upcoming",
  result
}: TournamentCardProps) {
  const statusColors = {
    upcoming: "border-accent-gold/50 bg-white/70 backdrop-blur-sm shadow-lg",
    completed: "border-sage-200 bg-white/50 backdrop-blur-sm shadow-md",
    "in-progress": "border-accent-gold bg-accent-gold/10 backdrop-blur-sm shadow-xl"
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`relative group hover:scale-[1.02] transition-transform duration-300`}
    >
      <div className={`relative border-2 ${statusColors[status]} rounded-xl p-4 md:p-6 overflow-hidden`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative">
          {status === "upcoming" && (
            <div className="mb-3 lg:hidden">
              <div className="inline-block bg-accent-gold/20 border border-accent-gold/50 px-3 py-1 rounded-full">
                <span className="text-xs font-body font-semibold text-accent-gold uppercase tracking-wider">
                  Upcoming
                </span>
              </div>
            </div>
          )}
          
          {status === "in-progress" && (
            <div className="mb-3 lg:hidden">
              <div className="inline-block bg-accent-gold border border-accent-gold px-3 py-1 rounded-full animate-pulse">
                <span className="text-xs font-body font-semibold text-white uppercase tracking-wider">
                  Live
                </span>
              </div>
            </div>
          )}
          
          {status === "completed" && result && (
            <div className="mb-3 lg:hidden">
              <div className="inline-block bg-white/10 border border-white/30 px-3 py-1 rounded-full">
                <span className="text-xs font-body font-semibold text-white uppercase tracking-wider">
                  {result}
                </span>
              </div>
            </div>
          )}
          
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="text-sm font-body text-accent-gold uppercase tracking-widest mb-2 font-bold">
                {dates}
              </div>
              <h3 className="text-2xl font-display font-bold text-sage-900 mb-1">
                {name}
              </h3>
              <p className="text-lg font-body font-semibold text-sage-800">
                {venue}
              </p>
              <p className="text-base font-body font-medium text-sage-700">
                {location}
              </p>
            </div>
            
            {status === "upcoming" && (
              <div className="hidden lg:block bg-accent-gold/20 border border-accent-gold/50 px-4 py-2 rounded-full">
                <span className="text-sm font-body font-semibold text-accent-gold uppercase tracking-wider">
                  Upcoming
                </span>
              </div>
            )}
            
            {status === "in-progress" && (
              <div className="hidden lg:block bg-accent-gold border border-accent-gold px-4 py-2 rounded-full animate-pulse">
                <span className="text-sm font-body font-semibold text-white uppercase tracking-wider">
                  Live
                </span>
              </div>
            )}
            
            {status === "completed" && result && (
              <div className="hidden lg:block bg-white/10 border border-white/30 px-4 py-2 rounded-full">
                <span className="text-sm font-body font-semibold text-white uppercase tracking-wider">
                  {result}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

