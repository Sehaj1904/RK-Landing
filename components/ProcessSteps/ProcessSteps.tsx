import { FileText, CreditCard, UserCheck, Mail } from 'lucide-react'

const steps = [
  {
    icon: FileText,
    title: 'Fill up Application Form',
    color: 'bg-red-100 text-red-500',
  },
  {
    icon: CreditCard,
    title: 'Make Online Payment',
    color: 'bg-green-100 text-green-500',
  },
  {
    icon: UserCheck,
    title: 'Executive will Process Application',
    color: 'bg-orange-100 text-orange-500',
  },
  {
    icon: Mail,
    title: 'Get Confirm Mail',
    color: 'bg-blue-100 text-blue-500',
  },
]

export default function ProcessSteps() {
  return (
    <section className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

