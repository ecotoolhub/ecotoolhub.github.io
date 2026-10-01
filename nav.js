document.addEventListener('DOMContentLoaded', function () {
    // 1. Purane duplicate headers ko clean karein
    const existingHeaders = document.querySelectorAll('header, .navbar');
    existingHeaders.forEach(el => el.remove());

    // 2. Responsive CSS Styles Inject Karein
    if (!document.getElementById('nav-custom-styles')) {
        const style = document.createElement('style');
        style.id = 'nav-custom-styles';
        style.textContent = `
            .site-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                max-width: 1100px;
                width: 100%;
                margin: 10px auto 20px auto;
                padding: 10px 15px;
                box-sizing: border-box;
                border-bottom: 1px solid rgba(51, 65, 85, 0.4);
            }
            .site-header .logo-img {
                height: 80px;
                width: auto;
                display: block;
            }
            .site-header .nav-links {
                display: flex;
                gap: 8px;
                align-items: center;
            }
            .site-header .nav-btn {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 6px;
                background-color: #1e293b;
                color: #f8fafc;
                border: 1px solid #334155;
                text-decoration: none;
                padding: 8px 14px;
                border-radius: 8px;
                font-size: 14px;
                font-weight: 600;
                white-space: nowrap;
                transition: all 0.2s ease;
            }
            .site-header .nav-btn:hover {
                border-color: #10b981;
                color: #10b981;
            }

            /* Mobile Responsiveness Fix */
            @media (max-width: 600px) {
                .site-header {
                    padding: 8px 10px;
                    margin-bottom: 15px;
                }
                .site-header .logo-img {
                    height: 55px;
                }
                .site-header .nav-links {
                    gap: 6px;
                }
                .site-header .nav-btn {
                    padding: 6px 10px;
                    font-size: 12px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // 3. Clean Header Element Create Karein
    const header = document.createElement('header');
    header.className = 'site-header';

    header.innerHTML = `
        <a href="index.html" style="text-decoration: none;">
            <img src="logo.png" alt="Eco Tool Hub Logo" class="logo-img">
        </a>
        <nav class="nav-links">
            <a href="index.html" class="nav-btn"><span>🏠</span> <span>Home</span></a>
            <a href="blog.html" class="nav-btn"><span>📚</span> <span>Blog & Guides</span></a>
        </nav>
    `;

    // 4. Header Container Reinforcement
    const wrapper = document.querySelector('.wrapper') || document.body;
    if (wrapper === document.body) {
        document.body.insertBefore(header, document.body.firstChild);
    } else {
        wrapper.insertBefore(header, wrapper.firstChild);
    }
});
