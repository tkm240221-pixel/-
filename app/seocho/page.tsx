"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MessageCircle, MapPin, Star, X, Clock, Shield, Users } from "lucide-react"
import Link from "next/link"

export default function SeochoPage() {
  const [showPriceTable, setShowPriceTable] = useState(false)
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  const reservationText =
    "빠른 예약을 위해 전화로 상세 주소 / 마사지 코스 | (선입금, 예약금 일절 요구하지 않습니다. 예약시 참고바랍니다.)"

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
      <header className="bg-white shadow-sm border-b border-violet-100 sticky top-0 z-50">
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
              <Link href="tel:전화상담" className="text-gray-700 hover:text-violet-600 transition-colors">
                문의
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-16 bg-gradient-to-br from-violet-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white text-center mb-6">출장안마 예약문의 가이드</h2>
            <div className="bg-white/20 rounded-xl p-6 mb-6">
              <p className="text-white text-lg leading-relaxed min-h-[60px]">
                {currentText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-violet-600 hover:bg-violet-50 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:전화상담">전화상담</a>
              </button>
              <button className="bg-amber-400 text-violet-900 hover:bg-amber-300 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                <MessageCircle className="h-5 w-5 mr-2" />
                <a href="https://open.kakao.com/o/s0ca9mMh" target="_blank" rel="noopener noreferrer">
                  카카오톡 상담
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-violet-100 text-violet-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            서초구 프리미엄 서비스
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            서초구 출장마사지
            <span className="text-violet-600 block">365일 24시간 문의 & 예약 가능합니다</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            서초구 전 지역 30분 내 방문 가능한 프리미엄 출장마사지 서비스
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">마사지 코스 & 요금표</h2>
          <div className="bg-white rounded-2xl shadow-lg border border-violet-100 overflow-hidden">
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-violet-600 mb-6">타이 마사지</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">60분</span>
                    <span className="text-2xl font-bold text-gray-900">80,000원</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">90분</span>
                    <span className="text-2xl font-bold text-gray-900">100,000원</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">120분</span>
                    <span className="text-2xl font-bold text-gray-900">120,000원</span>
                  </div>
                </div>
              </div>
              <div className="p-8 text-center bg-purple-50">
                <h3 className="text-xl font-bold text-purple-600 mb-6">힐링스웨디시</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">60분</span>
                    <span className="text-2xl font-bold text-gray-900">90,000원</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">90분</span>
                    <span className="text-2xl font-bold text-gray-900">110,000원</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">120분</span>
                    <span className="text-2xl font-bold text-gray-900">130,000원</span>
                  </div>
                </div>
              </div>
              <div className="p-8 text-center bg-gradient-to-br from-amber-50 to-amber-100">
                <h3 className="text-xl font-bold text-amber-600 mb-6">VIP 패키지</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">60분</span>
                    <span className="text-2xl font-bold text-amber-600">100,000원</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">90분</span>
                    <span className="text-2xl font-bold text-amber-600">130,000원</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">120분</span>
                    <span className="text-2xl font-bold text-amber-600">160,000원</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">150분</span>
                    <span className="text-2xl font-bold text-amber-600">200,000원</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 bg-gray-50 text-center">
              <button
                onClick={() => setShowPriceTable(true)}
                className="bg-violet-600 text-white hover:bg-violet-700 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                상세 요금표 보기
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-violet-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">서초구 출장마사지 서비스 특징</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-violet-100">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24시간 운영</h3>
              <p className="text-gray-600">
                서초구 어느 시간이든 연락주시면 30분 내로 방문하여 최고의 마사지 서비스를 제공합니다
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-violet-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">안전한 서비스</h3>
              <p className="text-gray-600">
                검증된 전문 마사지사가 직접 방문하여 안전하고 깨끗한 환경에서 마사지를 진행합니다
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-violet-100">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">전문 마사지사</h3>
              <p className="text-gray-600">
                5년 이상 경력의 전문 마사지사들이 고객 맞춤형 마사지로 최상의 힐링을 제공합니다
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">서초구 서비스 지역</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center mb-8">
            {[
              "서초1동",
              "서초2동",
              "서초3동",
              "서초4동",
              "잠원동",
              "반포본동",
              "반포1동",
              "반포2동",
              "반포3동",
              "반포4동",
              "방배본동",
              "방배1동",
              "방배2동",
              "방배3동",
              "방배4동",
              "양재1동",
              "양재2동",
              "내곡동",
            ].map((area) => (
              <Card key={area} className="bg-violet-50 border-violet-200 hover:bg-violet-100 transition-colors">
                <CardContent className="p-4 text-center">
                  <MapPin className="h-5 w-5 text-violet-600 mx-auto mb-2" />
                  <span className="text-gray-900 font-medium">{area}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">서초구 고객 후기</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "서초동 김**님",
                rating: 5,
                comment: "서초동에서 이용했는데 정말 만족스러웠어요. 마사지사분도 친절하시고 실력도 좋으셨습니다.",
              },
              {
                name: "잠원동 박**님",
                rating: 5,
                comment: "잠원동 아파트까지 빠르게 와주셨고, 마사지 받고 나니 몸이 정말 가벼워졌어요.",
              },
              {
                name: "반포동 이**님",
                rating: 5,
                comment: "반포동에서 처음 이용해봤는데 생각보다 훨씬 좋았습니다. 다음에도 이용할게요.",
              },
              {
                name: "방배동 최**님",
                rating: 5,
                comment: "방배동까지 30분 안에 와주셔서 놀랐어요. 서비스도 정말 만족합니다.",
              },
              {
                name: "양재동 정**님",
                rating: 5,
                comment: "양재동에서 야간 시간에 이용했는데도 친절하게 서비스해주셨어요.",
              },
              {
                name: "내곡동 한**님",
                rating: 5,
                comment: "내곡동에서 이용했는데 찾아오기도 쉽고 서비스도 훌륭했습니다.",
              },
            ].map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-violet-100">
                <div className="flex items-center mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">{review.name}</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-violet-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">서초구 출장마사지 예약</h2>
          <p className="text-violet-100 text-lg mb-8">24시간 언제든지 연락주세요</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-violet-600 hover:bg-violet-50 px-8 py-3" asChild>
              <a href="tel:전화상담">
                <Phone className="h-5 w-5 mr-2" />
                전화예약
              </a>
            </Button>
            <Button size="lg" className="bg-amber-400 text-violet-900 hover:bg-amber-300 px-8 py-3" asChild>
              <a href="https://open.kakao.com/o/s0ca9mMh" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                카톡예약
              </a>
            </Button>
          </div>
        </div>
      </section>

      {showPriceTable && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">서초구 출장마사지 요금표</h2>
              <button onClick={() => setShowPriceTable(false)} className="text-gray-500 hover:text-gray-700">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="border border-violet-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-violet-600 mb-4">타이 마사지</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">60분</span>
                      <span className="text-gray-900 font-bold">80,000원</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">90분</span>
                      <span className="text-gray-900 font-bold">100,000원</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">120분</span>
                      <span className="text-gray-900 font-bold">120,000원</span>
                    </div>
                  </div>
                </div>
                <div className="border border-purple-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-purple-600 mb-4">힐링스웨디시</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">60분</span>
                      <span className="text-gray-900 font-bold">90,000원</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">90분</span>
                      <span className="text-gray-900 font-bold">110,000원</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">120분</span>
                      <span className="text-gray-900 font-bold">130,000원</span>
                    </div>
                  </div>
                </div>
                <div className="border border-amber-200 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-amber-600 mb-4">VIP 패키지</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">60분</span>
                      <span className="text-amber-600 font-bold">100,000원</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">90분</span>
                      <span className="text-amber-600 font-bold">130,000원</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">120분</span>
                      <span className="text-amber-600 font-bold">160,000원</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">150분</span>
                      <span className="text-amber-600 font-bold">200,000원</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-violet-600 text-white hover:bg-violet-700 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <a href="tel:전화상담">전화예약</a>
                </button>
                <button className="bg-amber-400 text-violet-900 hover:bg-amber-300 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  <a href="https://open.kakao.com/o/s0ca9mMh" target="_blank" rel="noopener noreferrer">
                    카톡예약
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
