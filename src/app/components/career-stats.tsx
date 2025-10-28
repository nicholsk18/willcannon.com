"use client"
import { motion, useReducedMotion } from "framer-motion"
import { careerStats } from "@/data/stats"

interface StatItemProps {
  label: string
  value: string
  rank?: string
  index: number
}

function StatItem({ label, value, rank, index }: StatItemProps) {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: shouldReduceMotion ? 0.01 : 0.3,
        delay: shouldReduceMotion ? 0 : 0.4 + (index * 0.05),
        ease: "easeOut"
      }}
      className="relative group will-change-transform"
    >
      <div className="bg-white/70 lg:backdrop-blur-sm border-2 border-sage-200 rounded-2xl p-6 md:p-6 hover:border-accent-gold/50 transition-colors duration-300 shadow-lg">
        <div className="text-center">
          <div className="text-4xl md:text-4xl lg:text-5xl font-display font-bold text-accent-gold mb-2">
            {value}
          </div>
          <div className="text-base md:text-base font-body font-bold text-sage-900 uppercase tracking-wider mb-1">
            {label}
          </div>
          {rank && (
            <div className="text-xs md:text-sm font-body font-medium text-sage-700">
              {rank}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export function CareerStats() {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <section className="relative -mb-16 md:-mb-20 z-20">
      <div className="container mx-auto px-6 lg:px-14">
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
              Career Statistics
            </h2>
            <p className="text-base md:text-lg font-body font-medium text-sage-800">
              Performance metrics and achievements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {careerStats.map((stat, index) => (
              <StatItem key={stat.label} label={stat.label} value={stat.value} rank={stat.rank} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

