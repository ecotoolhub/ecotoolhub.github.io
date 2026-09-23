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
    ],
    "indoor-gardening": [
        {
            title: "The 3-Minute Garden Master Blueprint",
            description: "Fast indoor gardening techniques and high-yield space-saving setups.",
            buttonText: "Get Instant Access",
            link: "http://www.betterdailyguide.site/ds24/5-minute-garden#aff=umer7367"
        },
        {
            title: "Container Vegetable Gardening Handbook",
            description: "Complete guide for balcony, pots, and indoor container organic gardening.",
            buttonText: "Download Guide",
            link: "https://www.checkout-ds24.com/redir/725086/umer7367/"
        },
        {
            title: "The Self-Sufficient Backyard Manual",
            description: "Step-by-step guide for composting, organic soil, and backyard self-reliance.",
            buttonText: "Check Offer",
            link: "https://independentbackyard.com/my-book/#aff=umer7367"
        },
        {
            title: "The Grocery Freedom Garden Blueprint",
            description: "Learn how to grow budget-friendly organic food and kitchen greens at home.",
            buttonText: "Learn More",
            link: "https://buylessmakemore.com/GFG_sales-page.html#aff=umer7367"
        },
        {
            title: "Printable Garden Planner & Tracking Logbook",
            description: "Track plant growth, watering schedules, and indoor garden planning effortlessly.",
            buttonText: "Get Planner",
            link: "https://www.checkout-ds24.com/redir/724875/umer7367/"
        },
        {
            title: "The 5 Foot Farm Micro-Gardening Guide",
            description: "High-yield organic farming blueprint optimized for tiny spaces and balconies.",
            buttonText: "View Blueprint",
            link: "https://cf.5footfarm.com/vsl-v1-live-h3jk4-e4f19-fp-nv#aff=umer7367"
        }
    ],
    "air-quality-health": [
        {
            title: "The Holistic Healing & Herbal Handbook",
            description: "Natural indoor wellness, organic remedies, and holistic health routines.",
            buttonText: "Get Herbal Guide",
            link: "https://www.theherbalhandbook.site/#aff=umer7367"
        },
        {
            title: "Backyard Healing Herbs Complete Guide",
            description: "Learn to cultivate medicinal plants and prepare eco-friendly home remedies.",
            buttonText: "Order Guide",
            link: "https://www.digistore24.com/redir/454227/umer7367/"
        },
        {
            title: "Medicinal Plants Indoor Cultivation Kit",
            description: "Video course and guide for growing air-purifying and medicinal plants indoors.",
            buttonText: "Watch Masterclass",
            link: "https://gardeningkitformedicinalplants-5zp.plannerpack.co#aff=umer7367"
        }
    ]
};

// 1. Static / Refresh Card Function
function loadAffiliateProducts(categoryKey, containerId, index = null) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const products = affiliateData[categoryKey];
    if (!products || products.length === 0) return;

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

// 2. Auto-Sliding Card Function (Rotates every 4 seconds)
function loadAffiliateSlider(categoryKey, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const products = affiliateData[categoryKey];
    if (!products || products.length === 0) return;

    let currentIndex = 0;

    function renderSlide(index) {
        const product = products[index];
        container.innerHTML = `
            <div class="affiliate-slider-card" style="background-color: #0f172a; border: 1px solid #334155; border-radius: 12px; padding: 20px; text-align: center; transition: all 0.5s ease-in-out;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                    <span style="background: #3b82f6; color: white; padding: 3px 8px; font-size: 11px; border-radius: 4px; font-weight: bold;">FEATURED OFFER</span>
                    <span style="color: #94a3b8; font-size: 11px;">${index + 1} / ${products.length}</span>
                </div>
                <h3 style="color: #f8fafc; font-size: 18px; margin-top: 10px; margin-bottom: 8px; min-height: 48px;">${product.title}</h3>
                <p style="color: #94a3b8; font-size: 13px; line-height: 1.5; margin-bottom: 15px; min-height: 40px;">${product.description}</p>
                <a href="${product.link}" target="_blank" style="display: block; background-color: #f59e0b; color: #0f172a; text-decoration: none; padding: 10px; border-radius: 8px; font-weight: bold; transition: background 0.3s;">${product.buttonText}</a>
            </div>
        `;
    }

    renderSlide(currentIndex);

    setInterval(() => {
        currentIndex = (currentIndex + 1) % products.length;
        renderSlide(currentIndex);
    }, 4000);
}
