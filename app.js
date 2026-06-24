// database of 14 temples along the canal route (ordered from Chalo upstream to Bang Yai)
const templesData = [
    {
        id: 1,
        name: "1. วัดชลอ (จุดรวมพล)",
        desc: "ชมอุโบสถสุพรรณหงส์อลังการริมน้ำ แวะช็อปชิมตลาดน้ำริมคลอง และแวะซื้อปลาปล่อยเชิงอนุรักษ์ที่ร้านเอ๋ปลาปล่อย",
        badge: "เปิดวันเสาร์-อาทิตย์",
        isWeekendOnly: true,
        highlight: "โบโบสถ์เรือสุพรรณหงส์",
        fishRelease: true,
        coords: { x: 30, y: 170 },
        image: "images/temple_river_gold.png"
    },
    {
        id: 2,
        name: "2. วัดเกดประยงค์เล็กตั้งตรงจิตร",
        desc: "สัมผัสความร่มรื่นริมปากคลองบางกอกน้อย เรียนรู้วิถีชีวิตสองฝั่งคลองที่เงียบสงบแบบวิถีดั้งเดิม",
        badge: "เปิดทุกวัน",
        isWeekendOnly: false,
        highlight: "วิถีริมคลอง",
        fishRelease: false,
        coords: { x: 80, y: 155 },
        image: "images/temple_wood_canal.png"
    },
    {
        id: 3,
        name: "3. วัดโพธิ์บางโอ",
        desc: "นมัสการหลวงพ่อศิลา ชมพระอุโบสถเก่าแก่และจิตรกรรมฝาผนังช่างสิบหมู่สมัยรัชกาลที่ 3 ที่สวยงามจับตา",
        badge: "เปิดทุกวัน",
        isWeekendOnly: false,
        highlight: "จิตรกรรมฝาผนังยุค ร.3",
        fishRelease: false,
        coords: { x: 130, y: 140 },
        image: "images/temple_grand_hall.png"
    },
    {
        id: 4,
        name: "4. วัดบางอ้อยช้าง",
        desc: "สักการะรอยพระพุทธบาทจำลองศิลาแลงอายุกว่าร้อยปี และชมโบราณวัตถุล้ำค่าในพิพิธภัณฑ์ศิลปวัฒนธรรมพื้นบ้าน",
        badge: "เปิดทุกวัน",
        isWeekendOnly: false,
        highlight: "รอยพระพุทธบาทจำลอง",
        fishRelease: false,
        coords: { x: 150, y: 145 },
        image: "images/temple_white_pagoda.png"
    },
    {
        id: 5,
        name: "5. วัดไทยเจริญ",
        desc: "ไหว้พระประธานศักดิ์สิทธิ์อุโบสถเก่าริมน้ำอ้อมนนท์ ชื่นชมลายปูนปั้นประดับโบราณสถานดั้งเดิม",
        badge: "เปิดทุกวัน",
        isWeekendOnly: false,
        highlight: "พระอุโบสถโบราณ",
        fishRelease: false,
        coords: { x: 165, y: 138 },
        image: "images/temple_river_gold.png"
    },
    {
        id: 6,
        name: "6. วัดแก้วฟ้า",
        desc: "สักการะอุโบสถหลังเก่าและกำแพงหน้าบันอายุกว่า 400 ปี สมัยอยุธยาตอนกลาง บรรยากาศอนุรักษ์ดั้งเดิม",
        badge: "เปิดทุกวัน",
        isWeekendOnly: false,
        highlight: "อุโบสถอยุธยา 400 ปี",
        fishRelease: false,
        coords: { x: 172, y: 132 },
        image: "images/temple_wood_canal.png"
    },
    {
        id: 7,
        name: "7. วัดพิกุลทอง",
        desc: "ไหว้หลวงพ่อโสธรจำลองริมน้ำ สูดอากาศบริสุทธิ์ริมคลองอ้อมนนท์ในโซนธรรมชาติร่มรื่น",
        badge: "เปิดทุกวัน",
        isWeekendOnly: false,
        highlight: "หลวงพ่อโสธรจำลอง",
        fishRelease: false,
        coords: { x: 175, y: 120 },
        image: "images/temple_grand_hall.png"
    },
    {
        id: 8,
        name: "8. วัดอุทยาน",
        desc: "ขอพร 'หลวงพ่อขาว' ศิลปะอู่ทอง ขอพรการค้าขายและธุรกิจ แวะตลาดชุมชนซื้อของกินพื้นบ้านรสอร่อย",
        badge: "เปิดวันเสาร์-อาทิตย์",
        isWeekendOnly: true,
        highlight: "หลวงพ่อขาว (การค้าขาย)",
        fishRelease: true,
        coords: { x: 180, y: 130 },
        image: "images/temple_white_pagoda.png"
    },
    {
        id: 9,
        name: "9. วัดโบสถ์บน",
        desc: "ปักหมุดจุดสัจธรรมสำคัญทางพุทธศาสนา สถานที่ซึ่งหลวงปู่สดวัดปากน้ำบรรลุธรรมวิชชาธรรมกาย ณ ชุมชนบางคูเวียง",
        badge: "เปิดทุกวัน",
        isWeekendOnly: false,
        highlight: "สถานที่หลวงปู่สดบรรลุธรรม",
        fishRelease: false,
        coords: { x: 230, y: 60 },
        image: "images/temple_river_gold.png"
    },
    {
        id: 10,
        name: "10. วัดตะเคียน",
        desc: "ลอดใต้โบสถ์ล้างอาถรรพ์ ปัดเป่าสิ่งไม่ดี นมัสการหลวงปู่แย้ม และช็อปขนมอร่อยในตลาดน้ำวัดตะเคียนริมตลิ่ง",
        badge: "เปิดทุกวัน (ตลาดเปิด ส.-อา.)",
        isWeekendOnly: false,
        highlight: "ลอดใต้โบสถ์สะเดาะเคราะห์",
        fishRelease: true,
        coords: { x: 260, y: 55 },
        image: "images/temple_wood_canal.png"
    },
    {
        id: 11,
        name: "11. วัดพิกุลเงิน",
        desc: "ขอพรหลวงพ่อพุทธโสธรจำลององค์ใหญ่ที่สุดในย่านอ้อมนนท์ เสริมดวงชะตา และชมทิวทัศน์โค้งน้ำธรรมชาติ",
        badge: "เปิดทุกวัน",
        isWeekendOnly: false,
        highlight: "หลวงพ่อโสธรองค์ใหญ่",
        fishRelease: false,
        coords: { x: 290, y: 48 },
        image: "images/temple_grand_hall.png"
    },
    {
        id: 12,
        name: "12. วัดอัมพวัน",
        desc: "ชื่นชมโบราณสถานที่สวยงามอย่างหอไตรกลางน้ำไม้มะเกลือ ศิลปะช่างหลวงอยุธยาที่ประณีตและสมบูรณ์ที่สุด",
        badge: "เปิดทุกวัน",
        isWeekendOnly: false,
        highlight: "หอไตรไม้โบราณกลางน้ำ",
        fishRelease: false,
        coords: { x: 320, y: 40 },
        image: "images/temple_white_pagoda.png"
    },
    {
        id: 13,
        name: "13. วัดปรางค์หลวง",
        desc: "นมัสการหลวงพ่ออู่ทอง และกราบเจดีย์พระปรางค์โบราณศิลาแลงอายุกว่า 600 ปี ซึ่งเป็นโบราณสถานที่เก่าแก่ที่สุดในนนทบุรี",
        badge: "เปิดทุกวัน",
        isWeekendOnly: false,
        highlight: "พระปรางค์เก่าแก่ที่สุด 600 ปี",
        fishRelease: false,
        coords: { x: 345, y: 35 },
        image: "images/temple_river_gold.png"
    },
    {
        id: 14,
        name: "14. วัดราษฎร์ประคองธรรม (ปลายทาง)",
        desc: "กราบหลวงพ่อโตซำปอกงจำลอง นมัสการพระพุทธไสยาสน์นอนที่ใหญ่ที่สุดในจังหวัด และชื่นชมสถาปัตยกรรมพระธาตุพนมจำลอง",
        badge: "เปิดทุกวัน",
        isWeekendOnly: false,
        highlight: "พระนอนองค์ใหญ่ที่สุดในนนท์",
        fishRelease: true,
        coords: { x: 370, y: 30 },
        image: "images/temple_wood_canal.png"
    }
];

