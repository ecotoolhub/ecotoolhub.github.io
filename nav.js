document.addEventListener('DOMContentLoaded', function () {
    // 1. Purane duplicate headers remove karein
    const existingHeaders = document.querySelectorAll('header, .navbar, .site-header, .site-footer, .social-bar-container');
    existingHeaders.forEach(el => el.remove());

    // 2. Font Awesome CDN Load Karein Icons Ke Liye
    if (!document.getElementById('font-awesome-css')) {
        const faLink = document.createElement('link');
        faLink.id = 'font-awesome-css';
        faLink.rel = 'stylesheet';
        faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
        document.head.appendChild(faLink);
    }

    // 3. CSS Styles Inject Karein
    if (!document.getElementById('nav-custom-styles')) {
        const style = document.createElement('style');
        style.id = 'nav-custom-styles';
        style.textContent = `
            .site-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                max-width: 1100px;
                width: 100%;
                margin: 10px auto 25px auto;
                padding: 10px 15px;
                box-sizing: border-box;
            }
            .header-left {
                flex: 1;
                display: flex;
                justify-content: flex-start;
                align-items: center;
            }
            .site-header .logo-img {
                height: 85px;
                width: auto;
                display: block;
            }
            .header-center {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 10px;
                width: 100%;
            }
            .header-right {
                flex: 1;
            }
            .nav-links {
                display: flex;
                gap: 8px;
                align-items: center;
                justify-content: center;
                width: 100%;
                box-sizing: border-box;
            }
            .nav-btn {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 6px;
                background-color: #1e293b;
                color: #f8fafc;
                border: 1px solid #334155;
                text-decoration: none;
                padding: 8px 16px;
                border-radius: 8px;
                font-size: 14px;
                font-weight: 600;
                white-space: nowrap;
                line-height: 1.2;
                transition: all 0.2s ease;
            }
            .nav-btn:hover {
                border-color: #10b981;
                color: #10b981;
            }

            /* Top Social Pill Bar */
            .social-pill {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                background-color: #0b1329;
                border: 1px solid #334155;
                padding: 6px 18px;
                border-radius: 30px;
                box-shadow: 0 4px 15px rgba(0,0,0,0.4);
            }
            .social-pill a {
                width: 28px;
                height: 28px;
                border-radius: 50%;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                color: #ffffff;
                text-decoration: none;
                font-size: 13px;
                transition: transform 0.2s ease;
            }
            .social-pill a:hover {
                transform: scale(1.18);
            }

            /* Brand Colors */
            .bg-x { background-color: #000000; }
            .bg-fb { background-color: #1877f2; }
            .bg-insta { background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); }
            .bg-threads { background-color: #000000; }
            .bg-tiktok { background-color: #000000; }
            .bg-yt { background-color: #ff0000; }
            .bg-pin { background-color: #e60023; }
            .bg-reddit { background-color: #ff4500; }

            /* Mobile & Tablets Accessibility & Responsive Alignment */
            @media (max-width: 1024px) {
                .site-header {
                    flex-direction: column;
                    gap: 10px;
                    padding: 8px 10px;
                    margin: 0 auto 15px auto;
                }
                .header-left {
                    justify-content: center;
                    width: 100%;
                }
                .header-right {
                    display: none;
                }
                .header-center {
                    gap: 8px;
                    align-items: center;
                }
                .site-header .logo-img {
                    height: 60px;
                }
                .nav-links {
                    justify-content: center !important;
                    padding-left: 0 !important;
                    gap: 8px;
                }
                .nav-btn {
                    padding: 6px 12px;
                    font-size: 13px;
                    border-radius: 6px;
                }
                .social-pill {
                    gap: 6px;
                    padding: 5px 14px;
                }
                .social-pill a {
                    width: 24px;
                    height: 24px;
                    font-size: 11px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // 4. Header Element Create Karein (With Accessible ARIA Attributes)
    const header = document.createElement('header');
    header.className = 'site-header';
    header.setAttribute('role', 'banner');
    header.innerHTML = `
        <div class="header-left">
            <a href="index.html" style="text-decoration: none;" aria-label="Eco Tool Hub Home">
                <img src="logo.png" alt="Eco Tool Hub Official Logo" class="logo-img" width="160" height="85">
            </a>
        </div>
        <div class="header-center">
            <nav class="nav-links" aria-label="Main Navigation">
                <a href="index.html" class="nav-btn" aria-label="Go to Home page">Home</a>
                <a href="blog.html" class="nav-btn" aria-label="Go to Blog and Guides"><span>📚</span> <span>Blog & Guides</span></a>
            </nav>
            <div class="social-pill" role="region" aria-label="Social Media Links">
                <a href="https://x.com" target="_blank" class="bg-x" title="X" aria-label="Follow us on X"><i class="fa-brands fa-x-twitter" aria-hidden="true"></i></a>
                <a href="https://facebook.com" target="_blank" class="bg-fb" title="Facebook" aria-label="Follow us on Facebook"><i class="fa-brands fa-facebook-f" aria-hidden="true"></i></a>
                <a href="https://instagram.com" target="_blank" class="bg-insta" title="Instagram" aria-label="Follow us on Instagram"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a>
                <a href="https://threads.net" target="_blank" class="bg-threads" title="Threads" aria-label="Follow us on Threads"><i class="fa-brands fa-threads" aria-hidden="true"></i></a>
                <a href="https://tiktok.com" target="_blank" class="bg-tiktok" title="TikTok" aria-label="Follow us on TikTok"><i class="fa-brands fa-tiktok" aria-hidden="true"></i></a>
                <a href="https://youtube.com" target="_blank" class="bg-yt" title="YouTube" aria-label="Subscribe on YouTube"><i class="fa-brands fa-youtube" aria-hidden="true"></i></a>
                <a href="https://pinterest.com" target="_blank" class="bg-pin" title="Pinterest" aria-label="Follow us on Pinterest"><i class="fa-brands fa-pinterest-p" aria-hidden="true"></i></a>
                <a href="https://reddit.com" target="_blank" class="bg-reddit" title="Reddit" aria-label="Join our Reddit community"><i class="fa-brands fa-reddit-alien" aria-hidden="true"></i></a>
            </div>
        </div>
        <div class="header-right"></div>
    `;

    // 5. Header Insert
    const wrapper = document.querySelector('.wrapper') || document.body;
    if (wrapper === document.body) {
        document.body.insertBefore(header, document.body.firstChild);
    } else {
        wrapper.insertBefore(header, wrapper.firstChild);
    }

    // 6. Automatic WebApplication Schema Injection
    if (!document.getElementById('dynamic-app-schema')) {
        const isCalculator = window.location.pathname.includes('calculator') || window.location.pathname.includes('planner') || window.location.pathname.includes('evaluator');
        const pageTitle = document.title || 'Eco Tool Hub Interactive Calculator';
        const pageDesc = document.querySelector('meta[name="description"]')?.content || 'Free interactive eco calculator and sustainability tool.';

        const schemaJSON = {
            "@context": "https://schema.org",
            "@type": isCalculator ? "WebApplication" : "WebSite",
            "name": pageTitle,
            "url": window.location.href,
            "description": pageDesc,
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "All",
            "browserRequirements": "Requires JavaScript",
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
            }
        };

        const schemaScript = document.createElement('script');
        schemaScript.id = 'dynamic-app-schema';
        schemaScript.type = 'application/ld+json';
        schemaScript.textContent = JSON.stringify(schemaJSON);
        document.head.appendChild(schemaScript);
    }
});
