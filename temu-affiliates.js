// Temu Settings & Calculation Logic
const pkrToUsdRate = 278;

// Direct Fail-Safe Price Calculator
function calculatePrices(rawPrice) {
    if (!rawPrice) {
        return { dealPrice: "$12.99", originalPrice: "$24.99", savePct: "SAVE 48%" };
    }
    
    // Extract numbers only
    let cleanNum = String(rawPrice).replace(/[^0-9]/g, '');
    let pkr = parseInt(cleanNum, 10);
    
    if (isNaN(pkr) || pkr <= 0) {
        return { dealPrice: "$14.50", originalPrice: "$28.00", savePct: "SAVE 48%" };
    }

    let dealUsd = (pkr / pkrToUsdRate).toFixed(2);
    let origUsd = (dealUsd * 1.82).toFixed(2);

    return {
        dealPrice: `$${dealUsd}`,
        originalPrice: `$${origUsd}`,
        savePct: `SAVE 45%`
    };
}

// Direct Working Solar Images Pool
const defaultSolarImg = "https://images.unsplash.com/photo-1509391365360-2e959784a276?w=600&auto=format&fit=crop&q=80";

// Full Temu Solar Physical Products Pool
const temuData = {
    "solar-energy": [
        {
            title: "NITEK 9000mAh Solar Generator Kit with USB Charger & LED Light",
            rawPrice: "Rs.8,437",
            link: "https://temu.to/k/e10mj3jtsqe",
            image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?w=600&auto=format&fit=crop&q=80"
        },
        {
            title: "A Portable 6V Rechargeable Solar Panel Power Generation System",
            rawPrice: "Rs.8,246",
            link: "https://temu.to/k/edpvs4ourjg",
            image: "https://images.unsplash.com/photo-1508873696983-2df515122519?w=600&auto=format&fit=crop&q=80"
        },
        {
            title: "2 to 4/6/8 Y-Branch Parallel Solar Panel Connectors & Splitters",
            rawPrice: "Rs.3,115",
            link: "https://temu.to/k/es8dyxlla44",
            image: "https://images.unsplash.com/photo-1548611716-30018596f2a2?w=600&auto=format&fit=crop&q=80"
        },
        {
            title: "500W Continuous Power Inverter, 50W Solar Panel & 50A Controller Kit",
            rawPrice: "Rs.40,865",
            link: "https://temu.to/k/e1qqwds8fqz",
            image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600&auto=format&fit=crop&q=80"
        },
        {
            title: "22.5W Fast Charging Power Bank DIY Case (6x21700 QC3.0)",
            rawPrice: "Rs.8,500",
            link: "https://temu.to/k/eg1rvdpb47o",
            image: "https://images.unsplash.com/photo-1609592424109-dd9892f1b177?w=600&auto=format&fit=crop&q=80"
        },
        {
            title: "Heavy-Duty Wireless Heating Lunch Box with 12000mAh Battery",
            rawPrice: "Rs.34,155",
            link: "https://temu.to/k/e1b1y7qqd5r",
            image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80"
        },
        {
            title: "1pc 100A Solar Charge Controller 12V/24V Auto Regulator",
            rawPrice: "Rs.2,230",
            link: "https://temu.to/k/eych3uo9xgj",
            image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?w=600&auto=format&fit=crop&q=80"
        },
        {
            title: "120A MPPT Solar Charge Controller 60A (12V/24V/36V/48V Auto)",
            rawPrice: "Rs.16,368",
            link: "https://temu.to/k/eowfmxnimjm",
            image: "https://images.unsplash.com/photo-1508873696983-2df515122519?w=600&auto=format&fit=crop&q=80"
        },
        {
            title: "150A 7200W Max MPPT Solar Controller with Smart Cooling Fan",
            rawPrice: "Rs.22,190",
            link: "https://temu.to/k/e17hjx30hm1",
            image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600&auto=format&fit=crop&q=80"
        },
        {
            title: "Solar Controller 12V/24V/36V/48V Parameter Adjustable LCD Display",
            rawPrice: "Rs.8,773",
            link: "https://temu.to/k/e57pzq4untn",
            image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?w=600&auto=format&fit=crop&q=80"
        },
        {
            title: "Portable Power Inverter 300W DC 12V to AC 220V Dual USB",
            rawPrice: "Rs.19,643",
            link: "https://temu.to/k/emzahb8y87c",
            image: "https://images.unsplash.com/photo-1609592424109-dd9892f1b177?w=600&auto=format&fit=crop&q=80"
        },
        {
            title: "100A 80A 60A MPPT Solar Charge Controller LCD Display Regulator",
            rawPrice: "Rs.8,635",
            link: "https://temu.to/k/eule1hdiow9",
            image: "https://images.unsplash.com/photo-1508873696983-2df515122519?w=600&auto=format&fit=crop&q=80"
        },
        {
            title: "1 Pack Solar Outdoor Motion Sensor Light 106 Super Bright LEDs IP65",
            rawPrice: "Rs.9,020",
            link: "https://temu.to/k/e4s18njnz03",
            image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&auto=format&fit=crop&q=80"
        },
        {
            title: "504 LED Solar Street Light with Remote Control & Motion Sensor",
            rawPrice: "Rs.14,433",
            link: "https://temu.to/k/e3pabdjr6w2",
            image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&auto=format&fit=crop&q=80"
        },
        {
            title: "High Brightness Commercial Solar Street Light Dusk to Dawn Sensor",
            rawPrice: "Rs.40,595",
            link: "https://temu.to/k/ebpwlken46k",
            image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&auto=format&fit=crop&q=80"
        },
        {
            title: "4pcs Solar Wall Light with Motion Sensor Remote Control IP65",
            rawPrice: "Rs.8,573",
            link: "https://temu.to/k/epq3ne35xhh",
            image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&auto=format&fit=crop&q=80"
        },
        {
            title: "Solar-Powered Outdoor Motion Sensor Floodlight 74 LEDs 270° Angle",
            rawPrice: "Rs.4,980",
            link: "https://temu.to/k/eexss92yxah",
            image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&auto=format&fit=crop&q=80"
        },
        {
            title: "172 LED Solar Outdoor Security Motion Sensor Flood Light IP65",
            rawPrice: "Rs.6,828",
            link: "https://temu.to/k/eus08rww2z9",
            image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&auto=format&fit=crop&q=80"
        },
        {
            title: "10 Pairs Solar Plug MC4 Connectors Male/Female Photovoltaic Plug",
            rawPrice: "Rs.2,832",
            link: "https://temu.to/k/e6r8bm7em5x",
            image: "https://images.unsplash.com/photo-1548611716-30018596f2a2?w=600&auto=format&fit=crop&q=80"
        },
        {
            title: "4/8 Adjustable Solar Tilt Mounting Bracket Bases 10° to 60°",
            rawPrice: "Rs.19,083",
            link: "https://temu.to/k/egmxf37l195",
            image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600&auto=format&fit=crop&q=80"
        },
        {
            title: "104cm Adjustable Solar Panel Tilt Mounting Brackets for RVs/Roofs",
            rawPrice: "Rs.15,522",
            link: "https://temu.to/k/e09le8jeqdi",
            image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600&auto=format&fit=crop&q=80"
        },
        {
            title: "11.8ft Solar Panel Cleaning Kit with Extendable Pole Tool",
            rawPrice: "Rs.29,700",
            link: "https://temu.to/k/ejuijnk2fkq",
            image: "https://images.unsplash.com/photo-1508873696983-2df515122519?w=600&auto=format&fit=crop&q=80"
        },
        {
            title: "4-Inch Wall/Glass Mounted Exhaust Ventilation Fan 15W 220V",
            rawPrice: "Rs.7,704",
            link: "https://temu.to/k/ebe0sp4aoza",
            image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80"
        },
        {
            title: "Solar-Powered Exhaust Fan Featuring 17W/20W Panel & 8-Inch Fan",
            rawPrice: "Rs.25,554",
            link: "https://temu.to/k/e0tsax0ike9",
            image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80"
        },
        {
            title: "17W Solar Powered Chicken Coop Ventilation System & 8-Inch Fan",
            rawPrice: "Rs.22,470",
            link: "https://temu.to/k/e23xnwagymy",
            image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80"
        }
    ]
};

