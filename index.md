---
layout: default
title: Home
description: Vishal Rajpal - Full-stack technology leader building and evaluating enterprise AI systems. VP Engineering at Fractal Analytics (Cogentiq). Previously Databricks, McKinsey QuantumBlack. Product strategy, engineering leadership, client transformation, GTM.
keywords: Vishal Rajpal, enterprise AI, VP Engineering, Fractal Analytics, Cogentiq, agentic AI, Databricks, McKinsey, technology leadership, product engineering, GTM
---

<section class="hero">
    <div class="container">
        <div class="hero-badge">
            VP Engineering @ Fractal Analytics | Previously: Databricks, McKinsey QuantumBlack
        </div>

        <h1>I build and evaluate enterprise AI systems.</h1>

        <p class="description">
            20+ years. Operator, builder, advisor. Based in Bay Area.<br>
            I've led product engineering, client transformations, GTM, and teams (80+ engineers).<br>
            I wear multiple hats: technical depth + commercial judgment + high EQ.
        </p>

        <div class="links">
            <a href="https://github.com/vishalrajpal25" target="_blank" rel="noopener" class="link-item">
                <i class="fab fa-github"></i> GitHub
            </a>
            <a href="https://substack.com/@vishalrajpal" target="_blank" rel="noopener" class="link-item">
                <i class="fas fa-rss"></i> Substack
            </a>
            <a href="/Vishal_Rajpal_Eng_v6.pdf" target="_blank" class="link-item">
                <i class="fas fa-file-pdf"></i> Resume
            </a>
            <a href="mailto:{{ site.author.email }}" class="link-item">
                <i class="fas fa-envelope"></i> Email
            </a>
        </div>
    </div>
</section>

<section class="section-compact">
    <div class="container">
        <div class="blocks">
            <div class="block">
                <h3>For VCs</h3>
                <p style="color: var(--text-secondary); margin-bottom: 1rem;">48–72h technical diligence</p>
                <ul>
                    <li>Architecture, moat, feasibility</li>
                    <li>Team evaluation, GTM readiness</li>
                    <li>Enterprise pattern recognition</li>
                </ul>
            </div>

            <div class="block">
                <h3>For Companies</h3>
                <p style="color: var(--text-secondary); margin-bottom: 1rem;">Full-stack technology leadership</p>
                <ul>
                    <li>Product strategy + engineering</li>
                    <li>Client transformation + GTM</li>
                    <li>Team building + organizational design</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<hr class="divider" style="max-width: var(--max-width); margin-left: auto; margin-right: auto;">

<section class="section-compact">
    <div class="container">
        <h2 class="mb-medium">Selected Work</h2>

        <div class="cards">
            {% for project in site.projects limit:3 %}
            <div class="card">
                <div class="card-meta">{{ project.category }} • {{ project.year }}</div>
                <h3>{{ project.title }}</h3>
                <p>Details coming soon. Enterprise-scale deployment with measurable impact.</p>
            </div>
            {% endfor %}
        </div>

        <p class="text-center" style="margin-top: 2rem;">
            <a href="/work/">→ See all projects</a>
        </p>
    </div>
</section>

<hr class="divider" style="max-width: var(--max-width); margin-left: auto; margin-right: auto;">

<section class="section-compact">
    <div class="container">
        <h2 class="mb-medium">Current Focus</h2>

        <p style="margin-bottom: 1.5rem;">
            Leading engineering for <strong>Cogentiq</strong> — Fractal's enterprise agentic AI platform deployed at Fortune 500 companies.
        </p>

        <p style="color: var(--text-secondary); margin-bottom: 1rem;">Recent work:</p>
        <ul style="color: var(--text-secondary);">
            <li>Brief generation: 48 hours → 15 minutes (50+ users, 7 data sources)</li>
            <li>Multi-agent orchestration architecture for cognitive workflows</li>
            <li>Cross-functional leadership: product, engineering, GTM, client onboarding</li>
        </ul>

        <p style="margin-top: 1.5rem; color: var(--text-secondary);">
            <strong>Team:</strong> 80+ engineers across North America<br>
            <strong>Focus:</strong> Making AI work in regulated enterprise environments
        </p>
    </div>
</section>
