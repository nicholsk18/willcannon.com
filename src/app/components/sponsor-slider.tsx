import Image from "next/image"
import titleist from "@/../public/static/brands/titleist.png"

export function SponsorSlider() {
  return (
    <section className="relative py-8 md:py-12 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-6 md:mb-8">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-sage-900 mb-2">
            Proud Partners
          </h3>
          <div className="h-1 w-16 bg-accent-gold mx-auto"></div>
        </div>
        
        <div className="relative">
          <div className="w-full inline-flex flex-nowrap">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-12 [&_img]:max-w-none animate-infinite-scroll">
              {Array.from({ length: 8 }).map((_, i) => (
                <li key={i}>
                  <Image 
                    src={titleist} 
                    alt="Titleist" 
                    className="h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" 
                  />
                </li>
              ))}
            </ul>
            <ul
              className="flex items-center justify-center md:justify-start [&_li]:mx-12 [&_img]:max-w-none animate-infinite-scroll"
              aria-hidden="true"
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <li key={i}>
                  <Image 
                    src={titleist} 
                    alt="Titleist" 
                    className="h-10 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" 
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

