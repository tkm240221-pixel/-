import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import RegionDetail from '@/components/region-detail'
import Footer from '@/components/footer'
import { regionData } from '@/lib/region-data'

export const dynamicParams = true

export async function generateMetadata({ params }: { params: Promise<{ region: string }> }): Promise<Metadata> {
  const { region } = await params
  const data = regionData[region]
  
  if (!data) {
    return {
      title: '페이지를 찾을 수 없습니다',
    }
  }

  const { areaName } = data
  const title = `${areaName}출장안마 ${areaName}출장마사지 ${areaName}출장 한국태국 20대 후불제 | 쇼타임`
  const description = `${areaName} 프리미엄 출장마사지 서비스. 24시간 연중무휴, 20대 전문 관리사, 100% 후불제, 30분 내 도착. 한국태국 믹스코스, 스웨디시, 아로마, 타이마사지 전문. 쇼타임 출장안마 010-2871-2457`

  // 24개 이상의 키워드 생성
  const keywords = [
    `${areaName}출장안마`,
    `${areaName}출장마사지`,
    `${areaName}출장`,
    `${areaName}마사지`,
    `${areaName}안마`,
    `${areaName}출장안마후불`,
    `${areaName}출장마사지후불`,
    `${areaName}후불출장`,
    `${areaName}후불마사지`,
    `${areaName}20대출장`,
    `${areaName}20대마사지`,
    `${areaName}프리미엄출장`,
    `${areaName}타이마사지`,
    `${areaName}스웨디시`,
    `${areaName}아로마마사지`,
    `${areaName}건식마사지`,
    `${areaName}습식마사지`,
    `${areaName}힐링마사지`,
    `${areaName}출장안마서비스`,
    `${areaName}출장마사지업체`,
    `${areaName}출장관리사`,
    `${areaName}24시출장`,
    `${areaName}심야출장`,
    `${areaName}새벽출장`,
    `${areaName}홈케어`,
    `${areaName}홈타이`,
    `${areaName}방문마사지`,
    `${areaName}호텔출장`,
    `${areaName}모텔출장`,
    `${areaName}원룸출장`,
    '쇼타임출장안마',
    '쇼타임출장마사지',
    '출장안마',
    '출장마사지',
    '후불제출장',
    '20대관리사',
  ].join(', ')

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'ko_KR',
      siteName: '쇼타임 출장안마',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `https://yourdomain.com/${region}`,
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(regionData).map((region) => ({
    region,
  }))
}

function StaticHeader() {
  const navItems = [
    { label: '쇼타임 출장', href: '/' },
    { label: '게시판', href: '/#board' },
    { label: '서울', href: '/#region1' },
    { label: '경기', href: '/#region2' },
    { label: '인천', href: '/#region3' },
    { label: '경상도', href: '/#region4' },
    { label: '전라도', href: '/#region5' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-blue-900 to-blue-950 shadow-lg">
      <div className="container mx-auto">
        <nav className="hidden md:flex items-center justify-center">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-8 py-6 text-white font-medium text-lg transition-all border-r border-blue-800/50 last:border-r-0 hover:bg-blue-800/50"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden flex items-center justify-center px-4 py-4">
          <Link href="/" className="text-white font-bold text-xl">
            쇼타임 출장
          </Link>
        </div>
      </div>
    </header>
  )
}

export default async function RegionPage({ params }: { params: Promise<{ region: string }> }) {
  const { region } = await params
  
  const data = regionData[region]

  if (!data) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-black">
      <StaticHeader />
      <div className="pt-20">
        <RegionDetail
          regionName={data.regionName}
          districtName={data.districtName}
          areaName={data.areaName}
        />
      </div>
      <Footer />
    </main>
  )
}
