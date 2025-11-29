# Google Sheets Integration Guide 📊

## Setup Instructions

### Step 1: Create Your Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Travel Wisdom Blogs"

### Step 2: Set Up Columns

Create these exact column headers in Row 1:

| id | slug | title | excerpt | imageUrl | category | date | author | readTime | content |
|----|------|-------|---------|----------|----------|------|--------|----------|---------|

### Step 3: Fill in Your Blog Data

Example row:
```
10 | paris-travel-guide | Ultimate Paris Travel Guide | Discover the City of Light with our comprehensive guide | https://images.unsplash.com/photo-paris.jpg | International | Jan 25, 2025 | Travel Wisdom Team | 7 min read | <p>Paris is magical...</p>
```

**Important Notes:**
- `id`: Must be unique number
- `slug`: URL-friendly (lowercase, hyphens, no spaces)
- `imageUrl`: Full URL to image
- `content`: HTML format (use `<p>`, `<h2>`, `<ul><li>` tags)

### Step 4: Publish Your Sheet

1. Click **File** → **Share** → **Publish to web**
2. In the dropdown, select **Entire Document**
3. Choose **Comma-separated values (.csv)**
4. Click **Publish**
5. Copy the published URL (looks like: `https://docs.google.com/spreadsheets/d/e/...`)

### Step 5: Configure Your Website

1. Open `src/utils/blogData.ts`
2. Find this line:
   ```typescript
   const USE_GOOGLE_SHEETS = false;
   ```
3. Change it to:
   ```typescript
   const USE_GOOGLE_SHEETS = true;
   ```
4. Replace the URL:
   ```typescript
   const GOOGLE_SHEET_URL = 'YOUR_PUBLISHED_CSV_URL_HERE';
   ```
   With your actual published URL

### Step 6: Test It

1. Save the file
2. Refresh your website
3. Your blogs should now load from Google Sheets!

## How It Works

- **Automatic Updates**: When you update the Google Sheet, changes appear on your website after refresh
- **Cache**: Blogs are cached to improve performance
- **Fallback**: If Google Sheets fails, it falls back to the JSON file

## Tips for Managing Content

### Writing HTML Content in Sheets

For the `content` column, use HTML tags:

```html
<p>Introduction paragraph.</p><h2>Section Title</h2><p>Section content.</p><ul><li>Point 1</li><li>Point 2</li></ul>
```

### Image URLs

Use free image services:
- **Unsplash**: `https://images.unsplash.com/photo-...`
- **Pexels**: `https://images.pexels.com/photos/...`

### Best Practices

1. **Always fill all columns** - Empty cells may cause errors
2. **Test one blog first** - Add one blog, test it, then add more
3. **Keep a backup** - Download your sheet as CSV regularly
4. **Use consistent formatting** - Keep dates, categories consistent

## Switching Back to JSON

If you want to switch back to using the JSON file:

1. Open `src/utils/blogData.ts`
2. Change:
   ```typescript
   const USE_GOOGLE_SHEETS = false;
   ```

## Troubleshooting

### Blogs not showing?
- Check if the sheet is published (not just shared)
- Verify the CSV URL is correct
- Check browser console for errors

### Formatting issues?
- Ensure column names match exactly (case-sensitive)
- Check for extra commas in content
- Validate HTML tags are properly closed

### Images not loading?
- Use full URLs (starting with `https://`)
- Test image URLs in browser first
- Use image hosting services (Unsplash, Imgur, etc.)

## Example Google Sheet Template

You can copy this template:
[Create a copy of this template](https://docs.google.com/spreadsheets/d/YOUR_TEMPLATE_ID/copy)

Or manually create with this structure:

| id | slug | title | excerpt | imageUrl | category | date | author | readTime | content |
|----|------|-------|---------|----------|----------|------|--------|----------|---------|
| 1 | sample-blog | Sample Blog Title | This is a sample excerpt | https://images.unsplash.com/photo-123 | Travel Tips | Jan 1, 2025 | Travel Wisdom Team | 5 min read | `<p>Sample content</p>` |

## Need Help?

- Ensure your sheet is **publicly accessible** (published to web)
- Column names must match exactly
- Content should be valid HTML
- Test with one blog entry first
