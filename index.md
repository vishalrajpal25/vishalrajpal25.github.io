---
layout: default
title: Home
description: Vishal Rajpal - Enterprise AI Engineering Leader with 20+ years of experience in AI transformation, cloud architecture, and strategic technology consulting. Specializing in investment due diligence, agentic AI implementation, and Fortune 500 enterprise solutions.
keywords: Vishal Rajpal, Enterprise AI Engineering, AI transformation, cloud architecture, technology consulting, investment due diligence, agentic AI, Fortune 500, strategic technology leadership, AI implementation
---

<section class="hero">
    <div class="container">
        <div class="hero-content">
            <div class="hero-text">
                <h1>{{ site.author.name }}</h1>
                <p class="subtitle">{{ site.subtitle }}</p>
                <p class="description">{{ site.description }}</p>
                
                <div class="btn-group">
                    <a href="/specializations/" class="btn btn-primary">
                        <i class="fas fa-briefcase"></i> Specializations
                    </a>
                    <a href="/contact/" class="btn btn-secondary">
                        <i class="fas fa-envelope"></i> Contact
                    </a>
                </div>
            </div>
            
            <div class="hero-right">
                <div class="hero-profile">
                    <img src="/assets/images/profile.jpg" alt="{{ site.author.name }}" class="profile-image">
                </div>
                
                <div class="hero-stats">
                    {% for stat in site.stats %}
                    <div class="stat-item">
                        <span class="stat-number">{{ stat.number }}</span>
                        <span class="stat-label">{{ stat.label }}</span>
                    </div>
                    {% endfor %}
                </div>
            </div>
        </div>
    </div>
</section>
