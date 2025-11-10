// Utility functions for media optimization

export const preloadCriticalResources = () => {
  // Delay prefetch to avoid blocking initial render
  setTimeout(() => {
    const criticalImages = [
      '/message_icon.png',
      '/travelers.png', 
      '/destinations.png',
      '/experience.png'
    ];

    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, 2000);
};

export const prefetchNextPageResources = (urls: string[]) => {
  const callback = () => {
    urls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = url;
      document.head.appendChild(link);
    });
  };
  
  if ('requestIdleCallback' in window) {
    requestIdleCallback(callback);
  } else {
    setTimeout(callback, 100);
  }
};

export const optimizeVideoLoading = (videoElement: HTMLVideoElement) => {
  // Set optimal video attributes for faster loading
  videoElement.preload = 'metadata';
  videoElement.playsInline = true;
  
  // Add loading event listeners
  videoElement.addEventListener('loadstart', () => {
    console.log('Video loading started');
  });
  
  videoElement.addEventListener('canplay', () => {
    console.log('Video can start playing');
  });
  
  return videoElement;
};

export const createImageWithFallback = (src: string, fallback: string = '/placeholder.svg'): Promise<string> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(src);
    img.onerror = () => resolve(fallback);
    img.src = src;
  });
};

// Intersection Observer for lazy loading
export const createLazyLoadObserver = (callback: (entries: IntersectionObserverEntry[]) => void) => {
  return new IntersectionObserver(callback, {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
  });
};