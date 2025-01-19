import Image from 'next/image'
import Link from 'next/link'
import { Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-orange-50 to-blue-50 pt-12 pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <Star className="h-6 w-6 text-yellow-400 fill-current" />
              <span className="font-medium text-gray-800">Google Rating</span>
              <img 
                src="/google-stars.svg" 
                alt="5 star rating" 
                width={80} 
                height={16}
                className="h-4 w-auto"
              />
            </div>

            <div className="space-y-2">
              <h2 className="text-6xl font-bold leading-tight">
                Your trusted partner
                <br />
                for compliance business needs
              </h2>
            </div>

            <p className="text-lg text-gray-600 max-w-xl">
              An online business compliance platform that helps entrepreneurs and other individuals with various,{' '}
              <span className="text-gray-800">registrations, tax filings</span>, and other{' '}
              <span className="text-gray-800">legal matters</span>.
            </p>

            <div className="grid grid-cols-3 gap-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <img 
                    src="/rating.svg" 
                    alt="Rating icon" 
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#FFA229]">4.5+</div>
                  <div className="text-sm text-gray-600">Customer Rating</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-100 rounded-lg">
                <img 
                    src="/person.svg" 
                    alt="Person icon" 
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#FFA229]">20,000+</div>
                  <div className="text-sm text-gray-600">Clients</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-100 rounded-lg">
                <img 
                    src="/handshake.svg" 
                    alt="Handshake icon" 
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#FFA229]">99.8%</div>
                  <div className="text-sm text-gray-600">Financial Stability</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <Link
                href="/talk-to-expert"
                className="bg-[#2B4570] text-white px-8 py-4 rounded-md hover:bg-blue-900 transition-colors font-medium"
              >
                Talk An Expert
              </Link>
              <Link href="#how-it-works" className="flex items-center gap-3 text-gray-700 hover:text-[#FFA229]">
                <span className="bg-[#FFA229] rounded-full p-2.5">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <span className="font-medium">See how it works</span>
              </Link>
            </div>
          </div>

          <div className="relative">
            <Image
              src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/hero-illustration.png`}
              alt="Business compliance illustration"
              width={700}
              height={600}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <nav className="fixed right-0 top-20 -translate-y-1/2 z-50">
          {[
            'Annual Compliance',
            'Payroll Services',
            'Company Formation',
            'Annual Compliance'
          ].map((item) => (
            <Link
              key={`${item}-${Math.random()}`}
              href={`/${item.toLowerCase().replace(' ', '-')}`}
              className="block bg-white py-3 px-8 text-gray-700 hover:text-[#FFA229] rounded-l-xl shadow-xl mb-6 last:mb-0"
            >
              {item}
            </Link>
          ))}
        </nav>
        <img 
          src="/hero.svg" 
          alt="Hero illustration" 
          className="h-full w-auto"
          width={600}
          height={485}
        />
      </div>
    </section>
  )
}

