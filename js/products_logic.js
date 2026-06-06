const ALL_PRODUCTS = [...(typeof ALL_PRODUCTS_A !== "undefined" ? ALL_PRODUCTS_A : []), ...(typeof ALL_PRODUCTS_B !== "undefined" ? ALL_PRODUCTS_B : [])];

let currentFilter = 'featured';
let currentLimit = 8;
let searchTimeout = null;

function buildCard(p) {
  const outOfStock = p.inStock === false;
  const shareText = encodeURIComponent(`Hi! Check out this ${p.name} at Nexcom Ventures for KES ${p.price.toLocaleString()}. See details here: https://nexcomventures.co.ke`);
  const shareUrl = `https://wa.me/?text=${shareText}`;
  
  const swList = Array.isArray(p.software) ? p.software : [];
  const swPills = swList.map(sw => {
    const isWin = sw.toLowerCase().includes('windows');
    const isOff = sw.toLowerCase().includes('office');
    const icon = isWin
      ? `<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/></svg>`
      : isOff
      ? `<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0"><path d="M22.041 0H9.959A.972.972 0 009 .98v1.04l7 2.06V20l-7 2v1.02c0 .54.435.98.959.98h12.082A.972.972 0 0023 23.02V.98A.972.972 0 0022.041 0zM8 4.12L1.18 6.2A1 1 0 000 7.17v9.66a1 1 0 001.18.97L8 19.88z"/></svg>`
      : '';
    return `<span class="sw-pill">${icon}${sw}</span>`;
  }).join('');

  const badgeLabels = { exuk: 'EX-UK', new: 'NEW', hot: 'HOT', refurb: 'REFURB', elite: 'ELITE' };
  const badgeHtml = (!outOfStock && p.badge)
    ? `<span class="product-badge ${p.badge}">${badgeLabels[p.badge] || p.badge.toUpperCase()}</span>`
    : outOfStock
    ? `<span class="product-badge" style="background:rgba(150,150,150,0.9);color:#fff">OUT OF STOCK</span>`
    : '';

  return `
    <div class="product-card fade-in ${outOfStock ? ' out-of-stock' : ''}">
      <div class="product-img" style="${outOfStock ? 'filter:grayscale(60%);opacity:0.8;' : ''}">
        <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://placehold.co/600x375/003B73/FFFFFF?text=${encodeURIComponent(p.name)}'">
      </div>
      <div class="product-info">
        ${badgeHtml}
        <div class="brand">${p.brand}</div>
        <h3 class="name">${p.name}</h3>
        <p class="specs">${p.specs}</p>
        <div style="display:flex; gap:8px; margin-bottom:10px; opacity:0.8;">
             <span style="font-size:0.7rem; background:rgba(0,189,214,0.1); color:#00BDD6; padding:2px 8px; border-radius:4px; font-weight:600;">🛡️ 6-MO WARRANTY</span>
             <span style="font-size:0.7rem; background:rgba(0,189,214,0.1); color:#00BDD6; padding:2px 8px; border-radius:4px; font-weight:600;">🚚 G4S READY</span>
        </div>
        ${swPills ? `<div class="sw-pills-row">${swPills}</div>` : ''}
        <div class="price-row">
          <span class="price" style="${outOfStock ? 'color:#999;' : ''}">KES ${p.price.toLocaleString()}</span>
          ${outOfStock
            ? `<span class="buy-btn" style="background:#999;cursor:not-allowed;pointer-events:none;">Out of Stock</span>`
            : `<div style="display:flex; gap:8px;">
                <a href="https://wa.me/254721585784?text=Hi%20Nexcom!%20I'm%20interested%20in%20the%20${encodeURIComponent(p.name)}" class="buy-btn">Enquire</a>
                <a href="${shareUrl}" target="_blank" class="share-btn" style="background:rgba(255,255,255,0.05); border:1px solid var(--border); padding:10px; border-radius:10px; display:flex; align-items:center; justify-content:center; color:var(--text-muted);"><i class="ph ph-share-network" style="font-size:1.2rem;"></i></a>
               </div>`
          }
        </div>
      </div>
    </div>
  `;
}

function renderProducts(filter = 'featured', targetBtn = null) {
  currentFilter = filter;
  const container = document.getElementById('productsGrid');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (!container) return;

  if (targetBtn) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    targetBtn.classList.add('active');
  }

  let filtered = filter === 'all'
    ? ALL_PRODUCTS
    : ALL_PRODUCTS.filter(p => (p.category || '').toLowerCase().includes(filter.toLowerCase()));

  if (filter === 'featured' && filtered.length === 0) filtered = ALL_PRODUCTS;

  container.innerHTML = filtered.slice(0, currentLimit).map(buildCard).join('');

  if (loadMoreBtn) {
    loadMoreBtn.style.display = currentLimit >= filtered.length ? 'none' : 'block';
  }
}

function loadMoreProducts() {
  currentLimit += 8;
  renderProducts(currentFilter);
}

// Optimized Debounced Search
function searchProducts() {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    const input = document.getElementById('productSearch');
    if (!input) return;
    const query = input.value.toLowerCase().trim();
    const container = document.getElementById('productsGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (!container) return;

    if (!query) { 
      renderProducts(currentFilter); 
      return; 
    }

    const filtered = ALL_PRODUCTS.filter(p =>
      (p.name && p.name.toLowerCase().includes(query)) ||
      (p.brand && p.brand.toLowerCase().includes(query)) ||
      (p.specs && p.specs.toLowerCase().includes(query))
    );

    // Show loading state briefly
    container.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:50px; opacity:0.5;">Searching...</div>';
    
    setTimeout(() => {
      container.innerHTML = filtered.length > 0 
        ? filtered.map(buildCard).join('') 
        : '<div style="grid-column:1/-1; text-align:center; padding:50px; opacity:0.5;">No laptops found matching "' + query + '"</div>';
      if (loadMoreBtn) loadMoreBtn.style.display = 'none';
    }, 100);
  }, 250); // Wait 250ms after typing stops before searching
}

document.addEventListener('DOMContentLoaded', () => {
  if (typeof setupDailySpecial === 'function') setupDailySpecial();
  renderProducts('featured');
});