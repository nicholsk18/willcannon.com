"use client"
import Link from "next/link"

export function Nav() {
  return (
    <nav className="fixed bg-dark-transparent-50 w-full z-50">
      <div className="flex justify-between items-center px-5 py-2">
        <div className="">
          <Link href="/" className="text-5xl block relative title">
            Will Cannon
          </Link>
        </div>
        <div className="flex flex-row items-center gap-10">
          <Link className="text-4xl block relative top-0" href="/schedule">
            Schedule
          </Link>
          <Link className="text-4xl block relative top-0" href="/results">
            Results
          </Link>
        </div>
      </div>
    </nav>
  )
}
