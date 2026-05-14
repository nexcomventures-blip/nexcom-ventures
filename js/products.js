const ALL_PRODUCTS = [
  {
    id: "featured-dell-xps-9330",
    brand: "Dell",
    name: "Dell XPS 13 9330",
    specs: "Intel Core i7 13th Gen • 16GB RAM • 512GB SSD • InfinityEdge",
    price: 135000,
    category: "exuk business featured dell",
    badge: "new",
    img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9340/media-gallery/laptop-xps-13-9340-platinum-gallery-1.psd?fmt=png-alpha&wid=1000"
  },
  {
    id: "featured-dell-xps-9320",
    brand: "Dell",
    name: "Dell XPS 13 Plus 9320",
    specs: "Intel Core i7 12th Gen • 16GB RAM • 512GB SSD • OLED Touch",
    price: 110000,
    category: "exuk business featured dell",
    badge: "hot",
    img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9320/media-gallery/laptop-xps-9320-t-silver-gallery-1.psd?fmt=png-alpha&wid=1000"
  },
  {
    id: "featured-macbook-pro-m2",
    brand: "Apple",
    name: "MacBook Pro 13 M2 (2022)",
    specs: "Apple M2 Chip • 8GB RAM • 512GB SSD • Retina Display",
    price: 140000,
    category: "exuk apple featured macbook",
    badge: "hot",
    img: "https://www.apple.com/v/macbook-pro-13/m/images/overview/hero_endframe__e953p4v88ce2_large.jpg"
  },
  {
    id: "featured-macbook-air-m1",
    brand: "Apple",
    name: "MacBook Air M1 (2020)",
    specs: "Apple M1 Chip • 8GB RAM • 256GB SSD • Space Gray",
    price: 95000,
    category: "exuk apple featured macbook",
    badge: "best seller",
    img: "images/macbook_air_m1.jpg"
  },
  {
    id: "featured-hp-elitebook-840-g8",
    brand: "HP",
    name: "HP EliteBook 840 G8",
    specs: "Intel Core i7 11th Gen • 16GB RAM • 512GB SSD • Nano-edge",
    price: 68000,
    category: "exuk business featured hp",
    badge: "premium",
    img: "images/hp_840_g8.jpg"
  },
  {
    id: "featured-lenovo-x1-carbon-g10",
    brand: "Lenovo",
    name: "Lenovo ThinkPad X1 Carbon G10",
    specs: "Intel Core i7 12th Gen • 16GB RAM • 512GB SSD • Carbon Fiber",
    price: 115000,
    category: "exuk business featured lenovo",
    badge: "elite",
    img: "images/thinkpad_x1_carbon_g10.jpg"
  },
  {
    id: "hp-probook-640-g5",
    brand: "HP",
    name: "HP ProBook 640 G5",
    specs: "Intel Core i5 8th Gen • 8GB RAM • 256GB SSD • Slim Design",
    price: 32000,
    category: "exuk business budget hp",
    badge: "best value",
    img: "images/hp_probook_640_g5.jpg"
  },
  {
    id: "dell-latitude-5400",
    brand: "Dell",
    name: "Dell Latitude 5400",
    specs: "Intel Core i5 8th Gen • 16GB RAM • 256GB SSD • Durable",
    price: 34000,
    category: "exuk business student dell",
    badge: "sturdy",
    img: "images/dell_latitude_5400.jpg"
  },
  {
    id: "thinkpad-t490s",
    brand: "Lenovo",
    name: "Lenovo ThinkPad T490s",
    specs: "Intel Core i7 8th Gen • 16GB RAM • 512GB SSD • Touchscreen",
    price: 38000,
    category: "exuk business premium lenovo",
    badge: "hot",
    img: "images/thinkpad_t490s.jpg"
  },
  {
    id: "macbook-air-retina",
    brand: "Apple",
    name: "MacBook Air Retina (2018/19)",
    specs: "Intel Core i5 • 8GB RAM • 256GB SSD • Touch ID",
    price: 65000,
    category: "exuk apple student macbook",
    badge: "popular",
    img: "images/mb_air_retina.jpg"
  }
];

