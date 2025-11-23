"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Phone, MessageCircle } from "lucide-react"

export default function YeoncheonMassage() {
  const [showPriceTable, setShowPriceTable] = useState(false)
  const [typewriterText, setTypewriterText] = useState("")

  const fullText =
    "빠른 예약을 위해 전화 또는 문자로 상세주소 / 마사지 코스 말씀해주시면 빠른 예약 도와드리도록 하겠습니다 ^^"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypewriterText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-violet-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-violet-600">
              총알출장마사지
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-violet-600 transition-colors">
                홈
              </Link>
              <button
                onClick={() => setShowPriceTable(true)}
                className="text-gray-700 hover:text-violet-600 transition-colors"
              >
                코스표
              </button>
              <Link href="/#regions" className="text-gray-700 hover:text-violet-600 transition-colors">
                지역별
              </Link>
              <a href="tel:010-2871-2457" className="text-gray-700 hover:text-violet-600 transition-colors">
                문의
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-600 via-purple-600 to-violet-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">연천군 출장마사지 예약문의 가이드</h1>
          <p className="text-xl mb-8 text-violet-100">365일 24시간 문의 & 예약 가능합니다</p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <p className="text-lg mb-4 text-violet-100">
              {typewriterText}
              <span className="animate-pulse">|</span>
            </p>
            <div className="bg-violet-500/30 rounded-lg p-4">
              <p className="text-sm text-violet-100">
                (선입금, 예약금, 보증금 일절 요구하지 않습니다. 예약시 참고바랍니다.)
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:010-2871-2457"
              className="bg-white text-violet-600 px-8 py-4 rounded-full font-semibold hover:bg-violet-50 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              전화상담
            </a>
            <a
              href="https://open.kakao.com/o/s0ca9mMh"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              카카오톡 상담
            </a>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-violet-800">연천군 서비스 지역</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "연천읍",
              "전곡읍",
              "청산면",
              "왕징면",
              "군남면",
              "미산면",
              "백학면",
              "신서면",
              "장남면",
              "중면",
              "관인면",
              "신망리",
            ].map((area) => (
              <div key={area} className="bg-white p-4 rounded-lg shadow-sm border border-violet-100">
                <span className="text-violet-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