// Slider State Tracker
const sliderStates = {};

// Render Temu Slider Function
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

    container.innerHTML = `
        <div class="temu-slider-card" style="background-color: #0f172a; border: 1px solid #f97316; border-radius: 12px; padding: 18px; text-align: center; position: relative; box-shadow: 0 4px 15px rgba(249, 115, 22, 0.15);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                <span style="background: #f97316; color: white; padding: 3px 8px; font-size: 11px; border-radius: 4px; font-weight: bold; text-transform: uppercase;">Temu Hot Deal</span>
                <span style="color: #94a3b8; font-size: 12px; font-weight: bold;">Item ${index + 1} of ${products.length}</span>
            </div>
            
            <img src="${item.image}" alt="${item.title}" onerror="this.onerror=null; this.src='${defaultSolarImg}';" style="width: 100%; height: 160px; object-fit: cover; border-radius: 8px; margin-bottom: 12px; background-color: #1e293b;">
            
            <h4 style="color: #f8fafc; font-size: 14px; margin: 0 0 10px 0; line-height: 1.4; min-height: 38px;">${item.title}</h4>
            
            <div style="display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 14px;">
                <span style="color: #10b981; font-size: 22px; font-weight: bold;">${priceInfo.dealPrice}</span>
                <span style="color: #94a3b8; font-size: 13px; text-decoration: line-through;">${priceInfo.originalPrice}</span>
                <span style="background: rgba(16, 185, 129, 0.2); color: #10b981; font-size: 11px; font-weight: bold; padding: 2px 6px; border-radius: 4px;">${priceInfo.savePct}</span>
            </div>
            
            <a href="${item.link}" target="_blank" style="display: block; background-color: #f97316; color: white; text-decoration: none; padding: 10px; border-radius: 6px; font-weight: bold; font-size: 14px; margin-bottom: 12px; transition: background 0.3s;">View Deal on Temu</a>
            
            <div style="display: flex; gap: 10px; justify-content: center;">
                <button onclick="changeTemuSlide('${categoryKey}', '${containerId}', -1)" style="flex: 1; background: #334155; color: white; border: none; padding: 8px; border-radius: 6px; cursor: pointer; font-weight: bold;">❮ Prev</button>
                <button onclick="changeTemuSlide('${categoryKey}', '${containerId}', 1)" style="flex: 1; background: #334155; color: white; border: none; padding: 8px; border-radius: 6px; cursor: pointer; font-weight: bold;">Next ❯</button>
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
