// Eco Tool Hub - Affiliate Products Script (Temu Physical Products Only)

const affiliateData = {
  // --- TEMU PHYSICAL PRODUCTS (SLIDER) ---
  temu: [
    {
      id: "solar-generator",
      title: "NITEK 9000mAh Solar Generator Kit with USB Charger and LED Light",
      price: "$30.35",
      originalPrice: "$55.24",
      discount: "SAVE 45%",
      badge: "HOT SELLER",
      link: "https://temu.to/m/YOUR_DIRECT_TEMU_LINK_HERE_1",
      features: [
        "Verified Quality & High Efficiency",
        "Exclusive Discount via Temu Promo",
        "Fast Shipping & Buyer Protection"
      ]
    },
    {
      id: "water-timer",
      title: "Automated Drip Irrigation Digital Water Timer",
      price: "$19.99",
      originalPrice: "$34.99",
      discount: "SAVE 42%",
      badge: "TOP PICK",
      link: "https://temu.to/m/YOUR_DIRECT_TEMU_LINK_HERE_2",
      features: [
        "Weatherproof LCD Screen Controller",
        "Saves Up to 70% Water in Home Gardens",
        "Compatible with Standard Drip Tubing"
      ]
    },
    {
      id: "clamp-meter",
      title: "UNI-T Digital Clamp Meter Automatic Range High-Precision Ammeter",
      price: "$50.28",
      originalPrice: "$89.99",
      discount: "SAVE 44%",
      badge: "PROFESSIONAL",
      link: "https://temu.to/m/YOUR_DIRECT_TEMU_LINK_HERE_3",
      features: [
        "Verified Quality & High Efficiency",
        "Exclusive Discount via Temu Promo",
        "Fast Shipping & Buyer Protection"
      ]
    }
  ]
};

let currentTemuIndex = 0;

// Render Temu Slider
function renderTemuSlider(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const product = affiliateData.temu[currentTemuIndex];
  const totalItems = affiliateData.temu.length;

  container.innerHTML = `
    <div style="background: #111827; border: 1px solid #f59e0b; border-radius: 12px; padding: 18px; color: #ffffff; font-family: system-ui, -apple-system, sans-serif; box-shadow: 0 4px 12px rgba(0,0,0,0.3); box-sizing: border-box; width: 100%;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span style="background: #f59e0b; color: #000000; font-size: 0.75rem; font-weight: 800; padding: 3px 8px; border-radius: 4px; text-transform: uppercase;">${product.badge}</span>
        <span style="color: #9ca3af; font-size: 0.8rem;">Item ${currentTemuIndex + 1} of ${totalItems}</span>
      </div>
      <h4 style="margin: 0 0 10px 0; font-size: 1rem; color: #f3f4f6; line-height: 1.4;">${product.title}</h4>
      <div style="display: flex; align-items: baseline; gap: 8px; margin-bottom: 12px;">
        <span style="font-size: 1.5rem; font-weight: 800; color: #10b981;">${product.price}</span>
        <span style="font-size: 0.9rem; color: #6b7280; text-decoration: line-through;">${product.originalPrice}</span>
        <span style="font-size: 0.75rem; color: #10b981; background: rgba(16,185,129,0.1); padding: 2px 6px; border-radius: 4px;">${product.discount}</span>
      </div>
      <div style="background: #1e293b; border-radius: 8px; padding: 12px; margin-bottom: 16px;">
          <ul style="padding-left: 18px; margin: 0; color: #10b981; font-size: 0.85rem; line-height: 1.6; list-style-type: '✓ ';">
            ${product.features.map(f => `<li><span style="color: #d1d5db;">${f}</span></li>`).join('')}
          </ul>
      </div>
      <a href="${product.link}" target="_blank" rel="noopener noreferrer" style="display: block; width: 100%; background: #ea580c; color: #ffffff; text-align: center; font-weight: 700; padding: 12px 0; border-radius: 8px; text-decoration: none; margin-bottom: 12px; transition: background 0.2s ease; box-sizing: border-box;">
        View Deal on Temu →
      </a>
      <div style="display: flex; gap: 10px;">
        <button onclick="changeTemuProduct(-1, '${containerId}')" style="flex: 1; background: #334155; color: #ffffff; border: none; padding: 10px; border-radius: 8px; cursor: pointer; font-weight: 600;">❮ Prev</button>
        <button onclick="changeTemuProduct(1, '${containerId}')" style="flex: 1; background: #334155; color: #ffffff; border: none; padding: 10px; border-radius: 8px; cursor: pointer; font-weight: 600;">Next ❯</button>
      </div>
    </div>
  `;
}

window.changeTemuProduct = function(direction, containerId) {
    currentTemuIndex += direction;
    if (currentTemuIndex >= affiliateData.temu.length) currentTemuIndex = 0;
    else if (currentTemuIndex < 0) currentTemuIndex = affiliateData.temu.length - 1;
    renderTemuSlider(containerId);
};

// Auto Initialize Temu Widgets on Page Load
document.addEventListener("DOMContentLoaded", () => {
    if(document.getElementById("temu-widget-container")) renderTemuSlider("temu-widget-container");
    if(document.getElementById("calculator-temu-widget")) renderTemuSlider("calculator-temu-widget");
});
