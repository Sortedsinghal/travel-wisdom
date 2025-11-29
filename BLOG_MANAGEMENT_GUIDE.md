# Blog Management Guide 📝

## How to Add/Edit Blogs

Your blog content is now managed through a simple JSON file. No coding required!

### Location
All blog data is stored in: `src/data/blogs.json`

### Adding a New Blog

1. Open `src/data/blogs.json`
2. Copy an existing blog entry
3. Paste it at the end (before the closing `]`)
4. Update the following fields:

```json
{
  "id": 9,  // Increment from last blog
  "slug": "your-blog-url-slug",  // URL-friendly name (lowercase, hyphens)
  "title": "Your Blog Title Here",
  "excerpt": "Short description (1-2 sentences)",
  "imageUrl": "https://your-image-url.com/image.jpg",
  "category": "Travel Tips",  // e.g., Adventure, Romance, Budget Travel
  "date": "Jan 15, 2025",
  "author": "Travel Wisdom Team",
  "readTime": "5 min read",
  "content": "<p>Your HTML content here...</p>"
}
```

### Field Descriptions

- **id**: Unique number (increment from last blog)
- **slug**: URL path (e.g., "hidden-gems-himachal" → /blogs/hidden-gems-himachal)
- **title**: Main blog title (shown on listing and detail page)
- **excerpt**: Short summary (shown on blog listing cards)
- **imageUrl**: Cover image URL (use Unsplash or upload your own)
- **category**: Blog category badge (Travel Tips, Adventure, Romance, etc.)
- **date**: Publication date (any format you prefer)
- **author**: Author name
- **readTime**: Estimated reading time
- **content**: Full blog content in HTML format

### Content Formatting

The `content` field accepts HTML. Use these tags:

- `<p>` for paragraphs
- `<h2>` for main sections
- `<h3>` for subsections
- `<ul><li>` for bullet lists
- `<strong>` for bold text

**Example:**
```html
"content": "<p>Introduction paragraph here.</p><h2>Main Section</h2><p>Section content.</p><h3>Subsection</h3><ul><li>Point 1</li><li>Point 2</li></ul>"
```

### Using a Spreadsheet (CSV to JSON)

If you prefer working in Excel/Google Sheets:

1. Create a spreadsheet with columns: id, slug, title, excerpt, imageUrl, category, date, author, readTime, content
2. Fill in your blog data
3. Export as CSV
4. Use an online CSV to JSON converter (e.g., csvjson.com)
5. Copy the JSON output to `src/data/blogs.json`

### Tips

- Keep slugs unique and URL-friendly
- Use high-quality images (1200x800px recommended)
- Write content in a text editor first, then convert to HTML
- Test your changes by viewing the blog on your website

### Example Blog Entry

```json
{
  "id": 9,
  "slug": "best-beaches-goa",
  "title": "Top 10 Beaches in Goa You Must Visit",
  "excerpt": "From party beaches to serene shores, discover Goa's most beautiful coastal destinations.",
  "imageUrl": "https://images.unsplash.com/photo-beach.jpg",
  "category": "Beach Destinations",
  "date": "Jan 20, 2025",
  "author": "Travel Wisdom Team",
  "readTime": "6 min read",
  "content": "<p>Goa is famous for its stunning beaches...</p><h2>1. Palolem Beach</h2><p>Description here...</p>"
}
```

## Need Help?

- Make sure to add a comma (`,`) between blog entries
- The last entry should NOT have a comma after it
- Validate your JSON at jsonlint.com if you encounter errors
- Keep a backup of your blogs.json file before making changes
