import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative text-white/80 py-12 px-6 bg-sage-900">
      <div className="relative container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">Will Cannon</h3>
            <p className="font-body text-xs md:text-sm text-white/60">
              Professional Golfer
            </p>
          </div>
          
          <div>
            <h4 className="font-body font-semibold text-white mb-2 md:mb-3 uppercase tracking-wider text-xs md:text-sm">Navigation</h4>
            <div className="flex flex-col space-y-1.5 md:space-y-2">
              <Link href="/" className="font-body text-xs md:text-sm hover:text-accent-gold transition-colors">
                Home
              </Link>
              <Link href="/schedule" className="font-body text-xs md:text-sm hover:text-accent-gold transition-colors">
                Schedule
              </Link>
              <Link href="/results" className="font-body text-xs md:text-sm hover:text-accent-gold transition-colors">
                Results
              </Link>
              <Link href="/gallery" className="font-body text-xs md:text-sm hover:text-accent-gold transition-colors">
                Gallery
              </Link>
              <Link href="/contact" className="font-body text-xs md:text-sm hover:text-accent-gold transition-colors">
                Contact
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-body font-semibold text-white mb-2 md:mb-3 uppercase tracking-wider text-xs md:text-sm">Connect</h4>
            <div className="flex flex-col space-y-1.5 md:space-y-2">
              <a href="#" className="font-body text-xs md:text-sm hover:text-accent-gold transition-colors">
                Instagram
              </a>
              <a href="#" className="font-body text-xs md:text-sm hover:text-accent-gold transition-colors">
                Twitter
              </a>
              <a href="#" className="font-body text-xs md:text-sm hover:text-accent-gold transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-sage-700/30 pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <p className="font-body text-xs md:text-sm text-white/60">
            © {new Date().getFullYear()} Will Cannon. All rights reserved.
          </p>
          <p className="font-body text-xs md:text-sm text-white/60">
            Created by{" "}
            <a 
              href="https://karsonnichols.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white/80 transition-colors"
            >
              Karson Nichols
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

