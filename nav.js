document.addEventListener('DOMContentLoaded', function () {
    // 1. Purane duplicate headers aur footers remove karein
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

    // 3. CSS Styles Inject Karein (Header + Pill Shape Social Bar)
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
                margin: 10px auto 10px auto;
                padding: 10px 15px;
                box-sizing: border-box;
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

            /* Top Social Pill Bar (Exact Like Screenshot) */
            .social-bar-container {
                display: flex;
                justify-content: center;
                max-width: 1100px;
                width: 100%;
                margin: 0 auto 25px auto;
                padding: 0 15px;
                box-sizing: border-box;
            }
            .social-pill {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                background-color: #0b1329;
                border: 1px solid #1e293b;
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

            /* Mobile Responsiveness */
            @media (max-width: 600px) {
                .site-header {
                    padding: 8px 10px;
                    margin-bottom: 5px;
                }
                .site-header .logo-img {
                    height: 55px;
                }
                .site-header .nav-btn {
                    padding: 6px 10px;
                    font-size: 13px;
                }
                .social-pill {
                    gap: 6px;
                    padding: 5px 12px;
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

    // 4. Header Element Create Karein
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

    // 5. Social Icons Bar Create Karein
    const socialBar = document.createElement('div');
    socialBar.className = 'social-bar-container';
    socialBar.innerHTML = `
        <div class="social-pill">
            <a href="https://x.com" target="_blank" class="bg-x" title="X"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="https://facebook.com" target="_blank" class="bg-fb" title="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="https://instagram.com" target="_blank" class="bg-insta" title="Instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://threads.net" target="_blank" class="bg-threads" title="Threads"><i class="fa-brands fa-threads"></i></a>
            <a href="https://tiktok.com" target="_blank" class="bg-tiktok" title="TikTok"><i class="fa-brands fa-tiktok"></i></a>
            <a href="https://youtube.com" target="_blank" class="bg-yt" title="YouTube"><i class="fa-brands fa-youtube"></i></a>
            <a href="https://pinterest.com" target="_blank" class="bg-pin" title="Pinterest"><i class="fa-brands fa-pinterest-p"></i></a>
            <a href="https://reddit.com" target="_blank" class="bg-reddit" title="Reddit"><i class="fa-brands fa-reddit-alien"></i></a>
        </div>
    `;

    // 6. Header aur Social Bar Insert Karein
    const wrapper = document.querySelector('.wrapper') || document.body;
    if (wrapper === document.body) {
        document.body.insertBefore(socialBar, document.body.firstChild);
        document.body.insertBefore(header, socialBar);
    } else {
        wrapper.insertBefore(socialBar, wrapper.firstChild);
        wrapper.insertBefore(header, socialBar);
    }
});
