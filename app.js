// database of 14 temples along the canal route (ordered from Chalo upstream to Bang Yai)
const templesData = [
    {
        id: 1,
        name: "1. วัดชลอ (จุดรวมพล)",
        name_en: "1. วัดชลอ (จุดรวมพล) (EN)",
        name_zh: "1. วัดชลอ (จุดรวมพล) (ZH)",
        desc: "ชมอุโบสถสุพรรณหงส์อลังการริมน้ำ แวะช็อปชิมตลาดน้ำริมคลอง และแวะซื้อปลาปล่อยเชิงอนุรักษ์ที่ร้านเอ๋ปลาปล่อย",
        desc_en: "Beautiful temple by the canal with rich history.",
        desc_zh: "运河旁美丽的寺庙，历史悠久。",
        badge: "เปิดวันเสาร์-อาทิตย์",
        isWeekendOnly: true,
        highlight: "โบโบสถ์เรือสุพรรณหงส์",
        highlight_en: "Main highlight",
        highlight_zh: "主要亮点",
        worshipCategory: "💼 ด้านการงาน",
        worshipCategory_en: "Blessings",
        worshipCategory_zh: "祈福",
        worshipGuideDetail: "กราบไหว้พระประธานในอุโบสถเรือสุพรรณหงส์ เสริมสิริมงคลให้ชีวิตและการงานราบรื่น นำพาชีวิตให้ก้าวหน้าเหมือนเรือที่ล่องไปข้างหน้า",
        worshipGuideDetail_en: "Pray for good fortune and health.",
        worshipGuideDetail_zh: "祈求好运和健康。",
        website: "https://www.facebook.com/watchalo",
        references: ["https://th.wikipedia.org/wiki/วัดชลอ"],
        fishRelease: true,
        coords: { x: 30, y: 170 },
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Cha-lor.jpg"
    },
    {
        id: 2,
        name: "2. วัดเกดประยงค์เล็กตั้งตรงจิตร",
        name_en: "2. วัดเกดประยงค์เล็กตั้งตรงจิตร (EN)",
        name_zh: "2. วัดเกดประยงค์เล็กตั้งตรงจิตร (ZH)",
        desc: "สัมผัสความร่มรื่นริมปากคลองบางกอกน้อย เรียนรู้วิถีชีวิตสองฝั่งคลองที่เงียบสงบแบบวิถีดั้งเดิม",
        desc_en: "Beautiful temple by the canal with rich history.",
        desc_zh: "运河旁美丽的寺庙，历史悠久。",
        badge: "เปิดทุกวัน",
        isWeekendOnly: false,
        highlight: "วิถีริมคลอง",
        highlight_en: "Main highlight",
        highlight_zh: "主要亮点",
        worshipCategory: "🏥 ด้านสุขภาพ",
        worshipCategory_en: "Blessings",
        worshipCategory_zh: "祈福",
        worshipGuideDetail: "กราบไหว้พระประธานและสัมผัสความสงบร่มรื่นภายในวัด ช่วยผ่อนคลายจิตใจและขอพรให้สุขภาพร่างกายแข็งแรง ปราศจากโรคภัยไข้เจ็บ",
        worshipGuideDetail_en: "Pray for good fortune and health.",
        worshipGuideDetail_zh: "祈求好运和健康。",
        website: "https://www.facebook.com/pages/วัดเกดประยงค์เล็กตั้งตรงจิตร",
        references: ["https://www.youtube.com/watch?v=kYx8kR5_3m8"],
        fishRelease: false,
        coords: { x: 80, y: 155 },
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        name: "3. วัดโพธิ์บางโอ",
        name_en: "3. วัดโพธิ์บางโอ (EN)",
        name_zh: "3. วัดโพธิ์บางโอ (ZH)",
        desc: "นมัสการหลวงพ่อศิลา ชมพระอุโบสถเก่าแก่และจิตรกรรมฝาผนังช่างสิบหมู่สมัยรัชกาลที่ 3 ที่สวยงามจับตา",
        desc_en: "Beautiful temple by the canal with rich history.",
        desc_zh: "运河旁美丽的寺庙，历史悠久。",
        badge: "เปิดทุกวัน",
        isWeekendOnly: false,
        highlight: "จิตรกรรมฝาผนังยุค ร.3",
        highlight_en: "Main highlight",
        highlight_zh: "主要亮点",
        worshipCategory: "🎓 ด้านการศึกษาและสติปัญญา",
        worshipCategory_en: "Blessings",
        worshipCategory_zh: "祈福",
        worshipGuideDetail: "ขอพรหลวงพ่อศิลา พระพุทธรูปศักดิ์สิทธิ์ประจำวัด เพื่อความสว่างไสวทางสติปัญญา การเรียนการศึกษา และความก้าวหน้าทางวิชาการ",
        worshipGuideDetail_en: "Pray for good fortune and health.",
        worshipGuideDetail_zh: "祈求好运和健康。",
        website: "https://www.facebook.com/watphobangoo",
        references: ["https://th.wikipedia.org/wiki/วัดโพธิ์บางโอ"],
        fishRelease: false,
        coords: { x: 130, y: 140 },
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AD%E0%B8%B8%E0%B9%82%E0%B8%9A%E0%B8%AA%E0%B8%96_%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B9%82%E0%B8%9E%E0%B8%98%E0%B8%B4%E0%B9%8C%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B9%82%E0%B8%AD.jpg"
    },
    {
        id: 4,
        name: "4. วัดบางอ้อยช้าง",
        name_en: "4. วัดบางอ้อยช้าง (EN)",
        name_zh: "4. วัดบางอ้อยช้าง (ZH)",
        desc: "สักการะรอยพระพุทธบาทจำลองศิลาแลงอายุกว่าร้อยปี และชมโบราณวัตถุล้ำค่าในพิพิธภัณฑ์ศิลปวัฒนธรรมพื้นบ้าน",
        desc_en: "Beautiful temple by the canal with rich history.",
        desc_zh: "运河旁美丽的寺庙，历史悠久。",
        badge: "เปิดทุกวัน",
        isWeekendOnly: false,
        highlight: "รอยพระพุทธบาทจำลอง",
        highlight_en: "Main highlight",
        highlight_zh: "主要亮点",
        worshipCategory: "🛡️ ด้านการแคล้วคลาดปลอดภัย",
        worshipCategory_en: "Blessings",
        worshipCategory_zh: "祈福",
        worshipGuideDetail: "สักการะรอยพระพุทธบาทจำลอง ขออำนาจบารมีคุ้มครองให้เดินทางแคล้วคลาด ปลอดภัยจากภยันตรายทั้งปวง",
        worshipGuideDetail_en: "Pray for good fortune and health.",
        worshipGuideDetail_zh: "祈求好运和健康。",
        website: "https://www.facebook.com/watbangoichang",
        references: ["https://th.wikipedia.org/wiki/วัดบางอ้อยช้าง"],
        fishRelease: false,
        coords: { x: 150, y: 145 },
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/%E0%B8%8B%E0%B8%B8%E0%B9%89%E0%B8%A1%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%95%E0%B8%B9%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%AD%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B8%8A%E0%B9%89%E0%B8%B2%E0%B8%87.jpg"
    },
    {
        id: 5,
        name: "5. วัดไทยเจริญ",
        name_en: "5. วัดไทยเจริญ (EN)",
        name_zh: "5. วัดไทยเจริญ (ZH)",
        desc: "ไหว้พระประธานศักดิ์สิทธิ์อุโบสถเก่าริมน้ำอ้อมนนท์ ชื่นชมลายปูนปั้นประดับโบราณสถานดั้งเดิม",
        desc_en: "Beautiful temple by the canal with rich history.",
        desc_zh: "运河旁美丽的寺庙，历史悠久。",
        badge: "เปิดทุกวัน",
        isWeekendOnly: false,
        highlight: "พระอุโบสถโบราณ",
        highlight_en: "Main highlight",
        highlight_zh: "主要亮点",
        worshipCategory: "💼 ด้านความเจริญรุ่งเรือง",
        worshipCategory_en: "Blessings",
        worshipCategory_zh: "祈福",
        worshipGuideDetail: "ตามชื่อวัด 'ไทยเจริญ' นิยมมาขอพรให้ชีวิตและหน้าที่การงานเจริญรุ่งเรือง ก้าวหน้า ไม่มีอุปสรรคขัดขวาง",
        worshipGuideDetail_en: "Pray for good fortune and health.",
        worshipGuideDetail_zh: "祈求好运和健康。",
        website: "",
        references: ["https://th.wikipedia.org/wiki/วัดไทยเจริญ_(จังหวัดนนทบุรี)"],
        fishRelease: false,
        coords: { x: 165, y: 138 },
        image: "https://images.unsplash.com/photo-1590494446549-b6cb8b30f808?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 6,
        name: "6. วัดแก้วฟ้า",
        name_en: "6. วัดแก้วฟ้า (EN)",
        name_zh: "6. วัดแก้วฟ้า (ZH)",
        desc: "สักการะอุโบสถหลังเก่าและกำแพงหน้าบันอายุกว่า 400 ปี สมัยอยุธยาตอนกลาง บรรยากาศอนุรักษ์ดั้งเดิม",
        desc_en: "Beautiful temple by the canal with rich history.",
        desc_zh: "运河旁美丽的寺庙，历史悠久。",
        badge: "เปิดทุกวัน",
        isWeekendOnly: false,
        highlight: "อุโบสถอยุธยา 400 ปี",
        highlight_en: "Main highlight",
        highlight_zh: "主要亮点",
        worshipCategory: "🛡️ ด้านความมั่นคงและบารมี",
        worshipCategory_en: "Blessings",
        worshipCategory_zh: "祈福",
        worshipGuideDetail: "สัมผัสความขลังของอุโบสถโบราณ 400 ปี ขอพรด้านความมั่นคงในชีวิต การงาน และขอเสริมสร้างบารมีให้เป็นที่น่าเกรงขาม",
        worshipGuideDetail_en: "Pray for good fortune and health.",
        worshipGuideDetail_zh: "祈求好运和健康。",
        website: "https://www.facebook.com/watkaewfa",
        references: ["https://th.wikipedia.org/wiki/วัดแก้วฟ้า_(จังหวัดนนทบุรี)"],
        fishRelease: false,
        coords: { x: 172, y: 132 },
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Kaew-Fa-%281%29.jpg"
    },
    {
        id: 7,
        name: "7. วัดพิกุลทอง",
        name_en: "7. วัดพิกุลทอง (EN)",
        name_zh: "7. วัดพิกุลทอง (ZH)",
        desc: "ไหว้หลวงพ่อโสธรจำลองริมน้ำ สูดอากาศบริสุทธิ์ริมคลองอ้อมนนท์ในโซนธรรมชาติร่มรื่น",
        desc_en: "Beautiful temple by the canal with rich history.",
        desc_zh: "运河旁美丽的寺庙，历史悠久。",
        badge: "เปิดทุกวัน",
        isWeekendOnly: false,
        highlight: "หลวงพ่อโสธรจำลอง",
        highlight_en: "Main highlight",
        highlight_zh: "主要亮点",
        worshipCategory: "💰 ด้านโชคลาภและความสำเร็จ",
        worshipCategory_en: "Blessings",
        worshipCategory_zh: "祈福",
        worshipGuideDetail: "ขอพรหลวงพ่อโสธรจำลอง ซึ่งขึ้นชื่อเรื่องความศักดิ์สิทธิ์ในการดลบันดาลโชคลาภและความสำเร็จในสิ่งที่มุ่งหวัง",
        worshipGuideDetail_en: "Pray for good fortune and health.",
        worshipGuideDetail_zh: "祈求好运和健康。",
        website: "",
        references: ["https://th.wikipedia.org/wiki/วัดพิกุลทอง_(จังหวัดนนทบุรี)"],
        fishRelease: false,
        coords: { x: 175, y: 120 },
        image: "https://upload.wikimedia.org/wikipedia/commons/2/23/%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%B4%E0%B8%81%E0%B8%B8%E0%B8%A5%E0%B8%97%E0%B8%AD%E0%B8%87_%E0%B8%99%E0%B8%99%E0%B8%97%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5.jpg"
    },
    {
        id: 8,
        name: "8. วัดอุทยาน",
        name_en: "8. วัดอุทยาน (EN)",
        name_zh: "8. วัดอุทยาน (ZH)",
        desc: "ขอพร 'หลวงพ่อขาว' ศิลปะอู่ทอง ขอพรการค้าขายและธุรกิจ แวะตลาดชุมชนซื้อของกินพื้นบ้านรสอร่อย",
        desc_en: "Beautiful temple by the canal with rich history.",
        desc_zh: "运河旁美丽的寺庙，历史悠久。",
        badge: "เปิดวันเสาร์-อาทิตย์",
        isWeekendOnly: true,
        highlight: "หลวงพ่อขาว (การค้าขาย)",
        highlight_en: "Main highlight",
        highlight_zh: "主要亮点",
        worshipCategory: "💰 ด้านการเงินและธุรกิจ",
        worshipCategory_en: "Blessings",
        worshipCategory_zh: "祈福",
        worshipGuideDetail: "กราบขอพรหลวงพ่อขาว พระพุทธรูปเก่าแก่สมัยอู่ทอง เชื่อกันว่าหากขอพรเรื่องการค้าขาย ธุรกิจจะเจริญรุ่งเรือง (เมื่อสำเร็จมักถวายน้ำตาลทรายขาว)",
        worshipGuideDetail_en: "Pray for good fortune and health.",
        worshipGuideDetail_zh: "祈求好运和健康。",
        website: "https://www.facebook.com/watuthayan",
        references: ["https://th.wikipedia.org/wiki/วัดอุทยาน_(จังหวัดนนทบุรี)"],
        fishRelease: true,
        coords: { x: 180, y: 130 },
        image: "https://images.unsplash.com/photo-1549487222-137ff7bc5ee5?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 9,
        name: "9. วัดโบสถ์บน",
        name_en: "9. วัดโบสถ์บน (EN)",
        name_zh: "9. วัดโบสถ์บน (ZH)",
        desc: "ปักหมุดจุดสัจธรรมสำคัญทางพุทธศาสนา สถานที่ซึ่งหลวงปู่สดวัดปากน้ำบรรลุธรรมวิชชาธรรมกาย ณ ชุมชนบางคูเวียง",
        desc_en: "Beautiful temple by the canal with rich history.",
        desc_zh: "运河旁美丽的寺庙，历史悠久。",
        badge: "เปิดทุกวัน",
        isWeekendOnly: false,
        highlight: "สถานที่หลวงปู่สดบรรลุธรรม",
        highlight_en: "Main highlight",
        highlight_zh: "主要亮点",
        worshipCategory: "🧘 ด้านสติปัญญาและสมาธิ",
        worshipCategory_en: "Blessings",
        worshipCategory_zh: "祈福",
        worshipGuideDetail: "สักการะสถานที่ประวัติศาสตร์ที่หลวงปู่สดบรรลุธรรม ขอพรให้จิตใจสงบ เกิดสติปัญญา สมาธิตั้งมั่นในการแก้ปัญหาชีวิต",
        worshipGuideDetail_en: "Pray for good fortune and health.",
        worshipGuideDetail_zh: "祈求好运和健康。",
        website: "https://www.facebook.com/watbotbon",
        references: ["https://th.wikipedia.org/wiki/วัดโบสถ์บน"],
        fishRelease: false,
        coords: { x: 230, y: 60 },
        image: "https://upload.wikimedia.org/wikipedia/commons/6/69/%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B9%82%E0%B8%9A%E0%B8%AA%E0%B8%96%E0%B9%8C%E0%B8%9A%E0%B8%99.jpg"
    },
    {
        id: 10,
        name: "10. วัดตะเคียน",
        name_en: "10. วัดตะเคียน (EN)",
        name_zh: "10. วัดตะเคียน (ZH)",
        desc: "ลอดใต้โบสถ์ล้างอาถรรพ์ ปัดเป่าสิ่งไม่ดี นมัสการหลวงปู่แย้ม และช็อปขนมอร่อยในตลาดน้ำวัดตะเคียนริมตลิ่ง",
        desc_en: "Beautiful temple by the canal with rich history.",
        desc_zh: "运河旁美丽的寺庙，历史悠久。",
        badge: "เปิดทุกวัน (ตลาดเปิด ส.-อา.)",
        isWeekendOnly: false,
        highlight: "ลอดใต้โบสถ์สะเดาะเคราะห์",
        highlight_en: "Main highlight",
        highlight_zh: "主要亮点",
        worshipCategory: "🔮 ด้านการสะเดาะเคราะห์ ต่อชะตา",
        worshipCategory_en: "Blessings",
        worshipCategory_zh: "祈福",
        worshipGuideDetail: "ไฮไลท์คือการเดินลอดใต้พระอุโบสถ เพื่อปัดเป่าสิ่งชั่วร้าย ล้างอาถรรพ์ และเสริมดวงชะตาให้ชีวิตดีขึ้น พร้อมกราบขอพรหลวงปู่แย้ม",
        worshipGuideDetail_en: "Pray for good fortune and health.",
        worshipGuideDetail_zh: "祈求好运和健康。",
        website: "https://www.facebook.com/wattakien",
        references: ["https://th.wikipedia.org/wiki/วัดตะเคียน_(จังหวัดนนทบุรี)"],
        fishRelease: true,
        coords: { x: 260, y: 55 },
        image: "https://images.unsplash.com/photo-1582200588691-1cb118a16db4?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 11,
        name: "11. วัดพิกุลเงิน",
        name_en: "11. วัดพิกุลเงิน (EN)",
        name_zh: "11. วัดพิกุลเงิน (ZH)",
        desc: "ขอพรหลวงพ่อพุทธโสธรจำลององค์ใหญ่ที่สุดในย่านอ้อมนนท์ เสริมดวงชะตา และชมทิวทัศน์โค้งน้ำธรรมชาติ",
        desc_en: "Beautiful temple by the canal with rich history.",
        desc_zh: "运河旁美丽的寺庙，历史悠久。",
        badge: "เปิดทุกวัน",
        isWeekendOnly: false,
        highlight: "หลวงพ่อโสธรองค์ใหญ่",
        highlight_en: "Main highlight",
        highlight_zh: "主要亮点",
        worshipCategory: "❤️ ด้านความรักและครอบครัว",
        worshipCategory_en: "Blessings",
        worshipCategory_zh: "祈福",
        worshipGuideDetail: "ขอพรหลวงพ่อพุทธโสธรองค์ใหญ่ เพื่อความเป็นสิริมงคล เสริมความรักความอบอุ่นในครอบครัวให้รักใคร่กลมเกลียวกัน",
        worshipGuideDetail_en: "Pray for good fortune and health.",
        worshipGuideDetail_zh: "祈求好运和健康。",
        website: "",
        references: ["https://th.wikipedia.org/wiki/วัดพิกุลเงิน"],
        fishRelease: false,
        coords: { x: 290, y: 48 },
        image: "https://images.unsplash.com/photo-1603517117182-3e2842e12e10?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 12,
        name: "12. วัดอัมพวัน",
        name_en: "12. วัดอัมพวัน (EN)",
        name_zh: "12. วัดอัมพวัน (ZH)",
        desc: "ชื่นชมโบราณสถานที่สวยงามอย่างหอไตรกลางน้ำไม้มะเกลือ ศิลปะช่างหลวงอยุธยาที่ประณีตและสมบูรณ์ที่สุด",
        desc_en: "Beautiful temple by the canal with rich history.",
        desc_zh: "运河旁美丽的寺庙，历史悠久。",
        badge: "เปิดทุกวัน",
        isWeekendOnly: false,
        highlight: "หอไตรไม้โบราณกลางน้ำ",
        highlight_en: "Main highlight",
        highlight_zh: "主要亮点",
        worshipCategory: "🎓 ด้านการศึกษา",
        worshipCategory_en: "Blessings",
        worshipCategory_zh: "祈福",
        worshipGuideDetail: "ด้วยสัญลักษณ์ของหอไตรกลางน้ำซึ่งเป็นที่เก็บพระไตรปิฎก จึงนิยมขอพรด้านการศึกษา การเรียน และการสอบแข่งขันให้ประสบความสำเร็จ",
        worshipGuideDetail_en: "Pray for good fortune and health.",
        worshipGuideDetail_zh: "祈求好运和健康。",
        website: "https://www.facebook.com/watumphawan.nonthaburi",
        references: ["https://th.wikipedia.org/wiki/วัดอัมพวัน_(จังหวัดนนทบุรี)"],
        fishRelease: false,
        coords: { x: 320, y: 40 },
        image: "https://images.unsplash.com/photo-1560384469-8db2bfd3df49?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 13,
        name: "13. วัดปรางค์หลวง",
        name_en: "13. วัดปรางค์หลวง (EN)",
        name_zh: "13. วัดปรางค์หลวง (ZH)",
        desc: "นมัสการหลวงพ่ออู่ทอง และกราบเจดีย์พระปรางค์โบราณศิลาแลงอายุกว่า 600 ปี ซึ่งเป็นโบราณสถานที่เก่าแก่ที่สุดในนนทบุรี",
        desc_en: "Beautiful temple by the canal with rich history.",
        desc_zh: "运河旁美丽的寺庙，历史悠久。",
        badge: "เปิดทุกวัน",
        isWeekendOnly: false,
        highlight: "พระปรางค์เก่าแก่ที่สุด 600 ปี",
        highlight_en: "Main highlight",
        highlight_zh: "主要亮点",
        worshipCategory: "🛡️ ด้านความคุ้มครองและโชคลาภ",
        worshipCategory_en: "Blessings",
        worshipCategory_zh: "祈福",
        worshipGuideDetail: "กราบหลวงพ่ออู่ทองในพระอุโบสถเก่า และเวียนเทียนรอบองค์พระปรางค์ศิลาแลง 600 ปี เพื่อขอโชคลาภและให้สิ่งศักดิ์สิทธิ์คุ้มครอง",
        worshipGuideDetail_en: "Pray for good fortune and health.",
        worshipGuideDetail_zh: "祈求好运和健康。",
        website: "https://www.facebook.com/watprangluang",
        references: ["https://th.wikipedia.org/wiki/วัดปรางค์หลวง"],
        fishRelease: false,
        coords: { x: 345, y: 35 },
        image: "https://upload.wikimedia.org/wikipedia/commons/8/80/%282023%29_%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%87%E0%B8%84%E0%B9%8C%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87_%E0%B8%AD.%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88_%E0%B8%88.%E0%B8%99%E0%B8%99%E0%B8%97%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5_%288%29.jpg"
    },
    {
        id: 14,
        name: "14. วัดราษฎร์ประคองธรรม (ปลายทาง)",
        name_en: "14. วัดราษฎร์ประคองธรรม (ปลายทาง) (EN)",
        name_zh: "14. วัดราษฎร์ประคองธรรม (ปลายทาง) (ZH)",
        desc: "กราบหลวงพ่อโตซำปอกงจำลอง นมัสการพระพุทธไสยาสน์นอนที่ใหญ่ที่สุดในจังหวัด และชื่นชมสถาปัตยกรรมพระธาตุพนมจำลอง",
        desc_en: "Beautiful temple by the canal with rich history.",
        desc_zh: "运河旁美丽的寺庙，历史悠久。",
        badge: "เปิดทุกวัน",
        isWeekendOnly: false,
        highlight: "พระนอนองค์ใหญ่ที่สุดในนนท์",
        highlight_en: "Main highlight",
        highlight_zh: "主要亮点",
        worshipCategory: "🏥 ด้านสุขภาพและอายุยืนยาว",
        worshipCategory_en: "Blessings",
        worshipCategory_zh: "祈福",
        worshipGuideDetail: "กราบพระพุทธไสยาสน์ (พระนอน) องค์ใหญ่ที่สุดในนนทบุรี เพื่อขอพรให้สุขภาพแข็งแรง อายุยืนยาว และไร้โรคภัยเบียดเบียน",
        worshipGuideDetail_en: "Pray for good fortune and health.",
        worshipGuideDetail_zh: "祈求好运和健康。",
        website: "https://www.facebook.com/watradprakongtham",
        references: ["https://th.wikipedia.org/wiki/วัดราษฎร์ประคองธรรม"],
        fishRelease: true,
        coords: { x: 370, y: 30 },
        image: "https://images.unsplash.com/photo-1602693630630-f2030ce1dc89?auto=format&fit=crop&q=80&w=800"
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
let currentLang = 'th';
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
                    <h3 class="temple-title">${currentLang === "th" ? temple.name : (currentLang === "en" ? temple.name_en : temple.name_zh)}</h3>
                    <span class="status-badge ${badgeClass}">${temple.badge}</span>
                </div>
                <p class="temple-desc">${currentLang === "th" ? temple.desc : (currentLang === "en" ? temple.desc_en : temple.desc_zh)}</p>
                <div class="temple-actions">
                    <button class="btn-sm btn-primary-sm" onclick="showWorshipGuide(${temple.id})">🧭 ไฮไลท์ขอพร</button>
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

// Elements for Worship Modal
const worshipModal = document.getElementById("worship-modal");
const worshipCloseBtn = document.querySelector(".worship-close-btn");
const worshipTitle = document.getElementById("worship-title");
const worshipHighlight = document.getElementById("worship-highlight");
const worshipCategory = document.getElementById("worship-category");
const worshipDetail = document.getElementById("worship-detail");
const worshipWebsite = document.getElementById("worship-website");
const worshipRefList = document.getElementById("worship-ref-list");

// Show specific worship guide (Modal popup)
window.showWorshipGuide = function(id) {
    const temple = templesData.find(t => t.id === id);
    if (!temple) return;

    worshipTitle.textContent = currentLang === "th" ? temple.name : (currentLang === "en" ? temple.name_en : temple.name_zh);
    worshipHighlight.textContent = (currentLang === "th" ? "จุดเด่น/ไฮไลท์: " : (currentLang === "en" ? "Highlight: " : "主要亮点: ")) + (currentLang === "th" ? temple.highlight : (currentLang === "en" ? temple.highlight_en : temple.highlight_zh));
    worshipCategory.textContent = currentLang === "th" ? temple.worshipCategory : (currentLang === "en" ? temple.worshipCategory_en : temple.worshipCategory_zh);
    worshipDetail.textContent = currentLang === "th" ? temple.worshipGuideDetail : (currentLang === "en" ? temple.worshipGuideDetail_en : temple.worshipGuideDetail_zh);



    // Handle website
    if (temple.website) {
        worshipWebsite.href = temple.website;
        worshipWebsite.style.display = "inline-flex";
    } else {
        worshipWebsite.style.display = "none";
    }

    // Handle references
    worshipRefList.innerHTML = "";
    if (temple.references && temple.references.length > 0) {
        temple.references.forEach(ref => {
            const li = document.createElement("li");
            li.innerHTML = `<a href="${ref}" target="_blank">${ref.length > 40 ? ref.substring(0, 40) + '...' : ref}</a>`;
            worshipRefList.appendChild(li);
        });
        document.getElementById("worship-references").style.display = "block";
    } else {
        document.getElementById("worship-references").style.display = "none";
    }

    worshipModal.style.display = "flex";
};

worshipCloseBtn.onclick = function() {
    worshipModal.style.display = "none";
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
    if (event.target === worshipModal) {
        worshipModal.style.display = "none";
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
                    showWorshipGuide(temple.id);
                } else if (temple) {
                    alert(`🛕 ${currentLang === "th" ? temple.name : (currentLang === "en" ? temple.name_en : temple.name_zh)}\n\nวัดนี้ไม่ได้อยู่ในแผนเส้นทางท่องเที่ยว ${currentCount} วัดที่คุณเลือกขณะนี้\n(คุณสามารถเปลี่ยนจำนวนวัดเพื่อเปิดเส้นทางมาที่วัดนี้ได้ครับ)`);
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

// --- Translations ---
const translations = {
    th: {
        app_title: "แผนที่เส้นทางเรือคลองอ้อมนนท์ 🛶 ───> บางใหญ่",
        start_point: "เริ่ม: บางใหญ่",
        end_point: "ปลายทาง: วัดราษฎร์ประคองธรรม",
        trip_customize: "ปรับแต่งจำนวนวัดท่องเที่ยว:",
        trip_3: "3 วัด (ทริปสั้น)",
        trip_5: "5 วัด (ครึ่งวัน)",
        trip_9: "9 วัด (เต็มวัน)",
        btn_share_trip: "📤 แชร์ทริปนี้ให้เพื่อน"
    },
    en: {
        app_title: "Canal Boat Route 🛶 ───> Bang Yai",
        start_point: "Start: Bang Yai",
        end_point: "End: Wat Rat Prakong Tham",
        trip_customize: "Customize Your Trip:",
        trip_3: "3 Temples (Short)",
        trip_5: "5 Temples (Half Day)",
        trip_9: "9 Temples (Full Day)",
        btn_share_trip: "📤 Share this trip"
    },
    zh: {
        app_title: "运河游船路线 🛶 ───> 挽艾",
        start_point: "起点: 挽艾",
        end_point: "终点: 皇家拉普拉空塔寺",
        trip_customize: "定制您的行程:",
        trip_3: "3 座寺庙 (短程)",
        trip_5: "5 座寺庙 (半日)",
        trip_9: "9 座寺庙 (全日)",
        btn_share_trip: "📤 分享此行程"
    }
};

window.changeLanguage = function(lang) {
    currentLang = lang;
    
    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById('lang-' + lang).classList.add('active');
    
    // Update DOM static texts
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Re-render temples list to apply new language
    renderTemples();
};

window.shareTrip = function() {
    const temples = getRouteTemples(currentCount);
    const templeNames = temples.map(t => currentLang === "th" ? t.name : (currentLang === "en" ? t.name_en : t.name_zh)).join(", ");
    
    let prices = {3: 500, 5: 1000, 9: 2000};
    let price = prices[currentCount];
    
    let text = `มาล่องเรืออ้อมนนท์กัน! ทริป ${currentCount} วัด (${templeNames}) ราคาเหมาลำ ${price}฿ ดูเส้นทางได้ที่นี่:`;
    if (currentLang === 'en') {
        text = `Let's go on a boat trip! ${currentCount} Temples (${templeNames}). Private boat for ${price} THB. Route info:`;
    } else if (currentLang === 'zh') {
        text = `一起去游船吧！${currentCount}个寺庙 (${templeNames})。包船价格 ${price} 泰铢。路线信息:`;
    }

    if (navigator.share) {
        navigator.share({
            title: 'WaiPhra9 Trip',
            text: text,
            url: window.location.href
        }).catch(console.error);
    } else {
        // Fallback
        alert('Sharing is not supported on this browser. Here is the text:\n\n' + text);
    }
};

// --- Lightbox Logic ---
const lightboxModal = document.getElementById("lightbox-modal");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCloseBtn = document.querySelector(".lightbox-close");

window.openLightbox = function(src) {
    lightboxImg.src = src;
    lightboxModal.style.display = "flex";
};

if (lightboxCloseBtn) {
    lightboxCloseBtn.onclick = function() {
        lightboxModal.style.display = "none";
    };
}

// Add lightbox click-to-close on background
window.addEventListener('click', function(event) {
    if (event.target === lightboxModal) {
        lightboxModal.style.display = "none";
    }
});

// --- Number Counter Animation for Stats ---
function animateNumbers() {
    const statNums = document.querySelectorAll('.stat-num');
    statNums.forEach(stat => {
        const text = stat.innerText;
        // Extract numbers and non-numbers
        const match = text.match(/([\d.]+)(.*)/);
        if (match) {
            const target = parseFloat(match[1]);
            const suffix = match[2];
            let current = 0;
            const increment = target / 30; // 30 frames
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    // check if float
                    if (target % 1 !== 0) {
                        stat.innerText = current.toFixed(1) + suffix;
                    } else {
                        stat.innerText = Math.ceil(current) + suffix;
                    }
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.innerText = target + suffix;
                }
            };
            updateCounter();
        }
    });
}

// Hook animateNumbers into tab switching
const originalNavClick = document.querySelectorAll(".nav-item");
originalNavClick.forEach(item => {
    item.addEventListener("click", () => {
        if (item.getAttribute("data-view") === "route-info") {
            // Trigger animation slightly after tab switches
            setTimeout(animateNumbers, 100);
        }
    });
});
