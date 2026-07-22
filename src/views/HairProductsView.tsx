import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { Product } from '../types';
import { PRODUCTS } from '../data/dummyData';
import { Breadcrumb } from '../components/Breadcrumb';
import { RatingStars } from '../components/RatingStars';
import { Search, ShoppingCart, SlidersHorizontal, ArrowUpDown, ChevronRight, X, Sparkles, Check, Flame, Award, Heart } from 'lucide-react';

export const HairProductsView: React.FC = () => {
  const { addToCart, setView } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('popular');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const itemsPerPage = 8;

  // Unique categories
  const categories = ['All', 'Serums', 'Shampoos', 'Supplements', 'Oils', 'Kits'];

  // Search, Filter, Sort Logics
  const processedProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Search
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.shortDescription.toLowerCase().includes(query) ||
          p.ingredients.some((ing) => ing.toLowerCase().includes(query))
      );
    }

    // Category
    if (activeCategory !== 'All') {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Sort
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } // 'popular' uses raw list index/default

    return result;
  }, [searchQuery, activeCategory, sortBy]);

  // Pagination
  const totalPages = Math.ceil(processedProducts.length / itemsPerPage);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return processedProducts.slice(start, start + itemsPerPage);
  }, [processedProducts, currentPage]);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const handleBuyNow = (product: Product) => {
    addToCart(product, 1);
    setView('cart');
  };

  // Filter out the selected product for Related Products (up to 3)
  const relatedProducts = useMemo(() => {
    if (!selectedProduct) return [];
    return PRODUCTS.filter(
      (p) => p.category === selectedProduct.category && p.id !== selectedProduct.id
    ).slice(0, 3);
  }, [selectedProduct]);

  return (
    <div className="bg-gray-50 dark:bg-gray-950 pb-20 min-h-screen">
      <Breadcrumb items={[{ label: 'Clinical Products Shop' }]} />

      {/* Header Banner */}
      <section className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 py-12 px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs uppercase font-extrabold tracking-widest text-brand-primary">
            100% Active Botanical Science
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mt-1">
            Doctor-Formulated Hair Growth Products
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-2">
            Target follicle miniaturization and dry scales with clinical-grade active ingredients including Redensyl, Procapil, Saw Palmetto, and high-potency Biotin. Safe for daily long-term therapeutic routines.
          </p>
        </div>
      </section>

      {/* Controls Hub */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-4">
        <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col lg:flex-row gap-4 justify-between items-center">
          
          {/* Search Box */}
          <div className="relative w-full lg:max-w-xs">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search products, ingredients..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-gray-950 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-primary text-gray-950 dark:text-white placeholder-gray-400 border border-transparent dark:border-gray-800"
            />
          </div>

          {/* Category Filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0 scrollbar-none">
            <SlidersHorizontal className="w-3.5 h-3.5 text-gray-400 shrink-0 hidden lg:block mr-1" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-3 py-2 rounded-xl text-[11px] font-semibold whitespace-nowrap cursor-pointer transition-all ${
                  activeCategory === cat
                    ? 'bg-brand-primary text-white'
                    : 'bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort dropdown */}
          <div className="relative w-full lg:max-w-xs flex items-center gap-2">
            <ArrowUpDown className="w-4 h-4 text-gray-400 shrink-0" />
            <select
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-3 py-2 bg-gray-50 dark:bg-gray-950 text-xs rounded-xl focus:outline-none border border-transparent dark:border-gray-800 text-gray-800 dark:text-gray-200"
            >
              <option value="popular">Popularity</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Best Rated</option>
            </select>
          </div>

        </div>

        {/* Dynamic Products Grid */}
        {paginatedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {paginatedProducts.map((p) => (
              <div
                key={p.id}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Image with Tag */}
                  <div className="relative h-56 bg-gray-50 dark:bg-gray-800/50 flex items-center justify-center overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-3 left-3 bg-brand-primary/10 text-brand-primary dark:text-emerald-400 text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md">
                      {p.category}
                    </span>
                  </div>

                  {/* Body details */}
                  <div className="p-5 space-y-2">
                    <h3 className="font-display text-sm font-bold text-gray-900 dark:text-white line-clamp-1">
                      {p.name}
                    </h3>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 min-h-[32px]">
                      {p.shortDescription}
                    </p>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-base font-black text-gray-900 dark:text-white">
                        ${p.price}.00
                      </span>
                      <RatingStars rating={p.rating} size={11} />
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="px-5 pb-5 pt-2 grid grid-cols-2 gap-2 border-t border-gray-50 dark:border-gray-800/80">
                  <button
                    onClick={() => setSelectedProduct(p)}
                    className="py-2 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 text-gray-700 dark:text-gray-200 text-[11px] font-bold transition-all cursor-pointer text-center"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => addToCart(p, 1)}
                    className="py-2 rounded-lg bg-brand-primary hover:bg-brand-primary-light text-white text-[11px] font-bold transition-all shadow-sm shadow-brand-primary/10 cursor-pointer flex items-center justify-center gap-1"
                  >
                    <ShoppingCart className="w-3 h-3" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-3xl border border-dashed border-gray-200 dark:border-gray-800 mt-10">
            <ShoppingCart className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto" />
            <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white mt-4">No Products Found</h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-sm mx-auto mt-1">
              No clinical hair formulations matched your selected category or query keywords.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-brand-primary text-white text-xs font-bold cursor-pointer"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="px-3 py-1.5 rounded-lg bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-800 text-xs font-bold hover:bg-gray-50 disabled:opacity-50 cursor-pointer"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-8 h-8 rounded-lg text-xs font-bold cursor-pointer flex items-center justify-center ${
                  currentPage === i + 1
                    ? 'bg-brand-primary text-white'
                    : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:bg-gray-50'
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className="px-3 py-1.5 rounded-lg bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-800 text-xs font-bold hover:bg-gray-50 disabled:opacity-50 cursor-pointer"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Product Details Drawer/Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl relative border border-gray-100 dark:border-gray-800">
            {/* Close */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-black/10 text-white lg:bg-gray-50 lg:text-gray-500 hover:scale-105 transition-all cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Inner Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12">
              
              {/* Product Gallery Media (Col 5) */}
              <div className="md:col-span-5 bg-gray-50 dark:bg-gray-800/40 p-6 flex flex-col justify-center items-center border-r border-gray-100 dark:border-gray-800">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="max-h-64 object-contain rounded-2xl mix-blend-multiply dark:mix-blend-normal"
                  referrerPolicy="no-referrer"
                />
                <div className="mt-4 flex items-center gap-1 bg-amber-50 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-900 px-3 py-1 rounded-xl text-brand-accent text-[10px] font-bold uppercase tracking-wider">
                  <Flame className="w-3.5 h-3.5" /> Best-Selling Formula
                </div>
              </div>

              {/* Product Details Content (Col 7) */}
              <div className="md:col-span-7 p-6 sm:p-8 max-h-[85vh] overflow-y-auto space-y-6">
                <div>
                  <span className="text-[10px] uppercase font-black text-brand-primary tracking-widest block">
                    {selectedProduct.category}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-black text-gray-900 dark:text-white mt-1">
                    {selectedProduct.name}
                  </h3>
                  <div className="flex items-center gap-4 mt-2">
                    <RatingStars rating={selectedProduct.rating} size={13} />
                    <span className="text-xs text-gray-400 font-semibold">
                      {selectedProduct.reviewsCount} Verified Reviews
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-950/60 border border-gray-100 dark:border-gray-900">
                  <div>
                    <span className="block text-xs text-gray-400">Total Price (incl. tax)</span>
                    <span className="text-2xl font-black text-gray-900 dark:text-white">
                      ${selectedProduct.price}.00
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="block text-xs text-brand-secondary font-bold">● In Stock</span>
                    <span className="block text-[10px] text-gray-400">Ships same day in secure packaging</span>
                  </div>
                </div>

                {/* Long Description */}
                <div className="space-y-1.5">
                  <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                    Scientific Description
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {selectedProduct.description}
                  </p>
                </div>

                {/* Benefits checklist */}
                {selectedProduct.benefits && (
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                      Expected Benefits
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {selectedProduct.benefits.map((ben, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400 font-medium">
                          <Check className="w-4 h-4 text-brand-secondary mt-0.5 shrink-0" />
                          <span>{ben}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Ingredients tag cloud */}
                {selectedProduct.ingredients && (
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                      Active Ingredients
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {selectedProduct.ingredients.map((ing) => (
                        <span
                          key={ing}
                          className="px-2 py-1 text-[10px] font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Instructions */}
                {selectedProduct.howToUse && (
                  <div className="space-y-1.5 p-4 rounded-xl bg-emerald-50/40 dark:bg-emerald-950/25 border border-emerald-100/50 dark:border-emerald-900/50">
                    <h4 className="text-xs font-bold text-brand-primary dark:text-emerald-400 uppercase tracking-wider">
                      How To Apply
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      {selectedProduct.howToUse}
                    </p>
                  </div>
                )}

                {/* Actions */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <button
                    onClick={() => {
                      addToCart(selectedProduct, 1);
                      setSelectedProduct(null);
                    }}
                    className="py-3 rounded-xl border border-gray-200 dark:border-gray-800 hover:bg-gray-50 text-gray-700 dark:text-gray-300 font-bold text-sm cursor-pointer"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => {
                      handleBuyNow(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="py-3 rounded-xl bg-brand-primary hover:bg-brand-primary-light text-white font-bold text-sm transition-all shadow-md shadow-brand-primary/10 cursor-pointer"
                  >
                    Buy It Now
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};
