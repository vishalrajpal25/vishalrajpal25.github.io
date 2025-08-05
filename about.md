---
layout: default
title: About
description: Learn more about Vishal Rajpal's 20+ years of experience in AI, cloud, and data engineering, consulting Fortune 500 companies globally.
---

<section class="section" style="padding-top: 120px;">
    <div class="container">
        <div class="grid grid-2" style="align-items: start; gap: 4rem;">
            <div>
                <div style="background: linear-gradient(135deg, var(--primary), var(--primary-dark)); padding: 2rem; border-radius: var(--radius); color: white; text-align: center; margin-bottom: 2rem;">
                    <div style="width: 120px; height: 120px; background: rgba(255, 255, 255, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
                        <i class="fas fa-user" style="font-size: 3rem;"></i>
                    </div>
                    <h3 style="color: white; margin-bottom: 0.5rem;">{{ site.author.name }}</h3>
                    <p style="margin-bottom: 1rem; opacity: 0.9;">{{ site.author.title }}</p>
                    <div style="display: flex; justify-content: center; gap: 1rem;">
                        {% for link in site.social_links %}
                        <a href="{{ link[1] }}" target="_blank" style="color: white; font-size: 1.5rem;">
                            <i class="fab fa-{{ link[0] }}"></i>
                        </a>
                        {% endfor %}
                    </div>
                </div>
                
                <div class="card">
                    <h4><i class="fas fa-map-marker-alt text-primary"></i> Location</h4>
                    <p>{{ site.author.location }}</p>
                    
                    <h4><i class="fas fa-envelope text-primary"></i> Contact</h4>
                    <p><a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a></p>
                    <p><a href="tel:{{ site.author.phone }}">{{ site.author.phone }}</a></p>
                </div>
            </div>
            
            <div>
                <h1>About {{ site.author.name }}</h1>
                <p style="font-size: 1.2rem; margin-bottom: 2rem;">
                    {{ site.description }}
                </p>
                
                <h2>Professional Summary</h2>
                <p>I specialize in building high-performing teams and blending technical expertise with strategic vision for accelerating value realization. My experience spans consulting leading banks, manufacturing companies, pharmaceutical, airlines & conglomerates across US, UK, India & Far East.</p>
                
                <h3>Core Responsibilities</h3>
                <ul style="list-style: none; padding-left: 0;">
                    <li style="margin-bottom: 1rem; padding-left: 2rem; position: relative;">
                        <i class="fas fa-arrow-right" style="position: absolute; left: 0; color: var(--primary); top: 0.25rem;"></i>
                        <strong>Discovery & Implementation:</strong> Conduct discovery, design & implementation for large scale projects & ML engineering
                    </li>
                    <li style="margin-bottom: 1rem; padding-left: 2rem; position: relative;">
                        <i class="fas fa-arrow-right" style="position: absolute; left: 0; color: var(--primary); top: 0.25rem;"></i>
                        <strong>Strategic Leadership:</strong> Thought leadership & impact oriented decision making at C-level
                    </li>
                    <li style="margin-bottom: 1rem; padding-left: 2rem; position: relative;">
                        <i class="fas fa-arrow-right" style="position: absolute; left: 0; color: var(--primary); top: 0.25rem;"></i>
                        <strong>Team Leadership:</strong> Leading engineering teams across North America - implementation, mentoring and framework design
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>

<section class="section bg-light">
    <div class="container text-center mb-4">
        <h2>Technical Expertise</h2>
        
        <div class="grid grid-auto">
            <div class="card">
                <h4><i class="fas fa-robot text-primary"></i> AI & Machine Learning</h4>
                <ul style="list-style: none; padding-left: 0; color: var(--text-light);">
                    <li>• AI Agent Architecture & Engineering</li>
                    <li>• Agentic AI Systems</li>
                    <li>• Generative AI Implementation</li>
                    <li>• MLOps, AIOps, LLMOps</li>
                    <li>• Forward Deployed Engineering</li>
                </ul>
            </div>
            
            <div class="card">
                <h4><i class="fas fa-cloud text-primary"></i> Cloud & Platforms</h4>
                <ul style="list-style: none; padding-left: 0; color: var(--text-light);">
                    <li>• AWS, Azure, Google Cloud</li>
                    <li>• Databricks, Snowflake</li>
                    <li>• Serverless Architectures</li>
                    <li>• Docker, Kubernetes, Helm</li>
                    <li>• Prometheus, DataOps</li>
                </ul>
            </div>
            
            <div class="card">
                <h4><i class="fas fa-code text-primary"></i> Software Engineering</h4>
                <ul style="list-style: none; padding-left: 0; color: var(--text-light);">
                    <li>• Java, Python</li>
                    <li>• Full-stack Development</li>
                    <li>• Distributed Systems</li>
                    <li>• DevSecOps</li>
                    <li>• Enterprise Architecture</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<section class="section">
    <div class="container text-center mb-4">
        <h2>Industry Experience</h2>
        
        <div class="grid grid-3">
            <div class="card text-center">
                <div class="card-icon" style="margin: 0 auto 1rem;">
                    <i class="fas fa-university"></i>
                </div>
                <h4>Banking & Financial Services</h4>
                <p>Unity Catalog adoption for India's first enterprise regulated bank, risk management engines, pricing calculators</p>
            </div>
            
            <div class="card text-center">
                <div class="card-icon" style="margin: 0 auto 1rem;">
                    <i class="fas fa-industry"></i>
                </div>
                <h4>Manufacturing</h4>
                <p>MLOps platform consulting, data science models, operational analytics, and supply chain optimization</p>
            </div>
            
            <div class="card text-center">
                <div class="card-icon" style="margin: 0 auto 1rem;">
                    <i class="fas fa-pills"></i>
                </div>
                <h4>Pharmaceutical</h4>
                <p>Data transformation programs, clinical data platforms, regulatory compliance, and drug discovery analytics</p>
            </div>
        </div>
    </div>
</section>

<section class="section bg-light">
    <div class="container text-center mb-4">
        <h2>Education & Certifications</h2>
        
        <div class="grid grid-3">
            <div class="card">
                <h4><i class="fas fa-graduation-cap text-primary"></i> Education</h4>
                <p><strong>Bachelor of Engineering (B.E.)</strong><br>
                Electronics & Telecommunication<br>
                Rajiv Gandhi Technical University, India<br>
                <em>2000 - 2004</em></p>
            </div>
            
            <div class="card">
                <h4><i class="fas fa-certificate text-primary"></i> Certifications</h4>
                <ul style="list-style: none; padding-left: 0;">
                    <li>• AWS Certified Solution Architect</li>
                    <li>• SAS Certified Base SAS9 Developer</li>
                    <li>• MongoDB Certified Developer</li>
                </ul>
            </div>
            
            <div class="card">
                <h4><i class="fas fa-book text-primary"></i> Publications & Patents</h4>
                <ul style="list-style: none; padding-left: 0;">
                    <li>• "The Right Recommendation System for Big Data"</li>
                    <li>• Java Code Geeks Associate Editor</li>
                    <li>• Patent: "Centralized Analytics Environment"</li>
                </ul>
            </div>
        </div>
    </div>
</section>
