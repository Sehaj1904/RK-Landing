import { FileText, CreditCard, UserCheck, Mail } from 'lucide-react'
import Image from 'next/image'

const steps = [
  {
    icon: '/process1.svg',
    title: 'Fill up Application Form',
  },
  {
    icon: '/process2.svg',
    title: 'Make Online Payment',
  },
  {
    icon: '/process3.svg',
    title: 'Executive will Process Application',
  },
  {
    icon: '/process4.svg',
    title: 'Get Confirm Mail',
  },
]

export default function ProcessSteps() {
  return (
    <section className="py-16 bg-[#FFA229]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <span key={index} className="flex items-center text-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                <Image 
                  src={step.icon}
                  alt={step.title}
                  width={64}
                  height={64}
                />
              </div>
              <div className="text-md font-semibold ml-10">{step.title}</div>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

