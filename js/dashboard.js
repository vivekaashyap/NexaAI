import { auth } from './auth.js';

// AI Council Database
export const aiCouncil = [
    {
        id: "webdev_ai",
        name: "Devon",
        specialty: "Web Development",
        avatar: "🌐",
        color: "#38bdf8",
        rating: 4.8,
        views: 1250,
        responses: 892,
        expertise: ["React", "Vue", "Angular", "JavaScript", "TypeScript", "CSS"],
        description: "Frontend architecture & modern frameworks expert",
        keywords: ["javascript", "react", "vue", "angular", "frontend", "css", "html", "typescript", "webpack"],
        responses_db: {
            react: "React excels with its component-based architecture and vast ecosystem. For large apps, use Redux for state management, React Router for navigation, and consider Next.js for SSR.",
            vue: "Vue offers progressive adoption and excellent documentation. Vue 3's Composition API provides better TypeScript support. Pinia is the recommended state management solution.",
            angular: "Angular provides a complete framework solution with built-in tools. Best for enterprise applications requiring strict architecture and TypeScript support.",
        }
    },
    {
        id: "backend_ai",
        name: "Baxter",
        specialty: "Backend & APIs",
        avatar: "⚙️",
        color: "#10b981",
        rating: 4.7,
        views: 980,
        responses: 654,
        expertise: ["Node.js", "Python", "Java", "APIs", "Microservices", "Databases"],
        description: "Server architecture & API design specialist",
        keywords: ["backend", "api", "node", "python", "java", "rest", "graphql", "database", "microservices"],
        responses_db: {
            node: "Node.js excels in I/O-heavy applications with its non-blocking architecture. Use Express for REST, GraphQL for flexible queries, and consider NestJS for enterprise.",
            python: "Python backend: Django for batteries-included, Flask for lightweight. FastAPI for modern async APIs. Great for ML integration.",
            rest: "REST APIs: Stateless, resource-based. Use proper status codes, versioning, and OpenAPI documentation. Authentication via JWT/OAuth2.",
        }
    },
    {
        id: "dsa_ai",
        name: "Alina",
        specialty: "Algorithms & DSA",
        avatar: "🧠",
        color: "#8b5cf6",
        rating: 4.9,
        views: 2100,
        responses: 1345,
        expertise: ["Data Structures", "Algorithms", "Complexity", "Interview Prep"],
        description: "Algorithm optimization & problem-solving guru",
        keywords: ["algorithm", "data structure", "complexity", "big o", "leetcode", "interview", "sorting", "tree", "graph"],
        responses_db: {
            complexity: "Time Complexity: O(1) constant, O(log n) logarithmic, O(n) linear, O(n²) quadratic. Space complexity measures memory usage.",
            sorting: "QuickSort: O(n log n) average, O(n²) worst. MergeSort: stable O(n log n). Use for large datasets.",
            tree: "Trees: BST for search (O(log n)), AVL for self-balancing, B-Trees for databases. Traversal: Inorder, Preorder, Postorder.",
        }
    },
    {
        id: "devops_ai",
        name: "Dex",
        specialty: "DevOps & Cloud",
        avatar: "☁️",
        color: "#f59e0b",
        rating: 4.6,
        views: 870,
        responses: 543,
        expertise: ["Docker", "Kubernetes", "AWS", "CI/CD", "Infrastructure"],
        description: "Cloud infrastructure & automation expert",
        keywords: ["docker", "kubernetes", "aws", "cloud", "devops", "ci/cd", "terraform", "jenkins"],
        responses_db: {
            docker: "Docker containers package apps with dependencies. Images are templates, containers are running instances. Use Docker Compose for multi-container apps.",
            kubernetes: "K8s manages containerized apps at scale. Pods are smallest units, Deployments manage pods, Services enable networking.",
            aws: "AWS services: EC2 (compute), S3 (storage), RDS (databases), Lambda (serverless). Use IAM for security, CloudWatch for monitoring.",
        }
    },
    {
        id: "ml_ai",
        name: "Milo",
        specialty: "AI/ML & Data",
        avatar: "🤖",
        color: "#ec4899",
        rating: 4.8,
        views: 1100,
        responses: 765,
        expertise: ["Machine Learning", "Deep Learning", "Data Science", "TensorFlow"],
        description: "Machine learning models & data analysis specialist",
        keywords: ["machine learning", "ai", "data science", "tensorflow", "pytorch", "neural network", "nlp"],
        responses_db: {
            ml: "Machine Learning types: Supervised (labeled data), Unsupervised (patterns), Reinforcement (rewards). Feature engineering is crucial.",
            tensorflow: "TensorFlow: Google's ML framework. Use Keras API for simplicity. Great for production deployment with TF Serving.",
            nlp: "NLP: Transformers (BERT, GPT) revolutionized language tasks. Use Hugging Face for pre-trained models.",
        }
    },
    {
        id: "security_ai",
        name: "Sasha",
        specialty: "Security & Auth",
        avatar: "🔒",
        color: "#ef4444",
        rating: 4.7,
        views: 720,
        responses: 432,
        expertise: ["Cybersecurity", "Authentication", "Encryption", "OWASP"],
        description: "Security protocols & vulnerability prevention expert",
        keywords: ["security", "authentication", "encryption", "jwt", "oauth", "xss", "sql injection", "https"],
        responses_db: {
            auth: "Authentication methods: JWT (stateless tokens), OAuth2 (delegated access), Sessions (server-state). Always use HTTPS.",
            security: "OWASP Top 10: Injection, Broken Auth, Sensitive Data Exposure. Implement input validation, parameterized queries, CSP headers.",
        }
    },
    {
        id: "mobile_ai",
        name: "Mia",
        specialty: "Mobile Development",
        avatar: "📱",
        color: "#14b8a6",
        rating: 4.5,
        views: 650,
        responses: 398,
        expertise: ["React Native", "Flutter", "iOS", "Android"],
        description: "Cross-platform mobile development specialist",
        keywords: ["mobile", "react native", "flutter", "ios", "android", "cross-platform", "swift", "kotlin"],
        responses_db: {
            react_native: "React Native: Write once, run both iOS/Android. Uses native components via bridge. Expo for rapid development.",
            flutter: "Flutter: Google's UI toolkit. Compiles to native ARM, uses Dart language. Hot reload for fast iteration.",
        }
    },
    {
        id: "sysdesign_ai",
        name: "Simon",
        specialty: "System Design",
        avatar: "🏗️",
        color: "#8b5cf6",
        rating: 4.9,
        views: 950,
        responses: 521,
        expertise: ["Architecture", "Scalability", "Distributed Systems"],
        description: "Large-scale system architecture expert",
        keywords: ["system design", "architecture", "scalability", "distributed", "load balancing", "caching", "sharding"],
        responses_db: {
            scalability: "Scalability: Vertical (bigger machines) vs Horizontal (more machines). Load balancers distribute traffic.",
            caching: "Caching strategies: CDN (static), Redis (in-memory), Memcached (distributed). Cache invalidation is challenging.",
        }
    },
];

