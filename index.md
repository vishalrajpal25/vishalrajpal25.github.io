---
layout: default
title: Home
description: Vishal Rajpal - AI & Product Platform Engineering Leader with 20+ years of experience consulting Fortune 500 companies on enterprise AI transformation.
---

<section class="hero">
    <div class="container">
        <div class="hero-content">
            <div class="hero-text">
                <h1>{{ site.author.name }}</h1>
                <p class="subtitle">{{ site.subtitle }}</p>
                <p class="description">{{ site.description }}</p>
                
                <div class="btn-group">
                    <a href="/services/" class="btn btn-primary">
                        <i class="fas fa-rocket"></i> View Services
                    </a>
                    <a href="/contact/" class="btn btn-secondary">
                        <i class="fas fa-envelope"></i> Get In Touch
                    </a>
                </div>
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
</section>

<section class="section">
    <div class="container">
        <div class="text-center mb-4">
            <h2>Core Expertise</h2>
            <p style="font-size: 1.1rem; max-width: 600px; margin: 0 auto;">
                Specialized in enterprise AI transformation, agentic AI systems, and strategic technology consulting
            </p>
        </div>
        
        <div class="grid grid-auto">
            <div class="card">
                <div class="card-icon"><i class="fas fa-robot"></i></div>
                <h3>Agentic AI Implementation</h3>
                <p>Leading industry's most advanced agentic and generative AI transformations, enabling next-generation engineering productivity for global enterprises.</p>
            </div>
            
            <div class="card">
                <div class="card-icon"><i class="fas fa-cloud"></i></div>
                <h3>Enterprise Cloud Architecture</h3>
                <p>Expert in AWS, Azure, Google Cloud platforms with deep experience in serverless architectures, Kubernetes, and cloud-native solutions.</p>
            </div>
            
            <div class="card">
                <div class="card-icon"><i class="fas fa-chart-line"></i></div>
                <h3>Data & AI Strategy</h3>
                <p>Strategic consulting for Fortune 500 companies on data modernization, MLOps, and AI adoption across banking, manufacturing, and pharma sectors.</p>
            </div>
        </div>
    </div>
</section>

<section class="section bg-light">
    <div class="container">
        <div class="text-center mb-4">
            <h2>Professional Services</h2>
            <p style="font-size: 1.1rem;">Available for high-impact consulting engagements and strategic advisory roles</p>
        </div>
        
        <div class="grid grid-auto">
            {% for service in site.services %}
            <div class="card">
                <div class="card-icon"><i class="fas fa-{{ service.icon }}"></i></div>
                <h3>{{ service.title }}</h3>
                <p>{{ service.description }}</p>
                <div style="margin-top: 1.5rem; display: flex; justify-content: space-between; align-items: center;">
                    <span style="background: var(--primary); color: white; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem; font-weight: 600;">{{ service.timeline }}</span>
                    <span style="font-weight: 700; color: var(--primary);">{{ service.price }}</span>
                </div>
            </div>
            {% endfor %}
        </div>
        
        <div class="text-center" style="margin-top: 3rem;">
            <a href="/contact/" class="btn btn-primary" style="font-size: 1.1rem; padding: 15px 40px;">
                <i class="fas fa-calendar-alt"></i> Schedule a Consultation
            </a>
        </div>
    </div>
</section>

<section class="section" style="background: var(--primary); color: white;">
    <div class="container text-center">
        <h2 style="color: white; margin-bottom: 1rem;">Ready to Transform Your AI Strategy?</h2>
        <p style="font-size: 1.2rem; margin-bottom: 2rem; max-width: 700px; margin-left: auto; margin-right: auto;">
            Let's discuss how enterprise AI can accelerate your business transformation and deliver measurable ROI.
        </p>
        <div class="btn-group" style="justify-content: center;">
            <a href="mailto:{{ site.author.email }}" class="btn" style="background: white; color: var(--primary);">
                <i class="fas fa-envelope"></i> {{ site.author.email }}
            </a>
            <a href="tel:{{ site.author.phone }}" class="btn btn-secondary" style="border-color: white; color: white;">
                <i class="fas fa-phone"></i> {{ site.author.phone }}
            </a>
        </div>
    </div>
</section>
