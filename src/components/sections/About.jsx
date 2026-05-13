import React from 'react'
import { about } from '../../data/siteContent'
import ScrollReveal from '../ScrollReveal'

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left – Visual */}
          <ScrollReveal direction="right">
            <div className="relative">
              {/* Main card */}
              <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-brand-navy to-brand-blue p-1 shadow-2xl">
                <div className="rounded-[22px] bg-gradient-to-br from-brand-navy to-brand-blue p-10 text-white">
                  <div className="text-6xl mb-4">🌏</div>
                  <h3 className="font-display text-2xl font-bold mb-3">15+ Years of Trust</h3>
                  <p className="text-white/75 leading-relaxed text-sm">
                    Since our founding in Jalandhar, we have been crafting journeys that families
                    remember forever. Every trip is personal to us.
                  </p>
                  {/* mini stats */}
                  <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/20">
                    {[['5000+','Travellers'],['200+','Packages'],['50+','Destinations']].map(([v,l]) => (
                      <div key={l} className="text-center">
                        <div className="text-2xl font-bold text-brand-orange font-display">{v}</div>
                        <div className="text-white/60 text-xs mt-0.5">{l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-brand-orange text-white rounded-2xl
                              px-5 py-3 shadow-xl shadow-orange-200 flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <div>
                  <div className="font-bold text-sm">5.0 Rating</div>
                  <div className="text-white/80 text-xs">Google Reviews</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right – Text */}
          <ScrollReveal direction="left" delay={0.15}>
            <span className="inline-block text-brand-orange text-sm font-bold uppercase tracking-widest mb-3">
              Our Story
            </span>
            <h2 className="section-title mb-6">{about.headline}</h2>
            {about.story.map((p, i) => (
              <p key={i} className="text-brand-navyLight/70 leading-relaxed mb-4">{p}</p>
            ))}

            {/* Highlights grid */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {about.highlights.map(h => (
                <div key={h.title}
                     className="flex gap-3 p-4 rounded-2xl bg-brand-sky/40 hover:bg-brand-sky/70
                                transition-colors duration-200">
                  <span className="text-2xl flex-shrink-0">{h.icon}</span>
                  <div>
                    <div className="font-semibold text-brand-navy text-sm">{h.title}</div>
                    <div className="text-brand-navyLight/60 text-xs mt-0.5 leading-relaxed">{h.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
