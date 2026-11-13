import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Ship, MapPin, Clock, Calendar, Sparkles } from 'lucide-react';
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
    { name: '84 Ghats', href: '#ghats' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Book Boat', href: '#booking' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Banner Bar - Golden Hour Spiritual Heritage Bar */}
      <div className="bg-gradient-to-r from-amber-700 via-orange-600 to-amber-800 text-white text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-4 shadow-md relative z-50 border-b border-amber-500/30">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-1.5 sm:gap-2">
          
          <div className="flex items-center space-x-2 sm:space-x-4 text-amber-100 font-medium truncate">
            <span className="flex items-center truncate">
              <MapPin className="w-3.5 h-3.5 mr-1 text-amber-200 shrink-0" /> 
              <span className="truncate font-semibold">Madarwan, Samneghat, Lanka, BHU, Varanasi</span>
            </span>
            <span className="hidden lg:inline-block opacity-40">|</span>
            <span className="hidden lg:flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1 text-amber-200 shrink-0" /> 5:00 AM – 10:00 PM (All 7 Days)
            </span>
          </div>

          <div className="flex items-center space-x-2.5 sm:space-x-3 shrink-0">
            <div className="hidden xs:flex items-center space-x-1.5 bg-black/25 px-2.5 py-0.5 rounded-full border border-white/10 text-[10px] sm:text-xs text-amber-200 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Ganga Aarti & Sunrise</span>
            </div>

            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="flex items-center hover:text-amber-200 transition font-black tracking-wide text-xs sm:text-sm"
            >
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 text-amber-200" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Luxury Glass Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-gold-glow py-2'
            : 'bg-slate-950/95 backdrop-blur-md py-3 border-b border-amber-500/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo & Brand Emblem */}
            <a href="#home" className="flex items-center space-x-2.5 sm:space-x-3.5 group min-w-0">
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-amber-600 via-orange-500 to-amber-400 flex items-center justify-center text-slate-950 shadow-lg group-hover:scale-105 transition-transform shrink-0 border border-amber-300/60">
                  <Ship className="w-6 h-6 text-slate-950" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-slate-950"></div>
              </div>
              <div className="min-w-0">
                <div className="flex items-center space-x-1.5">
                  <span className="block text-base xs:text-xl sm:text-2xl font-black tracking-wider text-white font-brand truncate leading-none">
                    RAMJI <span className="text-gold-gradient font-serif">BOAT SERVICES</span>
                  </span>
                </div>
                <span className="block text-[9px] xs:text-[10px] sm:text-[11px] font-bold text-amber-400/90 tracking-widest uppercase truncate mt-0.5">
                  Varanasi • 50–60 & 20–25 Persons Fleet
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links with Gold Hover Accents */}
            <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-amber-400 font-semibold text-xs xl:text-sm transition-colors relative py-1 hover:font-bold whitespace-nowrap tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden sm:flex items-center space-x-2.5 lg:space-x-3 shrink-0">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center px-3.5 py-2 rounded-xl text-xs md:text-sm font-bold text-amber-300 bg-amber-950/60 hover:bg-amber-900/80 border border-amber-500/40 transition shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 mr-1.5 text-amber-400 shrink-0" />
                <span className="hidden md:inline">{BUSINESS_INFO.phone}</span>
                <span className="md:hidden">Call</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center px-4 py-2.5 rounded-xl text-xs md:text-sm font-black text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-gold-glow hover:shadow-xl transition transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5 mr-1.5 shrink-0" />
                <span>Book Your Boat</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-amber-400 hover:bg-slate-900 flex items-center justify-center shrink-0 border border-amber-500/30"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Menu with Dark Heritage Finish */}
        {mobileMenuOpen && (
          <>
            <div 
              className="fixed inset-0 top-[88px] sm:top-[96px] bg-black/80 backdrop-blur-md z-30 lg:hidden animate-fadeIn"
              onClick={() => setMobileMenuOpen(false)}
            />

            <div className="fixed inset-x-0 top-[88px] sm:top-[96px] max-h-[calc(100vh-88px)] overflow-y-auto bg-slate-950 border-b border-amber-500/30 px-4 pt-4 pb-8 shadow-2xl z-40 lg:hidden animate-slideUp">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-slate-200 hover:text-amber-400 font-bold py-3 px-3.5 rounded-xl hover:bg-amber-950/40 transition text-base flex items-center justify-between border-b border-slate-900"
                  >
                    <span>{link.name}</span>
                    <span className="text-amber-500/60 text-xs">→</span>
                  </a>
                ))}
                
                {/* Mobile Drawer CTAs */}
                <div className="pt-4 mt-2 flex flex-col gap-2.5">
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="w-full text-center py-3.5 rounded-xl font-black bg-amber-950/80 text-amber-300 border border-amber-500/50 flex items-center justify-center text-sm shadow-md"
                  >
                    <Phone className="w-4 h-4 mr-2 text-amber-400" />
                    Direct Call: {BUSINESS_INFO.phone}
                  </a>

                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Namaste%20Ramji%20Boat%20Services,%20I%20want%20to%20book%20a%20boat%20in%20Varanasi`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-3.5 rounded-xl font-black bg-emerald-600 text-white flex items-center justify-center text-sm shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat on WhatsApp
                  </a>

                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenBooking();
                    }}
                    className="w-full text-center py-3.5 rounded-xl font-black text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 shadow-gold-glow text-sm uppercase tracking-wider"
                  >
                    Book Your Boat Today!
                  </button>
                </div>

                <div className="pt-4 text-center text-xs text-slate-400">
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
