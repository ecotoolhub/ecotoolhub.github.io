document.addEventListener("DOMContentLoaded", function() {
    const navHTML = `
        <nav style="background-color: #1e293b; border-bottom: 1px solid #334155; padding: 12px 20px; display: flex; justify-content: space-between; align-items: center; width: 100%; box-sizing: border-box; flex-wrap: wrap; gap: 12px;">
            <!-- Navigation Links -->
            <div style="display: flex; gap: 10px;">
                <a href="index.html" style="color: #f8fafc; text-decoration: none; font-weight: 600; font-size: 14px; padding: 6px 12px; border: 1px solid #334155; border-radius: 6px; background-color: #0b0f19; transition: 0.3s;">🏠 Home</a>
                <a href="blog.html" style="color: #f8fafc; text-decoration: none; font-weight: 600; font-size: 14px; padding: 6px 12px; border: 1px solid #334155; border-radius: 6px; background-color: #0b0f19; transition: 0.3s;">📚 Blog</a>
            </div>
            
            <!-- Social Media Icons / Links -->
            <div style="display: flex; align-items: center; gap: 8px;">
                <span style="color: #94a3b8; font-size: 12px; font-weight: 600; display: none; @media(min-width: 768px){display:inline;}">Follow:</span>
                <a href="https://pinterest.com" target="_blank" style="color: #f8fafc; text-decoration: none; font-size: 13px; padding: 6px 10px; border: 1px solid #334155; border-radius: 6px; background-color: #0b0f19;" title="Pinterest">📌 Pinterest</a>
                <a href="https://facebook.com" target="_blank" style="color: #f8fafc; text-decoration: none; font-size: 13px; padding: 6px 10px; border: 1px solid #334155; border-radius: 6px; background-color: #0b0f19;" title="Facebook">📘 Facebook</a>
                <a href="https://twitter.com" target="_blank" style="color: #f8fafc; text-decoration: none; font-size: 13px; padding: 6px 10px; border: 1px solid #334155; border-radius: 6px; background-color: #0b0f19;" title="Twitter / X">🐦 X</a>
            </div>

            <!-- Google Translate Widget with All World Languages -->
            <div id="google_translate_element" style="display: flex; align-items: center; font-size: 13px;"></div>
        </nav>
        
        <script type="text/javascript">
            function googleTranslateElementInit() {
                new google.translate.TranslateElement({
                    pageLanguage: 'en',
                    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
                }, 'google_translate_element');
            }
        </script>
        <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', navHTML);
});
