# Media Optimization Guide

## Overview
This project includes automated media optimization to reduce file sizes and improve loading performance.

## What was optimized
- **Videos**: Compressed using FFmpeg with H.264 codec, CRF 28 quality
- **Images**: Optimized using pngquant (PNG) and ImageMagick (JPEG) when available
- **Components**: Added lazy loading and intersection observers

## Results
The optimization reduced video file sizes by 50-79% on average:
- Total video size reduced from ~120MB to ~35MB
- Faster page load times
- Better user experience on slower connections

## Usage

### Run optimization manually:
```bash
npm run optimize-media
```

### Components available:
- `OptimizedImage`: Lazy loading images with blur placeholders
- `OptimizedVideo`: Intersection observer-based video loading

### Example usage:
```tsx
import OptimizedImage from '@/components/OptimizedImage';
import OptimizedVideo from '@/components/OptimizedVideo';

// Optimized image with lazy loading
<OptimizedImage 
  src="/path/to/image.jpg" 
  alt="Description"
  loading="lazy"
/>

// Optimized video with intersection observer
<OptimizedVideo 
  src="/path/to/video.mp4"
  poster="/path/to/poster.jpg"
  autoPlay
  muted
  loop
/>
```

## Technical Details
- Videos are compressed using FFmpeg with CRF 28 (good quality/size balance)
- Images use progressive JPEG and optimized PNG compression
- Lazy loading prevents unnecessary network requests
- Intersection Observer API ensures videos only load when visible

## Future Improvements
- WebP format conversion for better compression
- Responsive image sizes for different screen resolutions
- CDN integration for global content delivery