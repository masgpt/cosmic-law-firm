"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import Modal from './ui/Modal';
import Icon from '@src/components/Icon';
import Button from './ui/Button';

interface EmailClientPickerProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
  subject?: string;
}

const EmailClientPicker: React.FC<EmailClientPickerProps> = ({
  isOpen,
  onClose,
  email,
  subject,
}) => {
  const { t } = useTranslation();

  const mailtoUrl = subject 
    ? `mailto:${email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${email}`;

  const gmailUrl = subject
    ? `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}`
    : `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    // You could add a toast here if available
    onClose();
  };

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            {t('emailPicker.title', 'Contact us via email')}
          </h2>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 normal-case tracking-normal">
            {email}
          </p>
        </div>
      }
    >
      <div className="flex flex-col gap-4">
        <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
          {t('emailPicker.description', 'Choose how you would like to send your email:')}
        </p>
        
        <div className="grid gap-3">
          <a
            href={mailtoUrl}
            onClick={handleLinkClick}
            className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group"
          >
            <div className="size-12 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:bg-primary group-hover:text-white transition-colors">
              <Icon name="mail" className="size-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 dark:text-white">
                {t('emailPicker.defaultClient', 'Default Email App')}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {t('emailPicker.defaultClientNote', 'Outlook, Apple Mail, etc.')}
              </span>
            </div>
          </a>

          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group"
          >
            <div className="size-12 rounded-lg bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-600 dark:text-red-400 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <Icon name="mail" className="size-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 dark:text-white">
                {t('emailPicker.gmail', 'Gmail (Web)')}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {t('emailPicker.gmailNote', 'Open in browser')}
              </span>
            </div>
          </a>

          <button
            onClick={copyToClipboard}
            className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group text-left"
          >
            <div className="size-12 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:bg-primary group-hover:text-white transition-colors">
              <Icon name="content_copy" className="size-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 dark:text-white">
                {t('emailPicker.copy', 'Copy Email Address')}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {t('emailPicker.copyNote', 'Save to clipboard')}
              </span>
            </div>
          </button>
        </div>

        <Button
          variant="ghost"
          onClick={onClose}
          className="mt-2 w-full uppercase tracking-widest font-black"
        >
          {t('common.close', 'Close')}
        </Button>
      </div>
    </Modal>
  );
};

export default EmailClientPicker;