// App State
let currentCount = 3;
const isWeekend = new Date().getDay() === 0 || new Date().getDay() === 6; // Check if Saturday or Sunday

// Elements
const templeListContainer = document.getElementById("temple-list");
const countBadge = document.getElementById("temple-count-badge");
const weekdayAlert = document.getElementById("weekday-alert");
const toggleButtons = document.querySelectorAll(".btn-toggle");
const fishModal = document.getElementById("fish-modal");
const closeModalBtn = document.querySelector(".close-btn");
const mapRouteLine = document.getElementById("map-route-line");

// Show/Hide weekday alert banner
if (isWeekend) {
    weekdayAlert.style.display = "none";
}

// Map path stroke arrays for different temple counts (illustrative path tracing)
const pathDashArrays = {
    3: "220, 500", // stops around Wat Uthayan
    5: "330, 500", // stops around Wat Takhian
    9: "500, 500"  // goes all the way to Wat Rat Prakong Tham
};

// Filter and select specific temples for the 3/5/9 routes
function getRouteTemples(count) {
    if (count === 3) {
        // Quick Trip: 1. Wat Chalo -> 8. Wat Uthayan -> 14. Wat Rat Prakong Tham (Selected targets for speed)
        return [templesData[0], templesData[7], templesData[13]];
    } else if (count === 5) {
        // Half Day: 1. Wat Chalo -> 3. Wat Pho Bang O -> 8. Wat Uthayan -> 10. Wat Takhian -> 14. Wat Rat Prakong Tham
        return [templesData[0], templesData[2], templesData[7], templesData[9], templesData[13]];
    } else {
        // Full Day / 9 Temples (Subset of 14 for optimal route)
        return [
            templesData[0], // Wat Chalo
            templesData[2], // Wat Pho Bang O
            templesData[3], // Wat Bang Oi Chang
            templesData[5], // Wat Kaew Fah
            templesData[7], // Wat Uthayan
            templesData[8], // Wat Bot Bon
            templesData[9], // Wat Takhian
            inputs = templesData[11], // Wat Amphawan
            templesData[13]  // Wat Rat Prakong Tham
        ].filter(Boolean);
    }
}

