import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Phone, ArrowRight, ShieldCheck, CheckCircle2, RotateCw, ArrowLeft, Lock, Smartphone } from 'lucide-react';

const COUNTRY_CODES = [
  { code: '+91', country: 'India', flag: '🇮🇳' },
  { code: '+1', country: 'US / Canada', flag: '🇺🇸' },
  { code: '+44', country: 'UK', flag: '🇬🇧' },
  { code: '+971', country: 'UAE', flag: '🇦🇪' },
  { code: '+65', country: 'Singapore', flag: '🇸🇬' },
];

export const AuthView: React.FC = () => {
  const { login, addToast } = useApp();

  // Step 1: 'welcome', Step 2: 'login', Step 3: 'otp'
  const [step, setStep] = useState<'welcome' | 'login' | 'otp'>('welcome');

  // Login form state
  const [countryCode, setCountryCode] = useState('+91');
  const [mobileNumber, setMobileNumber] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // OTP state
  const [otpDigits, setOtpDigits] = useState<string[]>(['', '', '', '', '', '']);
  const [mockOtp, setMockOtp] = useState('123456');
  const [otpError, setOtpError] = useState('');
  const [resendTimer, setResendTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  // Refs for 6 OTP input boxes
  const otpInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Timer effect for OTP resend countdown
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (step === 'otp' && resendTimer > 0) {
      setCanResend(false);
      interval = setInterval(() => {
        setResendTimer((prev) => {
          if (prev <= 1) {
            setCanResend(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [step, resendTimer]);

  // Handle Mobile Number Submission
  const handleSendOtp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setMobileError('');

    // Basic length validation
    const cleaned = mobileNumber.replace(/\D/g, '');
    if (!cleaned || cleaned.length < 10) {
      setMobileError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsLoading(true);

    // Simulate OTP generation & network API call
    setTimeout(() => {
      setIsLoading(false);
      const generatedOtp = '123456'; // Standard friendly mock OTP
      setMockOtp(generatedOtp);
      setOtpDigits(['', '', '', '', '', '']);
      setOtpError('');
      setResendTimer(30);
      setCanResend(false);
      setStep('otp');
      addToast('OTP sent successfully. Demo OTP: 123456', 'success');

      // Focus first input box
      setTimeout(() => {
        if (otpInputRefs.current[0]) {
          otpInputRefs.current[0]?.focus();
        }
      }, 300);
    }, 800);
  };

  // Handle Resend OTP
  const handleResendOtp = () => {
    if (!canResend && resendTimer > 0) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setResendTimer(30);
      setCanResend(false);
      setOtpError('');
      addToast('New OTP sent successfully. Demo OTP: 123456', 'success');
    }, 600);
  };

  // Single OTP box change handler
  const handleOtpChange = (index: number, value: string) => {
    // Handle single digit
    const digit = value.replace(/\D/g, '').slice(-1);
    const newDigits = [...otpDigits];
    newDigits[index] = digit;
    setOtpDigits(newDigits);
    setOtpError('');

    // Auto-focus next box
    if (digit && index < 5) {
      otpInputRefs.current[index + 1]?.focus();
    }

    // If all 6 digits filled, auto verify
    if (newDigits.every((d) => d !== '')) {
      verifyOtp(newDigits.join(''));
    }
  };

  // Keydown handler for backspace navigation
  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
      otpInputRefs.current[index - 1]?.focus();
    }
  };

  // Handle Paste into OTP inputs
  const handleOtpPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (!pastedData) return;

    const newDigits = pastedData.split('');
    while (newDigits.length < 6) {
      newDigits.push('');
    }
    setOtpDigits(newDigits);
    setOtpError('');

    // Focus last filled box
    const focusIndex = Math.min(pastedData.length, 5);
    otpInputRefs.current[focusIndex]?.focus();

    if (pastedData.length === 6) {
      verifyOtp(pastedData);
    }
  };

  // Auto fill demo OTP helper
  const handleFillDemoOtp = () => {
    const demo = ['1', '2', '3', '4', '5', '6'];
    setOtpDigits(demo);
    setOtpError('');
    verifyOtp('123456');
  };

  // Verify OTP submission
  const verifyOtp = (enteredCode: string) => {
    setIsLoading(true);
    setOtpError('');

    setTimeout(() => {
      setIsLoading(false);
      if (enteredCode === mockOtp || enteredCode === '123456') {
        const fullPhone = `${countryCode} ${mobileNumber}`;
        login(fullPhone);
      } else {
        setOtpError('Incorrect OTP. Please enter 123456 or click "Fill Demo OTP".');
        addToast('Invalid OTP entered. Please try 123456.', 'error');
      }
    }, 600);
  };

  const fullPhoneDisplay = `${countryCode} ${mobileNumber}`;

  return (
    <div className="relative min-h-screen bg-gray-950 text-white flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden font-sans">
      {/* Background Image with High-End Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1920"
          alt="Ludhiana Hair Studio Background"
          className="w-full h-full object-cover object-center opacity-30 scale-105 filter blur-[2px] transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-gray-950/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,125,91,0.25)_0%,transparent_70%)]" />
      </div>

      {/* Main Container Card */}
      <div className="relative z-10 w-full max-w-lg">
        <AnimatePresence mode="wait">
          {/* STEP 1: WELCOME PAGE */}
          {step === 'welcome' && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black/80 flex flex-col items-center text-center space-y-8"
            >
              {/* Brand Logo & Header */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-[#1E7D5B] rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-900/50 border border-emerald-400/30">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <span className="block font-display font-black text-2xl sm:text-3xl tracking-tight text-white">
                    Ludhiana <span className="text-[#30A46C]">Hair Studio</span>
                  </span>
                  <span className="block text-[10px] font-bold tracking-widest text-[#D4A017] uppercase mt-1">
                    ADVANCED HAIR CLINIC & TRICHOLOGY
                  </span>
                </div>
              </div>

              {/* Tagline & Description */}
              <div className="space-y-3 max-w-sm">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4A017]" />
                  <span>Clinical Patient Portal</span>
                </div>
                <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Healthy Hair <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
                    Starts Here
                  </span>
                </h1>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Access India’s premier AI hair analysis, expert trichologist consultations, non-toxic topical chemistry, and advanced hair transplants.
                </p>
              </div>

              {/* Action Features Badges */}
              <div className="grid grid-cols-2 gap-3 w-full text-left pt-2">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs text-gray-200 font-medium">Verified Doctors</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs text-gray-200 font-medium">Private & Secure</span>
                </div>
              </div>

              {/* Primary Continue Button */}
              <button
                onClick={() => setStep('login')}
                className="w-full py-4 bg-[#1E7D5B] hover:bg-[#165a42] text-white rounded-2xl font-bold text-base shadow-xl shadow-emerald-950/60 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2 border border-emerald-400/30"
              >
                <Smartphone className="w-5 h-5 text-[#D4A017]" />
                <span>Continue with Mobile Number</span>
                <ArrowRight className="w-5 h-5 ml-1" />
              </button>
            </motion.div>
          )}

          {/* STEP 2: MOBILE LOGIN FORM */}
          {step === 'login' && (
            <motion.div
              key="login"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="bg-gray-900/85 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black/80 space-y-6"
            >
              {/* Top Navigation */}
              <div className="flex items-center justify-between pb-2">
                <button
                  onClick={() => setStep('welcome')}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <span className="text-xs font-bold text-[#D4A017] tracking-widest uppercase">
                  STEP 1 OF 2
                </span>
              </div>

              {/* Title Header */}
              <div className="space-y-1">
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  Enter Mobile Number
                </h2>
                <p className="text-xs sm:text-sm text-gray-400">
                  We will send a 6-digit verification code to log you in securely.
                </p>
              </div>

              {/* Mobile Input Form */}
              <form onSubmit={handleSendOtp} className="space-y-5">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                    Mobile Number
                  </label>
                  <div className="flex gap-2">
                    {/* Country Code Dropdown */}
                    <div className="relative shrink-0">
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="appearance-none h-14 bg-gray-950 border border-white/15 focus:border-emerald-500 rounded-2xl px-3.5 pr-8 text-sm font-bold text-white cursor-pointer outline-none transition-colors"
                      >
                        {COUNTRY_CODES.map((c) => (
                          <option key={c.code} value={c.code} className="bg-gray-900 text-white">
                            {c.flag} {c.code}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
                        ▼
                      </div>
                    </div>

                    {/* Phone Input Box */}
                    <div className="relative flex-1">
                      <input
                        type="tel"
                        maxLength={11}
                        placeholder="98100 12345"
                        value={mobileNumber}
                        onChange={(e) => {
                          setMobileNumber(e.target.value.replace(/\D/g, ''));
                          setMobileError('');
                        }}
                        className={`w-full h-14 bg-gray-950 border ${
                          mobileError ? 'border-red-500' : 'border-white/15 focus:border-emerald-500'
                        } rounded-2xl px-4 text-base font-medium text-white placeholder-gray-500 outline-none transition-colors tracking-wide`}
                        autoFocus
                      />
                    </div>
                  </div>
                  {mobileError && (
                    <p className="text-xs text-red-400 font-medium pt-1 flex items-center gap-1">
                      <span>⚠️</span> {mobileError}
                    </p>
                  )}
                </div>

                {/* Send OTP CTA */}
                <button
                  type="submit"
                  disabled={isLoading || !mobileNumber.trim()}
                  className={`w-full h-14 rounded-2xl font-bold text-base shadow-xl flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    isLoading || !mobileNumber.trim()
                      ? 'bg-emerald-950/50 text-gray-500 border border-emerald-900/30 cursor-not-allowed'
                      : 'bg-[#1E7D5B] hover:bg-[#165a42] text-white shadow-emerald-950/60 hover:scale-[1.01] active:scale-[0.99] border border-emerald-400/30'
                  }`}
                >
                  {isLoading ? (
                    <>
                      <RotateCw className="w-5 h-5 animate-spin text-emerald-300" />
                      <span>Sending OTP...</span>
                    </>
                  ) : (
                    <>
                      <span>Send OTP</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>

              {/* Security Banner */}
              <div className="pt-2 border-t border-white/5 flex items-center gap-2 text-xs text-gray-400 justify-center">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Your details are kept 100% confidential.</span>
              </div>
            </motion.div>
          )}

          {/* STEP 3: OTP VERIFICATION */}
          {step === 'otp' && (
            <motion.div
              key="otp"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="bg-gray-900/85 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black/80 space-y-6"
            >
              {/* Top Navigation */}
              <div className="flex items-center justify-between pb-2">
                <button
                  onClick={() => setStep('login')}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Change Number</span>
                </button>
                <span className="text-xs font-bold text-[#D4A017] tracking-widest uppercase">
                  STEP 2 OF 2
                </span>
              </div>

              {/* Title & Sent Number */}
              <div className="space-y-1">
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  Enter Verification Code
                </h2>
                <p className="text-xs sm:text-sm text-gray-300">
                  Code sent to <span className="font-bold text-emerald-400">{fullPhoneDisplay}</span>
                </p>
              </div>

              {/* Demo OTP Helper Tag */}
              <div className="p-3 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-emerald-200">
                  <Sparkles className="w-4 h-4 text-[#D4A017]" />
                  <span>Demo OTP: <strong className="font-mono text-white text-sm">123456</strong></span>
                </div>
                <button
                  onClick={handleFillDemoOtp}
                  className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition-all cursor-pointer shadow-sm"
                >
                  Fill Demo OTP
                </button>
              </div>

              {/* 6 OTP Boxes */}
              <div className="space-y-3">
                <div className="flex justify-between gap-2 sm:gap-3">
                  {otpDigits.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (otpInputRefs.current[index] = el)}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(index, e)}
                      onPaste={handleOtpPaste}
                      className={`w-11 sm:w-14 h-14 sm:h-16 text-center text-xl sm:text-2xl font-bold font-mono bg-gray-950 border ${
                        otpError
                          ? 'border-red-500 focus:border-red-400'
                          : digit
                          ? 'border-emerald-500 text-emerald-300'
                          : 'border-white/15 focus:border-emerald-500'
                      } rounded-2xl text-white outline-none transition-all shadow-inner`}
                    />
                  ))}
                </div>

                {otpError && (
                  <p className="text-xs text-red-400 font-medium text-center pt-1">
                    ⚠️ {otpError}
                  </p>
                )}
              </div>

              {/* Verify OTP CTA Button */}
              <button
                onClick={() => verifyOtp(otpDigits.join(''))}
                disabled={isLoading || otpDigits.some((d) => !d)}
                className={`w-full h-14 rounded-2xl font-bold text-base shadow-xl flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  isLoading || otpDigits.some((d) => !d)
                    ? 'bg-emerald-950/50 text-gray-500 border border-emerald-900/30 cursor-not-allowed'
                    : 'bg-[#1E7D5B] hover:bg-[#165a42] text-white shadow-emerald-950/60 hover:scale-[1.01] active:scale-[0.99] border border-emerald-400/30'
                }`}
              >
                {isLoading ? (
                  <>
                    <RotateCw className="w-5 h-5 animate-spin text-emerald-300" />
                    <span>Verifying Code...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-300" />
                    <span>Verify & Continue</span>
                  </>
                )}
              </button>

              {/* Resend Timer Row */}
              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                <span>Didn't receive the SMS code?</span>
                {resendTimer > 0 ? (
                  <span className="font-mono text-emerald-400 font-bold">
                    Resend in {resendTimer}s
                  </span>
                ) : (
                  <button
                    onClick={handleResendOtp}
                    disabled={isLoading}
                    className="font-bold text-emerald-400 hover:text-emerald-300 hover:underline cursor-pointer"
                  >
                    Resend OTP
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
