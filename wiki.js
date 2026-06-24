const temples = ['วัดชลอ', 'วัดเกดประยงค์เล็กตั้งตรงจิตร', 'วัดโพธิ์บางโอ', 'วัดบางอ้อยช้าง', 'วัดไทยเจริญ', 'วัดแก้วฟ้า (จังหวัดนนทบุรี)', 'วัดพิกุลทอง', 'วัดอุทยาน', 'วัดโบสถ์บน', 'วัดตะเคียน (จังหวัดนนทบุรี)', 'วัดพิกุลเงิน', 'วัดอัมพวัน (จังหวัดนนทบุรี)', 'วัดปรางค์หลวง', 'วัดราษฎร์ประคองธรรม'];
async function getImages() {
  const results = {};
  for (let t of temples) {
    try {
      const res = await fetch(`https://th.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(t)}&prop=pageimages&format=json&pithumbsize=500`);
      const data = await res.json();
      const pages = data.query.pages;
      const pageId = Object.keys(pages)[0];
      if (pageId !== '-1' && pages[pageId].thumbnail) {
        results[t] = pages[pageId].thumbnail.source;
      } else {
        results[t] = null;
      }
    } catch(e) {
      results[t] = null;
    }
  }
  console.log(JSON.stringify(results, null, 2));
}
getImages();
