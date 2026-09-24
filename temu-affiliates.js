// Temu Global Settings & Conversion Setup
let pkrToUsdRate = 278; // Standard conversion rate (1 USD = 278 PKR)
let defaultCurrencySymbol = '$';

// Auto-detect visitor IP location
async function detectUserLocation() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        // If user is from Pakistan (PK) or outside, default to USD ($)
        if (data.country_code === 'PK') {
            defaultCurrencySymbol = '$';
        } else {
            defaultCurrencySymbol = '$'; // Global fallback USD
        }
    } catch (error) {
        defaultCurrencySymbol = '$';
    }
}

// Convert PKR price string (e.g., "Rs.8,437") into USD ($)
function formatPriceToUSD(pkrString) {
    if (!pkrString) return "$0.00";
    
    // Extract numbers from string
    let numericValue = parseFloat(pkrString.toString().replace(/[^0-9.]/g, ''));
    
    if (isNaN(numericValue)) return pkrString;

    // Convert PKR to USD if input is in PKR range (> 100)
    if (numericValue > 100) {
        let usdValue = (numericValue / pkrToUsdRate).toFixed(2);
        return `$${usdValue}`;
    }
    
    return `$${numericValue.toFixed(2)}`;
}

// Temu Physical Product Pool
const temuData = {
    "solar-energy": [
        {
            title: "NITEK 9000mAh Solar Generator Kit - Portable Energy System",
            rawPrice: "Rs.8,437",
            link: "https://temu.to/k/e10mj3jtsqe",
            image: "https://img.kwcdn.com/product/open/2023-08-15/example-solar.jpg"
        }
    ],
    "indoor-gardening": [],
    "carbon-footprint": [],
    "air-quality-health": []
};

// Render Temu Physical Product Card
function loadTemuProduct(categoryKey, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const products = temuData[categoryKey];
    if (!products || products.length === 0) return;

    const item = products[Math.floor(Math.random() * products.length)];
    const displayPrice = formatPriceToUSD(item.rawPrice);

    container.innerHTML = `
        <div class="temu-card" style="background-color: #0f172a; border: 1px solid #f97316; border-radius: 12px; padding: 15px; text-align: center; margin-top: 15px;">
            <span style="background: #f97316; color: white; padding: 2px 8px; font-size: 10px; border-radius: 4px; font-weight: bold; text-transform: uppercase;">Temu Hot Deal</span>
            <h4 style="color: #f8fafc; font-size: 14px; margin: 10px 0 6px 0; line-height: 1.4;">${item.title}</h4>
            <div style="margin-bottom: 10px;">
                <span style="color: #10b981; font-size: 18px; font-weight: bold;">${displayPrice}</span>
            </div>
            <a href="${item.link}" target="_blank" style="display: block; background-color: #f97316; color: white; text-decoration: none; padding: 9px; border-radius: 6px; font-weight: bold; font-size: 13px;">View Deal on Temu</a>
        </div>
    `;
}

// Initialize IP check on load
detectUserLocation();