// Knowledge base
const knowledgeBase = {
    javascript: "JavaScript: Dynamic, prototype-based language. ES6+ added classes, modules, promises. Node.js enables server-side JS.",
    python: "Python: Interpreted, high-level. Great for scripting, web, data science. Emphasizes readability with significant whitespace.",
    "react vs vue": "React: More flexible, larger ecosystem. Vue: Easier learning curve, better documentation. Both excellent choices.",
    "docker vs kubernetes": "Docker: Containerization platform. Kubernetes: Container orchestration. Use Docker to build, K8s to manage.",
    "rest vs graphql": "REST: Multiple endpoints, fixed responses. GraphQL: Single endpoint, flexible queries. Choose based on client needs.",
};

// System state
let activeAIs = ["webdev_ai", "backend_ai"];
let systemStats = {
    totalQuestions: 0,
    totalViews: 0,
    averageRating: 0,
    collaborationCount: 0,
};

export function initDashboard(container) {
    // Load dashboard HTML template
    container.innerHTML = getDashboardHTML();
    
    // Initialize dashboard components
    initializeAIComponents();
    setupEventListeners();
    updateSystemStats();
    
    // Add welcome message
    const user = auth.getCurrentUser();
    if (user) {
        addAIMessage(
            "system",
            `Welcome to the Nexus AI Council, ${user.email}! I'm coordinating 8 specialized AIs. Multiple experts will collaborate on your questions based on their ratings and expertise. Ask anything technical!`,
            "System Coordinator"
        );
    }
}

