import React from 'react';
import { Product } from '../config/site';
import { X, Check, Sprout, PhoneCall, ShieldCheck } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onConsult: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onConsult,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative h-56 sm:h-64 bg-slate-100 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
            <span className="inline-block px-2.5 py-0.5 bg-green-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">
              {product.categoryLabel}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">{product.name}</h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
              Description
            </h4>
            <p className="text-base text-slate-700 leading-relaxed font-normal">
              {product.description}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Key Advantages & Benefits
            </h4>
            <ul className="space-y-2">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Suitable Crops */}
          {product.crops && product.crops.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Recommended Crops
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.crops.map((crop, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 text-slate-800 text-xs font-semibold rounded-lg border border-slate-200"
                  >
                    <Sprout className="w-3.5 h-3.5 text-green-600" />
                    {crop}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Trust Note */}
          <div className="p-4 rounded-xl bg-green-50 border border-green-200 flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-green-700 shrink-0" />
            <p className="text-xs text-green-900 font-medium">
              Quality guaranteed by HYCROP Agri Solutions. Always consult our field agronomist for dosage recommendations according to your soil and crop condition.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => {
              onConsult(product.name);
              onClose();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-green-800 hover:bg-green-900 text-white font-bold text-sm shadow-md transition-all"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Request Consultation For {product.name}</span>
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold text-sm transition-colors"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
