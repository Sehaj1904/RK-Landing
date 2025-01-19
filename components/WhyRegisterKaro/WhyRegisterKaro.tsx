'use client'

type StatProps = {
  number: string
  label: string
  color: string
}

const Stat = ({ number, label, color }: StatProps) => (
  <div className="text-center">
    <div className={`text-4xl lg:text-5xl font-bold mb-2 ${color}`}>{number}</div>
    <div className="text-sm lg:text-base text-gray-800 font-medium">{label}</div>
  </div>
)

const stats = [
  { number: '1M+', label: 'CUSTOMERS', color: 'text-[#6B7280]' },
  { number: '12+', label: 'YEARS OF EXCELLENCE', color: 'text-[#DC2626]' },
  { number: '41+', label: 'R&D ENGINEERS', color: 'text-[#92400E]' },
  { number: '78+', label: 'COUNTRIES', color: 'text-[#EA580C]' },
  { number: '3287+', label: 'PARTNERS', color: 'text-[#B45309]' },
  { number: '41+', label: 'AWARDS RECEIVED', color: 'text-[#78350F]' },
]

export default function WhyRegisterKaro() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#FFA229] font-medium mb-2">WHY REGISTER KARO</p>
          <h2 className="text-3xl font-bold text-[#2D2D2D]">Some Numbers are important</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <Stat
              key={index}
              number={stat.number}
              label={stat.label}
              color={stat.color}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 