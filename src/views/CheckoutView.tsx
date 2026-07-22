import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useApp } from '../context/AppContext';
import { Breadcrumb } from '../components/Breadcrumb';
import { OrderDetails } from '../types';
import { CreditCard, Truck, ShieldCheck, ShoppingBag, BadgeCheck, X, Sparkles, AlertCircle, FileText } from 'lucide-react';

const checkoutSchema = z.object({
  fullName: z.string().min(3, 'Shipping name must be at least 3 characters.'),
  phone: z.string().min(10, 'Contact phone must be at least 10 digits.'),
  email: z.string().email('Please enter a valid clinical contact email.'),
  address: z.string().min(10, 'Please provide a complete shipping address.'),
  city: z.string().min(2, 'Please specify your shipping city.'),
  postalCode: z.string().min(5, 'Postal/Zip code must be at least 5 digits.'),
  paymentMethod: z.string().min(1, 'Please select a payment method.'),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export const CheckoutView: React.FC = () => {
  const { cart, cartTotal, clearCart, lastOrder, setLastOrder, setView, addToast } = useApp();
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      address: '',
      city: '',
      postalCode: '',
      paymentMethod: 'Credit Card',
    },
  });

  const subtotal = cartTotal;
  const shippingCost = subtotal > 50 ? 0 : 5.99;
  const grandTotal = subtotal + shippingCost;

  const handleQuickFill = () => {
    setValue('fullName', 'Johnathan Doe');
    setValue('email', 'johnathan.doe@gmail.com');
    setValue('phone', '5551234567');
    setValue('address', '100 East Broad Street, Apt 4B');
    setValue('city', 'New York');
    setValue('postalCode', '10016');
    setValue('paymentMethod', 'Credit Card');
  };

  const onSubmit = (data: CheckoutFormValues) => {
    const orderId = `FOL-${Math.floor(Math.random() * 900000 + 100000)}`;

    const order: OrderDetails = {
      id: orderId,
      shipping: {
        fullName: data.fullName,
        phone: data.phone,
        email: data.email,
        address: data.address,
        city: data.city,
        postalCode: data.postalCode,
      },
      items: [...cart],
      total: grandTotal,
      paymentMethod: data.paymentMethod,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    };

    setLastOrder(order);
    clearCart(); // Clear shopping cart
    setSuccess(true);
    addToast('Your clinical order was received successfully!', 'success');
  };

  const handleFinish = () => {
    setSuccess(false);
    setLastOrder(null);
    setView('landing');
  };

  if (success && lastOrder) {
    const estimatedDelivery = new Date();
    estimatedDelivery.setDate(estimatedDelivery.getDate() + 3);
    const dateStr = estimatedDelivery.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

    return (
      <div className="bg-gray-50 dark:bg-gray-950 pb-20 min-h-screen flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-900 max-w-xl w-full rounded-3xl p-6 sm:p-10 text-center border border-gray-100 dark:border-gray-800 shadow-2xl space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-800/60 text-brand-secondary mx-auto flex items-center justify-center">
            <BadgeCheck className="w-10 h-10 animate-bounce" />
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-brand-secondary text-[10px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-brand-accent" /> Dispatch Approved
            </div>
            <h1 className="font-display text-2xl font-black text-gray-900 dark:text-white leading-tight">
              Clinical Order Dispatched!
            </h1>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-md mx-auto">
              Your order <strong>{lastOrder.id}</strong> has been successfully processed. We have sent a detailed pharmacy invoice and real-time tracking code to <strong>{lastOrder.shipping.email}</strong>.
            </p>
          </div>

          {/* Delivery estimate */}
          <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-950 border border-gray-100 dark:border-gray-850 text-left space-y-2 text-xs">
            <div className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white pb-1.5 border-b border-gray-100 dark:border-gray-900">
              <Truck className="w-4 h-4 text-brand-primary" />
              <span>Express Delivery Estimate</span>
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              <strong>Est. Delivery:</strong> {dateStr} (3 business days)
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              <strong>Ship Address:</strong> {lastOrder.shipping.address}, {lastOrder.shipping.city}
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-bold text-brand-primary dark:text-brand-secondary">
              Total Charged: ${lastOrder.total.toFixed(2)} via {lastOrder.paymentMethod}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50/30 border border-emerald-100/50 text-left text-[11px] text-gray-500 leading-relaxed">
            <strong>✓ Care Instructions:</strong> For maximum shedding reversal, apply 1ml of your re-growth serum directly onto dry scalp thinning spots every single night. Avoid hair styling heat dryers for the first 4 weeks of therapy.
          </div>

          <button
            onClick={handleFinish}
            className="w-full py-4 rounded-xl bg-brand-primary hover:bg-brand-primary-light text-white font-bold text-sm transition-all shadow-md cursor-pointer"
          >
            Back to Home Portal
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-950 pb-20 min-h-screen">
      <Breadcrumb items={[{ label: 'E-Commerce Checkout' }]} />

      {/* Header */}
      <section className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 py-10 px-4 sm:px-6 lg:px-8 text-center space-y-2">
        <h1 className="font-display text-2xl sm:text-3xl font-black text-gray-900 dark:text-white">
          Secure Pharmacy Checkout
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          Complete shipping details to process and dispatch your scalp prescriptions.
        </p>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Fields Form (Col 7) */}
        <div className="lg:col-span-7 bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 space-y-6">
          <div className="flex justify-between items-center pb-4 border-b border-gray-100 dark:border-gray-800">
            <h2 className="font-display text-sm sm:text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Truck className="w-5 h-5 text-brand-primary" />
              Shipping & Recipient Details
            </h2>
            <button
              onClick={handleQuickFill}
              className="text-[10px] font-bold text-brand-primary hover:text-brand-primary-light uppercase tracking-wider bg-brand-primary/5 px-2 py-1 rounded"
            >
              Demo Fill
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            
            {/* Grid Name, Phone, Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                  Recipient Full Name
                </label>
                <input
                  type="text"
                  placeholder="Johnathan Doe"
                  {...register('fullName')}
                  className={`w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-950 text-xs rounded-xl focus:outline-none border ${
                    errors.fullName ? 'border-rose-500 focus:border-rose-500' : 'border-transparent dark:border-gray-800 focus:border-brand-primary'
                  } text-gray-900 dark:text-white placeholder-gray-400`}
                />
                {errors.fullName && (
                  <span className="text-xs text-rose-500 font-semibold block">{errors.fullName.message}</span>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                  Contact Email
                </label>
                <input
                  type="email"
                  placeholder="johnathan@doe.com"
                  {...register('email')}
                  className={`w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-950 text-xs rounded-xl focus:outline-none border ${
                    errors.email ? 'border-rose-500 focus:border-rose-500' : 'border-transparent dark:border-gray-800 focus:border-brand-primary'
                  } text-gray-900 dark:text-white placeholder-gray-400`}
                />
                {errors.email && (
                  <span className="text-xs text-rose-500 font-semibold block">{errors.email.message}</span>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                  Contact Phone
                </label>
                <input
                  type="text"
                  placeholder="5551234567"
                  {...register('phone')}
                  className={`w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-950 text-xs rounded-xl focus:outline-none border ${
                    errors.phone ? 'border-rose-500 focus:border-rose-500' : 'border-transparent dark:border-gray-800 focus:border-brand-primary'
                  } text-gray-900 dark:text-white placeholder-gray-400`}
                />
                {errors.phone && (
                  <span className="text-xs text-rose-500 font-semibold block">{errors.phone.message}</span>
                )}
              </div>

              {/* Payment selection */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                  Payment Method
                </label>
                <select
                  {...register('paymentMethod')}
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-950 text-xs rounded-xl focus:outline-none border border-transparent dark:border-gray-800 text-gray-900 dark:text-white"
                >
                  <option value="Credit Card">Credit / Debit Card</option>
                  <option value="HSA/FSA Card">Clinical HSA / FSA Card</option>
                  <option value="PayPal">Secure PayPal</option>
                  <option value="Clinical Co-Pay">Insurance Co-Pay Co-ordination</option>
                </select>
              </div>

            </div>

            {/* Address */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                Shipping Street Address
              </label>
              <input
                type="text"
                placeholder="100 East Broad Street, Apt 4B"
                {...register('address')}
                className={`w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-950 text-xs rounded-xl focus:outline-none border ${
                  errors.address ? 'border-rose-500 focus:border-rose-500' : 'border-transparent dark:border-gray-800 focus:border-brand-primary'
                } text-gray-900 dark:text-white placeholder-gray-400`}
              />
              {errors.address && (
                <span className="text-xs text-rose-500 font-semibold block">{errors.address.message}</span>
              )}
            </div>

            {/* City / Postal */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* City */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                  Shipping City
                </label>
                <input
                  type="text"
                  placeholder="New York"
                  {...register('city')}
                  className={`w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-950 text-xs rounded-xl focus:outline-none border ${
                    errors.city ? 'border-rose-500 focus:border-rose-500' : 'border-transparent dark:border-gray-800 focus:border-brand-primary'
                  } text-gray-900 dark:text-white placeholder-gray-400`}
                />
                {errors.city && (
                  <span className="text-xs text-rose-500 font-semibold block">{errors.city.message}</span>
                )}
              </div>

              {/* Postal */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                  Postal/Zip Code
                </label>
                <input
                  type="text"
                  placeholder="10016"
                  {...register('postalCode')}
                  className={`w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-950 text-xs rounded-xl focus:outline-none border ${
                    errors.postalCode ? 'border-rose-500 focus:border-rose-500' : 'border-transparent dark:border-gray-800 focus:border-brand-primary'
                  } text-gray-900 dark:text-white placeholder-gray-400`}
                />
                {errors.postalCode && (
                  <span className="text-xs text-rose-500 font-semibold block">{errors.postalCode.message}</span>
                )}
              </div>

            </div>

            {/* Payment UI Details simulation */}
            <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-950/60 border border-gray-100 dark:border-gray-850 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                <CreditCard className="w-4 h-4 text-brand-primary" />
                <span>Encrypted Billing Details</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <input
                    type="text"
                    disabled
                    value="••••  ••••  ••••  4242"
                    className="w-full px-3 py-2 bg-gray-200/50 dark:bg-gray-900 text-xs rounded-xl text-gray-500 border border-transparent cursor-not-allowed"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    disabled
                    value="12 / 29"
                    className="w-full px-3 py-2 bg-gray-200/50 dark:bg-gray-900 text-xs rounded-xl text-gray-500 border border-transparent cursor-not-allowed text-center"
                  />
                </div>
              </div>
              <span className="block text-[10px] text-gray-400 leading-normal">
                Card details are pre-filled in sandbox mode. HSA/FSA cards are accepted directly for all therapeutic shampoos and nutritional supplements.
              </span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-brand-primary hover:bg-brand-primary-light text-white font-bold text-base shadow-lg shadow-brand-primary/10 transition-all cursor-pointer"
            >
              {isSubmitting ? 'Authorizing Payment...' : `Authorize Charge of $${grandTotal.toFixed(2)}`}
            </button>

          </form>

        </div>

        {/* Right Order Summary sidebar (Col 5) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-4">
            <h3 className="font-display font-bold text-sm text-gray-900 dark:text-white flex items-center gap-2 pb-3 border-b border-gray-100 dark:border-gray-850">
              <ShoppingBag className="w-4.5 h-4.5 text-brand-primary" />
              Order Items Summary
            </h3>

            {cart.length > 0 ? (
              <div className="space-y-4 max-h-60 overflow-y-auto pr-1">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex items-center gap-3 justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-10 h-10 object-cover rounded-lg bg-gray-50 border"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <span className="block font-bold text-gray-900 dark:text-white line-clamp-1">{item.product.name}</span>
                        <span className="block text-gray-400 text-[10px]">Qty: {item.quantity}</span>
                      </div>
                    </div>
                    <span className="font-bold text-gray-900 dark:text-white shrink-0">
                      ${item.product.price * item.quantity}.00
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6 text-xs text-gray-400">Your cart is empty.</div>
            )}

            <div className="pt-4 border-t border-gray-100 dark:border-gray-850 space-y-2 text-xs text-gray-500 dark:text-gray-400">
              <div className="flex justify-between">
                <span>Items Subtotal</span>
                <span className="font-semibold text-gray-900 dark:text-white">${subtotal}.00</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Fees</span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {shippingCost === 0 ? 'FREE' : `$${shippingCost}`}
                </span>
              </div>
              <div className="flex justify-between pt-3 border-t border-gray-100 dark:border-gray-800 text-sm font-black text-gray-900 dark:text-white">
                <span>Grand Total</span>
                <span className="text-brand-primary dark:text-brand-secondary">${grandTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 text-xs text-gray-500 space-y-3">
            <h4 className="font-bold text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-brand-primary" /> SECURE DIALOG
            </h4>
            <p className="leading-relaxed">
              We process payments via Stripe API sandbox. Your transaction token is encrypted and routed directly without storage.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
