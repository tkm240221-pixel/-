"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Phone, MessageCircle, Clock, Shield, Users, Star } from "lucide-react"

export default function UijeongbuMassage() {
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
      <header className="bg-white shadow-sm border-b">
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
              <Link href="/" className="text-gray-700 hover:text-violet-600 transition-colors">
                지역별
              </Link>
              <Link href="/" className="text-gray-700 hover:text-violet-600 transition-colors">
                문의
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-violet-600 to-purple-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            의정부시 출장마사지
            <br />
            24시간 방문 서비스
          </h1>
          <p className="text-xl mb-8 text-violet-100">
            의정부시 전 지역 30분 내 방문 • 경험 많은 전문 테라피스트 • 100% 안전한 힐링 서비스
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:010-2871-2457"
              className="bg-white text-violet-600 px-8 py-4 rounded-lg font-semibold hover:bg-violet-50 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              전화상담
            </a>
            <a
              href="#"
              className="bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              카카오톡 상담
            </a>
          </div>
        </div>
      </section>

      {/* Reservation Guide */}
      <section className="py-12 bg-violet-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">출장안마 예약문의 가이드</h2>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <p className="text-lg text-gray-700 mb-6 min-h-[60px]">
              {currentText}
              <span className="animate-pulse">|</span>
            </p>
            <p className="text-gray-600">
              (선입금, 예약금, 보증금 일절 요구하지 않습니다.
              <br />
              예약시 참고바랍니다.)
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">마사지 코스 & 요금표</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Thai Massage */}
            <div className="bg-white border-2 border-violet-200 rounded-lg p-6 hover:border-violet-400 transition-colors">
              <h3 className="text-xl font-bold text-violet-600 mb-4">타이 마사지</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>60분</span>
                  <span className="font-semibold">9만원</span>
                </div>
                <div className="flex justify-between">
                  <span>90분</span>
                  <span className="font-semibold">12만원</span>
                </div>
                <div className="flex justify-between">
                  <span>120분</span>
                  <span className="font-semibold">15만원</span>
                </div>
              </div>
            </div>

            {/* Healing Swedish */}
            <div className="bg-white border-2 border-purple-200 rounded-lg p-6 hover:border-purple-400 transition-colors">
              <h3 className="text-xl font-bold text-purple-600 mb-4">힐링스웨디시</h3>
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
              </div>
            </div>

            {/* VIP Package */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-lg p-6">
              <h3 className="text-xl font-bold text-amber-600 mb-4">VIP (인기 1위)</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>90분</span>
                  <span className="font-semibold">15만원</span>
                </div>
                <div className="flex justify-between">
                  <span>120분</span>
                  <span className="font-semibold">18만원</span>
                </div>
                <div className="flex justify-between">
                  <span>150분</span>
                  <span className="font-semibold">20만원</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-violet-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">의정부시 출장마사지 서비스 특징</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">24시간 운영</h3>
              <p className="text-gray-600 text-sm">언제든지 편리한 시간에 이용 가능한 24시간 서비스</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">안전한 서비스</h3>
              <p className="text-gray-600 text-sm">검증된 전문 테라피스트와 100% 안전한 힐링 서비스</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">전문 테라피스트</h3>
              <p className="text-gray-600 text-sm">풍부한 경험과 전문 기술을 보유한 마사지 전문가</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">만족도 보장</h3>
              <p className="text-gray-600 text-sm">고객 만족을 최우선으로 하는 프리미엄 서비스</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">의정부시 서비스 지역</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "의정부동",
              "호원동",
              "신곡동",
              "장암동",
              "송산동",
              "녹양동",
              "가능동",
              "흥선동",
              "용현동",
              "민락동",
              "자금동",
              "고산동",
              "금오동",
              "낙양동",
              "직동",
              "산곡동",
            ].map((area) => (
              <div key={area} className="bg-violet-50 p-4 rounded-lg text-center">
                <span className="text-violet-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-violet-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">의정부시 고객 후기</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">김○○ (의정부동)</span>
              </div>
              <p className="text-gray-700">
                "의정부시에서 이렇게 전문적인 마사지 서비스를 받을 수 있어서 정말 만족합니다. 테라피스트분이 매우
                친절하고 실력도 뛰어나네요."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">박○○ (호원동)</span>
              </div>
              <p className="text-gray-700">
                "24시간 서비스라서 늦은 시간에도 이용할 수 있어 좋았습니다. 호원동까지 빠르게 와주셔서 감사했어요."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">이○○ (신곡동)</span>
              </div>
              <p className="text-gray-700">
                "VIP 코스를 이용했는데 정말 만족스러웠습니다. 의정부에서 이런 퀄리티의 서비스를 받을 수 있다니
                놀랍네요."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">의정부시 출장마사지 예약</h3>
          <p className="text-gray-300 mb-6">24시간 언제든지 연락주세요</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:010-2871-2457"
              className="bg-violet-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-violet-700 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              전화상담
            </a>
            <a
              href="#"
              className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
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
                <h2 className="text-2xl font-bold text-gray-800">상세 요금표</h2>
                <button onClick={() => setShowPriceTable(false)} className="text-gray-500 hover:text-gray-700 text-2xl">
                  ×
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="border rounded-lg p-4">
                  <h3 className="text-lg font-bold text-violet-600 mb-4">타이 마사지</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>60분</span>
                      <span className="font-semibold">90,000원</span>
                    </div>
                    <div className="flex justify-between">
                      <span>90분</span>
                      <span className="font-semibold">120,000원</span>
                    </div>
                    <div className="flex justify-between">
                      <span>120분</span>
                      <span className="font-semibold">150,000원</span>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="text-lg font-bold text-purple-600 mb-4">힐링스웨디시</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>60분</span>
                      <span className="font-semibold">100,000원</span>
                    </div>
                    <div className="flex justify-between">
                      <span>90분</span>
                      <span className="font-semibold">130,000원</span>
                    </div>
                    <div className="flex justify-between">
                      <span>120분</span>
                      <span className="font-semibold">160,000원</span>
                    </div>
                  </div>
                </div>

                <div className="border-2 border-amber-300 rounded-lg p-4 bg-amber-50">
                  <h3 className="text-lg font-bold text-amber-600 mb-4">VIP 패키지</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>90분</span>
                      <span className="font-semibold">150,000원</span>
                    </div>
                    <div className="flex justify-between">
                      <span>120분</span>
                      <span className="font-semibold">180,000원</span>
                    </div>
                    <div className="flex justify-between">
                      <span>150분</span>
                      <span className="font-semibold">200,000원</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:010-2871-2457"
                  className="bg-violet-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-violet-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  전화예약
                </a>
                <a
                  href="#"
                  className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  카카오톡예약
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
