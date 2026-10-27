import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';
import { Image, ArrowRight } from 'lucide-react';

export const GalleryPreview: React.FC = () => {
  const images = siteConfig.galleryImages.slice(0, 6);

  return (
    <section className="py-20 bg-green-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider">
            <Image className="w-3.5 h-3.5 text-green-700" />
            <span>Field Impressions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Product Gallery
          </h2>
          <p className="text-base text-slate-600 font-normal leading-relaxed">
            Browse some of our best-selling organic fertilizers, eco-friendly pesticides, and agricultural solutions that promote healthy, sustainable farming.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img) => (
            <div
              key={img.id}
              className="group relative h-64 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 image-zoom-container bg-slate-200"
            >
              <img
                src={img.image}
                alt={img.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <span className="inline-block px-2 py-0.5 bg-green-600 text-[10px] font-bold rounded-full uppercase tracking-wider">
                  {img.category}
                </span>
                <h3 className="text-lg font-bold drop-shadow-sm">{img.title}</h3>
                {img.description && (
                  <p className="text-xs text-slate-200 line-clamp-1">{img.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery Link */}
        <div className="mt-12 text-center">
          <Link
            to="/ImageGallery"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-green-800 hover:bg-green-900 text-white font-bold text-sm shadow-md transition-all hover:scale-105"
          >
            <span>View Full Image & Video Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
