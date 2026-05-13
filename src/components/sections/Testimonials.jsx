import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { testimonials } from '../../data/siteContent'
import ScrollReveal from '../ScrollReveal'

function StarRow({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-brand-navy to-brand-blueDark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <span className="inline-block text-brand-orange text-sm font-bold uppercase tracking-widest mb-3">
            Happy Travellers
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            What Our Customers Say
          </h2>
          <p className="text-white/60 text-lg mt-3 max-w-xl mx-auto">
            Thousands of families from Jalandhar and Punjab have trusted us with their travels.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22,1,0.36,1] }}
              whileHover={{ y: -6 }}
              className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6
                         hover:bg-white/15 transition-all duration-300 relative"
            >
              <Quote size={28} className="text-brand-orange/50 mb-3" />
              <p className="text-white/80 text-sm leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>

              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/10">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarColor}
                                 flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-white/50 text-xs">{t.location}</div>
                  <StarRow count={t.rating} />
                </div>
              </div>

              <span className="absolute top-4 right-4 text-xs bg-brand-orange/20 text-brand-orange
                               px-2 py-0.5 rounded-full font-medium">
                {t.tour}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
