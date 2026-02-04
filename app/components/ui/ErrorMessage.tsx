import React from 'react';

interface ErrorMessageProps {
  message?: string;
  id?: string;
  className?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, id, className = '' }) => {
  if (!message) return null;

  return (
    <p
      id={id}
      className={`mt-1 text-sm text-red-600 dark:text-red-400 font-medium ${className}`}
      role="alert"
    >
      {message}
    </p>
  );
};

export default ErrorMessage;
