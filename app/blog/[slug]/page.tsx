import Link from "next/link"
import { regionData } from "@/lib/region-data"
import { Phone, MessageCircle } from "lucide-react"
import { notFound } from "next/navigation"

export const dynamicParams = true

export async function generateStaticParams() {
  return Object.keys(regionData).map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const region = regionData[slug]

  if (!region) {
    return {
      title: "Page Not Found",
    }
  }

  const { areaName } = region
  return {
    title: `${areaName} Massage Service | Showtime Massage`,
    description: `Premium massage service in ${areaName}. Professional therapists, 24/7 available, relaxation and stress relief.`,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const region = regionData[slug]

  if (!region) {
    notFound()
  }

  const { regionName, districtName, areaName } = region

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <div className="bg-black/50 backdrop-blur-sm border-b border-gold-500/30 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/blog"
            className="text-gold-400 hover:text-gold-300 transition-colors inline-flex items-center gap-2"
          >
            ← Blog List
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Title */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">{areaName} Massage Service</h1>
          <p className="text-2xl text-gold-400 font-medium">Premium massage service for relaxation and stress relief</p>
        </header>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="tel:010-2871-2457"
            className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Phone className="w-6 h-6" />
            Call for Consultation
          </a>
          <a
            href="https://open.kakao.com/o/sd4IUeEh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-6 h-6" />
            Chat on Kakao
          </a>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none space-y-8 text-gray-200">
          {/* Introduction */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gold-500/20">
            <p className="text-lg leading-relaxed">
              {regionName} {districtName} {areaName}, this is a dynamic space in the modern world where daily life moves
              quickly. If you are accumulating physical and mental fatigue in your busy schedule, a professional massage
              service is needed. That is exactly what {areaName} Massage Service offers.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Mobile massage is a service where massage therapists visit your location directly, making it a convenient
              and essential healing method for modern people.
            </p>
          </div>

          {/* Section 1 */}
          <section>
            <h2 className="text-3xl font-bold text-gold-400 mb-6 flex items-center gap-2">
              <span className="text-gold-500">1.</span> What is {areaName} Massage Service?
            </h2>
            <div className="bg-slate-800/30 rounded-xl p-6 space-y-4">
              <p className="leading-relaxed">
                {areaName} Massage Service is a mobile massage service where therapists visit your location directly to
                provide professional massage therapy. Unlike traditional massage parlors, customers do not need to move.
                You can receive massage therapy conveniently at home, office, hotel, or any other desired location.
              </p>

              <h3 className="text-2xl font-bold text-white mt-6 mb-4">Features of Mobile Massage</h3>
              <ul className="space-y-3 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold">▶</span>
                  <div>
                    <strong className="text-white">Perfect Convenience:</strong> No traffic jams or waiting time. You
                    can relax at home while receiving massage therapy.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold">▶</span>
                  <div>
                    <strong className="text-white">Customized Services:</strong> Services are tailored to your physical
                    condition and needs.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold">▶</span>
                  <div>
                    <strong className="text-white">Time Management:</strong> Easily schedule your massage therapy within
                    a busy schedule.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold">▶</span>
                  <div>
                    <strong className="text-white">Professional Care:</strong> Experienced therapists visit you directly
                    to provide high-quality services.
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-3xl font-bold text-gold-400 mb-6 flex items-center gap-2">
              <span className="text-gold-500">2.</span> Special Effects of {areaName} Massage Service
            </h2>
            <div className="bg-slate-800/30 rounded-xl p-6 space-y-4">
              <p className="leading-relaxed">
                Mobile massage goes beyond simply relieving physical fatigue. It also provides significant benefits for
                mental stability and physical recovery.
              </p>

              <h3 className="text-2xl font-bold text-white mt-6 mb-4">Key Benefits of Mobile Massage</h3>
              <ul className="space-y-3 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold">▶</span>
                  <div>
                    <strong className="text-white">Stress Relief:</strong> Instantly alleviate stress accumulated in{" "}
                    {areaName}.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold">▶</span>
                  <div>
                    <strong className="text-white">Muscle Relaxation and Improved Circulation:</strong> Loosen up
                    cramped muscles from long hours of sitting or standing at work. Improved blood circulation
                    accelerates recovery from fatigue.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold">▶</span>
                  <div>
                    <strong className="text-white">Better Sleep Quality:</strong> Relax after massage therapy, leading
                    to improved sleep quality.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold">▶</span>
                  <div>
                    <strong className="text-white">Enhanced Physical and Immune Health:</strong> Regular massage therapy
                    not only relieves fatigue but also strengthens physical and immune health.
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-3xl font-bold text-gold-400 mb-6 flex items-center gap-2">
              <span className="text-gold-500">3.</span> How to Use {areaName} Massage Service
            </h2>
            <div className="bg-slate-800/30 rounded-xl p-6 space-y-4">
              <h3 className="text-2xl font-bold text-white mb-4">Simple and Convenient Reservation Process</h3>
              <ol className="space-y-4 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold text-xl">1</span>
                  <div>
                    <strong className="text-white text-lg">Choose a Reliable Service:</strong>
                    <p className="mt-2">
                      Select a trusted mobile massage service in {areaName}. It is important to choose a place with
                      certified therapists and a good reputation.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold text-xl">2</span>
                  <div>
                    <strong className="text-white text-lg">Consult and Reserve:</strong>
                    <p className="mt-2">
                      Inform the service of your desired time, location, and massage type (Swedish, Thai, Aromatherapy,
                      etc.).
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold text-xl">3</span>
                  <div>
                    <strong className="text-white text-lg">Receive Massage Therapy:</strong>
                    <p className="mt-2">
                      Professional therapists will visit you at the reserved time to provide customized massage therapy.
                    </p>
                  </div>
                </li>
              </ol>

              <h3 className="text-2xl font-bold text-white mt-8 mb-4">Checklist for Mobile Massage Reservation</h3>
              <ul className="space-y-3 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold">✓</span>
                  <div>
                    Honestly inform the therapists about your physical condition before receiving massage therapy.
                    Mentioning specific areas of fatigue will allow for more effective care.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold">✓</span>
                  <div>
                    Request the massage intensity and style beforehand. Massage intensity varies among individuals, so
                    effective communication will lead to the best service for you.
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-3xl font-bold text-gold-400 mb-6 flex items-center gap-2">
              <span className="text-gold-500">4.</span> Main Massage Types Offered by {areaName} Massage Service
            </h2>
            <div className="bg-slate-800/30 rounded-xl p-6 space-y-4">
              <p className="leading-relaxed">
                Mobile massage services offer various styles. Choosing the right massage type can lead to greater
                satisfaction.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-700/30 rounded-lg p-5 border border-gold-500/20">
                  <h4 className="text-xl font-bold text-gold-300 mb-2">Swedish Massage</h4>
                  <p>Improves blood and lymph circulation, promoting mental and physical relaxation.</p>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-5 border border-gold-500/20">
                  <h4 className="text-xl font-bold text-gold-300 mb-2">Thai Massage</h4>
                  <p>Combines stretching and pressure to increase joint flexibility and improve energy flow.</p>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-5 border border-gold-500/20">
                  <h4 className="text-xl font-bold text-gold-300 mb-2">Aromatherapy Massage</h4>
                  <p>Utilizes essential oils to improve skin health and reduce stress, enhancing your mood.</p>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-5 border border-gold-500/20">
                  <h4 className="text-xl font-bold text-gold-300 mb-2">Healing Massage</h4>
                  <p>Relieves deep muscle tension, making it effective for chronic muscle pain.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-3xl font-bold text-gold-400 mb-6 flex items-center gap-2">
              <span className="text-gold-500">5.</span> Tips for More Effective Mobile Massage
            </h2>
            <div className="bg-slate-800/30 rounded-xl p-6 space-y-4">
              <ul className="space-y-3 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold">●</span>
                  <div>
                    <strong className="text-white">Preparation Before Massage:</strong> Taking a warm shower before
                    massage therapy can help relax your muscles.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold">●</span>
                  <div>
                    <strong className="text-white">Post-Massage Care:</strong> Drink plenty of water to help eliminate
                    toxins and take some rest to feel the recovery.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold">●</span>
                  <div>
                    <strong className="text-white">Regular Use:</strong> Regularly using mobile massage therapy can help
                    manage fatigue and enhance physical recovery effectively.
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-3xl font-bold text-gold-400 mb-6 flex items-center gap-2">
              <span className="text-gold-500">6.</span> Who Needs {areaName} Massage Service?
            </h2>
            <div className="bg-slate-800/30 rounded-xl p-6">
              <ul className="space-y-3 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold">✓</span>
                  <div>
                    <strong className="text-white">Busy Professionals:</strong> Those who want to relieve stress from
                    daily commuting and work fatigue.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold">✓</span>
                  <div>
                    <strong className="text-white">Long-Hour Workers:</strong> Those suffering from chronic neck and
                    shoulder pain from long hours in front of a computer.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold">✓</span>
                  <div>
                    <strong className="text-white">Travelers:</strong> Those who want a peaceful recovery at the end of
                    a long day in a new city.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold">✓</span>
                  <div>
                    <strong className="text-white">Athletes Needing Recovery:</strong> Those who want to quickly recover
                    from muscle fatigue after exercise.
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-gradient-to-r from-gold-500/20 to-gold-600/20 rounded-2xl p-8 border-2 border-gold-500/30">
            <h2 className="text-3xl font-bold text-gold-300 mb-6 flex items-center gap-2">
              <span className="text-gold-500">7.</span> Enhance Your Day with {areaName} Massage Service!
            </h2>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                At the end of a tiring day, take some time for yourself. {areaName} Massage Service is more than just a
                service; it is a valuable experience that recharges your body and mind.
              </p>
              <p className="text-xl font-bold text-gold-300 text-center mt-6">
                Reserve now! Your perfect relaxation time is waiting for you.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gold-500/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Reservation and Consultation Inquiry</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:010-2871-2457"
                className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
              >
                <Phone className="w-6 h-6" />
                Call: 010-2871-2457
              </a>
              <a
                href="https://open.kakao.com/o/sd4IUeEh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
              >
                <MessageCircle className="w-6 h-6" />
                Chat on Kakao
              </a>
            </div>
            <p className="text-gray-300 mt-6">Available 24/7 for inquiries</p>
          </div>
        </div>
      </article>
    </div>
  )
}
