import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Icon, { type IconName } from '@src/components/Icon';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  isOpen: boolean;
  onClose: () => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({
  message,
  type = 'info',
  isOpen,
  onClose,
  duration = 5000,
}) => {
  const { t } = useTranslation();
  
  useEffect(() => {
    if (isOpen && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  if (!isOpen) return null;

  const bgColors = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    info: 'bg-slate-800 dark:bg-slate-700',
  };

  const icons = {
    success: 'check_circle',
    error: 'error',
    info: 'info',
  } satisfies Record<NonNullable<ToastProps['type']>, IconName>;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-4 right-4 z-[110] animate-in slide-in-from-bottom-5 duration-300"
    >
      <div className={`${bgColors[type]} text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 min-w-[300px]`}>
        <Icon name={icons[type]} className="size-5" />
        <p className="text-sm font-medium flex-grow">{message}</p>
        <button
          onClick={onClose}
          className="p-1 hover:bg-white/20 rounded transition-colors"
          aria-label={t('accessibility.dismissNotification')}
        >
          <Icon name="close" className="size-[18px]" />
        </button>
      </div>
    </div>
  );
};

export default Toast;
