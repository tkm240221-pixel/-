"use client"
import RegionalLinks from "@/components/regional-links"

export default function GangnamClientPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Regional Links - Added internal linking to other Seoul districts */}
      <RegionalLinks currentRegion="강남구" regionType="seoul" />
    </div>
  )
}
