"use client"
import { useState } from "react"
import RegionalLinks from "@/components/regional-links"

export default function SongpaClientPage() {
  const [showPriceTable, setShowPriceTable] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-violet-100"></header>

      {/* Reservation Guide */}
      <section className="bg-gradient-to-r from-violet-600 to-purple-600 text-white py-8"></section>

      {/* Main Banner */}
      <section className="bg-gradient-to-br from-violet-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">송파구 출장마사지</h1>
          </div>

          {/* Course Table */}
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl shadow-xl p-8 mb-12"></div>

          <RegionalLinks currentRegion="송파구" regionType="seoul" />
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-white"></section>

      {/* Customer Reviews */}
      <section className="py-16 bg-gradient-to-br from-violet-50 to-purple-50"></section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12"></footer>

      {/* Price Table Modal */}
      {showPriceTable && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"></div>
      )}
    </div>
  )
}
