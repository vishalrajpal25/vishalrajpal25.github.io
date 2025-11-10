---
layout: default
title: Home
description: Vishal Rajpal - VP Engineering at Fractal Analytics (Cogentiq). Previously Databricks, McKinsey QuantumBlack. Building enterprise AI systems at Fortune 500 scale.
keywords: Vishal Rajpal, VP Engineering, Fractal Analytics, Cogentiq, agentic AI, Databricks, McKinsey, enterprise AI
---

<section class="hero">
    <div class="container">
        <div class="hero-badge">
            VP Engineering, Fractal Analytics | Previously: Databricks, McKinsey QuantumBlack
        </div>

        <h1>Vishal Rajpal</h1>

        <p class="subtitle">
            Building enterprise agentic AI systems. 20+ years across product, engineering, GTM, and client transformation.
        </p>

        <div class="links">
            <a href="https://github.com/vishalrajpal25" target="_blank" rel="noopener" class="link-item">
                <i class="fab fa-github"></i> GitHub
            </a>
            <a href="https://linkedin.com/in/rajpalvishal" target="_blank" rel="noopener" class="link-item">
                <i class="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://substack.com/@vishalrajpal" target="_blank" rel="noopener" class="link-item">
                <i class="fas fa-rss"></i> Substack
            </a>
            <a href="/Vishal_Rajpal_Eng_v6.pdf" target="_blank" class="link-item">
                <i class="fas fa-file-pdf"></i> Resume
            </a>
        </div>
    </div>
</section>

<section class="section-compact">
    <div class="container">
        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2rem; margin-bottom: 3rem;">
            <div>
                <h4 style="margin-bottom: 0.5rem;">Current</h4>
                <p style="color: var(--text-secondary);">Leading Cogentiq engineering at Fractal—product, deployment, GTM across Fortune 500 enterprises. Team of 80+.</p>
            </div>

            <div>
                <h4 style="margin-bottom: 0.5rem;">Experience</h4>
                <p style="color: var(--text-secondary);">Databricks (Solution Architecture), McKinsey QuantumBlack (Principal Engineer), Fractal (multiple roles), Morgan Stanley, Accenture.</p>
            </div>

            <div>
                <h4 style="margin-bottom: 0.5rem;">Open To</h4>
                <p style="color: var(--text-secondary);">CTO/VP Eng roles, VC diligence (AI infrastructure, enterprise software), strategic advisory.</p>
            </div>
        </div>
    </div>
</section>

<hr class="divider" style="max-width: var(--max-width); margin-left: auto; margin-right: auto;">

<section class="section-compact">
    <div class="container">
        <h2 style="margin-bottom: 2rem;">Selected Work</h2>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-bottom: 2rem;">
            {% for project in site.projects limit:3 %}
            <div style="border: 1px solid var(--border); padding: 1.5rem; border-radius: 8px;">
                <div style="font-size: 14px; color: var(--text-tertiary); margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.5px;">{{ project.year }}</div>
                <h4 style="margin-bottom: 0.5rem;">{{ project.title }}</h4>
                <p style="color: var(--text-secondary); font-size: 15px; margin: 0;">{{ project.category }}</p>
            </div>
            {% endfor %}
        </div>

        <p class="text-center">
            <a href="/work/">→ All projects</a>
        </p>
    </div>
</section>

<hr class="divider" style="max-width: var(--max-width); margin-left: auto; margin-right: auto;">

<section class="section-compact">
    <div class="container">
        <h2 style="margin-bottom: 1.5rem;">Now</h2>

        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 3rem;">
            <div>
                <p style="margin-bottom: 1rem;">Leading engineering for Cogentiq—Fractal's enterprise agentic AI platform. Responsible for product strategy, engineering, client transformation, and GTM.</p>

                <p style="color: var(--text-secondary); margin-bottom: 0.5rem;"><strong>Recent work:</strong></p>
                <ul style="color: var(--text-secondary); margin-bottom: 0;">
                    <li>Multi-agent orchestration architecture for knowledge synthesis</li>
                    <li>2 Fortune 500 deployments (brief generation: 48h → 15min, 50+ users)</li>
                    <li>Cross-functional leadership: product engineering, FDE, GTM</li>
                </ul>
            </div>

            <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: 8px;">
                <p style="font-size: 14px; color: var(--text-tertiary); margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.5px;">Stack</p>
                <p style="color: var(--text-secondary); font-size: 15px; margin: 0;">
                    LLMs, multi-agent orchestration, RAG, conversational memory, eval frameworks, enterprise integration
                </p>
            </div>
        </div>
    </div>
</section>
