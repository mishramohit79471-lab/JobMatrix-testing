// View Management
function showView(viewName) {
    // Hide all views
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });

    // Deactivate all nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });

    // Show selected view
    document.getElementById(`${viewName}-view`).classList.add('active');
    
    // Activate selected nav link
    const navLink = document.getElementById(`nav-${viewName}`);
    if (navLink) navLink.classList.add('active');

    // Scroll to top
    window.scrollTo(0, 0);

    // Initial render for specific views
    if (viewName === 'jobs') renderJobs();
    if (viewName === 'companies') renderCompanies();
    if (viewName === 'dsa') renderDSA();
}

// Rendering Logic
function renderJobs() {
    const container = document.getElementById('job-listings');
    container.innerHTML = JOBS_DATA.map(job => `
        <div class="job-card glass glass-hover">
            <div style="display: flex; gap: 20px; align-items: center;">
                <div style="width: 60px; height: 60px; background: var(--bg-surface); border: 1px solid var(--glass-border); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--accent); font-size: 1.5rem;">
                    ${job.logo}
                </div>
                <div class="job-info">
                    <h3>${job.title}</h3>
                    <p>${job.company} • ${job.location}</p>
                    <div style="display: flex; gap: 8px; margin-top: 8px;">
                        <span class="status-badge status-pending" style="background: rgba(6, 182, 212, 0.1); color: var(--cyan);">${job.type}</span>
                        <span class="status-badge" style="background: rgba(139, 92, 246, 0.1); color: var(--accent);">${job.salary}</span>
                    </div>
                </div>
            </div>
            <button class="btn glass">Apply Now</button>
        </div>
    `).join('');
}

function renderCompanies() {
    const container = document.getElementById('company-grid');
    container.innerHTML = COMPANIES_DATA.map(company => `
        <div class="bento-item glass glass-hover" style="height: auto; gap: 15px;">
            <h3 style="font-size: 1.5rem; color: var(--cyan);">${company.name}</h3>
            <div>
                <p style="font-weight: 600; margin-bottom: 5px;">Hiring Pattern:</p>
                <p style="font-size: 0.9rem; color: var(--text-secondary);">${company.pattern}</p>
            </div>
            <div>
                <p style="font-weight: 600; margin-bottom: 5px;">Syllabus:</p>
                <p style="font-size: 0.9rem; color: var(--text-secondary);">${company.syllabus}</p>
            </div>
            <div style="margin-top: auto; padding-top: 15px; border-top: 1px solid var(--glass-border);">
                <span style="font-size: 0.8rem; color: var(--accent);">Eligibility: ${company.eligibility}</span>
            </div>
        </div>
    `).join('');
}

function renderDSA() {
    const container = document.getElementById('dsa-sheet-container');
    container.innerHTML = DSA_DATA.map(topic => `
        <div class="dsa-topic">
            <h3 style="margin-bottom: 15px; display: flex; align-items: center; gap: 10px;">
                <i data-lucide="folder" style="width: 20px; color: var(--accent);"></i>
                ${topic.topic}
            </h3>
            <div class="glass" style="padding: 10px;">
                <table class="dsa-table">
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Problem</th>
                            <th>Difficulty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${topic.problems.map(prob => `
                            <tr>
                                <td><input type="checkbox"></td>
                                <td>${prob.name}</td>
                                <td><span class="status-badge ${prob.difficulty === 'Easy' ? 'status-solved' : 'status-pending'}">${prob.difficulty}</span></td>
                                <td><a href="${prob.link}" target="_blank" style="color: var(--cyan); text-decoration: none;">Solve <i data-lucide="external-link" style="width: 14px; vertical-align: middle;"></i></a></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

// Theme Management
function toggleTheme() {
    const body = document.body;
    const themeBtn = document.getElementById('theme-btn');
    const isDark = body.classList.toggle('light-mode');
    
    // Switch icon
    themeBtn.innerHTML = isDark ? '<i data-lucide="sun"></i>' : '<i data-lucide="moon"></i>';
    lucide.createIcons();

    // Persist
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
}

// Initial setup
window.onload = () => {
    // Load persisted theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        document.getElementById('theme-btn').innerHTML = '<i data-lucide="sun"></i>';
    }
    lucide.createIcons();
};
