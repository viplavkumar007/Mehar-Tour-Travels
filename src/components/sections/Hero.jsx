import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, PhoneCall } from 'lucide-react'
import { brand, destinations, hero } from '../../data/siteContent'
import businessCard from '../../assets/business-card.png'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const [activeDestination, setActiveDestination] = useState(0)
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveDestination(current => (current + 1) % destinations.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', onResize, { passive: true })
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const currentDestination = destinations[activeDestination]
  const mobilePositions = {
    Manali: '62% center',
    Shimla: '58% center',
    Goa: '60% center',
    Kerala: '68% center',
    Rajasthan: '62% center',
    'Char Dham': '60% center',
    Kashmir: '64% center',
    Dubai: '57% center',
  }

  const waUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    "Hello Mehar Tour and Travels! I'm interested in booking a trip. Please share details."
  )}`

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-brand-navy" />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentDestination.image}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${currentDestination.image})`,
            backgroundPosition: isMobile
              ? (mobilePositions[currentDestination.name] ?? '60% center')
              : 'center',
            backgroundSize: 'cover',
          }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/36 via-brand-blueDark/24 to-brand-blue/18" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, #F47920 0%, transparent 45%),
                            radial-gradient(circle at 80% 70%, #1A6DB5 0%, transparent 45%),
                            radial-gradient(circle at 60% 20%, #4CAF50 0%, transparent 35%)`,
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,18,36,0.08)_0%,rgba(8,18,36,0.24)_100%)]" />

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" fillOpacity="1" />
        </svg>
      </div>

      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        className="absolute right-10 top-20 hidden h-32 w-32 rounded-full border-2 border-white/10 lg:block"
      />
      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
        className="absolute bottom-32 left-8 hidden h-20 w-20 rounded-full border-2 border-orange-400/20 lg:block"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-32 pt-24 md:pt-28 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <motion.div {...fadeUp(0.1)} className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-brand-orange" />
                {currentDestination.name}
              </span>

              <a
                href={brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/25"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
                @{brand.instagram}
              </a>

              <a
                href={brand.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-[#1877F2] px-4 py-1.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1669d9]"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.025 4.388 11.02 10.125 11.927v-8.437H7.078v-3.49h3.047V9.41c0-3.017 1.792-4.684 4.533-4.684 1.313 0 2.686.236 2.686.236v2.963H15.83c-1.49 0-1.955.931-1.955 1.886v2.263h3.328l-.532 3.49h-2.796V24C19.612 23.093 24 18.098 24 12.073Z" />
                </svg>
                Facebook
              </a>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="font-display text-5xl font-bold leading-tight text-white text-shadow md:text-6xl lg:text-7xl"
            >
              {hero.headline}
              <br />
              <span className="text-brand-orange">{hero.headlineAccent}</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.35)}
              className="mt-5 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl"
            >
              {hero.subheadline}
            </motion.p>

            <motion.div {...fadeUp(0.5)} className="mt-8 flex flex-wrap gap-4">
              <button onClick={scrollToContact} className="btn-primary px-8 py-3.5 text-base">
                <PhoneCall size={18} />
                {hero.cta1}
              </button>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-8 py-3.5 text-base"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                {hero.cta2}
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.58)} className="mt-6 max-w-lg">
              <p className="text-sm uppercase tracking-[0.28em] text-white/55">
                Now Showing
              </p>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentDestination.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="mt-2"
                >
                  <div className="font-display text-2xl text-white">{currentDestination.name}</div>
                  <div className="mt-1 text-sm text-white/70">{currentDestination.blurb}</div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            <motion.div {...fadeUp(0.65)} className="mt-10 grid grid-cols-4 gap-4">
              {hero.stats.map(stat => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-2xl font-bold text-brand-orange md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-0.5 text-xs text-white/60">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden items-center justify-center lg:flex"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-3xl bg-white opacity-30 blur-3xl" />
              <div
                className="relative rounded-3xl border border-white/40 bg-white p-4 shadow-2xl"
                style={{
                  boxShadow: '0 25px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.2)',
                }}
              >
                <img
                  src={businessCard}
                  alt="Mehar Tour and Travels Business Information"
                  className="block w-80 rounded-2xl xl:w-96"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 text-white/50 md:block"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  )
}
