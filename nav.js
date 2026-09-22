document.addEventListener("DOMContentLoaded", function() {
    const navHTML = `
        <nav style="background-color: #1e293b; border-bottom: 1px solid #334155; padding: 10px 20px; display: flex; justify-content: space-between; align-items: center; width: 100%; box-sizing: border-box; flex-wrap: wrap; gap: 12px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            <!-- Navigation Links -->
            <div style="display: flex; gap: 10px; align-items: center;">
                <a href="index.html" style="color: #f8fafc; text-decoration: none; font-weight: 600; font-size: 14px; padding: 6px 14px; border: 1px solid #334155; border-radius: 6px; background-color: #0b0f19; transition: 0.3s;">🏠 Home</a>
                <a href="blog.html" style="color: #f8fafc; text-decoration: none; font-weight: 600; font-size: 14px; padding: 6px 14px; border: 1px solid #334155; border-radius: 6px; background-color: #0b0f19; transition: 0.3s;">📚 Blog</a>
            </div>
            
            <!-- Modern Social Media Icons Container -->
            <div style="display: flex; align-items: center; gap: 6px; background: rgba(11, 15, 25, 0.7); padding: 5px 10px; border-radius: 10px; border: 1px solid #334155; box-shadow: inset 0 2px 4px rgba(0,0,0,0.3);">
                <!-- X (Twitter) -->
                <a href="https://x.com" target="_blank" title="X (Twitter)" style="color: #94a3b8; display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 6px; transition: 0.2s;" onmouseover="this.style.color='#f8fafc';this.style.background='#334155'" onmouseout="this.style.color='#94a3b8';this.style.background='transparent'">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
                </a>
                <!-- Facebook -->
                <a href="https://facebook.com" target="_blank" title="Facebook" style="color: #94a3b8; display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 6px; transition: 0.2s;" onmouseover="this.style.color='#3b82f6';this.style.background='#334155'" onmouseout="this.style.color='#94a3b8';this.style.background='transparent'">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <!-- Instagram -->
                <a href="https://instagram.com" target="_blank" title="Instagram" style="color: #94a3b8; display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 6px; transition: 0.2s;" onmouseover="this.style.color='#ec4899';this.style.background='#334155'" onmouseout="this.style.color='#94a3b8';this.style.background='transparent'">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <!-- Threads -->
                <a href="https://threads.net" target="_blank" title="Threads" style="color: #94a3b8; display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 6px; transition: 0.2s;" onmouseover="this.style.color='#f8fafc';this.style.background='#334155'" onmouseout="this.style.color='#94a3b8';this.style.background='transparent'">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 8.5C17.5 5.5 14.5 3.5 11 3.5c-4.4 0-8 3.6-8 8s3.6 8 8 8c3.5 0 6.5-2 8-5.5"></path><path d="M15 11.5a3 3 0 1 0-3 3 3 3 0 0 0 3-3z"></path></svg>
                </a>
                <!-- TikTok -->
                <a href="https://tiktok.com" target="_blank" title="TikTok" style="color: #94a3b8; display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 6px; transition: 0.2s;" onmouseover="this.style.color='#06b6d4';this.style.background='#334155'" onmouseout="this.style.color='#94a3b8';this.style.background='transparent'">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                </a>
                <!-- YouTube -->
                <a href="https://youtube.com" target="_blank" title="YouTube" style="color: #94a3b8; display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 6px; transition: 0.2s;" onmouseover="this.style.color='#ef4444';this.style.background='#334155'" onmouseout="this.style.color='#94a3b8';this.style.background='transparent'">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor"></polygon></svg>
                </a>
                <!-- Pinterest -->
                <a href="https://pinterest.com" target="_blank" title="Pinterest" style="color: #94a3b8; display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 6px; transition: 0.2s;" onmouseover="this.style.color='#f43f5e';this.style.background='#334155'" onmouseout="this.style.color='#94a3b8';this.style.background='transparent'">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 0 0-3.35 19.43c-.11-.83-.2-2.11.04-3.02.22-.84 1.41-5.61 1.41-5.61s-.36-.72-.36-1.78c0-1.67.97-2.92 2.18-2.92 1.03 0 1.53.77 1.53 1.7 0 1.03-.66 2.58-1 4.01-.28 1.19.6 2.16 1.77 2.16 2.13 0 3.77-2.25 3.77-5.5 0-2.88-2.07-4.9-5.02-4.9-3.42 0-5.43 2.56-5.43 5.21 0 1.03.39 2.14.89 2.74.1.12.11.23.08.35-.09.38-.3 1.22-.34 1.39-.06.24-.19.29-.44.17-1.65-.77-2.69-3.18-2.69-5.12 0-4.17 3.04-8 8.76-8 4.6 0 8.18 3.28 8.18 7.67 0 4.58-2.89 8.27-6.9 8.27-1.35 0-2.62-.7-3.05-1.53l-.83 3.17c-.3 1.15-1.11 2.59-1.66 3.47A10 10 1 0 12 2z"></path></svg>
                </a>
                <!-- Reddit -->
                <a href="https://reddit.com" target="_blank" title="Reddit" style="color: #94a3b8; display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 6px; transition: 0.2s;" onmouseover="this.style.color='#f97316';this.style.background='#334155'" onmouseout="this.style.color='#94a3b8';this.style.background='transparent'">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M17 13.5c0 1.93-2.24 3.5-5 3.5s-5-1.57-5-3.5"></path><path d="M9 9h.01"></path><path d="M15 9h.01"></path><path d="M12 12v1.5"></path></svg>
                </a>
            </div>

            <!-- Google Translate Widget with All Languages -->
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
