// download_media.js (Updated with correct cheerio import)
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import * as cheerio from 'cheerio'; // <--- THIS IS THE FIX
import { fileURLToPath } from 'url';

// --- Configuration ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SOURCE_HTML_FILE = path.join(__dirname, 'source.html');
const OUTPUT_DIR = path.join(__dirname, 'public', 'cloned_media');
// ---------------------

async function downloadAsset(url, filepath) {
    const absoluteUrl = url.startsWith('http') ? url : `https:${url.startsWith('//') ? url : `//${url}`}`;
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
    console.log('🚀 Starting media download...');
    if (!fs.existsSync(SOURCE_HTML_FILE)) {
        console.error(`Error: Create source.html file in the root directory first.`);
        return;
    }
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    const html = fs.readFileSync(SOURCE_HTML_FILE, 'utf-8');
    const $ = cheerio.load(html);
    const sources = new Set();

    $('img').each((i, img) => {
        const src = $(img).attr('src');
        if (src && !src.startsWith('data:')) sources.add(src);
    });

    console.log(`Found ${sources.size} unique images.`);
    for (const src of sources) {
        const filename = path.basename(new URL(src, 'https://example.com').pathname);
        const localPath = path.join(OUTPUT_DIR, filename);
        console.log(`Downloading ${src} -> ${localPath}`);
        await downloadAsset(src, localPath);
    }
    console.log('\n✅ All media downloaded successfully to /public/cloned_media');
}

main();