// Eco Tool Hub - Direct Affiliate Links & Product Widget Script

const affiliateProducts = [
  {
    id: "solar-generator",
    title: "NITEK 9000mAh Portable Solar Generator Kit",
    price: "$30.35",
    originalPrice: "$55.24",
    discount: "SAVE 45%",
    badge: "HOT SELLER",
    // Direct Official Affiliate Link
    link: "https://www.digistore24.com/redir/452598/digitreams/",
    features: [
      "Verified Quality & High Efficiency",
      "Exclusive Promo Access",
      "Fast Shipping & Buyer Protection"
    ]
  },
  {
    id: "water-timer",
    title: "Automated Drip Irrigation Smart Water Timer",
    price: "$19.99",
    originalPrice: "$34.99",
    discount: "SAVE 42%",
    badge: "TOP PICK",
    // Direct Official Affiliate Link
    link: "https://www.digistore24.com/redir/452598/digitreams/",
    features: [
      "Weatherproof Digital Display",
      "Save Up to 70% Water Usage",
      "Easy Setup for Home Gardens"
    ]
  },
  {
    id: "air-purifier",
    title: "HEPA Filter Smart Air Purifier & Monitor",
    price: "$49.50",
    originalPrice: "$89.99",
    discount: "SAVE 45%",
    badge: "ECO CHOICE",
    // Direct Official Affiliate Link
    link: "https://www.digistore24.com/redir/452598/digitreams/",
    features: [
      "Removes 99.97% Airborne Particles",
      "Ultra-Quiet Night Sleep Mode",
      "Real-Time AQI Indicator"
    ]
  }
];

// Render Function for Sidebar/Article Widgets
function renderAffiliateWidget(containerId, productId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const product = affiliateProducts.find(p => p.id === productId) || affiliateProducts[0];

  container.innerHTML = `
    <div style="background: #111827; border: 1px solid #f59e0b; border-radius: 12px; padding: 18px; color: #ffffff; font-family: system-ui, -apple-system, sans-serif; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span style="background: #f59e0b; color: #000000; font-size: 0.75rem; font-weight: 800; padding: 3px 8px; border-radius: 4px; text-transform: uppercase;">${product.badge}</span>
        <span style="color: #9ca3af; font-size: 0.8rem;">Direct Verified Offer</span>
      </div>
      <h4 style="margin: 0 0 10px 0; font-size: 1rem; color: #f3f4f6; line-height: 1.4;">${product.title}</h4>
      <div style="display: flex; align-items: baseline; gap: 8px; margin-bottom: 12px;">
        <span style="font-size: 1.5rem; font-weight: 800; color: #10b981;">${product.price}</span>
        <span style="font-size: 0.9rem; color: #6b7280; text-decoration: line-through;">${product.originalPrice}</span>
        <span style="font-size: 0.75rem; color: #10b981; background: rgba(16,185,129,0.1); padding: 2px 6px; border-radius: 4px;">${product.discount}</span>
      </div>
      <ul style="padding-left: 18px; margin: 0 0 16px 0; color: #d1d5db; font-size: 0.85rem; line-height: 1.6;">
        ${product.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
      <a href="${product.link}" target="_blank" rel="noopener noreferrer" style="display: block; width: 100%; background: #f59e0b; color: #000000; text-align: center; font-weight: 700; padding: 10px 0; border-radius: 8px; text-decoration: none; transition: background 0.2s ease;">
        View Direct Deal →
      </a>
    </div>
  `;
}

// Auto-initialize if container exists
document.addEventListener("DOMContentLoaded", () => {
  renderAffiliateWidget("affiliate-widget-container", "solar-generator");
});
