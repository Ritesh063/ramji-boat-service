import React, { useState } from 'react';
import { Calendar, Clock, Users, MapPin, Phone, MessageCircle, CheckCircle, Sparkles, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO, BOAT_FLEET, TOUR_PACKAGES } from '../data/boatData';

export default function BookingCalculator({ preSelectedBoat, isModal = false, onClose }) {
  const [boatType, setBoatType] = useState(preSelectedBoat?.id || 'big-boat');
  const [selectedTour, setSelectedTour] = useState('evening-aarti');
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('5:30 PM (Evening Ganga Aarti)');
  const [guestCount, setGuestCount] = useState(boatType === 'big-boat' ? 35 : 12);
  const [pickupGhat, setPickupGhat] = useState('Samneghat (Base Ghat)');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Update guests default when boat type changes
  const handleBoatChange = (id) => {
    setBoatType(id);
    if (id === 'big-boat' && guestCount < 25) setGuestCount(35);
    if (id === 'small-boat' && guestCount > 25) setGuestCount(15);
  };

  const getSelectedBoatDetails = () => BOAT_FLEET.find(b => b.id === boatType) || BOAT_FLEET[0];
  const getSelectedTourDetails = () => TOUR_PACKAGES.find(t => t.id === selectedTour) || TOUR_PACKAGES[0];

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const boat = getSelectedBoatDetails();
    const tour = getSelectedTourDetails();

    const message = `*NEW BOAT BOOKING INQUIRY - RAMJI BOAT SERVICES*%0A%0A` +
      `👤 *Name:* ${customerName || 'Guest'}%0A` +
      `📞 *Phone:* ${customerPhone || 'Not provided'}%0A` +
      `⛵ *Boat Type:* ${boat.title} (${boat.capacity})%0A` +
      `🌅 *Tour Package:* ${tour.title}%0A` +
      `📅 *Date:* ${date}%0A` +
      `⏰ *Time Slot:* ${timeSlot}%0A` +
      `👥 *Number of Guests:* ${guestCount} persons%0A` +
      `📍 *Preferred Pickup:* ${pickupGhat}%0A` +
      (specialRequests ? `📝 *Special Request:* ${specialRequests}%0A%0A` : `%0A`) +
      `_Please confirm availability and share best price quote._`;

    window.open(`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${message}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className={`bg-white ${
      isModal 
        ? 'p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl w-full max-h-[85vh] sm:max-h-[90vh] overflow-y-auto' 
        : 'p-4 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-amber-200'
    }`}>
      
      {/* Header */}
      <div className="text-center mb-6 sm:mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Instant Inquiry & Rate Calculator
        </span>
        <h3 className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif-kashi">
          Book Your Boat in Varanasi
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-slate-600">
          Direct reservation with Ramji Boat Services • Instant WhatsApp / Phone Confirmation
        </p>
      </div>

      {submitted ? (
        <div className="text-center py-6 sm:py-8 space-y-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-slate-900">Inquiry Prepared for WhatsApp!</h4>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
            Your booking details have been opened in WhatsApp to chat directly with Ramji bhai. If it didn't open automatically, call us directly on <strong>{BUSINESS_INFO.phone}</strong>.
          </p>
          <div className="pt-3 flex flex-col sm:flex-row justify-center gap-2.5">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm"
            >
              Call {BUSINESS_INFO.phone}
            </a>
            <button
              onClick={() => setSubmitted(false)}
              className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm"
            >
              Modify Details
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleWhatsAppSubmit} className="space-y-4 sm:space-y-6">
          
          {/* Step 1: Select Boat Fleet Type */}
          <div>
            <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              1. Select Vessel / Boat Capacity *
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {BOAT_FLEET.map((boat) => (
                <button
                  type="button"
                  key={boat.id}
                  onClick={() => handleBoatChange(boat.id)}
                  className={`p-3 sm:p-3.5 rounded-xl border-2 text-left transition flex items-start space-x-2.5 sm:space-x-3 ${
                    boatType === boat.id
                      ? 'border-amber-500 bg-amber-50/70 ring-2 ring-amber-400/20'
                      : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full border-2 mt-0.5 shrink-0 flex items-center justify-center ${
                    boatType === boat.id ? 'border-amber-600 bg-amber-600' : 'border-slate-300'
                  }`}>
                    {boatType === boat.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                  <div className="min-w-0">
                    <span className="block font-bold text-slate-900 text-xs sm:text-sm truncate">{boat.title}</span>
                    <span className="block text-xs font-extrabold text-amber-700">{boat.capacity}</span>
                    <span className="block text-[10px] sm:text-[11px] text-slate-500 mt-0.5 line-clamp-1">{boat.idealFor}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Select Tour Package */}
          <div>
            <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              2. Choose Experience / Tour *
            </label>
            <select
              value={selectedTour}
              onChange={(e) => setSelectedTour(e.target.value)}
              className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 text-xs sm:text-sm"
            >
              {TOUR_PACKAGES.map((tour) => (
                <option key={tour.id} value={tour.id}>
                  {tour.title} ({tour.timing})
                </option>
              ))}
            </select>
          </div>

          {/* Step 3: Date, Time & Guests Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <div>
              <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Date *
              </label>
              <input
                type="date"
                required
                value={date}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-2 sm:py-2.5 rounded-xl border border-slate-300 text-slate-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Time Slot *
              </label>
              <select
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                className="w-full px-3 py-2 sm:py-2.5 rounded-xl border border-slate-300 text-slate-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
              >
                <option value="5:30 AM (Morning Sunrise / Subah-e-Banaras)">5:30 AM (Sunrise)</option>
                <option value="6:30 AM (Morning Ghats Tour)">6:30 AM (Morning Ghats)</option>
                <option value="5:00 PM (Sunset Cruise)">5:00 PM (Sunset Cruise)</option>
                <option value="5:30 PM (Evening Ganga Aarti)">5:30 PM (Ganga Aarti)</option>
                <option value="7:30 PM (Night Ghat Lights)">7:30 PM (Night Lights)</option>
                <option value="Custom Time (Discuss on Phone)">Custom Time</option>
              </select>
            </div>

            <div className="sm:col-span-2 md:col-span-1">
              <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Persons *
              </label>
              <input
                type="number"
                min="1"
                max="80"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full px-3 py-2 sm:py-2.5 rounded-xl border border-slate-300 text-slate-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 font-bold"
              />
            </div>
          </div>

          {/* Step 4: Boarding Ghat */}
          <div>
            <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Preferred Boarding Ghat
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
              {['Samneghat (Base)', 'Assi Ghat', 'Dashashwamedh', 'Namo Ghat'].map((ghat) => (
                <button
                  type="button"
                  key={ghat}
                  onClick={() => setPickupGhat(ghat)}
                  className={`py-2 px-2 rounded-lg text-[11px] sm:text-xs font-semibold border text-center transition truncate ${
                    pickupGhat.includes(ghat.split(' ')[0])
                      ? 'bg-amber-600 text-white border-amber-600 shadow'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {ghat}
                </button>
              ))}
            </div>
          </div>

          {/* Step 5: Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
            <div>
              <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="e.g. Rahul Sharma"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-3 py-2 sm:py-2.5 rounded-xl border border-slate-300 text-slate-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Your Phone Number
              </label>
              <input
                type="tel"
                placeholder="e.g. 9876543210"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="w-full px-3 py-2 sm:py-2.5 rounded-xl border border-slate-300 text-slate-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
              Special Requests (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. floating diyas, senior citizen assistance, bhajans"
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              className="w-full px-3 py-2 sm:py-2.5 rounded-xl border border-slate-300 text-slate-800 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5 pt-2">
            <button
              type="submit"
              className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-extrabold text-xs sm:text-sm md:text-base shadow-lg hover:shadow-xl transition flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span>Send Booking Request on WhatsApp</span>
            </button>

            <div className="flex items-center justify-center gap-2 sm:gap-3 text-xs">
              <span className="text-slate-400">or prefer direct call?</span>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center font-bold text-amber-700 hover:text-amber-800 underline"
              >
                <Phone className="w-3.5 h-3.5 mr-1 shrink-0" />
                Call {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>

          <div className="text-[10px] sm:text-[11px] text-center text-slate-400 flex items-center justify-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span>No advance payment needed for standard inquiry. Instant confirmation by Ramji Boat Services.</span>
          </div>

        </form>
      )}

      {isModal && onClose && (
        <div className="mt-3 pt-3 border-t border-slate-100 text-right">
          <button
            onClick={onClose}
            className="text-xs text-slate-500 hover:text-slate-800 font-bold px-3 py-1.5"
          >
            Close Window
          </button>
        </div>
      )}

    </div>
  );
}
