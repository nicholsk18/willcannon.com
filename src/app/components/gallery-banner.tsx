"use client"
import { Nav } from "@/app/components/nav"
import Image from "next/image"

interface GalleryBannerProps {
  bgImage?: string
  title?: string
}

export function GalleryBanner({ bgImage = "/static/banner-gallery.png", title = "Gallery" }: GalleryBannerProps) {
  return (
    <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
      <Nav />
      <div className="absolute inset-0 brightness-[0.8]">
        <Image
          src={bgImage}
          alt={`${title} banner`}
          fill
          priority
          className="object-cover"
          quality={85}
        />
      </div>
      <div className="absolute inset-0 bg-dark-transparent-60 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white mb-6 drop-shadow-2xl tracking-tight">
            {title}
          </h1>
          <div className="h-1 w-32 bg-accent-gold mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl font-body text-white/95 drop-shadow-lg">
            Moments from the Course
          </p>
        </div>
      </div>
    </section>
  )
}

