"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Phone, MessageCircle, Clock, Shield, Users, Star } from "lucide-react"

export default function HanamMassage() {
  const [showPriceTable, setShowPriceTable] = useState(false)
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  const reservationText =
    "빠른 예약을 위해 전화 또는 문자로 상세 주소 / 마사지 코스 | (선입금, 예약금 일절 요구하지 않습니다. 예약시 참고바랍니다.)"

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
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-violet-600">
              총알출장마사지
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-violet-600">
                홈
              </Link>
              <button onClick={() => setShowPriceTable(true)} className="text-gray-700 hover:text-violet-600">
                코스표
              </button>
              <Link href="/#regions" className="text-gray-700 hover:text-violet-600">
                지역별
              </Link>
              <Link href="/#contact" className="text-gray-700 hover:text-violet-600">
                문의
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-violet-600 to-purple-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">하남시 출장마사지</h1>
          <p className="text-xl mb-8">24시간 언제든지 편안한 힐링 서비스</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:010-2871-2457"
              className="bg-white text-violet-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              전화상담
            </a>
            <a
              href="#"
              className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              카카오톡 상담
            </a>
          </div>
        </div>
      </section>

      {/* Reservation Guide */}
      <section className="bg-violet-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6 text-violet-600">출장안마 예약문의 가이드</h2>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-gray-700 leading-relaxed min-h-[60px]">
                {currentText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:010-2871-2457"
                className="bg-violet-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-violet-700 transition-colors flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                전화상담
              </a>
              <a
                href="#"
                className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                카카오톡 상담
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Banner */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">하남시 출장마사지</h2>
          <p className="text-lg text-gray-600 mb-2">하남시 전 지역 출장 가능한 프리미엄 마사지</p>
          <p className="text-gray-500">24시간 언제든지 편안한 힐링을 경험하세요</p>
        </div>
      </section>

      {/* Course Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">마사지 코스 & 요금표</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Thai Massage */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-600">타이 마사지</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>60분</span>
                  <span className="font-semibold">8만원</span>
                </div>
                <div className="flex justify-between">
                  <span>90분</span>
                  <span className="font-semibold">10만원</span>
                </div>
                <div className="flex justify-between">
                  <span>120분</span>
                  <span className="font-semibold">12만원</span>
                </div>
              </div>
            </div>

            {/* Healing Swedish */}
            <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-violet-200">
              <h3 className="text-xl font-bold mb-4 text-violet-600">힐링스웨디시</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>60분</span>
                  <span className="font-semibold">9만원</span>
                </div>
                <div className="flex justify-between">
                  <span>90분</span>
                  <span className="font-semibold">11만원</span>
                </div>
                <div className="flex justify-between">
                  <span>120분</span>
                  <span className="font-semibold">13만원</span>
                </div>
              </div>
            </div>

            {/* VIP Package */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-amber-600">VIP (힐링 + 케어)</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>60분</span>
                  <span className="font-semibold">10만원</span>
                </div>
                <div className="flex justify-between">
                  <span>90분</span>
                  <span className="font-semibold">13만원</span>
                </div>
                <div className="flex justify-between">
                  <span>120분</span>
                  <span className="font-semibold">16만원</span>
                </div>
                <div className="flex justify-between">
                  <span>150분</span>
                  <span className="font-semibold">20만원</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => setShowPriceTable(true)}
              className="bg-violet-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-violet-700 transition-colors"
            >
              상세 요금표 보기
            </button>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">하남시 출장마사지 서비스 특징</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-violet-600" size={32} />
              </div>
              <h3 className="font-semibold mb-2">24시간 운영</h3>
              <p className="text-gray-600 text-sm">언제든지 편리한 시간에 이용 가능한 24시간 출장 서비스</p>
            </div>
            <div className="text-center">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-violet-600" size={32} />
              </div>
              <h3 className="font-semibold mb-2">안전한 서비스</h3>
              <p className="text-gray-600 text-sm">검증된 전문 테라피스트의 안전하고 건전한 마사지</p>
            </div>
            <div className="text-center">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-violet-600" size={32} />
              </div>
              <h3 className="font-semibold mb-2">전문 테라피스트</h3>
              <p className="text-gray-600 text-sm">풍부한 경험과 전문 기술을 보유한 마사지 전문가</p>
            </div>
            <div className="text-center">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-violet-600" size={32} />
              </div>
              <h3 className="font-semibold mb-2">VIP 서비스</h3>
              <p className="text-gray-600 text-sm">고객 맞춤형 프리미엄 케어와 최상의 힐링 경험</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">하남시 서비스 지역</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "신장동",
              "천현동",
              "덕풍동",
              "감북동",
              "감일동",
              "초이동",
              "상산곡동",
              "하산곡동",
              "풍산동",
              "창우동",
              "선동",
              "미사동",
            ].map((area) => (
              <div key={area} className="bg-white rounded-lg p-4 text-center shadow-sm">
                <span className="text-gray-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">하남시 고객 후기</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg border border-violet-100">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">김○○ (미사동)</span>
              </div>
              <p className="text-gray-700">
                "하남 미사신도시에서 이렇게 좋은 마사지 서비스를 받을 수 있어서 정말 만족합니다. 테라피스트분이 매우
                전문적이시고 친절하셨어요. 몸의 피로가 완전히 풀렸습니다."
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg border border-violet-100">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">박○○ (신장동)</span>
              </div>
              <p className="text-gray-700">
                "24시간 서비스라서 늦은 시간에도 이용할 수 있어 너무 편리했습니다. 힐링스웨디시 120분 코스 받았는데 정말
                시원하고 개운했어요. 하남에서 최고의 마사지 서비스입니다."
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg border border-violet-100">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">이○○ (감일동)</span>
              </div>
              <p className="text-gray-700">
                "VIP 코스를 이용했는데 정말 만족스러웠습니다. 전문적인 케어와 세심한 서비스에 감동받았어요. 하남
                지역에서 이런 퀄리티의 마사지를 받을 수 있어서 좋습니다."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">하남시 출장마사지 예약</h3>
          <p className="text-gray-300 mb-6">24시간 언제든지 연락주세요</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:010-2871-2457"
              className="bg-violet-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-violet-700 transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              전화상담
            </a>
            <a
              href="#"
              className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              카카오톡 상담
            </a>
          </div>
        </div>
      </footer>

      {/* Price Table Modal */}
      {showPriceTable && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">하남시 출장마사지 요금표</h2>
                <button onClick={() => setShowPriceTable(false)} className="text-gray-500 hover:text-gray-700 text-2xl">
                  ×
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="border rounded-lg p-4">
                  <h3 className="text-lg font-bold mb-4 text-blue-600">타이 마사지</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>60분</span>
                      <span>8만원</span>
                    </div>
                    <div className="flex justify-between">
                      <span>90분</span>
                      <span>10만원</span>
                    </div>
                    <div className="flex justify-between">
                      <span>120분</span>
                      <span>12만원</span>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4 border-violet-200">
                  <h3 className="text-lg font-bold mb-4 text-violet-600">힐링스웨디시</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>60분</span>
                      <span>9만원</span>
                    </div>
                    <div className="flex justify-between">
                      <span>90분</span>
                      <span>11만원</span>
                    </div>
                    <div className="flex justify-between">
                      <span>120분</span>
                      <span>13만원</span>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="text-lg font-bold mb-4 text-amber-600">VIP (힐링 + 케어)</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>60분</span>
                      <span>10만원</span>
                    </div>
                    <div className="flex justify-between">
                      <span>90분</span>
                      <span>13만원</span>
                    </div>
                    <div className="flex justify-between">
                      <span>120분</span>
                      <span>16만원</span>
                    </div>
                    <div className="flex justify-between">
                      <span>150분</span>
                      <span>20만원</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:010-2871-2457"
                  className="bg-violet-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-violet-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  전화 예약
                </a>
                <a
                  href="#"
                  className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  카톡 예약
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
