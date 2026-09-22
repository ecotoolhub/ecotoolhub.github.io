const affiliateData = {
    "solar-energy": [
        {
            title: "Easy DIY Power Plan | E-books",
            description: "Complete home solar setup and renewable energy guide with 85% commission.",
            buttonText: "Get Instant Access",
            link: "https://easydiypowerplan4all.com/index_dg24/#aff=umer7367"
        },
        {
            title: "Solar Innovator – MASSIVE OFFER",
            description: "Direct solar energy and home installation blueprint for green living.",
            buttonText: "Download Guide",
            link: "https://thesolarinnovator.com/index-solar-innovator-proof-new-auto.html#aff=umer7367"
        }
    ],
    "carbon-footprint": [
        {
            title: "New Water Offer: SmartWaterBox",
            description: "Sustainable off-grid water system and conservation guide.",
            buttonText: "Check Offer",
            link: "https://feelbetter-today.com/free-water#aff=umer7367"
        },
        {
            title: "NEW: Aqua Tower - Blockbuster Offer",
            description: "Eco-friendly water generation and independent survival system.",
            buttonText: "Learn More",
            link: "https://www.checkout-ds24.com/redir/732876/umer7367/"
        }
    ]
};

function loadAffiliateProducts(categoryKey, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const products = affiliateData[categoryKey];
    if (!products || products.length === 0) return;

    const selectedProduct = products[Math.floor(Math.random() * products.length)];

    container.innerHTML = `
        <div class="affiliate-card" style="border: 1px solid #ddd; padding: 15px; border-radius: 8px; background: #f9f9f9; margin-bottom: 20px;">
            <h4 style="color: #2e7d32; margin-bottom: 8px;">${selectedProduct.title}</h4>
            <p style="font-size: 14px; color: #555; margin-bottom: 12px;">${selectedProduct.description}</p>
            <a href="${selectedProduct.link}" target="_blank" class="aff-btn" style="background: #2e7d32; color: white; padding: 8px 15px; text-decoration: none; border-radius: 4px; display: inline-block; font-weight: bold;">${selectedProduct.buttonText}</a>
        </div>
    `;
}
