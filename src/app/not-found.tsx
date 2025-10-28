"use client"
import Link from "next/link"
import { Nav } from "@/app/components/nav"
import { motion } from "framer-motion"

export default function NotFound() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-cream-50 via-sage-50 to-cream-100">
      <Nav />
      
      <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEiIGZpbGw9InJnYmEoMTM5LDE2Niw0MiwwLjEpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>

      <div className="relative flex flex-col items-center justify-center min-h-screen px-6 py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl w-full text-center"
        >
          <div className="mb-8 relative">
            <svg
              viewBox="0 0 600 250"
              className="w-full max-w-4xl mx-auto filter drop-shadow-2xl"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#D4AF37', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: '#F4E5A3', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#D4AF37', stopOpacity: 1 }} />
                </linearGradient>
                <radialGradient id="golfBall" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
                  <stop offset="70%" style={{ stopColor: '#f5f5f5', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#e0e0e0', stopOpacity: 1 }} />
                </radialGradient>
                <pattern id="dimples" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="2" fill="rgba(0,0,0,0.08)" />
                </pattern>
              </defs>
              
              <text
                x="24%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="none"
                stroke="url(#strokeGradient)"
                strokeWidth="6"
                fontSize="220"
                fontWeight="900"
                fontFamily="var(--font-playfair)"
              >
                4
              </text>
              
              <g transform="translate(300, 125)">
                <circle
                  cx="0"
                  cy="0"
                  r="85"
                  fill="url(#golfBall)"
                  stroke="url(#strokeGradient)"
                  strokeWidth="6"
                />
                <circle
                  cx="0"
                  cy="0"
                  r="85"
                  fill="url(#dimples)"
                />
                
                <circle cx="-30" cy="-25" r="3" fill="rgba(0,0,0,0.1)" />
                <circle cx="-10" cy="-35" r="3" fill="rgba(0,0,0,0.1)" />
                <circle cx="10" cy="-35" r="3" fill="rgba(0,0,0,0.1)" />
                <circle cx="30" cy="-25" r="3" fill="rgba(0,0,0,0.1)" />
                <circle cx="-40" cy="0" r="3" fill="rgba(0,0,0,0.1)" />
                <circle cx="-20" cy="0" r="3" fill="rgba(0,0,0,0.1)" />
                <circle cx="0" cy="0" r="3" fill="rgba(0,0,0,0.1)" />
                <circle cx="20" cy="0" r="3" fill="rgba(0,0,0,0.1)" />
                <circle cx="40" cy="0" r="3" fill="rgba(0,0,0,0.1)" />
                <circle cx="-30" cy="25" r="3" fill="rgba(0,0,0,0.1)" />
                <circle cx="-10" cy="35" r="3" fill="rgba(0,0,0,0.1)" />
                <circle cx="10" cy="35" r="3" fill="rgba(0,0,0,0.1)" />
                <circle cx="30" cy="25" r="3" fill="rgba(0,0,0,0.1)" />
              </g>
              
              <text
                x="76%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="none"
                stroke="url(#strokeGradient)"
                strokeWidth="6"
                fontSize="220"
                fontWeight="900"
                fontFamily="var(--font-playfair)"
              >
                4
              </text>
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6 mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-sage-900">
              Out of Bounds
            </h1>
            <div className="h-1 w-32 bg-accent-gold mx-auto"></div>
            <p className="text-xl md:text-2xl font-body text-sage-700 max-w-2xl mx-auto leading-relaxed">
              This shot went a bit wide. Let&apos;s get you back on the fairway.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link
              href="/"
              className="group relative px-10 py-5 bg-accent-gold text-white font-body font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">
                Back to Home
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
            </Link>
            
            <Link
              href="/schedule"
              className="px-10 py-5 bg-white/80 backdrop-blur-sm text-sage-900 font-body font-bold text-lg rounded-full border-2 border-sage-200 hover:bg-white hover:border-accent-gold/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View Schedule
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="pt-8 border-t border-sage-200"
          >
            <p className="text-sm font-body text-sage-600 mb-4 uppercase tracking-wider">
              Quick Navigation
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/results"
                className="text-sage-800 hover:text-accent-gold font-body font-medium text-base transition-colors flex items-center gap-2 group"
              >
                <span className="w-2 h-2 bg-sage-400 rounded-full group-hover:bg-accent-gold transition-colors"></span>
                Results
              </Link>
              <Link
                href="/gallery"
                className="text-sage-800 hover:text-accent-gold font-body font-medium text-base transition-colors flex items-center gap-2 group"
              >
                <span className="w-2 h-2 bg-sage-400 rounded-full group-hover:bg-accent-gold transition-colors"></span>
                Gallery
              </Link>
              <Link
                href="/contact"
                className="text-sage-800 hover:text-accent-gold font-body font-medium text-base transition-colors flex items-center gap-2 group"
              >
                <span className="w-2 h-2 bg-sage-400 rounded-full group-hover:bg-accent-gold transition-colors"></span>
                Contact
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
