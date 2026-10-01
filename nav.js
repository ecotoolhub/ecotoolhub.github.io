document.addEventListener('DOMContentLoaded', function () {
    // 1. Purane duplicate headers remove karein
    const existingHeaders = document.querySelectorAll('header, .navbar');
    existingHeaders.forEach(el => el.remove());

    // 2. CSS Styles Inject Karein (Mobile Alignment & Social Icons Fix)
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
                line-height: 1.2;
                transition: all 0.2s ease;
            }
            .site-header .nav-btn:hover {
                border-color: #10b981;
                color: #10b981;
            }

            /* Social Media Footer */
            .site-footer {
                max-width: 1100px;
                width: 100%;
                margin: 40px auto 20px auto;
                padding: 20px 15px;
                border-top: 1px solid rgba(51, 65, 85, 0.4);
                text-align: center;
                color: #94a3b8;
                font-size: 14px;
                box-sizing: border-box;
            }
            .social-icons {
                display: flex;
                justify-content: center;
                gap: 15px;
                margin-bottom: 12px;
            }
            .social-icons a {
                color: #f8fafc;
                background-color: #1e293b;
                border: 1px solid #334155;
                width: 38px;
                height: 38px;
                border-radius: 50%;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                font-size: 16px;
                transition: all 0.2s;
            }
            .social-icons a:hover {
                border-color: #10b981;
                color: #10b981;
                transform: translateY(-2px);
            }

            /* Mobile Responsiveness */
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
                    font-size: 13px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // 3. Header Element Create Karein (Home icon removed, Blog icon kept)
    const header = document.createElement('header');
    header.className = 'site-header';

    header.innerHTML = `
        <a href="index.html" style="text-decoration: none;">
            <img src="logo.png" alt="Eco Tool Hub Logo" class="logo-img">
        </a>
        <nav class="nav-links">
            <a href="index.html" class="nav-btn">Home</a>
            <a href="blog.html" class="nav-btn"><span>📚</span> <span>Blog & Guides</span></a>
        </nav>
    `;

    // Header Insert
    const wrapper = document.querySelector('.wrapper') || document.body;
    if (wrapper === document.body) {
        document.body.insertBefore(header, document.body.firstChild);
    } else {
        wrapper.insertBefore(header, wrapper.firstChild);
    }

    // 4. Social Media Footer Auto-Inject
    let footer = document.querySelector('.site-footer');
    if (!footer) {
        footer = document.createElement('footer');
        footer.className = 'site-footer';
        footer.innerHTML = `
            <div class="social-icons">
                <a href="https://twitter.com" target="_blank" title="X / Twitter">🌐</a>
                <a href="https://facebook.com" target="_blank" title="Facebook">📱</a>
                <a href="https://pinterest.com" target="_blank" title="Pinterest">📌</a>
                <a href="https://linkedin.com" target="_blank" title="LinkedIn">💼</a>
            </div>
            <p style="margin:0;">&copy; ${new Date().getFullYear()} Eco Tool Hub. All rights reserved.</p>
        `;
        if (wrapper === document.body) {
            document.body.appendChild(footer);
        } else {
            wrapper.appendChild(footer);
        }
    }
});
