import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  fallbackSrc = '/placeholder.svg',
  className = '',
  loading = 'lazy',
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState<string>(loading === 'eager' ? src : fallbackSrc);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (loading === 'lazy') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = new Image();
              img.onload = () => {
                setImageSrc(src);
                setIsLoading(false);
                setHasError(false);
              };
              img.onerror = () => {
                setImageSrc(fallbackSrc);
                setIsLoading(false);
                setHasError(true);
              };
              img.src = src;
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '50px' }
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => observer.disconnect();
    } else {
      // For eager loading, load immediately
      const img = new Image();
      img.onload = () => {
        setImageSrc(src);
        setIsLoading(false);
        setHasError(false);
      };
      img.onerror = () => {
        setImageSrc(fallbackSrc);
        setIsLoading(false);
        setHasError(true);
      };
      img.src = src;
    }
  }, [src, fallbackSrc, loading]);

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      alt={alt}
      className={`${className} ${isLoading ? 'opacity-50' : 'opacity-100'} transition-opacity duration-300`}
      loading={loading}
      decoding="async"
      onError={() => {
        if (imageSrc !== fallbackSrc) {
          setImageSrc(fallbackSrc);
          setHasError(true);
        }
      }}
      {...props}
    />
  );
};

export default OptimizedImage;