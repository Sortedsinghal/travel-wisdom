import blogsData from '@/data/blogs.json';

export interface Blog {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  content: string;
}

// Synchronous access (backwards compatibility)
export const getAllBlogsSync = (): Blog[] => {
  return cachedBlogs || (blogsData as Blog[]);
};

export const getBlogBySlugSync = (slug: string): Blog | undefined => {
  const blogs = cachedBlogs || (blogsData as Blog[]);
  return blogs.find((blog) => blog.slug === slug);
};

// Set to true to fetch from Google Sheets instead of JSON
const USE_GOOGLE_SHEETS = true;
const GOOGLE_SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTolV1TtGMyhyIhXw6EtbcE-8_2Fk-8la0gLVJVPGnLP2YjQiu_QvVHZi6tyuZGOsUOZ0DagdL8vLL1/pub?output=csv';

let cachedBlogs: Blog[] | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 30 * 1000; // 30 seconds

const parseCSVLine = (line: string): string[] => {
  if (!line) return [];
  const result: string[] = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
};

const convertPlainTextToHTML = (text: string): string => {
  if (!text) return '';
  
  // If already contains HTML tags, return as is
  if (text.includes('<p>') || text.includes('<h2>')) {
    return text;
  }
  
  // Split by line breaks
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  const result: string[] = [];
  let inList = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const nextLine = lines[i + 1] || '';
    
    // Detect headings: Short lines (< 60 chars) followed by content or starts with number
    const isNumberedHeading = /^\d+\.\s+[A-Z]/.test(line) && nextLine.length > 0;
    const isHeading = (
      (line.length < 60 && line.length > 3 && nextLine.length > 0) ||
      line.startsWith('#') ||
      isNumberedHeading
    );
    
    // Detect list items: starts with -, •, *, but NOT numbered headings
    const isListItem = !isNumberedHeading && (/^[-•*]\s+/.test(line) || /^\d+\.\s+/.test(line));
    
    if (line.startsWith('##')) {
      if (inList) { result.push('</ul>'); inList = false; }
      const level = line.match(/^#+/)?.[0].length || 2;
      const content = line.replace(/^#+\s*/, '');
      result.push(`<h${Math.min(level, 3)}>${content}</h${Math.min(level, 3)}>`);
    } else if (isListItem) {
      if (!inList) { result.push('<ul>'); inList = true; }
      const content = line.replace(/^[-•*\d.]+\s*/, '');
      result.push(`<li>${content}</li>`);
    } else if (isHeading && !line.startsWith('#')) {
      if (inList) { result.push('</ul>'); inList = false; }
      // Auto-detect if it's main heading or subheading based on context
      const tag = /^\d+\./.test(line) ? 'h3' : 'h2';
      result.push(`<${tag}>${line}</${tag}>`);
    } else {
      if (inList) { result.push('</ul>'); inList = false; }
      result.push(`<p>${line}</p>`);
    }
  }
  
  if (inList) result.push('</ul>');
  return result.join('');
};

export const getAllBlogs = async (): Promise<Blog[]> => {
  if (USE_GOOGLE_SHEETS) {
    // Cache disabled for instant updates
    // const now = Date.now();
    // if (cachedBlogs && (now - cacheTimestamp) < CACHE_DURATION) {
    //   return cachedBlogs;
    // }
    
    try {
      const response = await fetch(GOOGLE_SHEET_URL);
      const csvText = await response.text();
      
      // Check if response is HTML (not CSV)
      if (csvText.includes('<HTML>') || csvText.includes('<!DOCTYPE')) {
        throw new Error('Google Sheets returned HTML instead of CSV');
      }
      
      const lines = csvText.split('\n').filter(line => line.trim());
      if (lines.length < 2) {
        throw new Error('Google Sheets CSV is empty');
      }
      
      const headers = parseCSVLine(lines[0]).map(h => h.toLowerCase().replace(/\s+/g, ''));
      
      cachedBlogs = lines.slice(1).map((line, index) => {
        const values = parseCSVLine(line);
        const blog: any = {};
        headers.forEach((header, i) => {
          const key = header === 'imageurl' ? 'imageUrl' : header === 'readtime' ? 'readTime' : header;
          blog[key] = values[i] || '';
        });
        blog.id = index + 1;
        
        // Auto-convert plain text content to HTML
        if (blog.content) {
          blog.content = convertPlainTextToHTML(blog.content);
        }
        
        return blog as Blog;
      }).filter(blog => blog.title && blog.slug);
      
      if (cachedBlogs.length === 0) {
        throw new Error('No valid blogs parsed from Google Sheets');
      }
      
      cacheTimestamp = Date.now();
      return cachedBlogs;
    } catch (error) {
      console.error('Error fetching from Google Sheets:', error);
      throw error;
    }
  }
  
  return blogsData as Blog[];
};

export const getBlogBySlug = async (slug: string): Promise<Blog | undefined> => {
  const blogs = await getAllBlogs();
  return blogs.find((blog) => blog.slug === slug);
};

// Preload blogs in background
export const preloadBlogs = () => {
  if (USE_GOOGLE_SHEETS && !cachedBlogs) {
    getAllBlogs().catch(err => console.error('Preload failed:', err));
  }
};
