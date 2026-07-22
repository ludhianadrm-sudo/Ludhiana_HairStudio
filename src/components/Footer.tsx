import React, { useState } from 'react';
import { useApp, ViewType } from '../context/AppContext';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setView, addToast } = useApp();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      addToast('Please enter a valid email address', 'error');
      return;
    }
    addToast('Successfully subscribed to the Ludhiana Hair Studio newsletter!', 'success');
    setEmail('');
  };

  const handleLink = (view: ViewType) => {
    setView(view);
  };

  return (
    <footer className="bg-gray-900 text-gray-300 dark:bg-black">
      {/* Trust badging / Features section - Styled with deep emerald bg and custom gold badges */}
      <div className="bg-[#104F37] border-b border-emerald-950 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-8 md:gap-16 text-white/90 text-xs md:text-sm font-bold tracking-wider">
          <div className="flex items-center gap-2.5">
            <svg className="w-5 h-5 text-[#D4A017] shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C8.602 6.234 9 7.009 9 8c0 .552-.448 1-1 1s-1-.448-1-1c0-1.657 1.343-3 3-3V4a1 1 0 10-2 0v1h.01zm-2 8a1 1 0 100 2h.01v1a1 1 0 102 0v-1h.01a3 3 0 000-6V9h-.01a1 1 0 10-2 0v.01c0 1.657-1.343 3-3 3h-.01z" clipRule="evenodd" />
            </svg>
            <span>FDA APPROVED</span>
          </div>
          <div className="flex items-center gap-2.5">
            <svg className="w-5 h-5 text-[#D4A017] shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.64.304 1.25.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>CERTIFIED DOCTORS</span>
          </div>
          <div className="flex items-center gap-2.5">
            <svg className="w-5 h-5 text-[#D4A017] shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span>SAFE & NATURAL</span>
          </div>
          <div className="flex items-center gap-2.5">
            <svg className="w-5 h-5 text-[#D4A017] shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z" />
            </svg>
            <span>CLINICALLY PROVEN</span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* About column */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 bg-[#1E7D5B] rounded-xl flex items-center justify-center text-white font-display font-bold text-lg shadow-md">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div>
              <span className="block font-display font-extrabold text-lg leading-none tracking-tight text-white">
                Ludhiana <span className="text-[#30A46C]">Hair Studio</span>
              </span>
              <span className="block text-[8px] font-bold tracking-widest text-[#D4A017] uppercase mt-0.5">
                ADVANCED HAIR CLINIC
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            Empowering your hair health journey through clinical science, state-of-the-art surgical technology, and personalized trichological treatments that inspire permanent confidence.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 mt-6">
            {[
              { icon: <Facebook className="w-4 h-4" />, href: 'https://facebook.com' },
              { icon: <Instagram className="w-4 h-4" />, href: 'https://instagram.com' },
              { icon: <Twitter className="w-4 h-4" />, href: 'https://twitter.com' },
            ].map((soc, i) => (
              <a
                key={i}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-brand-primary text-gray-400 hover:text-white flex items-center justify-center transition-colors"
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: 'Hair Analysis Questionnaire', view: 'analysis' },
              { label: 'Hair Products Shop', view: 'products' },
              { label: 'Hair Transplant Wing', view: 'transplant' },
              { label: 'Interactive Hair Booking', view: 'booking' },
              { label: 'Contact Clinic', view: 'contact' },
            ].map((link, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handleLink(link.view as ViewType)}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Links Column */}
        <div>
          <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: 'About Our Team', view: 'about' },
              { label: 'Read Trichology Blog', view: 'blog' },
              { label: 'Contact Clinic', view: 'contact' },
              { label: 'Consultation Booking', view: 'booking' },
            ].map((link, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handleLink(link.view as ViewType)}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Column */}
        <div>
          <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-4">Newsletter</h4>
          <p className="text-xs text-gray-400 leading-relaxed mb-4">
            Join 25,000+ subscribers reading weekly tips on science-based follicle wellness.
          </p>
          <form onSubmit={handleSubscribe} className="space-y-2">
            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-transparent focus:outline-none focus:border-brand-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-brand-primary text-white text-xs font-bold hover:bg-brand-primary-light transition-all cursor-pointer"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>

      {/* Info Contact strip */}
      <div className="border-t border-gray-800 bg-gray-950/50 py-10 text-xs text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-brand-primary shrink-0" />
            <span>Ferozepur Road, Near Westend Mall, Ludhiana, Punjab 141012</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-brand-primary shrink-0" />
            <span>Mon - Sat: 9:00 AM - 8:00 PM (IST)</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-brand-primary shrink-0" />
            <span>care@ludhianahairstudio.com | info@ludhianahairstudio.com</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800/60 py-6 text-xs text-center text-gray-500 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            &copy; {new Date().getFullYear()} Ludhiana Hair Studio. All rights reserved. Registered Medical Clinic ID: #LHS-PB-1024.
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => addToast('Privacy Policy details loaded (UI Dummy)', 'info')} className="hover:text-gray-300">Privacy Policy</button>
            <button onClick={() => addToast('Terms of Service loaded (UI Dummy)', 'info')} className="hover:text-gray-300">Terms & Conditions</button>
          </div>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            <span>for clinical confidence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
