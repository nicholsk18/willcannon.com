import { GalleryImage } from "./types"

export const galleryImages: GalleryImage[] = [
  { id: 1, src: "/static/gallery/IMG_7074.jpeg", alt: "Headshot", category: "lifestyle" },
  { id: 2, src: "/static/gallery/IMG_7075.jpeg", alt: "Practice Session", category: "training" },
  { id: 3, src: "/static/gallery/IMG_7076.jpeg", alt: "Moment from the course", category: "tournament" },
  { id: 4, src: "/static/gallery/IMG_7077.jpeg", alt: "Moment from the course", category: "tournament" },
  { id: 5, src: "/static/gallery/IMG_7078.JPG", alt: "Moment from the course", category: "tournament" },
  { id: 6, src: "/static/gallery/IMG_7079.JPG", alt: "Moment from the course", category: "tournament" },
  { id: 7, src: "/static/gallery/IMG_7080.jpeg", alt: "Moment from the course", category: "tournament" },
  { id: 8, src: "/static/gallery/IMG_7081.jpeg", alt: "Victory Moment", category: "tournament" },
  { id: 9, src: "/static/gallery/IMG_7082.JPG", alt: "Moment from the course", category: "tournament" },
]

export const categories = [
  { id: "all", name: "All" },
  { id: "tournament", name: "Tournaments" },
  { id: "training", name: "Training" },
  { id: "lifestyle", name: "Lifestyle" },
]

