import { Nav } from "@/app/components/nav"
import titleist from "@/../public/static/brands/titleist.png"
import Image from "next/image"

export function BannerHome() {
  return (
    <section className="relative h-screen overflow-hidden">
      <Nav />
      <div 
        className="fixed -z-20 bg-no-repeat bg-cover w-full h-full bg-center"
        style={{ backgroundImage: 'url(/static/banner-home.png)' }}
      ></div>
      <div className="bottom-0 fixed -z-10 bg-dark-transparent-50 w-full px-5 pt-5 overflow-hidden">
        <div className="w-full inline-flex flex-nowrap">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            {Array.from({ length: 8 }).map((_, i) => (
              <li key={i}>
                <Image src={titleist} alt="Titleist" />
              </li>
            ))}
          </ul>
          <ul
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            aria-hidden="true"
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <li key={i}>
                <Image src={titleist} alt="Titleist" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
