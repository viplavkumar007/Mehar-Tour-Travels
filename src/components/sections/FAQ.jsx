import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../../data/siteContent'
import ScrollReveal from '../ScrollReveal'

function FAQItem({ faq, index, isOpen, toggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.45 }}
      className={`rounded-2xl border overflow-hidden transition-all duration-200
                  ${isOpen ? 'border-brand-blue shadow-md shadow-blue-100' : 'border-gray-100 shadow-sm'}`}
    >
      <button
        onClick={toggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 p-5 text-left
                   bg-white hover:bg-brand-blueLight/30 transition-colors duration-200
                   focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-blue"
      >
        <span className="font-semibold text-brand-navy text-sm md:text-base pr-2">{faq.q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 text-brand-blue"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-1 text-brand-navyLight/70 text-sm leading-relaxed
                            border-t border-gray-100">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-white to-brand-sky/20">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <span className="inline-block text-brand-orange text-sm font-bold uppercase tracking-widest mb-3">
            FAQs
          </span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Have questions? We have answers. If you need more help, just call or WhatsApp us.
          </p>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