function getDashboardHTML() {
    return `
        <div class="dashboard">
            <div class="chat-section">
                <div class="header">
                    <h1>🤖 Nexus AI Council - Collaborative Intelligence</h1>
                    <p>8 specialized AIs working together | Ratings based on accuracy | View tracking for popularity</p>
                    <div class="user-info" id="userInfo">
                        <i class="fas fa-user-circle"></i>
                        <span id="displayEmail">${auth.getCurrentUser()?.email || ''}</span>
                        <button class="logout-btn" id="logoutBtn" title="Logout">
                            <i class="fas fa-sign-out-alt"></i>
                        </button>
                    </div>
                </div>

                <div class="ai-selector" id="aiSelector">
                    <span style="color: var(--text-dim); margin-right: 10px;">Select AI(s):</span>
                </div>

                <div id="chatBody"></div>

                <div class="input-area">
                    <input type="text" id="userInput" placeholder="Ask any technical question... (e.g., 'Compare React vs Vue for large apps')" autocomplete="off" />
                    <button onclick="window.handleSend()">Ask AI Council</button>
                </div>
            </div>

            <div class="sidebar">
                <div class="ai-panel">
                    <h2>🤖 AI Experts Panel</h2>
                    <div class="ai-list" id="aiList"></div>
                    <div class="collaboration-indicator" id="collabIndicator">
                        <span>🔗 AI Council: Collaborative Mode</span>
                    </div>
                </div>

                <div class="stats-panel">
                    <h2>📊 System Statistics</h2>
                    <div id="systemStats"></div>
                </div>
            </div>
        </div>
    `;
}

function initializeAIComponents() {
    const aiSelector = document.getElementById('aiSelector');
    const aiList = document.getElementById('aiList');
    
    // Generate AI selector buttons
    aiCouncil.forEach(ai => {
        const btn = document.createElement('button');
        btn.className = `ai-btn ${activeAIs.includes(ai.id) ? 'active' : ''}`;
        btn.innerHTML = `${ai.avatar} ${ai.name} <span class="rating">${ai.rating}★</span>`;
        btn.onclick = () => toggleAI(ai.id);
        aiSelector.appendChild(btn);
    });
    
    // Generate AI cards
    aiCouncil.forEach(ai => {
        const card = document.createElement('div');
        card.className = 'ai-card';
        card.onclick = () => toggleAI(ai.id);
        
        const viewsPercentage = (ai.views / 2500) * 100;
        
        card.innerHTML = `
            <div class="ai-card-header">
                <div class="ai-card-avatar" style="background: ${ai.color}22; border: 2px solid ${ai.color}; color: ${ai.color}">
                    ${ai.avatar}
                </div>
                <div class="ai-card-info">
                    <div class="ai-card-name">${ai.name}</div>
                    <div class="ai-card-specialty">${ai.specialty}</div>
                </div>
            </div>
            <div class="ai-card-stats">
                <span>👁️ ${ai.views.toLocaleString()} views</span>
                <span>⭐ ${ai.rating}/5</span>
                <span>💬 ${ai.responses} answers</span>
            </div>
            <div class="progress-bar">
                <div class="progress" style="width: ${viewsPercentage}%; background: ${ai.color}"></div>
            </div>
        `;
        aiList.appendChild(card);
    });

    // Update collaboration indicator
    updateCollaborationIndicator();
}

function setupEventListeners() {
    document.getElementById('logoutBtn').addEventListener('click', () => {
        auth.logout();
    });
    
    // Make handleSend globally available
    window.handleSend = handleSend;
    
    // Enter key support
    document.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && document.getElementById('dashboardSection').style.display !== 'none') {
            handleSend();
        }
    });
}

