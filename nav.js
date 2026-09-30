// 1. Auto-clean '/index.html' from browser URL bar
if (window.location.pathname.endsWith('/index.html')) {
    const cleanURL = window.location.pathname.replace('/index.html', '/') + window.location.search;
    window.history.replaceState(null, '', cleanURL);
}

// 2. Render Navigation Header & Social Icons
document.addEventListener("DOMContentLoaded", function () {
    const navHTML = `
        <header style="width: 100%; max-width: 1100px; margin: 0 auto 25px auto; text-align: center;">
            <nav style="display: flex; justify-content: center; gap: 15px; margin-bottom: 15px; flex-wrap: wrap;">
                <a href="/" style="background: #1e293b; border: 1px solid #334155; color: #f8fafc; text-decoration: none; padding: 8px 18px; border-radius: 8px; font-weight: bold; font-size: 14px; transition: all 0.2s;">🏠 Home</a>
                <a href="blog.html" style="background: #1e293b; border: 1px solid #334155; color: #f8fafc; text-decoration: none; padding: 8px 18px; border-radius: 8px; font-weight: bold; font-size: 14px; transition: all 0.2s;">📚 Blog & Guides</a>
            </nav>
        </header>
    `;

    // Inject at the very top of the body
    const headerElement = document.createElement('div');
    headerElement.innerHTML = navHTML;
    document.body.insertBefore(headerElement.firstElementChild, document.body.firstChild);
});
