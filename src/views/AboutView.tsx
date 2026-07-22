import React from 'react';
import { useApp } from '../context/AppContext';
import { Breadcrumb } from '../components/Breadcrumb';
import { ShieldCheck, Target, Heart, Award, HeartHandshake, Eye, Sparkles } from 'lucide-react';

export const AboutView: React.FC = () => {
  const { setView } = useApp();

  const achievements = [
    { number: '15+', label: 'Years of Clinical Excellence' },
    { number: '4,500+', label: 'Micro-FUE Graft Procedures' },
    { number: '98.4%', label: 'Clinical Treatment Success Rate' },
    { number: '20+', label: 'Dermatology Board Awards' },
  ];

  const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400', title: 'Consultation Room' },
    { url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400', title: 'Microscopic Analysis Lab' },
    { url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=400', title: 'Advanced Surgical Suite' },
    { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=400', title: 'Post-Op Recovery Lounge' },
  ];

  const timelineEvents = [
    { year: '2011', title: 'Studio Foundation', desc: 'Ludhiana Hair Studio was founded in Punjab with a dedicated trichological research lab.' },
    { year: '2015', title: 'Robotic FUE Integration', desc: 'First clinic in the region to integrate microscopic robotic FUE graft extraction.' },
    { year: '2019', title: 'Clinical Serum Line Launches', desc: 'Formulated and released our patented 5% Redensyl botanical re-growth serum.' },
    { year: '2023', title: 'Stem-Cell Exosome Trials', desc: 'Pioneered clinical trials in non-surgical exosome therapies with excellent safety ratings.' },
    { year: '2026', title: 'Global Consultation Hub', desc: 'Expanded into a digital clinic catering to 10k+ happy clients globally.' },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-950 pb-20">
      <Breadcrumb items={[{ label: 'About Us' }]} />

      {/* Hero Header */}
      <section className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 py-16 px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs uppercase font-extrabold tracking-widest text-brand-primary">
            Our Identity & Science
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white mt-1">
            Redefining Scalp Care & Hair Restoration
          </h1>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed mt-4">
            Founded by premier dermatologists and certified plastic surgeons, Ludhiana Hair Studio blends meticulous surgical precision with botanical chemistry to offer safe, clinically proven answers to hair thinning.
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        
        {/* Story Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              The Journey Behind Ludhiana Hair Studio
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              We started with a simple, frustrating truth: the hair care industry was filled with false marketing, empty shampoo promises, and aggressive surgical sales. Patients wanted honesty, real diagnostic blood-work, and medical-grade ingredients.
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              In collaboration with India's top certified trichologists and AIIMS-trained dermatologists, we established an evidence-based hair ecosystem. By connecting diagnostic consultations, non-toxic topical chemistry, and ultra-high-density micro-FUE surgeries under one roof, we restore not just hair, but complete personal confidence.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white">
                <ShieldCheck className="w-5 h-5 text-brand-primary" />
                <span>HIPAA Compliant Data</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white">
                <HeartHandshake className="w-5 h-5 text-brand-primary" />
                <span>Patient-First Ethos</span>
              </div>
            </div>
          </div>

          {/* Side graphic photo */}
          <div className="lg:col-span-6">
            <img
              src="https://images.unsplash.com/photo-1579684389782-64d84b5e902a?auto=format&fit=crop&q=80&w=600"
              alt="Medical Team in Lab"
              className="rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800 object-cover w-full h-[350px]"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        {/* Mission and Vision Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">
              Our Vision
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              To be the world’s most trusted hair wellness platform, eliminating guess-work and establishing a medical gold-standard where every treatment is customized, tracked, and medically backed by science.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">
              Our Mission
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              We empower individuals to take early control of scalp wellness through convenient digital consulting, affordable doctor-formulated botanicals, and highly accurate surgical graft transplantation.
            </p>
          </div>
        </section>

        {/* Clinical Achievements Banner */}
        <section className="bg-brand-primary rounded-3xl p-8 sm:p-12 text-white">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((ach, i) => (
              <div key={i} className="text-center space-y-1">
                <span className="block text-3xl sm:text-4xl font-extrabold font-display text-brand-accent">
                  {ach.number}
                </span>
                <span className="block text-xs sm:text-sm text-emerald-100 font-medium">
                  {ach.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Gallery */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Inside Ludhiana Hair Studio
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              State-of-the-art sterile facilities located in the heart of Ludhiana, Punjab.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <div key={index} className="relative group rounded-2xl overflow-hidden shadow-sm h-48 md:h-60 bg-gray-100 dark:bg-gray-800">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs font-bold text-white tracking-wide uppercase">
                    {img.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Historical Growth Timeline */}
        <section className="space-y-10">
          <div className="text-center space-y-2">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Clinic Milestones
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              A decade of breaking grounds and perfecting microscopic hair restoration procedures.
            </p>
          </div>

          {/* Timeline component */}
          <div className="relative max-w-3xl mx-auto pl-6 border-l-2 border-emerald-100 dark:border-emerald-900 space-y-8">
            {timelineEvents.map((ev, index) => (
              <div key={index} className="relative group">
                {/* Active marker dot */}
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-brand-primary border-4 border-white dark:border-gray-900 shadow-sm group-hover:scale-125 transition-transform" />
                
                <span className="font-display font-black text-brand-primary dark:text-brand-secondary text-base">
                  {ev.year}
                </span>
                <h4 className="font-display text-base font-bold text-gray-900 dark:text-white mt-0.5">
                  {ev.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                  {ev.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
