document.addEventListener("DOMContentLoaded", function() {
    const navHTML = `
        <nav style="background-color: #1e293b; border-bottom: 1px solid #334155; padding: 12px 20px; display: flex; justify-content: center; gap: 15px; width: 100%; box-sizing: border-box;">
            <a href="index.html" style="color: #f8fafc; text-decoration: none; font-weight: 600; font-size: 14px; padding: 8px 16px; border: 1px solid #334155; border-radius: 6px; background-color: #0b0f19; transition: 0.3s;">🏠 Home</a>
            <a href="blog.html" style="color: #f8fafc; text-decoration: none; font-weight: 600; font-size: 14px; padding: 8px 16px; border: 1px solid #334155; border-radius: 6px; background-color: #0b0f19; transition: 0.3s;">📚 Blog & Guides</a>
        </nav>
    `;
    
    // Automatically injects the navigation bar at the very top of the body on every page
    document.body.insertAdjacentHTML('afterbegin', navHTML);
});
