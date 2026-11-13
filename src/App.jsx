import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FleetSection from './components/FleetSection';
import BookingCalculator from './components/BookingCalculator';
import ToursSection from './components/ToursSection';
import GhatsExperience from './components/GhatsExperience';
import WhyUsSection from './components/WhyUsSection';
import ReviewsSection from './components/ReviewsSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import { X } from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBoatForModal, setSelectedBoatForModal] = useState(null);

  const handleOpenBooking = (boat = null) => {
    setSelectedBoatForModal(boat);
    setIsModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsModalOpen(false);
    setSelectedBoatForModal(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col antialiased pb-24 sm:pb-0 overflow-x-hidden w-full relative">
      
      {/* Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        
        {/* Hero Section with uploaded reference image banner details */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Fleet Section: Big Boat (50-60) & Small Boat (20-25) */}
        <FleetSection onSelectBoat={(boat) => handleOpenBooking(boat)} />

        {/* On-Page Booking & Calculator Section */}
        <section id="booking" className="py-14 sm:py-20 bg-gradient-to-b from-white to-amber-50/40">
          <div className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8">
            <BookingCalculator />
          </div>
        </section>

        {/* Tours & Experiences (Subah-e-Banaras, Ganga Aarti, Dev Deepawali) */}
        <ToursSection onSelectTour={() => handleOpenBooking()} />

        {/* 84 Ghats Guide & Samneghat Base */}
        <GhatsExperience />

        {/* Why Choose Ramji Boat Services */}
        <WhyUsSection />

        {/* Customer Reviews & Ratings */}
        <ReviewsSection />

        {/* FAQs */}
        <FaqSection />

        {/* Contact, Address & Google Map */}
        <ContactSection />

      </main>

      {/* Footer */}
      <Footer />

      {/* High-converting Floating Action Buttons (WhatsApp & Call) */}
      <FloatingActions onOpenBooking={() => handleOpenBooking()} />

      {/* Global Booking Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 xs:p-4 sm:p-6 bg-slate-950/75 backdrop-blur-sm animate-fadeIn"
          onClick={handleCloseBooking}
        >
          <div 
            className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden animate-scaleUp max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseBooking}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition shadow-sm"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <BookingCalculator
              isModal={true}
              preSelectedBoat={selectedBoatForModal}
              onClose={handleCloseBooking}
            />
          </div>
        </div>
      )}

    </div>
  );
}
