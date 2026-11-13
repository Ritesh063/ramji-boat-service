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
    <div className={`bg-white ${isModal ? 'p-6 sm:p-8 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto' : 'p-6 sm:p-10 rounded-3xl shadow-2xl border border-amber-200'}`}>
      
      {/* Header */}
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Instant Inquiry & Rate Calculator
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif-kashi">
          Book Your Boat in Varanasi
        </h3>
        <p className="mt-1 text-sm text-slate-600">
          Direct reservation with Ramji Boat Services • Instant WhatsApp / Phone Confirmation
        </p>
      </div>

      {submitted ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h4 className="text-xl font-bold text-slate-900">Inquiry Prepared for WhatsApp!</h4>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Your booking details have been opened in WhatsApp to chat directly with Ramji bhai. If it didn't open automatically, call us directly on <strong>{BUSINESS_INFO.phone}</strong>.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm"
            >
              Call {BUSINESS_INFO.phone}
            </a>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm"
            >
              Modify Details
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
          
          {/* Step 1: Select Boat Fleet Type */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              1. Select Vessel / Boat Capacity *
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {BOAT_FLEET.map((boat) => (
                <button
                  type="button"
                  key={boat.id}
                  onClick={() => handleBoatChange(boat.id)}
                  className={`p-3.5 rounded-xl border-2 text-left transition flex items-start space-x-3 ${
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
                  <div>
                    <span className="block font-bold text-slate-900 text-sm">{boat.title}</span>
                    <span className="block text-xs font-extrabold text-amber-700">{boat.capacity}</span>
                    <span className="block text-[11px] text-slate-500 mt-0.5">{boat.idealFor}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Select Tour Package */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              2. Choose Experience / Tour *
            </label>
            <select
              value={selectedTour}
              onChange={(e) => setSelectedTour(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
            >
              {TOUR_PACKAGES.map((tour) => (
                <option key={tour.id} value={tour.id}>
                  {tour.title} ({tour.timing})
                </option>
              ))}
            </select>
          </div>

          {/* Step 3: Date, Time & Guests Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-600" /> Date *
              </label>
              <input
                type="date"
                required
                value={date}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-600" /> Time Slot *
              </label>
              <select
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
              >
                <option value="5:30 AM (Morning Sunrise / Subah-e-Banaras)">5:30 AM (Morning Sunrise)</option>
                <option value="6:30 AM (Morning Ghats Tour)">6:30 AM (Morning Ghats Tour)</option>
                <option value="5:00 PM (Sunset Cruise)">5:00 PM (Sunset Cruise)</option>
                <option value="5:30 PM (Evening Ganga Aarti)">5:30 PM (Evening Ganga Aarti)</option>
                <option value="7:30 PM (Night Ghat Lights)">7:30 PM (Night Ghat Lights)</option>
                <option value="Custom Time (Discuss on Phone)">Custom Time</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-amber-600" /> Persons *
              </label>
              <input
                type="number"
                min="1"
                max="80"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 font-bold"
              />
            </div>
          </div>

          {/* Step 4: Boarding Ghat */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-600" /> Preferred Boarding Ghat
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {['Samneghat (Base)', 'Assi Ghat', 'Dashashwamedh', 'Namo Ghat'].map((ghat) => (
                <button
                  type="button"
                  key={ghat}
                  onClick={() => setPickupGhat(ghat)}
                  className={`py-2 px-2.5 rounded-lg text-xs font-semibold border text-center transition ${
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Your Name
              </label>
              <input
                type="text"
                placeholder="e.g. Rahul Sharma"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-amber-600" /> Your Phone Number
              </label>
              <input
                type="tel"
                placeholder="e.g. 9876543210"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Special Requests (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. need floating diyas, senior citizen assistance, music system"
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-3">
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-extrabold text-base shadow-lg hover:shadow-xl transition flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Send Booking Request on WhatsApp</span>
            </button>

            <div className="flex items-center justify-center gap-3">
              <span className="text-xs text-slate-400">or prefer calling directly?</span>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center text-xs font-bold text-amber-700 hover:text-amber-800 underline"
              >
                <Phone className="w-3.5 h-3.5 mr-1" />
                Call {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>

          <div className="text-[11px] text-center text-slate-400 flex items-center justify-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
            <span>No advance payment needed for standard inquiry. Instant confirmation by Ramji Boat Services.</span>
          </div>

        </form>
      )}

      {isModal && onClose && (
        <div className="mt-4 pt-4 border-t border-slate-100 text-right">
          <button
            onClick={onClose}
            className="text-xs text-slate-500 hover:text-slate-800 font-bold px-3 py-1"
          >
            Close Window
          </button>
        </div>
      )}

    </div>
  );
}
