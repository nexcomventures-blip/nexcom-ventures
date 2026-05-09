const ALL_PRODUCTS = [{
  {
    "id": "feat-1",
    "brand": "Apple",
    "name": "MacBook Pro 13 M2",
    "img": "images/mb_air_retina.jpg"
  }
];

let currentLimit = 8;
let currentProducts = [];

function searchProducts() {
  const query = document.getElementById('productSearch').value.toLowerCase();
  const container = document.getElementById("productsGrid");
  if (!container) return;

  currentProducts = ALL_PRODUCTS.filter(p => {
    return p.name.toLowerCase().includes(query) || 
           p.brand.toLowerCase().includes(query) || 
           p.specs.toLowerCase().includes(query);
  });

  currentLimit = 8;
  renderFiltered();
}

function loadMoreProducts() {
  currentLimit += 8;
  renderFiltered();
}

function renderFiltered() {
  const container = document.getElementById("productsGrid");
  if (!container) return;

  const displayList = currentProducts.slice(0, currentLimit);
  
  container.innerHTML = displayList.map(p => {
    const isFlash = p.onFlashSale || false;
    let priceHTML = `<div class="product-price">KES ${p.price.toLocaleString()}</div>`;
    let badgeHTML = `<div class="product-badge">${p.badge}</div>`;
    const isLaptop = p.category.toLowerCase().includes('laptop') || p.category.toLowerCase().includes('macbook') || p.category.toLowerCase().includes('hp') || p.category.toLowerCase().includes('dell') || p.category.toLowerCase().includes('lenovo');
    if (isLaptop) {
      badgeHTML += `<div class="gift-badge" style="position: absolute; top: 35px; left: 10px; background: rgba(40, 167, 69, 0.9); color: white; padding: 3px 8px; font-size: 0.6rem; font-weight: 800; border-radius: 4px; z-index: 10; box-shadow: 0 2px 4px rgba(0,0,0,0.1); border: 1px solid rgba(255,255,255,0.2); letter-spacing: 0.5px;">+ BAG & MOUSE</div>`;
    }

    if (isFlash) {
      const offerPrice = Math.round(p.price * 0.9);
      priceHTML = `
        <div class="product-price-old" style="text-decoration: line-through; color: #888; font-size: 0.85rem;">KES ${p.price.toLocaleString()}</div>
        <div class="product-price" style="color: #e63946;">KES ${offerPrice.toLocaleString()}</div>
      `;
      badgeHTML += `<div class="flash-badge" style="position: absolute; top: 10px; right: 10px; background: #e63946; color: white; padding: 4px 8px; font-size: 0.7rem; font-weight: 800; border-radius: 4px; animation: pulse 2s infinite;">10% OFF</div>`;
    } else {
      priceHTML = `<div class="product-price">KES ${p.price.toLocaleString()}</div>`;
    }

    return `
      <div class="product-card" style="position: relative;">
        ${badgeHTML}
        <div class="product-img">
          <img src="${p.img}" alt="${p.name}" loading="lazy">
          <div class="product-overlay">
            <div class="product-actions">
              <button class="action-btn quick-view" onclick="openModal('${p.name.replace(/'/g, "\\'")}', 'KES ${p.price.toLocaleString()}', '${p.specs.replace(/'/g, "\\'")}', '${p.img}')" title="Quick View">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
              </button>
              <button class="action-btn order-wa" onclick="window.open('https://wa.me/254721585784?text=Hi Nexcom! I want to order: ${encodeURIComponent(p.name)}', '_blank')" title="Order on WhatsApp">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </button>
            </div>
          </div>
        </div>
        <div class="product-info">
          <div class="product-brand">${p.brand}</div>
          <h3 class="product-name">${p.name}</h3>
          <p class="product-specs">${p.specs}</p>
          <div class="price-container">
            ${priceHTML}
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Hide button if no more products
  const btn = document.getElementById('loadMoreBtn');
  if (btn) {
    btn.style.display = currentLimit >= currentProducts.length ? 'none' : 'block';
  }
}

function renderProducts(filter = "all") {
  const container = document.getElementById("productsGrid");
  if (!container) return;
  
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

  currentLimit = 24;
  renderFiltered();
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
    if (imgEl) imgEl.src = p.img;
    
    if (bannerEl) {
      bannerEl.onclick = () => {
        window.open(`https://wa.me/254721585784?text=Hi Nexcom! I want to claim the Daily Special: ${p.name}`, '_blank');
      };
    }
  }
}


/* // Welcome Promo Logic
function closePromo() {
  const overlay = document.getElementById('promoOverlay');
  if (overlay) {
    overlay.classList.remove('active');
    setTimeout(() => { overlay.style.display = 'none'; }, 700);
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
    const p = ALL_PRODUCTS[dateSeed % ALL_PRODUCTS.length}];
    
    if (p) {
      const titleEl = document.getElementById('promoTitle');
      const specsEl = document.getElementById('promoSpecs');
      const priceEl = document.getElementById('promoPrice');
      const waEl = document.getElementById('promoWA');
      const imgEl = overlay.querySelector('.promo-img');
      
      const isFlash = p.onFlashSale || false;
      let displayPrice = `KES ${p.price.toLocaleString()}`;
      if (isFlash) {
        displayPrice = `<span style="text-decoration: line-through; opacity: 0.6; font-size: 0.9rem;">KES ${p.price.toLocaleString()}</span><br/>KES ${Math.round(p.price * 0.9).toLocaleString()}`;
      }

      if (titleEl) {
        titleEl.innerHTML = p.name.replace(' ', '<br/>');
        titleEl.style.fontSize = "1.8rem"; 
      }
      if (specsEl) specsEl.innerText = p.specs;
      if (priceEl) priceEl.innerHTML = displayPrice;
      if (imgEl) imgEl.style.backgroundImage = `url('${p.img}')`;
      if (waEl) {
        waEl.href = `https://wa.me/254721585784?text=Hi%20Nexcom!%20I%20want%20to%20order%20the%20Today's%20Special:%20${p.name}`;
      }
    }

    // Show after preloader is gone (usually 2s total)
    setTimeout(() => {
      overlay.style.display = 'flex';
      setTimeout(() => {
        overlay.classList.add('active');
        
        // Start the 8s timer bar
        if (timerBar) {
          timerBar.style.animation = 'timerProgress 8s linear forwards';
        }

        // Auto-close after 8 seconds
        setTimeout(() => {
          closePromo();
        }, 8000);
      }, 100);
    }, 2500);
  }
});

 */// Initial Render
document.addEventListener('DOMContentLoaded', () => {
  setupDailySpecial();
  
  // Check URL parameters for filtering
  const urlParams = new URLSearchParams(window.location.search);
  const filterParam = urlParams.get('filter');
  
  if (filterParam) {
    renderProducts(filterParam);
    // Also scroll to products section
    const productsSection = document.getElementById('shop');
    if (productsSection) productsSection.scrollIntoView({ behavior: 'smooth' });
  } else {
    renderProducts('featured');
  }
});
