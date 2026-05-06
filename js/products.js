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
    "img": "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=800"
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
    "specs": "i7 11th Gen • 16GB RAM • 512GB SSD",
    "price": 63000,
    "originalPrice": 72000,
    "category": "exuk business featured hp",
    "badge": "hot",
    "img": "https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?q=80&w=800"
  },
  {
    "id": "bud-1",
    "brand": "Lenovo",
    "name": "Lenovo 11E Core M5",
    "specs": "8GB RAM • 128GB SSD • 11.6\"",
    "price": 13000,
    "category": "exuk student budget",
    "badge": "student",
    "img": "https://images.unsplash.com/photo-1525547718571-03b05761ad91?q=80&w=800"
  },
  {
    "id": "bud-2",
    "brand": "Lenovo",
    "name": "Lenovo 11E Celeron",
    "specs": "4GB RAM • 128GB SSD • Rugged",
    "price": 10000,
    "category": "exuk student budget",
    "badge": "student",
    "img": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=800"
  },
  {
    "id": "bud-3",
    "brand": "Lenovo",
    "name": "Lenovo Yoga N23S",
    "specs": "Celeron • 4GB RAM • 128GB SSD • Touch",
    "price": 12500,
    "category": "exuk student budget",
    "badge": "student",
    "img": "https://images.unsplash.com/photo-1611186871348-b1ec696e520b?q=80&w=800"
  },
  {
    "id": "d-1",
    "brand": "Dell",
    "name": "Dell Latitude 5400 i5",
    "specs": "8th Gen • 8GB • 256GB SSD",
    "price": 24000,
    "category": "exuk business featured dell",
    "badge": "exuk",
    "img": "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=800"
  },
  {
    "id": "d-2",
    "brand": "Dell",
    "name": "Dell Precision 5550 i7",
    "specs": "10th Gen • 16GB • 512GB • 4GB Nvidia",
    "price": 70000,
    "category": "exuk business dell",
    "badge": "pro",
    "img": "https://images.unsplash.com/photo-1661961111184-11317b40adb2?q=80&w=800"
  },
  {
    "id": "d-3",
    "brand": "Dell",
    "name": "Dell XPS 13 9310 i7",
    "specs": "11th Gen • 16GB • 512GB • Touch",
    "price": 65000,
    "category": "exuk business dell",
    "badge": "premium",
    "img": "https://images.unsplash.com/photo-1661961112134-fbce0fdf3d99?q=80&w=800"
  },
  {
    "id": "h-1",
    "brand": "HP",
    "name": "HP ProBook 640 G5 i5",
    "specs": "8th Gen • 8GB • 256GB SSD",
    "price": 25800,
    "category": "exuk business hp",
    "badge": "exuk",
    "img": "https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?q=80&w=800"
  },
  {
    "id": "h-2",
    "brand": "HP",
    "name": "HP EliteBook 840 G6 i5",
    "specs": "8th Gen • 16GB • 256GB SSD",
    "price": 36500,
    "originalPrice": 42000,
    "category": "exuk business featured hp",
    "badge": "hot",
    "img": "https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?q=80&w=800"
  },
  {
    "id": "l-1",
    "brand": "Lenovo",
    "name": "ThinkPad T490s i5",
    "specs": "8th Gen • 8GB • 256GB SSD",
    "price": 25000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800"
  },
  {
    "id": "l-2",
    "brand": "Lenovo",
    "name": "ThinkPad X1 Yoga i7",
    "specs": "8th Gen • 16GB • 512GB • Touch",
    "price": 40000,
    "category": "exuk business featured lenovo",
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
    "img": "https://images.unsplash.com/photo-1594065296416-aed7ae708d58?q=80&w=800"
  }
];

function renderProducts(filter = "all") {
  const container = document.getElementById("productsGrid");
  if (!container) return;
  
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
    const oldPrice = p.originalPrice || Math.floor(p.price * 1.15);
    return `
      <div class="product-card" onclick="window.open('https://wa.me/254722816001?text=Hi Nexcom! I want to inquire about: ${p.name}', '_blank')">
        <div class="product-badge">${p.badge}</div>
        <div class="product-img">
          <img src="${p.img}" alt="${p.name}" loading="lazy">
        </div>
        <div class="product-info">
          <div class="product-brand">${p.brand}</div>
          <h3 class="product-name">${p.name}</h3>
          <p class="product-specs">${p.specs}</p>
          <div class="product-price-row">
            <div class="product-price">KES ${p.price.toLocaleString()}</div>
            <div class="product-old-price">KES ${oldPrice.toLocaleString()}</div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function filterCategory(cat) {
  renderProducts(cat);
  const btns = document.querySelectorAll('.filter-btn');
  btns.forEach(b => {
    b.classList.remove('active');
    if (b.innerText.toLowerCase().includes(cat.toLowerCase())) b.classList.add('active');
    if (cat === 'all' && b.innerText.toLowerCase() === 'all') b.classList.add('active');
  });
}

// Daily Special Logic
function setupDailySpecial() {
  const section = document.getElementById("daily-special");
  if (section) section.remove(); // Remove the daily special section completely as requested
}


// Welcome Promo Logic
function closePromo() {
  const overlay = document.getElementById('promoOverlay');
  if (overlay) {
    overlay.classList.remove('active');
    setTimeout(() => { overlay.style.display = 'none'; }, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById('promoOverlay');
  const timerBar = document.getElementById('promoTimerBar');
  
  if (overlay) {
    // Setup dynamic deal for the welcome banner
    const today = new Date();
    const dateSeed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    // Cycle through all products daily
    const p = ALL_PRODUCTS[dateSeed % ALL_PRODUCTS.length];
    
    if (p) {
      const titleEl = document.getElementById('promoTitle');
      const specsEl = document.getElementById('promoSpecs');
      const priceEl = document.getElementById('promoPrice');
      const waEl = document.getElementById('promoWA');
      const imgEl = overlay.querySelector('.promo-img');
      
      if (titleEl) titleEl.innerHTML = p.name.replace(' ', '<br/>');
      if (specsEl) specsEl.innerText = p.specs;
      if (priceEl) priceEl.innerText = `KES ${p.price.toLocaleString()}`;
      if (imgEl) imgEl.style.backgroundImage = `url('${p.img}')`;
      if (waEl) {
        waEl.href = `https://wa.me/254722816001?text=Hi Nexcom! I want to order the Today's Special: ${p.name}`;
      }
    }

    // Show after short delay (post-logo flash)
    setTimeout(() => {
      overlay.classList.add('active');
      
      // Start the 5s timer bar
      if (timerBar) {
        timerBar.style.animation = 'timerProgress 5s linear forwards';
      }

      // Auto-close after 5 seconds
      setTimeout(() => {
        closePromo();
      }, 5000);
    }, 1200);
  }
});
