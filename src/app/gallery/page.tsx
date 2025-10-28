import type { Metadata } from "next"
import { GalleryBanner } from "@/app/components/gallery-banner"
import { GalleryGrid } from "@/app/components/gallery-grid"

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "Explore Will Cannon's professional golf journey through exclusive photos from tournaments, training sessions, and memorable moments on the course. Behind-the-scenes glimpses of life on the Korn Ferry Tour.",
  keywords: ["Will Cannon Photos", "Golf Gallery", "Professional Golf Photos", "Tournament Photos", "Golf Training", "Korn Ferry Tour Photos", "Golf Behind the Scenes", "Professional Golfer Gallery"],
  openGraph: {
    title: "Photo Gallery | Will Cannon",
    description: "Explore Will Cannon's professional golf journey through exclusive photos from tournaments, training, and memorable moments on the course.",
    url: "https://willcannon.com/gallery",
    images: [
      {
        url: "https://willcannon.com/static/gallery/IMG_7074.jpeg",
        width: 1920,
        height: 1080,
        alt: "Will Cannon Golf Gallery",
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Gallery | Will Cannon",
    description: "Explore Will Cannon's professional golf journey through exclusive tournament and training photos.",
    images: ["https://willcannon.com/static/gallery/IMG_7074.jpeg"],
  },
  alternates: {
    canonical: "https://willcannon.com/gallery",
  },
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <GalleryBanner />
      <GalleryGrid />
    </main>
  )
}

