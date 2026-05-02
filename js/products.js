/* ============================================
   NEXCOM VENTURES — World-Class Products & Rendering
   ============================================ */

const USD_RATE = 129;

// Helper
function usdToKes(usd, markup) {
  return Math.ceil((usd * USD_RATE) * (1 + markup / 100) / 500) * 500;
}

const ALL_PRODUCTS = [
  /* ==========================================
     FEATURED PRODUCTS
     ========================================== */
  {
    id: "featured-dell-pc14250",
    brand: "Dell",
    name: "Dell Pro 14 PC14250",
    specs: "Intel Core Ultra 5 • 16GB RAM • 512GB SSD • 14\" FHD+",
    price: usdToKes(1052, 40),
    category: "new business featured",
    badge: "new",
    img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/dell-pro/pc14250/media-gallery/notebook-dell-pro-pc14250-hd-fhd-bk-gallery-2.psd?fmt=png-alpha&wid=1000"
  },
  {
    id: "featured-hp-probook460g11",
    brand: "HP",
    name: "HP ProBook 460 G11",
    specs: "Intel Core U7 • 16GB RAM • 512GB SSD • 16\" WUXGA",
    price: usdToKes(877, 40),
    category: "new business featured",
    badge: "new",
    img: "https://m.media-amazon.com/images/I/61cojcv858L.jpg"
  },
  {
    id: "featured-macbook-air-m2",
    brand: "Apple",
    name: "MacBook Air M2",
    specs: "Apple M2 Chip • 8GB RAM • 256GB SSD • 13.6\" Liquid Retina",
    price: 178000,
    category: "new featured",
    badge: "new",
    img: "https://www.apple.com/newsroom/images/product/mac/standard/Apple-MacBook-Air-M2-availability-July-2022-hero_big.jpg.large.jpg"
  },
  {
    id: "featured-asus-rog-g14",
    brand: "ASUS",
    name: "ASUS ROG Zephyrus G14",
    specs: "AMD Ryzen 9 • 16GB RAM • 1TB SSD • RTX 4060 • 165Hz",
    price: 165000,
    category: "new gaming featured",
    badge: "hot",
    img: "https://dlcdnwebimgs.asus.com/gain/A1433BAB-3BC8-40BF-965C-B3E95E59BC61/w1000/h732"
  },
  {
    id: "featured-exuk-t490",
    brand: "Lenovo",
    name: "Lenovo ThinkPad T490",
    specs: "Intel Core i5 8th Gen • 8GB RAM • 256GB SSD • 14\" FHD",
    price: 35000,
    category: "exuk business featured",
    badge: "exuk",
    img: "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8Nzg4OTN8aW1hZ2UvcG5nfGg5Ni9oYTcvMTA2NzMyMDYyNjM4MzgucG5nfDllOTUyNGM1OGYxNjkxNGU2ZTMxNWQxMTE1NDQ0MGZkNDU4ZWYwOWExZWZjMDJkMDRiZTIwYjc0OGE5NGUwMzA/lenovo-laptop-thinkpad-t490-hero-1126.png"
  },
  {
    id: "featured-dell-r360",
    brand: "Dell",
    name: "PowerEdge R360 Rack",
    specs: "Xeon 6315P • 32GB DDR5 ECC • 2TB HDD • 1U Rack",
    price: usdToKes(1761, 60),
    category: "server rack featured",
    badge: "new",
    img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-enterprise-products/enterprise-systems/poweredge/t160/spi/poweredge-server-t160-black-cart-480-left.png"
  },

  /* ==========================================
     EX-UK / REFURBISHED (The "Peace of Mind" Selection)
     ========================================== */
  {
    id: "exuk-hp840g7",
    brand: "HP",
    name: "HP EliteBook 840 G7",
    specs: "Intel Core i7 10th Gen • 16GB RAM • 512GB SSD • 14\" FHD",
    price: 42000,
    category: "exuk business",
    badge: "exuk",
    img: "https://ssl-product-images.www8-hp.com/digfcpc/c08125553/front_900X900.png"
  },
  {
    id: "exuk-hp840g6",
    brand: "HP",
    name: "HP EliteBook 840 G6 i5",
    specs: "Intel Core i5 8th Gen • 8GB RAM • 256GB SSD • 14\" FHD",
    price: 27000,
    category: "exuk business",
    badge: "exuk",
    img: "https://ssl-product-images.www8-hp.com/digfcpc/c08125553/front_900X900.png"
  },
  {
    id: "exuk-lenovo-x1",
    brand: "Lenovo",
    name: "ThinkPad X1 Carbon i7",
    specs: "Intel Core i7 7th Gen • 16GB RAM • 512GB SSD • 14\" FHD",
    price: 34000,
    category: "exuk business",
    badge: "exuk",
    img: "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8OTM3NjB8aW1hZ2UvcG5nfGg0Zi9oMmIvMTEwNjE1NzA2NTA2NTQucG5nfDY0ZGUyNTVmZmI1YzI5ZDY4ZDMwYmI0NmIxZDI1Zjk0ZDA0YjRkZGIzYjYyMDllNDNiZDFmZTc3YjcyYWRmMDM/lenovo-laptop-thinkbook-14-gen-2-intel-hero.png"
  },
  {
    id: "exuk-macbook-m1",
    brand: "Apple",
    name: "MacBook Air M1 2020",
    specs: "Apple M1 Chip • 8GB RAM • 256GB SSD • Space Gray",
    price: 68000,
    category: "exuk apple",
    badge: "exuk",
    img: "https://images.unsplash.com/photo-1611186871348-b1ec696e5237?w=800&q=80"
  },
  {
    id: "exuk-dell5400",
    brand: "Dell",
    name: "Dell Latitude 5400 i5",
    specs: "Intel Core i5 8th Gen • 8GB RAM • 256GB SSD • 14\" FHD",
    price: 24000,
    category: "exuk business",
    badge: "exuk",
    img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-5440-laptop/media-gallery/latitude-5440-laptop-gallery-1.psd?fmt=png-alpha&wid=1000"
  },
  /* ==========================================
     MACBOOK PARTS & ACCESSORIES (Wholesale Markup Applied)
     ========================================== */
  {
    id: "part-mac-a2337-battery",
    brand: "Apple",
    name: "MacBook Air A2337 Battery",
    specs: "Original Replacement • High Capacity • For M1 MacBook Air",
    price: 14000,
    category: "parts battery",
    badge: "new",
    img: "https://media.istockphoto.com/id/1310134954/photo/macbook-air-m1-battery.jpg?s=612x612&w=0&k=20&c=qY5X-yv8_v9v_v9v_v9v_v9v_v9v_v9v_v9v_v9v_v9v="
  },
  {
    id: "part-mac-a1708-battery",
    brand: "Apple",
    name: "MacBook Pro A1708 Battery",
    specs: "Original Grade • For MacBook Pro 13\" (2016-2017)",
    price: 12600,
    category: "parts battery",
    badge: "new",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=MacBook+Battery"
  },
  {
    id: "part-mac-a2337-screen",
    brand: "Apple",
    name: "MacBook Air A2337 Screen",
    specs: "13.3\" Liquid Retina • Space Gray • M1 Replacement",
    price: 39900,
    category: "parts screen",
    badge: "new",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=MacBook+Screen"
  },
  {
    id: "part-nvme-1tb",
    brand: "Kingston",
    name: "Kingston 1TB NVMe SSD",
    specs: "NVMe PCIe Gen 4.0 • Ultra Fast Read/Write",
    price: 11200,
    category: "parts ssd",
    badge: "new",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=1TB+NVMe"
  },
  /* ==========================================
     UPGRADES, PARTS & SERVICES (Market Prices + Markup)
     ========================================== */
  {
    id: "part-ssd-upgrade",
    brand: "Generic",
    name: "High-Speed SSD Upgrade",
    specs: "128GB, 256GB, 512GB & 1TB SSDs • Installation Included",
    price: 3500,
    category: "parts ssd upgrade",
    badge: "new",
    img: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&q=80"
  },
  {
    id: "part-ram-upgrade",
    brand: "Generic",
    name: "DDR3 / DDR4 RAM Upgrade",
    specs: "4GB, 8GB, 16GB & 32GB RAM • Boost Performance",
    price: 3000,
    category: "parts ram upgrade",
    badge: "new",
    img: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=800&q=80"
  },
  {
    id: "part-charger-universal",
    brand: "Multi-Brand",
    name: "Laptop Charger / Adapter",
    specs: "HP, Dell, Lenovo, Apple & Type-C • Original & OEM",
    price: 3000,
    category: "parts charger",
    badge: "new",
    img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&q=80"
  },
  {
    id: "part-hub-usbc",
    brand: "Vention/UGREEN",
    name: "Premium USB-C Hub",
    specs: "5-in-1, 7-in-1 & 10-in-1 • HDMI, USB 3.0, SD Card",
    price: 2500,
    category: "parts hub",
    badge: "new",
    img: "https://images.unsplash.com/photo-1610492160931-df23215903ca?w=800&q=80"
  },
  {
    id: "part-screen-replacement",
    brand: "Generic",
    name: "Laptop Screen Replacement",
    specs: "11.6”, 13.3”, 14.0” & 15.6” • Slim, FHD & Touch",
    price: 6500,
    category: "parts screen repair",
    badge: "new",
    img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80"
  },
  {
    id: "part-battery-replacement",
    brand: "Generic",
    name: "Original Laptop Battery",
    specs: "High Capacity • For HP, Dell, Lenovo, MacBook",
    price: 3500,
    category: "parts battery",
    badge: "new",
    img: "https://images.unsplash.com/photo-1624938650063-4f964092b740?w=800&q=80"
  },
  {
    id: "part-motherboard-repair",
    brand: "Generic",
    name: "Motherboard Chip-Level Repair",
    specs: "Power Issues, Charging Problems, Liquid Damage",
    price: 6000,
    category: "parts motherboard repair",
    badge: "new",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
  },
  {
    id: "service-data-recovery",
    brand: "Nexcom",
    name: "Data Recovery & Migration",
    specs: "Backup, Restore & System Cloning • Safe & Secure",
    price: 4500,
    category: "services data",
    badge: "new",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?w=800&q=80"
  },
  {
    id: "part-laptop-bag",
    brand: "Kingsons/Eminent",
    name: "Premium Laptop Bag / Backpack",
    specs: "Water Resistant • Padded Compartments • Durable",
    price: 2500,
    category: "parts bag",
    badge: "new",
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80"
  }
];

