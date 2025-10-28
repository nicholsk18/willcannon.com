"use client"
import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ScrollReveal } from "@/app/components/scroll-reveal"
import { categories } from "@/data/gallery"

interface GalleryImage {
  id: number
  src: string
  alt: string
  category: "all" | "tournament" | "training" | "lifestyle"
}

interface ApiResponse {
  images: GalleryImage[]
  pagination: {
    currentPage: number
    totalPages: number
    totalImages: number
    hasMore: boolean
    imagesPerPage: number
  }
}

export function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [images, setImages] = useState<GalleryImage[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null)
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const observerTarget = useRef<HTMLDivElement>(null)

  const fetchImages = useCallback(async (page: number, category: string, reset: boolean = false) => {
    if (isLoading) return
    
    setIsLoading(true)
    try {
      const response = await fetch(`/api/gallery?page=${page}&limit=12&category=${category}`)
      if (!response.ok) throw new Error('Failed to fetch images')
      
      const data: ApiResponse = await response.json()
      
      if (reset) {
        setImages(data.images)
      } else {
        setImages(prev => [...prev, ...data.images])
      }
      
      setHasMore(data.pagination.hasMore)
    } catch (error) {
      console.error('Error fetching images:', error)
    } finally {
      setIsLoading(false)
    }
  }, [isLoading])

  useEffect(() => {
    setImages([])
    setCurrentPage(1)
    fetchImages(1, selectedCategory, true)
  }, [selectedCategory, fetchImages])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          const nextPage = currentPage + 1
          setCurrentPage(nextPage)
          fetchImages(nextPage, selectedCategory)
        }
      },
      { threshold: 0.1 }
    )

    const currentTarget = observerTarget.current
    if (currentTarget) {
      observer.observe(currentTarget)
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget)
      }
    }
  }, [currentPage, hasMore, isLoading, selectedCategory, fetchImages])

  useEffect(() => {
    if (lightboxImage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [lightboxImage])

  const handleNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % images.length
    setCurrentIndex(nextIndex)
    setLightboxImage(images[nextIndex])
  }, [currentIndex, images])

  const handlePrevious = useCallback(() => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length
    setCurrentIndex(prevIndex)
    setLightboxImage(images[prevIndex])
  }, [currentIndex, images])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxImage) return
      
      if (e.key === 'Escape') {
        setLightboxImage(null)
      } else if (e.key === 'ArrowRight') {
        handleNext()
      } else if (e.key === 'ArrowLeft') {
        handlePrevious()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxImage, handleNext, handlePrevious])

  const openLightbox = (image: GalleryImage, index: number) => {
    setLightboxImage(image)
    setCurrentIndex(index)
  }

  return (
    <section className="relative bg-gradient-to-b from-cream-50 via-sage-50 to-cream-100 py-20 lg:py-32 px-6 lg:px-20">
      <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjEiIGZpbGw9InJnYmEoMTM5LDE2Niw0MiwwLjEpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
      
      <div className="relative container mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-sage-900 mb-4">
              Gallery
            </h2>
            <div className="h-1 w-24 bg-accent-gold mx-auto mb-6"></div>
            <p className="text-base md:text-lg lg:text-xl font-body text-sage-800 max-w-2xl mx-auto px-4">
              Capturing the journey, dedication, and passion of professional golf
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-body text-sm md:text-base font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-accent-gold text-white shadow-lg scale-105"
                    : "bg-white/70 text-sage-800 hover:bg-white hover:shadow-md border-2 border-sage-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
                onClick={() => openLightbox(image, index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={80}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/80 via-sage-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-body font-semibold text-lg drop-shadow-lg">
                    {image.alt}
                  </p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                    <svg className="w-6 h-6 text-sage-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-sage-200 border-t-accent-gold rounded-full animate-spin"></div>
              <p className="text-sage-800 font-body text-sm mt-4 text-center">Loading images...</p>
            </div>
          </div>
        )}

        <div ref={observerTarget} className="h-4" />

        {!hasMore && images.length > 0 && (
          <div className="text-center py-12">
            <p className="text-sage-700 font-body text-lg">
              All images loaded ({images.length} total)
            </p>
          </div>
        )}
      </div>

      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-dark-transparent-95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full max-h-[90vh] aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                fill
                className="object-contain rounded-2xl"
                sizes="90vw"
                quality={90}
                priority
              />
              
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-2xl hover:bg-accent-gold hover:text-white transition-colors duration-300 z-10"
                aria-label="Close lightbox"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-2xl hover:bg-accent-gold hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label="Previous image"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-2xl hover:bg-accent-gold hover:text-white transition-all duration-300 hover:scale-110"
                    aria-label="Next image"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              <div className="absolute -bottom-16 left-0 right-0 text-center">
                <p className="text-white font-body text-xl drop-shadow-2xl mb-2">
                  {lightboxImage.alt}
                </p>
                <p className="text-white/70 font-body text-sm drop-shadow-xl">
                  {currentIndex + 1} / {images.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
