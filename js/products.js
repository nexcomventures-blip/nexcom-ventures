/* ============================================
   NEXCOM VENTURES — All Products Data
   Sources:
   - Mitsumi (Sylvia Chasaya): +40% markup on laptops, +60% on servers
   - Evercomps: +10% markup on accessories
   - IT WhatsApp Groups: Ex-UK laptops, competitive/+30% markup
   USD rate: ~129 KES/USD (April 2026 average)
   ============================================ */

const USD_RATE = 129;

// Helper
function usdToKes(usd, markup) {
  return Math.ceil((usd * USD_RATE) * (1 + markup / 100) / 500) * 500;
}

const ALL_PRODUCTS = [

  /* ==========================================
     FEATURED PRODUCTS (Top 8 for Homepage)
     ========================================== */
  {
    id: "featured-dell-pc14250",
    brand: "Dell",
    name: "Dell Pro 14 PC14250",
    specs: "Intel Core Ultra 5 220U • 16GB RAM • 512GB SSD • 14\" FHD+ • Win 11 Pro",
    price: usdToKes(1052.28, 40),
    category: "new business featured",
    badge: "new",
    source: "mitsumi",
    img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/dell-pro/pc14250/media-gallery/notebook-dell-pro-pc14250-hd-fhd-bk-gallery-2.psd?fmt=png-alpha&pscan=auto&scl=1&hei=804&wid=1328&qlt=100,1&resMode=sharp2&size=1328,804&chrss=full"
  },
  {
    id: "featured-hp-probook460g11-u7",
    brand: "HP",
    name: "HP ProBook 460 G11",
    specs: "Intel Core U7-155U • 16GB RAM • 512GB SSD • 16\" WUXGA • DOS",
    price: usdToKes(877, 40),
    category: "new business featured",
    badge: "new",
    source: "mitsumi",
    img: "https://m.media-amazon.com/images/I/61cojcv858L.jpg"
  },
  {
    id: "featured-lenovo-tb14g9-c5",
    brand: "Lenovo",
    name: "Lenovo ThinkBook 14 G9",
    specs: "Intel Core 5-210H • 16GB DDR5 • 512GB SSD • 14\" WUXGA • Wi-Fi 7",
    price: usdToKes(677, 40),
    category: "new business featured",
    badge: "new",
    source: "mitsumi",
    img: "https://p4-ofp.static.pub//fes/cms/2025/11/11/828luka54hx4a0z8k7r0msiasnxwkn648449.png?width=328&height=328"
  },
  {
    id: "featured-asus-rog-g14",
    brand: "ASUS",
    name: "ASUS ROG Zephyrus G14",
    specs: "AMD Ryzen 9 • 16GB RAM • 1TB SSD • RTX 4060 • 14\" QHD 165Hz",
    price: 165000,
    category: "new gaming featured",
    badge: "new",
    source: "stock",
    img: "https://dlcdnwebimgs.asus.com/gain/A1433BAB-3BC8-40BF-965C-B3E95E59BC61/w1000/h732"
  },
  {
    id: "featured-macbook-air-m2",
    brand: "Apple",
    name: "MacBook Air M2",
    specs: "Apple M2 • 8GB RAM • 256GB SSD • 13.6\" Liquid Retina • 18-hr Battery",
    price: 178000,
    category: "new featured",
    badge: "new",
    source: "stock",
    img: "https://www.apple.com/newsroom/images/product/mac/standard/Apple-MacBook-Air-M2-availability-July-2022-hero_big.jpg.large.jpg"
  },
  {
    id: "featured-hp-omen-16",
    brand: "HP",
    name: "HP Omen 16",
    specs: "Intel i7 12th Gen • 16GB RAM • 512GB SSD • RTX 3060 6GB • 144Hz",
    price: 145000,
    category: "new gaming featured",
    badge: "hot",
    source: "stock",
    img: "https://www.hp.com/content/dam/sites/omen/worldwide/laptops/2023-omen-16-intel/ImageMain22x.png"
  },
  {
    id: "featured-dell-t160-tower",
    brand: "Dell",
    name: "Dell PowerEdge T160 Tower",
    specs: "Xeon 6315P 4C 2.8GHz • 32GB DDR5 ECC • 2TB SATA HDD • PERC H355",
    price: usdToKes(1551, 60),
    category: "server tower featured",
    badge: "new",
    source: "mitsumi",
    img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-enterprise-products/enterprise-systems/poweredge/t160/spi/poweredge-server-t160-black-cart-480-left.png"
  },
  {
    id: "featured-exuk-t490",
    brand: "Lenovo",
    name: "Lenovo ThinkPad T490 🇬🇧",
    specs: "Intel Core i5 8th Gen • 8GB RAM • 256GB SSD • 14\" FHD • Grade A",
    price: 35000,
    category: "exuk business featured",
    badge: "exuk",
    source: "whatsapp",
    img: "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8Nzg4OTN8aW1hZ2UvcG5nfGg5Ni9oYTcvMTA2NzMyMDYyNjM4MzgucG5nfDllOTUyNGM1OGYxNjkxNGU2ZTMxNWQxMTE1NDQ0MGZkNDU4ZWYwOWExZWZjMDJkMDRiZTIwYjc0OGE5NGUwMzA/lenovo-laptop-thinkpad-t490-hero-1126.png"
  },

  /* ==========================================
     MITSUMI — NEW DELL LAPTOPS (+40% markup)
     ========================================== */
  {
    id: "dell-dc15250",
    brand: "Dell",
    name: "Dell 15 Pro Laptop",
    specs: "Intel Core i5-1334U • 8GB RAM • 512GB SSD • 15.6\" FHD • Ubuntu",
    price: usdToKes(512, 40),
    category: "new business",
    badge: "new",
    source: "mitsumi",
    img: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80"
  },
  {
    id: "dell-pro14-u5",
    brand: "Dell",
    name: "Dell Pro 14 PC14250",
    specs: "Intel Core Ultra 5 220U • 16GB RAM • 512GB SSD • 14\" FHD+ • Win 11 Pro",
    price: usdToKes(1052.28, 40),
    category: "new business",
    badge: "new",
    source: "mitsumi",
    img: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80"
  },
  {
    id: "dell-pro14-u7",
    brand: "Dell",
    name: "Dell Pro 14 Plus PB14250",
    specs: "Intel Core Ultra 7 265U • 16GB RAM • 512GB SSD • 14\" FHD+ • Win 11 Pro",
    price: usdToKes(1225.40, 40),
    category: "new business",
    badge: "new",
    source: "mitsumi",
    img: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80"
  },

  /* ==========================================
     MITSUMI — NEW HP LAPTOPS (+40% markup)
     ========================================== */
  {
    id: "hp-probook440g11",
    brand: "HP",
    name: "HP ProBook 440 G11",
    specs: "Intel Core U5-125U • 16GB RAM • 512GB SSD • 14\" WUXGA • DOS",
    price: usdToKes(709, 40),
    category: "new business",
    badge: "new",
    source: "mitsumi",
    img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&q=80"
  },
  {
    id: "hp-probook460g11-u7",
    brand: "HP",
    name: "HP ProBook 460 G11",
    specs: "Intel Core U7-155U • 16GB RAM • 512GB SSD • 16\" WUXGA • DOS",
    price: usdToKes(877, 40),
    category: "new business",
    badge: "new",
    source: "mitsumi",
    img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&q=80"
  },
  {
    id: "hp-probook460g11-u5",
    brand: "HP",
    name: "HP ProBook 460 G11 Silver",
    specs: "Intel Core U5-125U • 16GB DDR5 • 512GB SSD • 16\" WUXGA • Pike Silver",
    price: usdToKes(726, 40),
    category: "new business",
    badge: "new",
    source: "mitsumi",
    img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&q=80"
  },

  /* ==========================================
     MITSUMI — NEW LENOVO LAPTOPS (+40% markup)
     ========================================== */
  {
    id: "lenovo-tb14g9-c5",
    brand: "Lenovo",
    name: "Lenovo ThinkBook 14 G9",
    specs: "Intel Core 5-210H • 16GB DDR5 • 512GB SSD • 14\" WUXGA • Wi-Fi 7",
    price: usdToKes(677, 40),
    category: "new business",
    badge: "new",
    source: "mitsumi",
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80"
  },
  {
    id: "lenovo-tb14g9-c7",
    brand: "Lenovo",
    name: "Lenovo ThinkBook 14 G9 Pro",
    specs: "Intel Core 7-240H • 8GB DDR5 • 512GB SSD • 14\" WUXGA • No OS",
    price: usdToKes(722, 40),
    category: "new business",
    badge: "new",
    source: "mitsumi",
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80"
  },
  {
    id: "lenovo-x13-u7",
    brand: "Lenovo",
    name: "Lenovo ThinkPad X13",
    specs: "Intel U7-255U • 16GB DDR5 • 1TB SSD • 13.3\" WUXGA • Win 11 Pro • WWAN",
    price: usdToKes(1570, 40),
    category: "new business",
    badge: "new",
    source: "mitsumi",
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80"
  },

  /* ==========================================
     MITSUMI — SERVERS HPE (+60% markup)
     ========================================== */
  {
    id: "hpe-ml350-gen11-32c",
    brand: "HPE",
    name: "HPE ProLiant ML350 Gen11",
    specs: "16-Core Xeon 5416S • 32GB DDR5 • MR408i RAID • 4U Tower • 3-3-3 Warranty",
    price: usdToKes(5800, 60),
    category: "server tower",
    badge: "new",
    source: "mitsumi",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80"
  },
  {
    id: "hpe-dl380-gen11-32c",
    brand: "HPE",
    name: "HPE ProLiant DL380 Gen11 (32C)",
    specs: "1x Xeon Silver 4514Y 16C • 32GB DDR5 RDIMM • MR408i • 2U Rack • NBD Warranty",
    price: usdToKes(6500, 60),
    category: "server rack",
    badge: "new",
    source: "mitsumi",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80"
  },
  {
    id: "hpe-dl380-gen11-64c",
    brand: "HPE",
    name: "HPE ProLiant DL380 Gen11 (64C)",
    specs: "2x Xeon Gold 6430 32C • 64GB DDR5 • MR416i RAID • 2x480GB SSD • 2U Rack",
    price: usdToKes(10000, 60),
    category: "server rack",
    badge: "hot",
    source: "mitsumi",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80"
  },

  /* ==========================================
     MITSUMI — DELL SERVERS (+60% markup)
     ========================================== */
  {
    id: "dell-t160-tower",
    brand: "Dell",
    name: "Dell PowerEdge T160 Tower",
    specs: "Xeon 6315P 4C 2.8GHz • 32GB DDR5 ECC • 2TB SATA HDD • PERC H355 • 3yr NBD",
    price: usdToKes(1551, 60),
    category: "server tower",
    badge: "new",
    source: "mitsumi",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80"
  },
  {
    id: "dell-r360-rack",
    brand: "Dell",
    name: "Dell PowerEdge R360 Rack",
    specs: "Xeon 6315P 4C • 32GB DDR5 ECC • 2TB HDD • PERC H355 • 1U Rack • 3yr NBD",
    price: usdToKes(1761, 60),
    category: "server rack",
    badge: "new",
    source: "mitsumi",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80"
  },
  {
    id: "dell-r660xs-rack",
    brand: "Dell",
    name: "Dell PowerEdge R660xs Rack",
    specs: "2x Xeon Silver 4510 12C • 64GB RDIMM • 480GB SSD • 2U Mid-Range Rack • iDRAC Enterprise",
    price: usdToKes(4734, 60),
    category: "server rack",
    badge: "hot",
    source: "mitsumi",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80"
  },

  /* ==========================================
     MITSUMI — LENOVO SERVERS (+60% markup)
     ========================================== */
  {
    id: "lenovo-st45v3",
    brand: "Lenovo",
    name: "Lenovo ThinkSystem ST45 V3",
    specs: "AMD EPYC 4124P 4C • 16GB RAM • 2x1TB SATA • 500W • 3yr Warranty",
    price: usdToKes(1215.20, 60),
    category: "server tower",
    badge: "new",
    source: "mitsumi",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80"
  },
  {
    id: "lenovo-sr630v3",
    brand: "Lenovo",
    name: "Lenovo ThinkSystem SR630 V3",
    specs: "Xeon Silver 4510 12C • 32GB DDR5 RDIMM • 940-8i 4GB RAID • 1100W Titanium • Rails",
    price: usdToKes(3858.88, 60),
    category: "server rack",
    badge: "new",
    source: "mitsumi",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80"
  },

  /* ==========================================
     EX-UK LAPTOPS FROM IT GROUPS
     (Competitive market pricing from WhatsApp groups)
     ========================================== */
  {
    id: "exuk-hp840g7-i7",
    brand: "HP",
    name: "HP EliteBook 840 G7 (Ex-UK)",
    specs: "Intel Core i7 10th Gen • 16GB RAM • 512GB SSD • 14\" FHD • Non-Touch",
    price: 42000,
    category: "refurbished business exuk",
    badge: "exuk",
    source: "exuk",
    img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&q=80"
  },
  {
    id: "exuk-hp840g7-i5",
    brand: "HP",
    name: "HP EliteBook 840 G7 (Ex-UK)",
    specs: "Intel Core i5 10th Gen • 8GB RAM • 256GB SSD • 14\" FHD",
    price: 32000,
    category: "refurbished business exuk",
    badge: "exuk",
    source: "exuk",
    img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&q=80"
  },
  {
    id: "exuk-hp840g6-i7",
    brand: "HP",
    name: "HP EliteBook 840 G6 i7 Touch (Ex-UK)",
    specs: "Intel Core i7 8th Gen • 16GB RAM • 512GB SSD • Touch Screen",
    price: 38000,
    category: "refurbished business exuk",
    badge: "exuk",
    source: "exuk",
    img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&q=80"
  },
  {
    id: "exuk-hp840g6-i5",
    brand: "HP",
    name: "HP EliteBook 840 G6 i5 (Ex-UK)",
    specs: "Intel Core i5 8th Gen • 8GB RAM • 256GB SSD • 14\" FHD",
    price: 27000,
    category: "refurbished business exuk",
    badge: "exuk",
    source: "exuk",
    img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&q=80"
  },
  {
    id: "exuk-hp830g8-i5-touch",
    brand: "HP",
    name: "HP EliteBook 830 G8 Touch (Ex-UK)",
    specs: "Intel Core i5 11th Gen • 8GB RAM • 256GB SSD • Touch X360",
    price: 35000,
    category: "refurbished business exuk",
    badge: "exuk",
    source: "exuk",
    img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&q=80"
  },
  {
    id: "exuk-hp1040g6-touch",
    brand: "HP",
    name: "HP EliteBook 1040 G6 Touch X360 (Ex-UK)",
    specs: "Intel Core i5 8th Gen • 8GB RAM • 256GB SSD • Touch X360",
    price: 34000,
    category: "refurbished business exuk",
    badge: "exuk",
    source: "exuk",
    img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&q=80"
  },
  {
    id: "exuk-hp1030g2",
    brand: "HP",
    name: "HP EliteBook x360 1030 G2 Touch (Ex-UK)",
    specs: "Intel Core i5 • 8GB RAM • 256GB SSD • Touch X360",
    price: 33000,
    category: "refurbished business exuk",
    badge: "exuk",
    source: "exuk",
    img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&q=80"
  },
  {
    id: "exuk-hp820g3",
    brand: "HP",
    name: "HP EliteBook 820 G3 (Ex-UK)",
    specs: "Intel Core i5 • 8GB RAM • 256GB SSD • 12.5\" FHD",
    price: 21000,
    category: "refurbished business exuk",
    badge: "exuk",
    source: "exuk",
    img: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&q=80"
  },
  {
    id: "exuk-lenovo-x1carbon",
    brand: "Lenovo",
    name: "Lenovo ThinkPad X1 Carbon i7 (Ex-UK)",
    specs: "Intel Core i7 7th Gen • 16GB RAM • 512GB SSD • 14\" FHD IPS",
    price: 34000,
    category: "refurbished business exuk",
    badge: "exuk",
    source: "exuk",
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80"
  },
  {
    id: "exuk-lenovo-x390",
    brand: "Lenovo",
    name: "Lenovo ThinkPad X390 (Ex-UK)",
    specs: "Intel Core i5 8th Gen • 8GB RAM • 256GB SSD • 13.3\" FHD",
    price: 22000,
    category: "refurbished business exuk",
    badge: "exuk",
    source: "exuk",
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80"
  },
  {
    id: "exuk-lenovo-yoga390-i7",
    brand: "Lenovo",
    name: "Lenovo ThinkPad Yoga X390 i7 (Ex-UK)",
    specs: "Intel Core i7 8th Gen • 16GB RAM • 512GB SSD • Touch X360",
    price: 37000,
    category: "refurbished gaming exuk",
    badge: "exuk",
    source: "exuk",
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80"
  },
  {
    id: "exuk-lenovo-t490s-i7",
    brand: "Lenovo",
    name: "Lenovo ThinkPad T490s i7 (Ex-UK)",
    specs: "Intel Core i7 8th Gen • 8GB RAM • 256GB SSD • 14\" FHD",
    price: 27000,
    category: "refurbished business exuk",
    badge: "exuk",
    source: "exuk",
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80"
  },
  {
    id: "exuk-lenovo-x280",
    brand: "Lenovo",
    name: "Lenovo ThinkPad X280 (Ex-UK)",
    specs: "Intel Core i5 8th Gen • 8GB RAM • 256GB SSD • 12.5\" FHD",
    price: 21000,
    category: "refurbished business exuk",
    badge: "exuk",
    source: "exuk",
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80"
  },
  {
    id: "exuk-dell5300-i7-touch",
    brand: "Dell",
    name: "Dell Latitude 5300 i7 Touch (Ex-UK)",
    specs: "Intel Core i7 8th Gen • 8GB RAM • 256GB SSD • 13\" Touch X360",
    price: 27000,
    category: "refurbished business exuk",
    badge: "exuk",
    source: "exuk",
    img: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80"
  },
  {
    id: "exuk-dell7300-i5",
    brand: "Dell",
    name: "Dell Latitude 7300 i5 (Ex-UK)",
    specs: "Intel Core i5 8th Gen • 8GB RAM • 256GB SSD • 13.3\" FHD",
    price: 21000,
    category: "refurbished business exuk",
    badge: "exuk",
    source: "exuk",
    img: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80"
  },
  {
    id: "exuk-macbook-air-m1",
    brand: "Apple",
    name: "MacBook Air M1 2020 (Ex-UK)",
    specs: "Apple M1 Chip • 8GB RAM • 256GB SSD • 13.3\" Retina • Cycle Count ~32",
    price: 68000,
    category: "refurbished exuk",
    badge: "exuk",
    source: "exuk",
    img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400&q=80"
  },
  {
    id: "exuk-hp-zbook-i7",
    brand: "HP",
    name: "HP ZBook Studio G5 X360 (Ex-UK)",
    specs: "Intel Core i5 X360 • 16GB RAM • 512GB SSD • 4GB Nvidia Quadro",
    price: 68000,
    category: "refurbished gaming exuk",
    badge: "exuk",
    source: "exuk",
    img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&q=80"
  },
  {
    id: "exuk-hp-omnibook5",
    brand: "HP",
    name: "HP OmniBook 5 Flip 14 (New)",
    specs: "Intel Core 7 15th Gen • 16GB RAM • 512GB SSD • Touch X360 • 14\"",
    price: 113000,
    category: "new gaming",
    badge: "new",
    source: "exuk",
    img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&q=80"
  },
  {
    id: "exuk-hp-spectre-x360",
    brand: "HP",
    name: "HP Spectre X360 14 (Ex-UK)",
    specs: "Intel Core i7 11th Gen • 16GB RAM • 1TB SSD • 3K Touch Display • Backlit",
    price: 116000,
    category: "refurbished gaming exuk",
    badge: "exuk",
    source: "exuk",
    img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&q=80"
  },

  /* ==========================================
     EVERCOMPS ACCESSORIES (+10% markup)
     ========================================== */
  {
    id: "acc-privacy-filter-156",
    brand: "Generic",
    name: "15.6\" Anti-Glare Privacy Screen Filter",
    specs: "Anti-glare • UV protection • 15\" laptops • Easy install",
    price: Math.ceil(2500 * 1.10 / 100) * 100,
    category: "accessories",
    badge: "acc",
    source: "evercomps",
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80"
  },
  {
    id: "acc-cooling-pad-638b",
    brand: "Generic",
    name: "638B Adjustable Laptop Cooling Pad",
    specs: "Large fan • Multi-angle • Low noise • USB powered • 12\"-17\" laptops",
    price: Math.ceil(1500 * 1.10 / 100) * 100,
    category: "accessories",
    badge: "acc",
    source: "evercomps",
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80"
  },
  {
    id: "acc-cooling-pad-b9",
    brand: "Generic",
    name: "B9 A2 Dual-Fan Laptop Cooling Pad",
    specs: "2 quiet fans • 6 height levels • 9\"-17\" laptops • Anti-slip",
    price: Math.ceil(2000 * 1.10 / 100) * 100,
    category: "accessories",
    badge: "acc",
    source: "evercomps",
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80"
  },
  {
    id: "acc-stand-aluminium",
    brand: "Generic",
    name: "Aluminium Laptop Stand with Fan",
    specs: "High-quality alloy • Adjustable height • Built-in cooling fan • Silver",
    price: Math.ceil(4000 * 1.10 / 100) * 100,
    category: "accessories",
    badge: "acc",
    source: "evercomps",
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80"
  },
  {
    id: "acc-keyboard-x98",
    brand: "Attack Shark",
    name: "X98 Wireless Mechanical Gaming Keyboard",
    specs: "102 Keys • Bluetooth/2.4G/USB-C • Hot-swappable • 4000mAh • RGB",
    price: Math.ceil(8500 * 1.10 / 100) * 100,
    category: "accessories",
    badge: "acc",
    source: "evercomps",
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80"
  },
  {
    id: "acc-keyboard-b033",
    brand: "Generic",
    name: "B033 Folding Bluetooth Keyboard + Touchpad",
    specs: "64-key foldable • Bluetooth 3.0 • Windows/Android/iOS • Built-in touchpad",
    price: Math.ceil(4500 * 1.10 / 100) * 100,
    category: "accessories",
    badge: "acc",
    source: "evercomps",
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80"
  },
  {
    id: "acc-mifi-cudy-mf4",
    brand: "Cudy",
    name: "CUDY MF4 4G LTE Mobile MiFi",
    specs: "4G Cat.4 • 150Mbps DL • 10 devices • 7-hr battery • Africa/Asia/Europe",
    price: Math.ceil(5500 * 1.10 / 100) * 100,
    category: "accessories",
    badge: "acc",
    source: "evercomps",
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80"
  },
  {
    id: "acc-flashdrive-dahua-128",
    brand: "Dahua",
    name: "Dahua 128GB USB 3.0 Flash Drive",
    specs: "USB 3.0 • 128GB • FAT32 • Fast read/write • Metal casing",
    price: Math.ceil(1500 * 1.10 / 100) * 100,
    category: "accessories",
    badge: "acc",
    source: "evercomps",
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80"
  },
  {
    id: "acc-microsd-dahua-128",
    brand: "Dahua",
    name: "Dahua 128GB MicroSD Card",
    specs: "128GB • High compatibility • 4-type protection: waterproof/anti-magnetic/X-ray",
    price: Math.ceil(1500 * 1.10 / 100) * 100,
    category: "accessories",
    badge: "acc",
    source: "evercomps",
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80"
  },

  /* ==========================================
     ORIGINAL PRODUCTS (kept from launch)
     ========================================== */
  {
    id: "asus-rog-g14",
    brand: "ASUS",
    name: "ASUS ROG Zephyrus G14",
    specs: "AMD Ryzen 9 • 16GB RAM • 1TB SSD • RTX 4060 • 14\" QHD 165Hz",
    price: 165000,
    category: "new gaming",
    badge: "new",
    source: "stock",
    img: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=400&q=80"
  },
  {
    id: "macbook-air-m2",
    brand: "Apple",
    name: "MacBook Air M2",
    specs: "Apple M2 • 8GB RAM • 256GB SSD • 13.6\" Liquid Retina • 18-hr Battery",
    price: 178000,
    category: "new",
    badge: "new",
    source: "stock",
    img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400&q=80"
  },
  {
    id: "hp-omen-16",
    brand: "HP",
    name: "HP Omen 16",
    specs: "Intel i7 12th Gen • 16GB RAM • 512GB SSD • RTX 3060 6GB • 144Hz",
    price: 145000,
    category: "new gaming",
    badge: "hot",
    source: "stock",
    img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&q=80"
  }
];

