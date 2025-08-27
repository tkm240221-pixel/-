"use client"

import { useState, useEffect } from "react"
import { Phone, MessageCircle } from "lucide-react"
import RegionalLinks from "@/components/regional-links"

export default function SeochoClientPage() {
  const [showPriceTable, setShowPriceTable] = useState(false)
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  const reservationText =
    "빠른 예약을 위해 전화 또는 문자로 상세주소 / 마사지 코스 말씀해주시면 빠른 예약 도와드리도록 하겠습니다 ^^"

  useEffect(() => {
    if (currentIndex < reservationText.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + reservationText[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 50)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, reservationText])

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-violet-600 to-purple-600 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">출장안마 예약문의 가이드</h2>
          <p className="text-lg mb-4">365일 24시간 문의 & 예약 가능합니다</p>
          <div className="bg-violet-800 bg-opacity-50 rounded-lg p-4 mb-6">
            <p className="text-violet-100 min-h-[60px]">
              {currentText}
              {currentText.length < reservationText.length && <span className="animate-pulse">|</span>}
            </p>
          </div>
          <p className="text-sm text-violet-200 mb-6">
            (선입금, 예약금, 보증금 일절 요구하지 않습니다. 예약시 참고바랍니다.)
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:010-2871-2457"
              className="bg-white text-violet-600 px-6 py-3 rounded-lg font-semibold hover:bg-violet-50 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              전화상담
            </a>
            <a
              href="https://open.kakao.com/o/s0ca9mMh"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              카카오톡 상담
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <RegionalLinks currentRegion="서초구" regionType="seoul" />
        </div>
      </section>
    </div>
  )
}
