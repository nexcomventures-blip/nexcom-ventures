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
  }

  container.innerHTML = '';

  let filtered = filter === 'all' 
    ? ALL_PRODUCTS 
    : ALL_PRODUCTS.filter(p => p.category.includes(filter));

  if (filter === 'featured' && filtered.length === 0) {
    filtered = ALL_PRODUCTS;
  }

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

// Auto-run on load
document.addEventListener('DOMContentLoaded', () => {
  setupDailySpecial();
  renderProducts('featured');
});

// Daily Special Logic
function setupDailySpecial() {
  const section = document.getElementById("daily-special");
  if (!section) return;

  // Use a rotating deal based on the day
  const today = new Date();
  const dateSeed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  const p = ALL_PRODUCTS[dateSeed % ALL_PRODUCTS.length];

  if (p) {
    section.style.display = 'block';
    const titleEl = document.getElementById('special-title');
    const specsEl = document.getElementById('special-specs');
    const oldPriceEl = document.getElementById('special-old-price');
    const newPriceEl = document.getElementById('special-new-price');
    const imgEl = document.getElementById('special-img');
    const bannerEl = document.getElementById('special-banner');

    if (titleEl) titleEl.innerText = p.name;
    if (specsEl) specsEl.innerText = p.specs;
    if (oldPriceEl) oldPriceEl.innerText = `KES ${p.price.toLocaleString()}`;
    if (newPriceEl) {
      newPriceEl.innerHTML = `KES ${Math.round(p.price * 0.9).toLocaleString()}`;
    }
    if (imgEl) {
      imgEl.src = p.img;
      imgEl.onerror = () => {
        imgEl.src = `https://placehold.co/600x400/003B73/FFFFFF?text=${encodeURIComponent(p.name)}`;
      };
    }
    
    if (bannerEl) {
      bannerEl.onclick = () => {
        window.open(`https://wa.me/254721585784?text=Hi Nexcom! I want to claim the Daily Special: ${encodeURIComponent(p.name)}`, '_blank');
      };
    }
  }
}
