import React from 'react'
import { motion } from 'framer-motion'
import { PhoneCall } from 'lucide-react'
import { brand } from '../data/siteContent'
import ScrollReveal from './ScrollReveal'

export default function CTAStrip() {
  const waUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    "Hello! I'd like to book a trip with Mehar Tour and Travels. Please share your best packages."
  )}`

  return (
    <section className="py-16 relative overflow-hidden">
      {/* animated gradient bg */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundSize: '200% 200%',
          backgroundImage: 'linear-gradient(135deg, #1A6DB5 0%, #F47920 35%, #1A2B4A 65%, #1A6DB5 100%)',
        }}
      />
      {/* glow pulse */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{ opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background: 'radial-gradient(ellipse at center, rgba(244,121,32,0.6) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
            Ready to Explore the World?
          </h2>
          <p className="text-white/75 text-lg mb-8">
            Get in touch today for free travel consultation and best package deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${brand.phone}`}
               className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full
                          font-bold text-brand-navy bg-white shadow-lg hover:shadow-xl
                          hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-sm">
              <PhoneCall size={17}/>
              Call Now: {brand.phoneDisplay}
            </a>
            <a href={waUrl} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full
                          font-bold text-white border-2 border-white/70 backdrop-blur-sm
                          hover:bg-white/20 hover:-translate-y-0.5 active:translate-y-0
                          transition-all duration-200 text-sm">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
