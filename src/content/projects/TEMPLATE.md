
# Project Template

Copy this template to create new projects. Save it as `project-slug.ts` in the `src/content/projects/` folder.

```typescript
export const yourProjectSlug = {
  slug: "your-project-slug",
  title: "Your Project Title",
  description: "Brief description for the portfolio card (1-2 sentences)",
  longDescription: "Detailed description for the project detail page (2-3 sentences)",
  tech: ["Technology1", "Technology2", "Technology3"], // Array of technologies used
  categories: ["Category1", "Category2"], // Categories for color coding
  externalLinks: {
    "View Code": "https://github.com/your-username/your-repo", // GitHub is another valid option
    "Live Demo": "https://your-demo-link.com",
    "Paper": "https://arxiv.org/abs/your-paper"
  }, // Dictionary of external links - key is button text, value is URL (add whatever you want)
  image: "https://your-image-url.com/image.jpg", // Project image URL
  results: [
    "First key result or achievement",
    "Second key result or achievement",
    "Third key result or achievement"
  ],
  challenges: [
    "First technical challenge you faced",
    "Second technical challenge you faced",
    "Third technical challenge you faced"
  ],
  markdownContent: `
## Section Title

Your detailed content here. You can use:
- Markdown formatting
- Images with ![Alt text](image-url "screen setting w-24 or similar | Caption")
- Tables
- Lists
- Code blocks

### Subsection

More content...

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |

## Another Section

Additional detailed information about your project.
  `
};
```

## External Links Structure:
The `externalLinks` field is a dictionary where:
- **Key**: Text to display on the button (e.g., "View Code", "Live Demo", "Paper")
- **Value**: The corresponding URL
- **Styling**: Only the last button gets the blue-to-purple gradient style
- **Icons**: "github" key uses GitHub icon, all others use ExternalLink icon
- **Optional**: If empty or missing, no buttons will be created

## Examples:
```typescript
// Single link
externalLinks: {
  "github": "https://github.com/user/repo"
}

// Multiple links
externalLinks: {
  "github": "https://github.com/user/repo",
  "Live Demo": "https://demo.com",
  "Research Paper": "https://arxiv.org/abs/123"
}

// No links
externalLinks: {}
```

## Available Categories:
- Research Project
- Applied ML
- Computer Vision
- Generative AI
- Healthcare
- Network Analysis
- Big Data
- Edge Computing
- And more (see categoryColors.ts)

## Steps to Add a New Project:
1. Create a new file in `src/content/projects/` named `your-project-slug.ts`
2. Copy the template above and fill in your data
3. Add the import and export in `src/utils/contentLoader.ts`
4. The project will automatically appear on your Portfolio page!
