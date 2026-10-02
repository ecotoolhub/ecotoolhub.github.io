// Eco Tool Hub - Affiliate Products Script (Temu Slider Intact & Digital Guides Restored)

const affiliateData = {
  // --- DIGITAL GUIDES ---
  digital: [
    {
      id: "digital-solar-guide",
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
    }
  ],

  // --- TEMU PHYSICAL PRODUCTS (UNTOUCHED & SAFE) ---
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

// Variable to keep track of the current Temu product in the slider
let currentTemuIndex = 0;

// Function to render the Temu Slider Widget
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
        <button onclick="changeTemuProduct(-1, '${containerId}')" style="flex: 1; background: #334155; color: #ffffff; border: none; padding: 10px; border-radius: 8px; cursor: pointer; font-weight: 600; transition: background 0.2s ease;">❮ Prev</button>
        <button onclick="changeTemuProduct(1, '${containerId}')" style="flex: 1; background: #334155; color: #ffffff; border: none; padding: 10px; border-radius: 8px; cursor: pointer; font-weight: 600; transition: background 0.2s ease;">Next ❯</button>
      </div>
    </div>
  `;
}

// Function to handle Prev/Next button clicks for Temu Slider
window.changeTemuProduct = function(direction, containerId) {
    currentTemuIndex += direction;
    if (currentTemuIndex >= affiliateData.temu.length) {
        currentTemuIndex = 0;
    } else if (currentTemuIndex < 0) {
        currentTemuIndex = affiliateData.temu.length - 1;
    }
    renderTemuSlider(containerId);
};

// Function to render the Digital Guide Widget (Restored)
function renderDigitalWidget(containerId, productId = "digital-solar-guide") {
  const container = document.getElementById(containerId);
  if (!container) return;

  const product = affiliateData.digital.find(p => p.id === productId) || affiliateData.digital[0];

  container.innerHTML = `
    <div style="background: #111827; border: 1px solid #10b981; border-radius: 12px; padding: 18px; color: #ffffff; font-family: system-ui, -apple-system, sans-serif; box-shadow: 0 4px 12px rgba(0,0,0,0.3); box-sizing: border-box; width: 100%;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span style="background: #10b981; color: #000000; font-size: 0.75rem; font-weight: 800; padding: 3px 8px; border-radius: 4px; text-transform: uppercase;">${product.badge}</span>
        <span style="color: #9ca3af; font-size: 0.8rem;">Digital Blueprint</span>
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
      <a href="${product.link}" target="_blank" rel="noopener noreferrer" style="display: block; width: 100%; background: #10b981; color: #000000; text-align: center; font-weight: 700; padding: 12px 0; border-radius: 8px; text-decoration: none; transition: background 0.2s ease; box-sizing: border-box;">
        Download Digital Guide →
      </a>
    </div>
  `;
}

// Auto Initialize Both Temu and Digital Widgets on Page Load
document.addEventListener("DOMContentLoaded", () => {
    // 1. Temu Sliders initialization
    if(document.getElementById("temu-widget-container")) {
       renderTemuSlider("temu-widget-container");
    }
    if(document.getElementById("calculator-temu-widget")) {
        renderTemuSlider("calculator-temu-widget");
    }
    
    // 2. Digital Guides Widget initialization (Restored for all calculator/blog pages)
    if(document.getElementById("calculator-digital-widget")) {
        renderDigitalWidget("calculator-digital-widget", "digital-solar-guide");
    }
    if(document.getElementById("digital-widget-container")) {
        renderDigitalWidget("digital-widget-container", "digital-solar-guide");
    }
});
