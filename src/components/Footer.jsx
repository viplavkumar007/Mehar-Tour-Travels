import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
import { brand } from '../data/siteContent'

const navLinks = [
  { href: '#home',         label: 'Home' },
  { href: '#services',     label: 'Services' },
  { href: '#about',        label: 'About Us' },
  { href: '#destinations', label: 'Destinations' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#faq',          label: 'FAQ' },
  { href: '#contact',      label: 'Contact' },
]

export default function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }
  const waUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
    "Hello Mehar Tour and Travels! I need help with travel booking."
  )}`

  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={brand.logo} alt={brand.name} className="h-16 w-auto mb-4 drop-shadow-lg" />
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Your most trusted travel partner in Jalandhar. We craft journeys that create memories.
            </p>
            {/* Social – Instagram */}
            <div className="flex items-center gap-3">
              <a
                href={brand.instagramUrl}
                target="_blank" rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center gap-2 px-4 py-2 rounded-full
                           bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500
                           text-white text-sm font-semibold
                           hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
                @{brand.instagram}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-brand-orange mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-white/60 text-sm hover:text-white hover:translate-x-1
                               transition-all duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-brand-orange mb-4">Our Services</h4>
            <ul className="space-y-2">
              {['Air Tickets','Railway Tickets','Bus Tickets','Group Packages',
                'Hotel Booking','Pilgrimage Tours','International Tours'].map(s => (
                <li key={s}>
                  <span className="text-white/60 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-brand-orange mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${brand.phone}`}
                   className="flex items-start gap-3 text-white/70 hover:text-white transition-colors group">
                  <Phone size={15} className="mt-0.5 flex-shrink-0 text-brand-orange" />
                  <span className="text-sm">{brand.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={waUrl} target="_blank" rel="noopener noreferrer"
                   className="flex items-start gap-3 text-white/70 hover:text-white transition-colors">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span className="text-sm">WhatsApp Us</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${brand.email}`}
                   className="flex items-start gap-3 text-white/70 hover:text-white transition-colors">
                  <Mail size={15} className="mt-0.5 flex-shrink-0 text-brand-orange" />
                  <span className="text-sm break-all">{brand.email}</span>
                </a>
              </li>
              <li>
                <a href={brand.mapUrl} target="_blank" rel="noopener noreferrer"
                   className="flex items-start gap-3 text-white/70 hover:text-white transition-colors">
                  <MapPin size={15} className="mt-0.5 flex-shrink-0 text-brand-orange" />
                  <span className="text-sm leading-snug">{brand.address}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} {brand.name}. All rights reserved. | {brand.city}
          </p>
          <p className="text-white/30 text-xs">
            Explore The World With Us 🌍
          </p>
        </div>
      </div>
    </footer>
  )
}
