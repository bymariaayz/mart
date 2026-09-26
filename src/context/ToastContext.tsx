import React, { createContext, useContext, useState, useCallback } from 'react';
import confetti from 'canvas-confetti';

export interface ToastItem {
  id: string;
  type: 'success' | 'info' | 'warning';
  title: string;
  message?: string;
  duration?: number;
}

interface ToastContextType {
  toasts: ToastItem[];
  showToast: (toast: Omit<ToastItem, 'id'>) => void;
  copyToClipboard: (text: string, label?: string, triggerConfetti?: boolean) => Promise<boolean>;
  triggerSparkles: () => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = useCallback((toast: Omit<ToastItem, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast: ToastItem = { ...toast, id };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, toast.duration || 3500);
  }, []);

  const triggerSparkles = useCallback(() => {
    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#10b981', '#38bdf8', '#a855f7', '#fbbf24']
      });
    } catch {
      // safe fallback if confetti fails
    }
  }, []);

  const copyToClipboard = useCallback(async (text: string, label = 'Texto', triggerConfettiFlag = false) => {
    try {
      await navigator.clipboard.writeText(text);
      showToast({
        type: 'success',
        title: `${label} copiado!`,
        message: text.length > 40 ? `${text.substring(0, 37)}...` : text,
      });
      if (triggerConfettiFlag) {
        triggerSparkles();
      }
      return true;
    } catch {
      showToast({
        type: 'warning',
        title: 'Não foi possível copiar automaticamente',
        message: text,
      });
      return false;
    }
  }, [showToast, triggerSparkles]);

  return (
    <ToastContext.Provider value={{ toasts, showToast, copyToClipboard, triggerSparkles }}>
      {children}
    </ToastContext.Provider>
  );
};

export function useToast(): ToastContextType {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
