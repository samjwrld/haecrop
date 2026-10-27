import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { siteConfig, Product } from '../config/site';
import { ProductDetailModal } from './ProductDetailModal';
import { Sparkles, ArrowRight, Check, Eye } from 'lucide-react';

export const FeaturedProducts: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const navigate = useNavigate();

  // Show popular or top products
  const popularProducts = siteConfig.products.filter(p => p.isPopular).concat(
    siteConfig.products.filter(p => !p.isPopular).slice(0, 3)
  ).slice(0, 4);

  const handleConsult = (productName: string) => {
    navigate(`/contact?product=${encodeURIComponent(productName)}`);
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>High-Demand Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured Products
          </h2>
          <p className="text-base text-slate-600 font-normal">
            Proven formulas trusted by thousands of farmers across South India for maximum crop protection and yield.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Image & Category Tag */}
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-green-800/90 text-white text-[11px] font-bold rounded-lg shadow-sm backdrop-blur-sm">
                      {product.categoryLabel}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-xs gap-1.5 backdrop-blur-[2px]"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Quick View</span>
                  </button>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-green-700 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  <ul className="space-y-1.5 pt-1">
                    {product.features.slice(0, 2).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-[12px] text-slate-600">
                        <Check className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-800 font-bold text-xs hover:bg-green-800 hover:text-white hover:border-green-800 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View Catalog Banner */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/products')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-green-800 hover:bg-green-900 text-white font-bold text-sm shadow-md transition-all hover:scale-105"
          >
            <span>Explore All 50+ HYCROP Products</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onConsult={handleConsult}
      />
    </section>
  );
};
