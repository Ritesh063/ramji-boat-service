import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Mail, Navigation, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/boatData';

export default function ContactSection() {
  return (
    <section id="contact" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5">
            <Phone className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            Direct Contact & Boarding Location
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-black text-slate-900 font-serif-kashi tracking-tight leading-tight">
            Connect with Ramji Boat Services
          </h2>
          <p className="mt-2.5 text-sm sm:text-base lg:text-lg text-slate-600">
            Reach out directly for bookings, price quotes, custom Ghat pickups, and Dev Deepawali reservations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            
            {/* Primary Business Card */}
            <div className="p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 text-white shadow-xl border border-amber-900/40 space-y-4 sm:space-y-6">
              
              <div>
                <span className="text-[10px] sm:text-xs uppercase font-extrabold text-amber-400 tracking-wider">
                  RAMJI BOAT SERVICES • VARANASI
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif mt-1">
                  Enjoy a Beautiful Boat Ride!
                </h3>
              </div>

              {/* Phone */}
              <div className="space-y-1 pt-2 border-t border-slate-800">
                <span className="text-[11px] sm:text-xs uppercase font-bold text-slate-400 flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" /> Contact Number
                </span>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="text-2xl sm:text-3xl font-black text-white hover:text-amber-400 transition tracking-wide block"
                >
                  {BUSINESS_INFO.phone}
                </a>
                <p className="text-[11px] sm:text-xs text-slate-400">
                  Available for Calls & WhatsApp inquiries 24/7
                </p>
              </div>

              {/* Address */}
              <div className="space-y-1 pt-2 border-t border-slate-800">
                <span className="text-[11px] sm:text-xs uppercase font-bold text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-red-400" /> Location / Address
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-200 leading-relaxed">
                  {BUSINESS_INFO.address}
                </p>
                <p className="text-[11px] sm:text-xs text-amber-300 font-medium">
                  Landmark: {BUSINESS_INFO.landmark}
                </p>
              </div>

              {/* Timings */}
              <div className="space-y-1 pt-2 border-t border-slate-800">
                <span className="text-[11px] sm:text-xs uppercase font-bold text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" /> Operating Timings
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-200">
                  {BUSINESS_INFO.timings}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="py-3 px-3 sm:px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm text-center transition flex items-center justify-center shadow-md"
                >
                  <Phone className="w-4 h-4 mr-1.5 shrink-0" /> Call
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Namaste%20Ramji%20Boat%20Services,%20I%20want%20to%20book%20a%20boat%20ride%20in%20Varanasi`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 sm:px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm text-center transition flex items-center justify-center shadow-md"
                >
                  <MessageCircle className="w-4 h-4 mr-1.5 shrink-0" /> WhatsApp
                </a>
              </div>

            </div>

            {/* Boarding Ghats summary */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200">
              <h4 className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                <Navigation className="w-4 h-4 text-amber-600 shrink-0" /> Authorized Ghat Pickups
              </h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold text-slate-700">
                {BUSINESS_INFO.pickupPoints.map((pt, i) => (
                  <span key={i} className="bg-white px-2.5 py-1 rounded-md border border-amber-200">
                    📍 {pt}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Interactive Google Map Embed */}
          <div className="lg:col-span-7 w-full">
            <div className="rounded-2xl sm:rounded-3xl border border-slate-200 overflow-hidden shadow-lg bg-slate-100 flex flex-col h-full min-h-[340px] sm:min-h-[440px]">
              
              <div className="p-3.5 sm:p-4 bg-white border-b border-slate-200 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2">
                <div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                    Location Map: Samneghat / Lanka / BHU, Varanasi
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-500">
                    Madarwan, Samneghat, Lanka, BHU, Varanasi - 221005
                  </p>
                </div>
                <a
                  href="https://www.google.com/maps/search/Samneghat+Lanka+BHU+Varanasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 shrink-0"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Iframe */}
              <div className="flex-1 w-full min-h-[280px] sm:min-h-[380px]">
                <iframe
                  title="Ramji Boat Services Location Samneghat Lanka BHU Varanasi"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14433.029871783854!2d82.9902611!3d25.2677114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e318ca47184ef%3A0x6b77ee0640f4196e!2sSamne%20Ghat%2C%20Nagwa%2C%20Varanasi%2C%20Uttar%20Pradesh%20221005!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '280px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
