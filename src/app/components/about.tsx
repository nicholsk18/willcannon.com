import Image from "next/image"
import willAbout from "@/../public/static/will-about.png"
import { careerStats } from "@/data/stats"

export function About() {
  const eventsPlayed = careerStats.find(stat => stat.label === "Events Played")?.value || "0"
  const careerTop10s = careerStats.find(stat => stat.label === "Top 10s")?.value || "0"
  const careerWins = careerStats.find(stat => stat.label === "Career Wins")?.value || "0"
  return (
    <section className="w-full z-10 py-12 lg:py-16">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 order-2 lg:order-1">
          <div className="relative w-full max-w-lg mx-auto">
            <div className="absolute inset-0 bg-accent-gold/20 rounded-3xl translate-x-6 translate-y-6"></div>
            <div className="relative rounded-3xl overflow-hidden border-4 border-accent-gold/30 shadow-2xl">
              <Image
                className="w-full h-auto"
                src={willAbout}
                alt="Will Cannon - Professional Golfer"
                width={600}
                height={800}
                quality={80}
                placeholder="blur"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-6 lg:space-y-8 order-1 lg:order-2">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-sage-900 mb-4">About Will</h2>
            <div className="h-1 w-24 bg-accent-gold"></div>
          </div>

          <div className="space-y-4 lg:space-y-6 text-base md:text-lg lg:text-xl font-body text-sage-800 leading-relaxed">
            <p>
              A dedicated professional golfer with a passion for excellence and a commitment to continuous improvement. 
              With years of competitive experience, Will brings both skill and professionalism to every tournament.
            </p>
            
            <p>
              Beyond the course, Will is committed to growing the sport and engaging with fans and sponsors through 
              social media, tournaments, and community events. His approachable personality and dedication make him 
              an ideal brand ambassador.
            </p>

            <div className="pt-4 lg:pt-6 grid grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-accent-gold mb-1 md:mb-2">{eventsPlayed}</div>
                <div className="text-xs md:text-sm text-sage-700 uppercase tracking-wider">Events Played</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-accent-gold mb-1 md:mb-2">{careerTop10s}</div>
                <div className="text-xs md:text-sm text-sage-700 uppercase tracking-wider">Top 10 Finishes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-accent-gold mb-1 md:mb-2">{careerWins}</div>
                <div className="text-xs md:text-sm text-sage-700 uppercase tracking-wider">Career Wins</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
