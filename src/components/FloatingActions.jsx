import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/boatData';

export default function FloatingActions({ onOpenBooking }) {
  return (
    <>
      {/* Desktop Floating Action Buttons (Bottom Right) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-50 flex-col space-y-3">
        {/* WhatsApp Floating Button */}
        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Namaste%20Ramji%20Boat%20Services,%20I%20want%20to%20book%20a%20boat%20in%20Varanasi`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl hover:scale-110 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none shadow-lg">
            Chat on WhatsApp
          </span>
          <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-300 animate-ping"></span>
        </a>

        {/* Call Floating Button */}
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-amber-600 hover:bg-amber-700 text-white shadow-2xl hover:scale-110 transition-all duration-300"
          aria-label={`Call ${BUSINESS_INFO.phone}`}
        >
          <Phone className="w-7 h-7" />
          <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none shadow-lg">
            Call {BUSINESS_INFO.phone}
          </span>
        </a>
      </div>

      {/* Mobile Bottom Fixed Bar (High conversion on mobile) */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-2xl flex items-center gap-2">
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex-1 py-3 px-3 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center shadow"
        >
          <Phone className="w-4 h-4 mr-1.5 text-amber-400" />
          <span>Call Now</span>
        </a>
        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Namaste%20Ramji%20Boat%20Services,%20I%20want%20to%20book%20a%20boat%20in%20Varanasi`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-3 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center shadow"
        >
          <MessageCircle className="w-4 h-4 mr-1.5" />
          <span>WhatsApp</span>
        </a>
        <button
          onClick={onOpenBooking}
          className="py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-extrabold text-xs uppercase tracking-wider shadow"
        >
          Book
        </button>
      </div>
    </>
  );
}
