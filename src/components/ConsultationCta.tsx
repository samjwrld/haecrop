import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';
import { Headset, Download, ArrowRight } from 'lucide-react';

export const ConsultationCta: React.FC = () => {
  const handleDownloadCatalog = () => {
    // Open product summary or alert
    alert("HYCROP Product Catalog download started. You can also contact our team for a printed catalog!");
  };

  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 to-slate-900 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="w-14 h-14 mx-auto rounded-2xl bg-green-700/80 text-white flex items-center justify-center shadow-lg border border-green-500/30">
          <Headset className="w-7 h-7 text-green-300" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Need Help Choosing Products?
        </h2>

        <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto font-normal">
          Our agricultural experts are here to help you select the right fertilizers, pesticides, and growth enhancers tailored for your specific soil and crop conditions.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-green-800 hover:bg-green-900 text-white font-bold text-sm shadow-xl transition-all hover:scale-105"
          >
            <span>Get Expert Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <button
            onClick={handleDownloadCatalog}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 font-semibold text-sm transition-all"
          >
            <Download className="w-4 h-4 text-green-400" />
            <span>Download Product Catalog</span>
          </button>
        </div>
      </div>
    </section>
  );
};
