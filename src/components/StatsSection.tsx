import React from 'react';
import { siteConfig } from '../config/site';
import { Award, Users, PackageCheck, ThumbsUp } from 'lucide-react';

const statIcons = [Award, Users, PackageCheck, ThumbsUp];

export const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-primary text-white relative overflow-hidden">
      {/* Decorative leaf background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-400/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {siteConfig.stats.map((stat, index) => {
            const IconComponent = statIcons[index % statIcons.length];

            return (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/15 text-center space-y-2 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-white/20 flex items-center justify-center mb-3">
                  <IconComponent className="w-6 h-6 text-amber-300" />
                </div>

                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">
                  {stat.value}
                </div>

                <div className="text-sm sm:text-base font-bold text-amber-200">
                  {stat.label}
                </div>

                <p className="text-xs text-slate-200 font-normal leading-snug">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
