import { NextResponse } from "next/server"

export async function GET() {
  const baseUrl = "https://총알출장마사지.com"

  // All regional pages
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
    "dongducheon",
    "bucheon",
    "seongnam",
    "suwon",
    "siheung",
    "ansan",
    "anseong",
    "anyang",
    "yangju",
    "yangpyeong",
    "yeoju",
    "yeoncheon",
    "osan",
    "yongin",
    "uiwang",
    "uijeongbu",
    "icheon",
    "paju",
    "pyeongtaek",
    "pocheon",
    "hanam",
    "hwaseong",
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

  const currentDate = new Date().toISOString()

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  ${seoulDistricts
    .map(
      (district) => `
  <url>
    <loc>${baseUrl}/${district}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`,
    )
    .join("")}
  ${gyeonggiCities
    .map(
      (city) => `
  <url>
    <loc>${baseUrl}/${city}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`,
    )
    .join("")}
  ${incheonDistricts
    .map(
      (district) => `
  <url>
    <loc>${baseUrl}/${district}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`,
    )
    .join("")}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
