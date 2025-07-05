
# Blog Post Template

Copy this template to create new blog posts. Save it as `post-slug.ts` in the `src/content/blog/` folder.

```typescript
export const yourPostSlug = {
  slug: "your-post-slug",
  title: "Your Blog Post Title",
  excerpt: "Brief excerpt or summary of your blog post (1-2 sentences for the blog listing)",
  date: "2024-12-15", // Publication date in YYYY-MM-DD format
  readTime: "8 min read", // Estimated reading time
  categories: ["Category1", "Category2"], // Categories for color coding
  image: "https://your-image-url.com/featured-image.jpg", // Featured image URL
  markdownContent: `
# Your blog content starts here

You can write your entire blog post in markdown format. This supports:

## Headings at different levels

Regular paragraphs with **bold text**, *italic text*, and [links](https://example.com).

### Code blocks
\`\`\`javascript
const example = "code goes here";
\`\`\`

### Images
![Alt text](https://image-url.com/image.jpg "Optional caption")

### Tables
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |

### Lists
- Bullet point 1
- Bullet point 2
- Bullet point 3

1. Numbered item 1
2. Numbered item 2
3. Numbered item 3

## More sections as needed

Continue writing your blog post content here...
  `
};
```

## Available Categories:
- Research
- AI Research
- Computer Vision
- Generative AI
- Career
- Technology
- Medical AI
- Theory
- Machine Learning
- And more (see categoryColors.ts)

## Steps to Add a New Blog Post:
1. Create a new file in `src/content/blog/` named `your-post-slug.ts`
2. Copy the template above and fill in your data
3. Add the import and export in `src/utils/contentLoader.ts`
4. The blog post will automatically appear on your Blog page!

## Date Format:
Use YYYY-MM-DD format for dates. The blog will automatically sort posts by date (newest first).
