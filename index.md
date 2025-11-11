---
layout: default
title: Home
description: Vishal Rajpal - VP Engineering at Fractal Analytics. Enterprise AI systems, platform engineering, technical evaluation.
keywords: Vishal Rajpal, enterprise AI, AI engineering, platform engineering, technical diligence, VP Engineering
---

<section class="hero">
    <div class="container">
        <h1>Vishal Rajpal</h1>
        <p class="subtitle">VP Engineering at Fractal Analytics<br>Enterprise AI systems, platform engineering, technical evaluation</p>

        <div class="links">
            <a href="mailto:{{ site.author.email }}" class="link-item"><i class="fas fa-envelope"></i> Email</a>
            <a href="/Vishal_Rajpal_Eng_v6.pdf" target="_blank" class="link-item"><i class="fas fa-file-pdf"></i> Resume</a>
            <a href="https://github.com/vishalrajpal25" target="_blank" rel="noopener" class="link-item"><i class="fab fa-github"></i> GitHub</a>
            <a href="https://linkedin.com/in/rajpalvishal" target="_blank" rel="noopener" class="link-item"><i class="fab fa-linkedin"></i> LinkedIn</a>
            <a href="{{ site.author.substack }}" target="_blank" rel="noopener" class="link-item"><i class="fas fa-rss"></i> Substack</a>
        </div>
    </div>
</section>

<section class="section-compact">
    <div class="container">
        <div class="blocks">
            <div class="block">
                <h3>Technical Diligence</h3>
                <ul>
                    <li>Architecture evaluation and feasibility assessment</li>
                    <li>Technical risk analysis and benchmarking</li>
                    <li>Team structure and execution capability review</li>
                </ul>
            </div>
            <div class="block">
                <h3>Advisory</h3>
                <ul>
                    <li>Production architecture and deployment planning</li>
                    <li>Enterprise integration and security requirements</li>
                    <li>Engineering team structure and hiring</li>
                </ul>
            </div>
        </div>
    </div>

</section>

<section class="section-compact">
    <div class="container">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-bottom: 3rem;">
            <div>
                <h4 style="margin-bottom: 0.5rem;">Current</h4>
                <p style="color: var(--text-secondary);">VP Engineering at Fractal Analytics, leading Cogentiq (enterprise AI platform) across product, deployment, and go-to-market. Team of 80+.</p>
            </div>

            <div>
                <h4 style="margin-bottom: 0.5rem;">Previously</h4>
                <p style="color: var(--text-secondary);">Databricks (Solution Architecture), McKinsey QuantumBlack (Principal Engineer), Morgan Stanley, Accenture. Multiple roles across product, consulting, and platform engineering.</p>
            </div>

            <div>
                <h4 style="margin-bottom: 0.5rem;">Focus</h4>
                <p style="color: var(--text-secondary);">Enterprise AI deployment, platform architecture, technical evaluation, and engineering leadership in regulated environments.</p>
            </div>
        </div>
    </div>
</section>

<hr class="divider" style="max-width: var(--max-width); margin-left: auto; margin-right: auto;">

<section class="section-compact">
    <div class="container">
        <h2 style="margin-bottom: 2rem;">Selected Work</h2>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin-bottom: 2rem;">
            {% for project in site.projects %}
            <div style="border: 1px solid var(--border); padding: 1.5rem; border-radius: 8px;">
                <div style="font-size: 14px; color: var(--text-tertiary); margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.5px;">{{ project.year }}</div>
                <h4 style="margin-bottom: 0.5rem;">{{ project.title }}</h4>
                <p style="color: var(--text-secondary); font-size: 15px; margin: 0;">{{ project.category }}</p>
            </div>
            {% endfor %}
        </div>

        <p class="text-center">
            <a href="/work/">→ View details</a>
        </p>
    </div>
</section>

<hr class="divider" style="max-width: var(--max-width); margin-left: auto; margin-right: auto;">

<section class="section-compact">
    <div class="container">
        <h2 style="margin-bottom: 1.5rem;">Recent Work</h2>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 3rem;">
            <div>
                <p style="margin-bottom: 1rem;">Leading Cogentiq engineering—an enterprise AI platform for knowledge work automation—across product development, deployment, and go-to-market.</p>

                <ul style="color: var(--text-secondary); margin-bottom: 0;">
                    <li>Multi-agent orchestration architecture</li>
                    <li>Fortune 500 deployments in regulated environments</li>
                    <li>Engineering team leadership (80+ engineers)</li>
                </ul>
            </div>

            <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: 8px;">
                <p style="font-size: 14px; color: var(--text-tertiary); margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.5px;">Stack</p>
                <p style="color: var(--text-secondary); font-size: 15px; margin: 0;">
                    LLMs, multi-agent systems, RAG, evaluation frameworks, enterprise integration, compliance infrastructure
                </p>
            </div>
        </div>
    </div>
</section>
