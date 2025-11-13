#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Check if ffmpeg is available
function checkFFmpeg() {
  try {
    execSync('ffmpeg -version', { stdio: 'ignore' });
    return true;
  } catch {
    console.log('FFmpeg not found. Installing via Homebrew...');
    try {
      execSync('brew install ffmpeg', { stdio: 'inherit' });
      return true;
    } catch {
      console.error('Please install FFmpeg manually: brew install ffmpeg');
      return false;
    }
  }
}

// Optimize video files
function optimizeVideo(inputPath, outputPath) {
  const command = `ffmpeg -i "${inputPath}" -c:v libx264 -crf 18 -preset slow -c:a aac -b:a 192k -movflags +faststart -y "${outputPath}"`;
  
  try {
    console.log(`Optimizing video: ${path.basename(inputPath)}`);
    execSync(command, { stdio: 'inherit' });
    
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ Reduced by ${savings}% (${(originalSize/1024/1024).toFixed(1)}MB → ${(optimizedSize/1024/1024).toFixed(1)}MB)`);
    
    // Replace original with optimized version
    fs.renameSync(outputPath, inputPath);
  } catch (error) {
    console.error(`❌ Failed to optimize ${inputPath}:`, error.message);
  }
}

// Optimize image files using built-in methods
function optimizeImage(inputPath) {
  const ext = path.extname(inputPath).toLowerCase();
  const tempPath = inputPath.replace(ext, '_temp' + ext);
  
  try {
    if (ext === '.png') {
      // Use pngquant if available, otherwise skip
      try {
        execSync(`pngquant --quality=65-80 --output "${tempPath}" "${inputPath}"`, { stdio: 'ignore' });
      } catch {
        console.log(`Skipping PNG optimization for ${path.basename(inputPath)} (pngquant not available)`);
        return;
      }
    } else if (ext === '.jpg' || ext === '.jpeg') {
      // Use ImageMagick if available
      try {
        execSync(`convert "${inputPath}" -quality 75 -strip "${tempPath}"`, { stdio: 'ignore' });
      } catch {
        console.log(`Skipping JPEG optimization for ${path.basename(inputPath)} (ImageMagick not available)`);
        return;
      }
    } else {
      return; // Skip other formats
    }
    
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(tempPath).size;
    
    if (optimizedSize < originalSize) {
      const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
      console.log(`✅ ${path.basename(inputPath)} reduced by ${savings}%`);
      fs.renameSync(tempPath, inputPath);
    } else {
      fs.unlinkSync(tempPath);
      console.log(`⚠️  ${path.basename(inputPath)} - no improvement, keeping original`);
    }
  } catch (error) {
    console.error(`❌ Failed to optimize ${inputPath}:`, error.message);
    if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
  }
}

// Main optimization function
function optimizeMediaFiles() {
  if (!checkFFmpeg()) return;
  
  const publicDir = path.join(__dirname, 'public');
  
  // Find and optimize video files
  const videoExtensions = ['.mp4', '.webm', '.mov', '.avi'];
  const imageExtensions = ['.jpg', '.jpeg', '.png'];
  
  function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        processDirectory(filePath);
      } else {
        const ext = path.extname(file).toLowerCase();
        const fileSize = stat.size / 1024 / 1024; // MB
        
        // Only optimize files larger than 1MB
        if (fileSize > 1) {
          if (videoExtensions.includes(ext)) {
            const tempPath = filePath.replace(ext, '_optimized' + ext);
            optimizeVideo(filePath, tempPath);
          } else if (imageExtensions.includes(ext)) {
            optimizeImage(filePath);
          }
        }
      }
    }
  }
  
  console.log('🚀 Starting media optimization...');
  processDirectory(publicDir);
  console.log('✨ Media optimization complete!');
}

// Run optimization
optimizeMediaFiles();