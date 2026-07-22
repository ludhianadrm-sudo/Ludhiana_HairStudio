import React from 'react';
import { useApp } from '../context/AppContext';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, UserCheck, MapPin, PhoneCall, Plus } from 'lucide-react';

export const AppointmentsModal: React.FC = () => {
  const { showAppointmentsModal, setShowAppointmentsModal, bookings, setView, userMobile, doctors } = useApp();

  if (!showAppointmentsModal) return null;

  // Sample default appointment for demonstration if bookings array is empty
  const displayBookings = bookings.length > 0 ? bookings : [
    {
      name: 'Verified Patient',
      phone: userMobile || '+91 98100 12345',
      email: 'patient@ludhianahairstudio.com',
      date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      time: '11:00 AM',
      doctorId: 'doc-1',
      concern: 'Hair Fall & Thinning Consultation',
      reason: 'Scalp & Hair Root Diagnostic Analysis'
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
          onClick={() => setShowAppointmentsModal(false)}
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
                <Calendar className="w-5 h-5 text-brand-accent" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg leading-tight">My Appointments</h3>
                <p className="text-xs text-emerald-100">Scheduled clinical consultations and checkups</p>
              </div>
            </div>
            <button
              onClick={() => setShowAppointmentsModal(false)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 overflow-y-auto space-y-4 flex-grow">
            {displayBookings.map((b, idx) => {
              const matchedDoctor = doctors.find((d) => d.id === b.doctorId) || doctors[0];
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 space-y-4 hover:border-brand-primary/30 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-gray-200/60 dark:border-gray-700/60">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                        CONFIRMED
                      </span>
                      <span className="text-xs text-gray-500 font-medium">Ref: #LHS-{1000 + idx}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-semibold text-gray-700 dark:text-gray-300">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-brand-primary" />
                        {b.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-brand-primary" />
                        {b.time}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <img
                      src={matchedDoctor.photo}
                      alt={matchedDoctor.name}
                      className="w-14 h-14 rounded-2xl object-cover border border-gray-200 dark:border-gray-700 shrink-0"
                    />
                    <div className="space-y-1">
                      <h4 className="font-bold text-sm text-gray-900 dark:text-white flex items-center gap-1.5">
                        <UserCheck className="w-4 h-4 text-brand-primary" />
                        Dr. {matchedDoctor.name}
                      </h4>
                      <p className="text-xs text-brand-primary font-medium">{matchedDoctor.specialty}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 pt-0.5">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        {matchedDoctor.clinicAddress}
                      </p>
                    </div>
                  </div>

                  {b.concern && (
                    <div className="text-xs text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-900 p-3 rounded-xl border border-gray-100 dark:border-gray-800">
                      <strong>Primary Concern:</strong> {b.concern}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Modal Footer */}
          <div className="p-4 bg-gray-50 dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
            <div className="text-xs text-gray-500 flex items-center gap-1">
              <PhoneCall className="w-3.5 h-3.5 text-brand-primary" />
              <span>Helpline: +91 1800-123-4247</span>
            </div>
            <button
              onClick={() => {
                setShowAppointmentsModal(false);
                setView('booking');
              }}
              className="px-4 py-2 bg-brand-primary hover:bg-brand-primary-light text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Plus size={14} />
              Book New Appointment
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
