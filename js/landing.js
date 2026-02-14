import { initCursor, initParticles, initParallaxOrbs, initFadeInOnScroll } from './main.js';
import { auth } from './auth.js';

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initCursor();
    initParticles();
    initParallaxOrbs();
    
    // Animate elements on scroll
    const animatedElements = document.querySelectorAll(
        '.feature-card, .showcase-card, .hero-content, .hero-visual'
    );
    initFadeInOnScroll(animatedElements);

    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Check if user is already logged in for the Launch App button
    const launchBtn = document.getElementById('launchAppBtn');
    if (launchBtn && auth.isAuthenticated()) {
        launchBtn.href = '/pages/login.html?auto=true';
    }

    // Stats counter animation
    animateStats();
});

function animateStats() {
    const statsObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statNumbers = entry.target.querySelectorAll('.stat-number');
                    statNumbers.forEach((stat, index) => {
                        const endValue = index === 0 ? 8 : index === 1 ? 48 : 10000;
                        animateValue(stat, 0, endValue, 2000);
                    });
                }
            });
        },
        { threshold: 0.5 }
    );

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) statsObserver.observe(heroStats);
}

function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.innerHTML = Math.floor(progress * (end - start) + start) + (end === 10000 ? '+' : '');
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}