export const trackEvent = (
  eventName: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

export const trackPageView = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-6MD3XJNKYH"
    window.gtag("config", GA_ID, {
      page_path: url,
    })
  }
}

export const trackFormSubmission = (formName: string, success: boolean) => {
  trackEvent(
    success ? "form_submit_success" : "form_submit_error",
    "conversion",
    formName
  )
}

export const trackGalleryImageView = (imageName: string, category: string) => {
  trackEvent("gallery_image_view", "engagement", `${category}: ${imageName}`)
}

export const trackTournamentClick = (tournamentName: string) => {
  trackEvent("tournament_click", "engagement", tournamentName)
}

export const trackSponsorClick = (sponsorName: string) => {
  trackEvent("sponsor_click", "engagement", sponsorName)
}

export const trackContactAttempt = (source: string) => {
  trackEvent("contact_attempt", "conversion", source)
}

declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
  }
}

