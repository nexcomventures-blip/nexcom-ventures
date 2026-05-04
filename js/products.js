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
     FEATURED PRODUCTS (PREMIUM COMPETITIVE)
     ========================================== */
  {
    id: "featured-macbook-pro-16-i9",
    brand: "Apple",
    name: "MacBook Pro 16 2019 i9",
    specs: "Intel Core i9 • 64GB RAM • 1TB SSD • 8GB Graphics",
    price: 140000,
    category: "exuk apple featured macbook",
    badge: "hot",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80"
  },
  {
    id: "featured-hp-spectre-15t",
    brand: "HP",
    name: "HP Spectre x360 15t",
    specs: "i7 10th Gen • 16GB RAM • 512GB SSD • 2GB Graphics • 4K Touch",
    price: 119000,
    category: "exuk business featured hp",
    badge: "new",
    img: "https://ssl-product-images.www8-hp.com/digfcpc/c08125553/front_900X900.png"
  },
  {
    id: "featured-dell-precision-5550",
    brand: "Dell",
    name: "Dell Precision 5550",
    specs: "i7 10th Gen • 16GB RAM • 512GB SSD • 4GB Nvidia T1000",
    price: 98000,
    category: "exuk business featured dell",
    badge: "hot",
    img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-5440-laptop/media-gallery/latitude-5440-laptop-gallery-1.psd?fmt=png-alpha&wid=1000"
  },
  {
    id: "featured-lenovo-x1-g9",
    brand: "Lenovo",
    name: "ThinkPad X1 Carbon Gen 9",
    specs: "i7 11th Gen • 16GB RAM • 512GB SSD • 14\" Touch",
    price: 119500,
    category: "exuk business featured lenovo",
    badge: "new",
    img: "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8OTM3NjB8aW1hZ2UvcG5nfGg0Zi9oMmIvMTEwNjE1NzA2NTA2NTQucG5nfDY0ZGUyNTVmZmI1YzI5ZDY4ZDMwYmI0NmIxZDI1Zjk0ZDA0YjRkZGIzYjYyMDllNDNiZDFmZTc3YjcyYWRmMDM/lenovo-laptop-thinkbook-14-gen-2-intel-hero.png"
  },
  {
    id: "featured-macbook-pro-m1-16",
    brand: "Apple",
    name: "MacBook Pro M1 13 2020",
    specs: "Apple M1 Chip • 16GB RAM • 512GB SSD • Retina",
    price: 145000,
    category: "exuk apple featured macbook",
    badge: "hot",
    img: "https://images.unsplash.com/photo-1611186871348-b1ec696e5237?w=800&q=80"
  },
  {
    id: "featured-hp-zbook-firefly",
    brand: "HP",
    name: "HP ZBook Firefly G7",
    specs: "i7 10th Gen • 32GB RAM • 512GB SSD • 4GB Nvidia • Touch",
    price: 98000,
    category: "exuk business featured hp",
    badge: "hot",
    img: "https://ssl-product-images.www8-hp.com/digfcpc/c08125553/front_900X900.png"
  },
  {
    id: "featured-dell-xps-9320",
    brand: "Dell",
    name: "Dell XPS 13 9320",
    specs: "i7 12th Gen • 16GB RAM • 512GB SSD • OLED Touch",
    price: 133000,
    category: "exuk business featured dell",
    badge: "new",
    img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-5440-laptop/media-gallery/latitude-5440-laptop-gallery-1.psd?fmt=png-alpha&wid=1000"
  },
  {
    id: "featured-samsung-sam930",
    brand: "Samsung",
    name: "Samsung Sam 930 i7",
    specs: "11th Gen i7 • 16GB RAM • 512GB SSD",
    price: 115000,
    category: "exuk business featured",
    badge: "hot",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Samsung+Sam+930"
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

    // Link logic
    let viewBtn = `<button class="quick-view-btn" onclick='openModal("${p.name.replace(/"/g,"&quot;")}", "${priceDisplay}", "${p.specs.replace(/"/g,"&quot;")}", "${p.img}", ${priceVal})'>Quick View</button>`;
    if (p.category.includes('macbook')) {
      viewBtn = `<a href="macbook-nairobi.html" class="quick-view-btn" style="text-decoration:none;display:inline-block;text-align:center">All MacBooks</a>`;
    } else if (p.category.includes('lenovo')) {
      viewBtn = `<a href="lenovo-nairobi.html" class="quick-view-btn" style="text-decoration:none;display:inline-block;text-align:center">All Lenovos</a>`;
    } else if (p.category.includes('hp')) {
      viewBtn = `<a href="hp-nairobi.html" class="quick-view-btn" style="text-decoration:none;display:inline-block;text-align:center">All HP Laptops</a>`;
    } else if (p.category.includes('dell')) {
      viewBtn = `<a href="dell-nairobi.html" class="quick-view-btn" style="text-decoration:none;display:inline-block;text-align:center">All Dell Laptops</a>`;
    }

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
