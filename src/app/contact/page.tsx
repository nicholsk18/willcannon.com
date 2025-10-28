import type { Metadata } from "next"
import { Contact } from "@/app/components/contact"

export const metadata: Metadata = {
  title: "Contact | Will Cannon - Professional Golfer",
  description: "Get in touch with Will Cannon for sponsorship opportunities, media inquiries, or tournament information.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Contact />
    </main>
  )
}

