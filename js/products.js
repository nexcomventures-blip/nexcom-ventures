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
     FEATURED PRODUCTS (BEAT THE MARKET - 5K LESS THAN COMPETITORS)
     ========================================== */
  {
    id: "featured-macbook-pro-16-i9",
    brand: "Apple",
    name: "MacBook Pro 16 2019 i9",
    specs: "Intel Core i9 • 64GB RAM • 1TB SSD • 8GB Graphics",
    price: 90000,
    category: "exuk apple featured macbook",
    badge: "hot",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80"
  },
  {
    id: "featured-macbook-pro-m1-16",
    brand: "Apple",
    name: "MacBook Pro M1 13 2020",
    specs: "Apple M1 Chip • 16GB RAM • 512GB SSD • Retina",
    price: 85000,
    category: "exuk apple featured macbook",
    badge: "hot",
    img: "https://images.unsplash.com/photo-1611186871348-b1ec696e5237?w=800&q=80"
  },
  {
    id: "featured-macbook-air-m1",
    brand: "Apple",
    name: "MacBook Air M1 2020",
    specs: "Apple M1 Chip • 8GB RAM • 256GB SSD • Light & Powerful",
    price: 60000,
    category: "exuk apple featured macbook",
    badge: "hot",
    img: "https://images.unsplash.com/photo-1611186871348-b1ec696e5237?w=800&q=80"
  },
  {
    id: "featured-dell-pc14250",
    brand: "Dell",
    name: "Dell Pro 14 PC14250",
    specs: "Intel Core Ultra 5 • 16GB RAM • 512GB SSD • 14\" FHD+",
    price: usdToKes(1052, 20),
    category: "new business featured",
    badge: "new",
    img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/dell-pro/pc14250/media-gallery/notebook-dell-pro-pc14250-hd-fhd-bk-gallery-2.psd?fmt=png-alpha&wid=1000"
  },
  {
    id: "featured-hp-probook460g11",
    brand: "HP",
    name: "HP ProBook 460 G11",
    specs: "Intel Core U7 • 16GB RAM • 512GB SSD • 16\" WUXGA",
    price: usdToKes(877, 20),
    category: "new business featured",
    badge: "new",
    img: "https://m.media-amazon.com/images/I/61cojcv858L.jpg"
  },
  {
    id: "featured-samsung-sam930",
    brand: "Samsung",
    name: "Samsung Sam 930 i7",
    specs: "11th Gen i7 • 16GB RAM • 512GB SSD",
    price: 70000,
    category: "exuk business featured",
    badge: "hot",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Samsung+Sam+930"
  },
  /* ==========================================
     MACBOOK PRICE LIST (Lowest in Nairobi)
     ========================================== */
  {
    id: "mac-pro-15-2019",
    brand: "Apple",
    name: "MacBook Pro 15 2019 i7",
    specs: "16GB RAM • 512GB SSD • 4GB Graphics",
    price: 60000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80"
  },
  {
    id: "mac-pro-13-2019-i7",
    brand: "Apple",
    name: "MacBook Pro 13 2019 i7",
    specs: "16GB RAM • 512GB SSD • Space Gray",
    price: 50000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://images.unsplash.com/photo-1611186871348-b1ec696e5237?w=800&q=80"
  },
  {
    id: "mac-air-2017-i5",
    brand: "Apple",
    name: "MacBook Air 13 2017 i5",
    specs: "8GB RAM • 256GB SSD • Best Budget Deal",
    price: 22500,
    category: "exuk apple macbook",
    badge: "hot",
    img: "https://images.unsplash.com/photo-1611186871348-b1ec696e5237?w=800&q=80"
  },
  /* ==========================================
     OTHER LAPTOPS
     ========================================== */
  {
    id: "exuk-hp840g7",
    brand: "HP",
    name: "HP EliteBook 840 G7",
    specs: "Intel Core i7 10th Gen • 16GB RAM • 512GB SSD • 14\" FHD",
    price: 37000,
    category: "exuk business",
    badge: "exuk",
    img: "https://ssl-product-images.www8-hp.com/digfcpc/c08125553/front_900X900.png"
  },
  {
    id: "exuk-lenovo-x1",
    brand: "Lenovo",
    name: "ThinkPad X1 Carbon i7",
    specs: "Intel Core i7 7th Gen • 16GB RAM • 512GB SSD • 14\" FHD",
    price: 29000,
    category: "exuk business",
    badge: "exuk",
    img: "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8OTM3NjB8aW1hZ2UvcG5nfGg0Zi9oMmIvMTEwNjE1NzA2NTA2NTQucG5nfDY0ZGUyNTVmZmI1YzI5ZDY4ZDMwYmI0NmIxZDI1Zjk0ZDA0YjRkZGIzYjYyMDllNDNiZDFmZTc3YjcyYWRmMDM/lenovo-laptop-thinkbook-14-gen-2-intel-hero.png"
  },
  {
    id: "exuk-dell5400",
    brand: "Dell",
    name: "Dell Latitude 5400 i5",
    specs: "Intel Core i5 8th Gen • 8GB RAM • 256GB SSD • 14\" FHD",
    price: 19000,
    category: "exuk business",
    badge: "exuk",
    img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-5440-laptop/media-gallery/latitude-5440-laptop-gallery-1.psd?fmt=png-alpha&wid=1000"
  },
  /* ==========================================
     ACCESSORIES & SERVICES
     ========================================== */
  {
    id: "part-mac-a2337-battery",
    brand: "Apple",
    name: "MacBook Air A2337 Battery",
    specs: "Original Replacement • For M1 MacBook Air",
    price: 12000,
    category: "parts battery",
    badge: "new",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=MacBook+Battery"
  },
  {
    id: "part-mac-a2337-screen",
    brand: "Apple",
    name: "MacBook Air A2337 Screen",
    specs: "13.3\" Liquid Retina • M1 Replacement",
    price: 34900,
    category: "parts screen",
    badge: "new",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=MacBook+Screen"
  }
];

// Badge color map
const BADGE_LABELS = {
  new: "New Arrival",
  hot: "🔥 Bestseller",
  refurb: "Refurbished",
  exuk: "Ex-UK Grade A"
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

    // Link to macbook page if it is a macbook
    const viewBtn = p.category.includes('macbook') 
      ? `<a href="macbook-nairobi.html" class="quick-view-btn" style="text-decoration:none;display:inline-block;text-align:center">View Full List</a>`
      : `<button class="quick-view-btn" onclick='openModal("${p.name.replace(/"/g,"&quot;")}", "${priceDisplay}", "${p.specs.replace(/"/g,"&quot;")}", "${p.img}", ${priceVal})'>Quick View</button>`;

    return `
      <div class="product-card">
        <div class="product-badge ${p.badge}">${BADGE_LABELS[p.badge] || p.badge}</div>
        <div class="product-img">
          <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x200/0a0a0a/f01a24?text=${encodeURIComponent(p.brand)}'"/>
          <div class="product-overlay">
            ${viewBtn}
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