// Badge color map (matches updated CSS classes)
const BADGE_LABELS = {
  new: "New Arrival",
  hot: "🔥 Bestseller",
  refurb: "Refurbished",
  exuk: "🇬🇧 Ex-UK Grade A"
};

let currentLimit = 12;
let currentFilter = "featured";

// Render products
function renderProducts(filter = "featured") {
  const grid = document.getElementById("productsGrid");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  if (!grid) return;

  currentFilter = filter;
  const filtered = filter === "all"
    ? ALL_PRODUCTS
    : filter === "featured"
    ? ALL_PRODUCTS.filter(p => p.category.includes("featured"))
    : ALL_PRODUCTS.filter(p => p.category.includes(filter));

  const toShow = filtered.slice(0, currentLimit);

  grid.innerHTML = toShow.map(p => {
    const isServer = p.category.includes('server');
    const currency = isServer ? 'USD' : 'KES';
    const symbol = isServer ? '$' : 'KES';
    const priceVal = p.price;
    const priceDisplay = `${symbol} ${priceVal.toLocaleString()}`;

    return `
      <div class="product-card">
        <div class="product-badge ${p.badge}">${BADGE_LABELS[p.badge] || p.badge}</div>
        <div class="product-img">
          <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x200/0a0a0a/f01a24?text=${encodeURIComponent(p.brand)}'"/>
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

  if (loadMoreBtn) {
    loadMoreBtn.style.display = currentLimit >= filtered.length ? "none" : "inline-block";
  }
}

function filterProducts(category, btn) {
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
  currentLimit = 12;
  renderProducts(category);
}

function loadMoreProducts() {
  currentLimit += 12;
  renderProducts(currentFilter);
}

function searchProducts() {
  const query = document.getElementById("productSearch").value.toLowerCase();
  const grid = document.getElementById("productsGrid");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  if (!grid) return;

  if (!query) { renderProducts(currentFilter); return; }
  
  const filtered = ALL_PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(query) || 
    p.brand.toLowerCase().includes(query) || 
    p.specs.toLowerCase().includes(query)
  );

  grid.innerHTML = filtered.map(p => {
    const isServer = p.category.includes('server');
    const currency = isServer ? 'USD' : 'KES';
    const symbol = isServer ? '$' : 'KES';
    const priceVal = p.price;
    const priceDisplay = `${symbol} ${priceVal.toLocaleString()}`;

    return `
      <div class="product-card">
        <div class="product-badge ${p.badge}">${BADGE_LABELS[p.badge] || p.badge}</div>
        <div class="product-img">
          <img src="${p.img}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/300x200/0a0a0a/f01a24?text=${encodeURIComponent(p.brand)}'"/>
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
  }).join("") || `<div class="no-results">No matches found for "${query}"</div>`;
  
  if (loadMoreBtn) loadMoreBtn.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => renderProducts("featured"));
