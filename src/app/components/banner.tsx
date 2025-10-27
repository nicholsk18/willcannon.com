import { Nav } from "@/app/components/nav"

export function Banner({ bgImage }: { bgImage: string }) {
  return (
    <section className="relative h-screen overflow-hidden">
      <Nav />
      <div
        className="fixed -z-20 bg-no-repeat bg-cover w-full h-full bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="bottom-0 fixed -z-10 bg-dark-transparent-50 w-full px-5 pt-5 overflow-hidden">
          <h2 className="text-[128px] font-bold">Schedule</h2>
        </div>
      </div>
    </section>
  )
}
