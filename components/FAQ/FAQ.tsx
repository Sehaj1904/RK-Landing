'use client'

import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

const faqs = [
  {
    question: 'Can I recover deleted files from desktop with this software?',
    answer: 'Yes, our software provides powerful recovery capabilities for deleted files from your desktop. It supports various file types and can recover files that were accidentally deleted, lost due to system crashes, or other common scenarios.'
  },
  {
    question: 'Can I recover deleted files from desktop with this software?',
    answer: 'Yes, our software provides powerful recovery capabilities for deleted files from your desktop. It supports various file types and can recover files that were accidentally deleted, lost due to system crashes, or other common scenarios.'
  },
  {
    question: 'Can I recover deleted files from desktop with this software?',
    answer: 'Yes, our software provides powerful recovery capabilities for deleted files from your desktop. It supports various file types and can recover files that were accidentally deleted, lost due to system crashes, or other common scenarios.'
  },
  {
    question: 'Can I recover deleted files from desktop with this software?',
    answer: 'Yes, our software provides powerful recovery capabilities for deleted files from your desktop. It supports various file types and can recover files that were accidentally deleted, lost due to system crashes, or other common scenarios.'
  },
  {
    question: 'Can I recover deleted files from desktop with this software?',
    answer: 'Yes, our software provides powerful recovery capabilities for deleted files from your desktop. It supports various file types and can recover files that were accidentally deleted, lost due to system crashes, or other common scenarios.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 3)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#FFA229] font-medium mb-2">FAQ</p>
          <h2 className="text-3xl font-bold text-[#2D2D2D]">Frequent Ask Questions</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {visibleFaqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full flex items-center justify-between p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#FFA229]"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-left font-medium text-gray-900 text-lg">{faq.question}</span>
                <ChevronRight
                  className={`w-6 h-6 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-90' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="p-6 bg-white shadow-md rounded-b-xl border-l-4 border-[#FFA229] mt-1">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}

          {!showAll && faqs.length > 3 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAll(true)}
                className="inline-flex items-center gap-2 bg-[#2B4570] text-white px-6 py-3 rounded-lg hover:bg-[#1e3255] transition-colors"
              >
                Show more
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 