// Eco Tool Hub - Complete Affiliate Products & Widget Renderer

const affiliateProducts = [
  // --- DIGITAL PRODUCTS ---
  {
    id: "digital-solar-guide",
    type: "digital",
    title: "Off-Grid Solar & Battery System Blueprint (2026 Edition)",
    price: "$27.00",
    originalPrice: "$67.00",
    discount: "SAVE 60%",
    badge: "DIGITAL GUIDE",
    link: "https://www.digistore24.com/redir/452598/digitreams/",
    features: [
      "Instant PDF Download & Interactive Calculator Sheet",
      "Step-by-Step Lithium Battery Sizing Formulas",
      "Inverter & Charge Controller Wiring Schematics"
    ]
  },
  {
    id: "digital-compost-mastery",
    type: "digital",
    title: "Zero-Odor Home Composting Digital Handbook",
    price: "$15.00",
    originalPrice: "$35.00",
    discount: "SAVE 57%",
    badge: "E-BOOK",
    link: "https://www.digistore24.com/redir/452598/digitreams/",
    features: [
      "Optimal C:N Ratio Cheat Sheets (30:1 Rules)",
      "Troubleshooting Rot, Pests & Moisture Control",
      "Printable Moisture & Temperature Log Sheets"
    ]
  },

  // --- PHYSICAL & TEMU PROMO PRODUCTS ---
  {
    id: "solar-generator",
    type: "physical",
    title: "NITEK 9000mAh Solar Generator Kit with USB & LED",
    price: "$30.35",
    originalPrice: "$55.24",
    discount: "SAVE 45%",
    badge: "HOT SELLER",
    link: "https://www.digistore24.com/redir/452598/digitreams/",
    features: [
      "Verified Quality & High Efficiency Solar Panel",
      "Exclusive Promo Discount Applied",
      "Fast Shipping & Direct Buyer Protection"
    ]
  },
  {
    id: "water-timer",
    type: "physical",
    title: "Automated Drip Irrigation Digital Water Timer",
    price: "$19.99",
    originalPrice: "$34.99",
    discount: "SAVE 42%",
    badge: "TOP PICK",
    link: "https://www.digistore24.com/redir/452598/digitreams/",
    features: [
      "Weatherproof LCD Screen Controller",
      "Saves Up to 70% Water in Home Gardens",
      "Compatible with Standard Drip Tubing"
    ]
  },
  {
    id: "air-purifier",
    type: "physical",
    title: "True HEPA Filter Smart Indoor Air Purifier",
    price: "$49.50",
    originalPrice: "$89.99",
    discount: "SAVE 45%",
    badge: "ECO CHOICE",
    link: "https://www.digistore24.com/redir/452598/digitreams/",
    features: [
      "Filters 99.97% Particles & Dust",
      "Ultra-Quiet Sleep Mode (22dB)",
      "Real-time AQI Air Quality Sensor Indicator"
    ]
  }
];

// Complete Widget Renderer Function
function renderAffiliateWidget(containerId, productId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const product = affiliateProducts.find(p => p.id === productId) || affiliateProducts[0];

  const badgeBg = product.type === "digital" ? "#10b981" : "#f59e0b";
  const badgeTextColor = "#000000";
  const buttonBg = product.type === "digital" ? "#10b981" : "#f59e0b";
  const buttonText = product.type === "digital" ? "Download Digital Guide →" : "View Direct Deal →";

  container.innerHTML = `
    <div style="background: #111827; border: 1px solid ${badgeBg}; border-radius: 12px; padding: 18px; color: #ffffff; font-family: system-ui, -apple-system, sans-serif; box-shadow: 0 4px 12px rgba(0,0,0,0.3); box-sizing: border-box; width: 100%;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span style="background: ${badgeBg}; color: ${badgeTextColor}; font-size: 0.75rem; font-weight: 800; padding: 3px 8px; border-radius: 4px; text-transform: uppercase;">${product.badge}</span>
        <span style="color: #9ca3af; font-size: 0.8rem;">Direct Verified Link</span>
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
      <a href="${product.link}" target="_blank" rel="noopener noreferrer" style="display: block; width: 100%; background: ${buttonBg}; color: #000000; text-align: center; font-weight: 700; padding: 10px 0; border-radius: 8px; text-decoration: none; transition: background 0.2s ease; box-sizing: border-box;">
        ${buttonText}
      </a>
    </div>
  `;
}

// Auto Initialize Widget on Load
document.addEventListener("DOMContentLoaded", () => {
  renderAffiliateWidget("affiliate-widget-container", "digital-solar-guide");
  renderAffiliateWidget("affiliate-sidebar-container", "solar-generator");
});
