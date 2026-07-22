import React, { createContext, useContext, useState, useEffect } from 'react';
import { Doctor, Product, BlogPost, CartItem, BookingDetails, OrderDetails } from '../types';
import { DOCTORS as INITIAL_DOCTORS } from '../data/dummyData';

export type ViewType =
  | 'landing'
  | 'about'
  | 'doctors'
  | 'doctor-registration'
  | 'products'
  | 'transplant'
  | 'booking'
  | 'contact'
  | 'blog'
  | 'cart'
  | 'checkout'
  | 'order-success'
  | 'analysis';

export interface ToastMessage {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

interface AppContextType {
  currentView: ViewType;
  setView: (view: ViewType) => void;
  isAuthenticated: boolean;
  userMobile: string | null;
  login: (mobileNumber: string) => void;
  logout: () => void;
  showAppointmentsModal: boolean;
  setShowAppointmentsModal: (show: boolean) => void;
  showOrdersModal: boolean;
  setShowOrdersModal: (show: boolean) => void;
  doctors: Doctor[];
  registerDoctor: (doctor: Doctor) => void;
  selectedDoctorId: string | null;
  setSelectedDoctorId: (id: string | null) => void;
  selectedProductId: string | null;
  setSelectedProductId: (id: string | null) => void;
  selectedBlogId: string | null;
  setSelectedBlogId: (id: string | null) => void;
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartQty: (productId: string, qty: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
  bookings: BookingDetails[];
  addBooking: (booking: BookingDetails) => void;
  lastOrder: OrderDetails | null;
  setLastOrder: (order: OrderDetails | null) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  toasts: ToastMessage[];
  addToast: (message: string, type?: 'success' | 'error' | 'info') => void;
  removeToast: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentView, setViewRaw] = useState<ViewType>('landing');
  const [doctors, setDoctors] = useState<Doctor[]>(INITIAL_DOCTORS);
  const [selectedDoctorId, setSelectedDoctorId] = useState<string | null>(null);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [bookings, setBookings] = useState<BookingDetails[]>([]);
  const [lastOrder, setLastOrder] = useState<OrderDetails | null>(null);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Auth State with localStorage Persistence
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('lhs_user_authenticated') === 'true';
  });
  const [userMobile, setUserMobile] = useState<string | null>(() => {
    return localStorage.getItem('lhs_user_mobile');
  });

  // Profile Modal Controls
  const [showAppointmentsModal, setShowAppointmentsModal] = useState<boolean>(false);
  const [showOrdersModal, setShowOrdersModal] = useState<boolean>(false);

  const login = (mobileNumber: string) => {
    setIsAuthenticated(true);
    setUserMobile(mobileNumber);
    localStorage.setItem('lhs_user_authenticated', 'true');
    localStorage.setItem('lhs_user_mobile', mobileNumber);
    addToast('Logged in successfully', 'success');
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserMobile(null);
    localStorage.removeItem('lhs_user_authenticated');
    localStorage.removeItem('lhs_user_mobile');
    setShowAppointmentsModal(false);
    setShowOrdersModal(false);
    addToast('Logged out successfully', 'info');
  };

  // Smooth scroll to top on view changes
  const setView = (view: ViewType) => {
    setViewRaw(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Synchronize dark mode class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Toast utilities
  const addToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Cart operations
  const addToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        addToast(`Increased ${product.name} quantity to ${updated[existingIndex].quantity}`, 'success');
        return updated;
      }
      addToast(`Added ${product.name} to cart`, 'success');
      return [...prev, { product, quantity }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => {
      const product = prev.find((item) => item.product.id === productId)?.product;
      if (product) {
        addToast(`Removed ${product.name} from cart`, 'info');
      }
      return prev.filter((item) => item.product.id !== productId);
    });
  };

  const updateCartQty = (productId: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity: qty } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  // Doctor Registration
  const registerDoctor = (newDoc: Doctor) => {
    setDoctors((prev) => [newDoc, ...prev]);
    addToast(`Dr. ${newDoc.name} registered successfully!`, 'success');
  };

  // Booking appointment
  const addBooking = (newBooking: BookingDetails) => {
    setBookings((prev) => [newBooking, ...prev]);
    addToast(`Inquiry received! Our care coordinator will contact you shortly.`, 'success');
  };

  return (
    <AppContext.Provider
      value={{
        currentView,
        setView,
        isAuthenticated,
        userMobile,
        login,
        logout,
        showAppointmentsModal,
        setShowAppointmentsModal,
        showOrdersModal,
        setShowOrdersModal,
        doctors,
        registerDoctor,
        selectedDoctorId,
        setSelectedDoctorId,
        selectedProductId,
        setSelectedProductId,
        selectedBlogId,
        setSelectedBlogId,
        cart,
        addToCart,
        removeFromCart,
        updateCartQty,
        clearCart,
        cartCount,
        cartTotal,
        bookings,
        addBooking,
        lastOrder,
        setLastOrder,
        darkMode,
        setDarkMode,
        toasts,
        addToast,
        removeToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
