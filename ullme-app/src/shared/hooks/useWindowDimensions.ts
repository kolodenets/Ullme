import { useState, useEffect } from 'react';

interface Sizes {
  width: number
  height: number
}

export const useWindowDimensions = () => {
  const [windowSize, setWindowSize] = useState<Sizes>({
    width: 0,
    height: 0
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-inner-declarations
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowSize;
};