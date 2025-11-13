// WebP conversion utility
export const convertToWebP = async (imagePath) => {
  try {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    return new Promise((resolve) => {
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        
        const webpData = canvas.toDataURL('image/webp', 0.8);
        resolve(webpData);
      };
      img.src = imagePath;
    });
  } catch {
    return imagePath; // Fallback to original
  }
};

// Check WebP support
export const supportsWebP = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};