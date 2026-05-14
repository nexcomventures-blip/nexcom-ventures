const ALL_PRODUCTS = [
  {
    "id": "mb-0",
    "brand": "Apple",
    "name": "MacBook Pro 16 M1 (2021)",
    "specs": "Apple M1 Pro \u2022 32GB RAM \u2022 512GB SSD",
    "price": 155000,
    "category": "exuk apple macbook pro 16 featured",
    "badge": "premium",
    "img": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookpro/macbook-pro-16-inch-2019.jpg"
  },
  {
    "id": "mb-1",
    "brand": "Apple",
    "name": "MacBook Pro 16 i9 (2019)",
    "specs": "Intel i9 \u2022 32GB RAM \u2022 2TB SSD \u2022 8GB Graphics",
    "price": 105000,
    "category": "exuk apple macbook pro 16",
    "badge": "premium",
    "img": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookpro/macbook-pro-16-inch-2019.jpg"
  },
  {
    "id": "mb-2",
    "brand": "Apple",
    "name": "MacBook Pro 16 i9 (2019)",
    "specs": "Intel i9 \u2022 32GB RAM \u2022 1TB SSD \u2022 4GB Graphics",
    "price": 95000,
    "category": "exuk apple macbook pro 16",
    "badge": "premium",
    "img": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookpro/macbook-pro-16-inch-2019.jpg"
  },
  {
    "id": "mb-3",
    "brand": "Apple",
    "name": "MacBook Pro 16 i7 (2019)",
    "specs": "Intel i7 \u2022 32GB RAM \u2022 512GB SSD \u2022 4GB Graphics",
    "price": 80000,
    "category": "exuk apple macbook pro 16",
    "badge": "premium",
    "img": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookpro/macbook-pro-16-inch-2019.jpg"
  },
  {
    "id": "mb-4",
    "brand": "Apple",
    "name": "MacBook Pro 15 (2019)",
    "specs": "Intel i7 \u2022 16GB RAM \u2022 512GB SSD \u2022 4GB Graphics",
    "price": 70000,
    "category": "exuk apple macbook pro 15",
    "badge": "premium",
    "img": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookpro/macbook-pro-13-inch-2020.jpg"
  },
  {
    "id": "mb-5",
    "brand": "Apple",
    "name": "MacBook Pro 15 (2018)",
    "specs": "Intel i7 \u2022 16GB RAM \u2022 512GB SSD \u2022 4GB Graphics",
    "price": 62000,
    "category": "exuk apple macbook pro 15",
    "badge": "premium",
    "img": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookpro/macbook-pro-13-inch-2020.jpg"
  },
  {
    "id": "mb-6",
    "brand": "Apple",
    "name": "MacBook Pro 15 (2017)",
    "specs": "Intel i7 \u2022 16GB RAM \u2022 512GB SSD \u2022 4GB Graphics",
    "price": 58000,
    "category": "exuk apple macbook pro 15",
    "badge": "premium",
    "img": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookpro/macbook-pro-13-inch-2020.jpg"
  },
  {
    "id": "mb-7",
    "brand": "Apple",
    "name": "MacBook Pro 15 (2015)",
    "specs": "Intel i7 \u2022 16GB RAM \u2022 512GB SSD \u2022 2GB Graphics",
    "price": 42000,
    "category": "exuk apple macbook pro 15",
    "badge": "value",
    "img": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookpro/macbook-pro-13-inch-2020.jpg"
  },
  {
    "id": "mb-8",
    "brand": "Apple",
    "name": "MacBook Pro 13 i7 (2020)",
    "specs": "Intel i7 \u2022 16GB RAM \u2022 1TB SSD \u2022 Touch Bar",
    "price": 82000,
    "category": "exuk apple macbook pro 13",
    "badge": "premium",
    "img": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookpro/macbook-pro-13-inch-2020.jpg"
  },
  {
    "id": "mb-9",
    "brand": "Apple",
    "name": "MacBook Pro 13 i7 (2020)",
    "specs": "Intel i7 \u2022 32GB RAM \u2022 512GB SSD \u2022 Touch Bar",
    "price": 85000,
    "category": "exuk apple macbook pro 13",
    "badge": "premium",
    "img": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookpro/macbook-pro-13-inch-2020.jpg"
  },
  {
    "id": "mb-10",
    "brand": "Apple",
    "name": "MacBook Pro 13 i7 (2020)",
    "specs": "Intel i7 \u2022 16GB RAM \u2022 512GB SSD \u2022 Space Gray",
    "price": 78000,
    "category": "exuk apple macbook pro 13 featured",
    "badge": "premium",
    "img": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookpro/macbook-pro-13-inch-2020.jpg"
  },
  {
    "id": "mb-11",
    "brand": "Apple",
    "name": "MacBook Pro 13 i7 (2019)",
    "specs": "Intel i7 \u2022 16GB RAM \u2022 1TB SSD \u2022 Space Gray",
    "price": 88000,
    "category": "exuk apple macbook pro 13",
    "badge": "premium",
    "img": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookpro/macbook-pro-13-inch-2020.jpg"
  },
  {
    "id": "mb-12",
    "brand": "Apple",
    "name": "MacBook Pro 13 i7 (2019)",
    "specs": "Intel i7 \u2022 16GB RAM \u2022 512GB SSD \u2022 Space Gray",
    "price": 68000,
    "category": "exuk apple macbook pro 13",
    "badge": "premium",
    "img": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookpro/macbook-pro-13-inch-2020.jpg"
  },
  {
    "id": "mb-13",
    "brand": "Apple",
    "name": "MacBook Pro 13 i7 (2019)",
    "specs": "Intel i7 \u2022 16GB RAM \u2022 256GB SSD",
    "price": 63000,
    "category": "exuk apple macbook pro 13",
    "badge": "premium",
    "img": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookpro/macbook-pro-13-inch-2020.jpg"
  },
  {
    "id": "mb-14",
    "brand": "Apple",
    "name": "MacBook Pro 13 i5 (2019)",
    "specs": "Intel i5 \u2022 16GB RAM \u2022 256GB SSD",
    "price": 53000,
    "category": "exuk apple macbook pro 13",
    "badge": "premium",
    "img": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookpro/macbook-pro-13-inch-2020.jpg"
  },
  {
    "id": "mb-15",
    "brand": "Apple",
    "name": "MacBook Pro 13 i5 (2019)",
    "specs": "Intel i5 \u2022 8GB RAM \u2022 256GB SSD",
    "price": 50000,
    "category": "exuk apple macbook pro 13",
    "badge": "value",
    "img": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookpro/macbook-pro-13-inch-2020.jpg"
  },
  {
    "id": "mb-16",
    "brand": "Apple",
    "name": "MacBook Pro 13 i7 (2017)",
    "specs": "Intel i7 \u2022 16GB RAM \u2022 1TB SSD",
    "price": 58000,
    "category": "exuk apple macbook pro 13",
    "badge": "premium",
    "img": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookpro/macbook-pro-13-inch-2020.jpg"
  },
  {
    "id": "mb-17",
    "brand": "Apple",
    "name": "MacBook Pro 13 i7 (2017)",
    "specs": "Intel i7 \u2022 16GB RAM \u2022 512GB SSD",
    "price": 53000,
    "category": "exuk apple macbook pro 13",
    "badge": "premium",
    "img": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookpro/macbook-pro-13-inch-2020.jpg"
  },
  {
    "id": "mb-18",
    "brand": "Apple",
    "name": "MacBook Pro 13 i5 (2017)",
    "specs": "Intel i5 \u2022 16GB RAM \u2022 256GB SSD",
    "price": 42000,
    "category": "exuk apple macbook pro 13",
    "badge": "value",
    "img": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookpro/macbook-pro-13-inch-2020.jpg"
  },
  {
    "id": "mb-19",
    "brand": "Apple",
    "name": "MacBook Pro 13 i7 (2015)",
    "specs": "Intel i7 \u2022 8GB RAM \u2022 256GB SSD",
    "price": 35000,
    "category": "exuk apple macbook pro 13 budget",
    "badge": "value",
    "img": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookpro/macbook-pro-13-inch-2020.jpg"
  },
  {
    "id": "mb-20",
    "brand": "Apple",
    "name": "MacBook Pro 13 i5 (2015)",
    "specs": "Intel i5 \u2022 16GB RAM \u2022 512GB SSD",
    "price": 38000,
    "category": "exuk apple macbook pro 13 budget",
    "badge": "value",
    "img": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookpro/macbook-pro-13-inch-2020.jpg"
  },
  {
    "id": "mb-21",
    "brand": "Apple",
    "name": "MacBook Pro 13 i5 (2015)",
    "specs": "Intel i5 \u2022 8GB RAM \u2022 256GB SSD",
    "price": 30000,
    "category": "exuk apple macbook pro 13 budget",
    "badge": "value",
    "img": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookpro/macbook-pro-13-inch-2020.jpg"
  },
  {
    "id": "mb-22",
    "brand": "Apple",
    "name": "MacBook Pro 13 i5 (2012)",
    "specs": "Intel i5 \u2022 8GB RAM \u2022 256GB SSD",
    "price": 21000,
    "category": "exuk apple macbook pro 13 budget",
    "badge": "value",
    "img": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookpro/macbook-pro-13-inch-2020.jpg"
  },
  {
    "id": "mb-23",
    "brand": "Apple",
    "name": "MacBook Pro 13 i5 (2011)",
    "specs": "Intel i5 \u2022 8GB RAM \u2022 256GB SSD",
    "price": 19000,
    "category": "exuk apple macbook pro 13 budget",
    "badge": "value",
    "img": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookpro/macbook-pro-13-inch-2020.jpg"
  },
  {
    "id": "mb-24",
    "brand": "Apple",
    "name": "MacBook Air M1 (2022)",
    "specs": "Apple M1 \u2022 8GB RAM \u2022 256GB SSD \u2022 Midnight",
    "price": 100000,
    "category": "exuk apple macbook air featured",
    "badge": "premium",
    "img": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookair/macbook-air-2017.jpg"
  },
  {
    "id": "mb-25",
    "brand": "Apple",
    "name": "MacBook Air M1 (2020)",
    "specs": "Apple M1 \u2022 8GB RAM \u2022 256GB SSD \u2022 Space Gray",
    "price": 78000,
    "category": "exuk apple macbook air featured",
    "badge": "premium",
    "img": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookair/macbook-air-2017.jpg"
  },
  {
    "id": "mb-26",
    "brand": "Apple",
    "name": "MacBook Air 13 (2019)",
    "specs": "Intel i5 \u2022 16GB RAM \u2022 256GB SSD",
    "price": 52000,
    "category": "exuk apple macbook air",
    "badge": "premium",
    "img": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookair/macbook-air-2017.jpg"
  },
  {
    "id": "mb-27",
    "brand": "Apple",
    "name": "MacBook Air 13 (2019)",
    "specs": "Intel i5 \u2022 8GB RAM \u2022 256GB SSD",
    "price": 48000,
    "category": "exuk apple macbook air",
    "badge": "value",
    "img": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookair/macbook-air-2017.jpg"
  },
  {
    "id": "mb-28",
    "brand": "Apple",
    "name": "MacBook Air 13 (2018)",
    "specs": "Intel i5 \u2022 8GB RAM \u2022 256GB SSD",
    "price": 45000,
    "category": "exuk apple macbook air",
    "badge": "value",
    "img": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookair/macbook-air-2017.jpg"
  },
  {
    "id": "mb-29",
    "brand": "Apple",
    "name": "MacBook Air 13 (2017)",
    "specs": "Intel i7 \u2022 8GB RAM \u2022 256GB SSD",
    "price": 35000,
    "category": "exuk apple macbook air budget",
    "badge": "value",
    "img": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookair/macbook-air-2017.jpg"
  },
  {
    "id": "mb-30",
    "brand": "Apple",
    "name": "MacBook Air 13 (2017)",
    "specs": "Intel i5 \u2022 8GB RAM \u2022 256GB SSD",
    "price": 29000,
    "category": "exuk apple macbook air budget featured",
    "badge": "value",
    "img": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookair/macbook-air-2017.jpg"
  },
  {
    "id": "mb-31",
    "brand": "Apple",
    "name": "MacBook Air 13 (2015)",
    "specs": "Intel i5 \u2022 8GB RAM \u2022 256GB SSD",
    "price": 26000,
    "category": "exuk apple macbook air budget",
    "badge": "value",
    "img": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookair/macbook-air-2017.jpg"
  },
  {
    "id": "mb-32",
    "brand": "Apple",
    "name": "MacBook Air 13 (2013)",
    "specs": "Intel i5 \u2022 8GB RAM \u2022 128GB SSD",
    "price": 21000,
    "category": "exuk apple macbook air budget",
    "badge": "value",
    "img": "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macbookair/macbook-air-2017.jpg"
  }
];

function renderProducts(filter = 'all', targetBtn = null) {
  const container = document.getElementById('productGrid');
  if (!container) return;

  container.innerHTML = '';
  
  if (targetBtn) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    targetBtn.classList.add('active');
  }

  const filtered = filter === 'all' 
    ? ALL_PRODUCTS 
    : ALL_PRODUCTS.filter(p => p.category.includes(filter));

  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-img" style="background-image: url('${p.img}')">
        ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
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
}

function setupDailySpecial() {
  const overlay = document.getElementById('promoOverlay');
  if (!overlay) return;

  const featured = ALL_PRODUCTS.filter(p => p.category.includes('featured'));
  if (featured.length > 0) {
    const p = featured[Math.floor(Math.random() * featured.length)];
    const titleEl = overlay.querySelector('.promo-title');
    const specsEl = overlay.querySelector('.promo-specs');
    const priceEl = overlay.querySelector('.promo-price');
    const waEl = overlay.querySelector('.claim-btn');
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
