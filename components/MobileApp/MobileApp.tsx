'use client'

import Image from 'next/image'

export default function MobileApp() {
  return (
    <section className="bg-[#2B4570] text-white py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-4xl font-bold mb-4">
              Manage Your Services by your Mobile Phone
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg">
              Download our app to manage and track your services. Our app enables you to stay in touch with our experts and aids you in tracking your progress.
            </p>
            
            <div>
              <h3 className="text-xl mb-4">Get the App</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="bg-white rounded-lg p-2 hover:opacity-90 transition-opacity"
                >
                  <Image
                    src="/app-store-badge.png"
                    alt="Download on App Store"
                    width={150}
                    height={50}
                    className="h-12 w-auto"
                  />
                </a>
                <a 
                  href="#" 
                  className="bg-white rounded-lg p-2 hover:opacity-90 transition-opacity"
                >
                  <Image
                    src="/google-play-badge.png"
                    alt="Get it on Google Play"
                    width={150}
                    height={50}
                    className="h-12 w-auto"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Images */}
          <div className="lg:w-1/2 relative">
            <div className="relative h-[600px] w-full">
              {/* Back Phone */}
              <div className="absolute right-0 top-0">
                <Image
                  src="/phone-mockup-2.png"
                  alt="Mobile app screenshot"
                  width={300}
                  height={600}
                  className="object-contain"
                />
              </div>
              {/* Front Phone */}
              <div className="absolute right-32 top-10">
                <Image
                  src="/phone-mockup-1.png"
                  alt="Mobile app screenshot"
                  width={300}
                  height={600}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 