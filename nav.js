document.addEventListener('DOMContentLoaded', function () {
    // 1. Double header khatam karne ke liye pehle se bane sare headers ko remove karein
    const existingHeaders = document.querySelectorAll('header, .navbar');
    existingHeaders.forEach(el => el.remove());

    // 2. New Clean Centered Header Container Create Karein
    const header = document.createElement('header');
    header.style.cssText = 'display: flex; justify-content: space-between; align-items: center; max-width: 1000px; width: 100%; margin: 10px auto 20px auto; padding: 10px 15px; box-sizing: border-box; border-bottom: 1px solid rgba(51, 65, 85, 0.4);';

    header.innerHTML = `
        <!-- Left Logo (Grid Card Ke Top-Left Alignment Mein) -->
        <a href="index.html" style="text-decoration: none;">
            <img src="logo.png" alt="Eco Tool Hub Logo" style="height: 90px; width: auto; display: block;">
        </a>

        <!-- Right Buttons (Grid Card Ke Top-Right Alignment Mein) -->
        <nav style="display: flex; gap: 8px; align-items: center;">
            <a href="index.html" style="display: inline-block; background-color: #1e293b; color: #f8fafc; border: 1px solid #334155; text-decoration: none; padding: 8px 14px; border-radius: 8px; font-size: 14px; font-weight: 600; transition: all 0.2s;">🏠 Home</a>
            <a href="blog.html" style="display: inline-block; background-color: #1e293b; color: #f8fafc; border: 1px solid #334155; text-decoration: none; padding: 8px 14px; border-radius: 8px; font-size: 14px; font-weight: 600; transition: all 0.2s;">📚 Blog & Guides</a>
        </nav>
    `;

    // 3. Grid cards ke bilkul upar center mein header inject karein
    const wrapper = document.querySelector('.wrapper') || document.body;
    if (wrapper === document.body) {
        document.body.insertBefore(header, document.body.firstChild);
    } else {
        wrapper.insertBefore(header, wrapper.firstChild);
    }
});
