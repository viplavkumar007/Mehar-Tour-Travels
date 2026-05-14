import React from 'react'
import { ExternalLink, ShieldCheck, Smartphone } from 'lucide-react'
import { brand } from '../../data/siteContent'
import ScrollReveal from '../ScrollReveal'
import paymentQr from '../../assets/payment-qr.jpeg'
import razorpayLogo from '../../assets/razorpay-logo.svg'

const RAZORPAY_LINK = 'https://razorpay.me/@mehartourandtravels'

export default function Payments() {
  return (
    <section id="payments" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <span className="inline-block text-brand-orange text-sm font-bold uppercase tracking-widest mb-3">
            Payments
          </span>
          <h2 className="section-title">Pay Booking Amount Securely</h2>
          <p className="section-subtitle">
            Choose the payment method that works best for you. Scan the UPI QR code or use our
            Razorpay payment gateway for quick and secure payments.
          </p>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-stretch">
          <ScrollReveal direction="right">
            <div className="h-full rounded-3xl border border-brand-blue/10 bg-gradient-to-br from-brand-blueLight/40 via-white to-brand-orangeLight/40 p-8 shadow-xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-brand-blue shadow-sm">
                <ShieldCheck size={14} />
                Trusted Payment Options
              </div>

              <h3 className="mt-5 font-display text-3xl font-bold text-brand-navy">
                Send Advances And Booking Payments With Confidence
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-brand-navyLight/70">
                We accept secure online payments for tour bookings, trip advances, and travel confirmations.
                Please keep your booking name or phone number handy while making the payment.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/80 p-4 ring-1 ring-slate-100">
                  <div className="flex items-center gap-2 text-brand-navy">
                    <Smartphone size={18} className="text-brand-orange" />
                    <span className="font-semibold">UPI QR Payment</span>
                  </div>
                  <p className="mt-2 text-sm text-brand-navyLight/65">
                    Fast mobile payment for direct transfers using any UPI app.
                  </p>
                </div>

                <a
                  href={RAZORPAY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl bg-white p-4 ring-1 ring-slate-100 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-blue/10 hover:ring-brand-blue/20"
                >
                  <div className="flex items-start justify-between gap-3">
                    <img
                      src={razorpayLogo}
                      alt="Razorpay logo"
                      className="h-10 w-auto rounded-xl"
                    />
                    <ExternalLink size={18} className="mt-1 text-brand-orange transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <div className="mt-4 text-brand-navy">
                    <span className="font-semibold">Razorpay Gateway</span>
                  </div>
                  <p className="mt-2 text-sm text-brand-navyLight/65">
                    Pay online using cards, UPI, net banking, and other supported methods.
                  </p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
                    Tap card to open payment link
                  </p>
                </a>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${brand.phone}`}
                  className="btn-secondary justify-center px-6 py-3.5 sm:max-w-xs"
                >
                  Need Payment Help?
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.15}>
            <div className="flex h-full items-center justify-center rounded-3xl bg-brand-navy p-6 shadow-2xl shadow-brand-navy/15">
              <div className="w-full max-w-sm rounded-[28px] bg-white p-5 text-center shadow-lg">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-orange">
                  Scan To Pay
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold text-brand-navy">
                  Mehar Tour and Travels
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-navyLight/65">
                  Use any UPI app to scan this QR code and complete your payment securely.
                </p>

                <div className="mt-5 overflow-hidden rounded-2xl ring-1 ring-slate-100">
                  <img
                    src={paymentQr}
                    alt="Mehar Tour and Travels UPI payment QR code"
                    className="w-full object-cover"
                  />
                </div>

                <a
                  href={RAZORPAY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue transition-colors hover:text-brand-orange"
                >
                  Open Razorpay payment link
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
