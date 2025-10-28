import type { Metadata } from "next"
import { Contact } from "@/app/components/contact"

export const metadata: Metadata = {
  title: "Contact & Sponsorship",
  description: "Contact Will Cannon for sponsorship opportunities, brand partnerships, media inquiries, speaking engagements, or tournament appearance requests. Connect with a professional golfer on the Korn Ferry Tour.",
  keywords: ["Contact Will Cannon", "Golf Sponsorship", "Brand Partnership", "Media Inquiry", "Professional Golfer Contact", "Sponsorship Opportunities", "Golf Ambassador", "Speaking Engagements"],
  openGraph: {
    title: "Contact & Sponsorship | Will Cannon",
    description: "Contact Will Cannon for sponsorship opportunities, brand partnerships, and media inquiries.",
    url: "https://willcannon.com/contact",
    images: [
      {
        url: "https://willcannon.com/static/contact-banner.png",
        width: 1920,
        height: 1080,
        alt: "Contact Will Cannon",
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Sponsorship | Will Cannon",
    description: "Contact Will Cannon for sponsorship opportunities and brand partnerships.",
    images: ["https://willcannon.com/static/contact-banner.png"],
  },
  alternates: {
    canonical: "https://willcannon.com/contact",
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Contact />
    </main>
  )
}

