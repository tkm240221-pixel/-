"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Phone, MessageCircle, Clock, Shield, Users, CreditCard, Star, X } from "lucide-react"
import RegionalLinks from "@/components/regional-links"

export default function GangnamClientPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">강남구 출장마사지 예약문의 가이드</h1>
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
          <h2 className="text-3xl font-bold text-center mb-12 text-violet-800">강남구 출장마사지 서비스 특징</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl bg-violet-50 border border-violet-100">
              <Clock className="w-12 h-12 text-violet-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2 text-violet-800">24시간 운영</h3>
              <p className="text-violet-600">언제든지 편리한 시간에 예약 가능</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-violet-50 border border-violet-100">
              <Shield className="w-12 h-12 text-violet-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2 text-violet-800">안전한 서비스</h3>
              <p className="text-violet-600">검증된 전문 테라피스트</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-violet-50 border border-violet-100">
              <Users className="w-12 h-12 text-violet-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2 text-violet-800">전문 관리사</h3>
              <p className="text-violet-600">숙련된 마사지 전문가</p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-violet-50 border border-violet-100">
              <CreditCard className="w-12 h-12 text-violet-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2 text-violet-800">후불제</h3>
              <p className="text-violet-600">서비스 후 결제</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-violet-800">강남구 서비스 지역</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "역삼동",
              "삼성동",
              "청담동",
              "논현동",
              "압구정동",
              "신사동",
              "도곡동",
              "개포동",
              "일원동",
              "수서동",
              "세곡동",
              "자곡동",
            ].map((area) => (
              <div key={area} className="bg-white p-4 rounded-lg shadow-sm border border-violet-100">
                <span className="text-violet-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-violet-800">강남구 고객 후기</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-violet-50 p-6 rounded-2xl border border-violet-100">
              <div className="flex items-center mb-4">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-violet-700 mb-4">
                "역삼동에서 이용했는데 정말 만족스러웠어요. 전문적인 마사지 실력과 친절한 서비스가 인상적이었습니다."
              </p>
              <p className="text-violet-600 font-medium">- 역삼동 김○○님</p>
            </div>

            <div className="bg-violet-50 p-6 rounded-2xl border border-violet-100">
              <div className="flex items-center mb-4">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-violet-700 mb-4">
                "삼성동에서 VIP 코스 받았는데 정말 시원하고 개운했어요. 24시간 서비스라서 늦은 시간에도 이용할 수 있어서
                좋네요."
              </p>
              <p className="text-violet-600 font-medium">- 삼성동 박○○님</p>
            </div>

            <div className="bg-violet-50 p-6 rounded-2xl border border-violet-100">
              <div className="flex items-center mb-4">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-violet-700 mb-4">
                "청담동에서 힐링스웨디시 받았는데 스트레스가 확실히 풀렸어요. 관리사분도 매우 전문적이시고
                친절하셨습니다."
              </p>
              <p className="text-violet-600 font-medium">- 청담동 이○○님</p>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Links */}
      <RegionalLinks currentRegion="강남구" regionType="seoul" />

      {/* Footer */}
      <footer className="bg-violet-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">총알출장마사지</h3>
              <p className="text-violet-200">강남구 전지역 24시간 출장마사지 서비스</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">빠른 연결</h4>
              <div className="space-y-2">
                <a
                  href="tel:010-2871-2457"
                  className="flex items-center gap-2 text-violet-200 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  전화상담
                </a>
                <a
                  href="https://open.kakao.com/o/s0ca9mMh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-violet-200 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  카카오톡 상담
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">서비스 안내</h4>
              <ul className="space-y-2 text-violet-200">
                <li>• 24시간 연중무휴</li>
                <li>• 강남구 전지역 서비스</li>
                <li>• 후불제 결제</li>
                <li>• 전문 테라피스트</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-violet-700 mt-8 pt-8 text-center text-violet-200">
            <p>&copy; 2024 총알출장마사지. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Price Table Modal */}
      {showPriceTable && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-violet-100 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-violet-800">마사지 코스 & 요금표</h2>
              <button
                onClick={() => setShowPriceTable(false)}
                className="text-violet-600 hover:text-violet-800 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-violet-50 rounded-xl p-6 border border-violet-100">
                  <h3 className="text-xl font-bold mb-4 text-violet-700">타이 마사지</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="font-medium">60분</span>
                      <span className="font-bold text-violet-600">80,000원</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="font-medium">90분</span>
                      <span className="font-bold text-violet-600">100,000원</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="font-medium">120분</span>
                      <span className="font-bold text-violet-600">120,000원</span>
                    </div>
                  </div>
                </div>

                <div className="bg-violet-50 rounded-xl p-6 border border-violet-100">
                  <h3 className="text-xl font-bold mb-4 text-violet-700">힐링스웨디시</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="font-medium">60분</span>
                      <span className="font-bold text-violet-600">90,000원</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="font-medium">90분</span>
                      <span className="font-bold text-violet-600">110,000원</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="font-medium">120분</span>
                      <span className="font-bold text-violet-600">130,000원</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">VIP (타이 + 힐링 + 풋)</h3>
                  <div className="space-y-3">
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

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:010-2871-2457"
                  className="bg-violet-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-violet-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  전화 예약
                </a>
                <a
                  href="https://open.kakao.com/o/s0ca9mMh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  카카오톡 예약
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