// Render Temples
function renderTemples() {
    const selectedTemples = getRouteTemples(currentCount);
    
    // Update badge text
    countBadge.textContent = `แสดงผล ${selectedTemples.length} วัด`;
    
    // Update SVG route path animation
    if (pathDashArrays[currentCount]) {
        mapRouteLine.style.strokeDasharray = pathDashArrays[currentCount];
    } else {
        mapRouteLine.style.strokeDasharray = "400, 400";
    }

    // Update markers on SVG Map (show/hide based on selection)
    updateMapMarkers(selectedTemples);

    // Render cards
    templeListContainer.innerHTML = "";
    
    selectedTemples.forEach((temple, index) => {
        const card = document.createElement("div");
        card.className = "temple-card";
        
        const badgeClass = temple.isWeekendOnly ? "weekend-only" : "daily";
        
        card.innerHTML = `
            <div class="temple-card-image" style="background-image: url('${temple.image}');"></div>
            <div class="temple-card-content">
                <div class="temple-card-header">
                    <h3 class="temple-title">${temple.name}</h3>
                    <span class="status-badge ${badgeClass}">${temple.badge}</span>
                </div>
                <p class="temple-desc">${temple.desc}</p>
                <div class="temple-actions">
                    <button class="btn-sm btn-primary-sm" onclick="showWorshipGuide('${temple.name}', '${temple.highlight}')">🧭 ไฮไลท์ขอพร</button>
                    ${temple.fishRelease ? `<button class="btn-sm btn-accent-sm" onclick="openFishGuide()">🐠 คู่มือปล่อยปลา</button>` : ''}
                </div>
            </div>
        `;
        templeListContainer.appendChild(card);
    });

    // Update Pricing highlight row
    updatePricingHighlight(currentCount);
}

// Update Map markers opacity based on active temples
function updateMapMarkers(activeTemples) {
    // Map of temple ID to its SVG element ID
    const markerIds = {
        1: "marker-temple-1",
        8: "marker-temple-8",
        10: "marker-temple-10",
        14: "marker-temple-14"
    };

    // Reset all markers to inactive
    Object.values(markerIds).forEach(id => {
        const marker = document.getElementById(id);
        if (marker) {
            marker.classList.add("inactive-pin");
        }
    });

    // Make active markers fully visible
    activeTemples.forEach(temple => {
        const id = markerIds[temple.id];
        if (id) {
            const marker = document.getElementById(id);
            if (marker) {
                marker.classList.remove("inactive-pin");
            }
        }
    });
}

