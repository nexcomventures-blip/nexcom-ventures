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
    const outOfStock = p.inStock === false;
    const card = document.createElement('div');
    card.className = `product-card${outOfStock ? ' out-of-stock' : ''}`;
    card.innerHTML = `
      <div class="product-img" style="background-image: url('${p.img}'); ${outOfStock ? 'filter: grayscale(60%); opacity: 0.8;' : ''}">
        ${outOfStock ? `<span class="badge out-of-stock-badge">Out of Stock</span>` : (p.badge ? `<span class="badge ${p.badge}">${p.badge}</span>` : '')}
        ${!outOfStock ? `
        <div class="product-overlay">
          <div class="product-actions">
            <button class="action-btn quick-view" onclick="openModal('${p.name.replace(/'/g, "\\'")}', 'KES ${p.price.toLocaleString()}', '${p.specs.replace(/'/g, "\\'")}', '${p.img}', ${p.price})" title="Quick View">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            </button>
            <button class="action-btn order-wa" onclick="window.open('https://wa.me/254721585784?text=Hi%20Nexcom!%20I%27m%20interested%20in%20the%20${encodeURIComponent(p.name)}', '_blank')" title="Order on WhatsApp">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </button>
          </div>
        </div>` : ''}
      </div>
      <div class="product-info">
        <div class="brand">${p.brand}</div>
        <h3 class="name">${p.name}</h3>
        <p class="specs">${p.specs}</p>
        <div class="price-row">
          <span class="price" style="${outOfStock ? 'color: #999;' : ''}">KES ${p.price.toLocaleString()}</span>
          ${outOfStock
            ? `<span class="buy-btn" style="background:#999; cursor:not-allowed; pointer-events:none;">Out of Stock</span>`
            : `<a href="https://wa.me/254721585784?text=Hi%20Nexcom!%20I'm%20interested%20in%20the%20${encodeURIComponent(p.name)}" class="buy-btn">Enquire</a>`
          }
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
    const outOfStock = p.inStock === false;
    const card = document.createElement('div');
    card.className = `product-card${outOfStock ? ' out-of-stock' : ''}`;
    card.innerHTML = `
      <div class="product-img" style="background-image: url('${p.img}'); ${outOfStock ? 'filter: grayscale(60%); opacity: 0.8;' : ''}">
        ${outOfStock ? `<span class="badge out-of-stock-badge">Out of Stock</span>` : (p.badge ? `<span class="badge ${p.badge}">${p.badge}</span>` : '')}
        ${!outOfStock ? `
        <div class="product-overlay">
          <div class="product-actions">
            <button class="action-btn quick-view" onclick="openModal('${p.name.replace(/'/g, "\\'")}', 'KES ${p.price.toLocaleString()}', '${p.specs.replace(/'/g, "\\'")}', '${p.img}', ${p.price})" title="Quick View">
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            </button>
            <button class="action-btn order-wa" onclick="window.open('https://wa.me/254721585784?text=Hi%20Nexcom!%20I%27m%20interested%20in%20the%20${encodeURIComponent(p.name)}', '_blank')" title="Order on WhatsApp">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </button>
          </div>
        </div>` : ''}
      </div>
      <div class="product-info">
        <div class="brand">${p.brand}</div>
        <h3 class="name">${p.name}</h3>
        <p class="specs">${p.specs}</p>
        <div class="price-row">
          <span class="price" style="${outOfStock ? 'color: #999;' : ''}">KES ${p.price.toLocaleString()}</span>
          ${outOfStock
            ? `<span class="buy-btn" style="background:#999; cursor:not-allowed; pointer-events:none;">Out of Stock</span>`
            : `<a href="https://wa.me/254721585784?text=Hi%20Nexcom!%20I'm%20interested%20in%20the%20${encodeURIComponent(p.name)}" class="buy-btn">Enquire</a>`
          }
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
