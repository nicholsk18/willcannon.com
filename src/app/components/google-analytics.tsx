"use client"
import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import Script from "next/script"

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-6MD3XJNKYH"

export function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window === "undefined") return

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "")
    
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }, [pathname, searchParams])

  useEffect(() => {
    const scrollThresholds = [25, 50, 75, 90, 100]
    const triggeredThresholds = new Set<number>()
    const startTime = Date.now()
    let maxScrollDepth = 0

    const trackScrollDepth = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY
      const scrollPercent = Math.round((scrolled / scrollHeight) * 100)

      if (scrollPercent > maxScrollDepth) {
        maxScrollDepth = scrollPercent
      }

      scrollThresholds.forEach((threshold) => {
        if (scrollPercent >= threshold && !triggeredThresholds.has(threshold)) {
          triggeredThresholds.add(threshold)
          window.gtag("event", "scroll_depth", {
            event_category: "engagement",
            event_label: `${threshold}%`,
            value: threshold,
          })
        }
      })
    }

    const trackTimeOnPage = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000)
      window.gtag("event", "time_on_page", {
        event_category: "engagement",
        event_label: pathname,
        value: timeSpent,
      })
      
      window.gtag("event", "max_scroll_depth", {
        event_category: "engagement",
        event_label: pathname,
        value: maxScrollDepth,
      })
    }

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest("a")
      const button = target.closest("button")

      if (link) {
        const href = link.getAttribute("href") || ""
        const text = link.textContent?.trim() || "no text"
        window.gtag("event", "click_link", {
          event_category: "navigation",
          event_label: text,
          link_url: href,
        })
      }

      if (button) {
        const text = button.textContent?.trim() || "no text"
        const ariaLabel = button.getAttribute("aria-label") || ""
        window.gtag("event", "click_button", {
          event_category: "interaction",
          event_label: ariaLabel || text,
        })
      }
    }

    const handleFormSubmit = (e: Event) => {
      const form = e.target as HTMLFormElement
      const formName = form.getAttribute("name") || form.getAttribute("id") || "unnamed form"
      window.gtag("event", "form_submit", {
        event_category: "conversion",
        event_label: formName,
      })
    }

    let scrollTimeout: NodeJS.Timeout
    const handleScroll = () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(trackScrollDepth, 150)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("click", handleClick, { passive: true })
    document.addEventListener("submit", handleFormSubmit)
    window.addEventListener("beforeunload", trackTimeOnPage)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("click", handleClick)
      document.removeEventListener("submit", handleFormSubmit)
      window.removeEventListener("beforeunload", trackTimeOnPage)
      trackTimeOnPage()
    }
  }, [pathname])

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}

declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}

