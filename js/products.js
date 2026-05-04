const ALL_PRODUCTS = [
  /* ==========================================
     FEATURED PRODUCTS (PREMIUM COMPETITIVE)
     ========================================== */
  {
    id: "featured-dell-xps-9330",
    brand: "Dell",
    name: "Dell XPS 13 9330",
    specs: "Intel Core i7 13th Gen • 16GB RAM • 512GB SSD • InfinityEdge",
    price: 135000,
    category: "exuk business featured dell",
    badge: "new",
    img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9315/media-gallery/laptop-xps-13-9315-silver-gallery-1.psd?fmt=png-alpha&wid=1000"
  },
  {
    id: "featured-dell-xps-9320",
    brand: "Dell",
    name: "Dell XPS 13 Plus 9320",
    specs: "Intel Core i7 12th Gen • 16GB RAM • 512GB SSD • OLED Touch",
    price: 110000,
    category: "exuk business featured dell",
    badge: "hot",
    img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9315/media-gallery/laptop-xps-13-9315-silver-gallery-1.psd?fmt=png-alpha&wid=1000"
  },
  {
    id: "featured-macbook-pro-m2",
    brand: "Apple",
    name: "MacBook Pro 13 M2 (2022)",
    specs: "Apple M2 Chip • 8GB RAM • 512GB SSD • Retina Display",
    price: 140000,
    category: "exuk apple featured macbook",
    badge: "hot",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80"
  },
  {
    id: "featured-macbook-air-m2",
    brand: "Apple",
    name: "MacBook Air 13 M2 (2022)",
    specs: "Apple M2 Chip • 8GB RAM • 256GB SSD • Liquid Retina",
    price: 115000,
    category: "exuk apple featured macbook",
    badge: "new",
    img: "https://images.unsplash.com/photo-1611186871348-b1ec696e5237?w=800&q=80"
  },
  {
    id: "featured-lenovo-x1-g10",
    brand: "Lenovo",
    name: "ThinkPad X1 Carbon Gen 10",
    specs: "Intel Core i7 12th Gen • 16GB RAM • 512GB SSD • 14\" Touch",
    price: 91000,
    category: "exuk business featured lenovo",
    badge: "hot",
    img: "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8OTM3NjB8aW1hZ2UvcG5nfGg0Zi9oMmIvMTEwNjE1NzA2NTA2NTQucG5nfDY0ZGUyNTVmZmI1YzI5ZDY4ZDMwYmI0NmIxZDI1Zjk0ZDA0YjRkZGIzYjYyMDllNDNiZDFmZTc3YjcyYWRmMDM/lenovo-laptop-thinkbook-14-gen-2-intel-hero.png"
  },
  {
    id: "featured-dell-xps-9310",
    brand: "Dell",
    name: "Dell XPS 13 9310",
    specs: "Intel Core i7 11th Gen • 16GB RAM • 512GB SSD • FHD+ Touch",
    price: 85000,
    category: "exuk business featured dell",
    badge: "exuk",
    img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9315/media-gallery/laptop-xps-13-9315-silver-gallery-1.psd?fmt=png-alpha&wid=1000"
  },
  {
    id: "featured-hp840g8-i7",
    brand: "HP",
    name: "HP EliteBook 840 G8 i7",
    specs: "Intel Core i7 11th Gen • 16GB RAM • 512GB SSD • 14\" FHD",
    price: 63000,
    category: "exuk business featured hp",
    badge: "hot",
    img: "https://ssl-product-images.www8-hp.com/digfcpc/c08125553/front_900X900.png"
  },
  {
    id: "featured-dell-xps-7390",
    brand: "Dell",
    name: "Dell XPS 13 7390",
    specs: "Intel Core i7 10th Gen • 16GB RAM • 512GB SSD • 13.3\" FHD",
    price: 49500,
    category: "exuk business featured dell",
    badge: "exuk",
    img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9315/media-gallery/laptop-xps-13-9315-silver-gallery-1.psd?fmt=png-alpha&wid=1000"
  },
  /* ==========================================
     LENOVO PRICE LIST (Premium Quality)
     ========================================== */
  {
    id: "lenovo-t490",
    brand: "Lenovo",
    name: "ThinkPad T490",
    specs: "i5 8th Gen • 16GB RAM • 512GB SSD",
    price: 49500,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8OTM3NjB8aW1hZ2UvcG5nfGg0Zi9oMmIvMTEwNjE1NzA2NTA2NTQucG5nfDY0ZGUyNTVmZmI1YzI5ZDY4ZDMwYmI0NmIxZDI1Zjk0ZDA0YjRkZGIzYjYyMDllNDNiZDFmZTc3YjcyYWRmMDM/lenovo-laptop-thinkbook-14-gen-2-intel-hero.png"
  },
  {
    id: "lenovo-x280",
    brand: "Lenovo",
    name: "ThinkPad X280 i5",
    specs: "i5 8th Gen • 8GB RAM • 256GB SSD",
    price: 29500,
    category: "exuk business lenovo",
    badge: "hot",
    img: "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8OTM3NjB8aW1hZ2UvcG5nfGg0Zi9oMmIvMTEwNjE1NzA2NTA2NTQucG5nfDY0ZGUyNTVmZmI1YzI5ZDY4ZDMwYmI0NmIxZDI1Zjk0ZDA0YjRkZGIzYjYyMDllNDNiZDFmZTc3YjcyYWRmMDM/lenovo-laptop-thinkbook-14-gen-2-intel-hero.png"
  },
  /* ==========================================
     HP & DELL OPTIONS
     ========================================== */
  {
    id: "exuk-hp840g6",
    brand: "HP",
    name: "HP EliteBook 840 G6 i5",
    specs: "Intel Core i5 8th Gen • 16GB RAM • 256GB SSD • 14\" FHD",
    price: 36500,
    category: "exuk business hp",
    badge: "exuk",
    img: "https://ssl-product-images.www8-hp.com/digfcpc/c08125553/front_900X900.png"
  },
  {
    id: "exuk-dell5400",
    brand: "Dell",
    name: "Dell Latitude 5400 i5",
    specs: "Intel Core i5 8th Gen • 8GB RAM • 256GB SSD • 14\" FHD",
    price: 24000,
    category: "exuk business dell",
    badge: "exuk",
    img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-5440-laptop/media-gallery/latitude-5440-laptop-gallery-1.psd?fmt=png-alpha&wid=1000"
  },
  /* ==========================================
     PARTS & SERVICES
     ========================================== */
  {
    id: "part-mac-a2337-battery",
    brand: "Apple",
    name: "MacBook Air A2337 Battery",
    specs: "Original Replacement • For M1 MacBook Air",
    price: 14000,
    category: "parts battery apple macbook",
    badge: "new",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=MacBook+Battery"
  },
  {
    id: "part-mac-a2337-screen",
    brand: "Apple",
    name: "MacBook Air A2337 Screen",
    specs: "13.3\" Liquid Retina • M1 Replacement",
    price: 39900,
    category: "parts screen apple macbook",
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
