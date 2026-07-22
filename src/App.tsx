import React, { useEffect, useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ToastContainer } from './components/ToastContainer';
import { AppointmentsModal } from './components/AppointmentsModal';
import { OrdersModal } from './components/OrdersModal';

// Import Views
import { AuthView } from './views/AuthView';
import { LandingView } from './views/LandingView';
import { AboutView } from './views/AboutView';
import { HairProductsView } from './views/HairProductsView';
import { HairTransplantView } from './views/HairTransplantView';
import { ConsultationBookingView } from './views/ConsultationBookingView';
import { ContactView } from './views/ContactView';
import { BlogView } from './views/BlogView';
import { CartView } from './views/CartView';
import { CheckoutView } from './views/CheckoutView';
import { HairAnalysisView } from './views/HairAnalysisView';

import { ArrowUp } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

const AppContent: React.FC = () => {
  const { currentView, isAuthenticated } = useApp();
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Monitor scroll for Back-To-Top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // State Routing Map
  const renderView = () => {
    switch (currentView) {
      case 'landing':
        return <LandingView />;
      case 'about':
        return <AboutView />;
      case 'products':
        return <HairProductsView />;
      case 'transplant':
        return <HairTransplantView />;
      case 'booking':
        return <ConsultationBookingView />;
      case 'contact':
        return <ContactView />;
      case 'blog':
        return <BlogView />;
      case 'cart':
        return <CartView />;
      case 'checkout':
        return <CheckoutView />;
      case 'analysis':
        return <HairAnalysisView />;
      default:
        return <LandingView />;
    }
  };

  // Protected Route Check: Require Mobile Authentication
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-950 text-white font-sans">
        <ToastContainer />
        <AuthView />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-200 selection:bg-brand-primary/25">
      {/* Dynamic Floating Toast System */}
      <ToastContainer />

      {/* Profile Modals */}
      <AppointmentsModal />
      <OrdersModal />

      {/* Persistent Premium Navbar */}
      <Navbar />

      {/* Main Dynamic Workspace Frame */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Elegant Multi-section Footer */}
      <Footer />

      {/* Sticky Back To Top button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-brand-primary dark:bg-emerald-600 hover:bg-brand-primary-light text-white shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center border border-white/10"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
