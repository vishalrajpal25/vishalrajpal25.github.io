---
layout: default
title: Contact
description: Get in touch with Vishal Rajpal for AI consulting, investment due diligence, and enterprise technology transformation services.
---

<section class="section" style="padding-top: 120px;">
    <div class="container text-center mb-4">
        <h1>Get In Touch</h1>
        <p style="font-size: 1.2rem; max-width: 600px; margin: 0 auto;">
            Ready to accelerate your AI transformation or need expert technical due diligence? Let's discuss how I can help drive your success.
        </p>
    </div>
    
    <div class="grid grid-2" style="align-items: start; gap: 4rem;">
        <!-- Contact Information -->
        <div>
            <div class="card mb-4">
                <h3><i class="fas fa-user text-primary"></i> {{ site.author.name }}</h3>
                <p style="font-size: 1.1rem; color: var(--text-light); margin-bottom: 2rem;">{{ site.author.title }}</p>
                
                <div style="margin-bottom: 1.5rem;">
                    <h4><i class="fas fa-envelope text-primary"></i> Email</h4>
                    <p><a href="mailto:{{ site.author.email }}" style="font-size: 1.1rem;">{{ site.author.email }}</a></p>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <h4><i class="fas fa-phone text-primary"></i> Phone</h4>
                    <p><a href="tel:{{ site.author.phone }}" style="font-size: 1.1rem;">{{ site.author.phone }}</a></p>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <h4><i class="fas fa-map-marker-alt text-primary"></i> Location</h4>
                    <p>{{ site.author.location }}</p>
                </div>
                
                <div>
                    <h4><i class="fas fa-globe text-primary"></i> Connect</h4>
                    <div class="social-links" style="gap: 0.5rem;">
                        {% for link in site.social_links %}
                        <a href="{{ link[1] }}" target="_blank" rel="noopener" style="margin-right: 1rem;">
                            <i class="fab fa-{{ link[0] }}" style="font-size: 1.5rem;"></i>
                        </a>
                        {% endfor %}
                    </div>
                </div>
            </div>
            
            <!-- Quick Response Times -->
            <div class="card" style="background: var(--bg-light);">
                <h4><i class="fas fa-clock text-primary"></i> Response Times</h4>
                <ul style="list-style: none; padding-left: 0;">
                    <li style="margin-bottom: 0.5rem;"><strong>Investment DD:</strong> Same day response</li>
                    <li style="margin-bottom: 0.5rem;"><strong>AI Consulting:</strong> Within 24 hours</li>
                    <li style="margin-bottom: 0.5rem;"><strong>General Inquiries:</strong> Within 48 hours</li>
                </ul>
            </div>
        </div>
        
        <!-- Contact Options -->
        <div>
            <div class="card" style="margin-bottom: 2rem;">
                <h3>How Can I Help?</h3>
                <p style="margin-bottom: 2rem;">Choose the option that best describes your needs:</p>
                
                <div class="grid" style="gap: 1rem;">
                    <div class="card" style="background: var(--bg-light); padding: 1.5rem;">
                        <h4><i class="fas fa-search-dollar text-primary"></i> Investment Due Diligence</h4>
                        <p>Technical evaluation of AI startups for investment decisions</p>
                        <div style="margin-top: 1rem;">
                            <span style="background: var(--primary); color: white; padding: 0.25rem 0.75rem; border-radius: 15px; font-size: 0.8rem;">48-72 hours</span>
                            <span style="background: var(--success); color: white; padding: 0.25rem 0.75rem; border-radius: 15px; font-size: 0.8rem; margin-left: 0.5rem;">$15K-$25K</span>
                        </div>
                    </div>
                    
                    <div class="card" style="background: var(--bg-light); padding: 1.5rem;">
                        <h4><i class="fas fa-rocket text-primary"></i> AI Transformation</h4>
                        <p>Enterprise AI strategy and implementation consulting</p>
                        <div style="margin-top: 1rem;">
                            <span style="background: var(--accent); color: white; padding: 0.25rem 0.75rem; border-radius: 15px; font-size: 0.8rem;">2-6 months</span>
                            <span style="background: var(--success); color: white; padding: 0.25rem 0.75rem; border-radius: 15px; font-size: 0.8rem; margin-left: 0.5rem;">$25K-$200K+</span>
                        </div>
                    </div>
                    
                    <div class="card" style="background: var(--bg-light); padding: 1.5rem;">
                        <h4><i class="fas fa-user-tie text-primary"></i> Strategic Advisory</h4>
                        <p>Fractional CTO/AI Officer and executive consulting</p>
                        <div style="margin-top: 1rem;">
                            <span style="background: var(--text); color: white; padding: 0.25rem 0.75rem; border-radius: 15px; font-size: 0.8rem;">Ongoing</span>
                            <span style="background: var(--success); color: white; padding: 0.25rem 0.75rem; border-radius: 15px; font-size: 0.8rem; margin-left: 0.5rem;">$5K-$25K/month</span>
                        </div>
                    </div>
                    
                    <div class="card" style="background: var(--bg-light); padding: 1.5rem;">
                        <h4><i class="fas fa-phone text-primary"></i> Expert Consultation</h4>
                        <p>Quick advisory calls through expert networks</p>
                        <div style="margin-top: 1rem;">
                            <span style="background: var(--primary); color: white; padding: 0.25rem 0.75rem; border-radius: 15px; font-size: 0.8rem;">Immediate</span>
                            <span style="background: var(--success); color: white; padding: 0.25rem 0.75rem; border-radius: 15px; font-size: 0.8rem; margin-left: 0.5rem;">$400-$800/hr</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Call to Action -->
            <div class="card" style="background: var(--primary); color: white; text-align: center;">
                <h4 style="color: white; margin-bottom: 1rem;">Ready to Start?</h4>
                <p style="margin-bottom: 2rem; opacity: 0.9;">Reach out directly and I'll respond within 24 hours</p>
                <div class="btn-group" style="justify-content: center;">
                    <a href="mailto:{{ site.author.email }}" class="btn" style="background: white; color: var(--primary);">
                        <i class="fas fa-envelope"></i> Send Email
                    </a>
                    <a href="tel:{{ site.author.phone }}" class="btn btn-secondary" style="border-color: white; color: white;">
                        <i class="fas fa-phone"></i> Call Now
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="section bg-light">
    <div class="container text-center">
        <h2>Frequently Asked Questions</h2>
        
        <div class="grid grid-2" style="text-align: left; gap: 2rem; max-width: 800px; margin: 0 auto;">
            <div class="card">
                <h4>What's your typical engagement timeline?</h4>
                <p>Investment DD: 48-72 hours. AI consulting projects: 2-6 months. Advisory roles: ongoing with monthly commitments.</p>
            </div>
            
            <div class="card">
                <h4>Do you work with startups or only Fortune 500?</h4>
                <p>I work with both. My Fortune 500 experience helps startups scale enterprise-ready solutions, while startup agility helps enterprises innovate faster.</p>
            </div>
            
            <div class="card">
                <h4>What industries do you specialize in?</h4>
                <p>Banking, manufacturing, pharmaceutical, healthcare, and technology. My experience spans regulated and high-compliance environments.</p>
            </div>
            
            <div class="card">
                <h4>Are you available for international projects?</h4>
                <p>Yes, I regularly work with clients across US, UK, India, and Far East. Remote collaboration and occasional travel as needed.</p>
            </div>
        </div>
    </div>
</section>
