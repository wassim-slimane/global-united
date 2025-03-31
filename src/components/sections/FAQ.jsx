import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FAQ() {
  const faqs = [
    {
      question: "What are the costs?",
      answer: "Our training programs start at $160 per month."
    },
    {
      question: "How often do training sessions take place?",
      answer: "We hold multiple sessions per week, focusing on skill development and competition preparation."
    },
    {
      question: "What equipment is required?",
      answer: "Players should bring their own cleats and training gear. Jerseys will be provided."
    }
  ]

  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section id="faq" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <h2 className="mb-12 text-center font-heading text-4xl font-bold text-secondary md:text-5xl">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg bg-white shadow-lg"
              >
                <button
                  className="flex w-full items-center justify-between p-6 text-left font-bold text-secondary"
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                >
                  {faq.question}
                  <svg
                    className={`h-6 w-6 transform transition-transform ${
                      activeIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-gray-200 p-6 text-gray-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}