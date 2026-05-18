const ALL_PRODUCTS = [
  {
    "id": "feat-1",
    "brand": "HP",
    "name": "HP EliteBook 840 G8 i7",
    "specs": "Intel Core i7 11th Gen \u2022 16GB RAM \u2022 512GB SSD \u2022 14\" FHD",
    "price": 63000,
    "category": "exuk business hp featured",
    "badge": "hot",
    "img": "https://www.hp.com/ca-en/shop/Html/Merch/Images/c07010411_1750x1285.jpg"
  },
  {
    "id": "feat-2",
    "brand": "Apple",
    "name": "MacBook Air 13 M2 (2022)",
    "specs": "Apple M2 Chip \u2022 8GB RAM \u2022 256GB SSD \u2022 Liquid Retina",
    "price": 115000,
    "category": "exuk apple macbook featured",
    "badge": "new",
    "img": "https://www.apple.com/v/macbook-air-m2/c/images/overview/hero/hero_static__f9clv6u74u6u_large.jpg"
  },
  {
    "id": "feat-3",
    "brand": "Lenovo",
    "name": "Lenovo X1 Carbon I7 8Th 16/512Gb.",
    "specs": "x1 carbon i7 8th 16/512gb.",
    "price": 35000,
    "category": "exuk business lenovo featured",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x1+carbon+i7+8th"
  },
  {
    "id": "feat-4",
    "brand": "Lenovo",
    "name": "Lenovo X390 I5 8Th 8/256Gb",
    "specs": "x390 i5 8th 8/256gb",
    "price": 22000,
    "category": "exuk business lenovo featured",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x390+i5+8th+8/256gb"
  },
  {
    "id": "tmp-4572",
    "brand": "Lenovo",
    "name": "Lenovo X13 I7 10Th 16/512Gb",
    "specs": "x13 i7 10th 16/512gb",
    "price": 32000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x13+i7+10th+16/512gb"
  },
  {
    "id": "tmp-9498",
    "brand": "Dell",
    "name": "Dell Xps 15 9570 I7 8Th 16/512Gb 4Gb Graphics",
    "specs": "xps 15 9570 i7 8th 16/512gb 4gb Graphics",
    "price": 50000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+xps+15+9570+i7"
  },
  {
    "id": "tmp-2119",
    "brand": "Dell",
    "name": "Dell Xps 13 9305 I7 11Th 16/512Gb",
    "specs": "xps 13 9305 i7 11th 16/512gb",
    "price": 60000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+xps+13+9305+i7"
  },
  {
    "id": "tmp-6898",
    "brand": "Dell",
    "name": "Dell 5320 I7 11Th 16/512Gb Touchscreen",
    "specs": "5320 i7 11th 16/512gb touchscreen",
    "price": 40000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+5320+i7+11th+16/512gb"
  }
];

let currentFilter = 'featured';
let currentLimit = 12;

function renderProducts(filter = 'featured', targetBtn = null) {
  currentFilter = filter;
  const container = document.getElementById('productsGrid');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (!container) return;

  if (targetBtn) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    targetBtn.classList.add('active');
  } else {
    // If no targetBtn provided (e.g. from URL param), try to find the matching button
    const btn = document.querySelector(`.filter-btn[onclick*="'${filter}'"]`);
    if (btn) {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }
  }

  container.innerHTML = '';

  const filtered = filter === 'all' 
    ? ALL_PRODUCTS 
    : ALL_PRODUCTS.filter(p => p.category.includes(filter));

  const itemsToShow = filtered.slice(0, currentLimit);

  itemsToShow.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-img" style="background-image: url('${p.img}')">
        ${p.badge ? `<span class="badge ${p.badge}">${p.badge}</span>` : ''}
      </div>
      <div class="product-info">
        <div class="brand">${p.brand}</div>
        <h3 class="name">${p.name}</h3>
        <p class="specs">${p.specs}</p>
        <div class="price-row">
          <span class="price">KES ${p.price.toLocaleString()}</span>
          <a href="https://wa.me/254721585784?text=Hi%20Nexcom!%20I'm%20interested%20in%20the%20${encodeURIComponent(p.name)}" class="buy-btn">Enquire</a>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  if (loadMoreBtn) {
    loadMoreBtn.style.display = currentLimit >= filtered.length ? 'none' : 'block';
  }
}

function loadMoreProducts() {
  currentLimit += 12;
  renderProducts(currentFilter);
}

function searchProducts() {
  const query = document.getElementById('productSearch').value.toLowerCase();
  const container = document.getElementById('productsGrid');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (!container) return;

  if (!query) {
    renderProducts(currentFilter);
    return;
  }

  container.innerHTML = '';
  const filtered = ALL_PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(query) || 
    p.brand.toLowerCase().includes(query) || 
    p.specs.toLowerCase().includes(query)
  );

  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-img" style="background-image: url('${p.img}')">
        ${p.badge ? `<span class="badge ${p.badge}">${p.badge}</span>` : ''}
      </div>
      <div class="product-info">
        <div class="brand">${p.brand}</div>
        <h3 class="name">${p.name}</h3>
        <p class="specs">${p.specs}</p>
        <div class="price-row">
          <span class="price">KES ${p.price.toLocaleString()}</span>
          <a href="https://wa.me/254721585784?text=Hi%20Nexcom!%20I'm%20interested%20in%20the%20${encodeURIComponent(p.name)}" class="buy-btn">Enquire</a>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  if (loadMoreBtn) loadMoreBtn.style.display = 'none';
}

function setupDailySpecial() {
  const overlay = document.getElementById('daily-special');
  if (!overlay) return;

  const featured = ALL_PRODUCTS.filter(p => p.category.includes('featured'));
  if (featured.length > 0) {
    const p = featured[Math.floor(Math.random() * featured.length)];
    const titleEl = document.getElementById('special-title');
    const specsEl = document.getElementById('special-specs');
    const priceEl = document.getElementById('special-new-price');
    const oldPriceEl = document.getElementById('special-old-price');
    const imgEl = document.getElementById('special-img');
    const bannerEl = document.getElementById('special-banner');
    
    if (titleEl) titleEl.innerText = p.name;
    if (specsEl) specsEl.innerText = p.specs;
    if (priceEl) priceEl.innerText = `KES ${(p.price * 0.9).toLocaleString()}`;
    if (oldPriceEl) oldPriceEl.innerText = `KES ${p.price.toLocaleString()}`;
    if (imgEl) imgEl.src = p.img;
    
    if (bannerEl) {
      bannerEl.onclick = () => {
        window.location.href = `https://wa.me/254721585784?text=Hi%20Nexcom!%20I%20want%20to%20order%20the%20Special:%20${encodeURIComponent(p.name)}`;
      };
    }
  }

  overlay.style.display = 'block';
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
    renderProducts(filterParam);
    // Smooth scroll to laptops section if filter is present
    setTimeout(() => {
      const laptopsEl = document.getElementById('laptops');
      if (laptopsEl) laptopsEl.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  } else {
    renderProducts('featured');
  }
});
