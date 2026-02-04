import React from 'react';

export type ButtonTone = 'dark' | 'light';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  tone?: ButtonTone;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const baseStyles =
  'inline-flex items-center justify-center rounded-lg font-bold transition-all focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

const toneClasses: Record<ButtonTone, string> = {
  dark: 'bg-primary text-white hover:bg-primary/90 focus:ring-secondary/40 shadow-sm',
  light:
  'bg-secondary text-primary hover:bg-secondary/80 focus:ring-secondary/40 shadow-sm border border-secondary/60',
};

const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: toneClasses.dark,
  secondary:
    'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 focus:ring-slate-500/20 border border-slate-200 dark:border-slate-700',
  outline:
    'border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-primary/15 focus:ring-primary/30',
  ghost:
    'text-slate-700 dark:text-slate-300 hover:bg-primary/15 hover:text-slate-900 dark:hover:text-white focus:ring-primary/30',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-xs',
  md: 'h-10 px-5 text-sm',
  lg: 'h-12 px-8 text-base',
};

export const getButtonClasses = (tone: ButtonTone, size: ButtonSize) =>
  `${baseStyles} ${toneClasses[tone]} ${sizeClasses[size]}`;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  tone = 'dark',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  ...props
}) => {
  const variantClasses = variant === 'primary' ? toneClasses[tone] : variants[variant];

  return (
    <button
      className={`${baseStyles} ${variantClasses} ${sizeClasses[size]} ${className}`}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading && (
        <span className="mr-2 animate-spin material-symbols-outlined text-[18px]" aria-hidden="true">
          sync
        </span>
      )}
      {!isLoading && leftIcon && <span className="mr-2 flex" aria-hidden="true">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && <span className="ml-2 flex" aria-hidden="true">{rightIcon}</span>}
    </button>
  );
};

export default Button;
