"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { generateLocationSEO } from "@/lib/seo-utils"

export default function DynamicSEO() {
  const pathname = usePathname()

  useEffect(() => {
    const seoData = generateLocationSEO(pathname)

    // Update document title
    document.title = seoData.title

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute("content", seoData.description)
    }

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta")
      metaKeywords.setAttribute("name", "keywords")
      document.head.appendChild(metaKeywords)
    }
    metaKeywords.setAttribute("content", seoData.keywords)

    // Update Open Graph title
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute("content", seoData.title)
    }

    // Update Open Graph description
    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute("content", seoData.description)
    }

    // Update Twitter title
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) {
      twitterTitle.setAttribute("content", seoData.title)
    }

    // Update Twitter description
    const twitterDescription = document.querySelector('meta[name="twitter:description"]')
    if (twitterDescription) {
      twitterDescription.setAttribute("content", seoData.description)
    }

    // Add location-specific structured data
    const existingLocationLD = document.querySelector("#location-structured-data")
    if (existingLocationLD) {
      existingLocationLD.remove()
    }

    const script = document.createElement("script")
    script.id = "location-structured-data"
    script.type = "application/ld+json"
    script.textContent = JSON.stringify(seoData.structuredData)
    document.head.appendChild(script)
  }, [pathname])

  return null
}
