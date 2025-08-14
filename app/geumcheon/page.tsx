"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Phone, MessageCircle, Clock, Users, Shield } from "lucide-react"

export default function GeumcheonPage() {
  const [showPriceTable, setShowPriceTable] = useState(false)
  const [typewriterText, setTypewriterText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  const fullText =
    "빠른 예약을 위해 전화 또는 문자로 상세주소 / 마사지 코스 말씀해주시면 빠른 예약 도와드리도록 하겠습니다 ^^"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypewriterText(fullText.slice(0, index + 1))
        index++
      } else {
        setShowCursor(false)
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

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-violet-600 to-purple-700 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">금천구 출장마사지</h1>
            <p className="text-xl mb-8 text-violet-100">가산동, 독산동, 시흥동 지역 전문 서비스</p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <p className="text-lg mb-4">
                {typewriterText}
                {showCursor && <span className="animate-pulse">|</span>}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:010-2871-2457"
                className="bg-white text-violet-600 px-8 py-3 rounded-lg font-semibold hover:bg-violet-50 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                전화상담
              </a>
              <a
                href="https://open.kakao.com/o/s0ca9mMh"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                카카오톡 상담
              </a>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">금천구 전문 서비스</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-violet-100">
                <Clock className="w-12 h-12 text-violet-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">24시간 운영</h3>
                <p className="text-gray-600">금천구 전 지역 24시간 출장 서비스</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-violet-100">
                <Users className="w-12 h-12 text-violet-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">전문 테라피스트</h3>
                <p className="text-gray-600">숙련된 전문가의 맞춤형 마사지</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-violet-100">
                <Shield className="w-12 h-12 text-violet-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">안전한 서비스</h3>
                <p className="text-gray-600">철저한 위생관리와 안전한 서비스</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">금천구 서비스 지역</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-violet-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-violet-800">주요 서비스 지역</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 가산동 - 가산디지털단지역 인근</li>
                  <li>• 독산동 - 독산역, 금천구청역 인근</li>
                  <li>• 시흥동 - 시흥대로, 금천구 중심가</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-purple-800">추가 서비스 지역</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 금천구 전 지역 서비스 가능</li>
                  <li>• 아파트, 오피스텔, 주택 모두 가능</li>
                  <li>• 24시간 연중무휴 운영</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Price Table Modal */}
      {showPriceTable && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">마사지 코스 & 요금표</h2>
                <button onClick={() => setShowPriceTable(false)} className="text-gray-500 hover:text-gray-700 text-2xl">
                  ×
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-violet-600">타이 마사지</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-violet-50 rounded">
                      <div className="font-semibold">60분</div>
                      <div className="text-violet-600">80,000원</div>
                    </div>
                    <div className="text-center p-3 bg-violet-50 rounded">
                      <div className="font-semibold">90분</div>
                      <div className="text-violet-600">100,000원</div>
                    </div>
                    <div className="text-center p-3 bg-violet-50 rounded">
                      <div className="font-semibold">120분</div>
                      <div className="text-violet-600">120,000원</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-purple-600">힐링스웨디시</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-purple-50 rounded">
                      <div className="font-semibold">60분</div>
                      <div className="text-purple-600">90,000원</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded">
                      <div className="font-semibold">90분</div>
                      <div className="text-purple-600">110,000원</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded">
                      <div className="font-semibold">120분</div>
                      <div className="text-purple-600">130,000원</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-amber-600">VIP (타이 + 힐링 + 풋)</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-amber-50 rounded">
                      <div className="font-semibold">60분</div>
                      <div className="text-amber-600">100,000원</div>
                    </div>
                    <div className="text-center p-3 bg-amber-50 rounded">
                      <div className="font-semibold">90분</div>
                      <div className="text-amber-600">130,000원</div>
                    </div>
                    <div className="text-center p-3 bg-amber-50 rounded">
                      <div className="font-semibold">120분</div>
                      <div className="text-amber-600">160,000원</div>
                    </div>
                    <div className="text-center p-3 bg-amber-50 rounded">
                      <div className="font-semibold">150분</div>
                      <div className="text-amber-600">200,000원</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href="tel:010-2871-2457"
                  className="flex-1 bg-violet-600 text-white py-3 rounded-lg font-semibold hover:bg-violet-700 transition-colors text-center"
                >
                  전화 예약
                </a>
                <a
                  href="https://open.kakao.com/o/s0ca9mMh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-yellow-400 text-gray-900 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors text-center"
                >
                  카톡 예약
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-violet-400">총알출장마사지</h3>
              <p className="text-gray-300">금천구 전 지역 24시간 출장 마사지 서비스</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-violet-400">연락처</h4>
              <p className="text-gray-300">전화: 010-2871-2457</p>
              <p className="text-gray-300">카카오톡 상담 가능</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-violet-400">서비스 지역</h4>
              <p className="text-gray-300">금천구 전 지역</p>
              <p className="text-gray-300">24시간 연중무휴</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 총알출장마사지. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
