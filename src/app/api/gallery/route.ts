import { NextRequest, NextResponse } from 'next/server'
import { galleryImages } from '@/data/gallery'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '12')
    const category = searchParams.get('category') || 'all'

    if (page < 1 || limit < 1 || limit > 50) {
      return NextResponse.json(
        { error: 'Invalid pagination parameters' },
        { status: 400 }
      )
    }

    const filteredImages = category === 'all' 
      ? galleryImages 
      : galleryImages.filter(img => img.category === category)

    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedImages = filteredImages.slice(startIndex, endIndex)

    const totalPages = Math.ceil(filteredImages.length / limit)
    const hasMore = page < totalPages

    return NextResponse.json({
      images: paginatedImages,
      pagination: {
        currentPage: page,
        totalPages,
        totalImages: filteredImages.length,
        hasMore,
        imagesPerPage: limit,
      }
    })
  } catch (error) {
    console.error('Gallery API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

