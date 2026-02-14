import { initCursor, initParticles, initParallaxOrbs } from './main.js';
import { auth, setupPasswordToggle } from './auth.js';
import { initDashboard } from './dashboard.js';

document.addEventListener('DOMContentLoaded', () => {
    initCursor();
    initParticles();
    initParallaxOrbs();
    setupPasswordToggle();

    // Check if user is already logged in
    if (auth.isAuthenticated()) {
        showDashboard();
        return;
    }

    // Handle login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            const result = auth.login(email, password);
            
            if (result.success) {
                showDashboard();
            } else {
                alert(result.error);
            }
        });
    }

    // Auto-login if ?auto=true is present
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('auto') === 'true' && auth.isAuthenticated()) {
        showDashboard();
    }
});

function showDashboard() {
    // Hide login section
    document.getElementById('loginSection').style.display = 'none';
    
    // Show and initialize dashboard
    const dashboardSection = document.getElementById('dashboardSection');
    dashboardSection.style.display = 'block';
    initDashboard(dashboardSection);
}