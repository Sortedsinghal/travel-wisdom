// Fetch blogs from Google Sheets
// Instructions:
// 1. Create a Google Sheet with columns: id, slug, title, excerpt, imageUrl, category, date, author, readTime, content
// 2. Publish the sheet: File > Share > Publish to web > CSV
// 3. Copy the published CSV URL and replace SHEET_URL below

const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTolV1TtGMyhyIhXw6EtbcE-8_2Fk-8la0gLVJVPGnLP2YjQiu_QvVHZi6tyuZGOsUOZ0DagdL8vLL1/pub?output=csv';

export async function fetchBlogsFromSheet() {
  try {
    const response = await fetch(SHEET_URL);
    const csvText = await response.text();
    
    // Parse CSV to JSON
    const lines = csvText.split('\n');
    const headers = lines[0].split(',');
    
    const blogs = lines.slice(1).map((line, index) => {
      const values = line.split(',');
      const blog: any = {};
      
      headers.forEach((header, i) => {
        const key = header.trim();
        blog[key] = values[i]?.trim() || '';
      });
      
      // Convert id to number
      blog.id = parseInt(blog.id) || index + 1;
      
      return blog;
    }).filter(blog => blog.title); // Filter out empty rows
    
    return blogs;
  } catch (error) {
    console.error('Error fetching blogs from sheet:', error);
    return [];
  }
}
