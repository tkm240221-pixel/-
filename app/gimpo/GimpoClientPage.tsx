"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, Clock, Shield, Users, Star } from "lucide-react"
import Link from "next/link"

export default function GimpoClientPage() {
  const [displayedText, setDisplayedText] = useState("")
  const fullText =
    "빠른 예약을 위해 전화 또는 문자로 상세주소 / 마사지 코스 말씀해주시면 빠른 예약 도와드리도록 하겠습니다 ^^"

  const [showPriceModal, setShowPriceModal] = useState(false)

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1))
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
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-violet-600">총알출장마사지</h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-violet-600 transition-colors">
                홈
              </Link>
              <button
                onClick={() => setShowPriceModal(true)}
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

      <section className="bg-gradient-to-r from-violet-600 to-purple-600 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">예약문의 가이드</Badge>
          <div className="text-white text-lg leading-relaxed min-h-[3rem] flex items-center justify-center">
            {displayedText}
            <span className="animate-pulse ml-1">|</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Button size="lg" className="bg-white text-violet-600 hover:bg-gray-100" asChild>
              <a href="tel:010-2871-2457">
                <Phone className="h-5 w-5 mr-2" />
                전화상담
              </a>
            </Button>
            <Button size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-300" asChild>
              <a href="https://open.kakao.com/o/s0ca9mMh" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                카톡상담
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Hero Section */}
      <section className="py-20 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-violet-100 text-violet-700">김포시 전문 서비스</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            김포 출장마사지 전문 서비스
            <span className="text-violet-600 block">24시간 방문 케어</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            김포시 전 지역 30분 내 방문! 숙련된 전문 테라피스트가 직접 방문하여 최고의 힐링 서비스를 제공합니다.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">마사지 코스 & 요금표</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg border border-violet-100 p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-violet-600 mb-4 text-center">타이 마사지</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-violet-50 rounded">
                  <span className="text-gray-700">60분</span>
                  <span className="text-violet-600 font-bold">80,000원</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-violet-50 rounded">
                  <span className="text-gray-700">90분</span>
                  <span className="text-violet-600 font-bold">100,000원</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-violet-50 rounded">
                  <span className="text-gray-700">120분</span>
                  <span className="text-violet-600 font-bold">120,000원</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-violet-100 p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-purple-600 mb-4 text-center">힐링스웨디시</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-violet-50 rounded">
                  <span className="text-gray-700">60분</span>
                  <span className="text-purple-600 font-bold">90,000원</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-violet-50 rounded">
                  <span className="text-gray-700">90분</span>
                  <span className="text-purple-600 font-bold">110,000원</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-violet-50 rounded">
                  <span className="text-gray-700">120분</span>
                  <span className="text-purple-600 font-bold">130,000원</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-400 to-yellow-500 rounded-lg p-6 shadow-lg text-white">
              <h3 className="text-xl font-semibold mb-2 text-center">VIP (타이 + 힐링 + 풋)</h3>
              <Badge className="w-full justify-center mb-4 bg-white/20 text-white border-white/30">
                프리미엄 패키지
              </Badge>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white/20 rounded">
                  <span>60분</span>
                  <span className="font-bold">100,000원</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/20 rounded">
                  <span>90분</span>
                  <span className="font-bold">130,000원</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/20 rounded">
                  <span>120분</span>
                  <span className="font-bold">160,000원</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/20 rounded">
                  <span>150분</span>
                  <span className="font-bold">200,000원</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">김포시 출장마사지 서비스 특징</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-violet-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24시간 운영</h3>
              <p className="text-gray-600">언제든지 편리한 시간에 이용 가능</p>
            </div>
            <div className="text-center">
              <div className="bg-violet-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">안전한 서비스</h3>
              <p className="text-gray-600">철저한 위생 관리와 안전 보장</p>
            </div>
            <div className="text-center">
              <div className="bg-violet-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">전문 테라피스트</h3>
              <p className="text-gray-600">숙련된 전문가의 맞춤 케어</p>
            </div>
            <div className="text-center">
              <div className="bg-violet-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">VIP 서비스</h3>
              <p className="text-gray-600">프리미엄 힐링 경험 제공</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">김포시 서비스 지역</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-4 text-center shadow-sm border">
              <span className="text-gray-700 font-medium">김포1동</span>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm border">
              <span className="text-gray-700 font-medium">김포2동</span>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm border">
              <span className="text-gray-700 font-medium">사우동</span>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm border">
              <span className="text-gray-700 font-medium">풍무동</span>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm border">
              <span className="text-gray-700 font-medium">장기동</span>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm border">
              <span className="text-gray-700 font-medium">구래동</span>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm border">
              <span className="text-gray-700 font-medium">마산동</span>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm border">
              <span className="text-gray-700 font-medium">고촌읍</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">김포시 고객 후기</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600 text-sm">김○○님 (풍무동)</span>
              </div>
              <p className="text-gray-700">
                "풍무동에서 이용했는데 정말 만족스러웠어요. 테라피스트분이 너무 친절하시고 실력도 좋으셔서 몸이 정말
                가벼워졌습니다. 다음에도 꼭 이용할게요!"
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600 text-sm">박○○님 (장기동)</span>
              </div>
              <p className="text-gray-700">
                "장기동 아파트까지 빠르게 와주셔서 감사했어요. VIP 코스 받았는데 정말 시원하고 개운했습니다. 가격도
                합리적이고 서비스도 최고예요."
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600 text-sm">이○○님 (사우동)</span>
              </div>
              <p className="text-gray-700">
                "사우동에서 처음 이용해봤는데 정말 좋았어요. 깨끗하고 전문적인 서비스에 감동받았습니다. 주변
                지인들에게도 추천하고 있어요!"
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-violet-400 mb-4">총알출장마사지</h3>
            <p className="text-gray-300 mb-6">김포시 전문 출장마사지 서비스</p>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="tel:010-2871-2457" className="text-gray-300 hover:text-violet-400 transition-colors">
                전화: 010-2871-2457
              </a>
              <span className="text-gray-500">|</span>
              <span className="text-gray-300">24시간 운영</span>
            </div>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-400 text-sm">© 2024 총알출장마사지. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {showPriceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">김포시 출장마사지 코스표</h2>
                <button onClick={() => setShowPriceModal(false)} className="text-gray-500 hover:text-gray-700">
                  ✕
                </button>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-violet-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-violet-600 mb-3 text-center">타이 마사지</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between p-2 bg-violet-50 rounded">
                      <span>60분</span>
                      <span className="font-bold text-violet-600">80,000원</span>
                    </div>
                    <div className="flex justify-between p-2 bg-violet-50 rounded">
                      <span>90분</span>
                      <span className="font-bold text-violet-600">100,000원</span>
                    </div>
                    <div className="flex justify-between p-2 bg-violet-50 rounded">
                      <span>120분</span>
                      <span className="font-bold text-violet-600">120,000원</span>
                    </div>
                  </div>
                </div>
                <div className="border border-purple-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-purple-600 mb-3 text-center">힐링스웨디시</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between p-2 bg-purple-50 rounded">
                      <span>60분</span>
                      <span className="font-bold text-purple-600">90,000원</span>
                    </div>
                    <div className="flex justify-between p-2 bg-purple-50 rounded">
                      <span>90분</span>
                      <span className="font-bold text-purple-600">110,000원</span>
                    </div>
                    <div className="flex justify-between p-2 bg-purple-50 rounded">
                      <span>120분</span>
                      <span className="font-bold text-purple-600">130,000원</span>
                    </div>
                  </div>
                </div>
                <div className="border border-amber-200 rounded-lg p-4 bg-gradient-to-br from-amber-50 to-amber-100">
                  <h3 className="text-lg font-semibold text-amber-600 mb-3 text-center">VIP (타이 + 힐링 + 풋)</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between p-2 bg-amber-100 rounded">
                      <span>60분</span>
                      <span className="font-bold text-amber-600">100,000원</span>
                    </div>
                    <div className="flex justify-between p-2 bg-amber-100 rounded">
                      <span>90분</span>
                      <span className="font-bold text-amber-600">130,000원</span>
                    </div>
                    <div className="flex justify-between p-2 bg-amber-100 rounded">
                      <span>120분</span>
                      <span className="font-bold text-amber-600">160,000원</span>
                    </div>
                    <div className="flex justify-between p-2 bg-amber-100 rounded">
                      <span>150분</span>
                      <span className="font-bold text-amber-600">200,000원</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
