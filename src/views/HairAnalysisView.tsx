import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../context/AppContext';
import { Breadcrumb } from '../components/Breadcrumb';
import { PRODUCTS, DOCTORS } from '../data/dummyData';
import { Product, Doctor } from '../types';
import {
  Sparkles,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  AlertCircle,
  Upload,
  Camera,
  Heart,
  ShieldCheck,
  Award,
  Check,
  ShoppingBag,
  Calendar,
  User,
  Phone,
  Mail,
  FileText,
  Zap,
  Info,
  Clock,
  Activity,
  ArrowRight,
  Star,
  RotateCcw,
  Plus
} from 'lucide-react';

import { ScalpDiagramSVG } from '../components/ScalpDiagramSVG';

// Form Data Interface
export interface HairAnalysisData {
  // Step 1
  fullName: string;
  age: string;
  gender: 'Male' | 'Female' | 'Other';
  phone: string;
  email: string;

  // Step 2
  problems: string[];

  // Step 3
  severity: string;

  // Step 4
  duration: string;

  // Step 5
  familyHistory: string;

  // Step 6
  sleepPattern: string;
  stressLevel: string;
  waterIntake: string;
  smoking: string;
  alcohol: string;
  exercise: string;

  // Step 7
  conditions: string[];
  medications: string;

  // Step 8
  washFrequency: string;
  oilUsage: string;
  stylingProducts: string;
  coloring: string;
  heatStyling: string;

  // Step 9
  dietType: string;
  proteinIntake: string;
  fastFood: string;
  fruitVeg: string;

  // Step 10
  images: {
    front?: string;
    top?: string;
    left?: string;
    right?: string;
    back?: string;
  };
}

const INITIAL_FORM_DATA: HairAnalysisData = {
  fullName: '',
  age: '28',
  gender: 'Male',
  phone: '',
  email: '',
  problems: ['Hair Fall', 'Hair Thinning'],
  severity: 'Stage 3',
  duration: '6–12 months',
  familyHistory: 'Father has hair loss',
  sleepPattern: '5–6 hours',
  stressLevel: 'Moderate',
  waterIntake: '1–2 L',
  smoking: 'No',
  alcohol: 'Occasionally',
  exercise: 'Sometimes',
  conditions: ['None'],
  medications: '',
  washFrequency: '2-3 times/week',
  oilUsage: 'Weekly',
  stylingProducts: 'Occasionally',
  coloring: 'Never',
  heatStyling: 'Rarely',
  dietType: 'Non-Vegetarian',
  proteinIntake: 'Moderate',
  fastFood: 'Weekly',
  fruitVeg: '2-3 times/week',
  images: {},
};

