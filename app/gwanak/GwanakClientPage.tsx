"use client"
import { useState, useEffect } from "react"
import { Phone, MessageCircle, Clock, Shield, Award, Users, Star, MapPin } from "lucide-react"
import RegionalLinks from "@/components/regional-links"

export default function GwanakClientPage() {
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
            <h2 className="text-2xl font-bold mb-4">관악구 출장마사지 예약 안내</h2>
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">관악구 출장마사지</h1>
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

          {/* Course Table */}
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">마사지 코스 & 요금표</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* 타이 마사지 */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-violet-100 hover:border-violet-300 transition-colors">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">타이 마사지</h3>
                  <div className="text-3xl font-bold text-violet-600 mb-4">90,000원</div>
                  <div className="text-gray-600 mb-4">90분</div>
                  <ul className="text-left space-y-2 text-gray-700">
                    <li>• 전신 타이 마사지</li>
                    <li>• 스트레칭 포함</li>
                    <li>• 근육 이완 효과</li>
                    <li>• 혈액순환 개선</li>
                  </ul>
                </div>
              </div>

              {/* 힐링스웨디시 */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-violet-300 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-violet-600 text-white px-4 py-1 rounded-full text-sm font-semibold">인기</span>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">힐링스웨디시</h3>
                  <div className="text-3xl font-bold text-violet-600 mb-4">100,000원</div>
                  <div className="text-gray-600 mb-4">100분</div>
                  <ul className="text-left space-y-2 text-gray-700">
                    <li>• 전신 스웨디시</li>
                    <li>• 아로마 오일 사용</li>
                    <li>• 깊은 이완 효과</li>
                    <li>• 스트레스 해소</li>
                  </ul>
                </div>
              </div>

              {/* VIP 패키지 */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-purple-100 hover:border-purple-300 transition-colors">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">VIP 패키지</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-4">130,000원</div>
                  <div className="text-gray-600 mb-4">120분</div>
                  <ul className="text-left space-y-2 text-gray-700">
                    <li>• 프리미엄 코스</li>
                    <li>• 전신 케어</li>
                    <li>• 고급 아로마 오일</li>
                    <li>• 개인 맞춤 서비스</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <button
                onClick={() => setShowPriceTable(true)}
                className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
              >
                상세 요금표 보기
              </button>
            </div>
          </div>

          <RegionalLinks currentRegion="관악구" regionType="seoul" />
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">관악구 출장마사지 특징</h2>
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">관악구 서비스 지역</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-violet-600 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  주요 지역
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 신림동</li>
                  <li>• 봉천동</li>
                  <li>• 서원동</li>
                  <li>• 남현동</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-violet-600 mb-4">추가 지역</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 청룡동</li>
                  <li>• 행운동</li>
                  <li>• 낙성대동</li>
                  <li>• 인헌동</li>
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">관악구 고객 후기</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">신림동 김**님</span>
              </div>
              <p className="text-gray-700">
                "관악구에서 이렇게 전문적인 마사지를 받을 수 있어서 정말 만족합니다. 테라피스트분이 매우 친절하고 실력도
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
                <span className="ml-2 text-gray-600">봉천동 이**님</span>
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
                <span className="ml-2 text-gray-600">서원동 박**님</span>
              </div>
              <p className="text-gray-700">
                "24시간 언제든 예약할 수 있어서 너무 편리해요. VIP 패키지는 정말 최고입니다. 관악구 최고의 출장마사지
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
              <p className="text-gray-400">관악구 전문 출장마사지 서비스</p>
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
                <li>신림동, 봉천동</li>
                <li>서원동, 남현동</li>
                <li>청룡동, 행운동</li>
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

      {/* Price Table Modal */}
      {showPriceTable && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">관악구 출장마사지 상세 요금표</h2>
                <button onClick={() => setShowPriceTable(false)} className="text-gray-500 hover:text-gray-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-violet-50">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">코스명</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">시간</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">가격</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">특징</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">타이 마사지</td>
                      <td className="border border-gray-300 px-4 py-3">90분</td>
                      <td className="border border-gray-300 px-4 py-3 text-violet-600 font-semibold">90,000원</td>
                      <td className="border border-gray-300 px-4 py-3">전신 타이 마사지 + 스트레칭</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">힐링스웨디시</td>
                      <td className="border border-gray-300 px-4 py-3">100분</td>
                      <td className="border border-gray-300 px-4 py-3 text-violet-600 font-semibold">100,000원</td>
                      <td className="border border-gray-300 px-4 py-3">아로마 오일 + 전신 스웨디시</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">VIP 패키지</td>
                      <td className="border border-gray-300 px-4 py-3">120분</td>
                      <td className="border border-gray-300 px-4 py-3 text-purple-600 font-semibold">130,000원</td>
                      <td className="border border-gray-300 px-4 py-3">프리미엄 코스 + 개인 맞춤</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 text-center">
                <p className="text-gray-600 mb-4">* 모든 가격은 관악구 지역 기준이며, 부가세 포함 가격입니다.</p>
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
          </div>
        </div>
      )}
    </div>
  )
}
