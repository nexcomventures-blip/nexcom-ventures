const ALL_PRODUCTS = [
  {
    "id": "feat-1",
    "brand": "Dell",
    "name": "Dell XPS 13 9330",
    "specs": "Intel Core i7 13th Gen • 16GB RAM • 512GB SSD",
    "price": 135000,
    "originalPrice": 145000,
    "category": "exuk business featured dell",
    "badge": "new",
    "img": "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=800"
  },
  {
    "id": "feat-2",
    "brand": "Apple",
    "name": "MacBook Pro 13 M2",
    "specs": "Apple M2 Chip • 8GB RAM • 512GB SSD",
    "price": 140000,
    "originalPrice": 155000,
    "category": "exuk apple featured macbook",
    "badge": "hot",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800"
  },
  {
    "id": "feat-3",
    "brand": "Lenovo",
    "name": "ThinkPad X1 Carbon Gen 10",
    "specs": "i7 12th Gen • 16GB RAM • 512GB SSD",
    "price": 91000,
    "originalPrice": 98000,
    "category": "exuk business featured lenovo",
    "badge": "hot",
    "img": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800"
  },
  {
    "id": "feat-4",
    "brand": "HP",
    "name": "HP EliteBook 840 G8",
    "specs": "i7 11th Gen \u2022 16GB RAM \u2022 512GB SSD",
    "price": 63000,
    "category": "exuk business featured hp",
    "badge": "hot",
    "img": "https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?q=80&w=800"
  },
  {
    "id": "bud-1",
    "brand": "Lenovo",
    "name": "Lenovo 11E Core M5",
    "specs": "8GB RAM \u2022 128GB SSD \u2022 11.6\"",
    "price": 13000,
    "category": "exuk student budget",
    "badge": "student",
    "img": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800"
  },
  {
    "id": "bud-2",
    "brand": "Lenovo",
    "name": "Lenovo 11E Celeron",
    "specs": "4GB RAM \u2022 128GB SSD \u2022 Rugged",
    "price": 10000,
    "category": "exuk student budget",
    "badge": "student",
    "img": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800"
  },
  {
    "id": "bud-3",
    "brand": "Lenovo",
    "name": "Lenovo Yoga N23S",
    "specs": "Celeron \u2022 4GB RAM \u2022 128GB SSD \u2022 Touch",
    "price": 12500,
    "category": "exuk student budget",
    "badge": "student",
    "img": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800"
  },
  {
    "id": "d-1",
    "brand": "Dell",
    "name": "Dell Latitude 5400 i5",
    "specs": "8th Gen \u2022 8GB \u2022 256GB SSD",
    "price": 24000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=800"
  },
  {
    "id": "d-2",
    "brand": "Dell",
    "name": "Dell Precision 5550 i7",
    "specs": "10th Gen \u2022 16GB \u2022 512GB \u2022 4GB Nvidia",
    "price": 70000,
    "category": "exuk business dell",
    "badge": "pro",
    "img": "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=800"
  },
  {
    "id": "d-3",
    "brand": "Dell",
    "name": "Dell XPS 13 9310 i7",
    "specs": "11th Gen \u2022 16GB \u2022 512GB \u2022 Touch",
    "price": 65000,
    "category": "exuk business dell",
    "badge": "premium",
    "img": "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=800"
  },
  {
    "id": "h-1",
    "brand": "HP",
    "name": "HP ProBook 640 G5 i5",
    "specs": "8th Gen \u2022 8GB \u2022 256GB SSD",
    "price": 25800,
    "category": "exuk business hp",
    "badge": "exuk",
    "img": "https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?q=80&w=800"
  },
  {
    "id": "h-2",
    "brand": "HP",
    "name": "HP EliteBook 840 G6 i5",
    "specs": "8th Gen \u2022 16GB \u2022 256GB SSD",
    "price": 36500,
    "category": "exuk business hp",
    "badge": "hot",
    "img": "https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?q=80&w=800"
  },
  {
    "id": "l-1",
    "brand": "Lenovo",
    "name": "ThinkPad T490s i5",
    "specs": "8th Gen \u2022 8GB \u2022 256GB SSD",
    "price": 25000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800"
  },
  {
    "id": "l-2",
    "brand": "Lenovo",
    "name": "ThinkPad X1 Yoga i7",
    "specs": "8th Gen \u2022 16GB \u2022 512GB \u2022 Touch",
    "price": 40000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800"
  },
  {
    "id": "s-1",
    "brand": "Dell",
    "name": "PowerEdge T150 Server",
    "specs": "Intel Xeon • 16GB ECC • 2TB HDD",
    "price": 145000,
    "category": "server enterprise new",
    "badge": "server",
    "img": "https://images.unsplash.com/photo-1558494949-ef010978911e?q=80&w=800"
  },
  {
    "id": "s-2",
    "brand": "HP",
    "name": "ProLiant DL380 Gen10",
    "specs": "Dual Xeon • 64GB RAM • Rack Server",
    "price": 280000,
    "category": "server enterprise exuk",
    "badge": "server",
    "img": "https://images.unsplash.com/photo-1558494949-ef010978911e?q=80&w=800"
  }
];