// Highlight pricing table row based on selected temple count
function updatePricingHighlight(count) {
    document.querySelectorAll(".pricing-table tbody tr").forEach(row => {
        row.classList.remove("highlight-row");
    });
    const activeRow = document.getElementById(`price-row-${count}`);
    if (activeRow) {
        activeRow.classList.add("highlight-row");
    }
}

// Show specific worship guide (Alert popup)
window.showWorshipGuide = function(name, highlight) {
    alert(`🪷 เคล็ดลับขอพร ณ ${name}:\n\nจุดเด่น/ไฮไลท์: ${highlight}\n\nคำอธิษฐานแนะนำ: "ขออานิสงส์การบำเพ็ญบุญและท่องเที่ยวหนุนนำวิถีชีวิตชุมชน ขอให้การค้าขายเจริญรุ่งเรือง สุขภาพร่างกายแข็งแรง ปราศจากโรคภัยไข้เจ็บตลอดการเดินทาง"`);
};

// Show PromptPay details
window.showPromptPay = function() {
    alert("🟢 ช่องทางการชำระเงินค่ายาสัตว์น้ำทำบุญ (ร้านเอ๋ปลาปล่อย)\n\nPromptPay: 061-965-5364\nชื่อบัญชี: ร้านเอ๋ปลาปล่อย\n\nขอขอบคุณที่สนับสนุนปลาปล่อยของชุมชนและได้ร่วมทำบุญเชิงอนุรักษ์ครับ 🪷");
};

// Modal functions
window.openFishGuide = function() {
    fishModal.style.display = "flex";
};

closeModalBtn.onclick = function() {
    fishModal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target === fishModal) {
        fishModal.style.display = "none";
    }
};

// Handle temple count buttons click (synchronized across all tabs)
toggleButtons.forEach(button => {
    button.addEventListener("click", () => {
        const count = button.getAttribute("data-count");
        currentCount = parseInt(count, 10);
        
        // Synchronize active states across all buttons with same count
        toggleButtons.forEach(btn => {
            if (btn.getAttribute("data-count") === count) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });
        
        renderTemples();
    });
});

// Navigation Tab Switching
const navItems = document.querySelectorAll(".nav-item");
const views = {
    "route-info": document.getElementById("view-route-info"),
    "booking": document.getElementById("view-booking"),
    "map": document.getElementById("view-map")
};

navItems.forEach(item => {
    item.addEventListener("click", () => {
        const targetView = item.getAttribute("data-view");
        if (!targetView || !views[targetView]) return;

        // Update active class on nav items
        navItems.forEach(nav => nav.classList.remove("active-nav"));
        item.classList.add("active-nav");

        // Toggle hidden class on views
        Object.keys(views).forEach(key => {
            if (key === targetView) {
                views[key].classList.remove("hidden");
            } else {
                views[key].classList.add("hidden");
            }
        });
        
        // Auto scroll to top on switch for better mobile experience
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Interactive SVG Map Pin Clicks
function setupMapPinClicks() {
    const pins = {
        1: document.getElementById("marker-temple-1"),
        8: document.getElementById("marker-temple-8"),
        10: document.getElementById("marker-temple-10"),
        14: document.getElementById("marker-temple-14")
    };

    Object.entries(pins).forEach(([templeId, pinElement]) => {
        if (pinElement) {
            pinElement.addEventListener("click", (e) => {
                e.stopPropagation();
                const id = parseInt(templeId, 10);
                const temple = templesData.find(t => t.id === id);
                
                // Only trigger if the temple is currently active on the route
                const activeTemples = getRouteTemples(currentCount);
                const isActive = activeTemples.some(t => t.id === id);
                
                if (isActive && temple) {
                    showWorshipGuide(temple.name, temple.highlight);
                } else if (temple) {
                    alert(`🛕 ${temple.name}\n\nวัดนี้ไม่ได้อยู่ในแผนเส้นทางท่องเที่ยว ${currentCount} วัดที่คุณเลือกขณะนี้\n(คุณสามารถเปลี่ยนจำนวนวัดเพื่อเปิดเส้นทางมาที่วัดนี้ได้ครับ)`);
                }
            });
        }
    });

    const markerBy = document.getElementById("marker-by");
    if (markerBy) {
        markerBy.addEventListener("click", (e) => {
            e.stopPropagation();
            alert("📍 จุดเริ่มต้น: อ.บางใหญ่\n\nจุดรวมพลขึ้นเรือ และจุดปล่อยปลาเชิงอนุรักษ์ ณ คลองอ้อมนนท์");
        });
    }
}

// Initialize on page load
renderTemples();
setupMapPinClicks();
