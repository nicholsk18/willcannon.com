import { Nav } from "@/app/components/nav"
import Image from "next/image"

export function Banner({ bgImage }: { bgImage: string }) {
  return (
    <section className="relative h-screen overflow-hidden">
      <Nav />
      <div className="fixed -z-20 w-full h-full">
        <Image
          src={bgImage}
          alt="Banner background"
          fill
          priority
          className="object-cover"
          quality={75}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          sizes="100vw"
        />
      </div>
      <div className="fixed -z-10 w-full h-full">
        <div className="bottom-0 fixed -z-10 bg-dark-transparent-50 w-full px-5 pt-5 overflow-hidden">
          <h2 className="text-[128px] font-bold">Schedule</h2>
        </div>
      </div>
    </section>
  )
}
