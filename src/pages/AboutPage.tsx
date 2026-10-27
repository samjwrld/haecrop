import React from 'react';
import { siteConfig } from '../config/site';
import { StatsSection } from '../components/StatsSection';
import { SEO } from '../components/SEO';
import { Target, Compass, Award, Sprout, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { about } = siteConfig;

  return (
    <div className="w-full">
      <SEO
        title="About Us"
        description="Learn about HYCROP Agri Solutions, our heritage, mission, and vision to provide premium agricultural inputs and sustainable farming solutions."
      />
      {/* Hero Header */}
      <section className="py-20 bg-gradient-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="px-3.5 py-1 bg-white/10 text-white text-xs font-bold rounded-full uppercase tracking-wider border border-white/20">
            About Our Organization
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            {about.title}
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto font-normal">
            {about.subtitle}
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-xs font-bold text-green-700 uppercase tracking-widest bg-green-50 px-3 py-1 rounded-full">
                Heritage & Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {about.storyHeading}
              </h2>

              <div className="space-y-4 text-base text-slate-600 leading-relaxed font-normal">
                {about.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80">
                <img
                  src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1000&q=80"
                  alt="HYCROP Farmers Field"
                  className="w-full h-[480px] object-cover object-center"
                />
              </div>

              {/* Floating Highlight Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-4 max-w-xs">
                <div className="w-12 h-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0">
                  <Sprout className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">100% Quality Tested</p>
                  <p className="text-xs text-slate-500">Formulated for regional climate</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Vision & Mission Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Guided by Vision & Purpose
            </h2>
            <p className="text-base text-slate-600">
              We aim to make modern agricultural inputs accessible, reliable, and sustainable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {about.vision}
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {about.mission}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
