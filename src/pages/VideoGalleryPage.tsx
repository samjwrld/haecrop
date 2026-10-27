import React, { useState } from 'react';
import { siteConfig, VideoItem } from '../config/site';
import { SEO } from '../components/SEO';
import { Play, Video, X } from 'lucide-react';

export const VideoGalleryPage: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  return (
    <div className="w-full">
      <SEO
        title="Video Gallery"
        description="Watch HYCROP field demonstrations, product application guides, crop yield results, and farmer testimonials."
      />
      {/* Banner */}
      <section className="py-16 bg-gradient-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="px-3.5 py-1 bg-white/10 text-white text-xs font-bold rounded-full uppercase tracking-wider border border-white/20">
            Field Demonstrations
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Video Gallery
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto font-normal">
            Watch product application guides, field results, and farmer testimonials from across the region.
          </p>
        </div>
      </section>

      {/* Video Cards Grid */}
      <section className="py-16 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.videoGallery.map((vid) => (
              <div
                key={vid.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Thumbnail */}
                  <div 
                    className="relative h-52 bg-slate-900 cursor-pointer overflow-hidden"
                    onClick={() => setActiveVideo(vid)}
                  >
                    <img
                      src={vid.thumbnail}
                      alt={vid.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-85"
                    />
                    <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/10 transition-colors" />

                    {/* Play Icon Badge */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-green-700/90 text-white flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-green-600 transition-all backdrop-blur-sm">
                        <Play className="w-6 h-6 fill-white ml-0.5" />
                      </div>
                    </div>

                    {vid.duration && (
                      <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/70 text-white text-[10px] font-bold rounded">
                        {vid.duration}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-2">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-green-700 transition-colors leading-snug">
                      {vid.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-normal leading-relaxed">
                      {vid.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => setActiveVideo(vid)}
                    className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-green-800 hover:text-white text-slate-800 font-bold text-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <Video className="w-4 h-4" />
                    <span>Watch Video</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Player Modal */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveVideo(null)}
        >
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-black text-white backdrop-blur-md transition-colors z-20"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="aspect-video w-full bg-black">
              <video
                controls
                autoPlay
                className="w-full h-full"
                src={activeVideo.videoUrl}
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="p-6 bg-slate-900 text-white space-y-1">
              <h3 className="text-xl font-extrabold">{activeVideo.title}</h3>
              <p className="text-xs text-slate-300 font-normal leading-relaxed">
                {activeVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
