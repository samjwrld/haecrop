import React from 'react';
import { siteConfig } from '../config/site';
import { ShieldCheck, Leaf, TrendingUp, HeartHandshake } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Leaf,
  TrendingUp,
  HeartHandshake
};

export const WhyChooseUs: React.FC = () => {
  const { title, subtitle, features } = siteConfig.whyChooseUs;

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-green-700 tracking-widest uppercase bg-green-100/80 px-3 py-1 rounded-full inline-block">
            Agricultural Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            {subtitle}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const IconComponent = iconMap[feature.icon] || ShieldCheck;

            return (
              <div
                key={feature.id}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  {/* Icon Box */}
                  <div className="w-14 h-14 rounded-xl bg-green-50 text-green-700 flex items-center justify-center mb-6 group-hover:bg-green-700 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-700 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-green-700">
                  <span>Learn More</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
