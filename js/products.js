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
    price: 175000,
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
    price: 39500,
    category: "exuk business",
    badge: "exuk",
    img: "https://ssl-product-images.www8-hp.com/digfcpc/c08125553/front_900X900.png"
  },
  {
    id: "exuk-hp840g6",
    brand: "HP",
    name: "HP EliteBook 840 G6 i5",
    specs: "Intel Core i5 8th Gen • 8GB RAM • 256GB SSD • 14\" FHD",
    price: 25500,
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
    price: 64500,
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
