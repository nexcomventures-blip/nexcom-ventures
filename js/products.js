const ALL_PRODUCTS = [{
    id: "hpe-dl380-gen11-16core",
    brand: "HPE",
    name: "HPE ProLiant DL380 Gen11 (16-Core)",
    specs: "Intel Xeon Gold 5416S • 32GB RAM • 2U Rack • 1 Year Warranty • BRAND NEW",
    price: 1014390,
    category: "server enterprise hpe featured",
    badge: "new",
    img: "https://expresscomputersystems.com/cdn/shop/files/hpe-dl380-gen11-12-edsff_800x.jpg?v=1731626706"
},
{
    id: "hpe-dl380-gen11-12core",
    brand: "HPE",
    name: "HPE ProLiant DL380 Gen11 (12-Core)",
    specs: "Intel Xeon Silver 4410Y • 32GB RAM • 2U Rack • 1 Year Warranty • BRAND NEW",
    price: 985660,
    category: "server enterprise hpe featured",
    badge: "new",
    img: "https://expresscomputersystems.com/cdn/shop/files/hpe-dl380-gen11-12-edsff_800x.jpg?v=1731626706"
},
{
    id: "dell-latitude-3450-new",
    brand: "Dell",
    name: "Dell Latitude 3450",
    specs: "Core i7-1355U • 8GB RAM • 512GB SSD • 14\" FHD • 1 Year Warranty • BRAND NEW",
    price: 209729,
    category: "business dell featured",
    badge: "new",
    img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-3440-laptop/media-gallery/laptop-latitude-14-3440-t-gray-gallery-1.psd?fmt=png-alpha&wid=1000"
},
{
    id: "lenovo-yoga-7-oled-new",
    brand: "Lenovo",
    name: "Lenovo Yoga 7 2-in-1 OLED",
    specs: "Intel Core Ultra 7 • 16GB RAM • 1TB SSD • OLED Touch • 1 Year Warranty • BRAND NEW",
    price: 309400,
    category: "business lenovo featured premium",
    badge: "new",
    img: "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MjI1NTYyfGltYWdlL3BuZ3xoZGMvaDIyLzE0NzY4OTU5MDY2MTQyLnBuZ3w3MGY0NWRmNGRmZjY0ZTIxZGJhZTFlZTJiZWRjNmI4ZTI5ZjNjYmRjZjE4ZTlkM2IyZTllYThjMzhjZDE5ZWZl/lenovo-laptop-yoga-7i-gen-7-14-intel-hero.png"
}];

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

document.addEventListener("DOMContentLoaded", () => {
  renderProducts("featured");
  setupDailySpecial();
});

// Daily Special Logic
function setupDailySpecial() {
  const section = document.getElementById("daily-special");
  if (!section || ALL_PRODUCTS.length === 0) return;

  // Use current date to pick a unique item from ALL_PRODUCTS every day
  const today = new Date();
  const dateSeed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  const productIndex = dateSeed % ALL_PRODUCTS.length;
  const p = ALL_PRODUCTS[productIndex];

  // Apply 10% discount
  const oldPrice = p.price;
  const newPrice = Math.floor(oldPrice * 0.9);
  
  // Update DOM
  document.getElementById("special-title").innerText = p.name;
  document.getElementById("special-specs").innerText = p.specs;
  document.getElementById("special-old-price").innerText = `KES ${oldPrice.toLocaleString()}`;
  document.getElementById("special-new-price").innerText = `KES ${newPrice.toLocaleString()}`;
  document.getElementById("special-img").src = p.img;
  
  const banner = document.getElementById("special-banner");
  banner.onclick = () => {
    const text = encodeURIComponent(`Hi Nexcom! I want to claim today's special deal: ${p.name} at KES ${newPrice.toLocaleString()} (10% OFF)`);
    window.open(`https://wa.me/254722816001?text=${text}`, '_blank');
  };

  section.style.display = "block";
}
