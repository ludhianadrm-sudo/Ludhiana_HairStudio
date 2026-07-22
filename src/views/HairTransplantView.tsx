import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Breadcrumb } from '../components/Breadcrumb';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Activity, Calendar, HelpCircle, ChevronDown, Check, Coins } from 'lucide-react';

export const HairTransplantView: React.FC = () => {
  const { setView } = useApp();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const transplantFaqs = [
    {
      q: 'How long does a Micro-FUE transplant take?',
      a: 'The procedure typically takes between 4 to 8 hours depending on the number of grafts needed. Most patients are fully completed in a single session, during which they can comfortably watch TV, read, or rest.'
    },
    {
      q: 'Are the transplanted hair grafts permanent?',
      a: 'Yes! Hair grafts are harvested from the "donor zone" (typically the back of the scalp), which is genetically resistant to DHT (the hormone causing hair loss). Once transplanted to the thinning areas, they continue to grow naturally for life.'
    },
    {
      q: 'When will I see the full transplant results?',
      a: 'Implanted hairs shed off within 2-4 weeks (normal "shedding phase"). New, strong shafts begin to sprout at Month 3. Noticeable coverage appears by Month 6, and the complete, maximum high-density cosmetic results are achieved at Month 12.'
    }
  ];

  const plans = [
    {
      name: 'Essential Hairline',
      price: '$3,800',
      grafts: 'Up to 1,500 Grafts',
      desc: 'Ideal for early receding temples (Stage II-III) to reconstruct a crisp, natural frontal hairline.',
      features: ['Local anesthesia', 'Micro-FUE execution', 'Standard post-op kit', '2 follow-up checks']
    },
    {
      name: 'High-Density Crown',
      price: '$5,900',
      grafts: '1,500 - 3,000 Grafts',
      desc: 'Perfect for restoring density on the crown vertex or addressing combined hairline + temple thinning.',
      features: ['Robotic assisted extraction', 'Soothe PRP therapy session', 'Advanced recovery kit', '6 months post-op checks', 'Graft survival guarantee']
    },
    {
      name: 'Mega Session Restoration',
      price: '$8,500',
      grafts: '3,000+ Grafts',
      desc: 'Comprehensive restoration for advanced hair loss (Stage V-VI) covering the front, crown, and temples.',
      features: ['Dual-team swift FUE', '2x PRP booster sessions', 'Premium post-op kit', '12 months unlimited checks', 'Graft survival guarantee', 'Lifetime styling assistance']
    }
  ];

  const timelineSteps = [
    { period: 'Day 1', title: 'Procedure Completed', desc: 'No stitches. Tiny extraction points are wrapped in dry sterile bandages. Mild redness is expected.' },
    { period: 'Day 3', title: 'First Gentle Wash', desc: 'Swellings subside. Grafts are cleansed at our clinic using specialized sterile antiseptic foam sprays.' },
    { period: 'Day 14', title: 'Scabbing Sheds', desc: 'All tiny recipient scabs fully shed off. Root follicles are securely anchored underneath.' },
    { period: 'Month 3', title: 'New Growth Sprouts', desc: 'Transplanted hairs enter the growth cycle. Soft, fine hair shafts become visible.' },
    { period: 'Month 12', title: 'Maximum Density', desc: 'Hairs have matured into thick, high-density strands. You can style, color, and cut it as you please.' }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-950 pb-20">
      <Breadcrumb items={[{ label: 'Hair Transplants' }]} />

      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary dark:text-emerald-400 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Advanced Micro-FUE Technology</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-[1.1]">
              Permanent, Lifetime Hair Density Reconstruction
            </h1>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
              We practice micro-grafting. By extracting individual follicular units with microscopic 0.8mm punches, we avoid linear scarring entirely and achieve up to <strong>98% graft survival rates</strong>.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setView('booking')}
                className="px-8 py-4 rounded-xl bg-brand-primary hover:bg-brand-primary-light text-white font-bold text-sm shadow-md shadow-brand-primary/15 transition-all cursor-pointer flex items-center gap-2"
              >
                Book Free Surgical Consult
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600"
              alt="Transplant consultation session"
              className="rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800 object-cover w-full h-[320px]"
              referrerPolicy="no-referrer"
            />
          </div>

        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        
        {/* Why choose us grid */}
        <section className="space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              The Gold Standard Transplant Protocol
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Our clinic employs specialized microscopic equipment and experienced ABHRS surgeons to ensure ultimate safety and natural hair flow direction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Natural Slit Direction', desc: 'Our surgeons match the original exit angles and swirl directions of your natural hairs, creating a soft, un-noticeable front hairline.', icon: <Activity className="w-5 h-5 text-brand-primary" /> },
              { title: 'Zero Linear Scarring', desc: 'Unlike outdated strip FUT methods, micro-FUE extracts individual hairs, leaving tiny dot-like marks that fade completely under hair.', icon: <ShieldCheck className="w-5 h-5 text-brand-primary" /> },
              { title: 'PRP-Activated Grafts', desc: 'Every extracted graft is preserved in cold, peptide-rich PRP fluid to maximize hydration, metabolic strength, and survival rates before implanting.', icon: <Zap className="w-5 h-5 text-brand-primary" /> },
            ].map((f, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center">
                  {f.icon}
                </div>
                <h3 className="font-display font-bold text-sm sm:text-base text-gray-900 dark:text-white">{f.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Before and After slider comparison mock */}
        <section className="bg-white dark:bg-gray-900 p-8 sm:p-12 rounded-3xl border border-gray-100 dark:border-gray-800 text-center space-y-8">
          <div className="max-w-2xl mx-auto space-y-2">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Actual Surgical Hairline Restorations
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Photographs of actual patients 12 months after receiving micro-FUE transplants.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { before: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300', after: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300', patient: 'Adrian S. (3,200 Grafts)' },
              { before: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=300', after: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300', patient: 'Samantha C. (2,000 Grafts)' },
            ].map((pat, idx) => (
              <div key={idx} className="space-y-3 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-850 p-4 bg-gray-50 dark:bg-gray-950">
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative h-44 bg-gray-200 rounded-lg overflow-hidden">
                    <img src={pat.before} alt="Before" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-black/75 text-[9px] font-bold text-white uppercase tracking-wider">Before</span>
                  </div>
                  <div className="relative h-44 bg-gray-200 rounded-lg overflow-hidden">
                    <img src={pat.after} alt="After" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-brand-primary text-[9px] font-bold text-white uppercase tracking-wider">12 Months</span>
                  </div>
                </div>
                <div className="text-center font-bold text-xs text-gray-700 dark:text-gray-300">
                  Patient Profile: {pat.patient}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recovery Timeline */}
        <section className="space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Transplant Recovery Roadmap
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Healing is quick and comfortable. Here is a breakdown of what to expect at every major recovery milestone.
            </p>
          </div>

          <div className="relative border-l-2 border-emerald-100 dark:border-emerald-900 pl-6 space-y-8 max-w-2xl mx-auto">
            {timelineSteps.map((tl, i) => (
              <div key={i} className="relative group">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-brand-primary border-4 border-white dark:border-gray-900 shadow-sm" />
                <span className="text-xs font-bold text-brand-primary dark:text-brand-secondary font-mono tracking-widest uppercase block">
                  {tl.period}
                </span>
                <h4 className="font-display text-sm sm:text-base font-bold text-gray-900 dark:text-white mt-0.5">
                  {tl.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                  {tl.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Transparent Graft Pricing
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              No hidden fees. Every surgical package is comprehensive of consultation, anesthesia, PRP, and post-op kits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((p, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="space-y-4">
                  <div>
                    <h3 className="font-display font-extrabold text-lg text-gray-900 dark:text-white">
                      {p.name}
                    </h3>
                    <span className="text-xs font-bold text-brand-primary dark:text-brand-secondary">
                      {p.grafts}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-gray-900 dark:text-white">
                      {p.price}
                    </span>
                    <span className="text-xs text-gray-400">All-Inclusive</span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {p.desc}
                  </p>

                  <div className="space-y-2 pt-2">
                    {p.features.map((f, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 font-medium">
                        <Check className="w-3.5 h-3.5 text-brand-secondary shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setView('booking')}
                  className="w-full py-3 rounded-xl bg-gray-50 hover:bg-brand-primary text-gray-800 hover:text-white text-xs font-bold transition-all cursor-pointer mt-6 flex items-center justify-center gap-1"
                >
                  Book Surgical Consultation
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Transplant Specific FAQs */}
        <section className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              Transplant Specific Questions
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Answers related directly to our micro-FUE transplant techniques.
            </p>
          </div>

          <div className="space-y-3">
            {transplantFaqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-xs sm:text-sm text-gray-900 dark:text-white hover:text-brand-primary cursor-pointer"
                  >
                    {faq.q}
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180 text-brand-primary' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-4 pt-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed border-t border-gray-50 dark:border-gray-950">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
};
