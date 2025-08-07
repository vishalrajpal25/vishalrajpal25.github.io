---
layout: default
title: Blogs
description: Read Vishal Rajpal's insights on enterprise AI transformation, technology trends, investment strategies, and strategic leadership. Expert perspectives on AI implementation, cloud architecture, and digital transformation for Fortune 500 companies.
keywords: Vishal Rajpal blog, AI transformation insights, technology trends, enterprise AI blog, investment due diligence articles, strategic technology leadership, cloud architecture insights, digital transformation
---

<section class="section" style="padding-top: 120px;">
    <div class="container">
        <div class="text-center mb-4">
            <h1>Technology Insights & Perspectives</h1>
            <p style="font-size: 1.2rem; max-width: 700px; margin: 0 auto;">
                Sharing insights on enterprise AI, technology leadership, and digital transformation strategies
            </p>
        </div>
        
        <!-- Search and Filter Controls -->
        <div class="blog-controls" style="max-width: 800px; margin: 0 auto 3rem;">
            <!-- Search Box -->
            <div class="search-box" style="margin-bottom: 2rem;">
                <div style="position: relative;">
                    <input 
                        type="text" 
                        id="blog-search" 
                        placeholder="Search articles..." 
                        style="width: 100%; padding: 15px 50px 15px 20px; border: 2px solid var(--border); border-radius: var(--radius); font-size: 1rem; transition: var(--transition);"
                    >
                    <i class="fas fa-search" style="position: absolute; right: 20px; top: 50%; transform: translateY(-50%); color: var(--text-light);"></i>
                </div>
            </div>
            
            <!-- Tag Filter -->
            <div class="tag-filter">
                <div style="text-align: center; margin-bottom: 1rem;">
                    <span style="font-weight: 600; color: var(--text); margin-right: 1rem;">Filter by topic:</span>
                    <button class="tag-btn active" data-tag="all" style="background: var(--primary); color: white; border: none; padding: 0.5rem 1rem; border-radius: 20px; margin: 0.25rem; cursor: pointer; font-size: 0.9rem; font-weight: 500; transition: var(--transition);">
                        All Posts
                    </button>
                    
                    <!-- Dynamic tag buttons will be inserted here -->
                    <div id="tag-buttons"></div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="section" style="padding-top: 0;">
    <div class="container">
        <!-- Blog Posts Grid -->
        <div id="blog-posts" class="grid grid-auto" style="min-height: 300px;">
            {% if site.posts.size > 0 %}
                {% for post in site.posts %}
                <article class="blog-card" 
                         data-title="{{ post.title | downcase }}"
                         data-excerpt="{{ post.excerpt | strip_html | downcase }}"
                         data-tags="{% for tag in post.tags %}{{ tag | downcase }} {% endfor %}"
                         style="display: block;">
                    
                    <div class="card" style="height: 100%; display: flex; flex-direction: column;">
                        <!-- Post Header -->
                        <div style="margin-bottom: 1rem;">
                            <h3 style="margin-bottom: 0.5rem; line-height: 1.3;">
                                <a href="{{ post.url | relative_url }}" style="color: var(--text); text-decoration: none; hover: color: var(--primary);">
                                    {{ post.title }}
                                </a>
                            </h3>
                            
                            <div style="font-size: 0.9rem; color: var(--text-light); margin-bottom: 1rem;">
                                <i class="fas fa-calendar"></i> {{ post.date | date: "%B %d, %Y" }}
                                {% if post.read_time %}
                                <span style="margin-left: 1rem;">
                                    <i class="fas fa-clock"></i> {{ post.read_time }} min read
                                </span>
                                {% endif %}
                            </div>
                        </div>
                        
                        <!-- Post Excerpt -->
                        <div style="flex-grow: 1; margin-bottom: 1.5rem;">
                            <p>{{ post.excerpt | strip_html | truncate: 150 }}</p>
                        </div>
                        
                        <!-- Post Tags -->
                        {% if post.tags.size > 0 %}
                        <div style="margin-bottom: 1.5rem;">
                            {% for tag in post.tags %}
                            <span class="post-tag" style="background: var(--bg-light); color: var(--primary); padding: 0.25rem 0.75rem; border-radius: 15px; font-size: 0.8rem; margin-right: 0.5rem; border: 1px solid var(--border); font-weight: 500;">
                                {{ tag }}
                            </span>
                            {% endfor %}
                        </div>
                        {% endif %}
                        
                        <!-- Read More Button -->
                        <div>
                            <a href="{{ post.url | relative_url }}" class="btn btn-primary" style="font-size: 0.9rem; padding: 10px 20px;">
                                Read Article <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </article>
                {% endfor %}
            {% else %}
                <div style="text-align: center; grid-column: 1 / -1; padding: 4rem 2rem;">
                    <i class="fas fa-blog" style="font-size: 4rem; color: var(--border); margin-bottom: 2rem;"></i>
                    <h3 style="color: var(--text-light); margin-bottom: 1rem;">No articles yet</h3>
                    <p style="color: var(--text-light);">Check back soon for insights on AI, technology, and enterprise transformation.</p>
                </div>
            {% endif %}
        </div>
        
        <!-- No Results Message -->
        <div id="no-results" style="text-align: center; padding: 4rem 2rem; display: none;">
            <i class="fas fa-search" style="font-size: 3rem; color: var(--border); margin-bottom: 2rem;"></i>
            <h3 style="color: var(--text-light); margin-bottom: 1rem;">No articles found</h3>
            <p style="color: var(--text-light);">Try adjusting your search or filter criteria.</p>
        </div>
    </div>
