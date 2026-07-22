import React from 'react';
import { useApp } from '../context/AppContext';
import { AnimatePresence, motion } from 'motion/react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useApp();

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => {
          const isSuccess = toast.type === 'success';
          const isError = toast.type === 'error';

          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.2 } }}
              className={`pointer-events-auto p-4 rounded-xl shadow-lg border flex items-start gap-3 backdrop-blur-md ${
                isSuccess
                  ? 'bg-emerald-50/95 border-emerald-200 dark:bg-emerald-950/95 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200'
                  : isError
                    ? 'bg-rose-50/95 border-rose-200 dark:bg-rose-950/95 dark:border-rose-800 text-rose-800 dark:text-rose-200'
                    : 'bg-blue-50/95 border-blue-200 dark:bg-blue-950/95 dark:border-blue-800 text-blue-800 dark:text-blue-200'
              }`}
            >
              <div className="mt-0.5 shrink-0">
                {isSuccess && <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />}
                {isError && <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400" />}
                {!isSuccess && !isError && <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
              </div>
              <div className="flex-1 text-sm font-medium">{toast.message}</div>
              <button
                onClick={() => removeToast(toast.id)}
                className="shrink-0 p-0.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4 opacity-70 hover:opacity-100" />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
