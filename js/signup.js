import { initCursor, initParticles, initParallaxOrbs } from './main.js';
import { auth, setupPasswordToggle } from './auth.js';

document.addEventListener('DOMContentLoaded', () => {
    initCursor();
    initParticles();
    initParallaxOrbs();
    setupPasswordToggle();

    // Redirect if already logged in
    if (auth.isAuthenticated()) {
        window.location.href = 'login.html';
    }

    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            // Validation
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            if (password.length < 6) {
                alert('Password must be at least 6 characters long');
                return;
            }
            
            const result = auth.signup(email, password);
            
            if (result.success) {
                alert('Account created successfully! Redirecting to dashboard...');
                window.location.href = 'login.html?auto=true';
            } else {
                alert(result.error);
            }
        });
    }
});