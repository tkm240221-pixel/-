import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import RegionDetail from "@/components/region-detail"
import Footer from "@/components/footer"
import { regionData } from "@/lib/region-data"

export const dynamicParams = true

export async function generateMetadata({ params }: { params: Promise<{ region: string }> }): Promise<Metadata> {
  const { region } = await params
  const data = regionData[region]

  if (!data) {
    return {
      title: "Page Not Found",
    }
  }

  const { areaName } = data
  const title = `${areaName} Mobile Massage Service - Show Time Massage`
  const description = `Premium mobile massage service in ${areaName}. 24/7 service, professional therapists, payment after service, arrives within 30 minutes. Korean, Thai, Swedish, and Aroma massage available.`

  const keywords = [
    `${areaName} massage`,
    `${areaName} mobile massage`,
    `${areaName} outcall massage`,
    "korean massage",
    "thai massage",
    "swedish massage",
    "aroma massage",
    "hotel massage",
    "24 hour massage",
    "professional massage",
    "premium massage",
    "home massage",
    "mobile spa",
  ].join(", ")

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: "website",
      siteName: "Show Time Massage",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(regionData).map((region) => ({
    region,
  }))
}

function StaticHeader() {
  const navItems = [
    { label: "Show Time Massage", href: "/" },
    { label: "Board", href: "/#board" },
    { label: "Seoul", href: "/#region1" },
    { label: "Gyeonggi", href: "/#region2" },
    { label: "Incheon", href: "/#region3" },
    { label: "Gyeongsangdo", href: "/#region4" },
    { label: "Jeollado", href: "/#region5" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-blue-900 to-blue-950 shadow-lg">
      <div className="container mx-auto">
        <nav className="hidden md:flex items-center justify-center">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-8 py-6 text-white font-medium text-lg transition-all border-r border-blue-800/50 last:border-r-0 hover:bg-blue-800/50"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden flex items-center justify-center px-4 py-4">
          <Link href="/" className="text-white font-bold text-xl">
            Show Time Massage
          </Link>
        </div>
      </div>
    </header>
  )
}

export default async function RegionPage({ params }: { params: Promise<{ region: string }> }) {
  const { region } = await params

  const data = regionData[region]

  if (!data) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-black">
      <StaticHeader />
      <div className="pt-20">
        <RegionDetail regionName={data.regionName} districtName={data.districtName} areaName={data.areaName} />
      </div>
      <Footer />
    </main>
  )
}
