const ALL_PRODUCTS = [
  ...(typeof ALL_PRODUCTS_A !== "undefined" ? ALL_PRODUCTS_A : []), 
  ...(typeof ALL_PRODUCTS_B !== "undefined" ? ALL_PRODUCTS_B : [])
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
  }

  container.innerHTML = '';

  let filtered = filter === 'all' 
    ? ALL_PRODUCTS 
    : ALL_PRODUCTS.filter(p => (p.category || '').toLowerCase().includes(filter.toLowerCase()));

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
        <div class="brand">${p.brand || ''}</div>
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
    (p.name && p.name.toLowerCase().includes(query)) || 
    (p.brand && p.brand.toLowerCase().includes(query)) || 
    (p.specs && p.specs.toLowerCase().includes(query))
  );

  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-img" style="background-image: url('${p.img}')">
        ${p.badge ? `<span class="badge ${p.badge}">${p.badge}</span>` : ''}
      </div>
      <div class="product-info">
        <div class="brand">${p.brand || ''}</div>
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

  if (loadMoreBtn) { loadMoreBtn.style.display = 'none'; }
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

  if (!ALL_PRODUCTS || ALL_PRODUCTS.length === 0) return;

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
      if (p.img && p.img.includes('placeholder.com')) {
        const brandImages = {
          'Apple': 'https://www.freepnglogos.com/uploads/macbook-png/macbook-cleanmymac-the-best-mac-cleanup-app-for-macos-get-16.png',
          'HP': 'https://ssl-product-images.www8-hp.com/digfcpc/c08125553/front_900X900.png',
          'Dell': 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9340/media-gallery/laptop-xps-13-9340-platinum-gallery-1.psd?fmt=png-alpha&wid=1000',
          'Lenovo': 'https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8OTM3NjB8aW1hZ2UvcG5nfGg0Zi9oMmIvMTEwNjE1NzA2NTA2NTQucG5nfDY0ZGUyNTVmZmI1YzI5ZDY4ZDMwYmI0NmIxZDI1Zjk0ZDA0YjRkZGIzYjYyMDllNDNiZDFmZTc3YjcyYWRmMDM/lenovo-laptop-thinkbook-14-gen-2-intel-hero.png'
        };
        imgEl.src = brandImages[p.brand] || 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1200&auto=format&fit=crop';
      } else {
        imgEl.src = p.img;
      }
    }

    if (bannerEl) {
      bannerEl.onclick = () => {
        window.open(`https://wa.me/254721585784?text=Hi Nexcom! I want to claim the Daily Special: ${encodeURIComponent(p.name)}`, '_blank');
      };
    }
  }
}
