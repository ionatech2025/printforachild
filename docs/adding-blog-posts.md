# Adding a New Blog Post

This guide explains how to add a new blog post to the website.

## Step-by-Step Instructions

### Step 1: Copy the Template

1. Open the `app/blog/_template-post/` folder
2. Copy the entire `_template-post` folder
3. Rename it with the format: `your-post-title` (use hyphens, lowercase)
   - Example: `2026-04-book-distribution-kampala`

### Step 2: Edit the Blog Post

1. Open the `page.tsx` file in your new folder
2. Update the following sections:

```tsx
// Update metadata
export const metadata: Metadata = {
  title: "Your Post Title | Print for a Child Foundation",
  description: "A brief summary of your post (150-160 characters)",
}

// Update post details
const post = {
  title: "Your Post Title",
  date: "2026-04-15", // Use format: YYYY-MM-DD
  author: "Your Name",
  readTime: "5 min read",
  image: "URL to your main image",
  imageAlt: "Description of the image",
}
```

3. Replace the placeholder content in the article body with your actual content

### Step 3: Add Images

- Upload images to the Vercel Blob storage or use external URLs
- Always include descriptive alt text for accessibility

### Step 4: Update the Blog Listing

1. Open `lib/data.ts`
2. Find the `blogPosts` array
3. Add your new post at the TOP of the array:

```typescript
export const blogPosts = [
  {
    slug: 'your-post-slug', // Same as folder name
    title: 'Your Post Title',
    date: '2026-04-15',
    summary: 'Brief summary of your post...',
    image: 'URL to thumbnail image',
    author: 'Your Name',
  },
  // ... existing posts below
]
```

### Step 5: Deploy

1. Commit and push your changes to GitHub
2. Vercel will automatically deploy the updates
3. Check the live site to verify your post appears correctly

## Tips

- Keep titles concise and engaging
- Use high-quality images (at least 1200px wide)
- Include relevant keywords for SEO
- Preview locally before publishing if possible
