import { Shield, CheckCircle, Smile, Users } from 'lucide-react'
import Image from 'next/image'

const features = [
  {
    icon: '/features2.svg',
    title: 'Confidential & Safe',
    description: 'All your private information is safe with us',
    bgColor: 'bg-red-50'
  },
  {
    icon: '/features3.svg',
    title: 'No Hidden Fee',
    description: 'Everything is put before you with no hidden charges or conditions',
    bgColor: 'bg-green-50'
  },
  {
    icon: '/features4.svg',
    title: 'Expert CA/CS Assistance',
    description: 'Prompt support from our in-house expert professionals',
    bgColor: 'bg-red-50'
  },
  {
    icon: '/features5.svg',
    title: 'Confidential & Safe',
    description: 'All your private information is safe with us',
    bgColor: 'bg-red-50'
  }
]

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left side content */}
          <div className="space-y-8">
            <div>
              <span className="text-[#FFA229] font-medium">WHY REGISTERKARO.IN</span>
              <h2 className="text-3xl mt-2">Why Choose Register Karo</h2>
              <p className="text-gray-600 mt-4 max-w-3xl">
                It is with consistent services and results that build trust with the people and that in
                turn help us to serve the business better.
              </p>
            </div>
            <div className={`p-8 bg-blue-50 rounded-lg text-center mt-45 w-[300px] h-[250px] flex flex-col items-center justify-center ml-auto`}>
              <div className="flex justify-center mb-6">
              <Image 
                        src="/features1.svg"
                        alt="Guaranteed Satisfaction"
                        width={48}
                        height={48}
                      />
              </div>
              <h3 className="text-xl mb-4">Guaranteed Satisfaction</h3>
              <p className="text-gray-600 text-md">We ensure that you stay 100% satisfied with our offered services</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {features.slice(0, 2).map((feature, index) => {
                return (
                  <div
                    key={index}
                    className={`p-8 ${feature.bgColor} rounded-lg text-center`}
                  >
                    <div className="flex justify-center mb-6">
                      <Image 
                        src={feature.icon}
                        alt={feature.title}
                        width={48}
                        height={48}
                      />
                    </div>
                    <h3 className="text-xl mb-4">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                )
              })}
            </div>

            <div className="grid grid-cols-2 gap-6">
              {features.slice(2, 4).map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className={`p-8 ${feature.bgColor} rounded-lg text-center`}
                  >
                    <div className="flex justify-center mb-6">
                      <Image 
                        src={feature.icon}
                        alt={feature.title}
                        width={48}
                        height={48}
                      />
                    </div>
                    <h3 className="text-xl mb-4">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

