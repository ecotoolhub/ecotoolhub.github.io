// Eco Tool Hub - Global Navigation Script

(function() {
  // 1. Font Awesome Icons Auto-Load
  if (!document.querySelector('link[href*="font-awesome"]')) {
    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
    document.head.appendChild(fontAwesome);
  }

  // 2. Navigation Custom CSS Styles
  const navStyles = document.createElement('style');
  navStyles.innerHTML = `
    .eth-navbar {
      background-color: #0b0f19;
      border-bottom: 1px solid #1e293b;
      padding: 12px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 15px;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    .eth-brand {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      color: #10b981;
      font-weight: 700;
      font-size: 1.2rem;
    }
    .eth-links {
      display: flex;
      align-items: center;
      gap: 18px;
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .eth-links a {
      color: #cbd5e1;
      text-decoration: none;
      font-weight: 500;
      font-size: 0.95rem;
      transition: color 0.2s ease;
    }
    .eth-links a:hover {
      color: #10b981;
    }
    .eth-socials {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .eth-socials a {
      color: #94a3b8;
      font-size: 1rem;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 34px;
      height: 34px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.05);
      transition: all 0.2s ease;
    }
    .eth-socials a:hover {
      color: #10b981;
      background: rgba(16, 185, 129, 0.15);
      transform: translateY(-2px);
    }
    @media (max-width: 768px) {
      .eth-navbar {
        justify-content: center;
        text-align: center;
      }
    }
  `;
  document.head.appendChild(navStyles);

  // 3. Social Media Links
  const socialLinks = {
    facebook: "https://www.facebook.com/ecotoolhub",
    instagram: "https://www.instagram.com/ecotoolhub/",
    threads: "https://www.threads.net/@ecotoolhub",
    pinterest: "https://www.pinterest.com/ecotoolhub/",
    x: "https://x.com/ecotoolhub",
    reddit: "https://www.reddit.com/user/ecotoolhub/",
    tiktok: "https://www.tiktok.com/@ecotoolhub",
    youtube: "https://www.youtube.com/@eco.toolhub"
  };

  const navHTML = `
    <div class="eth-navbar">
      <a href="/" class="eth-brand">
        <span>Eco Tool Hub</span>
      </a>

      <ul class="eth-links">
        <li><a href="/">Home</a></li>
        <li><a href="/#calculators">Calculators</a></li>
        <li><a href="/#guides">Guides</a></li>
      </ul>

      <div class="eth-socials">
        <a href="${socialLinks.facebook}" target="_blank" rel="noopener" title="Facebook"><i class="fab fa-facebook-f"></i></a>
        <a href="${socialLinks.instagram}" target="_blank" rel="noopener" title="Instagram"><i class="fab fa-instagram"></i></a>
        <a href="${socialLinks.threads}" target="_blank" rel="noopener" title="Threads"><i class="fab fa-threads"></i></a>
        <a href="${socialLinks.pinterest}" target="_blank" rel="noopener" title="Pinterest"><i class="fab fa-pinterest-p"></i></a>
        <a href="${socialLinks.x}" target="_blank" rel="noopener" title="X"><i class="fab fa-x-twitter"></i></a>
        <a href="${socialLinks.reddit}" target="_blank" rel="noopener" title="Reddit"><i class="fab fa-reddit-alien"></i></a>
        <a href="${socialLinks.tiktok}" target="_blank" rel="noopener" title="TikTok"><i class="fab fa-tiktok"></i></a>
        <a href="${socialLinks.youtube}" target="_blank" rel="noopener" title="YouTube"><i class="fab fa-youtube"></i></a>
      </div>
    </div>
  `;

  // Render on DOM load
  document.addEventListener("DOMContentLoaded", function () {
    const headerContainer = document.getElementById("main-header");
    if (headerContainer) {
      headerContainer.innerHTML = navHTML;
    }
  });
})();
