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

// Full Temu Physical Products Pool
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
    ],
    "indoor-gardening": [
        {
            title: "HCT-322 Automatic Water Timer Garden Digital Irrigation Controller",
            rawPrice: "Rs.6,878",
            link: "https://temu.to/k/eka2e3ahcnc",
            badge: "AUTOMATIC TIMER"
        },
        {
            title: "3-Outlet Water Timers 3 Zones Independent Program Garden Irrigation",
            rawPrice: "Rs.14,835",
            link: "https://temu.to/k/egwsrkiumzh",
            badge: "3-ZONE CONTROL"
        },
        {
            title: "Universal Automatic Irrigation Spray Kit with Brass Nozzle & PE Hose",
            rawPrice: "Rs.4,988",
            link: "https://temu.to/k/evvvop299kt",
            badge: "EASY INSTALL"
        },
        {
            title: "USB Automatic Drip Irrigation System Kit with Watering Controller",
            rawPrice: "Rs.7,774",
            link: "https://temu.to/k/e1c5i6x9mx9",
            badge: "INDOOR & OUTDOOR"
        },
        {
            title: "Solar Powered Garden Drip Irrigation Programmer with 10m Hose",
            rawPrice: "Rs.6,964",
            link: "https://temu.to/k/efktqor52ql",
            badge: "SOLAR POWERED"
        },
        {
            title: "Indoor Plant Full Spectrum LED Grow Light 70 LED Beads (Adjustable)",
            rawPrice: "Rs.4,495",
            link: "https://temu.to/k/epoqjk591tj",
            badge: "FULL SPECTRUM"
        },
        {
            title: "Indoor Plant Floor Grow Light Strip 68-Inch Stand for Tall Plants",
            rawPrice: "Rs.14,340",
            link: "https://temu.to/k/evnkeyy15xc",
            badge: "TALL PLANT LIGHT"
        },
        {
            title: "10-Level Brightness Adjustable Full Spectrum Grow Light USB",
            rawPrice: "Rs.4,316",
            link: "https://temu.to/k/e0x4h43boct",
            badge: "3 TIMING MODES"
        },
        {
            title: "Grow Light with Adjustable Tripod Stand 80 LED Dimmable Lamp",
            rawPrice: "Rs.12,677",
            link: "https://temu.to/k/elqzj0s0tcc",
            badge: "TRIPOD STAND"
        },
        {
            title: "6-in-1 Soil pH & Moisture Meter with LCD Screen & Sunlight Tester",
            rawPrice: "Rs.4,927",
            link: "https://temu.to/k/eikm79fl8mr",
            badge: "6-IN-1 TESTER"
        },
        {
            title: "Smart 2-Zone Irrigation Controller Electronic Watering Timer",
            rawPrice: "Rs.8,636",
            link: "https://temu.to/k/eco3hzho5ay",
            badge: "SMART TIMER"
        },
        {
            title: "Automatic Sensor Waste Bin Slim Smart Trash Can for Home",
            rawPrice: "Rs.9,018",
            link: "https://temu.to/k/e5i6tm7dlg2",
            badge: "SMART BIN"
        },
        {
            title: "Smart Digital Garden Watering Timer with Rain Delay Function",
            rawPrice: "Rs.5,518",
            link: "https://temu.to/k/es483a0yrq3",
            badge: "RAIN DELAY"
        },
        {
            title: "3-in-1 Soil Tester for Moisture, Fertility & pH Level (No Battery)",
            rawPrice: "Rs.2,198",
            link: "https://temu.to/k/emivtnk4r3g",
            badge: "BEST VALUE"
        },
        {
            title: "Smart Garden Hose Timer 2-Zone Sprinkler Controller (8 Settings)",
            rawPrice: "Rs.10,782",
            link: "https://temu.to/k/e9n458krab2",
            badge: "PROGRAMMABLE"
        },
        {
            title: "300ml Essential Oil Diffuser & Ultrasonic Cool Mist Humidifier",
            rawPrice: "Rs.6,161",
            link: "https://temu.to/k/eloobz8tib9",
            badge: "HUMIDIFIER"
        },
        {
            title: "2-in-1 Essential Oil Diffuser & Humidifier with LED Mood Light",
            rawPrice: "Rs.4,950",
            link: "https://temu.to/k/edhl91f1q21",
            badge: "ULTRASONIC"
        },
        {
            title: "150ml Ultrasonic Humidifier with 7-Color Crack Design Lamp",
            rawPrice: "Rs.4,364",
            link: "https://temu.to/k/et9cqrkdpiq",
            badge: "QUIET MIST"
        },
        {
            title: "Large Capacity Wood-Grain Ultrasonic Essential Oil Diffuser",
            rawPrice: "Rs.8,272",
            link: "https://temu.to/k/evc1ufgjn31",
            badge: "WOOD GRAIN"
        },
        {
            title: "Fireplace Aromatherapy Flame Diffuser Cool Mist Humidifier",
            rawPrice: "Rs.15,017",
            link: "https://temu.to/k/eys7mjs4t2n",
            badge: "FLAME EFFECT"
        },
        {
            title: "Set of 6 Self-Watering Planter Pots (6-Inch) with Clear Tray",
            rawPrice: "Rs.11,611",
            link: "https://temu.to/k/em49r0im5il",
            badge: "6-PACK POTS"
        },
        {
            title: "Forestbox 30-Pack Vertical Wall Planters Stackable Pots",
            rawPrice: "Rs.55,000",
            link: "https://temu.to/k/efblljkedrn",
            badge: "VERTICAL GARDEN"
        },
        {
            title: "2pcs Plant Watering Clay Terracotta Self-Watering Spikes",
            rawPrice: "Rs.8,522",
            link: "https://temu.to/k/ezfli8w5bld",
            badge: "VACATION WATERING"
        },
        {
            title: "Self-Watering Plastic Plant Pots with Water Level Indicator",
            rawPrice: "Rs.1,336",
            link: "https://temu.to/k/e4f4qgr9hcx",
            badge: "LEVEL INDICATOR"
        },
        {
            title: "7pcs Set Stackable 3-Petal Flower Pots + Wheel Tray",
            rawPrice: "Rs.16,696",
            link: "https://temu.to/k/e5r508hbvwa",
            badge: "STACKABLE TOWER"
        },
        {
            title: "Handheld Garden Pump Sprayer & Plant Misting Pressure Bottle",
            rawPrice: "Rs.1,848",
            link: "https://temu.to/k/ed425dcz1iu",
            badge: "PRESSURE SPRAY"
        },
        {
            title: "500ml Refillable Spray Bottles with Fine & Coarse Settings",
            rawPrice: "Rs.1,300",
            link: "https://temu.to/k/ec519msdkfw",
            badge: "FINE MIST"
        },
        {
            title: "Handheld Rechargeable Electric Spray Gun 380ml Nano Mist",
            rawPrice: "Rs.7,491",
            link: "https://temu.to/k/es3ovflhd3a",
            badge: "NANO MIST GUN"
        },
        {
            title: "4-Pack 500ml Wheat Straw Refillable Fine Mist Spray Bottles",
            rawPrice: "Rs.2,013",
            link: "https://temu.to/k/e5be4jsdjpc",
            badge: "ECO MATERIAL"
        },
        {
            title: "Solar-Powered Automatic Drip Irrigation Kit (30-50 Pots)",
            rawPrice: "Rs.25,497",
            link: "https://temu.to/k/e5z4my2g2lm",
            badge: "SOLAR DRIP"
        },
        {
            title: "Solar Automatic Drip Irrigation System (30 Potted Plants)",
            rawPrice: "Rs.25,132",
            link: "https://temu.to/k/e589pzz0s09",
            badge: "AUTOMATIC WATER"
        },
        {
            title: "Timed Intelligent Watering Device LCD Drip System for 10 Pots",
            rawPrice: "Rs.6,427",
            link: "https://temu.to/k/e6yaleuqito",
            badge: "SMART DRIP"
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
