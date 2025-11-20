import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-950/20 to-black border-t border-blue-900/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">쇼타임 출장안마</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              프리미엄 출장마사지 서비스
              <br />
              20대 후내 매니저 / 100% 후불제
            </p>
            <div className="mt-4">
              <a href="tel:010-2871-2457" className="text-yellow-400 font-bold text-lg hover:text-yellow-300 transition-colors">
                010-2871-2457
              </a>
              <p className="text-gray-500 text-xs mt-1">24시간 연중무휴</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">서비스</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>출장 마사지</li>
              <li>출장 안마</li>
              <li>홈케어 서비스</li>
              <li>24시간 예약</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">고객센터</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>24시간 상담 가능</li>
              <li>전화 예약</li>
              <li>카카오톡 상담</li>
              <li>100% 후불제</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">주요 지역</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/gangnam-dong" className="hover:text-yellow-400 transition-colors" title="강남구출장마사지">강남구</Link></li>
              <li><Link href="/seocho-dong" className="hover:text-yellow-400 transition-colors" title="서초구출장마사지">서초구</Link></li>
              <li><Link href="/songpa-dong" className="hover:text-yellow-400 transition-colors" title="송파구출장마사지">송파구</Link></li>
              <li><Link href="/bundang-gu-seohyeon-dong" className="hover:text-yellow-400 transition-colors" title="분당출장마사지">분당</Link></li>
              <li><Link href="/yeouido-dong" className="hover:text-yellow-400 transition-colors" title="여의도출장마사지">여의도</Link></li>
              <li><Link href="/jamsil-dong" className="hover:text-yellow-400 transition-colors" title="잠실출장마사지">잠실</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900/30 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 쇼타임 출장안마. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            쇼타임 출장안마 - 프리미엄 홈케어 서비스
          </p>
        </div>
      </div>
    </footer>
  )
}
