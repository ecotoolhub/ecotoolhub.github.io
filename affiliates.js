// Digital Affiliate Products Database & Loader
const digitalProducts = {
    "solar-energy": {
        title: "Complete Home Solar DIY Power Blueprint",
        description: "Step-by-step master guide for designing and installing efficient off-grid solar energy systems.",
        link: "https://bit.ly/3mxP7cR",
        cta: "Get Instant Access"
    },
    "indoor-gardening": {
        title: "The Holistic Healing & Herbal Handbook",
        description: "Natural indoor wellness, organic remedies, and holistic health routines.",
        link: "https://bit.ly/3mxP7cR",
        cta: "Get Herbal Guide"
    },
    "compost-calculator": {
        title: "The Organic Composting & Soil Mastery Guide",
        description: "Advanced blueprint for fast organic decomposition, worm farming, and high-yield nutrient soil creation.",
        link: "https://bit.ly/3mxP7cR",
        cta: "Get Composting Guide"
    }
};

function loadAffiliateProducts(categoryKey, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let product = digitalProducts[categoryKey] || digitalProducts["solar-energy"];

    container.innerHTML = `
        <div style="background-color: #1e293b; border: 1px solid #334155; border-radius: 16px; padding: 25px; box-shadow: 0 10px 25px rgba(0,0,0,0.4); text-align: center;">
            <span style="background: rgba(16, 185, 129, 0.2); color: #10b981; padding: 4px 10px; font-size: 11px; border-radius: 6px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px;">RECOMMENDED RESOURCE</span>
            <h3 style="color: #f8fafc; font-size: 18px; margin: 15px 0 10px 0;">` + product.title + `</h3>
            <p style="color: #94a3b8; font-size: 13px; line-height: 1.5; margin-bottom: 20px;">` + product.description + `</p>
            <a href="` + product.link + `" target="_blank" style="display: block; background-color: #10b981; color: white; text-decoration: none; padding: 12px; border-radius: 8px; font-weight: bold; font-size: 15px; transition: background 0.3s;">` + product.cta + `</a>
        </div>
    `;
}
