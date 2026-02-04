import { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { reviewMetadata, Review } from './reviews.constants';

export const useReviewsLogic = () => {
  const { t } = useTranslation(['translation', 'reviews']);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);

  const openReview = (review: Review) => {
    setSelectedReview(review);
  };

  const closeReview = () => {
    setSelectedReview(null);
  };

  // Handle body scroll lock and escape key
  useEffect(() => {
    if (selectedReview) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeReview();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [selectedReview]);

  const reviews: Review[] = useMemo(() => reviewMetadata.map(meta => ({
    ...meta,
    text: t(`review${meta.id}.text`, { ns: 'reviews' })
  })), [t]);

  return {
    t,
    reviews,
    selectedReview,
    openReview,
    closeReview
  };
};
