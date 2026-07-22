import React from 'react';
import { useApp } from '../context/AppContext';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, PackageCheck, MapPin, ArrowRight, Truck } from 'lucide-react';

export const OrdersModal: React.FC = () => {
  const { showOrdersModal, setShowOrdersModal, lastOrder, setView, userMobile } = useApp();

  if (!showOrdersModal) return null;

  // Sample order for demonstration if lastOrder is empty
  const ordersList = lastOrder ? [lastOrder] : [
    {
      id: 'LHS-ORD-88219',
      date: new Date(Date.now() - 86400000 * 3).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      total: 1899,
      paymentMethod: 'UPI / Online Payment',
      shipping: {
        fullName: 'Valued Customer',
        phone: userMobile || '+91 98100 12345',
        address: 'Ferozepur Road, Near Westend Mall',
        city: 'Ludhiana',
        postalCode: '141012'
      },
      items: [
        {
          product: {
            id: 'prod-1',
            name: 'Ludhiana Hair Studio Intense Re-Growth Serum',
            price: 1899,
            image: 'https://images.unsplash.com/photo-1608248597261-e4d315026540?auto=format&fit=crop&q=80&w=400',
            category: 'Serums'
          },
          quantity: 1
        }
      ]
    }
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowOrdersModal(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative z-10 w-full max-w-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
        >
          {/* Modal Header */}
          <div className="p-6 bg-brand-primary text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-brand-accent" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg leading-tight">My Orders</h3>
                <p className="text-xs text-emerald-100">Clinical hair products and prescription kit orders</p>
              </div>
            </div>
            <button
              onClick={() => setShowOrdersModal(false)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 overflow-y-auto space-y-4 flex-grow">
            {ordersList.map((order, idx) => (
              <div
                key={order.id || idx}
                className="p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 space-y-4 hover:border-brand-primary/30 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-gray-200/60 dark:border-gray-700/60">
                  <div>
                    <span className="text-xs font-bold text-gray-900 dark:text-white block">
                      Order ID: #{order.id}
                    </span>
                    <span className="text-[11px] text-gray-400">Placed on {order.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-800 flex items-center gap-1">
                      <Truck size={12} />
                      IN TRANSIT
                    </span>
                  </div>
                </div>

                {/* Items List */}
                <div className="space-y-3">
                  {order.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center gap-3">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-12 h-12 rounded-xl object-cover border border-gray-200 dark:border-gray-700"
                      />
                      <div className="flex-1 min-w-0">
                        <h5 className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white truncate">
                          {item.product.name}
                        </h5>
                        <p className="text-xs text-gray-500">
                          Qty: {item.quantity} × ₹{item.product.price}
                        </p>
                      </div>
                      <div className="font-bold text-xs text-brand-primary">
                        ₹{item.product.price * item.quantity}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Shipping info */}
                <div className="pt-3 border-t border-gray-200/60 dark:border-gray-700/60 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-600 dark:text-gray-300 gap-2">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-primary shrink-0" />
                    <span>Delivering to {order.shipping.city}, {order.shipping.postalCode}</span>
                  </div>
                  <div className="font-extrabold text-sm text-gray-900 dark:text-white">
                    Total Paid: ₹{order.total}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal Footer */}
          <div className="p-4 bg-gray-50 dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
            <div className="text-xs text-gray-500 flex items-center gap-1">
              <PackageCheck className="w-3.5 h-3.5 text-brand-primary" />
              <span>Free Express Delivery Across India</span>
            </div>
            <button
              onClick={() => {
                setShowOrdersModal(false);
                setView('products');
              }}
              className="px-4 py-2 bg-brand-primary hover:bg-brand-primary-light text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Explore Products</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
