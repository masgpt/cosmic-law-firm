"use client";

import React from 'react';
import { useEmailPicker } from './EmailClientProvider';

interface EmailLinkProps {
  email: string;
  subject?: string;
  children: React.ReactNode;
  className?: string;
  asButton?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
}

const EmailLink: React.FC<EmailLinkProps> = ({
  email,
  subject,
  children,
  className = "",
  asButton = false,
  onClick,
}) => {
  const { openEmailPicker } = useEmailPicker();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    openEmailPicker(email, subject);
    if (onClick) {
      (onClick as React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>)(e);
    }
  };

  if (asButton) {
    return (
      <button 
        onClick={handleClick} 
        className={className}
        type="button"
      >
        {children}
      </button>
    );
  }

  return (
    <a 
      href={`mailto:${email}`} 
      onClick={handleClick} 
      className={className}
    >
      {children}
    </a>
  );
};

export default EmailLink;
