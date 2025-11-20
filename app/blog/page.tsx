import Link from 'next/link'
import { regionData } from '@/lib/region-data'
import Image from 'next/image'

export const metadata = {
  title: '출장마사지 지역별 블로그 | 쇼타임 출장안마',
  description: '전국 모든 지역의 출장마사지 서비스 정보와 이용 가이드',
}

export default function BlogListPage() {
  // Get all regions as a flat array for blog cards
  const regions = Object.entries(regionData)

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          출장마사지 블로그
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          전국 모든 지역의 출장마사지 서비스 정보를 확인하세요
        </p>

        <div className="max-w-5xl mx-auto space-y-8">
          {regions.map(([slug, data]) => (
            <Link
              key={slug}
              href={`/blog/${slug}`}
              className="flex flex-col md:flex-row bg-white border border-gray-200 hover:border-yellow-500 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg group"
            >
              {/* Featured Image */}
              <div className="relative w-full md:w-80 h-64 md:h-auto bg-gradient-to-br from-slate-900 to-blue-900 flex-shrink-0">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-yellow-400 mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" style={{
                      textShadow: '3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 3px 3px 8px rgba(0,0,0,0.5)'
                    }}>
                      {data.areaName}
                    </div>
                    <div className="text-xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" style={{
                      textShadow: '2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000'
                    }}>
                      출장마사지
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                    {data.areaName}출장안마 | {data.areaName}출장마사지 | {data.areaName}출장 - 스트레스 해소의 완벽한 선택
                  </h2>
                  <p className="text-gray-600 line-clamp-3">
                    {data.areaName}출장안마 & {data.areaName}출장마사지 20대 국내 관리사가 계신곳으로 찾아서는 {data.areaName}출장 서비스입니다. 100% 후불제 시스템으로 진행되며 퀄리티 높은 매니저들에게 힐링하는 하루가 되시길 바랍니다. 프리미엄 출장마사지 서비스로 일상의 피로를 완벽하게 해소하세요.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <span className="text-sm text-blue-600 hover:text-blue-800">
                    댓글 0개
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
