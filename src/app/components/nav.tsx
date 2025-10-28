"use client"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const menuVariants = {
    closed: { x: "100%" },
    open: { x: 0 }
  }

  const linkVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.1 }
    })
  }

  const links = [
    { href: "/", label: "Home" },
    { href: "/schedule", label: "Schedule" },
    { href: "/results", label: "Results" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-sage-900/90 backdrop-blur-md w-full z-50 border-b border-white/10">
        <div className="container mx-auto flex justify-between items-center px-6 lg:px-12 py-4">
          <Link 
            href="/" 
            className="text-3xl lg:text-4xl font-display font-bold text-white hover:text-accent-gold transition-colors tracking-tight"
          >
            Will Cannon
          </Link>
          
          <div className="hidden lg:flex items-center gap-8 lg:gap-12">
            {links.slice(1).map((link) => (
              <Link
                key={link.href}
                className={`text-lg font-body font-medium transition-colors uppercase tracking-wider relative ${
                  isActive(link.href)
                    ? "text-accent-gold"
                    : "text-white/90 hover:text-accent-gold"
                }`}
                href={link.href}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-gold"></span>
                )}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 hover:text-accent-gold transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-sage-900/85 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-sage-900 z-50 shadow-2xl lg:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center px-6 py-6 border-b border-white/10">
                  <span className="text-2xl font-display font-bold text-white">Menu</span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white p-2 hover:text-accent-gold transition-colors"
                    aria-label="Close menu"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <nav className="flex flex-col gap-2 p-6">
                  {links.map((link, i) => (
                    <motion.div
                      key={link.href}
                      custom={i}
                      variants={linkVariants}
                      initial="closed"
                      animate="open"
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block text-xl font-body font-medium transition-all py-4 rounded-lg uppercase tracking-wider ${
                          isActive(link.href)
                            ? "text-accent-gold bg-white/10"
                            : "text-white/90 hover:text-accent-gold hover:bg-white/5"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="mt-auto p-6 border-t border-white/10">
                  <p className="text-sm font-body text-white/60 text-center">
                    © {new Date().getFullYear()} Will Cannon
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
