---
layout: default
title: Contact
description: Contact Vishal Rajpal for enterprise AI consulting, investment due diligence, and strategic technology transformation services. Based in San Francisco/Palo Alto, serving clients globally with 20+ years of AI and cloud expertise.
keywords: contact Vishal Rajpal, AI consulting contact, enterprise technology consulting, investment due diligence services, San Francisco AI consultant, Palo Alto technology expert, global AI transformation
---

<section class="section" style="padding-top: 120px;">
    <div class="container">
        <div class="text-center mb-4">
            <h1>Get In Touch</h1>
        </div>
        
        <div style="max-width: 600px; margin: 0 auto;">
            <div class="card" style="padding: 2.5rem;">
                <div style="display: grid; gap: 1.5rem;">
                    <div style="padding: 1.5rem; border-left: 4px solid var(--primary); background: var(--bg-light);">
                        <h4 style="margin: 0 0 0.5rem 0; color: var(--primary);">Email</h4>
                        <p style="margin: 0; font-size: 1.1rem;"><a href="mailto:{{ site.author.email }}" style="color: var(--text);">{{ site.author.email }}</a></p>
                    </div>
                    
                    <div style="padding: 1.5rem; border-left: 4px solid var(--accent); background: var(--bg-light);">
                        <h4 style="margin: 0 0 0.5rem 0; color: var(--accent);">Phone</h4>
                        <p style="margin: 0; font-size: 1.1rem;"><a href="tel:{{ site.author.phone }}" style="color: var(--text);">{{ site.author.phone }}</a></p>
                    </div>
                    
                    <div style="padding: 1.5rem; border-left: 4px solid var(--success); background: var(--bg-light);">
                        <h4 style="margin: 0 0 0.5rem 0; color: var(--success);">Location</h4>
                        <p style="margin: 0; font-size: 1.1rem; color: var(--text);">{{ site.author.location }}</p>
                    </div>
                </div>
                
                <div style="margin-top: 2.5rem; text-align: center;">
                    <div style="display: flex; justify-content: center; gap: 1.5rem;">
                        {% for link in site.social_links %}
                        <a href="{{ link[1] }}" target="_blank" rel="noopener" style="color: var(--text-light); font-size: 1.5rem; transition: var(--transition);" onmouseover="this.style.color='var(--primary)'" onmouseout="this.style.color='var(--text-light)'">
                            <i class="fab fa-{{ link[0] }}"></i>
                        </a>
                        {% endfor %}
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
