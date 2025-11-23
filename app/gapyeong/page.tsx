"use client"

import { useState, useEffect } from "react"
import { Phone, MessageCircle, Clock, Shield, Award, Users } from "lucide-react"
import Link from "next/link"

export default function GapyeongMassage() {
  const [showPriceTable, setShowPriceTable] = useState(false)
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  const fullText =
    "빠른 예약을 위해 전화 또는 문자로 상세주소 / 마사지 코스 말씀해주시면 빠른 예약 도와드리도록 하겠습니다 ^^"

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + fullText[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 50)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
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
              <div className="relative group">
                <button className="text-gray-700 hover:text-violet-600">지역별</button>
              </div>
              <Link href="/" className="text-gray-700 hover:text-violet-600">
                문의
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-600 via-purple-600 to-violet-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">가평군 출장마사지 예약문의 가이드</h1>
          <p className="text-xl mb-8 text-violet-100">365일 24시간 문의 & 예약 가능합니다</p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <p className="text-lg mb-4 text-violet-100">
              {currentText}
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
              className="bg-white text-violet-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
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

      {/* Main Banner */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">가평군 출장마사지</h2>
          <p className="text-xl text-gray-600 mb-2">가평군 전 지역에서 믿을 수 있는 프리미엄 서비스</p>
          <p className="text-lg text-gray-500 mb-8">24시간 언제든지 편안한 힐링을 경험하세요</p>
          <p className="text-sm text-gray-400">가평군 출장마사지 전문업체입니다</p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-violet-800">마사지 코스 & 요금표</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-violet-100">
              <h3 className="text-xl font-bold mb-6 text-violet-700">타이 마사지</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-violet-50 rounded-lg">
                  <span className="font-medium">60분</span>
                  <span className="font-bold text-violet-600">80,000원</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-violet-50 rounded-lg">
                  <span className="font-medium">90분</span>
                  <span className="font-bold text-violet-600">100,000원</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-violet-50 rounded-lg">
                  <span className="font-medium">120분</span>
                  <span className="font-bold text-violet-600">120,000원</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-violet-100">
              <h3 className="text-xl font-bold mb-6 text-violet-700">힐링스웨디시</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-violet-50 rounded-lg">
                  <span className="font-medium">60분</span>
                  <span className="font-bold text-violet-600">90,000원</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-violet-50 rounded-lg">
                  <span className="font-medium">90분</span>
                  <span className="font-bold text-violet-600">110,000원</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-violet-50 rounded-lg">
                  <span className="font-medium">120분</span>
                  <span className="font-bold text-violet-600">130,000원</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl p-8 shadow-lg text-white">
              <h3 className="text-xl font-bold mb-6">VIP (타이 + 힐링 + 풋)</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white/20 rounded-lg">
                  <span className="font-medium">60분</span>
                  <span className="font-bold">100,000원</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/20 rounded-lg">
                  <span className="font-medium">90분</span>
                  <span className="font-bold">130,000원</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/20 rounded-lg">
                  <span className="font-medium">120분</span>
                  <span className="font-bold">160,000원</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/20 rounded-lg">
                  <span className="font-medium">150분</span>
                  <span className="font-bold">200,000원</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">가평군 출장마사지 서비스 특징</h3>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-violet-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">24시간 운영</h4>
              <p className="text-gray-600">언제든지 편리한 시간에 이용 가능한 24시간 서비스</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">안전한 서비스</h4>
              <p className="text-gray-600">검증된 전문 테라피스트의 안전하고 깨끗한 서비스</p>
            </div>

            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">VIP 서비스</h4>
              <p className="text-gray-600">고급 오일과 프리미엄 케어로 최상의 힐링 경험</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">전문 테라피스트</h4>
              <p className="text-gray-600">숙련된 전문가들의 체계적이고 전문적인 마사지</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">가평군 서비스 지역</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
            <div className="bg-white p-4 rounded-lg shadow">가평읍</div>
            <div className="bg-white p-4 rounded-lg shadow">청평면</div>
            <div className="bg-white p-4 rounded-lg shadow">상면</div>
            <div className="bg-white p-4 rounded-lg shadow">하면</div>
            <div className="bg-white p-4 rounded-lg shadow">북면</div>
            <div className="bg-white p-4 rounded-lg shadow">조종면</div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">가평군 고객 후기</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-violet-50 p-6 rounded-lg border border-violet-200">
              <div className="flex items-center mb-4">
                <div className="flex text-amber-400">{"★".repeat(5)}</div>
                <span className="ml-2 text-gray-600">가평읍 고객님</span>
              </div>
              <p className="text-gray-700">
                "가평읍에서 이용했는데 정말 만족스러웠어요. 테라피스트분이 매우 전문적이시고 친절하셨습니다. 24시간
                서비스라서 늦은 시간에도 이용할 수 있어서 좋았어요."
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <div className="flex items-center mb-4">
                <div className="flex text-amber-400">{"★".repeat(5)}</div>
                <span className="ml-2 text-gray-600">청평면 고객님</span>
              </div>
              <p className="text-gray-700">
                "VIP 코스를 이용했는데 정말 최고였습니다. 타이마사지와 힐링스웨디시, 풋마사지까지 모든 게 완벽했어요.
                청평면 지역 서비스도 빠르고 정확했습니다."
              </p>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <div className="flex items-center mb-4">
                <div className="flex text-amber-400">{"★".repeat(5)}</div>
                <span className="ml-2 text-gray-600">상면 고객님</span>
              </div>
              <p className="text-gray-700">
                "상면까지 출장 와주셔서 감사했습니다. 힐링스웨디시 90분 코스 받았는데 몸의 피로가 완전히 풀렸어요.
                다음에도 꼭 이용하겠습니다."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-violet-600 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">가평군 출장마사지 예약</h3>
          <p className="text-lg mb-6">24시간 언제든지 연락주세요</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:010-2871-2457"
              className="bg-white text-violet-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
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
      </footer>

      {/* Price Table Modal */}
      {showPriceTable && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">상세 요금표</h3>
                <button onClick={() => setShowPriceTable(false)} className="text-gray-500 hover:text-gray-700 text-2xl">
                  ×
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="border rounded-lg p-4">
                  <h4 className="text-lg font-bold text-violet-600 mb-4 text-center">타이 마사지</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b">
                      <span>60분</span>
                      <span className="font-semibold">80,000원</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>90분</span>
                      <span className="font-semibold">100,000원</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span>120분</span>
                      <span className="font-semibold">120,000원</span>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="text-lg font-bold text-purple-600 mb-4 text-center">힐링스웨디시</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b">
                      <span>60분</span>
                      <span className="font-semibold">90,000원</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>90분</span>
                      <span className="font-semibold">110,000원</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span>120분</span>
                      <span className="font-semibold">130,000원</span>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4 border-amber-400">
                  <h4 className="text-lg font-bold text-amber-600 mb-4 text-center">VIP (타이 + 힐링 + 풋)</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b">
                      <span>60분</span>
                      <span className="font-semibold">100,000원</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>90분</span>
                      <span className="font-semibold">130,000원</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>120분</span>
                      <span className="font-semibold">160,000원</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span>150분</span>
                      <span className="font-semibold">200,000원</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:010-2871-2457"
                    className="bg-violet-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-violet-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone size={20} />
                    전화예약
                  </a>
                  <a
                    href="#"
                    className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={20} />
                    카톡예약
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
