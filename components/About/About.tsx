import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function About() {
  return (
    <div className="py-16">
            <div className="absolute right-0 -z-10">
            <Image
              src="/right-side-team-design.svg"
              alt="right-side-team-design"
              width={144}
              height={558}
            />
          </div>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#FFA229] font-medium">WELCOME TO REGISTERKARO.IN</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              About <span className="text-[#FFA229]">Register Karo</span>
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We have been using Intelegencia as our DevOps vendor for our field service
                applications over the last couple of years and I'm extremely pleased with
                their performance, ability to execute, and willingness to adapt in our ever changing
                environment. Perry is an outstanding leader who is fanatical about
                customer satisfaction. He has built a solid team which has consistently delivered
                on projects thereby exceeding everyone's expectations.
              </p>
              <p>
                I would strongly recommend their services to any organization that is looking for
                solid, reliable, and predictable outcomes.
              </p>
            </div>
            <Button 
              variant="default"
              size="lg"
              className="bg-[#2B4570] hover:bg-blue-900 mt-8 text-white"
            >
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border-4 border-orange-500 rounded-lg">
              <Image
                src="/group-pic.png"
                alt="Register Karo Team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