export const HairAnalysisView: React.FC = () => {
  const { setView, addToCart, addToast, setSelectedProductId } = useApp();
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<HairAnalysisData>(INITIAL_FORM_DATA);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string>('');

  // Sample image URLs for quick demo fill
  const sampleImages = {
    front: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    top: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
    left: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300',
    right: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300',
    back: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
  };

  const handleNextStep = () => {
    setValidationError('');

    // Validation per step
    if (step === 1) {
      if (!formData.fullName.trim()) {
        setValidationError('Please enter your full name.');
        return;
      }
      if (!formData.email.trim() || !formData.email.includes('@')) {
        setValidationError('Please enter a valid email address.');
        return;
      }
      if (!formData.phone.trim() || formData.phone.length < 8) {
        setValidationError('Please enter a valid phone number.');
        return;
      }
    }

    if (step === 2) {
      if (formData.problems.length === 0) {
        setValidationError('Please select at least one hair problem.');
        return;
      }
    }

    if (step === 3 && !formData.severity) {
      setValidationError('Please select your hair loss severity grade.');
      return;
    }

    if (step === 4 && !formData.duration) {
      setValidationError('Please select how long you have had this issue.');
      return;
    }

    if (step < 10) {
      setStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Final submit
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      addToast('Hair Analysis complete! View your personalized diagnosis below.', 'success');
    }
  };

  const handlePrevStep = () => {
    setValidationError('');
    if (step > 1) {
      setStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Demo Fill for reviewer convenience
  const handleDemoFill = () => {
    setFormData({
      fullName: 'Alexander Wright',
      age: '32',
      gender: 'Male',
      phone: '+91 98100 12345',
      email: 'alex.wright@example.com',
      problems: ['Hair Fall', 'Hair Thinning', 'Receding Hairline'],
      severity: 'Stage 3',
      duration: '6–12 months',
      familyHistory: 'Father has hair loss',
      sleepPattern: '5–6 hours',
      stressLevel: 'High',
      waterIntake: '1–2 L',
      smoking: 'No',
      alcohol: 'Occasionally',
      exercise: 'Sometimes',
      conditions: ['Vitamin Deficiency'],
      medications: 'Occasional multivitamins',
      washFrequency: '2-3 times/week',
      oilUsage: 'Weekly',
      stylingProducts: 'Occasionally',
      coloring: 'Never',
      heatStyling: 'Rarely',
      dietType: 'Non-Vegetarian',
      proteinIntake: 'Moderate',
      fastFood: 'Weekly',
      fruitVeg: '2-3 times/week',
      images: sampleImages,
    });
    setValidationError('');
    addToast('Demo data loaded successfully!', 'info');
  };

  const handleImageUpload = (key: keyof typeof sampleImages, event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({
        ...prev,
        images: { ...prev.images, [key]: imageUrl },
      }));
    }
  };

  // Score Calculation logic
  const calculateScore = (): { score: number; level: string; color: string } => {
    let base = 85;

    // Deductions based on severity
    if (formData.severity.includes('Stage 4') || formData.severity.includes('Stage 5')) base -= 15;
    if (formData.severity.includes('Stage 6') || formData.severity.includes('Stage 7') || formData.severity === 'Severe') base -= 25;
    if (formData.severity.includes('Stage 3') || formData.severity === 'Moderate') base -= 10;

    // Deductions based on lifestyle
    if (formData.stressLevel === 'High') base -= 8;
    if (formData.sleepPattern === 'Less than 5 hours' || formData.sleepPattern === '5–6 hours') base -= 6;
    if (formData.smoking === 'Yes') base -= 5;
    if (formData.waterIntake === 'Less than 1 L') base -= 4;
    if (formData.familyHistory.includes('Father') || formData.familyHistory.includes('Both')) base -= 6;

    const finalScore = Math.max(38, Math.min(94, base));

    let level = 'Good Hair Vitality';
    let color = '#30A46C'; // emerald
    if (finalScore < 75) {
      level = 'Moderate Thinning Risk';
      color = '#D4A017'; // gold
    }
    if (finalScore < 60) {
      level = 'High Follicle Stress';
      color = '#E11D48'; // rose
    }

    return { score: finalScore, level, color };
  };

  const healthData = calculateScore();

  // Check if Hair Transplant is suggested
  const isTransplantCandidate =
    formData.problems.includes('Baldness') ||
    formData.problems.includes('Receding Hairline') ||
    ['Stage 3', 'Stage 4', 'Stage 5', 'Stage 6', 'Stage 7', 'Severe'].includes(formData.severity);

  // Recommended products matching criteria
  const recommendedProducts: Product[] = [
    PRODUCTS.find((p) => p.id === 'prod-1') || PRODUCTS[0],
    PRODUCTS.find((p) => p.id === 'prod-2') || PRODUCTS[1],
    PRODUCTS.find((p) => p.id === 'prod-3') || PRODUCTS[2],
    PRODUCTS.find((p) => p.id === 'prod-5') || PRODUCTS[4],
  ];

  // Recommended doctors
  const recommendedDoctors: Doctor[] = [DOCTORS[0], DOCTORS[1], DOCTORS[2]];

  const handleAddAllRecommendedToCart = () => {
    recommendedProducts.forEach((p) => addToCart(p, 1));
    addToast('Added all recommended hair care products to your cart!', 'success');
  };

  // Render Result Page UI
  if (isSubmitted) {
    return (
      <div className="bg-gray-50 dark:bg-gray-950 min-h-screen pb-24">
        <Breadcrumb items={[{ label: 'Hair Analysis Result' }]} />

        {/* Results Banner Header */}
        <section className="bg-gradient-to-b from-emerald-900 via-[#104F37] to-[#1E7D5B] text-white py-14 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-800/80 border border-emerald-500/30 rounded-full text-xs font-bold text-emerald-300 uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#D4A017] animate-spin" />
              <span>AI Scalp Diagnosis & Personalized Protocol</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
              Personalized Hair Health Report
            </h1>

            <p className="text-emerald-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Prepared for <strong>{formData.fullName}</strong> based on your multi-step scalp assessment, lifestyle indicators, and follicle progression history.
            </p>
          </div>
        </section>

        {/* Main Results Grid Container */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-10">
          
          {/* Health Score & Key Summary Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Score Card (Col 5) */}
            <div className="lg:col-span-5 bg-white dark:bg-gray-900 rounded-[32px] p-8 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-gray-800 flex flex-col items-center justify-center text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500 mb-4">
                Overall Hair Health Index
              </span>

              {/* Circular Gauge */}
              <div className="relative w-44 h-44 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="#E2E8F0"
                    strokeWidth="10"
                    className="dark:stroke-gray-800"
                    fill="transparent"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke={healthData.color}
                    strokeWidth="10"
                    strokeDasharray={263.89}
                    strokeDashoffset={263.89 - (263.89 * healthData.score) / 100}
                    strokeLinecap="round"
                    fill="transparent"
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-extrabold font-mono text-gray-900 dark:text-white">
                    {healthData.score}
                  </span>
                  <span className="text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest">
                    / 100
                  </span>
                </div>
              </div>

              <div className="mt-6 space-y-1">
                <span
                  className="inline-block px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider text-white"
                  style={{ backgroundColor: healthData.color }}
                >
                  {healthData.level}
                </span>
                <p className="text-xs text-slate-500 dark:text-gray-400 mt-2 leading-relaxed">
                  Targeted therapy can halt further miniaturization and improve root density by up to 40% in 12–16 weeks.
                </p>
              </div>
            </div>

            {/* Problem Summary Badges (Col 7) */}
            <div className="lg:col-span-7 bg-white dark:bg-gray-900 rounded-[32px] p-8 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-gray-800 space-y-6 flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-lg text-[#1E7D5B] dark:text-emerald-400 flex items-center gap-2 mb-4">
                  <Activity className="w-5 h-5 text-[#D4A017]" />
                  Identified Scalp & Health Factors
                </h3>

                <div className="flex flex-wrap gap-2 mb-6">
                  {formData.problems.map((p, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-[#1E7D5B] dark:text-emerald-400 font-bold text-xs border border-emerald-100 dark:border-emerald-800"
                    >
                      • {p}
                    </span>
                  ))}
                  <span className="px-3.5 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-bold text-xs border border-amber-100 dark:border-amber-800">
                    Grade: {formData.severity}
                  </span>
                  <span className="px-3.5 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 font-bold text-xs border border-blue-100 dark:border-blue-800">
                    Duration: {formData.duration}
                  </span>
                  <span className="px-3.5 py-1.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 font-bold text-xs border border-purple-100 dark:border-purple-800">
                    Stress: {formData.stressLevel}
                  </span>
                  <span className="px-3.5 py-1.5 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300 font-bold text-xs border border-rose-100 dark:border-rose-800">
                    Genetics: {formData.familyHistory}
                  </span>
                </div>

                <div className="bg-[#F8FAFC] dark:bg-gray-950 p-4 rounded-2xl border border-slate-100 dark:border-gray-800 space-y-2">
                  <h4 className="text-xs font-bold text-slate-800 dark:text-gray-200 uppercase tracking-wider flex items-center gap-1.5">
                    <Info className="w-4 h-4 text-[#1E7D5B]" />
                    Trichological Assessment Note
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed">
                    Your assessment indicates androgenic sensitivity compounded by elevated stress ({formData.stressLevel.toLowerCase()}) and sleep duration of {formData.sleepPattern}. Follicle root stimulation via DHT blockers, multi-peptides, and micronutrients is strongly advised.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-gray-800 flex flex-wrap gap-4 items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 dark:text-gray-400">
                  Assessment ID: #ANL-{(Math.random() * 89999 + 10000).toFixed(0)}
                </span>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setStep(1);
                  }}
                  className="text-xs font-bold text-[#1E7D5B] dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Retake Analysis
                </button>
              </div>
            </div>

          </div>

          {/* Recommended Products Section */}
          <section className="bg-white dark:bg-gray-900 rounded-[32px] p-8 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-gray-800 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1E7D5B] dark:text-emerald-400 uppercase tracking-wider mb-1">
                  <ShoppingBag className="w-4 h-4 text-[#D4A017]" />
                  Clinically Selected Regimen
                </div>
                <h2 className="font-display text-2xl font-extrabold text-gray-900 dark:text-white">
                  Recommended Hair Care Products
                </h2>
              </div>

              <button
                onClick={handleAddAllRecommendedToCart}
                className="px-6 py-3 bg-[#1E7D5B] hover:bg-[#165a42] text-white rounded-2xl font-bold text-xs shadow-md shadow-emerald-900/10 transition-all flex items-center gap-2 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 text-[#D4A017]" /> Add All Recommended to Cart
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
              {recommendedProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-[#F8FAFC] dark:bg-gray-950 rounded-2xl p-4 border border-slate-200/80 dark:border-gray-800 flex flex-col justify-between hover:shadow-lg transition-all group"
                >
                  <div>
                    <div className="relative h-44 rounded-xl overflow-hidden mb-3 bg-white dark:bg-gray-900">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute top-2 right-2 px-2.5 py-1 bg-[#1E7D5B] text-white font-extrabold text-[10px] rounded-full uppercase tracking-wider shadow-sm">
                        Rx Match
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-amber-500 text-xs font-bold mb-1">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{product.rating}</span>
                      <span className="text-slate-400 text-[10px]">({product.reviewsCount})</span>
                    </div>

                    <h3 className="font-display font-bold text-sm text-gray-900 dark:text-white line-clamp-1 mb-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-gray-400 line-clamp-2 leading-relaxed mb-3">
                      {product.shortDescription}
                    </p>

                    <div className="space-y-1 mb-4">
                      {product.benefits.slice(0, 2).map((b, i) => (
                        <div key={i} className="text-[11px] text-slate-600 dark:text-gray-300 flex items-center gap-1.5">
                          <Check className="w-3 h-3 text-[#1E7D5B] shrink-0" />
                          <span className="truncate">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-200 dark:border-gray-800 flex items-center justify-between gap-2">
                    <span className="font-display font-black text-lg text-[#1E7D5B] dark:text-emerald-400">
                      ${product.price}
                    </span>
                    <button
                      onClick={() => addToCart(product, 1)}
                      className="px-3.5 py-2 bg-[#1E7D5B] hover:bg-[#165a42] text-white rounded-xl font-bold text-xs transition-all cursor-pointer flex items-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" /> Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Hair Transplant Recommendation Section (Dynamic highlight) */}
          {isTransplantCandidate && (
            <section className="bg-gradient-to-br from-emerald-950 via-slate-900 to-gray-900 text-white rounded-[32px] p-8 sm:p-10 shadow-2xl border border-emerald-800/40 relative overflow-hidden space-y-8">
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-3xl space-y-3 relative z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-xs font-bold uppercase tracking-wider">
                  <Zap className="w-3.5 h-3.5 text-[#D4A017]" />
                  Advanced Hair Restoration Match
                </div>
                <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white">
                  Hair Transplant May Be Suitable for You
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Based on your reported <strong>{formData.severity}</strong> hair loss and problem profile, topical formulas alone may take longer. An advanced Micro-FUE procedure can permanently restore hairline & crown density.
                </p>
              </div>

              {/* Estimated Graft Requirement & Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 relative z-10">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 block">
                    Estimated Graft Need
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-white font-mono">
                    2,200 – 3,200
                  </span>
                  <span className="text-[10px] text-slate-400 block">Grafts (FUE/DHI)</span>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 block">
                    Procedure Technique
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-white">
                    Painless Micro-FUE
                  </span>
                  <span className="text-[10px] text-slate-400 block">Zero linear scarring</span>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 block">
                    Success Rate
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-emerald-400">
                    99.2%
                  </span>
                  <span className="text-[10px] text-slate-400 block">Graft survival rate</span>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 block">
                    Recovery Time
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-white">
                    7–10 Days
                  </span>
                  <span className="text-[10px] text-slate-400 block">Desk work in 3 days</span>
                </div>
              </div>

              {/* Before & After Gallery */}
              <div className="space-y-4 relative z-10">
                <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4A017]" />
                  Clinical Result Transformation Preview
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-black/40 rounded-2xl p-4 border border-white/10 flex items-center gap-4">
                    <img
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200"
                      alt="Before"
                      className="w-20 h-20 rounded-xl object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <span className="text-[10px] font-bold text-rose-400 uppercase tracking-widest block">Before</span>
                      <p className="text-xs text-slate-200 font-semibold">Stage 4 Thinning Crown</p>
                      <span className="text-[10px] text-slate-400">2,800 Micro-FUE Grafts</span>
                    </div>
                  </div>

                  <div className="bg-black/40 rounded-2xl p-4 border border-white/10 flex items-center gap-4">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
                      alt="After"
                      className="w-20 h-20 rounded-xl object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block">After (9 Months)</span>
                      <p className="text-xs text-slate-200 font-semibold">Full High-Density Crown</p>
                      <span className="text-[10px] text-emerald-300">Natural hairline restored</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hair Transplant Packages */}
              <div className="space-y-4 relative z-10 pt-4 border-t border-white/10">
                <h3 className="text-lg font-bold text-white">Featured Hair Transplant Packages</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Basic */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4 hover:border-emerald-500/50 transition-all flex flex-col justify-between">
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">Basic Package</span>
                      <div className="text-2xl font-extrabold text-white">$1,499</div>
                      <p className="text-xs text-slate-300">Up to 1,500 Micro-FUE Grafts</p>
                      <ul className="text-xs text-slate-300 space-y-1.5 pt-2">
                        <li>✓ Hairline Consultation Included</li>
                        <li>✓ Post-operative Care Kit</li>
                        <li>✓ 3-Month Follow-up Check</li>
                      </ul>
                    </div>
                    <button
                      onClick={() => setView('booking')}
                      className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-emerald-600 text-white font-bold text-xs transition-all cursor-pointer"
                    >
                      Book Basic Package
                    </button>
                  </div>

                  {/* Standard - Popular */}
                  <div className="bg-emerald-900/40 border-2 border-[#1E7D5B] rounded-2xl p-6 space-y-4 relative shadow-lg flex flex-col justify-between">
                    <span className="absolute -top-3 right-4 px-3 py-0.5 bg-[#D4A017] text-slate-950 font-black text-[9px] rounded-full uppercase tracking-widest">
                      Most Popular
                    </span>
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider block">Standard Package</span>
                      <div className="text-2xl font-extrabold text-white">$2,499</div>
                      <p className="text-xs text-slate-300">Up to 2,500 Micro-FUE Grafts</p>
                      <ul className="text-xs text-slate-200 space-y-1.5 pt-2">
                        <li>✓ 2 sessions PRP Therapy</li>
                        <li>✓ Complete Post-Op Recovery Kit</li>
                        <li>✓ 6-Month Doctor Follow-ups</li>
                        <li>✓ Local Anesthesia & Painless Tech</li>
                      </ul>
                    </div>
                    <button
                      onClick={() => setView('booking')}
                      className="w-full py-2.5 rounded-xl bg-[#1E7D5B] hover:bg-[#165a42] text-white font-bold text-xs transition-all cursor-pointer"
                    >
                      Book Standard Package
                    </button>
                  </div>

                  {/* Premium */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4 hover:border-emerald-500/50 transition-all flex flex-col justify-between">
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block">Premium Package</span>
                      <div className="text-2xl font-extrabold text-white">$3,999</div>
                      <p className="text-xs text-slate-300">Up to 4,000 Micro-FUE Grafts</p>
                      <ul className="text-xs text-slate-300 space-y-1.5 pt-2">
                        <li>✓ Unlimited PRP Therapy Sessions</li>
                        <li>✓ Premium Stem-Cell Exosome Kit</li>
                        <li>✓ Priority Surgeon Direct Line</li>
                        <li>✓ 1-Year Density Guarantee</li>
                      </ul>
                    </div>
                    <button
                      onClick={() => setView('booking')}
                      className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-emerald-600 text-white font-bold text-xs transition-all cursor-pointer"
                    >
                      Book Premium Package
                    </button>
                  </div>

                </div>
              </div>
            </section>
          )}

          {/* Recommended Specialists */}
          <section className="bg-white dark:bg-gray-900 rounded-[32px] p-8 shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-gray-800 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1E7D5B] dark:text-emerald-400 uppercase tracking-wider mb-1">
                <User className="w-4 h-4 text-[#D4A017]" />
                Top Matched Trichologists & Surgeons
              </div>
              <h2 className="font-display text-2xl font-extrabold text-gray-900 dark:text-white">
                Recommended Medical Specialists
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recommendedDoctors.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-[#F8FAFC] dark:bg-gray-950 p-5 rounded-2xl border border-slate-200/80 dark:border-gray-800 flex items-center gap-4 hover:shadow-md transition-all"
                >
                  <img
                    src={doc.photo}
                    alt={doc.name}
                    className="w-16 h-16 rounded-2xl object-cover shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="space-y-1">
                    <div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
                      <Star className="w-3 h-3 fill-current" /> {doc.rating} ({doc.experience} yrs exp)
                    </div>
                    <h3 className="font-bold text-sm text-gray-900 dark:text-white">{doc.name}</h3>
                    <p className="text-[11px] text-slate-500 dark:text-gray-400 line-clamp-1">{doc.specialty}</p>
                    <button
                      onClick={() => setView('booking')}
                      className="text-xs font-bold text-[#1E7D5B] dark:text-emerald-400 hover:underline inline-flex items-center gap-1 pt-1 cursor-pointer"
                    >
                      Book Consultation <ChevronRight size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Actionable Lifestyle Suggestions */}
          <section className="bg-emerald-50 dark:bg-emerald-950/40 rounded-[32px] p-8 border border-emerald-100 dark:border-emerald-900/60 space-y-6">
            <h2 className="font-display text-xl font-extrabold text-[#1E7D5B] dark:text-emerald-300 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#D4A017]" />
              Personalized Lifestyle & Nutrition Action Plan
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl border border-emerald-100 dark:border-emerald-900/40 space-y-1">
                <span className="text-xs font-bold text-[#1E7D5B] dark:text-emerald-400 uppercase tracking-wide">
                   Sleep Optimization
                </span>
                <p className="text-xs text-slate-600 dark:text-gray-300 leading-relaxed">
                  Increase sleep to 7–8 hours to lower cortisol spikes which prematurely trigger the telogen hair loss phase.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl border border-emerald-100 dark:border-emerald-900/40 space-y-1">
                <span className="text-xs font-bold text-[#1E7D5B] dark:text-emerald-400 uppercase tracking-wide">
                   Protein & Keratin Diet
                </span>
                <p className="text-xs text-slate-600 dark:text-gray-300 leading-relaxed">
                  Target 1.2g of protein per kg of body weight daily (eggs, lentils, fish, or Biotin capsules) for keratin synthesis.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl border border-emerald-100 dark:border-emerald-900/40 space-y-1">
                <span className="text-xs font-bold text-[#1E7D5B] dark:text-emerald-400 uppercase tracking-wide">
                   Scalp Micro-Circulation
                </span>
                <p className="text-xs text-slate-600 dark:text-gray-300 leading-relaxed">
                  Incorporate 20 mins of regular exercise and gentle 4-minute scalp massages daily to boost follicular blood flow.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl border border-emerald-100 dark:border-emerald-900/40 space-y-1">
                <span className="text-xs font-bold text-[#1E7D5B] dark:text-emerald-400 uppercase tracking-wide">
                   Hydration Goal
                </span>
                <p className="text-xs text-slate-600 dark:text-gray-300 leading-relaxed">
                  Maintain at least 2–3 L of water intake daily to flush scalp toxins and keep hair shafts hydrated.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl border border-emerald-100 dark:border-emerald-900/40 space-y-1">
                <span className="text-xs font-bold text-[#1E7D5B] dark:text-emerald-400 uppercase tracking-wide">
                   Avoid Heat & Chemical Damage
                </span>
                <p className="text-xs text-slate-600 dark:text-gray-300 leading-relaxed">
                  Minimize blow drying, heat straightening, and harsh dyes while your hair roots are recovering.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl border border-emerald-100 dark:border-emerald-900/40 space-y-1">
                <span className="text-xs font-bold text-[#1E7D5B] dark:text-emerald-400 uppercase tracking-wide">
                   Consistency Requirement
                </span>
                <p className="text-xs text-slate-600 dark:text-gray-300 leading-relaxed">
                  Apply recommended serum and shampoo consistently for 12 consecutive weeks without skipping days.
                </p>
              </div>
            </div>
          </section>

          {/* Prominent Call-to-Action Buttons */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-[32px] shadow-xl border border-slate-100 dark:border-gray-800 text-center space-y-6">
            <h3 className="font-display text-xl font-extrabold text-gray-900 dark:text-white">
              Ready to Begin Your Hair Transformation?
            </h3>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setView('booking')}
                className="w-full sm:w-auto px-8 py-4 bg-[#1E7D5B] hover:bg-[#165a42] text-white rounded-2xl font-bold text-sm shadow-xl shadow-emerald-900/20 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" /> Book Doctor Consultation
              </button>

              <button
                onClick={() => {
                  handleAddAllRecommendedToCart();
                  setView('cart');
                }}
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-800 text-[#1F2937] dark:text-white border border-slate-200 dark:border-gray-700 hover:border-[#1E7D5B] rounded-2xl font-bold text-sm shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 text-[#1E7D5B]" /> Buy Recommended Products
              </button>

              <button
                onClick={() => setView('transplant')}
                className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm hover:bg-black transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 text-[#D4A017]" /> Book Hair Transplant Consultation
              </button>
            </div>
          </div>

        </div>
      </div>
    );
  }

  // Questionnaire Step Content Definitions
  const totalSteps = 10;
  const progressPercentage = (step / totalSteps) * 100;

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen pb-24">
      <Breadcrumb items={[{ label: 'Hair Analysis Questionnaire' }]} />

      {/* Main Header / Title */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-50 dark:bg-emerald-950/50 text-[#1E7D5B] dark:text-emerald-400 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-100 dark:border-emerald-900">
          <Sparkles className="w-3.5 h-3.5 text-[#D4A017]" />
          Smart Clinical Hair Assessment
        </div>

        <h1 className="font-display text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
          Digital Scalp & Hair Analysis
        </h1>

        <p className="text-xs sm:text-sm text-slate-500 dark:text-gray-400 max-w-xl mx-auto">
          Complete our 10-step clinical questionnaire to receive a personalized hair health score, root-cause diagnosis, and recommended treatment plan.
        </p>

        {/* Quick Demo Fill Button */}
        <div className="pt-2">
          <button
            onClick={handleDemoFill}
            className="text-xs font-bold text-[#1E7D5B] dark:text-emerald-400 underline hover:text-emerald-800 cursor-pointer"
          >
            ⚡ Auto-fill sample answers for quick testing
          </button>
        </div>
      </div>

      {/* Wizard Container */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        
        {/* Progress Bar Header */}
        <div className="bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-t-[32px] border border-slate-100 dark:border-gray-800 shadow-sm space-y-3">
          <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-gray-400">
            <span>Step {step} of {totalSteps}</span>
            <span className="text-[#1E7D5B] dark:text-emerald-400 font-extrabold">{Math.round(progressPercentage)}% Completed</span>
          </div>

          <div className="w-full bg-slate-100 dark:bg-gray-800 h-2.5 rounded-full overflow-hidden">
            <motion.div
              className="bg-[#1E7D5B] h-full rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Step Card Body */}
        <div className="bg-white dark:bg-gray-900 p-6 sm:p-10 rounded-b-[32px] border-x border-b border-slate-100 dark:border-gray-800 shadow-xl shadow-slate-200/50 dark:shadow-none min-h-[420px] flex flex-col justify-between">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >

              {/* STEP 1: Personal Information */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      Step 1: Personal Information
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-gray-400">
                      We use your details to personalize your hair diagnosis and contact you with your report.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 sm:col-span-2">
                      <label className="text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wide">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Johnathan Doe"
                        className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-gray-950 text-sm rounded-xl border border-slate-200 dark:border-gray-800 focus:border-[#1E7D5B] dark:text-white"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wide">
                        Age
                      </label>
                      <input
                        type="number"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        placeholder="28"
                        className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-gray-950 text-sm rounded-xl border border-slate-200 dark:border-gray-800 focus:border-[#1E7D5B] dark:text-white"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wide">
                        Gender
                      </label>
                      <select
                        value={formData.gender}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value as any })}
                        className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-gray-950 text-sm rounded-xl border border-slate-200 dark:border-gray-800 focus:border-[#1E7D5B] dark:text-white"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other / Non-Binary</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wide">
                        Phone Number *
                      </label>
                      <input
                        type="text"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="5551234567"
                        className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-gray-950 text-sm rounded-xl border border-slate-200 dark:border-gray-800 focus:border-[#1E7D5B] dark:text-white"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wide">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john.doe@gmail.com"
                        className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-gray-950 text-sm rounded-xl border border-slate-200 dark:border-gray-800 focus:border-[#1E7D5B] dark:text-white"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Hair Problem */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      Step 2: Hair & Scalp Problems
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-gray-400">
                      Select all symptoms or concerns you are currently experiencing (multiple choice allowed).
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      'Hair Fall',
                      'Hair Thinning',
                      'Baldness',
                      'Receding Hairline',
                      'Patchy Hair Loss',
                      'Dandruff',
                      'Itchy Scalp',
                      'Oily Scalp',
                      'Dry Scalp',
                      'Weak Hair',
                      'Slow Hair Growth',
                      'Premature Greying',
                      'Other'
                    ].map((opt) => {
                      const isSelected = formData.problems.includes(opt);
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => {
                            if (isSelected) {
                              setFormData({
                                ...formData,
                                problems: formData.problems.filter((p) => p !== opt),
                              });
                            } else {
                              setFormData({
                                ...formData,
                                problems: [...formData.problems, opt],
                              });
                            }
                          }}
                          className={`p-3.5 rounded-2xl text-xs font-bold border text-left transition-all flex items-center justify-between cursor-pointer ${
                            isSelected
                              ? 'bg-[#1E7D5B] text-white border-[#1E7D5B] shadow-md shadow-emerald-900/10'
                              : 'bg-[#F8FAFC] dark:bg-gray-950 text-slate-700 dark:text-gray-300 border-slate-200 dark:border-gray-800 hover:border-[#1E7D5B]'
                          }`}
                        >
                          <span>{opt}</span>
                          {isSelected && <Check className="w-4 h-4 text-white shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 3: Hair Fall Severity */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1 flex items-center justify-between">
                      <span>Step 3: Hair Loss Severity Grade</span>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        {formData.gender} Scale
                      </span>
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-gray-400">
                      Select the visual reference picture that best matches your current hairline, crown density, or parting width.
                    </p>
                  </div>

                  {formData.gender === 'Female' ? (
                    /* Women Ludwig Scale with Medical Vector Diagrams */
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {[
                        {
                          title: 'Mild',
                          desc: 'Light thinning along the central parting line',
                          badge: 'Ludwig Grade I',
                        },
                        {
                          title: 'Moderate',
                          desc: 'Noticeable widening of hair part line',
                          badge: 'Ludwig Grade II',
                        },
                        {
                          title: 'Severe',
                          desc: 'Widespread top scalp thinning & volume loss',
                          badge: 'Ludwig Grade III',
                        },
                      ].map((item) => {
                        const isSelected = formData.severity === item.title;
                        return (
                          <button
                            key={item.title}
                            type="button"
                            onClick={() => setFormData({ ...formData, severity: item.title })}
                            className={`group overflow-hidden rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                              isSelected
                                ? 'bg-[#1E7D5B] text-white border-[#1E7D5B] shadow-xl shadow-emerald-950/30 ring-2 ring-emerald-500'
                                : 'bg-[#F8FAFC] dark:bg-gray-950 text-slate-800 dark:text-gray-200 border-slate-200 dark:border-gray-800 hover:border-[#1E7D5B]'
                            }`}
                          >
                            <div className="relative h-40 w-full overflow-hidden bg-white dark:bg-gray-900 p-2 flex items-center justify-center">
                              <ScalpDiagramSVG stage={item.title} gender="Female" className="w-full h-full object-contain" />
                              <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-slate-900/80 text-emerald-300 border border-emerald-500/30">
                                {item.badge}
                              </span>
                              {isSelected && (
                                <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md">
                                  <Check className="w-4 h-4 stroke-[3]" />
                                </div>
                              )}
                            </div>
                            <div className="p-4 space-y-1">
                              <h3 className="font-bold text-sm flex items-center justify-between">
                                <span>{item.title}</span>
                              </h3>
                              <p className={`text-xs ${isSelected ? 'text-emerald-100' : 'text-slate-500 dark:text-gray-400'}`}>
                                {item.desc}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    /* Men Norwood Scale Stages with Medical Scalp Vector Diagrams (Top + Side View) */
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                      {[
                        { stage: 'Stage 1', desc: 'Full hairline or minimal recession' },
                        { stage: 'Stage 2', desc: 'Slight temple recession' },
                        { stage: 'Stage 3', desc: 'Deep frontal M-shape hairline' },
                        { stage: 'Stage 3 Vertex', desc: 'Frontal recession with crown spot' },
                        { stage: 'Stage 4', desc: 'Noticeable crown loss & M-hairline' },
                        { stage: 'Stage 5', desc: 'Crown & frontal thinning merging' },
                        { stage: 'Stage 6', desc: 'Extensive top scalp baldness' },
                        { stage: 'Stage 7', desc: 'Horseshoe band remaining' },
                      ].map((item) => {
                        const isSelected = formData.severity === item.stage;
                        return (
                          <button
                            key={item.stage}
                            type="button"
                            onClick={() => setFormData({ ...formData, severity: item.stage })}
                            className={`group overflow-hidden rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                              isSelected
                                ? 'bg-[#1E7D5B] text-white border-[#1E7D5B] shadow-lg ring-2 ring-emerald-500'
                                : 'bg-[#F8FAFC] dark:bg-gray-950 text-slate-800 dark:text-gray-200 border-slate-200 dark:border-gray-800 hover:border-[#1E7D5B]'
                            }`}
                          >
                            <div className="relative h-36 w-full overflow-hidden bg-white dark:bg-gray-900 p-2 flex items-center justify-center">
                              <ScalpDiagramSVG stage={item.stage} gender="Male" className="w-full h-full object-contain" />
                              <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md text-[10px] font-mono font-black uppercase tracking-wider bg-slate-900/80 text-emerald-300 border border-emerald-500/30">
                                {item.stage}
                              </span>
                              {isSelected && (
                                <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md">
                                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                                </div>
                              )}
                            </div>
                            <div className="p-3 space-y-0.5">
                              <h4 className="font-bold text-xs flex items-center justify-between">
                                <span>{item.stage}</span>
                              </h4>
                              <p className={`text-[11px] leading-snug font-medium ${isSelected ? 'text-emerald-100' : 'text-slate-500 dark:text-gray-400'}`}>
                                {item.desc}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {/* STEP 4: Duration */}
              {step === 4 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      Step 4: Duration of Hair Loss
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-gray-400">
                      How long have you been experiencing hair thinning, shedding, or hairline changes?
                    </p>
                  </div>

                  <div className="space-y-3">
                    {[
                      'Less than 3 months',
                      '3–6 months',
                      '6–12 months',
                      '1–2 years',
                      'More than 2 years',
                    ].map((dur) => (
                      <button
                        key={dur}
                        type="button"
                        onClick={() => setFormData({ ...formData, duration: dur })}
                        className={`w-full p-4 rounded-2xl border text-left text-sm font-bold transition-all flex items-center justify-between cursor-pointer ${
                          formData.duration === dur
                            ? 'bg-[#1E7D5B] text-white border-[#1E7D5B] shadow-md'
                            : 'bg-[#F8FAFC] dark:bg-gray-950 text-slate-800 dark:text-gray-200 border-slate-200 dark:border-gray-800 hover:border-[#1E7D5B]'
                        }`}
                      >
                        <span>{dur}</span>
                        {formData.duration === dur && <Check className="w-5 h-5 text-white" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 5: Family History */}
              {step === 5 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      Step 5: Genetic & Family History
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-gray-400">
                      Androgenic alopecia is heavily tied to genetic hair follicle sensitivity to DHT.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {[
                      'Father has hair loss',
                      'Mother has hair loss',
                      'Both parents have hair loss',
                      'No family history of hair loss',
                      "Don't know / Not sure",
                    ].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setFormData({ ...formData, familyHistory: opt })}
                        className={`w-full p-4 rounded-2xl border text-left text-sm font-bold transition-all flex items-center justify-between cursor-pointer ${
                          formData.familyHistory === opt
                            ? 'bg-[#1E7D5B] text-white border-[#1E7D5B] shadow-md'
                            : 'bg-[#F8FAFC] dark:bg-gray-950 text-slate-800 dark:text-gray-200 border-slate-200 dark:border-gray-800 hover:border-[#1E7D5B]'
                        }`}
                      >
                        <span>{opt}</span>
                        {formData.familyHistory === opt && <Check className="w-5 h-5 text-white" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 6: Lifestyle Questions */}
              {step === 6 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      Step 6: Lifestyle Indicators
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-gray-400">
                      Sleep quality, stress levels, and hydration significantly impact metabolic hair growth cycles.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Sleep Pattern */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wide">
                        Sleep Duration
                      </label>
                      <select
                        value={formData.sleepPattern}
                        onChange={(e) => setFormData({ ...formData, sleepPattern: e.target.value })}
                        className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-gray-950 text-sm rounded-xl border border-slate-200 dark:border-gray-800 text-slate-800 dark:text-white"
                      >
                        <option value="Less than 5 hours">Less than 5 hours</option>
                        <option value="5–6 hours">5–6 hours</option>
                        <option value="6–7 hours">6–7 hours</option>
                        <option value="7–8 hours">7–8 hours</option>
                        <option value="More than 8 hours">More than 8 hours</option>
                      </select>
                    </div>

                    {/* Stress Level */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wide">
                        Stress Level
                      </label>
                      <select
                        value={formData.stressLevel}
                        onChange={(e) => setFormData({ ...formData, stressLevel: e.target.value })}
                        className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-gray-950 text-sm rounded-xl border border-slate-200 dark:border-gray-800 text-slate-800 dark:text-white"
                      >
                        <option value="Low">Low</option>
                        <option value="Moderate">Moderate</option>
                        <option value="High">High</option>
                      </select>
                    </div>

                    {/* Water Intake */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wide">
                        Daily Water Intake
                      </label>
                      <select
                        value={formData.waterIntake}
                        onChange={(e) => setFormData({ ...formData, waterIntake: e.target.value })}
                        className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-gray-950 text-sm rounded-xl border border-slate-200 dark:border-gray-800 text-slate-800 dark:text-white"
                      >
                        <option value="Less than 1 L">Less than 1 L</option>
                        <option value="1–2 L">1–2 L</option>
                        <option value="2–3 L">2–3 L</option>
                        <option value="More than 3 L">More than 3 L</option>
                      </select>
                    </div>

                    {/* Smoking */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wide">
                        Smoking Habit
                      </label>
                      <select
                        value={formData.smoking}
                        onChange={(e) => setFormData({ ...formData, smoking: e.target.value })}
                        className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-gray-950 text-sm rounded-xl border border-slate-200 dark:border-gray-800 text-slate-800 dark:text-white"
                      >
                        <option value="No">No</option>
                        <option value="Yes">Yes</option>
                      </select>
                    </div>

                    {/* Alcohol */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wide">
                        Alcohol Consumption
                      </label>
                      <select
                        value={formData.alcohol}
                        onChange={(e) => setFormData({ ...formData, alcohol: e.target.value })}
                        className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-gray-950 text-sm rounded-xl border border-slate-200 dark:border-gray-800 text-slate-800 dark:text-white"
                      >
                        <option value="Never">Never</option>
                        <option value="Occasionally">Occasionally</option>
                        <option value="Frequently">Frequently</option>
                      </select>
                    </div>

                    {/* Exercise */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wide">
                        Exercise Frequency
                      </label>
                      <select
                        value={formData.exercise}
                        onChange={(e) => setFormData({ ...formData, exercise: e.target.value })}
                        className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-gray-950 text-sm rounded-xl border border-slate-200 dark:border-gray-800 text-slate-800 dark:text-white"
                      >
                        <option value="Never">Never</option>
                        <option value="Sometimes">Sometimes</option>
                        <option value="Regularly">Regularly</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 7: Medical Questions */}
              {step === 7 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      Step 7: Medical Conditions & Medications
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-gray-400">
                      Select any existing health conditions that may contribute to systemic hair shedding.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wide block">
                      Existing Medical Conditions (Select all that apply)
                    </label>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {[
                        'Thyroid',
                        'Diabetes',
                        'PCOS',
                        'High Blood Pressure',
                        'Vitamin Deficiency',
                        'Autoimmune Disease',
                        'None'
                      ].map((cond) => {
                        const isSelected = formData.conditions.includes(cond);
                        return (
                          <button
                            key={cond}
                            type="button"
                            onClick={() => {
                              if (cond === 'None') {
                                setFormData({ ...formData, conditions: ['None'] });
                              } else {
                                const filtered = formData.conditions.filter((c) => c !== 'None');
                                if (isSelected) {
                                  setFormData({
                                    ...formData,
                                    conditions: filtered.filter((c) => c !== cond),
                                  });
                                } else {
                                  setFormData({
                                    ...formData,
                                    conditions: [...filtered, cond],
                                  });
                                }
                              }
                            }}
                            className={`p-3.5 rounded-2xl text-xs font-bold border text-left transition-all flex items-center justify-between cursor-pointer ${
                              isSelected
                                ? 'bg-[#1E7D5B] text-white border-[#1E7D5B]'
                                : 'bg-[#F8FAFC] dark:bg-gray-950 text-slate-700 dark:text-gray-300 border-slate-200 dark:border-gray-800'
                            }`}
                          >
                            <span>{cond}</span>
                            {isSelected && <Check className="w-4 h-4 text-white shrink-0" />}
                          </button>
                        );
                      })}
                    </div>

                    <div className="space-y-1.5 pt-2">
                      <label className="text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wide">
                        Current Medications (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.medications}
                        onChange={(e) => setFormData({ ...formData, medications: e.target.value })}
                        placeholder="List any ongoing prescriptions, supplements, or scalp treatments..."
                        className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-gray-950 text-sm rounded-xl border border-slate-200 dark:border-gray-800 text-slate-800 dark:text-white placeholder-gray-400"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 8: Hair Care Routine */}
              {step === 8 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      Step 8: Hair Care & Styling Routine
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-gray-400">
                      Understanding your daily grooming practices helps us identify physical hair shaft breakage triggers.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wide">
                        Wash Frequency
                      </label>
                      <select
                        value={formData.washFrequency}
                        onChange={(e) => setFormData({ ...formData, washFrequency: e.target.value })}
                        className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-gray-950 text-sm rounded-xl border border-slate-200 dark:border-gray-800 text-slate-800 dark:text-white"
                      >
                        <option value="Daily">Daily</option>
                        <option value="2-3 times/week">2-3 times/week</option>
                        <option value="Once a week">Once a week</option>
                        <option value="Rarely">Rarely</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wide">
                        Hair Oil Usage
                      </label>
                      <select
                        value={formData.oilUsage}
                        onChange={(e) => setFormData({ ...formData, oilUsage: e.target.value })}
                        className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-gray-950 text-sm rounded-xl border border-slate-200 dark:border-gray-800 text-slate-800 dark:text-white"
                      >
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Rarely">Rarely</option>
                        <option value="Never">Never</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wide">
                        Styling Products (Gel/Wax)
                      </label>
                      <select
                        value={formData.stylingProducts}
                        onChange={(e) => setFormData({ ...formData, stylingProducts: e.target.value })}
                        className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-gray-950 text-sm rounded-xl border border-slate-200 dark:border-gray-800 text-slate-800 dark:text-white"
                      >
                        <option value="Regularly">Regularly</option>
                        <option value="Occasionally">Occasionally</option>
                        <option value="Never">Never</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wide">
                        Hair Coloring
                      </label>
                      <select
                        value={formData.coloring}
                        onChange={(e) => setFormData({ ...formData, coloring: e.target.value })}
                        className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-gray-950 text-sm rounded-xl border border-slate-200 dark:border-gray-800 text-slate-800 dark:text-white"
                      >
                        <option value="Frequently">Frequently</option>
                        <option value="Sometimes">Sometimes</option>
                        <option value="Never">Never</option>
                      </select>
                    </div>

                    <div className="space-y-1.5 sm:col-span-2">
                      <label className="text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wide">
                        Heat Styling (Straightening/Blowdry)
                      </label>
                      <select
                        value={formData.heatStyling}
                        onChange={(e) => setFormData({ ...formData, heatStyling: e.target.value })}
                        className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-gray-950 text-sm rounded-xl border border-slate-200 dark:border-gray-800 text-slate-800 dark:text-white"
                      >
                        <option value="Daily">Daily</option>
                        <option value="Frequently">Frequently</option>
                        <option value="Rarely">Rarely</option>
                        <option value="Never">Never</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 9: Diet & Nutrition */}
              {step === 9 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      Step 9: Diet & Nutrition Profile
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-gray-400">
                      Keratin synthesis requires optimal dietary protein and micronutrient catalysts.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wide">
                        Diet Type
                      </label>
                      <select
                        value={formData.dietType}
                        onChange={(e) => setFormData({ ...formData, dietType: e.target.value })}
                        className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-gray-950 text-sm rounded-xl border border-slate-200 dark:border-gray-800 text-slate-800 dark:text-white"
                      >
                        <option value="Vegetarian">Vegetarian</option>
                        <option value="Non-Vegetarian">Non-Vegetarian</option>
                        <option value="Vegan">Vegan</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wide">
                        Protein Intake
                      </label>
                      <select
                        value={formData.proteinIntake}
                        onChange={(e) => setFormData({ ...formData, proteinIntake: e.target.value })}
                        className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-gray-950 text-sm rounded-xl border border-slate-200 dark:border-gray-800 text-slate-800 dark:text-white"
                      >
                        <option value="Low">Low</option>
                        <option value="Moderate">Moderate</option>
                        <option value="High">High</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wide">
                        Fast Food Frequency
                      </label>
                      <select
                        value={formData.fastFood}
                        onChange={(e) => setFormData({ ...formData, fastFood: e.target.value })}
                        className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-gray-950 text-sm rounded-xl border border-slate-200 dark:border-gray-800 text-slate-800 dark:text-white"
                      >
                        <option value="Daily">Daily</option>
                        <option value="2-3 times/week">2-3 times/week</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Rarely/Never">Rarely / Never</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wide">
                        Fruits & Veggies Consumption
                      </label>
                      <select
                        value={formData.fruitVeg}
                        onChange={(e) => setFormData({ ...formData, fruitVeg: e.target.value })}
                        className="w-full px-4 py-3 bg-[#F8FAFC] dark:bg-gray-950 text-sm rounded-xl border border-slate-200 dark:border-gray-800 text-slate-800 dark:text-white"
                      >
                        <option value="Daily">Daily</option>
                        <option value="2-3 times/week">2-3 times/week</option>
                        <option value="Rarely">Rarely</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 10: Upload Scalp Photos */}
              {step === 10 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      Step 10: Upload Scalp Photos
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-gray-400">
                      Upload photos of your scalp angles or click 'Use Sample Photos' for instant preview analysis.
                    </p>
                  </div>

                  {/* Sample photo shortcut */}
                  <div className="flex justify-between items-center bg-emerald-50 dark:bg-emerald-950/40 p-3 rounded-2xl border border-emerald-100 dark:border-emerald-900">
                    <span className="text-xs text-[#1E7D5B] dark:text-emerald-300 font-bold flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-[#D4A017]" /> Want to test quickly without uploading personal photos?
                    </span>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, images: sampleImages })}
                      className="px-3 py-1 bg-[#1E7D5B] text-white rounded-xl font-bold text-xs hover:bg-[#165a42] transition-all cursor-pointer shrink-0"
                    >
                      Use Sample Photos
                    </button>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {[
                      { key: 'front' as const, label: 'Front View' },
                      { key: 'top' as const, label: 'Top Crown View' },
                      { key: 'left' as const, label: 'Left Temple' },
                      { key: 'right' as const, label: 'Right Temple' },
                      { key: 'back' as const, label: 'Back Donor Area' },
                    ].map((item) => {
                      const img = formData.images[item.key];
                      return (
                        <div
                          key={item.key}
                          className="bg-[#F8FAFC] dark:bg-gray-950 p-3 rounded-2xl border border-slate-200 dark:border-gray-800 text-center space-y-2 relative"
                        >
                          <span className="text-[11px] font-bold text-slate-700 dark:text-gray-300 block">
                            {item.label}
                          </span>

                          <div className="h-28 rounded-xl overflow-hidden bg-slate-100 dark:bg-gray-900 border border-slate-200 dark:border-gray-800 flex items-center justify-center relative">
                            {img ? (
                              <img src={img} alt={item.label} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            ) : (
                              <div className="flex flex-col items-center gap-1 text-slate-400 text-xs">
                                <Camera className="w-6 h-6 opacity-60" />
                                <span className="text-[10px]">No Photo</span>
                              </div>
                            )}

                            <label className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center text-white cursor-pointer font-bold text-xs gap-1">
                              <Upload className="w-4 h-4" /> Change
                              <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleImageUpload(item.key, e)}
                                className="hidden"
                              />
                            </label>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>

          {/* Validation Warning Message */}
          {validationError && (
            <div className="mt-4 p-3 bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 rounded-2xl text-xs font-bold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{validationError}</span>
            </div>
          )}

          {/* Wizard Navigation Footer */}
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-gray-800 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={handlePrevStep}
              disabled={step === 1}
              className={`px-5 py-3 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
                step === 1
                  ? 'opacity-30 cursor-not-allowed text-slate-400'
                  : 'bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-gray-200 hover:bg-slate-200 dark:hover:bg-gray-700'
              }`}
            >
              <ChevronLeft size={16} /> Previous
            </button>

            <button
              type="button"
              onClick={handleNextStep}
              className="px-8 py-3.5 bg-[#1E7D5B] hover:bg-[#165a42] text-white rounded-xl font-bold text-sm shadow-lg shadow-emerald-900/10 hover:scale-[1.02] transition-all cursor-pointer flex items-center gap-2"
            >
              {step === totalSteps ? 'Generate AI Analysis & Diagnosis' : 'Next Question'}
              <ChevronRight size={16} />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