export function toggleAI(aiId) {
    const index = activeAIs.indexOf(aiId);
    if (index > -1) {
        activeAIs.splice(index, 1);
    } else {
        activeAIs.push(aiId);
    }

    // Update UI
    document.querySelectorAll('.ai-btn').forEach((btn, i) => {
        if (aiCouncil[i].id === aiId) {
            btn.classList.toggle('active');
        }
    });

    updateCollaborationIndicator();
}

function updateCollaborationIndicator() {
    const collabIndicator = document.getElementById('collabIndicator');
    if (activeAIs.length > 1) {
        collabIndicator.innerHTML = `🔗 ${activeAIs.length} AIs Collaborating: ${activeAIs.map(id => aiCouncil.find(a => a.id === id).name).join(', ')}`;
    } else {
        collabIndicator.innerHTML = `👤 Single AI Mode: ${aiCouncil.find(a => a.id === activeAIs[0])?.name || 'None selected'}`;
    }
}

function addAIMessage(aiId, content, customName = null) {
    const chatBody = document.getElementById('chatBody');
    const ai = aiCouncil.find(a => a.id === aiId) || {
        name: customName,
        color: '#6b7280',
        avatar: '🤖',
        rating: 4.5,
        views: 1000,
        specialty: 'AI'
    };

    const messageDiv = document.createElement('div');
    messageDiv.className = 'message ai-message';
    messageDiv.style.borderLeftColor = ai.color;
    messageDiv.style.background = `${ai.color}15`;

    const timestamp = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
    });

    messageDiv.innerHTML = `
        <div class="message-header">
            <div class="ai-avatar" style="background: ${ai.color}; color: white">
                ${ai.avatar}
            </div>
            <div>
                <div class="ai-name">${customName || ai.name}</div>
                <div class="ai-stats">
                    <span class="stat">⭐ ${ai.rating}/5</span>
                    <span class="stat">👁️ ${(ai.views + 1).toLocaleString()}</span>
                    <span class="stat">${ai.specialty}</span>
                </div>
            </div>
        </div>
        <div class="message-content">${content}</div>
        <div class="timestamp">${timestamp}</div>
    `;

    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;

    // Update AI views
    if (ai.views !== undefined) {
        ai.views++;
    }
}

function addUserMessage(content) {
    const chatBody = document.getElementById('chatBody');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message user';

    const timestamp = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
    });
    messageDiv.innerHTML = `
        <div class="message-content">${content}</div>
        <div class="timestamp">${timestamp}</div>
    `;

    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;

    systemStats.totalQuestions++;
    updateSystemStats();
}

function updateSystemStats() {
    const statsDiv = document.getElementById('systemStats');
    const totalViews = aiCouncil.reduce((sum, ai) => sum + ai.views, 0);
    const avgRating = (aiCouncil.reduce((sum, ai) => sum + ai.rating, 0) / aiCouncil.length).toFixed(1);

    statsDiv.innerHTML = `
        <div class="stat-item">
            <span>Total Questions Asked:</span>
            <span class="stat-value">${systemStats.totalQuestions}</span>
        </div>
        <div class="stat-item">
            <span>Total AI Views:</span>
            <span class="stat-value">${totalViews.toLocaleString()}</span>
        </div>
        <div class="stat-item">
            <span>Average AI Rating:</span>
            <span class="stat-value">${avgRating} ★</span>
        </div>
        <div class="stat-item">
            <span>Active AIs:</span>
            <span class="stat-value">${activeAIs.length}</span>
        </div>
        <div class="stat-item">
            <span>Collaboration Rate:</span>
            <span class="stat-value">${systemStats.collaborationCount}</span>
        </div>
    `;
}

