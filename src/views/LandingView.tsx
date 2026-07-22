import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { motion } from 'motion/react';
import { RatingStars } from '../components/RatingStars';
import { TESTIMONIALS, FAQS } from '../data/dummyData';
import {
  Sparkles,
  Stethoscope,
  ShoppingBag,
  ShieldAlert,
  ArrowRight,
  UserCheck,
  CheckCircle,
  HelpCircle,
  ChevronDown,
  Calendar,
  Layers,
  Activity,
  Award
} from 'lucide-react';

export const LandingView: React.FC = () => {
  const { setView, setSelectedDoctorId, setSelectedProductId, addToCart, addToast } = useApp();
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  // Take first 3 testimonials for preview
  const featuredTestimonials = TESTIMONIALS.slice(0, 3);
  // Take first 5 FAQs for landing preview
  const featuredFaqs = FAQS.slice(0, 5);

  const toggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  const stats = [
    { value: '10,000+', label: 'Happy Clients' },
    { value: '5,000+', label: 'Hair Transplants' },
    { value: '98%', label: 'Success Rate' },
    { value: '15+', label: 'Years Experience' },
  ];

  const services = [
    {
      title: 'Clinical Hair Inquiry',
      desc: 'Inquire about personalized medical solutions, scalp therapy, and premium clinical treatments.',
      icon: <Stethoscope className="w-6 h-6 text-current" />,
      action: () => setView('booking'),
      cta: 'Inquire Now'
    },
    {
      title: 'Hair Health Products',
      desc: 'Browse 100% toxin-free, FDA-approved clinical serums, DHT-blocking shampoos, and vitamins.',
      icon: <ShoppingBag className="w-6 h-6 text-current" />,
      action: () => setView('products'),
      cta: 'Explore Shop'
    },
    {
      title: 'Hair Transplant Wing',
      desc: 'Permanent high-density hair restoration using state-of-the-art painless Micro-FUE technologies.',
      icon: <Layers className="w-6 h-6 text-current" />,
      action: () => setView('transplant'),
      cta: 'Learn Procedure'
    },
    {
      title: 'Digital Scalp Analysis',
      desc: 'Understand your hair fall grade with our AI scalp analysis and get an instant digital prescription.',
      icon: <Activity className="w-6 h-6 text-current" />,
      action: () => {
        addToast('Scalp analysis questionnaire started (Dummy Flow)', 'info');
        setView('booking');
      },
      cta: 'Analyze Now'
    },
  ];

  const steps = [
    {
      num: '01',
      title: 'Submit Inquiry',
      desc: 'Share your hair wellness goals and scalp concerns online.'
    },
    {
      num: '02',
      title: 'Coordinator Review',
      desc: 'Our medical admin team reviews your case within 24 hours.'
    },
    {
      num: '03',
      title: 'Custom Care Proposal',
      desc: 'Receive tailored clinical plans and product suggestions.'
    },
    {
      num: '04',
      title: 'Lasting Results',
      desc: 'Enjoy denser, healthier hair with verified medical-grade support.'
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-b from-emerald-50/50 via-white to-white dark:from-gray-950 dark:via-gray-950 dark:to-gray-950 pt-10 pb-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Info */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 dark:bg-emerald-950/40 text-[#1E7D5B] dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900 rounded-full text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 bg-[#D4A017] rounded-full animate-pulse shrink-0"></span>
              <span>Trusted by 10,000+ Happy Clients</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#1F2937] dark:text-white leading-[1.1]">
              Healthy Hair <br className="hidden sm:inline" />Starts With{' '}
              <span className="text-[#30A46C] font-extrabold">
                Expert Care.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-500 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Personalized treatment plans combining medical expertise, clinically-proven products, and world-class transplant procedures for lasting results.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => setView('analysis')}
                className="w-full sm:w-auto px-8 py-4 bg-[#1E7D5B] text-white rounded-2xl font-bold text-lg shadow-xl shadow-emerald-900/20 hover:bg-[#165a42] hover:scale-[1.02] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                Start Hair Analysis
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
              <button
                onClick={() => setView('products')}
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-900 text-[#1F2937] dark:text-white border border-slate-200 dark:border-gray-800 rounded-2xl font-bold text-lg shadow-sm hover:border-[#1E7D5B] dark:hover:border-emerald-500 hover:scale-[1.02] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                Shop Products
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-gray-100 dark:border-gray-900">
              {[
                { title: 'Certified Doctors', icon: <UserCheck className="w-4 h-4 text-brand-secondary" /> },
                { title: 'Safe Treatment', icon: <CheckCircle className="w-4 h-4 text-brand-secondary" /> },
                { title: 'Natural Products', icon: <Sparkles className="w-4 h-4 text-brand-secondary" /> },
                { title: 'Free Follow-ups', icon: <Award className="w-4 h-4 text-brand-secondary" /> },
              ].map((badge, index) => (
                <div key={index} className="flex items-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-400 justify-center lg:justify-start">
                  {badge.icon}
                  <span>{badge.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Right Media / Photo / Stats */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center">
            {/* Ambient glowing blobs */}
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-brand-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-secondary/10 rounded-full blur-3xl" />

            <div className="relative z-10 w-full max-w-sm sm:max-w-md">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600"
                alt="Expert Doctor Consultation"
                className="rounded-3xl shadow-2xl border-4 border-white dark:border-gray-900 object-cover w-full h-[380px] sm:h-[450px]"
                referrerPolicy="no-referrer"
              />

              {/* Floating statistics card */}
              <div className="absolute bottom-6 -left-6 sm:-left-10 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 max-w-[200px]">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-secondary animate-ping" />
                  <span className="text-[10px] font-bold tracking-wider text-brand-secondary uppercase">
                    Live Active Clinic
                  </span>
                </div>
                <h4 className="text-xl sm:text-2xl font-display font-black text-gray-900 dark:text-white leading-none">
                  98.4%
                </h4>
                <p className="text-xs text-gray-500 mt-1 leading-normal">
                  Shedding arrest rate in first 30 days of therapy
                </p>
              </div>

              {/* Floating doctor credential badge */}
              <div className="absolute top-6 -right-6 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-brand-primary shrink-0" />
                <div>
                  <span className="block text-xs font-bold text-gray-900 dark:text-white">ABHRS Certified</span>
                  <span className="block text-[10px] text-gray-500">Board-certified specialists</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <span className="block font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-primary dark:text-brand-secondary">
                  {stat.value}
                </span>
                <span className="block text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium mt-1 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-primary">
              Three Main Treatment Pillars
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Medical Science Meets Hair Restoration
            </h2>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
              We diagnose the root causes of follicle weakness. Our clinic provides custom-blended pharmaceutical therapies, botanical products, and microscopic hair transplants.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={service.action}
                className="bg-white dark:bg-gray-900 p-6 rounded-[32px] shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#1E7D5B] transition-colors shrink-0">
                    <span className="text-[#1E7D5B] dark:text-emerald-400 group-hover:text-white transition-colors duration-200">
                      {service.icon}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#1E7D5B] dark:text-[#30A46C] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-gray-400 leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>
                <button
                  className="w-full py-2.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-[#1E7D5B] dark:text-emerald-400 font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm group-hover:bg-[#1E7D5B] group-hover:text-white"
                >
                  {service.cta}
                  <ArrowRight className="w-3.5 h-3.5 animate-pulse" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How It Works Section */}
      <section className="py-20 bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-primary">
              Your Hair Recovery Protocol
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Simple 4-Step Scientific Journey
            </h2>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
              No generic suggestions. We follow a highly calculated, clinical approach to monitor, nourish, and permanently regenerate healthy follicles.
            </p>
          </div>

          {/* Step Timeline Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            
            {/* Connecting lines for desktop */}
            <div className="hidden lg:block absolute top-10 left-16 right-16 h-0.5 bg-gray-100 dark:bg-gray-800 z-0" />

            {steps.map((step, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-800/60 text-brand-primary dark:text-emerald-400 font-display font-extrabold text-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-sm">
                  {step.num}
                </div>
                <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Before & After / Testimonials Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950 px-4 sm:px-6 lg:px-8 border-y border-gray-100 dark:border-gray-800/80">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-primary">
              Real Patients, Permanent Confidence
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Clinical Success Showcases
            </h2>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
              Explore actual photo progress of customers who followed our customized medical treatments or undertook FUE transplant surgeries.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTestimonials.map((test) => (
              <div
                key={test.id}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col justify-between"
              >
                <div>
                  {/* Photo Comparison if available */}
                  {test.beforeImage && test.afterImage ? (
                    <div className="grid grid-cols-2 gap-2 mb-6 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800">
                      <div className="relative h-28 bg-gray-100 dark:bg-gray-800">
                        <img
                          src={test.beforeImage}
                          alt="Before Treatment"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-black/70 text-[9px] font-bold text-white uppercase tracking-wider">
                          Before
                        </span>
                      </div>
                      <div className="relative h-28 bg-gray-100 dark:bg-gray-800">
                        <img
                          src={test.afterImage}
                          alt="After Treatment"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-brand-primary/80 text-[9px] font-bold text-white uppercase tracking-wider">
                          12 Months
                        </span>
                      </div>
                    </div>
                  ) : null}

                  {/* Rating */}
                  <div className="mb-4">
                    <RatingStars rating={test.rating} size={14} />
                  </div>

                  {/* Condition Tag */}
                  <div className="inline-block px-2.5 py-1 rounded bg-brand-primary/5 dark:bg-brand-primary/10 text-[11px] font-bold text-brand-primary dark:text-brand-secondary mb-3">
                    {test.condition}
                  </div>

                  {/* Content */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed italic mb-6">
                    &ldquo;{test.review}&rdquo;
                  </p>
                </div>

                {/* Profile row */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <img
                    src={test.image}
                    alt={test.name}
                    className="w-10 h-10 rounded-full object-cover border border-gray-100 dark:border-gray-800"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                      {test.name}
                    </h4>
                    <span className="block text-[11px] text-gray-400">
                      Regimen: {test.treatment}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial Bottom Badge */}
          <div className="text-center pt-4">
            <button
              onClick={() => setView('about')}
              className="px-6 py-3 rounded-xl bg-white dark:bg-gray-900 text-brand-primary dark:text-white border border-gray-200 dark:border-gray-800 font-bold text-sm hover:bg-gray-50 dark:hover:bg-gray-800 hover:shadow-sm transition-all cursor-pointer inline-flex items-center gap-2"
            >
              See All Patient Success Stories
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. FAQ Accordion Section */}
      <section className="py-20 bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-primary">
              Got Questions?
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Frequently Asked Medical Questions
            </h2>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
              Clear, transparent answers from our lead surgeons and clinical dermatologists.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-3">
            {featuredFaqs.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/40 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex justify-between items-center px-6 py-5 text-left text-gray-950 dark:text-white font-semibold text-sm sm:text-base hover:text-brand-primary transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 shrink-0 text-brand-primary" />
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-brand-primary' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-900">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Banner inside Landing */}
          <div className="mt-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl shadow-brand-primary/10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
            <div className="relative z-10 max-w-2xl space-y-4">
              <h3 className="font-display text-2xl sm:text-3xl font-bold">
                Ready to consult a licensed trichologist?
              </h3>
              <p className="text-sm text-emerald-50 leading-relaxed">
                Take the first step to arrest hair shedding. Share symptoms, get personalized diagnosis and prescriptions, or book hair grafts online.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => setView('booking')}
                  className="px-6 py-3 rounded-xl bg-white text-brand-primary font-bold text-sm shadow-md hover:bg-gray-50 transition-all cursor-pointer"
                >
                  Book Instant Consultation
                </button>
                <button
                  onClick={() => setView('contact')}
                  className="px-6 py-3 rounded-xl bg-transparent border border-white/30 hover:border-white text-white font-bold text-sm transition-all cursor-pointer"
                >
                  Call Our Clinic
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
