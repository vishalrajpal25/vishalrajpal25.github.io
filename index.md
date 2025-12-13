---
layout: default
title: Home
description: Vishal Rajpal - VP Engineering at Fractal Analytics. Enterprise AI systems, platform engineering, technical evaluation.
keywords: Vishal Rajpal, enterprise AI, AI engineering, platform engineering, technical diligence, VP Engineering
---

<section class="hero">
    <div class="container">
        <h1>Vishal Rajpal</h1>
        <p class="subtitle">Enterprise AI systems, platform engineering, technical evaluation<br>20+ years across product, consulting, and engineering leadership</p>

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
        <h2 style="margin-bottom: 2rem;">Projects</h2>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-bottom: 2rem;">
            <a href="https://networking-events-app.vercel.app/" target="_blank" rel="noopener" style="text-decoration: none; display: block;">
                <div style="border: 1px solid var(--border); padding: 1.5rem; border-radius: 8px; transition: all 0.2s ease; height: 100%;" class="project-tile">
                    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
                        <span style="font-size: 20px;">🪩</span>
                        <h4 style="margin: 0;">Meetrik</h4>
                    </div>
                    <p style="color: var(--text-secondary); font-size: 15px; margin-bottom: 0.75rem;">Networking events app for San Francisco Tech & AI. Curated events with intent-aware scoring and weekly planning.</p>
                    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                        <span style="font-size: 12px; color: var(--text-tertiary); background: var(--bg-secondary); padding: 0.25rem 0.5rem; border-radius: 4px;">Web App</span>
                        <span style="font-size: 12px; color: var(--text-tertiary); background: var(--bg-secondary); padding: 0.25rem 0.5rem; border-radius: 4px;">AI</span>
                    </div>
                </div>
            </a>

            <a href="https://github.com/vishalrajpal25/cursor-workflow-patterns" target="_blank" rel="noopener" style="text-decoration: none; display: block;">
                <div style="border: 1px solid var(--border); padding: 1.5rem; border-radius: 8px; transition: all 0.2s ease; height: 100%;" class="project-tile">
                    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
                        <i class="fab fa-github" style="font-size: 18px; color: var(--text-secondary);"></i>
                        <h4 style="margin: 0;">Cursor Workflow Patterns</h4>
                    </div>
                    <p style="color: var(--text-secondary); font-size: 15px; margin-bottom: 0.75rem;">Reference implementation demonstrating Cursor IDE workflow patterns with test-driven development.</p>
                    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                        <span style="font-size: 12px; color: var(--text-tertiary); background: var(--bg-secondary); padding: 0.25rem 0.5rem; border-radius: 4px;">JavaScript</span>
                        <span style="font-size: 12px; color: var(--text-tertiary); background: var(--bg-secondary); padding: 0.25rem 0.5rem; border-radius: 4px;">TDD</span>
                    </div>
                </div>
            </a>

            <a href="https://github.com/vishalrajpal25/compass_parenting" target="_blank" rel="noopener" style="text-decoration: none; display: block;">
                <div style="border: 1px solid var(--border); padding: 1.5rem; border-radius: 8px; transition: all 0.2s ease; height: 100%;" class="project-tile">
                    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
                        <i class="fab fa-github" style="font-size: 18px; color: var(--text-secondary);"></i>
                        <h4 style="margin: 0;">Compass Parenting</h4>
                    </div>
                    <p style="color: var(--text-secondary); font-size: 15px; margin-bottom: 0.75rem;">AI-curated activities driven by intelligent parenting insights.</p>
                    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                        <span style="font-size: 12px; color: var(--text-tertiary); background: var(--bg-secondary); padding: 0.25rem 0.5rem; border-radius: 4px;">Python</span>
                        <span style="font-size: 12px; color: var(--text-tertiary); background: var(--bg-secondary); padding: 0.25rem 0.5rem; border-radius: 4px;">AI</span>
                    </div>
                </div>
            </a>
        </div>

        <p class="text-center" style="margin-top: 1rem;">
            <a href="https://github.com/vishalrajpal25" target="_blank" rel="noopener">→ View all repositories</a>
        </p>
    </div>
</section>

