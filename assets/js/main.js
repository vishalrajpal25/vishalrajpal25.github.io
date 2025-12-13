/*
 * Minimal JavaScript - Only essential interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');

            // Change icon
            const icon = navToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu on link click
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const icon = navToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // Load Substack articles
    loadSubstackArticles();
});

/**
 * Fetch and display Substack articles from RSS feed
 */
async function loadSubstackArticles() {
    const articlesContainer = document.getElementById('substack-articles');
    if (!articlesContainer) return;

    // Get RSS URL from config or use default
    const rssUrlMeta = document.querySelector('meta[name="substack-rss"]');
    const rssUrl = rssUrlMeta ? rssUrlMeta.getAttribute('content') : 'https://vishalrajpal.substack.com/feed';

    try {
        // Try direct RSS fetch first (many RSS feeds don't have CORS restrictions)
        await fetchSubstackRSSDirect(rssUrl, articlesContainer);
    } catch (error) {
        console.log('Direct fetch failed, trying CORS proxy...', error);
        
        try {
            // Fallback: Use CORS proxy to fetch RSS feed
            const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
            
            const response = await fetch(proxyUrl);
            const data = await response.json();

            if (data.status === 'ok' && data.items && data.items.length > 0) {
                // Clear loading message
                articlesContainer.innerHTML = '';

                // Display articles as tiles
                data.items.slice(0, 12).forEach(item => {
                    const articleCard = createArticleCard({
                        title: item.title,
                        link: item.link,
                        pubDate: item.pubDate,
                        description: item.description || item.content
                    });
                    articlesContainer.appendChild(articleCard);
                });
            } else {
                throw new Error('No articles found in RSS feed');
            }
        } catch (fallbackError) {
            console.error('Error loading Substack articles:', fallbackError);
            articlesContainer.innerHTML = `
                <div class="card" style="text-align: center; padding: 3rem;">
                    <p style="color: var(--text-secondary);">
                        Unable to load articles. 
                        <a href="https://substack.com/@vishalrajpal" target="_blank" rel="noopener">Visit Substack</a> to read my latest posts.
                    </p>
                </div>
            `;
        }
    }
}

/**
 * Fetch Substack RSS feed directly and parse XML
 */
async function fetchSubstackRSSDirect(rssUrl, container) {
    const response = await fetch(rssUrl);
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const xmlText = await response.text();
    
    // Parse XML
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
    
    // Check for parsing errors
    const parseError = xmlDoc.querySelector('parsererror');
    if (parseError) {
        throw new Error('Failed to parse RSS feed');
    }

    // Extract items
    const items = xmlDoc.querySelectorAll('item');
    container.innerHTML = '';

    if (items.length === 0) {
        container.innerHTML = `
            <div class="card" style="text-align: center; padding: 3rem;">
                <p style="color: var(--text-secondary);">
                    No articles found. 
                    <a href="https://substack.com/@vishalrajpal" target="_blank" rel="noopener">Visit Substack</a> to read my latest posts.
                </p>
            </div>
        `;
        return;
    }

    // Display articles
    Array.from(items).slice(0, 12).forEach(item => {
        const title = item.querySelector('title')?.textContent || 'Untitled';
        const link = item.querySelector('link')?.textContent || '#';
        const pubDate = item.querySelector('pubDate')?.textContent || '';
        const description = item.querySelector('description')?.textContent || '';
        
        // Extract text from HTML description if needed
        const descText = extractTextFromHTML(description);
        
        const articleCard = createArticleCard({
            title: title,
            link: link,
            pubDate: pubDate,
            description: descText
        });
        
        container.appendChild(articleCard);
    });
}

/**
 * Extract plain text from HTML string
 */
function extractTextFromHTML(html) {
    if (!html) return '';
    
    const div = document.createElement('div');
    div.innerHTML = html;
    const text = div.textContent || div.innerText || '';
    
    // Clean up extra whitespace
    return text.replace(/\s+/g, ' ').trim();
}

/**
 * Format date string
 */
function formatDate(dateString) {
    if (!dateString) return '';
    
    try {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    } catch (e) {
        return dateString;
    }
}

/**
 * Create article card element
 */
function createArticleCard(item) {
    const card = document.createElement('div');
    card.className = 'card';
    
    const date = formatDate(item.pubDate);
    const description = item.description || item.content || '';
    const truncatedDesc = description.length > 150 
        ? description.substring(0, 150) + '...' 
        : description;
    
    // Escape HTML to prevent XSS
    const escapeHtml = (text) => {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    };
    
    card.innerHTML = `
        ${date ? `<div style="font-size: 14px; color: var(--text-tertiary); margin-bottom: 0.5rem;">${escapeHtml(date)}</div>` : ''}
        <h4 style="margin-bottom: 0.75rem;">${escapeHtml(item.title || 'Untitled')}</h4>
        ${truncatedDesc ? `<p style="color: var(--text-secondary); margin-bottom: 1rem;">${escapeHtml(truncatedDesc)}</p>` : ''}
        <a href="${escapeHtml(item.link || '#')}" target="_blank" rel="noopener">→ Read more</a>
    `;
    
    return card;
}
