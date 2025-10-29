// download_media.js (Updated with correct cheerio import)
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import * as cheerio from 'cheerio'; // <--- THIS IS THE FIX
import { fileURLToPath } from 'url';

// --- Configuration ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const TARGET_URL = 'https://go4explore.com/trips/chopta-tungnath-deoriatal';
const OUTPUT_DIR = path.join(__dirname, 'public', 'cloned_media');
// ---------------------

async function downloadAsset(url, filepath, baseUrl) {
    let absoluteUrl;
    if (url.startsWith('http')) {
        absoluteUrl = url;
    } else if (url.startsWith('//')) {
        absoluteUrl = `https:${url}`;
    } else if (url.startsWith('/')) {
        absoluteUrl = new URL(url, baseUrl).href;
    } else {
        absoluteUrl = new URL(url, baseUrl).href;
    }
    
    try {
        const response = await axios({ url: absoluteUrl, method: 'GET', responseType: 'stream' });
        const writer = fs.createWriteStream(filepath);
        response.data.pipe(writer);
        return new Promise((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
        });
    } catch (error) {
        console.error(`Failed to download ${absoluteUrl}: ${error.message}`);
    }
}

async function main() {
    console.log(`🚀 Starting media download from ${TARGET_URL}...`);
    
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    try {
        // Fetch the webpage
        console.log('📥 Fetching webpage...');
        const response = await axios.get(TARGET_URL);
        const html = response.data;
        const $ = cheerio.load(html);
        const sources = new Set();

        // Extract images
        $('img').each((i, img) => {
            const src = $(img).attr('src');
            if (src && !src.startsWith('data:')) sources.add(src);
        });

        // Extract CSS files
        $('link[rel="stylesheet"]').each((i, link) => {
            const href = $(link).attr('href');
            if (href) sources.add(href);
        });

        // Extract JS files
        $('script[src]').each((i, script) => {
            const src = $(script).attr('src');
            if (src) sources.add(src);
        });

        // Extract videos
        $('video source, video').each((i, video) => {
            const src = $(video).attr('src');
            if (src) sources.add(src);
        });

        console.log(`Found ${sources.size} unique assets.`);
        
        for (const src of sources) {
            try {
                const url = new URL(src, TARGET_URL);
                const filename = path.basename(url.pathname) || 'index.html';
                const localPath = path.join(OUTPUT_DIR, filename);
                console.log(`Downloading ${src} -> ${filename}`);
                await downloadAsset(src, localPath, TARGET_URL);
            } catch (error) {
                console.error(`Skipping invalid URL: ${src}`);
            }
        }
        
        console.log('\n✅ All media downloaded successfully to /public/cloned_media');
    } catch (error) {
        console.error(`Error fetching webpage: ${error.message}`);
    }
}

main();