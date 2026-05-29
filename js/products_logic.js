let currentFilter = 'featured';
let currentLimit = 6;

function buildCard(p) {
  const outOfStock = p.inStock === false;
  const softwareJson = JSON.stringify(p.software || []).replace(/'/g, "\\'");

  // Software pills (Windows 11, Office 2024, etc.)
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

  // Badge label text
  const badgeLabels = { exuk: 'EX-UK', new: 'NEW', hot: 'HOT', refurb: 'REFURB', elite: 'ELITE' };
  const badgeHtml = (!outOfStock && p.badge)
    ? `<span class="product-badge ${p.badge}">${badgeLabels[p.badge] || p.badge.toUpperCase()}</span>`
    : outOfStock
    ? `<span class="product-badge" style="background:rgba(150,150,150,0.9);color:#fff">OUT OF STOCK</span>`
    : '';

  return `
    <div class="product-card${outOfStock ? ' out-of-stock' : ''}">
      <div class="product-img" style="${outOfStock ? 'filter:grayscale(60%);opacity:0.8;' : ''}">
        <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://placehold.co/600x375/003B73/FFFFFF?text=${encodeURIComponent(p.name)}'">

      </div>
      <div class="product-info">
        ${badgeHtml}
        <div class="brand">${p.brand}</div>
        <h3 class="name">${p.name}</h3>
        <p class="specs">${p.specs}</p>
        ${swPills ? `<div class="sw-pills-row">${swPills}</div>` : ''}
        <div class="price-row">
          <span class="price" style="${outOfStock ? 'color:#999;' : ''}">KES ${p.price.toLocaleString()}</span>
          ${outOfStock
            ? `<span class="buy-btn" style="background:#999;cursor:not-allowed;pointer-events:none;">Out of Stock</span>`
            : `<a href="https://wa.me/254721585784?text=Hi%20Nexcom!%20I'm%20interested%20in%20the%20${encodeURIComponent(p.name)}" class="buy-btn">Enquire</a>`
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
    : ALL_PRODUCTS.filter(p => p.category.includes(filter));

  if (filter === 'featured' && filtered.length === 0) filtered = ALL_PRODUCTS;

  container.innerHTML = filtered.slice(0, currentLimit).map(buildCard).join('');

  if (loadMoreBtn) {
    loadMoreBtn.style.display = currentLimit >= filtered.length ? 'none' : 'block';
  }
}

function loadMoreProducts() {
  currentLimit += 6;
  renderProducts(currentFilter);
}

function searchProducts() {
  const query = document.getElementById('productSearch').value.toLowerCase();
  const container = document.getElementById('productsGrid');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (!container) return;

  if (!query) { renderProducts(currentFilter); return; }

  const filtered = ALL_PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.brand.toLowerCase().includes(query) ||
    p.specs.toLowerCase().includes(query)
  );

  container.innerHTML = filtered.map(buildCard).join('');
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
    if (newPriceEl) newPriceEl.innerHTML = `KES ${Math.round(p.price * 0.9).toLocaleString()}`;
    if (imgEl) {
      imgEl.src = p.img;
      imgEl.onerror = () => { imgEl.src = `https://placehold.co/600x400/003B73/FFFFFF?text=${encodeURIComponent(p.name)}`; };
    }
    if (bannerEl) {
      bannerEl.onclick = () => window.open(`https://wa.me/254721585784?text=Hi Nexcom! I want to claim the Daily Special: ${encodeURIComponent(p.name)}`, '_blank');
    }
  }
}
