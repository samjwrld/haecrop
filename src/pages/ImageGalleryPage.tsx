import React, { useState } from 'react';
import { siteConfig, GalleryItem } from '../config/site';
import { SEO } from '../components/SEO';
import { Image, X, ZoomIn } from 'lucide-react';

export const ImageGalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Fertilizer', 'Protection', 'Soil Health', 'Harvest', 'Application', 'Equipment'];

  const filteredImages = siteConfig.galleryImages.filter(
    (img) => selectedCategory === 'All' || img.category === selectedCategory
  );

  return (
    <div className="w-full">
      <SEO
        title="Photo Gallery"
        description="Browse our agricultural photo gallery showing field applications, crop results, organic fertilizers, and crop protection products."
      />
      {/* Banner */}
      <section className="py-16 bg-gradient-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="px-3.5 py-1 bg-white/10 text-white text-xs font-bold rounded-full uppercase tracking-wider border border-white/20">
            Visual Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Our Product Gallery
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto font-normal">
            Browse some of our best-selling organic fertilizers, eco-friendly pesticides, and agricultural solutions that promote healthy, sustainable farming.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-green-50/50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Category Filter Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-green-800 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((img) => (
              <div
                key={img.id}
                onClick={() => setLightboxImage(img)}
                className="group relative h-72 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 image-zoom-container bg-slate-200 cursor-pointer border border-slate-200"
              >
                <img
                  src={img.image}
                  alt={img.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full bg-black/40 text-white backdrop-blur-sm">
                  <ZoomIn className="w-5 h-5" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <span className="inline-block px-2.5 py-0.5 bg-green-600 text-[10px] font-bold rounded-full uppercase tracking-wider">
                    {img.category}
                  </span>
                  <h3 className="text-lg font-bold drop-shadow-sm">{img.title}</h3>
                  {img.description && (
                    <p className="text-xs text-slate-200 line-clamp-2 leading-relaxed">
                      {img.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-black text-white backdrop-blur-md transition-colors z-20"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={lightboxImage.image}
                alt={lightboxImage.title}
                className="max-h-[75vh] w-auto object-contain mx-auto"
              />
            </div>

            <div className="p-6 bg-slate-900 text-white space-y-2">
              <span className="inline-block px-3 py-1 bg-green-700 text-white text-xs font-bold rounded-full uppercase">
                {lightboxImage.category}
              </span>
              <h3 className="text-2xl font-extrabold">{lightboxImage.title}</h3>
              {lightboxImage.description && (
                <p className="text-sm text-slate-300 font-normal leading-relaxed">
                  {lightboxImage.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
