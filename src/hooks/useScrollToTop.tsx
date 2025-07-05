import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.key]);  // ← trigger on _every_ navigation, even same-path
};