document.addEventListener('DOMContentLoaded', function () {
    // 1. Purane aur duplicate headers ko automatically remove karein
    const oldHeaders = document.querySelectorAll('header, .navbar');
    oldHeaders.forEach(el => el.remove());

    // 2. New Single Clean Header banayein
    const header = document.createElement('header');
    header.style.cssText = 'display: flex; justify-content: space-between; align-items: center; max-width: 1200px; width: 100%; margin: 0 auto 25px auto; padding: 10px 20px 15px 20px; border-bottom: 1px solid rgba(51, 65, 85, 0.4); box-sizing: border-box;';

    header.innerHTML = `
        <a href="index.html" style="text-decoration: none;">
            <img src="logo.png" alt="Eco Tool Hub Logo" style="height: 110px; width: auto; display: block;">
        </a>
        <nav style="display: flex; gap: 6px; align-items: center;">
            <a href="index.html" style="display: inline-block; background-color: #1e293b; color: #f8fafc; border: 1px solid #334155; text-decoration: none; padding: 8px 14px; border-radius: 8px; font-size: 14px; font-weight: 600; transition: all 0.2s;">🏠 Home</a>
            <a href="blog.html" style="display: inline-block; background-color: #1e293b; color: #f8fafc; border: 1px solid #334155; text-decoration: none; padding: 8px 14px; border-radius: 8px; font-size: 14px; font-weight: 600; transition: all 0.2s;">📚 Blog & Guides</a>
        </nav>
    `;

    // Page ke top par single header attach karein
    document.body.insertBefore(header, document.body.firstChild);
});