function findBestAIs(query) {
    const queryLower = query.toLowerCase();
    let aiScores = [];

    aiCouncil.forEach((ai) => {
        let score = 0;

        // Score based on keywords
        ai.keywords.forEach((keyword) => {
            if (queryLower.includes(keyword.toLowerCase())) {
                score += 2;
            }
        });

        // Score based on expertise
        ai.expertise.forEach((exp) => {
            if (queryLower.includes(exp.toLowerCase())) {
                score += 3;
            }
        });

        // Factor in rating (higher rated AIs get bonus)
        score += (ai.rating - 4) * 2;

        // Factor in views (popular AIs get slight bonus)
        score += ai.views / 1000;

        if (score > 0) {
            aiScores.push({ ai, score });
        }
    });

    // Sort by score descending
    aiScores.sort((a, b) => b.score - a.score);

    // Return top 3 AIs or all with positive scores
    return aiScores.slice(0, 3).map(item => item.ai);
}

function generateAIResponse(ai, query) {
    const queryLower = query.toLowerCase();

    // Check AI's specific responses
    for (const [topic, response] of Object.entries(ai.responses_db)) {
        if (queryLower.includes(topic.toLowerCase())) {
            return response;
        }
    }

    // Check general knowledge base
    for (const [topic, response] of Object.entries(knowledgeBase)) {
        if (queryLower.includes(topic.toLowerCase())) {
            return response;
        }
    }

    // Generate generic response based on specialty
    const genericResponses = {
        "Web Development": "Based on web development principles, I'd recommend focusing on component reusability and state management. Consider using TypeScript for larger applications.",
        "Backend & APIs": "For backend systems, ensure proper error handling, logging, and monitoring. API design should follow RESTful principles or GraphQL based on requirements.",
        "Algorithms & DSA": "This algorithmic problem requires considering time and space complexity. Let me analyze the constraints and suggest optimal approaches.",
        "DevOps & Cloud": "For deployment, consider containerization and orchestration. Implement CI/CD pipelines for automated testing and deployment.",
        "AI/ML & Data": "This involves data preprocessing, model selection, and evaluation metrics. Consider cross-validation to prevent overfitting.",
        "Security & Auth": "Security considerations include input validation, authentication, and authorization. Always follow the principle of least privilege.",
        "Mobile Development": "For mobile apps, consider native performance vs cross-platform development. Test on multiple device sizes and OS versions.",
        "System Design": "System design requires considering scalability, reliability, and maintainability. Start with requirements gathering and API design.",
    };

    return genericResponses[ai.specialty] || "I can provide insights on this topic based on my expertise. Could you provide more specific details?";
}

async function handleSend() {
    const input = document.getElementById('userInput');
    const query = input.value.trim();

    if (!query) return;

    // Add user message
    addUserMessage(query);
    input.value = '';

    // If no AIs selected, use collaborative mode
    if (activeAIs.length === 0) {
        activeAIs = ['webdev_ai', 'backend_ai'];
        document.querySelectorAll('.ai-btn').forEach((btn, i) => {
            btn.classList.toggle('active', activeAIs.includes(aiCouncil[i].id));
        });
        updateCollaborationIndicator();
    }

    // Show collaboration message if multiple AIs
    if (activeAIs.length > 1) {
        const collabMsg = document.createElement('div');
        collabMsg.className = 'collaboration-message';
        collabMsg.innerHTML = `🤝 ${activeAIs.length} AIs are collaborating on this question...`;
        document.getElementById('chatBody').appendChild(collabMsg);
        systemStats.collaborationCount++;
    }

    // Find best AIs for this query
    const bestAIs = findBestAIs(query);
    const respondingAIs = activeAIs.length > 1
        ? aiCouncil.filter(ai => activeAIs.includes(ai.id))
        : bestAIs.length > 0 ? bestAIs : [aiCouncil[0]];

    // Simulate AI thinking
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 1200));

    // Remove collaboration message
    const collabMsg = document.querySelector('.collaboration-message');
    if (collabMsg) collabMsg.remove();

    // Add responses from each AI
    respondingAIs.forEach((ai, index) => {
        setTimeout(() => {
            const response = generateAIResponse(ai, query);
            addAIMessage(ai.id, response);
            ai.responses++;
            updateSystemStats();
        }, index * 500);
    });
}