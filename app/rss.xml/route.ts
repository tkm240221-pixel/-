import { NextResponse } from "next/server"

export async function GET() {
  const baseUrl = "https://총알출장마사지.com"
  const currentDate = new Date().toISOString()

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>총알출장마사지 - 서울 경기 인천 24시간 전문 출장마사지</title>
    <description>서울 경기 인천 전 지역 24시간 출장마사지 서비스. 30분 내 방문, 숙련된 전문 테라피스트의 타이마사지, 스웨디시, 힐링마사지.</description>
    <link>${baseUrl}</link>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <language>ko-KR</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <pubDate>${currentDate}</pubDate>
    <ttl>60</ttl>
    <managingEditor>info@총알출장마사지.com (총알출장마사지)</managingEditor>
    <webMaster>info@총알출장마사지.com (총알출장마사지)</webMaster>
    
    <item>
      <title>서울 전 지역 24시간 출장마사지 서비스</title>
      <description>강남구, 강서구, 송파구 등 서울 25개 구 전체 지역에서 24시간 전문 출장마사지 서비스를 제공합니다. 타이마사지, 힐링스웨디시, VIP 패키지 등 다양한 코스를 합리적인 가격으로 만나보세요.</description>
      <link>${baseUrl}</link>
      <guid>${baseUrl}/seoul-massage-service</guid>
      <pubDate>${currentDate}</pubDate>
      <category>출장마사지</category>
      <category>서울마사지</category>
    </item>
    
    <item>
      <title>경기도 전 지역 출장마사지 - 수원, 성남, 고양, 부천</title>
      <description>경기도 31개 시군 전체 지역에서 전문 출장마사지 서비스를 제공합니다. 수원시, 성남시, 고양시, 부천시 등 주요 도시 30분 내 방문 가능합니다.</description>
      <link>${baseUrl}/suwon</link>
      <guid>${baseUrl}/gyeonggi-massage-service</guid>
      <pubDate>${currentDate}</pubDate>
      <category>출장마사지</category>
      <category>경기마사지</category>
    </item>
    
    <item>
      <title>인천 전 지역 출장마사지 - 부평구, 남동구, 연수구</title>
      <description>인천광역시 10개 구군 전체 지역에서 24시간 출장마사지 서비스를 제공합니다. 부평구, 남동구, 연수구 등 주요 지역 빠른 방문 서비스.</description>
      <link>${baseUrl}/bupyeong</link>
      <guid>${baseUrl}/incheon-massage-service</guid>
      <pubDate>${currentDate}</pubDate>
      <category>출장마사지</category>
      <category>인천마사지</category>
    </item>
    
    <item>
      <title>24시간 전문 타이마사지 서비스</title>
      <description>전문 테라피스트가 제공하는 정통 타이마사지 서비스. 60분 8만원, 90분 10만원, 120분 12만원의 합리적인 가격으로 최고의 힐링을 경험하세요.</description>
      <link>${baseUrl}#thai-massage</link>
      <guid>${baseUrl}/thai-massage-service</guid>
      <pubDate>${currentDate}</pubDate>
      <category>타이마사지</category>
      <category>전문마사지</category>
    </item>
    
    <item>
      <title>힐링스웨디시 마사지 - 스트레스 해소 전문</title>
      <description>스트레스 해소와 근육 이완에 특화된 힐링스웨디시 마사지. 60분 9만원부터 시작하는 프리미엄 홈케어 서비스를 경험해보세요.</description>
      <link>${baseUrl}#swedish-massage</link>
      <guid>${baseUrl}/swedish-massage-service</guid>
      <pubDate>${currentDate}</pubDate>
      <category>스웨디시</category>
      <category>힐링마사지</category>
    </item>
    
    <item>
      <title>VIP 프리미엄 마사지 패키지</title>
      <description>타이마사지 + 힐링스웨디시 + 풋마사지가 결합된 VIP 프리미엄 패키지. 60분부터 150분까지 다양한 시간 옵션으로 최고의 힐링을 제공합니다.</description>
      <link>${baseUrl}#vip-package</link>
      <guid>${baseUrl}/vip-massage-package</guid>
      <pubDate>${currentDate}</pubDate>
      <category>VIP마사지</category>
      <category>프리미엄서비스</category>
    </item>
  </channel>
</rss>`

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
