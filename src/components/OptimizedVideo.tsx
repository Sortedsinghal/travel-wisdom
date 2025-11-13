import React, { useState, useRef, useEffect } from 'react';

interface OptimizedVideoProps {
  src: string;
  poster?: string;
  className?: string;
  width?: number;
  height?: number;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  preload?: 'none' | 'metadata' | 'auto';
}

const OptimizedVideo: React.FC<OptimizedVideoProps> = ({
  src,
  poster,
  className = '',
  width,
  height,
  autoPlay = false,
  muted = true,
  loop = false,
  controls = false,
  preload = 'none'
}) => {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (videoRef.current && autoPlay) {
            videoRef.current.play().catch(() => {
              // Autoplay failed, which is expected in many browsers
            });
          }
        } else {
          if (videoRef.current && autoPlay) {
            videoRef.current.pause();
          }
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, [autoPlay]);

  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {!isLoaded && poster && (
        <img
          src={poster}
          alt="Video thumbnail"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        width={width}
        height={height}
        poster={poster}
        muted={muted}
        loop={loop}
        controls={controls}
        preload={preload}
        onLoadedData={handleLoadedData}
        playsInline
      >
        {isInView && <source src={src} type="video/mp4" />}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default OptimizedVideo;