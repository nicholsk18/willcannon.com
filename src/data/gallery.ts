import { GalleryImage } from "./types"

export const galleryImages: GalleryImage[] = [
  { id: 1, src: "/static/gallery/IMG_7074.jpeg", alt: "Tournament Action", category: "tournament" },
  { id: 2, src: "/static/gallery/IMG_7075.jpeg", alt: "Practice Session", category: "training" },
  { id: 3, src: "/static/gallery/IMG_7076.jpeg", alt: "Victory Moment", category: "tournament" },
  { id: 4, src: "/static/gallery/IMG_7077.jpeg", alt: "Victory Moment", category: "tournament" },
  { id: 5, src: "/static/gallery/IMG_7078.jpg", alt: "Victory Moment", category: "tournament" },
  { id: 6, src: "/static/gallery/IMG_7079.jpg", alt: "Victory Moment", category: "tournament" },
  { id: 7, src: "/static/gallery/IMG_7080.jpeg", alt: "Course Walk", category: "lifestyle" },
  { id: 8, src: "/static/gallery/IMG_7081.jpeg", alt: "Course Walk", category: "lifestyle" },
  { id: 9, src: "/static/gallery/IMG_7082.jpg", alt: "Course Walk", category: "lifestyle" },
]

export const categories = [
  { id: "all", name: "All" },
  { id: "tournament", name: "Tournaments" },
  { id: "training", name: "Training" },
  { id: "lifestyle", name: "Lifestyle" },
]

