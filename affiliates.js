const affiliateData = {
    "solar-energy": [
        {
            title: "Complete Home Solar DIY Power Blueprint",
            description: "Step-by-step master guide for designing and installing efficient off-grid solar energy systems.",
            buttonText: "Get Instant Access",
            link: "https://easydiypowerplan4all.com/index_dg24/#aff=umer7367"
        },
        {
            title: "Advanced Solar Innovator Installation Guide",
            description: "Professional blueprints and cost-saving strategies for maximum home solar power generation.",
            buttonText: "Download Guide",
            link: "https://thesolarinnovator.com/index-solar-innovator-proof-new-auto.html#aff=umer7367"
        }
    ],
    "carbon-footprint": [
        {
            title: "SmartWaterBox Sustainable Off-Grid System",
            description: "Eco-friendly water conservation and independent supply guide for modern sustainable homes.",
            buttonText: "Check Offer",
            link: "https://feelbetter-today.com/free-water#aff=umer7367"
        },
        {
            title: "Aqua Tower Eco-Water Generation System",
            description: "Advanced independent water generation and green living survival blueprint.",
            buttonText: "Learn More",
            link: "https://www.checkout-ds24.com/redir/732876/umer7367/"
        }
    ]
};

function loadAffiliateProducts(categoryKey, containerId, index = null) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const products = affiliateData[categoryKey];
    if (!products || products.length === 0) return;

    // Agar index diya gaya hai toh wo product aayegi, warna random
    const selectedProduct = (index !== null && products[index]) ? products[index] : products[Math.floor(Math.random() * products.length)];

    container.innerHTML = `
        <div class="affiliate-card" style="background-color: #0f172a; border: 1px dashed #10b981; border-radius: 12px; padding: 20px; text-align: center;">
            <span style="background: #10b981; color: white; padding: 3px 8px; font-size: 11px; border-radius: 4px; font-weight: bold;">RECOMMENDED RESOURCE</span>
            <h3 style="color: #f8fafc; font-size: 18px; margin-top: 15px; margin-bottom: 8px;">${selectedProduct.title}</h3>
            <p style="color: #94a3b8; font-size: 13px; line-height: 1.5; margin-bottom: 15px;">${selectedProduct.description}</p>
            <a href="${selectedProduct.link}" target="_blank" class="affiliate-btn" style="display: block; background-color: #10b981; color: #0f172a; text-decoration: none; padding: 10px; border-radius: 8px; font-weight: bold; transition: background 0.3s;">${selectedProduct.buttonText}</a>
        </div>
    `;
}
