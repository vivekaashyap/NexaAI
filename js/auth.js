// ===== AUTHENTICATION SERVICE =====
const AUTH_KEY = 'nexus_user';

export const auth = {
    // Login user
    login(email, password) {
        // Demo credentials
        if (email === 'admin@gmail.com' && password === '1234') {
            const user = { email, loggedInAt: new Date().toISOString() };
            localStorage.setItem(AUTH_KEY, JSON.stringify(user));
            return { success: true, user };
        }
        return { success: false, error: 'Invalid credentials' };
    },

    // Signup user
    signup(email, password) {
        if (!email || !password) {
            return { success: false, error: 'Email and password required' };
        }
        
        if (password.length < 6) {
            return { success: false, error: 'Password must be at least 6 characters' };
        }
        
        const user = { email, loggedInAt: new Date().toISOString() };
        localStorage.setItem(AUTH_KEY, JSON.stringify(user));
        return { success: true, user };
    },

    // Logout user
    logout() {
        localStorage.removeItem(AUTH_KEY);
        window.location.href = '/pages/login.html';
    },

    // Get current user
    getCurrentUser() {
        const userStr = localStorage.getItem(AUTH_KEY);
        return userStr ? JSON.parse(userStr) : null;
    },

    // Check if user is authenticated
    isAuthenticated() {
        return !!this.getCurrentUser();
    },

    // Redirect if not authenticated
    requireAuth(redirectUrl = '/pages/login.html') {
        if (!this.isAuthenticated()) {
            window.location.href = redirectUrl;
            return false;
        }
        return true;
    },

    // Redirect if already authenticated
    redirectIfAuthenticated(destination = '/pages/login.html') {
        if (this.isAuthenticated()) {
            window.location.href = destination;
            return true;
        }
        return false;
    }
};

// ===== PASSWORD TOGGLE =====
export function setupPasswordToggle() {
    const toggleBtn = document.getElementById('togglePassword');
    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', () => {
        const passwordInput = document.getElementById('password');
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;
        
        toggleBtn.classList.toggle('fa-eye');
        toggleBtn.classList.toggle('fa-eye-slash');
    });
}