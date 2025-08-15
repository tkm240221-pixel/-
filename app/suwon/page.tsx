"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, MapPin } from "lucide-react"
import Link from "next/link"

export default function SuwonPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800 shadow-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-emerald-400">
                총알출장마사지
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-slate-300 hover:text-emerald-400 transition-colors">
                홈
              </Link>
              <Link href="/#services" className="text-slate-300 hover:text-emerald-400 transition-colors">
                서비스
              </Link>
              <a href="tel:010-2871-2457" className="text-slate-300 hover:text-emerald-400 transition-colors">
                문의
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Regional Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-900 text-blue-300">수원시 전문 서비스</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              수원시 출장마사지
              <span className="text-blue-400 block">경기 대표 서비스</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              수원시 전 지역 신속 서비스! 영통구, 팔달구, 장안구, 권선구 등 수원시 어디든 전문 테라피스트가 방문합니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg font-semibold"
                asChild
              >
                <a href="tel:010-2871-2457">
                  <Phone className="h-5 w-5 mr-2" />
                  전화상담
                </a>
              </Button>
              <Button
                size="lg"
                className="bg-yellow-500 text-slate-900 hover:bg-yellow-400 px-8 py-3 text-lg font-semibold"
                asChild
              >
                <a href="https://open.kakao.com/o/s0ca9mMh" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  카톡 상담
                </a>
              </Button>
            </div>

            {/* Service Areas */}
            <section className="py-16 bg-slate-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-white text-center mb-12">수원시 서비스 지역</h2>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {[
                    "영통구",
                    "팔달구",
                    "장안구",
                    "권선구",
                    "매탄동",
                    "원천동",
                    "인계동",
                    "화서동",
                    "영통동",
                    "망포동",
                    "광교동",
                    "수원역",
                  ].map((area) => (
                    <div
                      key={area}
                      className="bg-slate-700 border border-slate-600 hover:bg-slate-600 transition-colors rounded-lg p-4 text-center"
                    >
                      <MapPin className="h-5 w-5 text-blue-400 mx-auto mb-2" />
                      <span className="text-white font-medium">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">수원시 출장마사지 요금표</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4">타이 마사지</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-300">60분</span>
                  <span className="text-white font-bold">80,000원</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">90분</span>
                  <span className="text-white font-bold">100,000원</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">120분</span>
                  <span className="text-white font-bold">120,000원</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4">힐링스웨디시</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-300">60분</span>
                  <span className="text-white font-bold">90,000원</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">90분</span>
                  <span className="text-white font-bold">110,000원</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">120분</span>
                  <span className="text-white font-bold">130,000원</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-yellow-900 to-yellow-800 border border-yellow-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">VIP 패키지</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-300">60분</span>
                  <span className="text-yellow-400 font-bold">100,000원</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">90분</span>
                  <span className="text-yellow-400 font-bold">130,000원</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">120분</span>
                  <span className="text-yellow-400 font-bold">160,000원</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">150분</span>
                  <span className="text-yellow-400 font-bold">200,000원</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">수원시 출장마사지 예약 문의</h2>
          <p className="text-blue-100 text-lg mb-8">
            수원시 전 지역 30분 내 도착! 경기도 대표 출장마사지 서비스입니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 text-lg font-semibold"
              asChild
            >
              <a href="tel:010-2871-2457">
                <Phone className="h-5 w-5 mr-2" />
                전화상담
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-yellow-500 text-slate-900 hover:bg-yellow-400 px-8 py-3 text-lg font-semibold"
              asChild
            >
              <a href="https://open.kakao.com/o/s0ca9mMh" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                카카오톡 상담
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-emerald-400 mb-4">총알출장마사지</h3>
          <p className="text-slate-300 mb-4">수원시 전문 출장마사지 서비스</p>
          <p className="text-slate-400 text-sm">© 2024 총알출장마사지. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
