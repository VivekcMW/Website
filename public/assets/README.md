# Assets Directory

This directory contains static assets for the MWWST application.

## Folder Structure

- `/images/` - Store all image files (JPG, PNG, SVG, WebP, etc.)
- `/videos/` - Store all video files (MP4, WebM, MOV, etc.)
- `/icons/` - Store icon files and favicons

## Usage in Components

### Images
```jsx
import Image from 'next/image'

// For images in /public/assets/images/
<Image 
  src="/assets/images/your-image.jpg" 
  alt="Description"
  width={500}
  height={300}
/>

// Or with regular img tag
<img src="/assets/images/your-image.jpg" alt="Description" />
```

### Videos
```jsx
// For videos in /public/assets/videos/
<video controls>
  <source src="/assets/videos/your-video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

// Or with autoplay (muted required)
<video autoPlay muted loop>
  <source src="/assets/videos/hero-video.mp4" type="video/mp4" />
</video>
```

### Icons
```jsx
// For icons in /public/assets/icons/
<img src="/assets/icons/logo.svg" alt="Logo" />

// For favicon in head
<link rel="icon" href="/assets/icons/favicon.ico" />
```

## Best Practices

1. **Optimize images** before uploading (use tools like TinyPNG, ImageOptim)
2. **Use Next.js Image component** for better performance and SEO
3. **Use appropriate formats**:
   - JPG for photos
   - PNG for images with transparency
   - SVG for simple graphics and icons
   - WebP for modern browsers (with fallbacks)
4. **Keep file sizes reasonable** (< 1MB for images, optimize videos)
5. **Use descriptive filenames** (e.g., `hero-background.jpg`, `product-demo.mp4`)

## File Naming Convention

- Use lowercase letters
- Use hyphens (-) instead of spaces or underscores
- Be descriptive: `campaign-manager-dashboard.jpg` instead of `image1.jpg`