import Link from "next/link"

interface RegionalLinksProps {
  currentRegion?: string
  regionType: "seoul" | "gyeonggi" | "incheon"
}

export default function RegionalLinks({ currentRegion, regionType }: RegionalLinksProps) {
  const seoulRegions = [
    { name: "강남구", slug: "gangnam", title: "강남 출장마사지" },
    { name: "강동구", slug: "gangdong", title: "강동 출장마사지" },
    { name: "강북구", slug: "gangbuk", title: "강북 출장마사지" },
    { name: "강서구", slug: "gangseo", title: "강서 출장마사지" },
    { name: "관악구", slug: "gwanak", title: "관악 출장마사지" },
    { name: "광진구", slug: "gwangjin", title: "광진 출장마사지" },
    { name: "구로구", slug: "guro", title: "구로 출장마사지" },
    { name: "금천구", slug: "geumcheon", title: "금천 출장마사지" },
    { name: "노원구", slug: "nowon", title: "노원 출장마사지" },
    { name: "도봉구", slug: "dobong", title: "도봉 출장마사지" },
    { name: "동대문구", slug: "dongdaemun", title: "동대문 출장마사지" },
    { name: "동작구", slug: "dongjak", title: "동작 출장마사지" },
    { name: "마포구", slug: "mapo", title: "마포 출장마사지" },
    { name: "서대문구", slug: "seodaemun", title: "서대문 출장마사지" },
    { name: "서초구", slug: "seocho", title: "서초 출장마사지" },
    { name: "성동구", slug: "seongdong", title: "성동 출장마사지" },
    { name: "성북구", slug: "seongbuk", title: "성북 출장마사지" },
    { name: "송파구", slug: "songpa", title: "송파 출장마사지" },
    { name: "양천구", slug: "yangcheon", title: "양천 출장마사지" },
    { name: "영등포구", slug: "yeongdeungpo", title: "영등포 출장마사지" },
    { name: "용산구", slug: "yongsan", title: "용산 출장마사지" },
    { name: "은평구", slug: "eunpyeong", title: "은평 출장마사지" },
    { name: "종로구", slug: "jongno", title: "종로 출장마사지" },
    { name: "중구", slug: "jung", title: "중구 출장마사지" },
    { name: "중랑구", slug: "jungnang", title: "중랑 출장마사지" },
  ]

  const gyeonggiRegions = [
    { name: "가평군", slug: "gapyeong", title: "가평 출장마사지" },
    { name: "고양시", slug: "goyang", title: "고양 출장마사지" },
    { name: "과천시", slug: "gwacheon", title: "과천 출장마사지" },
    { name: "광명시", slug: "gwangmyeong", title: "광명 출장마사지" },
    { name: "광주시", slug: "gwangju", title: "광주 출장마사지" },
    { name: "구리시", slug: "guri", title: "구리 출장마사지" },
    { name: "군포시", slug: "gunpo", title: "군포 출장마사지" },
    { name: "김포시", slug: "gimpo", title: "김포 출장마사지" },
    { name: "남양주시", slug: "namyangju", title: "남양주 출장마사지" },
    { name: "동두천시", slug: "dongducheon", title: "동두천 출장마사지" },
    { name: "부천시", slug: "bucheon", title: "부천 출장마사지" },
    { name: "성남시", slug: "seongnam", title: "성남 출장마사지" },
    { name: "수원시", slug: "suwon", title: "수원 출장마사지" },
    { name: "시흥시", slug: "siheung", title: "시흥 출장마사지" },
    { name: "안산시", slug: "ansan", title: "안산 출장마사지" },
    { name: "안성시", slug: "anseong", title: "안성 출장마사지" },
    { name: "안양시", slug: "anyang", title: "안양 출장마사지" },
    { name: "양주시", slug: "yangju", title: "양주 출장마사지" },
    { name: "양평군", slug: "yangpyeong", title: "양평 출장마사지" },
    { name: "여주시", slug: "yeoju", title: "여주 출장마사지" },
    { name: "연천군", slug: "yeoncheon", title: "연천 출장마사지" },
    { name: "오산시", slug: "osan", title: "오산 출장마사지" },
    { name: "용인시", slug: "yongin", title: "용인 출장마사지" },
    { name: "의왕시", slug: "uiwang", title: "의왕 출장마사지" },
    { name: "의정부시", slug: "uijeongbu", title: "의정부 출장마사지" },
    { name: "이천시", slug: "icheon", title: "이천 출장마사지" },
    { name: "파주시", slug: "paju", title: "파주 출장마사지" },
    { name: "평택시", slug: "pyeongtaek", title: "평택 출장마사지" },
    { name: "포천시", slug: "pocheon", title: "포천 출장마사지" },
    { name: "하남시", slug: "hanam", title: "하남 출장마사지" },
    { name: "화성시", slug: "hwaseong", title: "화성 출장마사지" },
  ]

  const incheonRegions = [
    { name: "계양구", slug: "gyeyang", title: "계양 출장마사지" },
    { name: "남동구", slug: "namdong", title: "남동 출장마사지" },
    { name: "동구", slug: "dong-gu", title: "동구 출장마사지" },
    { name: "미추홀구", slug: "michuhol", title: "미추홀 출장마사지" },
    { name: "부평구", slug: "bupyeong", title: "부평 출장마사지" },
    { name: "서구", slug: "seo-gu", title: "서구 출장마사지" },
    { name: "연수구", slug: "yeonsu", title: "연수 출장마사지" },
    { name: "중구", slug: "jung-gu", title: "중구 출장마사지" },
    { name: "강화군", slug: "ganghwa", title: "강화 출장마사지" },
    { name: "옹진군", slug: "ongjin", title: "옹진 출장마사지" },
  ]

  const getRegions = () => {
    switch (regionType) {
      case "seoul":
        return seoulRegions
      case "gyeonggi":
        return gyeonggiRegions
      case "incheon":
        return incheonRegions
      default:
        return []
    }
  }

  const regions = getRegions().filter((region) => region.slug !== currentRegion) || []
  const nearbyRegions = regions.slice(0, 6) // Show 6 nearby regions
  const remainingRegions = regions.slice(6) || []

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
          {regionType === "seoul" && "서울 다른 지역 출장마사지"}
          {regionType === "gyeonggi" && "경기 다른 지역 출장마사지"}
          {regionType === "incheon" && "인천 다른 지역 출장마사지"}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {nearbyRegions.map((region) => (
            <Link
              key={region.slug}
              href={`/${region.slug}`}
              className="bg-white rounded-lg p-4 text-center shadow-sm border hover:shadow-md hover:border-violet-200 transition-all duration-200 group"
            >
              <span className="text-gray-700 font-medium group-hover:text-violet-600 transition-colors">
                {region.title}
              </span>
            </Link>
          ))}
        </div>

        {remainingRegions.length > 0 && (
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 mb-4">
              {regionType === "seoul" && "서울 전 지역 24시간 출장마사지 서비스 이용 가능"}
              {regionType === "gyeonggi" && "경기 전 지역 24시간 출장마사지 서비스 이용 가능"}
              {regionType === "incheon" && "인천 전 지역 24시간 출장마사지 서비스 이용 가능"}
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-xs">
              {remainingRegions.map((region, index) => (
                <span key={region.slug}>
                  <Link href={`/${region.slug}`} className="text-violet-600 hover:text-violet-800 hover:underline">
                    {region.title}
                  </Link>
                  {index < remainingRegions.length - 1 && <span className="text-gray-400 ml-2">|</span>}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
