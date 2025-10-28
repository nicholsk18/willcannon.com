"use client"
import { motion, useReducedMotion } from "framer-motion"
import { seasonStats } from "@/data/stats"

interface StatCardProps {
  value: string
  label: string
  sublabel?: string
}

function StatCard({ value, label, sublabel }: StatCardProps) {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: shouldReduceMotion ? 0.01 : 0.3,
        delay: 0.4,
        ease: "easeOut"
      }}
      className="relative group will-change-transform"
    >
      <div className="relative bg-white/70 lg:backdrop-blur-sm border-2 border-sage-200 rounded-2xl p-6 md:p-8 hover:border-accent-gold/50 transition-colors duration-300 shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="relative text-center">
          <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-accent-gold mb-2 md:mb-3">
            {value}
          </div>
          <div className="text-base md:text-lg font-body font-bold text-sage-900 uppercase tracking-wider mb-1">
            {label}
          </div>
          {sublabel && (
            <div className="text-xs md:text-sm font-body font-medium text-sage-700">
              {sublabel}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export function SeasonStats() {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <section className="relative -mb-16 md:-mb-20 z-20">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl border-2 border-accent-gold/30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: shouldReduceMotion ? 0.01 : 0.5,
              delay: 0.2,
              ease: "easeOut"
            }}
            className="text-center mb-8 md:mb-10"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-sage-900 mb-2 md:mb-3">
              Season Performance
            </h2>
            <p className="text-base md:text-lg font-body font-medium text-sage-800">
              Current season statistics and highlights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {seasonStats.map((stat, index) => (
              <StatCard key={index} value={stat.value} label={stat.label} sublabel={stat.sublabel} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

