import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import RegionDetail from "@/components/region-detail"
import Footer from "@/components/footer"
import { regionData } from "@/lib/region-data"

export const dynamicParams = true

export const metadata: Metadata = {
  title: "Massage Service",
  description: "Premium mobile massage service",
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
