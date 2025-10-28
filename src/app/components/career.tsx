"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { careerHighlights } from "@/data/career"

import leftArrow from "@/../public/static/icons/left-arrow.svg"
import rightArrow from "@/../public/static/icons/right-arrow.svg"

import IMG_7074 from "@/../public/static/career/IMG_7074.jpeg"
import IMG_7075 from "@/../public/static/career/IMG_7075.jpeg"
import IMG_7076 from "@/../public/static/career/IMG_7076.jpeg"
import IMG_7080 from "@/../public/static/career/IMG_7080.jpeg"

export function Career() {
  const IMAGES = [IMG_7074, IMG_7075, IMG_7076, IMG_7080]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      rotateY: direction > 0 ? 45 : -45,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      rotateY: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      rotateY: direction > 0 ? -45 : 45,
      opacity: 0,
      scale: 0.8
    })
  }

  const moveRight = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.length)
  }

  const moveLeft = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + IMAGES.length) % IMAGES.length)
  }

  return (
    <section className="w-full z-10 flex pt-12 pb-0 lg:py-16">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full items-center">
        <div className="flex-1 space-y-6 lg:space-y-8 order-2 lg:order-1">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-sage-900 mb-4">Career Highlights</h2>
            <div className="h-1 w-24 bg-accent-gold"></div>
          </div>

          {/* Mobile: Show all highlights */}
          <div className="lg:hidden space-y-4">
            {careerHighlights.map((highlight, index) => (
              <p 
                key={index}
                className="text-base md:text-lg font-body text-sage-800 leading-relaxed"
              >
                • {highlight.text}
              </p>
            ))}
          </div>

          {/* Desktop: Animated carousel */}
          <div className="hidden lg:block relative min-h-[240px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.p
                key={currentIndex}
                custom={direction}
                variants={{
                  enter: { opacity: 0, y: 20 },
                  center: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -20 }
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="text-xl lg:text-2xl font-body text-sage-800 leading-relaxed"
              >
                {careerHighlights[currentIndex].text}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="hidden lg:flex gap-4 items-center pt-4">
            <button 
              onClick={moveLeft}
              className="p-4 bg-white/60 hover:bg-accent-gold/20 backdrop-blur-sm rounded-full transition-all duration-300 group border-2 border-sage-200"
              aria-label="Previous achievement"
            >
              <Image src={leftArrow} alt="" className="w-6 h-6 group-hover:scale-110 transition-transform brightness-0" />
            </button>
            <button 
              onClick={moveRight}
              className="p-4 bg-white/60 hover:bg-accent-gold/20 backdrop-blur-sm rounded-full transition-all duration-300 group border-2 border-sage-200"
              aria-label="Next achievement"
            >
              <Image src={rightArrow} alt="" className="w-6 h-6 group-hover:scale-110 transition-transform brightness-0" />
            </button>
          </div>
        </div>

        <div className="w-full lg:flex-1 order-1 lg:order-2">
          <div className="relative w-full lg:max-w-md lg:mx-auto" style={{ perspective: "1000px" }}>
            <div className="relative w-full aspect-[3/4]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    rotateY: { duration: 0.6 },
                    opacity: { duration: 0.4 },
                    scale: { duration: 0.4 }
                  }}
                  className="absolute inset-0"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-accent-gold/40 shadow-2xl bg-white">
                    <Image 
                      className="object-cover" 
                      src={IMAGES[currentIndex]} 
                      alt="Professional tournament photography" 
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      priority
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-accent-gold/20 -z-10"></div>
            </div>

            <div className="flex justify-center gap-3 mt-8">
              {IMAGES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-8 bg-accent-gold' 
                      : 'w-2 bg-sage-300 hover:bg-sage-400'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex lg:hidden gap-4 items-center justify-center mt-6">
              <button 
                onClick={moveLeft}
                className="p-4 bg-white/60 hover:bg-accent-gold/20 backdrop-blur-sm rounded-full transition-all duration-300 group border-2 border-sage-200"
                aria-label="Previous achievement"
              >
                <Image src={leftArrow} alt="" className="w-6 h-6 group-hover:scale-110 transition-transform brightness-0" />
              </button>
              <button 
                onClick={moveRight}
                className="p-4 bg-white/60 hover:bg-accent-gold/20 backdrop-blur-sm rounded-full transition-all duration-300 group border-2 border-sage-200"
                aria-label="Next achievement"
              >
                <Image src={rightArrow} alt="" className="w-6 h-6 group-hover:scale-110 transition-transform brightness-0" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