</section>

<!-- Blog JavaScript -->
<script>
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('blog-search');
    const blogPosts = document.querySelectorAll('.blog-card');
    const tagButtons = document.getElementById('tag-buttons');
    const noResults = document.getElementById('no-results');
    
    // Collect all unique tags
    const allTags = new Set();
    blogPosts.forEach(post => {
        const tags = post.getAttribute('data-tags').trim().split(' ');
        tags.forEach(tag => {
            if (tag) allTags.add(tag);
        });
    });
    
    // Create tag filter buttons
    Array.from(allTags).sort().forEach(tag => {
        const button = document.createElement('button');
        button.className = 'tag-btn';
        button.setAttribute('data-tag', tag);
        button.textContent = tag.charAt(0).toUpperCase() + tag.slice(1);
        button.style.cssText = 'background: var(--bg-light); color: var(--primary); border: 1px solid var(--border); padding: 0.5rem 1rem; border-radius: 20px; margin: 0.25rem; cursor: pointer; font-size: 0.9rem; font-weight: 500; transition: var(--transition);';
        tagButtons.appendChild(button);
    });
    
    let currentTag = 'all';
    let currentSearch = '';
    
    // Filter function
    function filterPosts() {
        let visibleCount = 0;
        
        blogPosts.forEach(post => {
            const title = post.getAttribute('data-title');
            const excerpt = post.getAttribute('data-excerpt');
            const tags = post.getAttribute('data-tags');
            
            const matchesSearch = !currentSearch || 
                                title.includes(currentSearch) || 
                                excerpt.includes(currentSearch) ||
                                tags.includes(currentSearch);
            
            const matchesTag = currentTag === 'all' || tags.includes(currentTag);
            
            const shouldShow = matchesSearch && matchesTag;
            
            post.style.display = shouldShow ? 'block' : 'none';
            if (shouldShow) visibleCount++;
        });
        
        // Show/hide no results message
        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }
    
    // Search functionality
    searchInput.addEventListener('input', function() {
        currentSearch = this.value.toLowerCase();
        filterPosts();
    });
    
    // Tag filter functionality
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('tag-btn')) {
            // Remove active class from all buttons
            document.querySelectorAll('.tag-btn').forEach(btn => {
                btn.classList.remove('active');
                btn.style.background = btn.getAttribute('data-tag') === 'all' ? 'var(--bg-light)' : 'var(--bg-light)';
                btn.style.color = 'var(--primary)';
            });
            
            // Add active class to clicked button
            e.target.classList.add('active');
            e.target.style.background = 'var(--primary)';
            e.target.style.color = 'white';
            
            currentTag = e.target.getAttribute('data-tag');
            filterPosts();
        }
    });
    
    // Hover effects for tag buttons
    document.addEventListener('mouseover', function(e) {
        if (e.target.classList.contains('tag-btn') && !e.target.classList.contains('active')) {
            e.target.style.background = 'var(--primary)';
            e.target.style.color = 'white';
        }
    });
    
    document.addEventListener('mouseout', function(e) {
        if (e.target.classList.contains('tag-btn') && !e.target.classList.contains('active')) {
            e.target.style.background = 'var(--bg-light)';
            e.target.style.color = 'var(--primary)';
        }
    });
    
    // Search input focus effects
    searchInput.addEventListener('focus', function() {
        this.style.borderColor = 'var(--primary)';
        this.style.boxShadow = '0 0 0 3px rgba(30, 64, 175, 0.1)';
    });
    
    searchInput.addEventListener('blur', function() {
        this.style.borderColor = 'var(--border)';
        this.style.boxShadow = 'none';
    });
});
</script>

<style>
/* Blog-specific styles */
.blog-card:hover .card {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
}

.blog-card h3 a:hover {
    color: var(--primary) !important;
}

.post-tag:hover {
    background: var(--primary) !important;
    color: white !important;
}

@media (max-width: 768px) {
    .tag-filter {
        text-align: center;
    }
    
    .tag-btn {
        display: inline-block;
        margin: 0.25rem;
    }
}
</style>
