// Temu Settings & Calculation Logic
const pkrToUsdRate = 278;

// Direct Fail-Safe Price Calculator
function calculatePrices(rawPrice) {
    if (!rawPrice) {
        return { dealPrice: "$12.99", originalPrice: "$24.99", savePct: "SAVE 48%" };
    }
    
    let cleanNum = String(rawPrice).replace(/[^0-9]/g, '');
    let pkr = parseInt(cleanNum, 10);
    
    if (isNaN(pkr) || pkr <= 0) {
        return { dealPrice: "$14.50", originalPrice: "$28.00", savePct: "SAVE 48%" };
    }

    let dealUsd = (pkr / pkrToUsdRate).toFixed(2);
    let origUsd = (parseFloat(dealUsd) * 1.82).toFixed(2);

    return {
        dealPrice: "$" + dealUsd,
        originalPrice: "$" + origUsd,
        savePct: "SAVE 45%"
    };
}

// Full Temu Solar Physical Products Pool
const temuData = {
    "solar-energy": [
        {
            title: "NITEK 9000mAh Solar Generator Kit with USB Charger & LED Light",
            rawPrice: "Rs.8,437",
            link: "https://temu.to/k/e10mj3jtsqe",
            badge: "HOT SELLER"
        },
        {
            title: "A Portable 6V Rechargeable Solar Panel Power Generation System",
            rawPrice: "Rs.8,246",
            link: "https://temu.to/k/edpvs4ourjg",
            badge: "TOP RATED"
        },
        {
            title: "2 to 4/6/8 Y-Branch Parallel Solar Panel Connectors & Splitters",
            rawPrice: "Rs.3,115",
            link: "https://temu.to/k/es8dyxlla44",
            badge: "BEST VALUE"
        },
        {
            title: "500W Continuous Power Inverter, 50W Solar Panel & 50A Controller Kit",
            rawPrice: "Rs.40,865",
            link: "https://temu.to/k/e1qqwds8fqz",
            badge: "COMPLETE KIT"
        },
        {
            title: "22.5W Fast Charging Power Bank DIY Case (6x21700 QC3.0)",
            rawPrice: "Rs.8,500",
            link: "https://temu.to/k/eg1rvdpb47o",
            badge: "FAST CHARGE"
        },
        {
            title: "Heavy-Duty Wireless Heating Lunch Box with 12000mAh Battery",
            rawPrice: "Rs.34,155",
            link: "https://temu.to/k/e1b1y7qqd5r",
            badge: "POPULAR"
        },
        {
            title: "1pc 100A Solar Charge Controller 12V/24V Auto Regulator",
            rawPrice: "Rs.2,230",
            link: "https://temu.to/k/eych3uo9xgj",
            badge: "SMART REGULATOR"
        },
        {
            title: "120A MPPT Solar Charge Controller 60A (12V/24V/36V/48V Auto)",
            rawPrice: "Rs.16,368",
            link: "https://temu.to/k/eowfmxnimjm",
            badge: "HIGH EFFICIENCY"
        },
        {
            title: "150A 7200W Max MPPT Solar Controller with Smart Cooling Fan",
            rawPrice: "Rs.22,190",
            link: "https://temu.to/k/e17hjx30hm1",
            badge: "HEAVY DUTY"
        },
        {
            title: "Solar Controller 12V/24V/36V/48V Parameter Adjustable LCD Display",
            rawPrice: "Rs.8,773",
            link: "https://temu.to/k/e57pzq4untn",
            badge: "LCD DISPLAY"
        },
        {
            title: "Portable Power Inverter 300W DC 12V to AC 220V Dual USB",
            rawPrice: "Rs.19,643",
            link: "https://temu.to/k/emzahb8y87c",
            badge: "DUAL USB"
        },
        {
            title: "100A 80A 60A MPPT Solar Charge Controller LCD Display Regulator",
            rawPrice: "Rs.8,635",
            link: "https://temu.to/k/eule1hdiow9",
            badge: "AUTO DETECT"
        },
        {
            title: "1 Pack Solar Outdoor Motion Sensor Light 106 Super Bright LEDs IP65",
            rawPrice: "Rs.9,020",
            link: "https://temu.to/k/e4s18njnz03",
            badge: "MOTION SENSOR"
        },
        {
            title: "504 LED Solar Street Light with Remote Control & Motion Sensor",
            rawPrice: "Rs.14,433",
            link: "https://temu.to/k/e3pabdjr6w2",
            badge: "SUPER BRIGHT"
        },
        {
            title: "High Brightness Commercial Solar Street Light Dusk to Dawn Sensor",
            rawPrice: "Rs.40,595",
            link: "https://temu.to/k/ebpwlken46k",
            badge: "COMMERCIAL GRADE"
        },
        {
            title: "4pcs Solar Wall Light with Motion Sensor Remote Control IP65",
            rawPrice: "Rs.8,573",
            link: "https://temu.to/k/epq3ne35xhh",
            badge: "4-PACK DEAL"
        },
        {
            title: "Solar-Powered Outdoor Motion Sensor Floodlight 74 LEDs 270 deg Angle",
            rawPrice: "Rs.4,980",
            link: "https://temu.to/k/eexss92yxah",
            badge: "WIDE ANGLE"
        },
        {
            title: "172 LED Solar Outdoor Security Motion Sensor Flood Light IP65",
            rawPrice: "Rs.6,828",
            link: "https://temu.to/k/eus08rww2z9",
            badge: "WATERPROOF"
        },
        {
            title: "10 Pairs Solar Plug MC4 Connectors Male/Female Photovoltaic Plug",
            rawPrice: "Rs.2,832",
            link: "https://temu.to/k/e6r8bm7em5x",
            badge: "EASY INSTALL"
        },
        {
            title: "4/8 Adjustable Solar Tilt Mounting Bracket Bases 10 to 60 deg",
            rawPrice: "Rs.19,083",
            link: "https://temu.to/k/egmxf37l195",
            badge: "ROOF MOUNT"
        },
        {
            title: "104cm Adjustable Solar Panel Tilt Mounting Brackets for RVs/Roofs",
            rawPrice: "Rs.15,522",
            link: "https://temu.to/k/e09le8jeqdi",
            badge: "FOLDABLE DESIGN"
        },
        {
            title: "11.8ft Solar Panel Cleaning Kit with Extendable Pole Tool",
            rawPrice: "Rs.29,700",
            link: "https://temu.to/k/ejuijnk2fkq",
            badge: "MAINTENANCE KIT"
        },
        {
            title: "4-Inch Wall/Glass Mounted Exhaust Ventilation Fan 15W 220V",
            rawPrice: "Rs.7,704",
            link: "https://temu.to/k/ebe0sp4aoza",
            badge: "LOW POWER"
        },
        {
            title: "Solar-Powered Exhaust Fan Featuring 17W/20W Panel & 8-Inch Fan",
            rawPrice: "Rs.25,554",
            link: "https://temu.to/k/e0tsax0ike9",
            badge: "HIGH SPEED"
        },
        {
            title: "17W Solar Powered Chicken Coop Ventilation System & 8-Inch Fan",
            rawPrice: "Rs.22,470",
            link: "https://temu.to/k/e23xnwagymy",
            badge: "ECO VENTILATION"
        }
    ]
};

