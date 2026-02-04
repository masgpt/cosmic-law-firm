import { useState, type FormEvent } from 'react';

export const useContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Basic client-side validation check
    if (!data.email || !data.name || !data.message) {
      setError('Please fill in all required fields.');
      setIsLoading(false);
      return;
    }

    try {
      // In a real app, this would be a fetch to an API route or a Server Action
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   body: JSON.stringify(data),
      // });
      // if (!response.ok) throw new Error('Failed to send message');

      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setError(null);
  };

  return {
    isSubmitted,
    isLoading,
    error,
    handleSubmit,
    resetForm
  };
};
