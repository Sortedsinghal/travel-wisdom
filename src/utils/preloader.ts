// Critical resource preloader
export const preloadCriticalImages = () => {
  const criticalImages = [
    '/customer-service.png',
    '/travel-wisdom-logo.png'
  ];
  
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

export const deferNonCritical = () => {
  // Defer non-critical CSS
  const deferCSS = () => {
    const links = document.querySelectorAll('link[rel="stylesheet"]');
    links.forEach(link => {
      if (!link.getAttribute('data-critical')) {
        link.media = 'print';
        link.onload = () => { link.media = 'all'; };
      }
    });
  };
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', deferCSS);
  } else {
    deferCSS();
  }
};