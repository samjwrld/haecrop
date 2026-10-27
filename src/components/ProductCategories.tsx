import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../config/site';
import { Bug, ShieldAlert, Scissors, Sprout, Activity, ArrowRight } from 'lucide-react';

const categoryIconMap: Record<string, React.ElementType> = {
  Bug,
  ShieldAlert,
  Scissors,
  Sprout,
  Activity
};

export const ProductCategories: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold text-green-700 tracking-widest uppercase bg-green-50 px-3 py-1 rounded-full inline-block">
              Product Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Product Categories
            </h2>
            <p className="text-base text-slate-600 max-w-2xl font-normal">
              Targeted solutions engineered to protect crops, cure plant diseases, and boost yields safely.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-bold text-green-800 hover:text-green-900 group"
          >
            <span>View All Products Catalog</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.productCategories.map((category) => {
            const IconComponent = categoryIconMap[category.icon] || Sprout;

            return (
              <Link
                key={category.id}
                to={`/products/${category.id}`}
                className="group relative bg-slate-50 hover:bg-green-800 rounded-2xl p-7 border border-slate-200/80 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 overflow-hidden"
              >
                {/* Background Leaf Accent */}
                <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 group-hover:text-white transition-opacity">
                  <IconComponent className="w-40 h-40" />
                </div>

                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-white text-green-700 group-hover:bg-white/20 group-hover:text-white flex items-center justify-center shadow-sm transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-green-700 group-hover:text-green-200 transition-colors uppercase tracking-wider block mb-1">
                      {category.tagline}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-white transition-colors">
                      {category.name}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 group-hover:text-slate-100 transition-colors leading-relaxed">
                    {category.description}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-xs font-bold text-green-700 group-hover:text-amber-300 transition-colors">
                    <span>Explore {category.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};
