import React from 'react'
import { motion } from 'framer-motion'
import { PhoneCall, MessageCircle, Instagram, ChevronDown } from 'lucide-react'
import { brand, hero } from '../../data/siteContent'

const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 40 },
  animate:   { opacity: 1, y: 0 },
  transition:{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const waUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    "Hello Mehar Tour and Travels! I'm interested in booking a trip. Please share details."
  )}`

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-blueDark to-brand-blue" />
      {/* mesh overlay */}
      <div className="absolute inset-0 opacity-20"
           style={{
             backgroundImage: `radial-gradient(circle at 20% 30%, #F47920 0%, transparent 45%),
                               radial-gradient(circle at 80% 70%, #1A6DB5 0%, transparent 45%),
                               radial-gradient(circle at 60% 20%, #4CAF50 0%, transparent 35%)`,
           }} />
      {/* wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg"
             className="w-full" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" fillOpacity="1"/>
        </svg>
      </div>

      {/* floating circles decoration */}
      <motion.div animate={{ y: [0,-18,0] }} transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        className="absolute top-20 right-10 w-32 h-32 rounded-full border-2 border-white/10 hidden lg:block" />
      <motion.div animate={{ y: [0,14,0] }} transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
        className="absolute bottom-32 left-8 w-20 h-20 rounded-full border-2 border-orange-400/20 hidden lg:block" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 md:pt-28 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left – Text */}
          <div>
            {/* Instagram badge */}
            <motion.a
              {...fadeUp(0.1)}
              href={brand.instagramUrl}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                         bg-white/15 border border-white/30 text-white text-sm font-medium
                         hover:bg-white/25 transition-all duration-200 mb-6 backdrop-blur-sm"
            >
              {/* Instagram SVG icon */}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
              @{brand.instagram}
            </motion.a>

            <motion.h1 {...fadeUp(0.2)}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-shadow">
              {hero.headline}
              <br />
              <span className="text-brand-orange">{hero.headlineAccent}</span>
            </motion.h1>

            <motion.p {...fadeUp(0.35)}
              className="mt-5 text-white/80 text-lg md:text-xl max-w-xl leading-relaxed">
              {hero.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.5)} className="mt-8 flex flex-wrap gap-4">
              <button onClick={scrollToContact} className="btn-primary text-base px-8 py-3.5">
                <PhoneCall size={18} />
                {hero.cta1}
              </button>
              <a href={waUrl} target="_blank" rel="noopener noreferrer"
                 className="btn-secondary text-base px-8 py-3.5">
                {/* WhatsApp icon */}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                {hero.cta2}
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div {...fadeUp(0.65)}
              className="mt-10 grid grid-cols-4 gap-4">
              {hero.stats.map(s => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-brand-orange font-display">{s.value}</div>
                  <div className="text-white/60 text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right – Business Card Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="relative"
            >
              {/* outer glow */}
              <div className="absolute -inset-6 rounded-3xl blur-3xl opacity-30 bg-white" />
              {/* white card frame */}
              <div className="relative bg-white rounded-3xl p-4 shadow-2xl border border-white/40"
                   style={{ boxShadow: '0 25px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.2)' }}>
                <img
                  src="/src/assets/business-card.png"
                  alt="Mehar Tour and Travels – Business Information"
                  className="w-80 xl:w-96 rounded-2xl block"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        animate={{ y: [0,8,0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 z-10 hidden md:block"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  )
}
