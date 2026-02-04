'use client';

import React from 'react';
import NextLink from 'next/link';
import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';
import { getButtonClasses, ButtonTone, ButtonSize } from './Button';

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  tone?: ButtonTone;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  tone = 'dark',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const { i18n } = useTranslation();
  const params = useParams();
  const currentLng = (params?.lng as string) || i18n.language || 'en';

  const isExternal =
    href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');

  let targetPath = href;

  if (!isExternal && targetPath.startsWith('/')) {
    const segments = targetPath.split('/');
    const firstSegment = segments[1];
    if (!['en', 'ko'].includes(firstSegment)) {
      const cleanPath = targetPath === '/' ? '' : targetPath;
      targetPath = `/${currentLng}${cleanPath}`;
    }
  }

  const classes = `${getButtonClasses(tone, size)} ${className}`.trim();

  if (isExternal) {
    return (
      <a href={targetPath} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={targetPath} className={classes} {...props}>
      {children}
    </NextLink>
  );
};

export default ButtonLink;
