'use client';

import React from 'react';
import { FEATURES } from '@src/config/features';

type MapProps = {
  addressQuery: string;
  addressText?: string;
  className?: string;
};

export default function Map({ addressQuery, addressText, className }: MapProps) {
  if (FEATURES.googleMaps) {
    return (
      <iframe
        title={`Map showing ${addressQuery}`}
        className={className ?? 'w-full h-full border-0'}
        src={`https://maps.google.com/maps?q=${encodeURIComponent(addressQuery)}&t=&z=12&ie=UTF8&iwloc=&output=embed`}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  const alt = addressText
    ? `Static map placeholder for ${addressText}`
    : `Static map placeholder for ${addressQuery}`;

  return (
    <div className={className ?? 'w-full h-full'} aria-label={alt}>
      <div className="relative w-full h-full">
        <img
          src="/images/static-map.svg"
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {addressText ? (
          <div className="absolute inset-x-0 bottom-0 bg-slate-950/55 text-white px-3 py-2 text-xs font-semibold backdrop-blur-sm">
            {addressText}
          </div>
        ) : null}
      </div>
    </div>
  );
}

