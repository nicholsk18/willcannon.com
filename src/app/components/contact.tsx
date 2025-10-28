"use client"
import React, { useState } from "react"
import Image from "next/image"
import { trackFormSubmission } from "@/util/analytics"
import { Nav } from "@/app/components/nav"

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    if (form.honeypot) {
      setStatus("error")
      setErrorMessage("Invalid submission detected")
      return
    }

    try {
      const { honeypot, ...formData } = form
      void honeypot
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setStatus("success")
      trackFormSubmission("contact_form", true)
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
        honeypot: "",
      })

      setTimeout(() => setStatus("idle"), 5000)
    } catch (error) {
      setStatus("error")
      trackFormSubmission("contact_form", false)
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message')
    }
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
      <Nav />
      <div className="absolute inset-0">
        <Image
          src="/static/contact-banner.png"
          alt="Golf course contact background"
          fill
          className="object-cover"
          quality={85}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-dark-transparent-40 via-dark-transparent-60 to-dark-transparent-85"></div>
      <div className="absolute inset-0 bg-sage-900/20"></div>
      
      <div className="relative container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-4 drop-shadow-2xl">
              Let&apos;s Connect
            </h2>
            <div className="h-1 w-24 bg-accent-gold mx-auto mb-6"></div>
            <p className="text-base md:text-lg lg:text-xl font-body text-white/95 drop-shadow-lg">
              Interested in sponsorship opportunities or collaborations? Get in touch.
            </p>
          </div>

          <div className="bg-sage-100/5 backdrop-blur-md rounded-2xl p-6 md:p-8 lg:p-12 shadow-2xl border-2 border-accent-gold/40">
            <form className="space-y-4 md:space-y-6" onSubmit={submitForm}>
              <input
                type="text"
                name="honeypot"
                value={form.honeypot}
                onChange={handleChange}
                style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                placeholder="Your name"
                className="w-full bg-sage-100/20 backdrop-blur-sm border-2 border-sage-300/40 rounded-lg px-5 py-3 text-white placeholder:text-white/70 focus:outline-none focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 transition-all font-body"
                onChange={handleChange}
                required
              />

              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                placeholder="your.email@example.com"
                className="w-full bg-sage-100/20 backdrop-blur-sm border-2 border-sage-300/40 rounded-lg px-5 py-3 text-white placeholder:text-white/70 focus:outline-none focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 transition-all font-body"
                onChange={handleChange}
                required
              />

              <input
                type="text"
                id="subject"
                name="subject"
                value={form.subject}
                placeholder="Sponsorship Inquiry"
                className="w-full bg-sage-100/20 backdrop-blur-sm border-2 border-sage-300/40 rounded-lg px-5 py-3 text-white placeholder:text-white/70 focus:outline-none focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 transition-all font-body"
                onChange={handleChange}
                required
              />

              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your sponsorship or collaboration opportunity..."
                className="w-full bg-sage-100/20 backdrop-blur-sm border-2 border-sage-300/40 rounded-lg px-5 py-3 text-white placeholder:text-white/70 focus:outline-none focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 transition-all font-body h-40 resize-none"
                onChange={handleChange}
                value={form.message}
                required
              ></textarea>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-accent-gold hover:bg-accent-gold-light text-white font-body font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <div className="mt-4 p-4 bg-accent-gold/20 border-2 border-accent-gold rounded-lg text-center">
                  <p className="text-white font-body font-semibold">
                    ✓ Message sent successfully! I&apos;ll get back to you soon.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className="mt-4 p-4 bg-red-500/20 border-2 border-red-500 rounded-lg text-center">
                  <p className="text-white font-body font-semibold">
                    ✗ {errorMessage || "Failed to send message. Please try again."}
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
