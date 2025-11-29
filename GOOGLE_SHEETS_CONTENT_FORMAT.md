# Google Sheets Content Formatting Guide 📝

## No HTML Required! 

You can now write blog content in **plain text** in Google Sheets. The system automatically converts it to HTML.

## How to Format Your Content

### 1. Paragraphs
Just write normally. Separate paragraphs with a **blank line** (press Enter twice).

**Example in Sheet:**
```
This is the first paragraph about travel.

This is the second paragraph with more details.
```

**Converts to:**
```html
<p>This is the first paragraph about travel.</p>
<p>This is the second paragraph with more details.</p>
```

---

### 2. Headings
Use `#` symbols at the start of a line:

**Example in Sheet:**
```
## Main Section Title
Content here...

### Subsection Title
More content...
```

**Converts to:**
```html
<h2>Main Section Title</h2>
<p>Content here...</p>
<h3>Subsection Title</h3>
<p>More content...</p>
```

**Heading Levels:**
- `##` = Main heading (H2)
- `###` = Subsection (H3)

---

### 3. Bullet Lists
Start lines with `-`, `•`, or `*`:

**Example in Sheet:**
```
- First point
- Second point
- Third point
```

**Converts to:**
```html
<ul>
<li>First point</li>
<li>Second point</li>
<li>Third point</li>
</ul>
```

---

## Complete Example

**What you write in Google Sheets:**

```
Goa is famous for its stunning beaches and vibrant coastal culture.

## Top Beaches to Visit

### 1. Palolem Beach
Known for its crescent shape and calm waters. Perfect for swimming and kayaking.

### 2. Anjuna Beach
Famous for its Wednesday flea market and trance parties.

## What to Bring

- Sunscreen
- Beach towel
- Swimwear
- Camera

Remember to respect local customs and keep beaches clean!
```

**Automatically converts to HTML:**

```html
<p>Goa is famous for its stunning beaches and vibrant coastal culture.</p>
<h2>Top Beaches to Visit</h2>
<h3>1. Palolem Beach</h3>
<p>Known for its crescent shape and calm waters. Perfect for swimming and kayaking.</p>
<h3>2. Anjuna Beach</h3>
<p>Famous for its Wednesday flea market and trance parties.</p>
<h2>What to Bring</h2>
<ul>
<li>Sunscreen</li>
<li>Beach towel</li>
<li>Swimwear</li>
<li>Camera</li>
</ul>
<p>Remember to respect local customs and keep beaches clean!</p>
```

---

## Quick Reference

| What You Type | What It Becomes |
|---------------|-----------------|
| Text with blank line after | Paragraph `<p>` |
| `## Heading` | Main heading `<h2>` |
| `### Heading` | Subsection `<h3>` |
| `- Item` or `• Item` | Bullet list `<ul><li>` |

---

## Tips for Best Results

1. **Use blank lines** between paragraphs
2. **Start headings** with `##` or `###`
3. **Start bullet points** with `-`, `•`, or `*`
4. **Keep it simple** - the system handles the HTML for you!

---

## Still Want to Use HTML?

If you prefer writing HTML directly, you can! The system detects HTML tags and won't convert them.

Just write your content with `<p>`, `<h2>`, `<ul>` tags as before.

---

## Example Blog Entry in Google Sheets

| id | slug | title | excerpt | imageUrl | category | date | author | readTime | content |
|----|------|-------|---------|----------|----------|------|--------|----------|---------|
| 10 | paris-guide | Paris Travel Guide | Discover the City of Light | https://... | International | Jan 25, 2025 | Travel Wisdom Team | 7 min read | Paris is magical...<br><br>## Top Attractions<br><br>### Eiffel Tower<br>The iconic symbol...<br><br>### Louvre Museum<br>World's largest art museum...<br><br>## Travel Tips<br><br>- Book tickets in advance<br>- Use metro for transport<br>- Try local cafes |

That's it! No HTML knowledge needed. Just write naturally and the system handles the rest! 🎉
