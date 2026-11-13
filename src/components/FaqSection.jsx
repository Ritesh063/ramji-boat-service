import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '../data/boatData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            Got Questions? We Have Answers
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-serif-kashi tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Everything you need to know about boat capacities, safety, ghat pickups, and Aarti viewing.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden transition"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 text-left flex justify-between items-center space-x-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-amber-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-amber-200">
          <p className="text-sm font-bold text-slate-800">
            Have a custom requirement, event, or specific question?
          </p>
          <p className="text-xs text-slate-500 mt-1">
            Speak directly with Ramji Boat Services team. We are available 7 days a week from 5:00 AM to 10:00 PM.
          </p>
          <div className="mt-4 flex justify-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs uppercase tracking-wider transition"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5" /> Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
