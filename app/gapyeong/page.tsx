"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, MapPin } from "lucide-react"
import Link from "next/link"

export default function GapyeongMassage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800 shadow-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-emerald-400">
              총알출장마사지
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-slate-300 hover:text-emerald-400 transition-colors">
                홈
              </Link>
              <Link href="tel:010-2871-2457" className="text-slate-300 hover:text-emerald-400 transition-colors">
                문의
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-900 text-blue-300">가평군 전문 서비스</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              가평군 출장마사지
              <span className="text-blue-400 block">24시간 방문 서비스</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              가평군 전 지역 30분 내 방문 가능한 프리미엄 출장마사지 서비스
              <br />
              가평읍, 청평면, 상면, 하면 등 가평군 어디든 신속하게 방문합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3" asChild>
                <a href="tel:010-2871-2457">
                  <Phone className="h-5 w-5 mr-2" />
                  즉시 전화상담
                </a>
              </Button>
              <Button size="lg" className="bg-yellow-500 text-slate-900 hover:bg-yellow-400 px-8 py-3" asChild>
                <a href="https://open.kakao.com/o/s0ca9mMh" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  카톡 문의
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">가평군 서비스 지역</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["가평읍", "청평면", "상면", "하면", "북면", "조종면"].map((area) => (
              <Card key={area} className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-colors">
                <CardContent className="p-4 text-center">
                  <MapPin className="h-5 w-5 text-blue-400 mx-auto mb-2" />
                  <span className="text-white font-medium">{area}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">가평군 출장마사지 요금표</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
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
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
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
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-yellow-900 to-yellow-800 border-yellow-600">
              <CardContent className="p-6">
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
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">가평군 출장마사지 예약</h2>
          <p className="text-blue-100 text-lg mb-8">24시간 언제든지 연락주세요</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3" asChild>
              <a href="tel:010-2871-2457">
                <Phone className="h-5 w-5 mr-2" />
                010-2871-2457
              </a>
            </Button>
            <Button size="lg" className="bg-yellow-500 text-slate-900 hover:bg-yellow-400 px-8 py-3" asChild>
              <a href="https://open.kakao.com/o/s0ca9mMh" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                카카오톡 상담
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
