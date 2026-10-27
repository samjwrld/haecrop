import React from 'react';
import { siteConfig } from '../config/site';
import { Star, Quote, UserCheck } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5 text-green-700" />
            <span>Farmer Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Happy Farmers, Higher Yields
          </h2>
          <p className="text-base text-slate-600 font-normal">
            Join thousands of successful farmers who trust HYCROP for their seasonal crops and agricultural inputs.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-slate-50 rounded-2xl p-7 border border-slate-200/80 shadow-sm relative flex flex-col justify-between hover:border-green-300 transition-all duration-300"
            >
              <div>
                <Quote className="w-10 h-10 text-green-200 mb-4" />

                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-slate-700 italic leading-relaxed mb-6 font-normal">
                  "{t.quote}"
                </p>
              </div>

              {/* Farmer Profile */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900">{t.name}</h3>
                  <p className="text-xs text-green-700 font-semibold">{t.crop} • {t.location}</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-green-800 text-white font-bold text-xs flex items-center justify-center">
                  {t.name.slice(0, 2).toUpperCase()}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
