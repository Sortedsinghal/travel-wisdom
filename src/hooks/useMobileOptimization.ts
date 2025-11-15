import { useState, useEffect } from 'react';

interface MobileOptimization {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  screenWidth: number;
  orientation: 'portrait' | 'landscape';
}

export const useMobileOptimization = (): MobileOptimization => {
  const [optimization, setOptimization] = useState<MobileOptimization>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    screenWidth: 1024,
    orientation: 'landscape'
  });

  useEffect(() => {
    const updateOptimization = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setOptimization({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
        screenWidth: width,
        orientation: width > height ? 'landscape' : 'portrait'
      });
    };

    updateOptimization();
    window.addEventListener('resize', updateOptimization);
    window.addEventListener('orientationchange', updateOptimization);

    return () => {
      window.removeEventListener('resize', updateOptimization);
      window.removeEventListener('orientationchange', updateOptimization);
    };
  }, []);

  return optimization;
};