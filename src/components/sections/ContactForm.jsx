import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle, X } from 'lucide-react'
import { brand, contact } from '../../data/siteContent'
import ScrollReveal from '../ScrollReveal'
import paymentQr from '../../assets/payment-qr.jpeg'

function Toast({ type, msg, onClose }) {
  return (
    <motion.div
      initial={{ opacity:0, y:-30, scale:0.9 }}
      animate={{ opacity:1, y:0, scale:1 }}
      exit={{ opacity:0, y:-20, scale:0.9 }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3
                  px-6 py-3.5 rounded-2xl shadow-2xl text-white font-medium text-sm
                  ${type==='success' ? 'bg-green-500' : 'bg-red-500'}`}
      role="alert" aria-live="assertive"
    >
      {type==='success' ? <CheckCircle size={18}/> : <AlertCircle size={18}/>}
      {msg}
      <button onClick={onClose} className="ml-2 hover:opacity-70 transition-opacity" aria-label="Close">
        <X size={16}/>
      </button>
    </motion.div>
  )
}

const EMPTY = { name:'', phone:'', email:'', service:'', destination:'', message:'' }

export default function ContactForm() {
  const [form, setForm]     = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [toast, setToast]   = useState(null)

  const set = (k, v) => {
    setForm(f => ({ ...f, [k]: v }))
    setErrors(e => ({ ...e, [k]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.phone.trim() || !/^[0-9]{10}$/.test(form.phone.trim()))
      e.phone = 'Enter valid 10-digit mobile number'
    if (!form.service)        e.service = 'Please select a service'
    return e
  }

  const showToast = (type, msg) => {
    setToast({ type, msg })
    setTimeout(() => setToast(null), 4000)
  }

  const buildWhatsAppMessage = () => {
    return encodeURIComponent(
      `Hello Mehar Tour and Travels! 👋\n\n` +
      `*Name:* ${form.name}\n` +
      `*Phone:* ${form.phone}\n` +
      `${form.email ? `*Email:* ${form.email}\n` : ''}` +
      `*Service:* ${form.service}\n` +
      `${form.destination ? `*Destination:* ${form.destination}\n` : ''}` +
      `${form.message ? `*Message:* ${form.message}\n` : ''}\n` +
      `Please share the best available packages and pricing. Thank you!`
    )
  }

  const buildEmailBody = () => {
    return encodeURIComponent(
      `Hello Mehar Tour and Travels,\n\n` +
      `I am interested in booking with you. Here are my details:\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `${form.email ? `Email: ${form.email}\n` : ''}` +
      `Service Required: ${form.service}\n` +
      `${form.destination ? `Preferred Destination: ${form.destination}\n` : ''}` +
      `${form.message ? `\nAdditional Details:\n${form.message}` : ''}\n\n` +
      `Please share available packages and pricing at your earliest convenience.\n\nThank you!`
    )
  }

  const handleSubmit = (channel) => {
    const e = validate()
    if (Object.keys(e).length) {
      setErrors(e)
      showToast('error', 'Please fix the errors before submitting.')
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      if (channel === 'whatsapp') {
        window.open(`https://wa.me/${brand.whatsapp}?text=${buildWhatsAppMessage()}`, '_blank')
        showToast('success', 'Opening WhatsApp with your details!')
      } else {
        const subject = encodeURIComponent(`Tour Enquiry from ${form.name} - Mehar Tour and Travels`)
        window.open(`mailto:${brand.email}?subject=${subject}&body=${buildEmailBody()}`, '_blank')
        showToast('success', 'Opening your email app with pre-filled details!')
      }
      setForm(EMPTY)
    }, 800)
  }

  const inputCls = (field) =>
    `w-full px-4 py-3 rounded-xl border text-sm font-medium text-brand-navy
     placeholder:text-gray-400 bg-white outline-none transition-all duration-200
     focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue
     ${errors[field] ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300'}`

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-brand-sky/20 to-white">
      <AnimatePresence>{toast && <Toast {...toast} onClose={() => setToast(null)}/>}</AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <span className="inline-block text-brand-orange text-sm font-bold uppercase tracking-widest mb-3">
            Get In Touch
          </span>
          <h2 className="section-title">Plan Your Trip With Us</h2>
          <p className="section-subtitle">
            Fill in your details and we'll reach out with the best packages and pricing.
            Or reach us directly via WhatsApp or phone!
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <ScrollReveal direction="right" className="lg:col-span-2">
            <div className="space-y-5">
              {/* Phone */}
              <a href={`tel:${brand.phone}`}
                 className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100
                            shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group">
                <div className="glossy-icon bg-gradient-to-br from-brand-blue to-brand-blueDark shadow-blue-200 shadow-md w-12 h-12">
                  <Phone size={18} className="relative z-10"/>
                </div>
                <div>
                  <div className="text-xs text-brand-navyLight/50 font-medium uppercase tracking-wide">Call Us</div>
                  <div className="font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
                    {brand.phoneDisplay}
                  </div>
                </div>
              </a>

              {/* WhatsApp */}
              <a href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage)}`}
                 target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100
                            shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group">
                <div className="glossy-icon bg-gradient-to-br from-green-500 to-green-700 shadow-green-200 shadow-md w-12 h-12">
                  <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-brand-navyLight/50 font-medium uppercase tracking-wide">WhatsApp</div>
                  <div className="font-bold text-brand-navy group-hover:text-green-600 transition-colors">
                    {brand.phoneDisplay}
                  </div>
                </div>
              </a>

              {/* Email */}
              <a href={`mailto:${brand.email}`}
                 className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100
                            shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group">
                <div className="glossy-icon bg-gradient-to-br from-brand-orange to-orange-600 shadow-orange-200 shadow-md w-12 h-12">
                  <Mail size={18} className="relative z-10"/>
                </div>
                <div>
                  <div className="text-xs text-brand-navyLight/50 font-medium uppercase tracking-wide">Email</div>
                  <div className="font-bold text-brand-navy text-xs group-hover:text-brand-orange transition-colors break-all">
                    {brand.email}
                  </div>
                </div>
              </a>

              {/* Address */}
              <a href={brand.mapUrl} target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100
                            shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group">
                <div className="glossy-icon bg-gradient-to-br from-purple-500 to-purple-700 shadow-purple-200 shadow-md w-12 h-12">
                  <MapPin size={18} className="relative z-10"/>
                </div>
                <div>
                  <div className="text-xs text-brand-navyLight/50 font-medium uppercase tracking-wide">Visit Us</div>
                  <div className="font-semibold text-brand-navy text-sm leading-snug group-hover:text-purple-600 transition-colors">
                    {brand.address}
                  </div>
                </div>
              </a>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal direction="left" delay={0.15} className="lg:col-span-3">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8">
              <h3 className="font-display text-xl font-bold text-brand-navy mb-6">{contact.formTitle}</h3>

              <div className="space-y-4">
                {/* Row 1 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text" placeholder="Your Full Name *"
                      value={form.name} onChange={e => set('name', e.target.value)}
                      className={inputCls('name')} aria-label="Full Name"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="tel" placeholder="Mobile Number * (10 digits)"
                      value={form.phone} onChange={e => set('phone', e.target.value)}
                      className={inputCls('phone')} aria-label="Mobile Number" maxLength={10}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="email" placeholder="Email Address (optional)"
                    value={form.email} onChange={e => set('email', e.target.value)}
                    className={inputCls('email')} aria-label="Email Address"
                  />
                  <div>
                    <select
                      value={form.service} onChange={e => set('service', e.target.value)}
                      className={inputCls('service')} aria-label="Service"
                    >
                      <option value="">Select Service *</option>
                      {contact.services.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                  </div>
                </div>

                {/* Destination */}
                <input
                  type="text" placeholder="Preferred Destination (e.g. Manali, Dubai)"
                  value={form.destination} onChange={e => set('destination', e.target.value)}
                  className={inputCls('destination')} aria-label="Destination"
                />

                {/* Message */}
                <textarea
                  rows={4} placeholder="Any special requirements, travel dates, group size..."
                  value={form.message} onChange={e => set('message', e.target.value)}
                  className={`${inputCls('message')} resize-none`}
                  aria-label="Message"
                />

                {/* Submit buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={() => handleSubmit('whatsapp')}
                    disabled={loading}
                    className="btn-secondary flex-1 justify-center py-3.5 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        Send via WhatsApp
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => handleSubmit('email')}
                    disabled={loading}
                    className="btn-primary flex-1 justify-center py-3.5 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <Send size={16}/>
                    Send via Email
                  </button>
                </div>

                <p className="text-xs text-brand-navyLight/40 text-center">
                  Your enquiry will be pre-filled and sent directly. We respond within 1 hour.
                </p>

                <div className="mt-3 rounded-2xl border border-brand-blue/10 bg-gradient-to-br from-brand-blueLight/40 via-white to-brand-orangeLight/40 p-4 sm:p-5">
                  <div className="flex flex-col gap-5 md:flex-row md:items-center">
                    <div className="flex-1">
                      <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-orange">
                        Accepts Payments
                      </p>
                      <h4 className="mt-2 font-display text-xl font-bold text-brand-navy">
                        Scan QR To Pay Securely
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-brand-navyLight/70">
                        We accept UPI payments for bookings and trip advances. Scan the QR code
                        to pay Mehar Tour and Travels directly.
                      </p>
                    </div>

                    <div className="mx-auto w-full max-w-[220px] rounded-2xl bg-white p-3 shadow-lg shadow-brand-blue/10 ring-1 ring-slate-100">
                      <img
                        src={paymentQr}
                        alt="Mehar Tour and Travels UPI payment QR code"
                        className="w-full rounded-xl object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
