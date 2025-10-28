"use client"
import { motion } from "framer-motion"

export function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-16">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="relative w-full max-w-2xl"
      >
        <div className="h-px bg-gradient-to-r from-transparent via-accent-gold to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-accent-gold rounded-full"></div>
        </div>
      </motion.div>
    </div>
  )
}

