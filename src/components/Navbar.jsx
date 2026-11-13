import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Ship, MapPin, Clock } from 'lucide-react';
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
      {/* Top Banner Bar */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-white text-xs sm:text-sm py-2 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-3 text-amber-100 font-medium">
            <span className="flex items-center"><MapPin className="w-3.5 h-3.5 mr-1" /> Samneghat, Lanka, BHU, Varanasi</span>
            <span className="hidden md:inline-block">|</span>
            <span className="hidden md:flex items-center"><Clock className="w-3.5 h-3.5 mr-1" /> 5:00 AM – 10:00 PM</span>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="flex items-center hover:text-amber-200 transition font-bold tracking-wide"
            >
              <Phone className="w-3.5 h-3.5 mr-1" /> Call: {BUSINESS_INFO.phone}
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Namaste%20Ramji%20Boat%20Services,%20I%20want%20to%20inquire%20about%20boat%20booking%20in%20Varanasi`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-2.5 py-0.5 rounded-full flex items-center font-medium transition shadow"
            >
              <MessageCircle className="w-3 h-3 mr-1" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-md py-2.5'
            : 'bg-white/95 backdrop-blur-md py-3.5 border-b border-amber-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo & Brand */}
            <a href="#home" className="flex items-center space-x-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                <Ship className="w-6 h-6" />
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 font-brand">
                  RAMJI <span className="text-amber-600 font-serif">BOAT SERVICES</span>
                </span>
                <span className="block text-[11px] font-semibold text-slate-500 tracking-wider uppercase">
                  Varanasi • 50–60 & 20–25 Persons Fleet
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-700 hover:text-amber-600 font-medium text-sm transition-colors relative py-1 hover:font-semibold"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center px-3.5 py-2 rounded-lg text-sm font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200 transition"
              >
                <Phone className="w-4 h-4 mr-1.5 text-amber-600" />
                {BUSINESS_INFO.phone}
              </a>
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5"
              >
                Book Your Boat
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-800 hover:text-amber-600 font-semibold py-2 px-3 rounded-md hover:bg-amber-50 transition"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="w-full text-center py-2.5 rounded-lg font-bold bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center"
                >
                  <Phone className="w-4 h-4 mr-2 text-amber-600" /> Call {BUSINESS_INFO.phone}
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full text-center py-2.5 rounded-lg font-bold text-white bg-gradient-to-r from-amber-600 to-orange-600 shadow-md"
                >
                  Book Your Boat Today!
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
