import { Nav } from "@/app/components/nav"
import Image from "next/image"

export function BannerHome() {
  return (
    <section className="relative h-screen overflow-hidden">
      <Nav />
      <div className="absolute inset-0 -z-10 brightness-[0.85]">
        <Image
          src="/static/banner-home.png"
          alt="Golf course background"
          fill
          priority
          className="object-cover"
          quality={75}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          sizes="100vw"
        />
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center px-4 md:px-8">
        <div className="max-w-5xl text-center">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-bold text-white mb-4 md:mb-6 drop-shadow-2xl tracking-tight">
            Will Cannon
          </h1>
          <div className="h-1 w-24 md:w-32 bg-accent-gold mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg md:text-2xl lg:text-4xl font-body font-light text-white/95 mb-8 md:mb-12 tracking-wide">
            Professional Golfer
          </p>
        </div>
      </div>
    </section>
  )
}
