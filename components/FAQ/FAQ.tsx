'use client'

import { useState } from 'react'
import { ChevronRight, ArrowRight } from 'lucide-react'

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

  // Show only first 3 FAQs initially
  const visibleFaqs = showAll ? faqs : faqs.slice(0, 3)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-medium mb-2">FAQ</p>
          <h2 className="text-3xl font-bold text-[#2D2D2D]">Frequent Ask Questions</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {visibleFaqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-gray-200 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-left font-medium text-gray-900">{faq.question}</span>
                <ChevronRight
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-90' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white border border-t-0 border-gray-100 rounded-b-lg">
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
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 