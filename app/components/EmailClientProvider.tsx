"use client";

import React, { createContext, useContext, useState, useCallback } from 'react';
import EmailClientPicker from './EmailClientPicker';

interface EmailContextType {
  openEmailPicker: (email: string, subject?: string) => void;
}

const EmailContext = createContext<EmailContextType | undefined>(undefined);

export const useEmailPicker = () => {
  const context = useContext(EmailContext);
  if (!context) {
    throw new Error('useEmailPicker must be used within an EmailProvider');
  }
  return context;
};

export const EmailProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState<string | undefined>(undefined);

  const openEmailPicker = useCallback((email: string, subject?: string) => {
    setEmail(email);
    setSubject(subject);
    setIsOpen(true);
  }, []);

  const closeEmailPicker = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <EmailContext.Provider value={{ openEmailPicker }}>
      {children}
      <EmailClientPicker
        isOpen={isOpen}
        onClose={closeEmailPicker}
        email={email}
        subject={subject}
      />
    </EmailContext.Provider>
  );
};
