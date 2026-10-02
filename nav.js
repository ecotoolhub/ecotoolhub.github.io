// Eco Tool Hub - Fixed Navigation Script

(function() {
  // 1. Navigation CSS Styles
  const navStyles = document.createElement('style');
  navStyles.innerHTML = `
    #eth-header-container {
      background-color: #0b0f19;
      padding: 12px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 15px;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    .eth-brand-logo {
      display: flex;
      align-items: center;
      text-decoration: none;
    }
    .eth-brand-logo img {
      height: 60px; /* Bada logo size desktop view ke liye */
      width: auto;
      object-fit: contain;
      transition: transform 0.2s ease;
    }
    .eth-brand-logo img:hover {
      transform: scale(1.03);
    }
    .eth-right-section {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
    }
    .eth-btn {
      background: #1e293b;
      color: #e2e8f0;
      text-decoration: none;
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 0.95rem;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      border: 1px solid #334155;
      transition: all 0.2s ease;
      cursor: pointer;
    }
    .eth-btn:hover {
      background: #334155;
      color: #ffffff;
      border-color: #10b981;
    }
    .eth-social-box {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-left: 4px;
    }
    .eth-social-box a {
      color: #94a3b8;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 34px;
      height: 34px;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.05);
      transition: all 0.2s ease;
      text-decoration: none;
    }
    .eth-social-box a:hover {
      color: #10b981;
      background: rgba(16, 185, 129, 0.15);
      transform: translateY(-2px);
    }
    .eth-social-box svg {
      width: 16px;
      height: 16px;
      fill: currentColor;
    }
    @media (max-width: 768px) {
      #eth-header-container {
        justify-content: center;
        padding: 10px 15px;
      }
      .eth-brand-logo img {
        height: 48px; /* Mobile display par auto-adjust */
      }
      .eth-right-section {
        justify-content: center;
        width: 100%;
      }
    }
  `;
  document.head.appendChild(navStyles);

  // 2. Social Links Data
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

  // 3. Header HTML
  const navHTML = `
    <div id="eth-header-container">
      <a href="/" class="eth-brand-logo">
        <img src="logo.png" alt="Eco Tool Hub" onerror="this.onerror=null; this.src='assets/logo.png';">
      </a>

      <div class="eth-right-section">
        <a href="/" class="eth-btn">🏠 Home</a>
        <a href="/#guides" onclick="if(document.getElementById('guides')){document.getElementById('guides').scrollIntoView({behavior:'smooth'});}" class="eth-btn">📚 Blog & Guides</a>

        <div class="eth-social-box">
          <a href="${socialLinks.facebook}" target="_blank" rel="noopener" title="Facebook"><svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
          <a href="${socialLinks.instagram}" target="_blank" rel="noopener" title="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
          <a href="${socialLinks.threads}" target="_blank" rel="noopener" title="Threads"><svg viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.843 12.78c-.18 2.91-2.24 4.72-5.06 4.72-3.13 0-5.38-2.31-5.38-5.5 0-3.23 2.27-5.54 5.48-5.54 2.87 0 4.8 1.83 4.97 4.38h-2.1c-.13-1.43-1.12-2.48-2.85-2.48-1.92 0-3.28 1.4-3.28 3.64 0 2.22 1.34 3.6 3.23 3.6 1.71 0 2.76-1.02 2.92-2.38h-2.92v-1.87h4.94v1.43z"/></svg></a>
          <a href="${socialLinks.pinterest}" target="_blank" rel="noopener" title="Pinterest"><svg viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg></a>
          <a href="${socialLinks.x}" target="_blank" rel="noopener" title="X"><svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
          <a href="${socialLinks.reddit}" target="_blank" rel="noopener" title="Reddit"><svg viewBox="0 0 24 24"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.562-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.688-.562-1.249-1.25-1.249zm-4.566 3.875c-.086 0-.173.033-.239.099a.338.338 0 0 0 0 .478c.85.85 2.238.85 3.088 0a.338.338 0 0 0 0-.478.338.338 0 0 0-.478 0c-.588.588-1.544.588-2.132 0a.332.332 0 0 0-.239-.099z"/></svg></a>
          <a href="${socialLinks.tiktok}" target="_blank" rel="noopener" title="TikTok"><svg viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.98-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.57-1.31 1.56-1.3 2.56.01 1.01.55 1.96 1.38 2.51.97.62 2.28.61 3.22-.04.83-.56 1.28-1.55 1.28-2.55.01-4.32.01-8.64.01-12.96z"/></svg></a>
          <a href="${socialLinks.youtube}" target="_blank" rel="noopener" title="YouTube"><svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
        </div>
      </div>
    </div>
  `;

  function injectNav() {
    const target = document.getElementById("main-header") || document.querySelector("header") || document.body;
    if (target === document.body) {
      if (!document.getElementById("eth-header-container")) {
        document.body.insertAdjacentHTML("afterbegin", navHTML);
      }
    } else {
      target.innerHTML = navHTML;
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectNav);
  } else {
    injectNav();
  }
})();
