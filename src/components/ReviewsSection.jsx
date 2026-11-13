import React from 'react';
import { Star, CheckCircle, MessageSquareQuote, ThumbsUp } from 'lucide-react';
import { TESTIMONIALS, BUSINESS_INFO } from '../data/boatData';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
            Verified Pilgrim & Tourist Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-serif-kashi tracking-tight">
            Memories Made on Mother Ganga
          </h2>
          
          {/* Rating Summary Bar */}
          <div className="mt-4 inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-50 border border-slate-200">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500" />
              ))}
            </div>
            <span className="text-sm font-bold text-slate-900">
              {BUSINESS_INFO.rating} / 5.0 Rating
            </span>
            <span className="text-xs text-slate-500">
              ({BUSINESS_INFO.totalReviews}+ Happy Bookings)
            </span>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((review, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Stars & Tag */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase font-extrabold text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded-full">
                    {review.tag}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-900">{review.name}</h4>
                  <p className="text-[11px] text-slate-500">{review.location}</p>
                </div>
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" title="Verified Traveler" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

