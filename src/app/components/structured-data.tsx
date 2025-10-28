export function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Will Cannon",
    "url": "https://willcannon.com",
    "image": "https://willcannon.com/static/will-about.png",
    "jobTitle": "Professional Golfer",
    "worksFor": {
      "@type": "SportsOrganization",
      "name": "Korn Ferry Tour"
    },
    "sameAs": [
      // Add social media URLs when available
      // "https://twitter.com/willcannon",
      // "https://instagram.com/willcannon",
    ],
    "description": "Professional golfer competing on the Korn Ferry Tour",
    "knowsAbout": ["Golf", "Professional Golf", "Korn Ferry Tour", "PGA Tour"],
  }

  const athleteSchema = {
    "@context": "https://schema.org",
    "@type": "Athlete",
    "name": "Will Cannon",
    "sport": "Golf",
    "url": "https://willcannon.com",
    "image": "https://willcannon.com/static/will-about.png",
    "description": "Professional golfer competing on the Korn Ferry Tour with career achievements and tournament results.",
    "memberOf": {
      "@type": "SportsOrganization",
      "name": "Korn Ferry Tour"
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Will Cannon - Professional Golfer",
    "url": "https://willcannon.com",
    "description": "Official website of Will Cannon, professional golfer competing on the Korn Ferry Tour. Tournament schedule, results, and career information.",
    "author": {
      "@type": "Person",
      "name": "Will Cannon"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://willcannon.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Will Cannon Golf",
    "url": "https://willcannon.com",
    "logo": "https://willcannon.com/static/will-about.png",
    "description": "Official website and brand presence of professional golfer Will Cannon",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sponsorship & Media Inquiries",
      "url": "https://willcannon.com/contact"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(athleteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  )
}