// Badge color map
const BADGE_COLORS = {
  new: "#10b981",
  hot: "#ef4444",
  refurb: "#f59e0b",
  exuk: "#7c3aed",
  acc: "#00d4ff",
  server: "#0099cc"
};

// Badge labels
const BADGE_LABELS = {
  new: "New",
  hot: "🔥 Hot",
  refurb: "Refurbished",
  exuk: "Ex-UK",
  acc: "Accessory",
  server: "Server"
};

let currentLimit = 12;
let currentFilter = "featured";

// Render products with limit
function renderProducts(filter = "featured", append = false) {
  const grid = document.getElementById("productsGrid");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  if (!grid) return;

  if (filter !== currentFilter) {
    currentLimit = 12;
    currentFilter = filter;
  }

  const filtered = filter === "all"
    ? ALL_PRODUCTS
    : filter === "featured"
    ? ALL_PRODUCTS.filter(p => p.category.includes("featured"))
    : ALL_PRODUCTS.filter(p => p.category.includes(filter));

  const totalFiltered = filtered.length;
  const toShow = filtered.slice(0, currentLimit);

  const html = toShow.map(p => {
    const isServer = p.category.includes('server') || p.name.toLowerCase().includes('server');
    const currency = isServer ? 'USD' : 'KES';
    const symbol = isServer ? '$' : 'KES';
    const priceVal = isServer ? Math.round(p.price / USD_RATE) : p.price;
    const priceDisplay = `${symbol} ${priceVal.toLocaleString()}`;

    return `
      <div class="product-card" data-category="${p.category}" data-name="${p.name}" data-price="${p.price}">
        <div class="product-badge" style="background:${BADGE_COLORS[p.badge] || '#10b981'}">${BADGE_LABELS[p.badge] || p.badge}</div>
        <div class="product-img">
          <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x200/1a1a2e/00d4ff?text=${encodeURIComponent(p.brand)}'"/>
          <div class="product-overlay">
            <button class="quick-view-btn" onclick='openModal("${p.name.replace(/"/g,"&quot;")}", "${priceDisplay}", "${p.specs.replace(/"/g,"&quot;")}", "${p.img}", ${priceVal})'>Quick View</button>
          </div>
        </div>
        <div class="product-info">
          <div class="product-brand">${p.brand}</div>
          <h3>${p.name}</h3>
          <p>${p.specs}</p>
          <div class="product-footer">
            <div class="price-container">
              <span class="price">${priceDisplay}</span>
              <span class="vat-tag">Excl. VAT</span>
            </div>
            <button class="add-cart" onclick="addToCart('${p.name.replace(/'/g,"\\'")}', ${priceVal}, '${currency}')">Add to Cart</button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  grid.innerHTML = html;

  // Show/Hide Load More
  if (loadMoreBtn) {
    if (currentLimit >= totalFiltered) {
      loadMoreBtn.style.display = "none";
    } else {
      loadMoreBtn.style.display = "inline-block";
    }
  }

  // Re-attach scroll animations
  document.querySelectorAll(".product-card").forEach(el => {
    el.classList.add("fade-in");
    observer.observe(el);
  });
}

// Search products function
function searchProducts() {
  const query = document.getElementById("productSearch").value.toLowerCase();
  const grid = document.getElementById("productsGrid");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  
  if (!query) {
    renderProducts(currentFilter);
    return;
  }

  // Filter all products by query
  const filtered = ALL_PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(query) || 
    p.brand.toLowerCase().includes(query) || 
    p.specs.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query)
  );

  const html = filtered.map(p => {
    const isServer = p.category.includes('server') || p.name.toLowerCase().includes('server');
    const currency = isServer ? 'USD' : 'KES';
    const symbol = isServer ? '$' : 'KES';
    const priceVal = isServer ? Math.round(p.price / USD_RATE) : p.price;
    const priceDisplay = `${symbol} ${priceVal.toLocaleString()}`;

    return `
      <div class="product-card fade-in" data-category="${p.category}" data-name="${p.name}" data-price="${p.price}">
        <div class="product-badge" style="background:${BADGE_COLORS[p.badge] || '#10b981'}">${BADGE_LABELS[p.badge] || p.badge}</div>
        <div class="product-img">
          <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x200/1a1a2e/00d4ff?text=${encodeURIComponent(p.brand)}'"/>
          <div class="product-overlay">
            <button class="quick-view-btn" onclick='openModal("${p.name.replace(/"/g,"&quot;")}", "${priceDisplay}", "${p.specs.replace(/"/g,"&quot;")}", "${p.img}", ${priceVal})'>Quick View</button>
          </div>
        </div>
        <div class="product-info">
          <div class="product-brand">${p.brand}</div>
          <h3>${p.name}</h3>
          <p>${p.specs}</p>
          <div class="product-footer">
            <div class="price-container">
              <span class="price">${priceDisplay}</span>
              <span class="vat-tag">Excl. VAT</span>
            </div>
            <button class="add-cart" onclick="addToCart('${p.name.replace(/'/g,"\\'")}', ${priceVal}, '${currency}')">Add to Cart</button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  grid.innerHTML = html || `<div class="no-results">No products found matching "${query}"</div>`;
  if (loadMoreBtn) loadMoreBtn.style.display = "none";
}

// Load more handler
function loadMoreProducts() {
  currentLimit += 12;
  renderProducts(currentFilter);
}

// Override filterProducts to use new render
function filterProducts(category, btn) {
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderProducts(category);
}

// Init on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  renderProducts("featured");
});
