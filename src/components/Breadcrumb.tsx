import React from 'react';
import { useApp, ViewType } from '../context/AppContext';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
  items: Array<{ label: string; view?: ViewType }>;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const { setView } = useApp();

  return (
    <nav className="flex items-center gap-2 py-3 px-4 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 text-xs md:text-sm text-gray-500 dark:text-gray-400">
      <button
        onClick={() => setView('landing')}
        className="flex items-center gap-1 hover:text-brand-primary transition-colors cursor-pointer"
      >
        <Home className="w-4 h-4" />
        <span>Home</span>
      </button>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            {isLast || !item.view ? (
              <span className="font-semibold text-gray-800 dark:text-gray-200 truncate max-w-[200px] md:max-w-none">
                {item.label}
              </span>
            ) : (
              <button
                onClick={() => setView(item.view!)}
                className="hover:text-brand-primary transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
