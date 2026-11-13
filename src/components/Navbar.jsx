import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Ship, MapPin, Clock, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/boatData';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Fleet', href: '#fleet' },
    { name: 'Tours & Aarti', href: '#tours' },
    { name: 'Book Boat', href: '#booking' },
    { name: '84 Ghats', href: '#ghats' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Banner Bar - Highly responsive across 320px to 4K */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white text-[11px] sm:text-xs md:text-sm py-1.5 sm:py-2 px-3 sm:px-4 shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-1.5 sm:gap-2">
          
          <div className="flex items-center space-x-2 sm:space-x-3 text-amber-100 font-medium truncate max-w-[65%] sm:max-w-none">
            <span className="flex items-center truncate">
              <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 shrink-0 text-amber-200" /> 
              <span className="truncate">Samneghat, Lanka, BHU, Varanasi</span>
            </span>
            <span className="hidden md:inline-block opacity-60">|</span>
            <span className="hidden md:flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1 shrink-0 text-amber-200" /> 5:00 AM – 10:00 PM
            </span>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3 text-xs shrink-0">
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="flex items-center hover:text-amber-200 transition font-extrabold tracking-wide"
            >
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 shrink-0" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Namaste%20Ramji%20Boat%20Services,%20I%20want%20to%20inquire%20about%20boat%20booking%20in%20Varanasi`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-2 py-0.5 rounded-full flex items-center font-bold transition shadow text-[10px] sm:text-xs"
            >
              <MessageCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" /> WhatsApp
            </a>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-md py-2 sm:py-2.5'
            : 'bg-white/95 backdrop-blur-md py-2.5 sm:py-3.5 border-b border-amber-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo & Brand - Scaled for 320px+ mobile */}
            <a href="#home" className="flex items-center space-x-2 sm:space-x-3 group min-w-0">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform shrink-0">
                <Ship className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0">
                <span className="block text-base xs:text-lg sm:text-2xl font-black tracking-tight text-slate-900 font-brand truncate leading-tight">
                  RAMJI <span className="text-amber-600 font-serif">BOAT SERVICES</span>
                </span>
                <span className="block text-[9px] xs:text-[10px] sm:text-[11px] font-semibold text-slate-500 tracking-wider uppercase truncate">
                  Varanasi • 50–60 & 20–25 Persons
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-700 hover:text-amber-600 font-medium text-sm transition-colors relative py-1 hover:font-semibold whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden sm:flex items-center space-x-2.5 lg:space-x-3 shrink-0">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center px-3 py-2 rounded-lg text-xs md:text-sm font-bold text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200 transition"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5 text-amber-600 shrink-0" />
                <span className="hidden md:inline">{BUSINESS_INFO.phone}</span>
                <span className="md:hidden">Call</span>
              </a>
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center px-3.5 md:px-4 py-2 rounded-lg text-xs md:text-sm font-bold text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5 mr-1.5 shrink-0" />
                <span>Book Boat</span>
              </button>
            </div>

            {/* Mobile Menu Button - Minimum 44x44 tap target */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 flex items-center justify-center shrink-0 focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Full Screen / Slide Down Menu */}
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 top-[88px] sm:top-[100px] bg-slate-950/60 backdrop-blur-sm z-30 lg:hidden animate-fadeIn"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <div className="fixed inset-x-0 top-[88px] sm:top-[100px] max-h-[calc(100vh-88px)] sm:max-h-[calc(100vh-100px)] overflow-y-auto bg-white border-b border-slate-200 px-4 pt-4 pb-8 shadow-2xl z-40 lg:hidden animate-slideUp">
              <div className="flex flex-col space-y-1.5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-slate-800 hover:text-amber-600 font-bold py-3 px-3.5 rounded-xl hover:bg-amber-50 transition text-base flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <span className="text-slate-300 text-xs">→</span>
                  </a>
                ))}
                
                {/* Mobile Drawer CTAs */}
                <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="w-full text-center py-3.5 rounded-xl font-bold bg-amber-50 text-amber-900 border border-amber-300 flex items-center justify-center text-sm shadow-sm"
                  >
                    <Phone className="w-4 h-4 mr-2 text-amber-600" />
                    Call {BUSINESS_INFO.phone}
                  </a>

                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Namaste%20Ramji%20Boat%20Services,%20I%20want%20to%20book%20a%20boat%20in%20Varanasi`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-3.5 rounded-xl font-bold bg-emerald-600 text-white flex items-center justify-center text-sm shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat on WhatsApp
                  </a>

                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenBooking();
                    }}
                    className="w-full text-center py-3.5 rounded-xl font-extrabold text-white bg-gradient-to-r from-amber-600 to-orange-600 shadow-md text-sm uppercase tracking-wider"
                  >
                    Book Your Boat Today!
                  </button>
                </div>

                <div className="pt-3 text-center text-xs text-slate-500">
                  Madarwan, Samneghat, Lanka, BHU, Varanasi
                </div>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
}
