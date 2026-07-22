import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Breadcrumb } from '../components/Breadcrumb';
import { ShoppingBag, Trash2, Plus, Minus, Tag, ArrowRight, ShieldCheck } from 'lucide-react';

export const CartView: React.FC = () => {
  const { cart, removeFromCart, updateCartQty, cartTotal, setView, addToast } = useApp();
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);

  // Validate coupon
  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.toUpperCase() === 'FOLLICLE10') {
      setDiscountPercent(10);
      setCouponApplied(true);
      addToast('Coupon FOLLICLE10 applied! Saved 10% on your order.', 'success');
    } else if (couponCode.trim() === '') {
      addToast('Please enter a coupon code', 'error');
    } else {
      addToast('Invalid coupon code. Try entering FOLLICLE10!', 'error');
    }
  };

  const handleRemoveCoupon = () => {
    setDiscountPercent(0);
    setCouponApplied(false);
    setCouponCode('');
    addToast('Coupon removed.', 'info');
  };

  // Calculations
  const subtotal = cartTotal;
  const discountAmount = (subtotal * discountPercent) / 100;
  const shippingCost = subtotal > 50 || subtotal === 0 ? 0 : 5.99;
  const grandTotal = subtotal - discountAmount + shippingCost;

  const handleCheckout = () => {
    if (cart.length === 0) {
      addToast('Your shopping cart is empty', 'error');
      return;
    }
    setView('checkout');
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-950 pb-20 min-h-screen">
      <Breadcrumb items={[{ label: 'Shopping Cart' }]} />

      {/* Header Info */}
      <section className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 py-10 px-4 sm:px-6 lg:px-8 text-center space-y-2">
        <h1 className="font-display text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
          Your Selected Hair Therapeutics
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          Review clinical formulations, adjust quantities, and proceed to secure checkout.
        </p>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {cart.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Cart Items List (Col 8) */}
            <div className="lg:col-span-8 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-white dark:bg-gray-900 p-4 rounded-2xl border border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-center gap-4 shadow-sm relative"
                >
                  {/* Product image */}
                  <div className="w-20 h-20 bg-gray-50 dark:bg-gray-850 rounded-xl overflow-hidden shrink-0 flex items-center justify-center">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Name and category */}
                  <div className="flex-1 text-center sm:text-left space-y-1">
                    <span className="text-[10px] uppercase font-black text-brand-primary dark:text-brand-secondary tracking-wider block">
                      {item.product.category}
                    </span>
                    <h3 className="font-display text-sm font-bold text-gray-900 dark:text-white">
                      {item.product.name}
                    </h3>
                    <span className="block text-xs font-black text-gray-900 dark:text-white">
                      ${item.product.price}.00 each
                    </span>
                  </div>

                  {/* Adjust counts and delete */}
                  <div className="flex items-center gap-6">
                    {/* Qty Adjustment */}
                    <div className="flex items-center border border-gray-200 dark:border-gray-800 rounded-xl bg-gray-50 dark:bg-gray-950 overflow-hidden">
                      <button
                        onClick={() => updateCartQty(item.product.id, item.quantity - 1)}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-500 transition-colors"
                      >
                        <Minus size={13} />
                      </button>
                      <span className="px-3 text-xs font-bold text-gray-800 dark:text-gray-200">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateCartQty(item.product.id, item.quantity + 1)}
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-500 transition-colors"
                      >
                        <Plus size={13} />
                      </button>
                    </div>

                    {/* Total item cost */}
                    <span className="text-sm font-black text-gray-900 dark:text-white min-w-[50px] text-right">
                      ${item.product.price * item.quantity}.00
                    </span>

                    {/* Delete button */}
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="p-2 rounded-lg hover:bg-rose-50 text-gray-400 hover:text-rose-600 transition-colors"
                      aria-label="Delete item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}

              {/* Shopping actions */}
              <div className="flex justify-between pt-2">
                <button
                  onClick={() => setView('products')}
                  className="px-4 py-2.5 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 text-xs font-bold text-gray-700 dark:text-gray-200 cursor-pointer"
                >
                  ← Continue Shopping
                </button>
              </div>
            </div>

            {/* Order Summary Checkout Drawer (Col 4) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Promo box */}
              <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-4">
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-gray-700 dark:text-gray-300">
                  Promo / Coupon Code
                </h4>
                
                {couponApplied ? (
                  <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/25 border border-emerald-100 dark:border-emerald-900 text-xs text-brand-secondary font-semibold">
                    <div className="flex items-center gap-1.5">
                      <Tag className="w-4 h-4" />
                      <span>FOLLICLE10 (Active 10%)</span>
                    </div>
                    <button onClick={handleRemoveCoupon} className="text-gray-400 hover:text-rose-500 font-bold ml-1">
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter FOLLICLE10"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 px-3 py-2 bg-gray-50 dark:bg-gray-950 text-xs rounded-xl focus:outline-none border border-transparent dark:border-gray-800 text-gray-900 dark:text-white"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-brand-primary hover:bg-brand-primary-light text-white text-xs font-bold transition-all cursor-pointer"
                    >
                      Apply
                    </button>
                  </form>
                )}
                <span className="block text-[10px] text-gray-400 leading-normal">
                  Tip: Use promo code <strong>FOLLICLE10</strong> to get an instant 10% discount on any clinical purchases.
                </span>
              </div>

              {/* Bill Details */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-4">
                <h3 className="font-display font-bold text-sm text-gray-900 dark:text-white pb-3 border-b border-gray-100 dark:border-gray-850">
                  Bill Summary
                </h3>

                <div className="space-y-2.5 text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex justify-between">
                    <span>Cart Subtotal</span>
                    <span className="font-semibold text-gray-900 dark:text-white">${subtotal}.00</span>
                  </div>
                  {discountPercent > 0 && (
                    <div className="flex justify-between text-brand-secondary">
                      <span>FOLLICLE10 Promo Discount (10%)</span>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Clinical Shipping</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {shippingCost === 0 ? 'FREE' : `$${shippingCost}`}
                    </span>
                  </div>
                  {shippingCost > 0 && (
                    <span className="block text-[9px] text-gray-400 text-right">
                      Add ${(50 - subtotal).toFixed(2)} more to qualify for FREE Shipping
                    </span>
                  )}
                </div>

                <div className="flex justify-between pt-3 border-t border-gray-100 dark:border-gray-800 text-sm font-black text-gray-900 dark:text-white">
                  <span>Grand Total</span>
                  <span className="text-base text-brand-primary dark:text-brand-secondary">
                    ${grandTotal.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full py-4 rounded-xl bg-brand-primary hover:bg-brand-primary-light text-white font-bold text-sm shadow-md shadow-brand-primary/10 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-6"
                >
                  Proceed to Checkout
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* HIPAA Check */}
                <div className="flex items-start gap-2 pt-4 border-t border-gray-50 dark:border-gray-800/80 text-[10px] text-gray-400">
                  <ShieldCheck className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                  <span>
                    Your medical checkout is encrypted and secured via standard clinical PCI DSS regulations.
                  </span>
                </div>
              </div>

            </div>

          </div>
        ) : (
          <div className="text-center py-24 bg-white dark:bg-gray-900 rounded-3xl border border-dashed border-gray-200 dark:border-gray-800 max-w-2xl mx-auto">
            <ShoppingBag className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto" />
            <h3 className="font-display text-lg font-black text-gray-900 dark:text-white mt-4">
              Your Shopping Cart is Empty
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-xs mx-auto mt-1 leading-relaxed">
              Explore our clinical hair growth oils, DHT shampoos, biotin, and peptide serums to start your hair recovery routine.
            </p>
            <button
              onClick={() => setView('products')}
              className="mt-6 px-6 py-3 rounded-xl bg-brand-primary text-white text-xs font-bold hover:bg-brand-primary-light transition-all cursor-pointer"
            >
              Explore Products Shop
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
