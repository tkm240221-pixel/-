"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Phone, MessageCircle, Clock, Shield, Users, Star, Award, X } from "lucide-react"

export default function YonginMassage() {
  const [showPriceTable, setShowPriceTable] = useState(false)
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  const reservationText = "빠른 예약을 위해 전화 또는 문자로 상세 주소 / 마사지 코스를 알려주세요."

  useEffect(() => {
    if (currentIndex < reservationText.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + reservationText[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, reservationText])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
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
              <Link href="/#contact" className="text-gray-700 hover:text-violet-600 transition-colors">
                문의
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-600 via-purple-600 to-violet-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block bg-violet-500/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
            용인시 출장마사지 가이드
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            용인시 출장마사지
            <br />
            <span className="text-violet-200">24시간 방문 서비스</span>
          </h1>
          <p className="text-xl text-violet-100 mb-8 leading-relaxed">
            용인시 전 지역에서 고급 마사지 서비스를 제공합니다.
            <br />
            365일 24시간 문의 & 예약 가능합니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:010-2871-2457"
              className="bg-white text-violet-600 px-8 py-4 rounded-full font-semibold hover:bg-violet-50 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              전화상담
            </a>
            <a
              href="#"
              className="bg-amber-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-600 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              카카오톡 상담
            </a>
          </div>
        </div>
      </section>

      {/* Reservation Guide */}
      <section className="py-16 bg-violet-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-violet-100">
            <h2 className="text-2xl font-bold text-center text-violet-600 mb-6">출장안마 예약문의 가이드</h2>
            <div className="bg-violet-50 rounded-xl p-6 mb-6">
              <p className="text-violet-800 text-lg font-medium min-h-[60px]">
                {currentText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-600 text-center">
                (선입금, 예약금 일절 요구하지 않습니다.
                <br />
                예약시 참고바랍니다.)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">용인시 코스 & 요금표</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Thai Massage */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-violet-100 hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-violet-600 mb-2">타이 마사지</h3>
                <p className="text-gray-600">전통 타이 마사지</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">60분</span>
                  <span className="font-semibold text-violet-600">8만원</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">90분</span>
                  <span className="font-semibold text-violet-600">10만원</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">120분</span>
                  <span className="font-semibold text-violet-600">12만원</span>
                </div>
              </div>
            </div>

            {/* Healing Swedish */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-violet-100 hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-violet-600 mb-2">힐링스웨디시</h3>
                <p className="text-gray-600">힐링 & 릴렉스</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">60분</span>
                  <span className="font-semibold text-violet-600">9만원</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">90분</span>
                  <span className="font-semibold text-violet-600">11만원</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">120분</span>
                  <span className="font-semibold text-violet-600">13만원</span>
                </div>
              </div>
            </div>

            {/* VIP Package */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg border border-amber-200 hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-amber-600 mb-2">VIP (힐링 + 타이)</h3>
                <p className="text-amber-700">프리미엄 패키지</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-amber-100">
                  <span className="text-gray-700">60분</span>
                  <span className="font-semibold text-amber-600">10만원</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-amber-100">
                  <span className="text-gray-700">90분</span>
                  <span className="font-semibold text-amber-600">13만원</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-amber-100">
                  <span className="text-gray-700">120분</span>
                  <span className="font-semibold text-amber-600">16만원</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">150분</span>
                  <span className="font-semibold text-amber-600">20만원</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => setShowPriceTable(true)}
              className="bg-violet-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-violet-700 transition-colors"
            >
              상세 요금표 보기
            </button>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-violet-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">용인시 출장마사지 서비스 특징</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">24시간 운영</h3>
              <p className="text-gray-600 text-sm">언제든지 편리한 시간에 이용 가능한 24시간 서비스</p>
            </div>
            <div className="text-center">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">안전한 서비스</h3>
              <p className="text-gray-600 text-sm">검증된 전문 관리사의 안전하고 깨끗한 마사지 서비스</p>
            </div>
            <div className="text-center">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">전문 관리사</h3>
              <p className="text-gray-600 text-sm">숙련된 전문 관리사가 제공하는 고품질 마사지 서비스</p>
            </div>
            <div className="text-center">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">합리적 가격</h3>
              <p className="text-gray-600 text-sm">고품질 서비스를 합리적인 가격으로 제공하는 가성비 최고</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">용인시 서비스 지역</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              "처인구",
              "기흥구",
              "수지구",
              "동백동",
              "죽전동",
              "보정동",
              "구성동",
              "신갈동",
              "영덕동",
              "상현동",
              "풍덕천동",
              "성복동",
              "백현동",
              "분당동",
              "정자동",
              "서현동",
            ].map((area) => (
              <div key={area} className="bg-violet-50 rounded-lg p-4 text-center">
                <span className="text-violet-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-violet-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">용인시 고객 후기</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-2 text-gray-600 text-sm">처인구 고객</span>
              </div>
              <p className="text-gray-700">
                "용인시에서 이렇게 전문적인 마사지 서비스를 받을 수 있어서 정말 만족합니다. 관리사분도 친절하시고 실력도
                뛰어나세요."
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-2 text-gray-600 text-sm">기흥구 고객</span>
              </div>
              <p className="text-gray-700">
                "24시간 서비스라서 늦은 시간에도 이용할 수 있어 좋았습니다. 힐링스웨디시 정말 시원하고 개운했어요."
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-2 text-gray-600 text-sm">수지구 고객</span>
              </div>
              <p className="text-gray-700">
                "VIP 패키지로 받았는데 정말 만족스러웠습니다. 가격 대비 서비스 품질이 훌륭해서 재방문 의사 있어요."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">총알출장마사지</h3>
              <p className="text-gray-300">용인시 전 지역 24시간 출장마사지 서비스</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">서비스 지역</h4>
              <p className="text-gray-300">용인시 전 지역 (처인구, 기흥구, 수지구, 동백동 등)</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">연락처</h4>
              <p className="text-gray-300">전화: 전화상담</p>
              <p className="text-gray-300">운영시간: 24시간 연중무휴</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 총알출장마사지. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Price Table Modal */}
      {showPriceTable && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">용인시 출장마사지 요금표</h2>
              <button onClick={() => setShowPriceTable(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-violet-600 mb-4">타이 마사지</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b">
                      <span>60분</span>
                      <span className="font-semibold">8만원</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>90분</span>
                      <span className="font-semibold">10만원</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span>120분</span>
                      <span className="font-semibold">12만원</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-violet-600 mb-4">힐링스웨디시</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b">
                      <span>60분</span>
                      <span className="font-semibold">9만원</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>90분</span>
                      <span className="font-semibold">11만원</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span>120분</span>
                      <span className="font-semibold">13만원</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-amber-600 mb-4">VIP (힐링+타이)</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b">
                      <span>60분</span>
                      <span className="font-semibold">10만원</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>90분</span>
                      <span className="font-semibold">13만원</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span>120분</span>
                      <span className="font-semibold">16만원</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span>150분</span>
                      <span className="font-semibold">20만원</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:010-2871-2457"
                    className="bg-violet-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-violet-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    전화예약
                  </a>
                  <a
                    href="#"
                    className="bg-amber-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
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
