document.addEventListener("DOMContentLoaded", function() {
    const navHTML = `
        <nav style="background-color: #1e293b; border-bottom: 1px solid #334155; padding: 15px 15px; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; box-sizing: border-box; gap: 12px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
            
            <!-- Navigation Links (Home & Blog) -->
            <div style="display: flex; gap: 12px; align-items: center; justify-content: center; width: 100%; flex-wrap: wrap;">
                <a href="index.html" style="color: #f8fafc; text-decoration: none; font-weight: 600; font-size: 14px; padding: 8px 18px; border: 1px solid #334155; border-radius: 8px; background-color: #0b0f19; box-shadow: 0 2px 5px rgba(0,0,0,0.2); transition: 0.3s;">🏠 Home</a>
                <a href="blog.html" style="color: #f8fafc; text-decoration: none; font-weight: 600; font-size: 14px; padding: 8px 18px; border: 1px solid #334155; border-radius: 8px; background-color: #0b0f19; box-shadow: 0 2px 5px rgba(0,0,0,0.2); transition: 0.3s;">📚 Blog & Guides</a>
            </div>
            
            <!-- Modern Social Media Icons Container with Official Colors -->
            <div style="display: flex; align-items: center; justify-content: center; gap: 8px; flex-wrap: wrap; background: rgba(11, 15, 25, 0.85); padding: 8px 14px; border-radius: 12px; border: 1px solid #334155; width: 100%; max-width: 450px; box-sizing: border-box;">
                
                <!-- X (Twitter) -->
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" title="X" style="color: #ffffff; background: #000000; display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 8px; border: 1px solid #334155; transition: 0.2s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>

                <!-- Facebook -->
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook" style="color: #ffffff; background: #1877f2; display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 8px; transition: 0.2s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>

                <!-- Instagram -->
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram" style="color: #ffffff; background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%); display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 8px; transition: 0.2s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>

                <!-- Threads -->
                <a href="https://threads.net" target="_blank" rel="noopener noreferrer" title="Threads" style="color: #ffffff; background: #000000; display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 8px; border: 1px solid #334155; transition: 0.2s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 8.5C17.5 5.5 14.5 3.5 11 3.5c-4.4 0-8 3.6-8 8s3.6 8 8 8c3.5 0 6.5-2 8-5.5"></path><path d="M15 11.5a3 3 0 1 0-3 3 3 3 0 0 0 3-3z"></path></svg>
                </a>

                <!-- TikTok -->
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" title="TikTok" style="color: #ffffff; background: #000000; display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 8px; border: 1px solid #ff0050; transition: 0.2s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.13z"/></svg>
                </a>

                <!-- YouTube -->
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" title="YouTube" style="color: #ffffff; background: #ff0000; display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 8px; transition: 0.2s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>

                <!-- Pinterest -->
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" title="Pinterest" style="color: #ffffff; background: #bd081c; display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 8px; transition: 0.2s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.29 1.199-.328 1.369-.054.265-.182.322-.42.193-1.567-.729-2.548-3.024-2.548-4.868 0-3.955 2.872-7.59 8.291-7.59 4.352 0 7.739 3.102 7.739 7.258 0 4.331-2.734 7.82-6.527 7.82-1.273 0-2.47-.662-2.879-1.442l-.784 2.989c-.287 1.1-1.066 2.475-1.589 3.318C9.697 23.864 10.824 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
                </a>

                <!-- Reddit -->
                <a href="https://reddit.com" target="_blank" rel="noopener noreferrer" title="Reddit" style="color: #ffffff; background: #ff4500; display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 8px; transition: 0.2s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M14 15.5c-.86.53-1.89.85-3 .89l.52-2.42c1.43-.31 2.44-1.55 2.48-3.02 0-1.74-1.41-3.15-3.15-3.15S7.7 9.21 7.7 10.95c0 .99.47 1.87 1.2 2.42-.42.44-.68 1.05-.68 1.73 0 1.38 1.12 2.5 2.5 2.5 1.14 0 2.11-.77 2.42-1.82l.86.32c.15.06.32-.02.38-.17l.54-1.43zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.45 13.93c0 1.29-1.05 2.34-2.34 2.34-.69 0-1.32-.3-1.76-.78-1.04.74-2.39 1.22-3.87 1.3l.8 3.73c.03.14-.06.28-.2.31-.05.01-.1.01-.15 0l-4.14-.88c-.1-.02-.17-.11-.17-.22l.96-4.51c-1.63-.38-2.82-1.83-2.82-3.57 0-2.01 1.63-3.64 3.64-3.64 1.31 0 2.46.7 3.09 1.75 1.1-.38 2.3-.59 3.55-.59 2.01 0 3.64 1.63 3.64 3.64z"/></svg>
                </a>
            </div>

            <!-- Google Translate Widget (Centered) -->
            <div id="google_translate_element" style="display: flex; align-items: center; justify-content: center; font-size: 13px;"></div>
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
