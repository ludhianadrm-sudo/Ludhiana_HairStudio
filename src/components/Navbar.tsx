import React, { useState, useEffect, useRef } from 'react';
import { useApp, ViewType } from '../context/AppContext';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu,
  X,
  ShoppingCart,
  Sun,
  Moon,
  PhoneCall,
  ChevronRight,
  Sparkles,
  User,
  Calendar,
  ShoppingBag,
  LogOut,
  ChevronDown,
  ShieldCheck,
} from 'lucide-react';

interface NavLink {
  label: string;
  view: ViewType;
}

export const Navbar: React.FC = () => {
  const {
    currentView,
    setView,
    cartCount,
    darkMode,
    setDarkMode,
    userMobile,
    logout,
    setShowAppointmentsModal,
    setShowOrdersModal,
  } = useApp();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  // Close profile dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Scroll event for styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainLinks: NavLink[] = [
    { label: 'Hair Analysis', view: 'analysis' },
    { label: 'Products', view: 'products' },
    { label: 'Transplants', view: 'transplant' },
    { label: 'About Us', view: 'about' },
    { label: 'Blog', view: 'blog' },
    { label: 'Contact', view: 'contact' },
  ];

  const handleNavClick = (view: ViewType) => {
    setView(view);
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800'
            : 'bg-white dark:bg-gray-950 border-b border-gray-100/50 dark:border-gray-800/30'
        }`}
      >
        {/* Top Info Bar */}
        <div className="bg-brand-primary text-white text-[11px] md:text-xs py-1.5 px-4 flex justify-between items-center font-medium">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-brand-accent animate-pulse" />
            <span>Consult India's leading certified trichologists online & in-clinic</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+9118001234247" className="hover:text-brand-accent transition-colors flex items-center gap-1">
              <PhoneCall className="w-3 h-3" />
              <span className="hidden sm:inline">+91 1800-123-4247</span>
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('landing')}
            className="flex items-center gap-2.5 text-left cursor-pointer group"
          >
            <div className="w-10 h-10 bg-[#1E7D5B] rounded-xl flex items-center justify-center shadow-md shadow-emerald-900/10 transition-transform group-hover:scale-105">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <div>
              <span className="block font-display font-extrabold text-xl leading-none tracking-tight text-[#1E7D5B] dark:text-white">
                Ludhiana <span className="text-[#30A46C]">Hair Studio</span>
              </span>
              <span className="block text-[9px] font-bold tracking-widest text-[#D4A017] uppercase mt-0.5">
                ADVANCED HAIR CLINIC
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {mainLinks.map((link) => {
              const isActive = currentView === link.view;
              return (
                <button
                  key={link.view}
                  onClick={() => handleNavClick(link.view)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all relative cursor-pointer ${
                    isActive
                      ? 'text-brand-primary dark:text-brand-secondary bg-brand-primary/5 dark:bg-brand-secondary/5'
                      : 'text-gray-600 dark:text-gray-300 hover:text-brand-primary dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-900/50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-primary dark:bg-brand-secondary rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl text-gray-500 hover:text-brand-primary dark:text-gray-400 dark:hover:text-brand-secondary bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={() => handleNavClick('cart')}
              className="p-2 rounded-xl text-gray-500 hover:text-brand-primary dark:text-gray-400 dark:hover:text-brand-secondary bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 transition-all relative cursor-pointer"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={18} />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1.5 -right-1.5 bg-brand-accent text-white font-mono text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border border-white dark:border-gray-900 shadow-sm"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>



            {/* User Profile Dropdown Button */}
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 p-1.5 pl-3 pr-2 rounded-2xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800/80 text-emerald-900 dark:text-emerald-100 hover:bg-emerald-100/80 dark:hover:bg-emerald-900 transition-all cursor-pointer shadow-sm"
              >
                <div className="w-7 h-7 rounded-xl bg-[#1E7D5B] flex items-center justify-center text-white font-bold text-xs shadow-sm">
                  <User size={14} />
                </div>
                <span className="hidden md:inline font-bold text-xs truncate max-w-[110px]">
                  {userMobile ? userMobile.replace('+91 ', '') : 'My Profile'}
                </span>
                <ChevronDown size={14} className={`text-emerald-600 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-2xl p-2 z-50 overflow-hidden"
                  >
                    {/* User Info Header */}
                    <div className="p-3 bg-emerald-50/70 dark:bg-emerald-950/50 rounded-xl mb-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider">
                          Logged In Patient
                        </span>
                        <span className="inline-flex items-center gap-0.5 text-[9px] font-bold bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 px-1.5 py-0.5 rounded-md">
                          <ShieldCheck size={10} /> Verified
                        </span>
                      </div>
                      <div className="text-xs font-black text-gray-900 dark:text-white font-mono">
                        {userMobile || '+91 Verified Mobile'}
                      </div>
                    </div>

                    {/* Menu Options */}
                    <div className="space-y-0.5">
                      <button
                        onClick={() => {
                          setIsProfileOpen(false);
                          setShowAppointmentsModal(true);
                        }}
                        className="w-full text-left px-3 py-2.5 rounded-xl text-xs font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2.5 transition-colors cursor-pointer"
                      >
                        <Calendar size={15} className="text-brand-primary" />
                        <span>My Appointments</span>
                      </button>

                      <button
                        onClick={() => {
                          setIsProfileOpen(false);
                          setShowOrdersModal(true);
                        }}
                        className="w-full text-left px-3 py-2.5 rounded-xl text-xs font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2.5 transition-colors cursor-pointer"
                      >
                        <ShoppingBag size={15} className="text-brand-primary" />
                        <span>Orders</span>
                      </button>

                      <div className="my-1 border-t border-gray-100 dark:border-gray-800" />

                      <button
                        onClick={() => {
                          setIsProfileOpen(false);
                          logout();
                        }}
                        className="w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/50 flex items-center gap-2.5 transition-colors cursor-pointer"
                      >
                        <LogOut size={15} />
                        <span>Logout</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:text-brand-primary dark:hover:text-white bg-gray-50 dark:bg-gray-900 transition-colors cursor-pointer"
              aria-label="Open menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Overlay) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40 lg:hidden"
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-white dark:bg-gray-950 z-50 p-6 flex flex-col justify-between shadow-2xl border-l border-gray-100 dark:border-gray-800 lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-gray-100 dark:border-gray-800">
                  <button onClick={() => handleNavClick('landing')} className="flex items-center gap-2.5 text-left">
                    <div className="w-8 h-8 rounded-lg bg-[#1E7D5B] flex items-center justify-center text-white font-bold">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <div>
                      <span className="block font-display font-extrabold text-sm tracking-tight text-[#1E7D5B] dark:text-white">
                        Ludhiana Hair Studio
                      </span>
                      <span className="block text-[8px] uppercase font-bold tracking-wider text-[#D4A017]">
                        ADVANCED CLINIC
                      </span>
                    </div>
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-500 hover:text-brand-primary"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Mobile User Mobile Header */}
                <div className="mt-4 p-3 bg-emerald-50 dark:bg-emerald-950/60 rounded-xl border border-emerald-200/60 dark:border-emerald-800/60 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-emerald-700 dark:text-emerald-300 font-bold uppercase block">
                      Patient Mobile
                    </span>
                    <span className="text-xs font-black text-gray-900 dark:text-white font-mono">
                      {userMobile || 'Verified Mobile'}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      logout();
                    }}
                    className="px-2.5 py-1 bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 rounded-lg text-xs font-bold hover:bg-red-200 transition-colors"
                  >
                    Logout
                  </button>
                </div>

                {/* Mobile Links */}
                <div className="flex flex-col gap-1.5 py-4">
                  {mainLinks.map((link) => {
                    const isActive = currentView === link.view;
                    return (
                      <button
                        key={link.view}
                        onClick={() => handleNavClick(link.view)}
                        className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex justify-between items-center transition-all ${
                          isActive
                            ? 'text-brand-primary dark:text-brand-secondary bg-brand-primary/5 dark:bg-brand-secondary/5'
                            : 'text-gray-600 dark:text-gray-300 hover:text-brand-primary hover:bg-gray-50 dark:hover:bg-gray-900'
                        }`}
                      >
                        {link.label}
                        <ChevronRight size={14} className="opacity-50" />
                      </button>
                    );
                  })}
                </div>

                {/* Patient Profile Shortcuts */}
                <div className="space-y-2 pt-2 border-t border-gray-100 dark:border-gray-800">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setShowAppointmentsModal(true);
                    }}
                    className="w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2"
                  >
                    <Calendar size={14} className="text-brand-primary" />
                    My Appointments
                  </button>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setShowOrdersModal(true);
                    }}
                    className="w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2"
                  >
                    <ShoppingBag size={14} className="text-brand-primary" />
                    My Orders
                  </button>
                </div>
              </div>

              {/* Bottom Drawer Actions */}
              <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-3">
                <button
                  onClick={() => handleNavClick('booking')}
                  className="w-full py-3 rounded-xl bg-brand-primary text-white text-center font-semibold text-sm hover:bg-brand-primary-light transition-all flex items-center justify-center gap-2"
                >
                  Book Online Consult
                  <ChevronRight size={14} />
                </button>
                <div className="text-center text-xs text-gray-400 dark:text-gray-500">
                  Speak to an expert. Mon-Sat: 9AM - 8PM
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

