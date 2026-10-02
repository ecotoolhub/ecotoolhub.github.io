// Eco Tool Hub - Global Navigation Bar (nav.js)

document.addEventListener("DOMContentLoaded", function () {
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
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
      <div class="container">
        <!-- Brand Logo & Name -->
        <a class="navbar-brand d-flex align-items-center gap-2" href="/">
          <span class="fs-4 fw-bold text-success">Eco Tool Hub</span>
        </a>

        <!-- Mobile Menu Toggle Button -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navbar Links & Social Icons -->
        <div class="collapse navbar-collapse" id="navbarContent">
          <!-- Main Page Links -->
          <ul class="navbar-menu me-auto mb-2 mb-lg-0 list-unstyled d-flex flex-column flex-lg-row gap-3 mb-0">
            <li class="nav-item"><a class="nav-link text-light fw-medium" href="/">Home</a></li>
            <li class="nav-item"><a class="nav-link text-light fw-medium" href="/calculators">Calculators</a></li>
            <li class="nav-item"><a class="nav-link text-light fw-medium" href="/guides">Guides</a></li>
            <li class="nav-item"><a class="nav-link text-light fw-medium" href="/about">About Us</a></li>
            <li class="nav-item"><a class="nav-link text-light fw-medium" href="/contact">Contact</a></li>
          </ul>

          <!-- Social Media Profiles -->
          <div class="social-icons d-flex align-items-center gap-2 mt-3 mt-lg-0">
            <a href="${socialLinks.facebook}" target="_blank" rel="noopener noreferrer" class="text-light fs-5 hover-success" title="Facebook"><i class="fab fa-facebook"></i></a>
            <a href="${socialLinks.instagram}" target="_blank" rel="noopener noreferrer" class="text-light fs-5 hover-success" title="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="${socialLinks.threads}" target="_blank" rel="noopener noreferrer" class="text-light fs-5 hover-success" title="Threads"><i class="fab fa-threads"></i></a>
            <a href="${socialLinks.pinterest}" target="_blank" rel="noopener noreferrer" class="text-light fs-5 hover-success" title="Pinterest"><i class="fab fa-pinterest"></i></a>
            <a href="${socialLinks.x}" target="_blank" rel="noopener noreferrer" class="text-light fs-5 hover-success" title="X (Twitter)"><i class="fab fa-x-twitter"></i></a>
            <a href="${socialLinks.reddit}" target="_blank" rel="noopener noreferrer" class="text-light fs-5 hover-success" title="Reddit"><i class="fab fa-reddit-alien"></i></a>
            <a href="${socialLinks.tiktok}" target="_blank" rel="noopener noreferrer" class="text-light fs-5 hover-success" title="TikTok"><i class="fab fa-tiktok"></i></a>
            <a href="${socialLinks.youtube}" target="_blank" rel="noopener noreferrer" class="text-light fs-5 hover-success" title="YouTube"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </nav>
  `;

  // Render navigation into header container
  const headerContainer = document.getElementById("main-header") || document.body;
  if (headerContainer.id === "main-header") {
    headerContainer.innerHTML = navHTML;
  } else {
    headerContainer.insertAdjacentHTML("afterbegin", navHTML);
  }
});
