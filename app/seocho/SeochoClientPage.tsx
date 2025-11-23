"use client"
import { useState, useEffect } from "react"
import { Phone, MessageCircle, Clock, Shield, Award, Users, Star, MapPin } from "lucide-react"
import RegionalLinks from "@/components/regional-links"

export default function SeochoClientPage() {
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
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-violet-600">총알출장마사지</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-violet-600 transition-colors">
                서비스
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-violet-600 transition-colors">
                요금안내
              </a>
              <a href="#reviews" className="text-gray-700 hover:text-violet-600 transition-colors">
                후기
              </a>
              <a href="#contact" className="text-gray-700 hover:text-violet-600 transition-colors">
                예약문의
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Reservation Guide */}
      <section className="bg-gradient-to-r from-violet-600 to-purple-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">서초구 출장마사지 예약 안내</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-4xl mx-auto">
              <p className="text-lg leading-relaxed min-h-[60px]">
                {typewriterText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Banner */}
      <section className="bg-gradient-to-br from-violet-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">서초구 출장마사지</h1>
            <p className="text-xl text-gray-600 mb-8">전문 테라피스트가 직접 방문하는 프리미엄 마사지 서비스</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="tel:010-2871-2457"
                className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                010-2871-2457
              </a>
              <a
                href="sms:010-2871-2457"
                className="bg-white hover:bg-gray-50 text-violet-600 border-2 border-violet-600 px-8 py-4 rounded-full text-lg font-semibold transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                문자 예약
              </a>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">마사지 코스 & 요금표</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* 타이 마사지 */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-violet-100 hover:border-violet-300 transition-colors">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">타이 마사지</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">60분</span>
                      <span className="text-lg font-semibold text-violet-600">80,000원</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">90분</span>
                      <span className="text-lg font-semibold text-violet-600">100,000원</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">120분</span>
                      <span className="text-lg font-semibold text-violet-600">120,000원</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 힐링스웨디시 */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-violet-300 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-violet-600 text-white px-4 py-1 rounded-full text-sm font-semibold">인기</span>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">힐링스웨디시</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">60분</span>
                      <span className="text-lg font-semibold text-violet-600">90,000원</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">90분</span>
                      <span className="text-lg font-semibold text-violet-600">110,000원</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">120분</span>
                      <span className="text-lg font-semibold text-violet-600">130,000원</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* VIP 패키지 */}
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl shadow-lg p-6 text-white">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-4">VIP (타이 + 힐링 + 풋)</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>60분</span>
                      <span className="text-lg font-semibold">100,000원</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>90분</span>
                      <span className="text-lg font-semibold">130,000원</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>120분</span>
                      <span className="text-lg font-semibold">160,000원</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>150분</span>
                      <span className="text-lg font-semibold">200,000원</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">* 모든 가격은 서초구 지역 기준이며, 부가세 포함 가격입니다.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:010-2871-2457"
                  className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-full font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  지금 예약하기
                </a>
                <a
                  href="sms:010-2871-2457"
                  className="bg-white hover:bg-gray-50 text-violet-600 border-2 border-violet-600 px-6 py-3 rounded-full font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  문자 상담
                </a>
              </div>
            </div>
          </div>

          <RegionalLinks currentRegion="서초구" regionType="seoul" />
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">서초구 출장마사지 서비스 특징</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24시간 운영</h3>
              <p className="text-gray-600">언제든지 편리한 시간에 예약 가능합니다</p>
            </div>
            <div className="text-center">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">안전한 서비스</h3>
              <p className="text-gray-600">검증된 전문 테라피스트만 파견됩니다</p>
            </div>
            <div className="text-center">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">전문 기술</h3>
              <p className="text-gray-600">숙련된 전문가의 고품질 마사지</p>
            </div>
            <div className="text-center">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">맞춤 서비스</h3>
              <p className="text-gray-600">개인별 맞춤형 마사지 프로그램</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">서초구 서비스 지역</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-violet-600 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  주요 지역
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 서초동</li>
                  <li>• 반포동</li>
                  <li>• 잠원동</li>
                  <li>• 방배동</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-violet-600 mb-4">추가 지역</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 양재동</li>
                  <li>• 내곡동</li>
                  <li>• 원지동</li>
                  <li>• 염곡동</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-violet-600 mb-4">특별 서비스</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 호텔 출장 가능</li>
                  <li>• 오피스텔 방문</li>
                  <li>• 24시간 예약</li>
                  <li>• 당일 예약 가능</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">서초구 고객 후기</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">서초동 김**님</span>
              </div>
              <p className="text-gray-700">
                "서초구에서 이렇게 전문적인 마사지를 받을 수 있어서 정말 만족합니다. 테라피스트분이 매우 친절하고 실력도
                뛰어나네요."
              </p>
            </div>
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">반포동 이**님</span>
              </div>
              <p className="text-gray-700">
                "직장에서 받는 스트레스가 심했는데, 힐링스웨디시 받고 나서 몸이 정말 가벼워졌어요. 정기적으로 이용하고
                있습니다."
              </p>
            </div>
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">양재동 박**님</span>
              </div>
              <p className="text-gray-700">
                "24시간 언제든 예약할 수 있어서 너무 편리해요. VIP 패키지는 정말 최고입니다. 서초구 최고의 출장마사지
                서비스!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">총알출장마사지</h3>
              <p className="text-gray-400">서초구 전문 출장마사지 서비스</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">서비스</h4>
              <ul className="space-y-2 text-gray-400">
                <li>타이 마사지</li>
                <li>힐링스웨디시</li>
                <li>VIP 패키지</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">지역</h4>
              <ul className="space-y-2 text-gray-400">
                <li>서초동, 반포동</li>
                <li>잠원동, 방배동</li>
                <li>양재동, 내곡동</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">연락처</h4>
              <p className="text-gray-400">전화: 010-2871-2457</p>
              <p className="text-gray-400">운영: 24시간 연중무휴</p>
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
