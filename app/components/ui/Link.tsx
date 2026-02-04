'use client';

import React from 'react';
import NextLink from 'next/link';
import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';

interface CustomLinkProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  external?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  [key: string]: any;
}

const Link: React.FC<CustomLinkProps> = ({
  children,
  to,
  href,
  external = false,
  className = '',
  onClick,
  ...props
}) => {
  const { t, i18n } = useTranslation();
  const params = useParams();
  const currentLng = (params?.lng as string) || i18n.language || 'en';
  const baseStyles = 'transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:rounded-sm';
  
  let targetPath = href || to || '';

  const isExternal = external || targetPath.startsWith('http') || targetPath.startsWith('mailto:') || targetPath.startsWith('tel:');

  if (isExternal) {
    return (
      <a
        href={targetPath}
        className={`${baseStyles} ${className}`}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        onClick={onClick}
        {...props}
      >
        {children}
        {external && (
          <span className="sr-only"> {t('accessibility.opensInNewWindow')}</span>
        )}
      </a>
    );
  }

  // Prepend language prefix for internal links if not already present
  if (targetPath.startsWith('/')) {
    const segments = targetPath.split('/');
    const firstSegment = segments[1];
    if (!['en', 'ko'].includes(firstSegment)) {
      // Avoid double slashes
      const cleanPath = targetPath === '/' ? '' : targetPath;
      targetPath = `/${currentLng}${cleanPath}`;
    }
  }

  return (
    <NextLink
      href={targetPath}
      className={`${baseStyles} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </NextLink>
  );
};

export default Link;
