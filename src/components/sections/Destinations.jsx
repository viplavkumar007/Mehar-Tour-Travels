import React from 'react'
import { motion } from 'framer-motion'
import { destinations } from '../../data/siteContent'
import ScrollReveal from '../ScrollReveal'

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 bg-gradient-to-b from-brand-sky/30 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <span className="inline-block text-brand-orange text-sm font-bold uppercase tracking-widest mb-3">
            Popular Destinations
          </span>
          <h2 className="section-title">Where Do You Want To Go?</h2>
          <p className="section-subtitle">
            From the misty mountains of Himachal to the golden deserts of Rajasthan — we take you everywhere.
          </p>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-4">
          {destinations.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22,1,0.36,1] }}
              whileHover={{ scale: 1.08, y: -4 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full
                         bg-white border-2 border-gray-100 shadow-sm
                         hover:border-brand-orange hover:shadow-md hover:shadow-orange-100
                         cursor-pointer transition-all duration-200 group"
            >
              <span className="text-xl">{d.emoji}</span>
              <span className="font-semibold text-brand-navy text-sm group-hover:text-brand-orange transition-colors">
                {d.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.3} className="text-center mt-10">
          <p className="text-brand-navyLight/60 text-sm">
            Don't see your destination?{' '}
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior:'smooth' })}
              className="text-brand-orange font-semibold hover:underline"
            >
              Ask us — we go everywhere!
            </button>
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