// Slider State Tracker
const sliderStates = {};

// Render Temu Slider Function (CTA & Text Highlights Focused)
function renderTemuSlider(categoryKey, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const products = temuData[categoryKey];
    if (!products || products.length === 0) return;

    if (sliderStates[containerId] === undefined) {
        sliderStates[containerId] = 0;
    }

    const index = sliderStates[containerId];
    const item = products[index];
    const priceInfo = calculatePrices(item.rawPrice);
    const itemBadge = item.badge || "RECOMMENDED DEAL";

    container.innerHTML = `
        <div class="temu-slider-card" style="background-color: #0f172a; border: 2px solid #f97316; border-radius: 14px; padding: 22px; text-align: center; position: relative; box-shadow: 0 8px 25px rgba(249, 115, 22, 0.2);">
            
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
                <span style="background: #f97316; color: white; padding: 4px 10px; font-size: 11px; border-radius: 6px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px;">&#9889; ` + itemBadge + `</span>
                <span style="color: #94a3b8; font-size: 12px; font-weight: 700;">Item ` + (index + 1) + ` of ` + products.length + `</span>
            </div>
            
            <div style="background: rgba(30, 41, 59, 0.7); border: 1px solid #334155; border-radius: 10px; padding: 16px; margin-bottom: 16px;">
                <h3 style="color: #f8fafc; font-size: 15px; font-weight: 700; margin: 0 0 10px 0; line-height: 1.5; min-height: 45px;">` + item.title + `</h3>
                
                <div style="display: flex; align-items: center; justify-content: center; gap: 10px; margin-top: 8px;">
                    <span style="color: #10b981; font-size: 26px; font-weight: 800;">` + priceInfo.dealPrice + `</span>
                    <span style="color: #94a3b8; font-size: 14px; text-decoration: line-through;">` + priceInfo.originalPrice + `</span>
                    <span style="background: rgba(16, 185, 129, 0.2); color: #10b981; font-size: 11px; font-weight: 800; padding: 3px 8px; border-radius: 4px;">` + priceInfo.savePct + `</span>
                </div>
            </div>

            <div style="text-align: left; background: #1e293b; border-radius: 8px; padding: 12px 16px; margin-bottom: 18px; font-size: 12px; color: #cbd5e1; line-height: 1.8;">
                <div style="display: flex; align-items: center; gap: 8px;"><span style="color: #10b981; font-weight: bold;">&#10003;</span> Verified Quality & High Efficiency</div>
                <div style="display: flex; align-items: center; gap: 8px;"><span style="color: #10b981; font-weight: bold;">&#10003;</span> Exclusive Discount via Temu Promo</div>
                <div style="display: flex; align-items: center; gap: 8px;"><span style="color: #10b981; font-weight: bold;">&#10003;</span> Fast Shipping & Buyer Protection</div>
            </div>
            
            <a href="` + item.link + `" target="_blank" style="display: block; background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); color: white; text-decoration: none; padding: 12px; border-radius: 8px; font-weight: 800; font-size: 15px; letter-spacing: 0.3px; margin-bottom: 14px; box-shadow: 0 4px 12px rgba(249, 115, 22, 0.4); transition: transform 0.2s;">
                View Deal on Temu &rarr;
            </a>
            
            <div style="display: flex; gap: 10px; justify-content: center;">
                <button onclick="changeTemuSlide('` + categoryKey + `', '` + containerId + `', -1)" style="flex: 1; background: #334155; color: white; border: 1px solid #475569; padding: 9px; border-radius: 6px; cursor: pointer; font-weight: 700; font-size: 13px;">&#10094; Prev</button>
                <button onclick="changeTemuSlide('` + categoryKey + `', '` + containerId + `', 1)" style="flex: 1; background: #334155; color: white; border: 1px solid #475569; padding: 9px; border-radius: 6px; cursor: pointer; font-weight: 700; font-size: 13px;">Next &#10095;</button>
            </div>
        </div>
    `;
}

// Next / Prev Actions
function changeTemuSlide(categoryKey, containerId, direction) {
    const products = temuData[categoryKey];
    if (!products || products.length === 0) return;

    let currentIndex = sliderStates[containerId] || 0;
    currentIndex += direction;

    if (currentIndex >= products.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = products.length - 1;
    }

    sliderStates[containerId] = currentIndex;
    renderTemuSlider(categoryKey, containerId);
}
