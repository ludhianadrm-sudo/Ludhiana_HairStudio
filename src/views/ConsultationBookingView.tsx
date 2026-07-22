import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useApp } from '../context/AppContext';
import { Breadcrumb } from '../components/Breadcrumb';
import { BookingDetails } from '../types';
import { Calendar as CalendarIcon, Clock, User, Phone, Mail, FileText, CheckCircle, X, Sparkles, AlertCircle, ShieldCheck, HeartPulse, HelpCircle } from 'lucide-react';

const bookingSchema = z.object({
  name: z.string().min(3, 'Full name must be at least 3 characters.'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits.'),
  email: z.string().email('Please enter a valid email address.'),
  date: z.string().min(1, 'Please select a preferred date.'),
  time: z.string().min(1, 'Please select a preferred time slot.'),
  concern: z.string().min(1, 'Please select your main concern.'),
  reason: z.string().min(10, 'Please provide a detailed description (at least 10 characters).'),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export const ConsultationBookingView: React.FC = () => {
  const { addBooking } = useApp();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [lastBookedDetail, setLastBookedDetail] = useState<BookingDetails | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      concern: '',
      reason: '',
    },
  });

  // Available sample time slots for callback
  const timeSlots = ['09:00 AM - 11:00 AM', '11:00 AM - 01:00 PM', '01:00 PM - 03:00 PM', '03:00 PM - 05:00 PM', '05:00 PM - 07:00 PM'];

  const onSubmit = (data: BookingFormValues) => {
    const booking: BookingDetails = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      date: data.date,
      time: data.time,
      concern: data.concern,
      reason: data.reason,
    };

    addBooking(booking);
    setLastBookedDetail(booking);
    setShowSuccessModal(true);
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
    reset();
  };

  const handleQuickFill = () => {
    setValue('name', 'Johnathan Doe');
    setValue('email', 'johnathan.doe@gmail.com');
    setValue('phone', '5551234567');
    setValue('concern', 'Hair Transplant Inquiry');
    setValue('date', new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0]);
    setValue('time', '11:00 AM - 01:00 PM');
    setValue('reason', 'Experiencing sudden crown thinning and would like to schedule a premium FUE evaluation.');
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-950 pb-20 min-h-screen">
      <Breadcrumb items={[{ label: 'Inquire & Book' }]} />

      {/* Header Banner */}
      <section className="bg-white dark:bg-gray-900 border-b border-slate-200 dark:border-gray-800 py-12 px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 dark:bg-emerald-950/40 text-[#1E7D5B] dark:text-emerald-400 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-100 dark:border-emerald-900">
            <span className="w-2 h-2 bg-[#D4A017] rounded-full animate-pulse"></span>
            Direct Clinical Coordinator Contact
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#1E7D5B] dark:text-white mt-2">
            Schedule a Consultation & Inquiry
          </h1>
          <p className="text-sm sm:text-base text-slate-500 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto mt-2">
            Submit your clinical hair goals or transplantation questions. Our dedicated clinic coordinator team will analyze your request and reach out directly to arrange your personalized solution.
          </p>
        </div>
      </section>

      {/* Main Grid Layout */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Form (Col 8) */}
        <div className="lg:col-span-8 bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-[32px] shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-gray-850">
          
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-display text-base sm:text-lg font-bold text-[#1E7D5B] dark:text-emerald-400 flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-[#1E7D5B]" />
              Inquiry & Contact Information
            </h2>
            <button
              onClick={handleQuickFill}
              className="text-[10px] font-bold text-[#1E7D5B] dark:text-emerald-400 hover:text-emerald-700 uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-full transition-all"
            >
              Demo Fill
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wide flex items-center gap-1">
                  <User className="w-3.5 h-3.5 opacity-60" /> Your Full Name
                </label>
                <input
                  type="text"
                  placeholder="Johnathan Doe"
                  {...register('name')}
                  className={`w-full px-4 py-3 bg-[#F8FAFC] dark:bg-gray-950 text-sm rounded-xl focus:outline-none border ${
                    errors.name ? 'border-rose-500 focus:border-rose-500' : 'border-transparent dark:border-gray-800 focus:border-[#1E7D5B]'
                  } text-gray-900 dark:text-white placeholder-gray-400`}
                />
                {errors.name && (
                  <span className="text-xs text-rose-500 font-semibold block">{errors.name.message}</span>
                )}
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wide flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 opacity-60" /> Email Address
                </label>
                <input
                  type="email"
                  placeholder="john.doe@gmail.com"
                  {...register('email')}
                  className={`w-full px-4 py-3 bg-[#F8FAFC] dark:bg-gray-950 text-sm rounded-xl focus:outline-none border ${
                    errors.email ? 'border-rose-500 focus:border-rose-500' : 'border-transparent dark:border-gray-800 focus:border-[#1E7D5B]'
                  } text-gray-900 dark:text-white placeholder-gray-400`}
                />
                {errors.email && (
                  <span className="text-xs text-rose-500 font-semibold block">{errors.email.message}</span>
                )}
              </div>

            </div>

            {/* Phone and Area of Concern */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Phone Number */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wide flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 opacity-60" /> Callback Phone
                </label>
                <input
                  type="text"
                  placeholder="5551234567"
                  {...register('phone')}
                  className={`w-full px-4 py-3 bg-[#F8FAFC] dark:bg-gray-950 text-sm rounded-xl focus:outline-none border ${
                    errors.phone ? 'border-rose-500 focus:border-rose-500' : 'border-transparent dark:border-gray-800 focus:border-[#1E7D5B]'
                  } text-gray-900 dark:text-white placeholder-gray-400`}
                />
                {errors.phone && (
                  <span className="text-xs text-rose-500 font-semibold block">{errors.phone.message}</span>
                )}
              </div>

              {/* Area of Concern */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wide">
                  Main Area of Concern
                </label>
                <select
                  {...register('concern')}
                  className={`w-full px-4 py-3 bg-[#F8FAFC] dark:bg-gray-950 text-sm rounded-xl focus:outline-none border ${
                    errors.concern ? 'border-rose-500 focus:border-rose-500' : 'border-transparent dark:border-gray-800 focus:border-[#1E7D5B]'
                  } text-slate-800 dark:text-white`}
                >
                  <option value="">Select your objective...</option>
                  <option value="Hair Transplant Inquiry">Hair Transplant Procedure Inquiry</option>
                  <option value="General Hair Loss">Clinical Hair Loss & Thinning Treatments</option>
                  <option value="Scalp Therapy">Scalp Health & Dandruff Therapy</option>
                  <option value="Product Guidance">Hair Care Product Recommendation</option>
                  <option value="Other">Other General Inquiry</option>
                </select>
                {errors.concern && (
                  <span className="text-xs text-rose-500 font-semibold block">{errors.concern.message}</span>
                )}
              </div>

            </div>

            {/* Preferred Callback Date */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wide flex items-center gap-1">
                <CalendarIcon className="w-3.5 h-3.5 opacity-60" /> Preferred Callback Date
              </label>
              <input
                type="date"
                min={new Date().toISOString().split('T')[0]}
                {...register('date')}
                className={`w-full px-4 py-3 bg-[#F8FAFC] dark:bg-gray-950 text-sm rounded-xl focus:outline-none border ${
                  errors.date ? 'border-rose-500 focus:border-rose-500' : 'border-transparent dark:border-gray-800 focus:border-[#1E7D5B]'
                } text-gray-900 dark:text-white`}
              />
              {errors.date && (
                <span className="text-xs text-rose-500 font-semibold block">{errors.date.message}</span>
              )}
            </div>

            {/* Preferred Callback Time Window */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wide flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 opacity-60" /> Preferred callback Time slot
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                {timeSlots.map((slot) => {
                  const isSelected = watch('time') === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setValue('time', slot)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer border text-left ${
                        isSelected
                          ? 'bg-[#1E7D5B] text-white border-[#1E7D5B] shadow-sm shadow-emerald-900/10'
                          : 'bg-[#F8FAFC] dark:bg-gray-950 text-slate-600 dark:text-gray-300 border-transparent dark:border-gray-800 hover:bg-slate-100 dark:hover:bg-gray-900'
                      }`}
                    >
                      {slot}
                    </button>
                  );
                })}
              </div>
              {errors.time && (
                <span className="text-xs text-rose-500 font-semibold block">{errors.time.message}</span>
              )}
            </div>

            {/* Detailed Symptoms / Inquiry */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-wide flex items-center gap-1">
                <FileText className="w-3.5 h-3.5 opacity-60" /> Describe Your Objectives & Symptoms
              </label>
              <textarea
                rows={5}
                placeholder="Tell us about your hair goals, hair fall grade, previous treatments used, or specific questions about FUE/DHI transplant technology..."
                {...register('reason')}
                className={`w-full px-4 py-3 bg-[#F8FAFC] dark:bg-gray-950 text-sm rounded-xl focus:outline-none border ${
                  errors.reason ? 'border-rose-500 focus:border-rose-500' : 'border-transparent dark:border-gray-800 focus:border-[#1E7D5B]'
                } text-gray-900 dark:text-white placeholder-gray-400`}
              />
              {errors.reason && (
                <span className="text-xs text-rose-500 font-semibold block">{errors.reason.message}</span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-[#1E7D5B] hover:bg-[#165a42] text-white font-bold text-base shadow-lg shadow-emerald-900/10 hover:scale-[1.01] transition-all cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting Inquiry...' : 'Submit Inquiry to Clinic Admin'}
            </button>

          </form>

        </div>

        {/* Right Side: Informative Panel / HIPAA Info (Col 4) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* How It Works Card */}
          <div className="bg-white dark:bg-gray-900 rounded-[32px] p-6 border border-slate-100 dark:border-gray-800 shadow-lg shadow-slate-200/50 dark:shadow-none space-y-5">
            <h3 className="font-display font-bold text-sm text-[#1E7D5B] dark:text-emerald-400 uppercase tracking-wider flex items-center gap-2">
              <HeartPulse className="w-4 h-4 text-[#D4A017]" />
              The Consultation Process
            </h3>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-50 text-[#1E7D5B] font-bold text-xs flex items-center justify-center shrink-0">1</div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 dark:text-white mb-0.5">Submit Inquiry</h4>
                  <p className="text-[11px] text-slate-500 dark:text-gray-400">Share your details and choose your callback window using the secure form.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-50 text-[#1E7D5B] font-bold text-xs flex items-center justify-center shrink-0">2</div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 dark:text-white mb-0.5">Clinical Admin Review</h4>
                  <p className="text-[11px] text-slate-500 dark:text-gray-400">Our medical administration team reviews your symptoms and options.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-50 text-[#1E7D5B] font-bold text-xs flex items-center justify-center shrink-0">3</div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 dark:text-white mb-0.5">Direct Call / Email</h4>
                  <p className="text-[11px] text-slate-500 dark:text-gray-400">A personal care coordinator contacts you within 24 business hours to organize options.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy & Trust Card */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-[32px] border border-slate-100 dark:border-gray-800 shadow-md shadow-slate-200/30 text-xs text-slate-500 dark:text-gray-400 space-y-3">
            <h4 className="font-bold text-[#1E7D5B] dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#D4A017]" />
              Data Safety & Privacy
            </h4>
            <p className="leading-relaxed">
              Your contact details and symptoms are fully encrypted and securely stored. We respect medical confidence and strictly protect your data against third parties.
            </p>
            <span className="block font-semibold text-[#1E7D5B] dark:text-emerald-400">
              ✓ Compliant Secure Encryption
            </span>
          </div>

          {/* Direct Callback Support */}
          <div className="bg-[#104F37] text-white p-6 rounded-[32px] shadow-lg shadow-emerald-900/15 space-y-3">
            <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#D4A017] block">
              Urgent Assistance
            </span>
            <h4 className="font-display font-bold text-sm leading-snug">
              Need immediate answers? Call our direct line:
            </h4>
            <div className="text-lg font-black tracking-tight text-white mt-1">
              +91 1800-123-4247
            </div>
            <p className="text-[11px] text-emerald-100 leading-relaxed">
              Available Monday through Saturday, 9:00 AM - 8:00 PM IST.
            </p>
          </div>

        </div>

      </div>

      {/* Success Booking Modal */}
      {showSuccessModal && lastBookedDetail && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white dark:bg-gray-900 max-w-md w-full rounded-[32px] p-8 text-center relative border border-slate-100 dark:border-gray-800 shadow-2xl space-y-5">
            <button
              onClick={handleModalClose}
              className="absolute top-4 right-4 p-1.5 rounded-xl bg-[#F8FAFC] dark:bg-gray-800 text-slate-500 hover:text-[#1E7D5B] cursor-pointer"
            >
              <X size={16} />
            </button>

            <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-800/60 text-[#1E7D5B] dark:text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle className="w-10 h-10 animate-bounce" />
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-100 dark:bg-emerald-950/40 text-[#1E7D5B] dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wider rounded-full">
                <Sparkles className="w-3 h-3 text-[#D4A017]" /> Coordinator Queue Assigned
              </div>
              <h3 className="font-display text-xl font-extrabold text-[#1E7D5B] dark:text-emerald-400">
                Inquiry Received Successfully!
              </h3>
              <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">
                Thank you, <strong>{lastBookedDetail.name}</strong>. Your clinical request has been registered in our admin queue. An experienced hair care coordinator will call or email you on <strong>{lastBookedDetail.date}</strong> during the <strong>{lastBookedDetail.time}</strong> time window.
              </p>
            </div>

            <div className="bg-[#F8FAFC] dark:bg-gray-950 p-4 rounded-2xl border border-slate-100 dark:border-gray-800 text-left text-xs space-y-1 text-slate-700 dark:text-gray-300">
              <div><strong>Patient Name:</strong> {lastBookedDetail.name}</div>
              <div><strong>Target Concern:</strong> {lastBookedDetail.concern}</div>
              <div><strong>Callback window:</strong> {lastBookedDetail.date} ({lastBookedDetail.time})</div>
            </div>

            <button
              onClick={handleModalClose}
              className="w-full py-3 rounded-xl bg-[#1E7D5B] hover:bg-[#165a42] text-white font-bold text-sm transition-all shadow-sm cursor-pointer"
            >
              Perfect, Understood
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
