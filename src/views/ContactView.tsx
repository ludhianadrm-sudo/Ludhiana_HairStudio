import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useApp } from '../context/AppContext';
import { Breadcrumb } from '../components/Breadcrumb';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, BadgeCheck, Star, Sparkles } from 'lucide-react';

const contactSchema = z.object({
  fullName: z.string().min(3, 'Your name must be at least 3 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  subject: z.string().min(4, 'Please include a specific subject.'),
  message: z.string().min(10, 'Message body must be at least 10 characters.'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const ContactView: React.FC = () => {
  const { addToast } = useApp();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    // Simulate contact form dispatch
    setSubmitted(true);
    addToast('Your medical inquiry was dispatched successfully!', 'success');
    setTimeout(() => {
      setSubmitted(false);
      reset();
    }, 4000);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-950 pb-20 min-h-screen">
      <Breadcrumb items={[{ label: 'Contact Us' }]} />

      {/* Header Banner */}
      <section className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 py-12 px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs uppercase font-extrabold tracking-widest text-brand-primary">
            NY Medical District Location
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-black text-gray-900 dark:text-white mt-1">
            Get In Touch With Our Clinical Team
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-2">
            Have questions about a hair transplant graft estimate, custom-formulated serums, or existing prescriptions? Reach our administrative and clinical desk instantly.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Contact Info (Col 5) */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="font-display text-xl font-bold text-gray-900 dark:text-white">
            Direct Contacts & Office Hours
          </h2>

          <div className="grid grid-cols-1 gap-4">
            
            {/* Phone */}
            <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 flex items-start gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white uppercase tracking-wider">Clinical Telephone</h4>
                <a href="tel:+9118001234247" className="block text-sm text-brand-primary dark:text-brand-secondary font-semibold hover:underline">
                  +91 1800-123-4247
                </a>
                <span className="block text-xs text-gray-400">Toll-free Helpline, Mon-Sat (9:00 AM - 8:00 PM IST)</span>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 flex items-start gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white uppercase tracking-wider">Secure Email Desk</h4>
                <a href="mailto:clinical@follicle.com" className="block text-sm text-brand-primary dark:text-brand-secondary font-semibold hover:underline">
                  clinical@follicle.com
                </a>
                <span className="block text-xs text-gray-400">HIPAA-compliant, average response time: 2 hours</span>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 flex items-start gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white uppercase tracking-wider">Physical Clinic Office</h4>
                <span className="block text-sm text-gray-700 dark:text-gray-300 font-semibold">
                  Suite 400, 400 Medical District, New York, NY 10016
                </span>
                <span className="block text-xs text-gray-400">Convenient underground medical parking available</span>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-100 dark:border-gray-800 flex items-start gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-xs sm:text-sm text-gray-900 dark:text-white uppercase tracking-wider">Working Schedules</h4>
                <span className="block text-sm text-gray-700 dark:text-gray-300 font-semibold">
                  Monday – Saturday: 9:00 AM – 8:00 PM
                </span>
                <span className="block text-xs text-gray-400">Sunday: Closed (Emergency on-call lines active)</span>
              </div>
            </div>

          </div>
        </div>

        {/* Contact Form (Col 7) */}
        <div className="lg:col-span-7 bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-gray-100 dark:border-gray-800">
            <MessageSquare className="w-5 h-5 text-brand-primary" />
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg text-gray-900 dark:text-white">
                Submit An Inquiry
              </h3>
              <p className="text-xs text-gray-400">
                All messages are encrypted and directed directly to clinical departments.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            
            {/* Grid Name / Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                  Your Name
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
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="john.doe@gmail.com"
                  {...register('email')}
                  className={`w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-950 text-xs rounded-xl focus:outline-none border ${
                    errors.email ? 'border-rose-500 focus:border-rose-500' : 'border-transparent dark:border-gray-800 focus:border-brand-primary'
                  } text-gray-900 dark:text-white placeholder-gray-400`}
                />
                {errors.email && (
                  <span className="text-xs text-rose-500 font-semibold block">{errors.email.message}</span>
                )}
              </div>

            </div>

            {/* Subject */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                Subject Matter
              </label>
              <input
                type="text"
                placeholder="Product ingredients question, appointment delay, transplant estimate..."
                {...register('subject')}
                className={`w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-950 text-xs rounded-xl focus:outline-none border ${
                  errors.subject ? 'border-rose-500 focus:border-rose-500' : 'border-transparent dark:border-gray-800 focus:border-brand-primary'
                } text-gray-900 dark:text-white placeholder-gray-400`}
              />
              {errors.subject && (
                <span className="text-xs text-rose-500 font-semibold block">{errors.subject.message}</span>
              )}
            </div>

            {/* Message Body */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                Message Body
              </label>
              <textarea
                rows={4}
                placeholder="Write your detailed query or feedback..."
                {...register('message')}
                className={`w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-950 text-xs rounded-xl focus:outline-none border ${
                  errors.message ? 'border-rose-500 focus:border-rose-500' : 'border-transparent dark:border-gray-800 focus:border-brand-primary'
                } text-gray-900 dark:text-white placeholder-gray-400`}
              />
              {errors.message && (
                <span className="text-xs text-rose-500 font-semibold block">{errors.message.message}</span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl bg-brand-primary hover:bg-brand-primary-light text-white font-bold text-xs shadow-md shadow-brand-primary/10 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              {isSubmitting ? 'Dispatching Message...' : 'Send Clinical Message'}
            </button>

            {submitted && (
              <span className="text-xs text-brand-secondary font-semibold block text-center flex items-center justify-center gap-1">
                <BadgeCheck className="w-4 h-4 animate-bounce" /> Inquiry dispatched. A coordinator will email you shortly!
              </span>
            )}

          </form>
        </div>

      </div>

      {/* Google Map Placeholder (Aesthetic medical blueprint block) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-display font-extrabold text-sm text-gray-900 dark:text-white">
                Interactive Clinic Location Map
              </h3>
              <p className="text-[10px] text-gray-400">
                NYC District coordinates: 40.7484° N, 73.9857° W
              </p>
            </div>
            <div className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-brand-primary/5 text-brand-primary dark:text-emerald-400 text-[10px] font-bold">
              <Sparkles className="w-3 h-3 text-brand-accent animate-pulse" /> Clinic Active
            </div>
          </div>

          {/* Styled schematic placeholder representing maps */}
          <div className="bg-gray-100 dark:bg-gray-950 rounded-2xl h-64 border border-gray-200 dark:border-gray-850 flex flex-col justify-center items-center text-center p-6 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1E7D5B_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="z-10 space-y-2">
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary mx-auto animate-pulse">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white">Google Map Embedded API Block</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 max-w-sm mx-auto leading-relaxed">
                400 Medical District, New York, NY 10016. Directly across the road from the City Central Medical Emergency Wing. Underpass access from Metro station.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
