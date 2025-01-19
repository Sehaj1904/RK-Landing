'use client'

import Image from 'next/image'

const companies = [
  {
    name: 'Coinbase',
    logo: '/logos/coinbase.svg',
  },
  {
    name: 'Spotify',
    logo: '/logos/spotify.svg',
  },
  {
    name: 'Slack',
    logo: '/logos/slack.svg',
  },
  {
    name: 'Dropbox',
    logo: '/logos/dropbox.svg',
  },
  {
    name: 'Webflow',
    logo: '/logos/webflow.svg',
  },
  {
    name: 'Zoom',
    logo: '/logos/zoom.svg',
  },
]

export default function TrustedCompanies() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {companies.map((company) => (
            <div
              key={company.name}
              className="w-[120px] md:w-[150px] h-12 relative grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 