const ALL_PRODUCTS = [
  {
    "id": "hp-840-g8-i7",
    "brand": "HP",
    "name": "HP EliteBook 840 G8 i7",
    "specs": "Intel Core i7 11th Gen \u2022 16GB RAM \u2022 512GB SSD \u2022 14\" FHD",
    "price": 63000,
    "category": "exuk business featured hp",
    "badge": "hot",
    "img": "https://www.hp.com/ca-en/shop/Html/Merch/Images/c07010411_1750x1285.jpg"
  },
  {
    "id": "hp-840-g8-i5",
    "brand": "HP",
    "name": "HP EliteBook 840 G8 i5",
    "specs": "Intel Core i5 11th Gen \u2022 8GB RAM \u2022 256GB SSD \u2022 14\" FHD",
    "price": 49000,
    "category": "exuk business hp",
    "badge": "exuk",
    "img": "https://www.hp.com/ca-en/shop/Html/Merch/Images/c07010411_1750x1285.jpg"
  },
  {
    "id": "hp-840-g7-i5",
    "brand": "HP",
    "name": "HP EliteBook 840 G7 i5",
    "specs": "Intel Core i5 10th Gen \u2022 8GB RAM \u2022 256GB SSD \u2022 14\" FHD",
    "price": 41500,
    "category": "exuk business hp",
    "badge": "exuk",
    "img": "https://www.hp.com/ca-en/shop/Html/Merch/Images/c06616035_1750x1285.jpg"
  },
  {
    "id": "hp-840-g6-i5",
    "brand": "HP",
    "name": "HP EliteBook 840 G6 i5",
    "specs": "Intel Core i5 8th Gen \u2022 16GB RAM \u2022 256GB SSD \u2022 14\" FHD",
    "price": 36500,
    "category": "exuk business hp",
    "badge": "exuk",
    "img": "https://ssl-product-images.www8-hp.com/digfcpc/c08125553/front_900X900.png"
  },
  {
    "id": "dell-xps-9330",
    "brand": "Dell",
    "name": "Dell XPS 13 9330",
    "specs": "Intel Core i7 13th Gen \u2022 16GB RAM \u2022 512GB SSD \u2022 InfinityEdge",
    "price": 135000,
    "category": "exuk business featured dell",
    "badge": "new",
    "img": "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9340/media-gallery/laptop-xps-13-9340-platinum-gallery-1.psd?fmt=png-alpha&wid=1000"
  },
  {
    "id": "dell-xps-9320",
    "brand": "Dell",
    "name": "Dell XPS 13 Plus 9320",
    "specs": "Intel Core i7 12th Gen \u2022 16GB RAM \u2022 512GB SSD \u2022 OLED Touch",
    "price": 110000,
    "category": "exuk business featured dell",
    "badge": "hot",
    "img": "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9320/media-gallery/laptop-xps-9320-t-silver-gallery-1.psd?fmt=png-alpha&wid=1000"
  },
  {
    "id": "dell-xps-9310",
    "brand": "Dell",
    "name": "Dell XPS 13 9310",
    "specs": "Intel Core i7 11th Gen \u2022 16GB RAM \u2022 512GB SSD \u2022 FHD+ Touch",
    "price": 85000,
    "category": "exuk business featured dell",
    "badge": "exuk",
    "img": "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9310/media-gallery/laptop-xps-13-9310-silver-gallery-1.psd?fmt=png-alpha&wid=1000"
  },
  {
    "id": "dell-xps-7390",
    "brand": "Dell",
    "name": "Dell XPS 13 7390",
    "specs": "Intel Core i7 10th Gen \u2022 16GB RAM \u2022 512GB SSD \u2022 13.3\" FHD",
    "price": 49500,
    "category": "exuk business featured dell",
    "badge": "exuk",
    "img": "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9315/media-gallery/laptop-xps-13-9315-silver-gallery-1.psd?fmt=png-alpha&wid=1000"
  },
  {
    "id": "dell-5400",
    "brand": "Dell",
    "name": "Dell Latitude 5400 i5",
    "specs": "Intel Core i5 8th Gen \u2022 8GB RAM \u2022 256GB SSD \u2022 14\" FHD",
    "price": 24000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-5440-laptop/media-gallery/latitude-5440-laptop-gallery-1.psd?fmt=png-alpha&wid=1000"
  },
  {
    "id": "lenovo-x1-g10",
    "brand": "Lenovo",
    "name": "ThinkPad X1 Carbon Gen 10",
    "specs": "Intel Core i7 12th Gen \u2022 16GB RAM \u2022 512GB SSD \u2022 14\" Touch",
    "price": 91000,
    "category": "exuk business featured lenovo",
    "badge": "hot",
    "img": "https://p2-ofp.static.pub/fes/cms/2022/03/18/v7l068r6z9k4z9k4z9k4z9k4z9k4z9763529.png"
  },
  {
    "id": "lenovo-x1-g9",
    "brand": "Lenovo",
    "name": "ThinkPad X1 Carbon Gen 9",
    "specs": "Intel Core i7 11th Gen \u2022 16GB RAM \u2022 512GB SSD \u2022 14\" FHD+",
    "price": 75000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8ODUwODF8aW1hZ2UvcG5nfGg5Yy9oYTMvMTE2NTk0OTMzOTM0MzgucG5nfGNjOGFiOWI1NmViYTU4Yzk0NjRjMDUwOTI5OGNmNTBhM2I0MjY3NGVmNzY2MjI0OWRkMTNmZDI3ZDM1MWY3Yjc/lenovo-thinkpad-x1-carbon-gen-9-gallery-02.png"
  },
  {
    "id": "lenovo-t490",
    "brand": "Lenovo",
    "name": "ThinkPad T490",
    "specs": "i5 8th Gen \u2022 16GB RAM \u2022 512GB SSD",
    "price": 49500,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8OTM3NjB8aW1hZ2UvcG5nfGg0Zi9oMmIvMTEwNjE1NzA2NTA2NTQucG5nfDY0ZGUyNTVmZmI1YzI5ZDY4ZDMwYmI0NmIxZDI1Zjk0ZDA0YjRkZGIzYjYyMDllNDNiZDFmZTc3YjcyYWRmMDM/lenovo-laptop-thinkbook-14-gen-2-intel-hero.png"
  },
  {
    "id": "lenovo-x280",
    "brand": "Lenovo",
    "name": "ThinkPad X280 i5",
    "specs": "i5 8th Gen \u2022 8GB RAM \u2022 256GB SSD",
    "price": 29500,
    "category": "exuk business lenovo",
    "badge": "hot",
    "img": "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8OTM3NjB8aW1hZ2UvcG5nfGg0Zi9oMmIvMTEwNjE1NzA2NTA2NTQucG5nfDY0ZGUyNTVmZmI1YzI5ZDY4ZDMwYmI0NmIxZDI1Zjk0ZDA0YjRkZGIzYjYyMDllNDNiZDFmZTc3YjcyYWRmMDM/lenovo-laptop-thinkbook-14-gen-2-intel-hero.png"
  },
  {
    "id": "mac-pro-m2",
    "brand": "Apple",
    "name": "MacBook Pro 13 M2 (2022)",
    "specs": "Apple M2 Chip \u2022 8GB RAM \u2022 512GB SSD \u2022 Retina Display",
    "price": 140000,
    "category": "exuk apple featured macbook",
    "badge": "hot",
    "img": "https://www.apple.com/v/macbook-pro-13/m/images/overview/hero_endframe__e953p4v88ce2_large.jpg"
  },
  {
    "id": "mac-air-m2",
    "brand": "Apple",
    "name": "MacBook Air 13 M2 (2022)",
    "specs": "Apple M2 Chip \u2022 8GB RAM \u2022 256GB SSD \u2022 Liquid Retina",
    "price": 115000,
    "category": "exuk apple featured macbook",
    "badge": "new",
    "img": "https://www.apple.com/v/macbook-air-m2/c/images/overview/hero/hero_static__f9clv6u74u6u_large.jpg"
  },
  {
    "id": "mac-pro-16-2019",
    "brand": "Apple",
    "name": "MacBook Pro 16 2019 i9",
    "specs": "Intel Core i9 \u2022 64GB RAM \u2022 1TB SSD \u2022 Touch Bar",
    "price": 133000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-select-201911?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1573165440054"
  },
  {
    "id": "mac-pro-m1",
    "brand": "Apple",
    "name": "MacBook Pro M1 13",
    "specs": "2020 \u2022 16GB RAM \u2022 512GB SSD",
    "price": 140000,
    "category": "exuk apple macbook",
    "badge": "hot",
    "img": "https://www.apple.com/v/macbook-pro-13/m/images/overview/hero_endframe__e953p4v88ce2_large.jpg"
  },
  {
    "id": "mac-air-m1",
    "brand": "Apple",
    "name": "MacBook Air M1",
    "specs": "2020 \u2022 8GB RAM \u2022 256GB SSD",
    "price": 84000,
    "category": "exuk apple macbook",
    "badge": "hot",
    "img": "https://www.apple.com/v/macbook-air-m2/c/images/overview/hero/hero_static__f9clv6u74u6u_large.jpg"
  },
  {
    "id": "part-mac-a2337-battery",
    "brand": "Apple",
    "name": "MacBook Air A2337 Battery",
    "specs": "Original Replacement \u2022 For M1 MacBook Air",
    "price": 14000,
    "category": "parts battery apple macbook",
    "badge": "new",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=MacBook+Battery"
  },
  {
    "id": "part-mac-a2337-screen",
    "brand": "Apple",
    "name": "MacBook Air A2337 Screen",
    "specs": "13.3\" Liquid Retina \u2022 M1 Replacement",
    "price": 39900,
    "category": "parts screen apple macbook",
    "badge": "new",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=MacBook+Screen"
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
