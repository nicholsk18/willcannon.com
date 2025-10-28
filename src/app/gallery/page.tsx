import type { Metadata } from "next"
import { GalleryBanner } from "@/app/components/gallery-banner"
import { GalleryGrid } from "@/app/components/gallery-grid"

export const metadata: Metadata = {
  title: "Gallery | Will Cannon - Professional Golfer",
  description: "Explore Will Cannon's journey through professional golf with an exclusive collection of photos from tournaments, training, and memorable moments on the course.",
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <GalleryBanner />
      <GalleryGrid />
    </main>
  )
}

