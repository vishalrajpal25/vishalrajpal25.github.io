---
layout: default
title: Writing
description: Writing on enterprise AI architecture, platform engineering, and making complex systems work at scale.
keywords: Vishal Rajpal writing, Substack, enterprise AI, platform engineering, technical writing, AI architecture
---

<section class="section" style="padding-top: 100px;">
    <div class="container">
        <h1 class="mb-small">Writing</h1>
        <p class="text-secondary mb-large">
            Notes on enterprise AI architecture, platform engineering, and organizational design for AI systems.
        </p>

        <p style="margin-bottom: 3rem;">
            <a href="{{ site.author.substack }}" target="_blank" rel="noopener" style="font-weight: 500;">
                → Subscribe on Substack
            </a>
        </p>

        <h2 class="mb-medium">Articles</h2>

        <div class="cards" style="margin-bottom: 3rem;">
            {% for article in site.articles %}
            <div class="card">
                <div style="font-size: 14px; color: var(--text-tertiary); margin-bottom: 0.5rem;">{{ article.date }}</div>
                <h4 style="margin-bottom: 0.75rem;">{{ article.title }}</h4>
                <p style="color: var(--text-secondary); margin-bottom: 1rem;">{{ article.description }}</p>
                <a href="{{ article.url }}" target="_blank" rel="noopener">→ Read more</a>
            </div>
            {% endfor %}
        </div>

        <hr class="divider">

        <h2 class="mb-medium">Other Writing</h2>

        <div class="cards">
            <div class="card">
                <h4>GitHub Projects</h4>
                <p>Code samples, architecture patterns, and technical explorations.</p>
                <p style="margin-top: 1rem;"><a href="https://github.com/vishalrajpal25" target="_blank" rel="noopener">→ Visit GitHub</a></p>
            </div>

            <div class="card">
                <h4>Publications</h4>
                <p>Published work on recommendation systems and big data challenges.</p>
                <p style="margin-top: 1rem; color: var(--text-secondary);">LinkedIn and other outlets.</p>
            </div>

            <div class="card">
                <h4>Patents</h4>
                <p>Methods and Systems for Establishing a Centralized Analytics Environment.</p>
                <p style="margin-top: 1rem; color: var(--text-secondary);">Issued patent for enterprise analytics platform design.</p>
            </div>
        </div>
    </div>
</section>
