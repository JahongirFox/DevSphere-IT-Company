// src/components/ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation(); // Access the current location (route)

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top whenever the location changes
  }, [location]); // Depend on the location change

  return null; // Nothing to render
};

export default ScrollToTop;
