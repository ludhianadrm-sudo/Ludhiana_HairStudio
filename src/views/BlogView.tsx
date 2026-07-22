import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { BlogPost } from '../types';
import { BLOGS } from '../data/dummyData';
import { Breadcrumb } from '../components/Breadcrumb';
import { Search, User, Clock, Calendar, ArrowRight, X, Heart, Sparkles, BookOpen, ChevronRight } from 'lucide-react';

export const BlogView: React.FC = () => {
  const { addToast } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Retrieve unique categories
  const categories = useMemo(() => {
    const list = new Set(BLOGS.map((b) => b.category));
    return ['All', ...Array.from(list)];
  }, []);

  // Filter logic
  const filteredBlogs = useMemo(() => {
    return BLOGS.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        activeCategory === 'All' || post.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  // Designate the first blog post as the 'Featured Post'
  const featuredPost = BLOGS[0];
  const secondaryPosts = useMemo(() => {
    return filteredBlogs.filter((p) => p.id !== featuredPost.id || searchQuery || activeCategory !== 'All');
  }, [filteredBlogs, featuredPost, searchQuery, activeCategory]);

  const handleReadPost = (post: BlogPost) => {
    setSelectedPost(post);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-950 pb-20 min-h-screen">
      <Breadcrumb items={[{ label: 'Trichology Blog' }]} />

      {/* Header Banner */}
      <section className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 py-12 px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs uppercase font-extrabold tracking-widest text-brand-primary">
            Ludhiana Hair Studio Scientific Journals
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mt-1">
            Science-Based Hair Care & Scalp Articles
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-2">
            Read medical journals, diet guides, and recovery tips penned directly by certified panel dermatologists, transplant surgeons, and nutritional specialists.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-12">
        {/* Search & Category Filter */}
        <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row gap-4 justify-between items-center">
          {/* Search */}
          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-950 text-xs rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-primary text-gray-950 dark:text-white placeholder-gray-400 border border-transparent dark:border-gray-800"
            />
          </div>

          {/* Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold whitespace-nowrap cursor-pointer transition-all ${
                  activeCategory === cat
                    ? 'bg-brand-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post Block (Only visible when no active search/filters) */}
        {!searchQuery && activeCategory === 'All' && (
          <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 hover:shadow-md transition-all">
            <div className="lg:col-span-7 h-64 lg:h-auto bg-gray-100">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-brand-accent" /> Featured Journal
                </div>
                <h2 className="font-display text-lg sm:text-2xl font-black text-gray-900 dark:text-white leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {featuredPost.summary}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-gray-50 dark:border-gray-800">
                {/* Author Info */}
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4" />
                    <span className="font-semibold text-gray-700 dark:text-gray-300">{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleReadPost(featuredPost)}
                  className="px-5 py-3 rounded-xl bg-brand-primary hover:bg-brand-primary-light text-white text-xs font-bold transition-all shadow-sm shadow-brand-primary/15 cursor-pointer flex items-center justify-center gap-1.5 self-start"
                >
                  Read Full Article
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Secondary Article Grid */}
        {secondaryPosts.length > 0 ? (
          <div className="space-y-6">
            <h3 className="font-display font-bold text-sm sm:text-base text-gray-900 dark:text-white uppercase tracking-wider">
              Recent Scientific Publications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {secondaryPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Thumbnail */}
                    <div className="relative h-48 bg-gray-100 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute top-3 left-3 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md text-brand-primary">
                        {post.category}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="p-5 space-y-2">
                      <h4 className="font-display font-extrabold text-sm text-gray-900 dark:text-white line-clamp-2 min-h-[40px]">
                        {post.title}
                      </h4>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">
                        {post.summary}
                      </p>
                    </div>
                  </div>

                  {/* Footer metadata */}
                  <div className="p-5 pt-0 flex items-center justify-between border-t border-gray-50 dark:border-gray-800/80 mt-2">
                    <div className="flex items-center gap-1 text-[10px] text-gray-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                    <button
                      onClick={() => handleReadPost(post)}
                      className="text-xs font-bold text-brand-primary dark:text-brand-secondary hover:underline cursor-pointer inline-flex items-center gap-1"
                    >
                      Read Post <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-3xl border border-dashed border-gray-200 dark:border-gray-800 mt-10">
            <BookOpen className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto" />
            <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white mt-4">No Articles Found</h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-sm mx-auto mt-1">
              We couldn’t find any hair care articles matching your queries.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-brand-primary text-white text-xs font-bold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Full Article Modal Reader */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl relative border border-gray-100 dark:border-gray-800">
            {/* Close */}
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-black/10 text-white lg:bg-gray-50 lg:text-gray-500 lg:hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Thumbnail */}
            <div className="relative h-56 sm:h-64 bg-gray-100">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex items-end p-6">
                <div>
                  <span className="px-2 py-0.5 rounded bg-brand-primary text-white text-[9px] font-bold uppercase tracking-wider">
                    {selectedPost.category}
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-black text-white mt-2 leading-tight">
                    {selectedPost.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              
              {/* Author Strip */}
              <div className="flex items-center justify-between text-xs text-gray-400 border-b border-gray-100 dark:border-gray-800 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold">
                    {selectedPost.author.charAt(4)}
                  </div>
                  <div>
                    <span className="block font-bold text-gray-700 dark:text-gray-200">Written by {selectedPost.author}</span>
                    <span className="block text-[10px]">Panel Clinical Specialist</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {selectedPost.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {selectedPost.readTime}</span>
                </div>
              </div>

              {/* Summary quote */}
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed italic border-l-4 border-brand-primary pl-4 py-1">
                {selectedPost.summary}
              </p>

              {/* Main Content */}
              <div className="space-y-4">
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                  {selectedPost.content}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  Our clinical trial statistics suggest that consistent diagnostic follow-up on top of clinical-grade active shampoos and custom serums accelerates results by up to 2.4x. Patients undergoing transplantation are highly advised to follow our specialized Post-Transplant sterile recovery protocols for the first 14 days to maximize survival rates.
                </p>
              </div>

              {/* Scientific Trust Badge */}
              <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100/50 dark:border-emerald-900/50 flex gap-3 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                <Sparkles className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                <div>
                  <strong>Medical Disclaimer:</strong> This article is written for educational and clinical guidance purposes only. It should not substitute personalized clinical scalp diagnosis or certified blood-work prescriptions.
                </div>
              </div>

              {/* Modal action close */}
              <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="w-full py-3 rounded-xl bg-gray-50 dark:bg-gray-850 hover:bg-gray-100 text-gray-700 dark:text-gray-300 font-bold text-xs transition-all cursor-pointer text-center"
                >
                  Finished Reading
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
