# Editing Website Content

This guide explains how to change text and images on the website.

## File Structure

```
app/
├── page.tsx           # Home page
├── about/page.tsx     # About page
├── our-work/page.tsx  # Our Work page
├── gallery/page.tsx   # Gallery page
├── blog/page.tsx      # Blog listing
├── contact/page.tsx   # Contact page
├── donate/page.tsx    # Donate page
└── get-involved/page.tsx # Get Involved page

lib/
└── data.ts            # Shared data (stats, testimonials, gallery)

components/
├── header.tsx         # Navigation header
└── footer.tsx         # Page footer
```

## Editing Text

### Page-Specific Content

Each page has its own file. Open the relevant file and find the text you want to change.

Example - Changing the home page hero text:

```tsx
// In app/page.tsx, find:
<h1>Every Child Deserves a Book</h1>

// Change to:
<h1>Books Change Lives</h1>
```

### Shared Content (Testimonials, Team, etc.)

Content that appears on multiple pages is in `lib/data.ts`:

```typescript
// Testimonials
export const testimonials = [
  {
    quote: "Your quote here...",
    author: "Author Name",
    school: "School Name",
    image: "image-url",
  },
]
```

## Changing Images

### Method 1: External URLs (Recommended)

1. Upload your image to the Vercel Blob storage
2. Copy the URL
3. Replace the old URL in the code:

```tsx
// Before
src="https://old-image-url.jpg"

// After
src="https://new-image-url.jpg"
```

### Method 2: Local Images

1. Add the image to the `public/images/` folder
2. Reference it in code:

```tsx
src="/images/your-image.jpg"
```

## Gallery Images

To add or remove gallery images, edit `lib/data.ts`:

```typescript
export const galleryImages = [
  {
    src: 'image-url',
    alt: 'Description for accessibility',
    caption: 'Caption shown in lightbox',
  },
  // Add new images here
]
```

## Contact Information

Update contact details in `lib/data.ts`. The footer, donate page, and contact page all read from this object:

```typescript
export const contactInfo = {
  email: 'printforachildfoundation@gmail.com',
  phone: '+256 746 808 777',
  address: 'Kampala, Uganda',
  social: {
    facebook: 'https://facebook.com/PrintForAChildFoundation',
    twitter: 'https://twitter.com/Print4aChild',
    instagram: 'https://instagram.com/printforachild',
    linkedin: 'https://linkedin.com/company/printforachild',
  },
}
```

## Important Notes

- Always include `alt` text for images (accessibility requirement)
- Test changes locally if possible before deploying
- Keep backups of original content before making changes
