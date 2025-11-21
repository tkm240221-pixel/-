import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://showmassage.xyz"

  if (!baseUrl) {
    return []
  }

  // 모든 지역 slug 목록
  const regions = [
    // 서울 - 강남구
    "samsung-dong",
    "yeoksam-dong",
    "seocho-dong",
    "nonhyeon-dong",
    "apgujeong-dong",
    "cheongdam-dong",
    "daechi-dong",
    "dogok-dong",
    "gaepo-dong",
    "ilwon-dong",
    // 서울 - 서초구
    "seocho-1dong",
    "jamwon-dong",
    "banpo-dong",
    "bangbae-dong",
    // 서울 - 송파구
    "jamsil-dong",
    "songpa-dong",
    "garak-dong",
    "munjeong-dong",
    "jangji-dong",
    // 서울 - 강동구
    "gil-dong",
    "dunchon-dong",
    "amsa-dong",
    "myeongil-dong",
    "godeok-dong",
    // 서울 - 강서구
    "balsan-dong",
    "magok-dong",
    "banghwa-dong",
    "gayang-dong",
    // 서울 - 양천구
    "sinjeong-dong",
    "mokdong",
    "sinwol-dong",
    // 서울 - 구로구
    "guro-dong",
    "gasan-dong",
    "sindorim-dong",
    // 서울 - 금천구
    "gasan-digital-complex",
    "siheung-dong",
    // 서울 - 영등포구
    "yeongdeungpo-dong",
    "yeouido-dong",
    "dangsan-dong",
    // 서울 - 동작구
    "noryangjin-dong",
    "sangdo-dong",
    "heukseok-dong",
    // 서울 - 관악구
    "bongcheon-dong",
    "sillim-dong",
    "gwanak-ro",
    // 서울 - 서대문구
    "sinchon-dong",
    "yeongcheon-dong",
    "hongje-dong",
    // 서울 - 마포구
    "gongdeok-dong",
    "ahyeon-dong",
    "dohwa-dong",
    "yeonnam-dong",
    "seogyo-dong",
    "hapjeong-dong",
    "mangwon-dong",
    "sangam-dong",
    // 서울 - 은평구
    "bulgwang-dong",
    "eungam-dong",
    "yeokchon-dong",
    // 서울 - 종로구
    "sajik-dong",
    "jongno-1-ga",
    "hyehwa-dong",
    // 서울 - 중구
    "myeong-dong",
    "euljiro",
    "hoehyeon-dong",
    // 서울 - 용산구
    "yongsan-dong",
    "ichon-dong",
    "hannam-dong",
    "itaewon-dong",
    // 서울 - 성동구
    "seongsu-dong",
    "haengdang-dong",
    "wangsimni-dong",
    // 서울 - 광진구
    "gwangjin-gu",
    "jayang-dong",
    "guui-dong",
    "neung-dong",
    // 서울 - 동대문구
    "dongdaemun-gu",
    "jeonnong-dong",
    "yongdu-dong",
    "jegi-dong",
    // 서울 - 중랑구
    "jungnang-gu",
    "myeonmok-dong",
    "sangbong-dong",
    "junghwa-dong",
    // 서울 - 성북구
    "seongbuk-gu",
    "seongbuk-dong",
    "jangwi-dong",
    "gil-dong-sb",
    // 서울 - 강북구
    "gangbuk-gu",
    "mia-dong",
    "suyu-dong",
    // 서울 - 도봉구
    "dobong-gu",
    "dobong-dong",
    "banghak-dong",
    // 서울 - 노원구
    "nowon-gu",
    "nowon-dong",
    "sanggye-dong",
    "junggye-dong",

    // 경기 - 성남시
    "sujeong-gu-dandae-dong",
    "sujeong-gu-sinheung-dong",
    "sujeong-gu-taepyeong-dong",
    "jungwon-gu-seongnam-dong",
    "jungwon-gu-geumgwang-dong",
    "jungwon-gu-sangdaewon-dong",
    "bundang-gu-jeongja-dong",
    "bundang-gu-sunae-dong",
    "bundang-gu-pangyo-dong",

    // 경기 - 수원시
    "jangan-gu-yeongtong-dong",
    "jangan-gu-maetan-dong",
    "yeongtong-gu-yeongtong-dong",
    "yeongtong-gu-gwanggyo-dong",
    "paldal-gu-suwon-dong",
    "gwonseon-gu-seodun-dong",

    // 경기 - 기타 시
    "anyang",
    "bucheon",
    "ansan",
    "gwangmyeong",
    "pyeongtaek",
    "gwangju-si",
    "icheon",
    "janggi-dong",

    // 인천
    "namdong-gu",
    "yeonsu-gu",
    "nam-gu",
    "bupyeong-gu",
    "gyeyang-gu",
    "seo-gu-incheon",
    "jung-gu-incheon",
    "dong-gu-incheon",
    "juan-dong",

    // 경상도
    "busan",
    "haeundae",
    "seomyeon",
    "daegu",
    "dongseong-ro",
    "ulsan",
    "changwon",
    "gimhae",
    "yangsan",
    "pohang",
    "gyeongju",
    "gyeongsan",

    // 전라도
    "gwangju",
    "jeonju",
    "gunsan",
    "iksan",
    "mokpo",
    "suncheon",
    "yeosu",
    "gwangyang",
  ]

  const regionUrls = regions.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  const blogUrls = regions.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }))

  const sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/course`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    ...regionUrls,
    ...blogUrls,
  ]

  return sitemap
}
