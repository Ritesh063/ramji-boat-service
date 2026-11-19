import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Film, Compass, Flame, Sun, Ship } from 'lucide-react';
import { BUSINESS_INFO } from '../data/boatData';

export const VARANASI_VIDEOS = [
  {
    id: "aarti-video",
    title: "Dashashwamedh Maha Ganga Aarti from Boat",
    hindiTitle: "नौका से दशाश्वमेध महा आरती का अलौकिक दर्शन",
    category: "Ganga Aarti",
    duration: "Daily Evening",
    embedId: "UffBYVuUaTI",
    description: "Watch how pilgrims experience the divine 7-priest Maha Aarti from our boats anchored directly in front of Dashashwamedh Ghat, free from the crushing crowds on the steps.",
    bgImage: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1200&q=80",
    icon: Flame,
    recommendedBoat: "Big Boat (50-60 Pax) or Small Boat"
  },
  {
    id: "sunrise-video",
    title: "Subah-e-Banaras Sunrise Boat Ride & Siberian Gulls",
    hindiTitle: "सुबह-ए-बनारस सूर्योदय एवं साइबेरियन पक्षी विहार",
    category: "Sunrise Tour",
    duration: "5:30 AM Daily",
    embedId: "UffBYVuUaTI",
    description: "Experience the golden morning mist over the holy Ganges as thousands of migratory Siberian birds soar around the boat and Vedic chants echo from Assi Ghat.",
    bgImage: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80",
    icon: Sun,
    recommendedBoat: "Small Boat (20-25 Pax) or Big Boat"
  },
  {
    id: "heritage-video",
    title: "84 Ghats Complete Heritage River Odyssey",
    hindiTitle: "समस्त 84 घाटों का भव्य दर्शन एवं इतिहास",
    category: "84 Ghats",
    duration: "2.5 Hours",
    embedId: "UffBYVuUaTI",
    description: "Sail past Maratha fortresses, Rajput river palaces, Chet Singh Ghat, Darbhanga Ghat, and the eternal fires of Manikarnika with our local boat captain.",
    bgImage: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1200&q=80",
    icon: Compass,
    recommendedBoat: "Big Boat / Small Boat"
  },
  {
    id: "festival-video",
    title: "Dev Deepawali: Sailing Amongst 10 Lakh Diyas",
    hindiTitle: "देव दीपावली: 10 लाख दीपों के बीच नौकायन",
    category: "Festival Special",
    duration: "Kartik Purnima",
    embedId: "UffBYVuUaTI",
    description: "Witness the cosmic spectacle when all 84 ghats light up with millions of earthen oil lamps with grand riverfront fireworks and laser projections.",
    bgImage: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
    icon: Sparkles,
    recommendedBoat: "Big Boat (50-60 Pax) Advance Booking"
  }
];

export default function VaranasiVideoExperience({ onOpenBooking }) {
  const [selectedVideo, setSelectedVideo] = useState(VARANASI_VIDEOS[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="videos" className="py-16 sm:py-24 bg-slate-950 text-white relative overflow-hidden">
      
      {/* Background Ambient Varanasi Riverfront Scrim */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15 filter blur-[2px] pointer-events-none transition-all duration-1000"
        style={{ backgroundImage: `url(${selectedVideo.bgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-950 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2.5 border border-amber-500/30">
            <Film className="w-3.5 h-3.5 text-amber-400" />
            Varanasi Ghats & Boat Video Experience
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif-kashi tracking-tight text-white">
            Watch the Ganges Magic in Action
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Preview the divine views of Dashashwamedh Ganga Aarti, Subah-e-Banaras sunrise, and historic 84 ghats directly from aboard our boats.
          </p>
        </div>

        {/* Video Player & Playlist Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Video Screen */}
          <div className="lg:col-span-8">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 border-2 border-amber-500/40 shadow-gold-glow aspect-video w-full group">
              
              {isPlaying ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${selectedVideo.embedId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src={selectedVideo.bgImage}
                    alt={selectedVideo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-black/30" />
                  
                  {/* Floating Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-amber-500 via-orange-500 to-amber-400 text-slate-950 flex items-center justify-center shadow-gold-glow hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-amber-200 group"
                      aria-label="Play Varanasi Experience Video"
                    >
                      <Play className="w-9 h-9 sm:w-10 sm:h-10 ml-1 text-slate-950 fill-slate-950" />
                    </button>
                  </div>

                  {/* Badge & Info on Video Screen */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-slate-950/90 backdrop-blur-md text-amber-300 text-xs font-bold border border-amber-500/40 flex items-center gap-1.5 shadow-md">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                      <span>Varanasi Ghats 4K Reel</span>
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs uppercase font-extrabold tracking-widest text-amber-400 block mb-1">
                      {selectedVideo.category} • {selectedVideo.duration}
                    </span>
                    <h3 className="text-lg sm:text-2xl font-black font-serif leading-tight">
                      {selectedVideo.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 line-clamp-2">
                      {selectedVideo.description}
                    </p>
                  </div>
                </div>
              )}

            </div>

            {/* Video Controls & Booking Banner */}
            <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase font-bold text-slate-400">Selected Experience</span>
                <h4 className="font-bold text-white text-sm sm:text-base">{selectedVideo.title}</h4>
                <p className="text-xs text-amber-400 font-semibold">{selectedVideo.recommendedBoat}</p>
              </div>
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white border border-slate-700 flex items-center gap-1.5 transition"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{isPlaying ? "Pause Video" : "Watch Full Reel"}</span>
                </button>
                <button
                  onClick={() => onOpenBooking()}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-gold-glow hover:shadow-xl transition"
                >
                  Book This Ride
                </button>
              </div>
            </div>

          </div>

          {/* Playlist Column */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center justify-between px-1 mb-2">
              <span className="text-xs uppercase font-extrabold tracking-wider text-amber-400">
                Choose Varanasi Perspective
              </span>
              <span className="text-xs text-slate-400">4 Videos</span>
            </div>

            {VARANASI_VIDEOS.map((item) => {
              const Icon = item.icon;
              const isSelected = selectedVideo.id === item.id;
              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => {
                    setSelectedVideo(item);
                    setIsPlaying(false);
                  }}
                  className={`w-full p-3.5 rounded-2xl border-2 text-left transition flex items-center space-x-3 group ${
                    isSelected
                      ? 'border-amber-400 bg-amber-950/50 shadow-gold-glow'
                      : 'border-slate-800 bg-slate-900/70 hover:border-slate-700 hover:bg-slate-900'
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="relative w-20 h-16 rounded-xl overflow-hidden shrink-0 border border-slate-700">
                    <img
                      src={item.bgImage}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <Play className={`w-5 h-5 ${isSelected ? 'text-amber-400 fill-amber-400' : 'text-white'}`} />
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <span className="block text-[10px] uppercase font-bold text-amber-400">
                      {item.category}
                    </span>
                    <h5 className="font-bold text-xs sm:text-sm text-white truncate group-hover:text-amber-300 transition">
                      {item.title}
                    </h5>
                    <p className="text-[11px] text-slate-400 truncate mt-0.5">
                      {item.hindiTitle}
                    </p>
                  </div>
                </button>
              );
            })}

            {/* Quick Call Direct */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 via-amber-950/40 to-slate-900 border border-amber-500/30 text-center space-y-1.5 mt-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                Want to book a boat for Aarti or Sunrise right now?
              </span>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="block text-lg font-black text-white hover:text-amber-400 transition"
              >
                Call: {BUSINESS_INFO.phone}
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

