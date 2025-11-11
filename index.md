---
layout: default
title: Home
description: I build and evaluate enterprise AI systems. 20+ years as an operator, builder, and advisor.
keywords: Vishal Rajpal, enterprise AI, AI engineering, platform engineering, technical diligence, VP Engineering
---

<section class="hero">
    <div class="container">
        <h1>I build and evaluate enterprise AI systems.</h1>
        <p class="subtitle">20+ years. Operator, builder, advisor.</p>

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
                <h3><i class="fas fa-chart-line" style="color: var(--accent); margin-right: 0.5rem;"></i>For VCs</h3>
                <ul>
                    <li>48–72h technical diligence: architecture, moat, feasibility</li>
                    <li>Benchmarking and risk analysis; build/reality checks</li>
                    <li>Clear readouts you can share with partners</li>
                </ul>
            </div>
            <div class="block">
                <h3><i class="fas fa-rocket" style="color: var(--accent); margin-right: 0.5rem;"></i>For Founders</h3>
                <ul>
                    <li>Architecture spikes and production pathways</li>
                    <li>Delivery acceleration and hiring support</li>
                    <li>Enterprise constraints: security, data, integration</li>
                </ul>
            </div>
        </div>
    </div>
    
</section>

<section class="section-compact">
    <div class="container">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-bottom: 3rem;">
            <div>
                <h4 style="margin-bottom: 0.5rem;"><i class="fas fa-building" style="color: var(--accent); margin-right: 0.5rem; font-size: 0.9em;"></i>Current</h4>
                <p style="color: var(--text-secondary);">Leading Cogentiq engineering at Fractal—product, deployment, GTM across Fortune 500 enterprises. Team of 80+.</p>
            </div>

            <div>
                <h4 style="margin-bottom: 0.5rem;"><i class="fas fa-briefcase" style="color: var(--accent); margin-right: 0.5rem; font-size: 0.9em;"></i>Experience</h4>
                <p style="color: var(--text-secondary);">Databricks (Solution Architecture), McKinsey QuantumBlack (Principal Engineer), Fractal (multiple roles), Morgan Stanley, Accenture.</p>
            </div>

            <div>
                <h4 style="margin-bottom: 0.5rem;"><i class="fas fa-user-tie" style="color: var(--accent); margin-right: 0.5rem; font-size: 0.9em;"></i>Background</h4>
                <p style="color: var(--text-secondary);">20+ years across product engineering, client transformation, GTM, and engineering leadership.</p>
            </div>
        </div>
    </div>
</section>

<hr class="divider" style="max-width: var(--max-width); margin-left: auto; margin-right: auto;">

<section class="section-compact">
    <div class="container">
        <h2 style="margin-bottom: 2rem;"><i class="fas fa-code" style="color: var(--accent); margin-right: 0.75rem; font-size: 0.9em;"></i>Selected Work</h2>

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
            <a href="/work/">→ Full project details</a>
        </p>
    </div>
</section>

<hr class="divider" style="max-width: var(--max-width); margin-left: auto; margin-right: auto;">

<section class="section-compact">
    <div class="container">
        <h2 style="margin-bottom: 1.5rem;"><i class="fas fa-bolt" style="color: var(--accent); margin-right: 0.75rem; font-size: 0.9em;"></i>Now</h2>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 3rem;">
            <div>
                <p style="margin-bottom: 1rem;">Leading engineering for Cogentiq—an enterprise agentic AI platform—across product, deployment, and GTM.</p>

                <p style="color: var(--text-secondary); margin-bottom: 0.5rem;"><strong>Recent work:</strong></p>
                <ul style="color: var(--text-secondary); margin-bottom: 0;">
                    <li>Multi-agent orchestration architecture for knowledge synthesis</li>
                    <li>2 Fortune 500 deployments (knowledge work, minutes vs hours)</li>
                    <li>Cross-functional leadership: product engineering, delivery, GTM</li>
                </ul>
            </div>

            <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: 8px;">
                <p style="font-size: 14px; color: var(--text-tertiary); margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.5px;"><i class="fas fa-layer-group" style="margin-right: 0.5rem;"></i>Stack</p>
                <p style="color: var(--text-secondary); font-size: 15px; margin: 0;">
                    LLMs, multi-agent orchestration, RAG, conversational memory, eval frameworks, enterprise integration
                </p>
            </div>
        </div>
    </div>
</section>
