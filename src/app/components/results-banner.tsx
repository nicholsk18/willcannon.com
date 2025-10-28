import { Nav } from "@/app/components/nav"
import Image from "next/image"

export function ResultsBanner() {
  return (
    <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
      <Nav />
      <div className="fixed -z-20 w-full h-full brightness-[0.75]">
        <Image
          src="/static/banner-home.png"
          alt="Results banner"
          fill
          priority
          className="object-cover"
          quality={75}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          sizes="100vw"
        />
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center px-8">
        <div className="max-w-4xl text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 drop-shadow-2xl tracking-tight">
            Results
          </h1>
          <div className="h-1 w-32 bg-accent-gold mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl font-body font-light text-white/95 tracking-wide">
            Tournament performance and competitive achievements
          </p>
        </div>
      </div>
    </section>
  )
}