function renderProducts(filter = "all") {
  const container = document.getElementById("productsGrid");
  if (!container) return;
  container.innerHTML = "";

  const filtered = ALL_PRODUCTS.filter(p => {
    const cat = p.category.toLowerCase();
    const brand = p.brand.toLowerCase();
    const f = filter.toLowerCase();

    if (f === "all") return true;
    if (f === "featured") return cat.includes("featured");
    if (f === "student") return cat.includes("student") || cat.includes("budget");
    if (f === "server") return cat.includes("server");
    if (f === "new") return cat.includes("new");
    
    return brand === f || cat.includes(f);
  });

  container.innerHTML = filtered.map(p => {
    const priceVal = p.price;
    const priceDisplay = 'KES ' + priceVal.toLocaleString();
    const originalPriceDisplay = p.originalPrice ? 'KES ' + p.originalPrice.toLocaleString() : '';
    const currency = 'KES';
    
    return `
      <div class="product-card" data-category="${p.category}">
        <div class="product-image">
          <img src="${p.img}" alt="${p.name}" loading="lazy">
          ${p.badge ? `<span class="badge ${p.badge}">${p.badge.toUpperCase()}</span>` : ""}
          ${p.originalPrice ? `<span class="sale-badge">SALE</span>` : ""}
        </div>
        <div class="product-info">
          <div class="product-brand">${p.brand}</div>
          <h3>${p.name}</h3>
          <p>${p.specs}</p>
          <div class="product-footer">
            <div class="price-container">
              ${p.originalPrice ? `<span class="original-price">${originalPriceDisplay}</span>` : ""}
              <span class="price">${priceDisplay}</span>
              <span class="vat-tag">Excl. VAT</span>
            </div>
            <button class="add-cart" onclick="addToCart('${p.name.replace(/'/g,"\\'")}', ${priceVal}, '${currency}')">Add to Cart</button>
          </div>
        </div>
      </div>
    `;
  }).join("") || `<div class="no-results">No matches found for this category</div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts("featured");
  setupDailySpecial();
});

// Daily Special Logic
function setupDailySpecial() {
  const section = document.getElementById("daily-special");
  if (!section || ALL_PRODUCTS.length === 0) return;

  const today = new Date();
  const dateSeed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  // Find HP ProBook 640 G5 index
  let productIndex = ALL_PRODUCTS.findIndex(p => p.name.includes("640 G5"));
  if (productIndex === -1) productIndex = dateSeed % ALL_PRODUCTS.length;
  
  const p = ALL_PRODUCTS[productIndex];

  const oldPrice = p.price;
  const newPrice = Math.floor(oldPrice * 0.9);
  
  const titleEl = document.getElementById("special-title");
  const specsEl = document.getElementById("special-specs");
  const oldPriceEl = document.getElementById("special-old-price");
  const newPriceEl = document.getElementById("special-new-price");
  const imgEl = document.getElementById("special-img");

  if (titleEl) {
    titleEl.innerText = p.name;
    titleEl.classList.add("shimmer-text");
  }
  if (specsEl) specsEl.innerText = p.specs;
  if (oldPriceEl) oldPriceEl.innerText = `KES ${oldPrice.toLocaleString()}`;
  if (newPriceEl) newPriceEl.innerText = `KES ${newPrice.toLocaleString()}`;
  if (imgEl) imgEl.src = p.img;
  
  const banner = document.getElementById("special-banner");
  if (banner) {
    banner.onclick = () => {
      const text = encodeURIComponent(`Hi Nexcom! I want to claim today's special deal: ${p.name} at KES ${newPrice.toLocaleString()} (10% OFF)`);
      window.open(`https://wa.me/254722816001?text=${text}`, '_blank');
    };
  }

  section.style.display = "block";
}

