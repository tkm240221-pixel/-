import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://총알출장마사지.com"

  const seoulDistricts = [
    "gangnam",
    "gangdong",
    "gangbuk",
    "gangseo",
    "gwanak",
    "gwangjin",
    "guro",
    "geumcheon",
    "nowon",
    "dobong",
    "dongdaemun",
    "dongjak",
    "mapo",
    "seodaemun",
    "seocho",
    "seongdong",
    "seongbuk",
    "songpa",
    "yangcheon",
    "yeongdeungpo",
    "yongsan",
    "eunpyeong",
    "jongno",
    "jung",
    "jungnang",
  ]

  const gyeonggiCities = [
    "gapyeong",
    "goyang",
    "gwacheon",
    "gwangmyeong",
    "gwangju",
    "guri",
    "gunpo",
    "gimpo",
    "namyangju",
    "bucheon",
    "seongnam",
    "suwon",
    "anyang",
  ]

  const incheonDistricts = [
    "gyeyang",
    "namdong",
    "dong-gu",
    "michuhol",
    "bupyeong",
    "seo-gu",
    "yeonsu",
    "jung-gu",
    "ganghwa",
    "ongjin",
  ]

  const allRoutes = ["", ...seoulDistricts, ...gyeonggiCities, ...incheonDistricts]

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route ? `/${route}` : ""}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }))
}
