"use client"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import line from "@/../public/static/line.svg"
import willAbout from "@/../public/static/will-about.png"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 250 }}
      animate={isInView ? { opacity: 1, y: 5 } : { opacity: 0, y: 250 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="w-full min-h-full h-full z-10 pt-10"
    >
      <div className="flex flex-row gap-20">
        <div className="flex-1">
          <h2 className="text-[128px] font-bold">About</h2>
          <Image className="relative -top-8" src={line} alt="line" />

          <p className="text-[64px] leading-[64px]">
            Some awesome information about will and how successful he has been
            in his golf career
          </p>
        </div>

        <div className="flex-1">
          <Image
            className="rounded-tl-[100px] rounded-br-[100px] drop-shadow-image mx-auto"
            src={willAbout}
            alt="Will Golfing"
          />
        </div>
      </div>
    </motion.section>
  )
}
