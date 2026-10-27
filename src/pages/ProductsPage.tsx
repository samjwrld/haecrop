import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { siteConfig, Product } from '../config/site';
import { ProductDetailModal } from '../components/ProductDetailModal';
import { SEO } from '../components/SEO';
import { Search, Filter, ArrowRight, Check, Eye, PackageX } from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(category || 'all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categoryObj = siteConfig.productCategories.find(c => c.id === selectedCategory);
  const pageTitle = categoryObj ? `${categoryObj.name} Products` : 'Products Catalog';

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory('all');
    }
  }, [category]);

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      navigate('/products');
    } else {
      navigate(`/products/${catId}`);
    }
  };

  const handleConsult = (productName: string) => {
    navigate(`/contact?product=${encodeURIComponent(productName)}`);
  };

  // Filter products by selected category and search query
  const filteredProducts = siteConfig.products.filter((p) => {
    const matchesCat = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch = 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.crops && p.crops.some(c => c.toLowerCase().includes(searchQuery.toLowerCase())));

    return matchesCat && matchesSearch;
  });

  return (
    <div className="w-full">
      <SEO
        title={pageTitle}
        description="Explore our high-quality agricultural products catalog including insecticides, fungicides, herbicides, and plant growth regulators."
      />
      {/* Banner */}
      <section className="py-16 bg-gradient-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="px-3.5 py-1 bg-white/10 text-white text-xs font-bold rounded-full uppercase tracking-wider border border-white/20">
            Certified Crop Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Our Products Catalog
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-xl mx-auto font-normal">
            Explore our extensive lineup of insecticides, fungicides, herbicides, bactericides, and growth regulators.
          </p>
        </div>
      </section>

      {/* Main Content & Controls */}
      <section className="py-12 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Search & Category Filter Bar */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 space-y-6">
            
            {/* Search Input */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search products by name, pest, or crop (e.g. ABASOL, Chilli, Paddy)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-600 text-sm font-medium"
              />
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center justify-center flex-wrap gap-2 pt-2 border-t border-slate-100">
              <button
                onClick={() => handleCategoryChange('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-green-800 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                All Products ({siteConfig.products.length})
              </button>

              {siteConfig.productCategories.map((cat) => {
                const count = siteConfig.products.filter(p => p.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-green-800 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cat.name} ({count})
                  </button>
                );
              })}
            </div>

          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    {/* Image */}
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
                        <span>Quick Details</span>
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

                  {/* Actions */}
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
          ) : (
            <div className="bg-white p-12 rounded-2xl text-center space-y-3 border border-slate-200">
              <PackageX className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="text-lg font-bold text-slate-800">No products match your filter</h3>
              <p className="text-sm text-slate-500 max-w-sm mx-auto">
                Try searching for another product name or reset your category selection.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  handleCategoryChange('all');
                }}
                className="px-5 py-2 bg-green-800 text-white font-semibold text-xs rounded-xl"
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onConsult={handleConsult}
      />
    </div>
  );
};
