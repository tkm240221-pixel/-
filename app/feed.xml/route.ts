import { regionSlugMap } from "@/lib/region-mapping"

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://showmassage.xyz"

  console.log("[v0] Generating RSS feed with baseUrl:", baseUrl)

  // 환경 변수가 설정되지 않은 경우 에러 응답
  if (!baseUrl) {
    return new Response("Environment variable NEXT_PUBLIC_SITE_URL is required", {
      status: 500,
      headers: {
        "Content-Type": "text/plain",
      },
    })
  }

  const currentDate = new Date().toUTCString()

  // 지역 목록 생성 (일부만 샘플로 포함)
  const sampleRegions = Object.entries(regionSlugMap)
    .slice(0, 50)
    .map(([koreanName, slug]) => ({
      title: escapeXml(`${koreanName} 출장마사지 - 쇼타임 출장`),
      description: escapeXml(
        `${koreanName} 지역 최고의 프리미엄 출장마사지 서비스를 경험해보세요. 100% 후불제 시스템으로 진행되며 퀄리티 높은 매니저들에게 힐링하는 하루가 되시길 바랍니다.`,
      ),
      link: `${baseUrl}/${slug}`,
      pubDate: currentDate,
    }))

  // RSS 피드 XML 생성
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml("쇼타임 출장마사지 - 전국 출장안마 서비스")}</title>
    <link>${baseUrl}</link>
    <description>${escapeXml("20대 후반대 매니저 / 100% 후불제 시스템 / 퀄리티 높은 매니저들에게 힐링하는 하루가 되시길 바랍니다.")}</description>
    <language>ko</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    
    ${sampleRegions
      .map(
        (region) => `
    <item>
      <title>${region.title}</title>
      <link>${region.link}</link>
      <description>${region.description}</description>
      <pubDate>${region.pubDate}</pubDate>
      <guid isPermaLink="true">${region.link}</guid>
    </item>`,
      )
      .join("")}
    
    <item>
      <title>${escapeXml("쇼타임 출장마사지 코스 및 가격표")}</title>
      <link>${baseUrl}/course</link>
      <description>${escapeXml("스웨디시, 타이마사지, 아로마마사지, VIP 믹스코스 등 다양한 마사지 코스와 가격 정보를 확인하세요.")}</description>
      <pubDate>${currentDate}</pubDate>
      <guid isPermaLink="true">${baseUrl}/course</guid>
    </item>
    
    <item>
      <title>${escapeXml("쇼타임 출장마사지 블로그 - 지역별 서비스 정보")}</title>
      <link>${baseUrl}/blog</link>
      <description>${escapeXml("전국 각 지역별 출장마사지 서비스 정보와 후기를 확인하세요.")}</description>
      <pubDate>${currentDate}</pubDate>
      <guid isPermaLink="true">${baseUrl}/blog</guid>
    </item>
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
