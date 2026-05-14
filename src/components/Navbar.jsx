import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { brand } from '../data/siteContent'

const WhatsAppIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)

const navLinks = [
  { href: '#home',         label: 'Home' },
  { href: '#services',     label: 'Services' },
  { href: '#about',        label: 'About' },
  { href: '#destinations', label: 'Destinations' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#faq',          label: 'FAQ' },
  { href: '#payments',     label: 'Payments' },
  { href: '#contact',      label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const mobileNavHeight = 56

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map(l => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (!el) return

    const scroll = () => {
      const offset = window.innerWidth < 768 ? mobileNavHeight : 96
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' })
    }

    if (window.innerWidth < 768 && menuOpen) {
      setMenuOpen(false)
      window.setTimeout(scroll, 260)
      return
    }

    scroll()
  }

  /* ── transparent when at top, glass when scrolled ── */
  const navBg = scrolled
    ? 'glass shadow-md shadow-brand-navy/10'
    : 'glass-dark shadow-lg shadow-black/20 border-b border-white/10'

  return (
    <>
      {/* ── Desktop / large-screen Navbar ── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}
                    hidden md:block`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex h-24 w-full max-w-[96rem] items-center justify-between px-6 lg:px-8">
          {/* Logo + Brand Name */}
          <a href="#home" onClick={e => { e.preventDefault(); scrollTo('#home') }}
             className="flex items-center gap-3 flex-shrink-0">
            <img src={brand.logo} alt={brand.name} className="h-20 w-auto drop-shadow-md" />
            <div className="flex flex-col leading-tight">
              <span className={`font-display font-bold text-lg xl:text-xl transition-colors duration-300
                ${scrolled ? 'text-brand-navy' : 'text-white'}`}>
                Mehar Tour and Travels
              </span>
              <span className={`text-xs font-medium tracking-wide transition-colors duration-300
                ${scrolled ? 'text-brand-orange' : 'text-orange-300'}`}>
                {brand.tagline}
              </span>
            </div>
          </a>

          {/* Links */}
          <ul className="flex items-center gap-2 rounded-full border border-white/10 bg-black/10 px-3 py-2 backdrop-blur-sm">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <button
                  onClick={() => scrollTo(href)}
                  className={`nav-link px-3 py-2 rounded-full
                    ${scrolled
                      ? 'text-brand-navy hover:text-brand-orange hover:bg-brand-blueLight/70'
                      : 'text-white hover:text-white hover:bg-white/12'}
                    ${activeSection === href.replace('#','')
                      ? scrolled
                        ? 'bg-white text-brand-orange shadow-sm'
                        : 'bg-white/16 text-white shadow-sm'
                      : ''}`}
                >
                  {label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-brand-orange rounded-full transition-all duration-300
                    ${activeSection === href.replace('#','') ? 'w-full' : 'w-0'}`} />
                </button>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-shrink-0 items-center gap-2">
            <a
              href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent("Hello Mehar Tour and Travels! I'm interested in booking a trip.")}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold px-4 py-2.5 rounded-xl
                         bg-green-500 hover:bg-green-600 text-white transition-colors duration-200 shadow-lg shadow-green-900/20"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
            <a href={`tel:${brand.phone}`}
               className="btn-primary whitespace-nowrap text-sm py-2.5 px-4">
              <Phone size={15} />
              Call Now
            </a>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile Navbar ── ALWAYS visible, above hero, not overlapping ── */}
      <div className="md:hidden sticky top-0 z-50 glass shadow-md shadow-brand-navy/10">
        <div className="flex items-center justify-between px-4 h-14">
          <a href="#home" onClick={e => { e.preventDefault(); scrollTo('#home') }}>
            <img src={brand.logo} alt={brand.name} className="h-10 w-auto" />
          </a>
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="p-2 rounded-xl text-brand-navy hover:bg-brand-blueLight transition-colors"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden bg-white border-t border-gray-100"
            >
              <ul className="px-4 py-3 space-y-1">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <button
                      onClick={() => scrollTo(href)}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors
                        ${activeSection === href.replace('#','')
                          ? 'bg-brand-blueLight text-brand-blue'
                          : 'text-brand-navy hover:bg-gray-50'}`}
                    >
                      {label}
                    </button>
                  </li>
                ))}
                <li className="pt-2 flex gap-2">
                  <a
                    href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent("Hello Mehar Tour and Travels! I'm interested in booking a trip.")}`}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 flex-1 text-sm font-semibold px-4 py-2.5 rounded-xl
                               bg-green-500 hover:bg-green-600 text-white transition-colors duration-200"
                  >
                    <WhatsAppIcon />
                    WhatsApp
                  </a>
                  <a href={`tel:${brand.phone}`} className="btn-primary flex-1 justify-center text-sm py-2.5">
                    <Phone size={15} />
                    Call Now
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
