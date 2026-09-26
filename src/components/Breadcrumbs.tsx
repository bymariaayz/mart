import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { PageRoute } from '../types';

export interface BreadcrumbItem {
  label: string;
  route?: PageRoute;
  params?: Record<string, string>;
  active?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (route: PageRoute, params?: Record<string, string>) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-1 text-xs text-slate-400 py-3 overflow-x-auto scrollbar-none">
      <button
        onClick={() => onNavigate('home')}
        className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors shrink-0 px-2 py-1 rounded-md hover:bg-white/5"
        title="Início"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Início</span>
      </button>

      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
          {item.active || !item.route ? (
            <span className="text-emerald-300 font-medium px-2 py-1 truncate max-w-[240px]">
              {item.label}
            </span>
          ) : (
            <button
              onClick={() => onNavigate(item.route!, item.params)}
              className="hover:text-emerald-400 transition-colors shrink-0 px-2 py-1 rounded-md hover:bg-white/5 truncate max-w-[200px]"
            >
              {item.label}
            </button>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
