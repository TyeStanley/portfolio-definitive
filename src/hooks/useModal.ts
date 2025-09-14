import { useState } from 'react';

interface UseModalReturn<T> {
  isOpen: boolean;
  data: T | null;
  open: (data: T) => void;
  close: () => void;
}

/**
 * Custom hook for managing modal state
 * @returns Object containing modal state and control functions
 */
export function useModal<T>(): UseModalReturn<T> {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<T | null>(null);

  const open = (modalData: T) => {
    setData(modalData);
    setIsOpen(true);
  };

  const close = () => {
    setData(null);
    setIsOpen(false);
  };

  return {
    isOpen,
    data,
    open,
    close,
  };
}
