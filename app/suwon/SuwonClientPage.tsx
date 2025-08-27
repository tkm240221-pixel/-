"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageCircle, MapPin, Clock, Shield, Users, Award } from "lucide-react"
import Link from "next/link"
import RegionalLinks from "@/components/regional-links"

export default function SuwonClientPage() {
  const [displayText, setDisplayText] = useState("")
  const fullText =
    "빠른 예약을 위해 전화 또는 문자로 상세주소 / 마사지 코스 말씀해주시면 빠른 예약 도와드리도록 하겠습니다 ^^"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-violet-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-violet-600">
                총알출장마사지
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-violet-600 transition-colors">
                홈
              </Link>
              <button className="text-gray-700 hover:text-violet-600 transition-colors">코스표</button>
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

      {/* Reservation Guide */}
      <section className="bg-gradient-to-r from-violet-600 to-purple-600 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">수원시 출장마사지 예약 안내</h2>
          <p className="text-lg min-h-[2rem]">{displayText}</p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-violet-100 text-violet-800">수원시 전문 서비스</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              수원시 출장마사지 전문 서비스
              <span className="text-violet-600 block">경기 대표 마사지</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              수원시 전 지역 신속 서비스! 영통구, 팔달구, 장안구, 권선구 등 수원시 어디든 전문 테라피스트가 방문합니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 text-lg font-semibold"
                asChild
              >
                <a href="tel:010-2871-2457">
                  <Phone className="h-5 w-5 mr-2" />
                  전화상담
                </a>
              </Button>
              <Button
                size="lg"
                className="bg-amber-500 text-white hover:bg-amber-600 px-8 py-3 text-lg font-semibold"
                asChild
              >
                <a href="https://open.kakao.com/o/s0ca9mMh" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  카톡 상담
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">마사지 코스 & 요금표</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-violet-100 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-violet-600 mb-4">타이 마사지</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-violet-50 rounded p-2">
                  <span className="text-gray-700">60분</span>
                  <span className="text-violet-600 font-bold">80,000원</span>
                </div>
                <div className="flex justify-between items-center bg-violet-50 rounded p-2">
                  <span className="text-gray-700">90분</span>
                  <span className="text-violet-600 font-bold">100,000원</span>
                </div>
                <div className="flex justify-between items-center bg-violet-50 rounded p-2">
                  <span className="text-gray-700">120분</span>
                  <span className="text-violet-600 font-bold">120,000원</span>
                </div>
              </div>
            </div>
            <div className="bg-white border border-violet-100 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-purple-600 mb-4">힐링스웨디시</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-purple-50 rounded p-2">
                  <span className="text-gray-700">60분</span>
                  <span className="text-purple-600 font-bold">90,000원</span>
                </div>
                <div className="flex justify-between items-center bg-purple-50 rounded p-2">
                  <span className="text-gray-700">90분</span>
                  <span className="text-purple-600 font-bold">110,000원</span>
                </div>
                <div className="flex justify-between items-center bg-purple-50 rounded p-2">
                  <span className="text-gray-700">120분</span>
                  <span className="text-purple-600 font-bold">130,000원</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-400 to-yellow-500 text-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">VIP 패키지</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-white/20 rounded p-2">
                  <span>60분</span>
                  <span className="font-bold">100,000원</span>
                </div>
                <div className="flex justify-between items-center bg-white/20 rounded p-2">
                  <span>90분</span>
                  <span className="font-bold">130,000원</span>
                </div>
                <div className="flex justify-between items-center bg-white/20 rounded p-2">
                  <span>120분</span>
                  <span className="font-bold">160,000원</span>
                </div>
                <div className="flex justify-between items-center bg-white/20 rounded p-2">
                  <span>150분</span>
                  <span className="font-bold">200,000원</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">서비스 특징</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24시간 운영</h3>
              <p className="text-gray-600">언제든지 편리한 시간에 예약 가능합니다</p>
            </div>
            <div className="text-center">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">안전한 서비스</h3>
              <p className="text-gray-600">검증된 전문 테라피스트가 서비스합니다</p>
            </div>
            <div className="text-center">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">전문 테라피스트</h3>
              <p className="text-gray-600">경력 5년 이상의 숙련된 전문가들</p>
            </div>
            <div className="text-center">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">만족도 1위</h3>
              <p className="text-gray-600">고객 재이용률 95% 이상의 높은 만족도</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">수원시 서비스 지역</h2>
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
                className="bg-white border border-gray-200 hover:border-violet-300 hover:shadow-md transition-all rounded-lg p-4 text-center"
              >
                <MapPin className="h-5 w-5 text-violet-600 mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">고객 후기</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-violet-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-violet-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  김
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">김○○님</p>
                  <p className="text-sm text-gray-600">영통구</p>
                </div>
              </div>
              <p className="text-gray-700">
                "수원시에서 이렇게 전문적인 마사지 서비스를 받을 수 있어서 정말 만족합니다. 테라피스트분도 친절하고
                실력도 뛰어나세요!"
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  박
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">박○○님</p>
                  <p className="text-sm text-gray-600">팔달구</p>
                </div>
              </div>
              <p className="text-gray-700">
                "직장 스트레스로 몸이 너무 아팠는데, 한 번의 마사지로 몸이 정말 가벼워졌어요. 수원시 최고의 마사지
                서비스입니다!"
              </p>
            </div>
            <div className="bg-amber-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-amber-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  이
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">이○○님</p>
                  <p className="text-sm text-gray-600">장안구</p>
                </div>
              </div>
              <p className="text-gray-700">
                "24시간 언제든 예약 가능해서 너무 편리해요. 수원시 전 지역 서비스 가능하다니 정말 대단합니다!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Links */}
      <RegionalLinks currentRegion="수원시" />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-violet-400 mb-4">총알출장마사지</h3>
              <p className="text-gray-300 mb-4">수원시 전문 출장마사지 서비스</p>
              <p className="text-gray-400 text-sm">24시간 연중무휴 운영</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">연락처</h4>
              <p className="text-gray-300 mb-2">전화: 010-2871-2457</p>
              <p className="text-gray-300 mb-2">카카오톡 상담 가능</p>
              <p className="text-gray-300">수원시 전 지역 서비스</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">운영시간</h4>
              <p className="text-gray-300 mb-2">24시간 연중무휴</p>
              <p className="text-gray-300 mb-2">연중무휴 예약 접수</p>
              <p className="text-gray-300">수원시 30분 내 도착</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2024 총알출장마사지. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
