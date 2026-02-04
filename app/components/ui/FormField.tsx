import React from 'react';
import { useTranslation } from 'react-i18next';
import ErrorMessage from './ErrorMessage';

interface FormFieldProps {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  helpText?: string;
  children: React.ReactElement;
  className?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  error,
  required = false,
  helpText,
  children,
  className = '',
}) => {
  const { t } = useTranslation();
  const errorId = `${name}-error`;
  const helpId = `${name}-help`;

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label 
        htmlFor={name}
        className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-1"
      >
        {label}
        {required && <span className="text-red-500" aria-hidden="true">*</span>}
        {required && <span className="sr-only">{t('accessibility.required')}</span>}
      </label>
      
      {helpText && (
        <p id={helpId} className="text-xs text-slate-500 dark:text-slate-400 mb-0.5">
          {helpText}
        </p>
      )}

      {React.cloneElement(children as any, {
        id: name,
        name: name,
        'aria-describedby': [
          error ? errorId : null,
          helpText ? helpId : null
        ].filter(Boolean).join(' ') || undefined,
        'aria-invalid': !!error,
        required: required,
      })}

      <ErrorMessage message={error} id={errorId} />
    </div>
  );
};

export default FormField;
