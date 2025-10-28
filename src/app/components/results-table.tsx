"use client"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { useState } from "react"
import { tournamentResults } from "@/data/results"
import type { TournamentResult, YearResults as YearResultsProps } from "@/data/types"

function ResultRow({ result }: { result: TournamentResult }) {
  const [expanded, setExpanded] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  
  const getFinishColor = (finish: string) => {
    if (finish === "1" || finish.includes("W")) return "text-accent-gold font-bold"
    if (finish.includes("T") && parseInt(finish.replace("T", "")) <= 10) return "text-accent-gold"
    if (parseInt(finish) <= 10) return "text-accent-gold"
    return "text-gray-700"
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: shouldReduceMotion ? 0.01 : 0.3, ease: "easeOut" }}
      className="border-b border-stone-200 last:border-none"
    >
      <div 
        onClick={() => setExpanded(!expanded)}
        className="hidden lg:grid grid-cols-12 gap-4 p-4 hover:bg-stone-50 transition-colors cursor-pointer"
      >
        <div className="col-span-2 text-sm font-body text-gray-600">{result.date}</div>
        <div className="col-span-4 font-body text-foreground font-medium">{result.tournament}</div>
        <div className="col-span-3 text-sm font-body text-gray-600">{result.venue}</div>
        <div className={`col-span-1 font-display text-xl font-bold text-center ${getFinishColor(result.finish)}`}>
          {result.finish}
        </div>
        <div className="col-span-2 font-body text-gray-700 text-right">{result.score}</div>
      </div>

      <div 
        onClick={() => setExpanded(!expanded)}
        className="lg:hidden p-4 hover:bg-stone-50 transition-colors cursor-pointer"
      >
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="text-xs font-body text-accent-gold uppercase tracking-wider mb-1 font-semibold">
              {result.date}
            </div>
            <h4 className="text-lg font-body font-bold text-sage-900 mb-1">
              {result.tournament}
            </h4>
            <p className="text-sm font-body text-gray-600">
              {result.venue}
            </p>
          </div>
          <div className={`font-display text-3xl font-bold ${getFinishColor(result.finish)}`}>
            {result.finish}
          </div>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-stone-200">
          <span className="text-sm font-body text-gray-600">Score</span>
          <span className="text-base font-body font-semibold text-gray-700">{result.score}</span>
        </div>
        {result.earnings && (
          <div className="flex items-center justify-between pt-2">
            <span className="text-sm font-body text-gray-600">Earnings</span>
            <span className="text-base font-display font-bold text-accent-gold">{result.earnings}</span>
          </div>
        )}
        <div className="mt-3 text-center">
          <span className="text-xs font-body text-gray-500 uppercase tracking-wider">
            Tap for round scores {expanded ? "▲" : "▼"}
          </span>
        </div>
      </div>
      
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.25, ease: "easeInOut" }}
            className="bg-stone-50/50 overflow-hidden"
          >
            <div className="px-4 pb-4">
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex-1 min-w-[200px]">
                  <div className="text-xs font-body text-gray-500 uppercase tracking-wider mb-2">Round Scores</div>
                  <div className="flex gap-2 flex-wrap">
                    {result.rounds.map((round, idx) => (
                      <div key={idx} className="bg-white border border-stone-200 rounded-lg px-3 py-2 text-center">
                        <div className="text-xs text-gray-500">R{idx + 1}</div>
                        <div className="text-lg font-display font-bold text-foreground">{round}</div>
                      </div>
                    ))}
                  </div>
                </div>
                {result.earnings && (
                  <div className="hidden lg:block flex-1 min-w-[150px]">
                    <div className="text-xs font-body text-gray-500 uppercase tracking-wider mb-2">Earnings</div>
                    <div className="text-2xl font-display font-bold text-accent-gold">{result.earnings}</div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function YearResults({ year, results, isExpanded, onToggle }: YearResultsProps & { isExpanded: boolean; onToggle: () => void }) {
  return (
    <div className="mb-10">
      <div className="sticky top-24 z-10 mb-6">
        <button
          onClick={onToggle}
          className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md border-2 border-accent-gold rounded-2xl px-4 md:px-6 lg:px-8 py-2 md:py-3 shadow-xl hover:bg-white/90 transition-all hover:scale-105 active:scale-95"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-sage-900">
            {year}
          </h3>
          <div className="flex items-center gap-2 text-sage-700">
            <span className="text-sm font-body font-semibold">
              {results.length} {results.length === 1 ? 'event' : 'events'}
            </span>
            <svg 
              className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="bg-white rounded-2xl shadow-lg border-2 border-stone-200 overflow-hidden">
              <div className="hidden lg:grid grid-cols-12 gap-4 p-4 bg-stone-100 border-b-2 border-stone-200">
                <div className="col-span-2 text-xs font-body font-semibold text-gray-600 uppercase tracking-wider">Date</div>
                <div className="col-span-4 text-xs font-body font-semibold text-gray-600 uppercase tracking-wider">Tournament</div>
                <div className="col-span-3 text-xs font-body font-semibold text-gray-600 uppercase tracking-wider">Venue</div>
                <div className="col-span-1 text-xs font-body font-semibold text-gray-600 uppercase tracking-wider text-center">Finish</div>
                <div className="col-span-2 text-xs font-body font-semibold text-gray-600 uppercase tracking-wider text-right">Score</div>
              </div>

              {results.map((result, index) => (
                <ResultRow key={index} result={result} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function ResultsTable() {
  const shouldReduceMotion = useReducedMotion()
  const [expandedYears, setExpandedYears] = useState<Set<string>>(
    new Set(["2025", "2024"])
  )

  const toggleYear = (year: string) => {
    setExpandedYears(prev => {
      const newSet = new Set(prev)
      if (newSet.has(year)) {
        newSet.delete(year)
      } else {
        newSet.add(year)
      }
      return newSet
    })
  }

  const expandAll = () => {
    setExpandedYears(new Set(tournamentResults.map(yr => yr.year)))
  }

  const collapseAll = () => {
    setExpandedYears(new Set())
  }
  
  return (
    <section className="relative bg-gradient-to-b from-cream-50 via-sage-50 to-cream-100 pt-32 md:pt-36 pb-20 lg:pb-32 px-6 lg:px-20">
      <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEiIGZpbGw9InJnYmEoMTM5LDE2Niw0MiwwLjEpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
      <div className="relative container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.5, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <p className="text-xl font-body text-sage-800 max-w-2xl mx-auto mb-6">
            Complete tournament results and performance history. Click any result to see round-by-round scores.
          </p>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={expandAll}
              className="px-4 py-2 text-sm font-body font-semibold text-sage-700 hover:text-sage-900 bg-white/70 hover:bg-white/90 border border-sage-200 rounded-lg transition-all"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="px-4 py-2 text-sm font-body font-semibold text-sage-700 hover:text-sage-900 bg-white/70 hover:bg-white/90 border border-sage-200 rounded-lg transition-all"
            >
              Collapse All
            </button>
          </div>
        </motion.div>

        {tournamentResults.map((yearData, index) => (
          <YearResults 
            key={index} 
            year={yearData.year} 
            results={yearData.results}
            isExpanded={expandedYears.has(yearData.year)}
            onToggle={() => toggleYear(yearData.year)}
          />
        ))}
      </div>
    </section>
  )
}