let currentLimit = 12;
let currentProducts = [];

function searchProducts() {
  const query = document.getElementById('productSearch').value.toLowerCase();
  const container = document.getElementById("productsGrid");
  if (!container) return;

  currentProducts = ALL_PRODUCTS.filter(p => {
    return p.name.toLowerCase().includes(query) || 
           p.brand.toLowerCase().includes(query) || 
           p.specs.toLowerCase().includes(query) ||
           p.category.toLowerCase().includes(query);
  });

  currentLimit = 12;
  renderFiltered();
}

function loadMoreProducts() {
  currentLimit += 12;
  renderFiltered();
}

function renderFiltered() {
  const container = document.getElementById("productsGrid");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  if (!container) return;

  const displayList = currentProducts.slice(0, currentLimit);
  
  if (displayList.length === 0) {
    container.innerHTML = '<div class="no-results">No products found. Try a different search!</div>';
    if (loadMoreBtn) loadMoreBtn.style.display = 'none';
    return;
  }

  container.innerHTML = displayList.map(p => {
    const isFlash = p.category.toLowerCase().includes("featured") || p.badge === "hot";
    const priceHTML = `<div class="product-price">KES ${p.price.toLocaleString()}</div>`;
    const badgeHTML = `<div class="product-badge">${p.badge}</div>`;
    
    return `
      <div class="product-card ${isFlash ? 'flash-card' : ''}" data-category="${p.category}">
        ${badgeHTML}
        <div class="product-img">
          <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x200/0a0a0a/f01a24?text=${p.brand}+Laptop'">
        </div>
        <div class="product-info">
          <div class="product-brand">${p.brand}</div>
          <h3 class="product-name">${p.name}</h3>
          <p class="product-specs">${p.specs}</p>
          ${priceHTML}
          <div class="product-actions">
            <button class="action-btn quick-view" onclick="openModal('${p.name.replace(/'/g, "\\'")}', 'KES ${p.price.toLocaleString()}', '${p.specs.replace(/'/g, "\\'")}', '${p.img}')">Quick View</button>
            <a href="https://wa.me/254721585784?text=Hi%20Nexcom!%20I%20want%20to%20buy%20the%20${encodeURIComponent(p.name)}" class="action-btn buy-now" target="_blank">Order</a>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (loadMoreBtn) {
    if (currentLimit >= currentProducts.length) {
      loadMoreBtn.style.display = 'none';
    } else {
      loadMoreBtn.style.display = 'block';
    }
  }
}

function renderProducts(filter, btn) {
  const container = document.getElementById("productsGrid");
  if (!container) return;
  
  if (btn) {
    const btns = document.querySelectorAll('.filter-btn');
    btns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
  
  currentProducts = ALL_PRODUCTS.filter(p => {
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

  currentLimit = 12;
  renderFiltered();
}

function setupDailySpecial() {
  const overlay = document.getElementById('promoOverlay');
  if (!overlay) return;
  
  const featured = ALL_PRODUCTS.filter(p => p.category.includes("featured"));
  if (featured.length === 0) return;
  
  const p = featured[Math.floor(Math.random() * featured.length)];
  
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
    if (waEl) waEl.href = `https://wa.me/254721585784?text=Hi%20Nexcom!%20I%20want%20to%20order%20the%20Special:%20${encodeURIComponent(p.name)}`;
  }

  setTimeout(() => {
    overlay.style.display = 'flex';
    setTimeout(() => overlay.classList.add('active'), 100);
  }, 2000);
}

function closePromo() {
  const overlay = document.getElementById('promoOverlay');
  if (overlay) {
    overlay.classList.remove('active');
    setTimeout(() => overlay.style.display = 'none', 700);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setupDailySpecial();
  const urlParams = new URLSearchParams(window.location.search);
  const filterParam = urlParams.get('filter');
  if (filterParam) {
    const targetBtn = document.querySelector(`.filter-btn[onclick*="${filterParam}"]`);
    renderProducts(filterParam, targetBtn);
  } else {
    const featuredBtn = document.querySelector('.filter-btn[onclick*="featured"]');
    renderProducts('featured', featuredBtn);
  }
});
