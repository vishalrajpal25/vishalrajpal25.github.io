# Blog Post Template

Copy this template when creating new blog posts. Save as `_posts/YYYY-MM-DD-your-post-title.md`

```markdown
---
layout: post
title: "Your Blog Post Title"
date: YYYY-MM-DD
description: "Brief description of the post for SEO and social sharing"
tags: ["Tag1", "Tag2", "Tag3", "Tag4"]
author: "Vishal Rajpal"
read_time: 5
---

Your blog post content goes here using standard Markdown formatting.

## Section Headers

Use ## for main sections and ### for subsections.

### Subsection Example

You can include:

- **Bold text** for emphasis
- *Italic text* for subtle emphasis  
- `inline code` for technical terms
- [Links to other pages](/about/) or external sites

### Code Blocks

```python
# Use code fences for syntax highlighting
def example_function():
    return "This will be nicely highlighted"
```

### Lists and Bullets

- Bullet point one
- Bullet point two
  - Sub-bullet with indentation
  - Another sub-bullet

1. Numbered lists
2. Work great too
3. For step-by-step content

### Blockquotes

> Use blockquotes for important callouts or quotes
> They'll be styled nicely with a left border

### Images (if needed)

![Alt text](/assets/images/your-image.png)

---

*Add a call-to-action or closing thought at the end of your posts.*
```

## File Naming Convention

Blog posts must be named: `YYYY-MM-DD-title-with-hyphens.md`

Examples:
- `2025-01-20-ai-strategy-framework.md`
- `2025-02-15-building-ml-teams.md`
- `2025-03-01-investment-trends-ai.md`

## Required Front Matter Fields

- **layout**: Always use "post"
- **title**: The post title (will appear in H1)
- **date**: YYYY-MM-DD format
- **description**: For SEO and social sharing (50-160 characters)
- **tags**: Array of tags for filtering (["Tag1", "Tag2"])
- **author**: Your name
- **read_time**: Estimated reading time in minutes

## Optional Fields

- **featured**: Set to `true` to feature on homepage
- **image**: Path to hero image for the post
- **categories**: Additional categorization beyond tags

## Tag Suggestions

Use consistent tags for better organization:

**Technology Topics:**
- "Enterprise AI"
- "AI Strategy" 
- "Machine Learning"
- "Cloud Architecture"
- "Data Engineering"

**Business Topics:**
- "Digital Transformation"
- "Technology Leadership" 
- "Investment DD"
- "Startup Strategy"
- "Team Building"

**Industry Focus:**
- "Financial Services"
- "Healthcare"
- "Manufacturing"
- "Venture Capital"

After creating your post, it will automatically appear on the blogs page with search and filtering functionality.
