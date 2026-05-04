const ALL_PRODUCTS = [
  {
    "id": "hp-840-g8-i7",
    "brand": "HP",
    "name": "HP EliteBook 840 G8 i7",
    "specs": "i7 11th Gen \u2022 16GB \u2022 512GB",
    "price": 63000,
    "category": "exuk business featured hp",
    "badge": "hot",
    "img": "https://www.hp.com/ca-en/shop/Html/Merch/Images/c07010411_1750x1285.jpg"
  },
  {
    "id": "hp-840-g8-i5",
    "brand": "HP",
    "name": "HP EliteBook 840 G8 i5",
    "specs": "i5 11th Gen \u2022 8GB \u2022 256GB",
    "price": 49000,
    "category": "exuk business hp",
    "badge": "exuk",
    "img": "https://www.hp.com/ca-en/shop/Html/Merch/Images/c07010411_1750x1285.jpg"
  },
  {
    "id": "dell-xps-9330",
    "brand": "Dell",
    "name": "Dell XPS 13 9330",
    "specs": "i7 13th Gen \u2022 16GB \u2022 512GB",
    "price": 135000,
    "category": "exuk business featured dell",
    "badge": "new",
    "img": "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9340/media-gallery/laptop-xps-13-9340-platinum-gallery-1.psd?fmt=png-alpha&wid=1000"
  },
  {
    "id": "lenovo-x1-g10",
    "brand": "Lenovo",
    "name": "ThinkPad X1 Carbon Gen 10",
    "specs": "i7 12th Gen \u2022 16GB \u2022 512GB",
    "price": 91000,
    "category": "exuk business featured lenovo",
    "badge": "hot",
    "img": "https://p2-ofp.static.pub/fes/cms/2022/03/18/v7l068r6z9k4z9k4z9k4z9k4z9k4z9763529.png"
  },
  {
    "id": "item-0-macbook-pro-16-2019-i9",
    "brand": "Apple",
    "name": "MacBook Pro 16 2019 i9",
    "specs": "64GB/1TB \u2022 8GB Graphics",
    "price": 133000,
    "category": "exuk apple macbook featured",
    "badge": "exuk",
    "img": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-select-201911?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1573165440054"
  },
  {
    "id": "item-1-macbook-pro-16-i9",
    "brand": "Apple",
    "name": "MacBook Pro 16 i9",
    "specs": "32GB/2TB \u2022 8GB Graphics",
    "price": 133000,
    "category": "exuk apple macbook featured",
    "badge": "exuk",
    "img": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-select-201911?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1573165440054"
  },
  {
    "id": "item-2-macbook-pro-16-2019-i9",
    "brand": "Apple",
    "name": "MacBook Pro 16 2019 i9",
    "specs": "32GB/1TB \u2022 4GB Graphics",
    "price": 118999,
    "category": "exuk apple macbook featured",
    "badge": "exuk",
    "img": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-select-201911?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1573165440054"
  },
  {
    "id": "item-3-macbook-pro-16-2019-i7",
    "brand": "Apple",
    "name": "MacBook Pro 16 2019 i7",
    "specs": "32GB/512GB",
    "price": 98000,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-select-201911?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1573165440054"
  },
  {
    "id": "item-4-macbook-pro-15-2019-i7",
    "brand": "Apple",
    "name": "MacBook Pro 15 2019 i7",
    "specs": "16GB/512GB \u2022 4GB Graphics",
    "price": 88200,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80"
  },
  {
    "id": "item-5-macbook-pro-15-2018-i7",
    "brand": "Apple",
    "name": "MacBook Pro 15 2018 i7",
    "specs": "16GB/512GB \u2022 4GB Graphics",
    "price": 77000,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80"
  },
  {
    "id": "item-6-macbook-pro-15-2017-i7",
    "brand": "Apple",
    "name": "MacBook Pro 15 2017 i7",
    "specs": "16GB/512GB \u2022 4GB Graphics",
    "price": 72800,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80"
  },
  {
    "id": "item-7-macbook-pro-15-2017-i7",
    "brand": "Apple",
    "name": "MacBook Pro 15 2017 i7",
    "specs": "16GB/512GB \u2022 2GB Graphics",
    "price": 70000,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80"
  },
  {
    "id": "item-8-macbook-pro-15-2015-i7",
    "brand": "Apple",
    "name": "MacBook Pro 15 2015 i7",
    "specs": "16GB/512GB \u2022 2GB Graphics",
    "price": 49000,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80"
  },
  {
    "id": "item-9-macbook-pro-m1-13-2020",
    "brand": "Apple",
    "name": "MacBook Pro M1 13 2020",
    "specs": "16GB/512GB",
    "price": 140000,
    "category": "exuk apple macbook featured",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Nexcom+Ventures"
  },
  {
    "id": "item-10-macbook-pro-m1-13-2020",
    "brand": "Apple",
    "name": "MacBook Pro M1 13 2020",
    "specs": "8GB/256GB",
    "price": 105000,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Nexcom+Ventures"
  },
  {
    "id": "item-11-macbook-pro-13-i7-2020",
    "brand": "Apple",
    "name": "MacBook Pro 13 i7 2020",
    "specs": "16GB/1TB",
    "price": 91000,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://www.apple.com/v/macbook-pro-13/m/images/overview/hero_endframe__e953p4v88ce2_large.jpg"
  },
  {
    "id": "item-12-macbook-pro-13-i7-2020",
    "brand": "Apple",
    "name": "MacBook Pro 13 i7 2020",
    "specs": "32GB/512GB",
    "price": 91000,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://www.apple.com/v/macbook-pro-13/m/images/overview/hero_endframe__e953p4v88ce2_large.jpg"
  },
  {
    "id": "item-13-macbook-pro-13-i7-2020",
    "brand": "Apple",
    "name": "MacBook Pro 13 i7 2020",
    "specs": "16GB/512GB",
    "price": 84000,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://www.apple.com/v/macbook-pro-13/m/images/overview/hero_endframe__e953p4v88ce2_large.jpg"
  },
  {
    "id": "item-14-macbook-pro-13-2019-i7",
    "brand": "Apple",
    "name": "MacBook Pro 13 2019 i7",
    "specs": "16GB/1TB",
    "price": 98000,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://www.apple.com/v/macbook-pro-13/m/images/overview/hero_endframe__e953p4v88ce2_large.jpg"
  },
  {
    "id": "item-15-macbook-pro-13-2019-i7",
    "brand": "Apple",
    "name": "MacBook Pro 13 2019 i7",
    "specs": "16GB/512GB",
    "price": 77000,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://www.apple.com/v/macbook-pro-13/m/images/overview/hero_endframe__e953p4v88ce2_large.jpg"
  },
  {
    "id": "item-16-macbook-pro-13-2019-i7",
    "brand": "Apple",
    "name": "MacBook Pro 13 2019 i7",
    "specs": "16GB/256GB",
    "price": 70000,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://www.apple.com/v/macbook-pro-13/m/images/overview/hero_endframe__e953p4v88ce2_large.jpg"
  },
  {
    "id": "item-17-macbook-pro-13-2019-i5",
    "brand": "Apple",
    "name": "MacBook Pro 13 2019 i5",
    "specs": "16GB/256GB",
    "price": 62999,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://www.apple.com/v/macbook-pro-13/m/images/overview/hero_endframe__e953p4v88ce2_large.jpg"
  },
  {
    "id": "item-18-macbook-pro-13-2019-i5",
    "brand": "Apple",
    "name": "MacBook Pro 13 2019 i5",
    "specs": "8GB/256GB",
    "price": 58799,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://www.apple.com/v/macbook-pro-13/m/images/overview/hero_endframe__e953p4v88ce2_large.jpg"
  },
  {
    "id": "item-19-macbook-pro-13-2018-i7",
    "brand": "Apple",
    "name": "MacBook Pro 13 2018 i7",
    "specs": "16GB/256GB",
    "price": 67200,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://www.apple.com/v/macbook-pro-13/m/images/overview/hero_endframe__e953p4v88ce2_large.jpg"
  },
  {
    "id": "item-20-macbook-pro-13-2017-i7",
    "brand": "Apple",
    "name": "MacBook Pro 13 2017 i7",
    "specs": "16GB/1TB",
    "price": 70000,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://www.apple.com/v/macbook-pro-13/m/images/overview/hero_endframe__e953p4v88ce2_large.jpg"
  },
  {
    "id": "item-21-macbook-pro-13-2017-i7",
    "brand": "Apple",
    "name": "MacBook Pro 13 2017 i7",
    "specs": "16GB/512GB",
    "price": 62999,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://www.apple.com/v/macbook-pro-13/m/images/overview/hero_endframe__e953p4v88ce2_large.jpg"
  },
  {
    "id": "item-22-macbook-pro-13-2017-i7",
    "brand": "Apple",
    "name": "MacBook Pro 13 2017 i7",
    "specs": "16GB/256GB",
    "price": 56000,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://www.apple.com/v/macbook-pro-13/m/images/overview/hero_endframe__e953p4v88ce2_large.jpg"
  },
  {
    "id": "item-23-macbook-pro-13-2017-i5",
    "brand": "Apple",
    "name": "MacBook Pro 13 2017 i5",
    "specs": "8GB/512GB",
    "price": 53200,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://www.apple.com/v/macbook-pro-13/m/images/overview/hero_endframe__e953p4v88ce2_large.jpg"
  },
  {
    "id": "item-24-macbook-pro-13-2017-i5",
    "brand": "Apple",
    "name": "MacBook Pro 13 2017 i5",
    "specs": "8GB/256GB",
    "price": 44800,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://www.apple.com/v/macbook-pro-13/m/images/overview/hero_endframe__e953p4v88ce2_large.jpg"
  },
  {
    "id": "item-25-macbook-pro-13-2015-i7",
    "brand": "Apple",
    "name": "MacBook Pro 13 2015 i7",
    "specs": "8GB/256GB",
    "price": 42000,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://www.apple.com/v/macbook-pro-13/m/images/overview/hero_endframe__e953p4v88ce2_large.jpg"
  },
  {
    "id": "item-26-macbook-pro-13-2015-i5",
    "brand": "Apple",
    "name": "MacBook Pro 13 2015 i5",
    "specs": "16GB/512GB",
    "price": 44800,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://www.apple.com/v/macbook-pro-13/m/images/overview/hero_endframe__e953p4v88ce2_large.jpg"
  },
  {
    "id": "item-27-macbook-pro-13-2015-i5",
    "brand": "Apple",
    "name": "MacBook Pro 13 2015 i5",
    "specs": "16GB/256GB",
    "price": 37800,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://www.apple.com/v/macbook-pro-13/m/images/overview/hero_endframe__e953p4v88ce2_large.jpg"
  },
  {
    "id": "item-28-macbook-pro-13-2015-i5",
    "brand": "Apple",
    "name": "MacBook Pro 13 2015 i5",
    "specs": "8GB/256GB",
    "price": 35000,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://www.apple.com/v/macbook-pro-13/m/images/overview/hero_endframe__e953p4v88ce2_large.jpg"
  },
  {
    "id": "item-29-macbook-pro-13-2014-i5",
    "brand": "Apple",
    "name": "MacBook Pro 13 2014 i5",
    "specs": "8GB/256GB",
    "price": 32199,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://www.apple.com/v/macbook-pro-13/m/images/overview/hero_endframe__e953p4v88ce2_large.jpg"
  },
  {
    "id": "item-30-macbook-pro-13-2013-i5",
    "brand": "Apple",
    "name": "MacBook Pro 13 2013 i5",
    "specs": "8GB/256GB",
    "price": 29399,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://www.apple.com/v/macbook-pro-13/m/images/overview/hero_endframe__e953p4v88ce2_large.jpg"
  },
  {
    "id": "item-31-macbook-pro-13-2013-i7",
    "brand": "Apple",
    "name": "MacBook Pro 13 2013 i7",
    "specs": "8GB/256GB",
    "price": 35000,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://www.apple.com/v/macbook-pro-13/m/images/overview/hero_endframe__e953p4v88ce2_large.jpg"
  },
  {
    "id": "item-32-macbook-pro-13-2012-i7",
    "brand": "Apple",
    "name": "MacBook Pro 13 2012 i7",
    "specs": "8GB/256GB",
    "price": 26600,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://www.apple.com/v/macbook-pro-13/m/images/overview/hero_endframe__e953p4v88ce2_large.jpg"
  },
  {
    "id": "item-33-macbook-pro-13-2012-i5",
    "brand": "Apple",
    "name": "MacBook Pro 13 2012 i5",
    "specs": "8GB/256GB",
    "price": 23800,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://www.apple.com/v/macbook-pro-13/m/images/overview/hero_endframe__e953p4v88ce2_large.jpg"
  },
  {
    "id": "item-34-macbook-pro-13-2011-i5",
    "brand": "Apple",
    "name": "MacBook Pro 13 2011 i5",
    "specs": "8GB/256GB",
    "price": 21000,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://www.apple.com/v/macbook-pro-13/m/images/overview/hero_endframe__e953p4v88ce2_large.jpg"
  },
  {
    "id": "item-35-macbook-air-m1-2022",
    "brand": "Apple",
    "name": "MacBook Air M1 2022",
    "specs": "8GB/512GB",
    "price": 118999,
    "category": "exuk apple macbook featured",
    "badge": "exuk",
    "img": "https://www.apple.com/v/macbook-air-m2/c/images/overview/hero/hero_static__f9clv6u74u6u_large.jpg"
  },
  {
    "id": "item-36-macbook-air-m1-2022",
    "brand": "Apple",
    "name": "MacBook Air M1 2022",
    "specs": "8GB/256GB",
    "price": 112000,
    "category": "exuk apple macbook featured",
    "badge": "exuk",
    "img": "https://www.apple.com/v/macbook-air-m2/c/images/overview/hero/hero_static__f9clv6u74u6u_large.jpg"
  },
  {
    "id": "item-37-macbook-air-m1-2020",
    "brand": "Apple",
    "name": "MacBook Air M1 2020",
    "specs": "8GB/256GB",
    "price": 84000,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://www.apple.com/v/macbook-air-m2/c/images/overview/hero/hero_static__f9clv6u74u6u_large.jpg"
  },
  {
    "id": "item-38-macbook-air-13-2019-i5",
    "brand": "Apple",
    "name": "MacBook Air 13 2019 i5",
    "specs": "16GB/256GB",
    "price": 58799,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://www.apple.com/v/macbook-air-m2/c/images/overview/hero/hero_static__f9clv6u74u6u_large.jpg"
  },
  {
    "id": "item-39-macbook-air-13-2019-i5",
    "brand": "Apple",
    "name": "MacBook Air 13 2019 i5",
    "specs": "8GB/256GB",
    "price": 56000,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://www.apple.com/v/macbook-air-m2/c/images/overview/hero/hero_static__f9clv6u74u6u_large.jpg"
  },
  {
    "id": "item-40-macbook-air-13-2018-i5",
    "brand": "Apple",
    "name": "MacBook Air 13 2018 i5",
    "specs": "8GB/256GB",
    "price": 53200,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://www.apple.com/v/macbook-air-m2/c/images/overview/hero/hero_static__f9clv6u74u6u_large.jpg"
  },
  {
    "id": "item-41-macbook-air-13-2017-i7",
    "brand": "Apple",
    "name": "MacBook Air 13 2017 i7",
    "specs": "8GB/256GB",
    "price": 42000,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://www.apple.com/v/macbook-air-m2/c/images/overview/hero/hero_static__f9clv6u74u6u_large.jpg"
  },
  {
    "id": "item-42-macbook-air-13-2017-i5",
    "brand": "Apple",
    "name": "MacBook Air 13 2017 i5",
    "specs": "8GB/256GB",
    "price": 35000,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://www.apple.com/v/macbook-air-m2/c/images/overview/hero/hero_static__f9clv6u74u6u_large.jpg"
  },
  {
    "id": "item-43-macbook-air-13-2015-i5",
    "brand": "Apple",
    "name": "MacBook Air 13 2015 i5",
    "specs": "8GB/256GB",
    "price": 30799,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://www.apple.com/v/macbook-air-m2/c/images/overview/hero/hero_static__f9clv6u74u6u_large.jpg"
  },
  {
    "id": "item-44-macbook-air-13-2014-i7",
    "brand": "Apple",
    "name": "MacBook Air 13 2014 i7",
    "specs": "8GB/256GB",
    "price": 29399,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://www.apple.com/v/macbook-air-m2/c/images/overview/hero/hero_static__f9clv6u74u6u_large.jpg"
  },
  {
    "id": "item-45-macbook-air-13-2013-i5",
    "brand": "Apple",
    "name": "MacBook Air 13 2013 i5",
    "specs": "8GB/128GB",
    "price": 26600,
    "category": "exuk apple macbook ",
    "badge": "exuk",
    "img": "https://www.apple.com/v/macbook-air-m2/c/images/overview/hero/hero_static__f9clv6u74u6u_large.jpg"
  },
  {
    "id": "item-46-samsung-930-i7",
    "brand": "Samsung",
    "name": "Samsung 930 i7",
    "specs": "11th Gen \u2022 16GB/512GB",
    "price": 84000,
    "category": "exuk samsung business",
    "badge": "exuk",
    "img": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80"
  }
];

// Badge labels
const BADGE_LABELS = {
  new: "New Arrival",
  hot: "🔥 Bestseller",
  exuk: "Ex-UK Grade A"
};

let currentLimit = 12;
let currentFilter = "featured";

function renderProducts(filter = "featured") {
  const grid = document.getElementById("productsGrid");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  if (!grid) return;
  currentFilter = filter;
  const filtered = filter === "all" ? ALL_PRODUCTS : filter === "featured" ? ALL_PRODUCTS.filter(p => p.category.includes("featured")) : ALL_PRODUCTS.filter(p => p.category.includes(filter));
  const toShow = filtered.slice(0, currentLimit);
  grid.innerHTML = toShow.map(p => {
    const symbol = 'KES';
    const priceDisplay = `${symbol} ${p.price.toLocaleString()}`;
    return `
      <div class="product-card">
        <div class="product-badge ${p.badge}">${BADGE_LABELS[p.badge] || p.badge}</div>
        <div class="product-img">
          <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x200/0a0a0a/f01a24?text=${encodeURIComponent(p.brand)}'"/>
          <div class="product-overlay">
            <button class="quick-view-btn" onclick='openModal("${p.name.replace(/"/g,"&quot;")}", "${priceDisplay}", "${p.specs.replace(/"/g,"&quot;")}", "${p.img}", ${p.price})'>Quick View</button>
          </div>
        </div>
        <div class="product-info">
          <div class="product-brand">${p.brand}</div>
          <h3>${p.name}</h3>
          <p>${p.specs}</p>
          <div class="product-footer">
            <div class="price-container"><span class="price">${priceDisplay}</span><span class="vat-tag">Excl. VAT</span></div>
            <button class="add-cart" onclick="addToCart('${p.name.replace(/'/g,"\'")}', ${p.price}, 'KES')">Add to Cart</button>
          </div>
        </div>
      </div>
    `;
  }).join("");
  if (loadMoreBtn) loadMoreBtn.style.display = currentLimit >= filtered.length ? "none" : "inline-block";
}

function filterProducts(category, btn) {
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");
  currentLimit = 12;
  renderProducts(category);
}

function loadMoreProducts() {
  currentLimit += 12;
  renderProducts(currentFilter);
}

function searchProducts() {
  const query = document.getElementById("productSearch").value.toLowerCase();
  const grid = document.getElementById("productsGrid");
  if (!grid || !query) { renderProducts(currentFilter); return; }
  const filtered = ALL_PRODUCTS.filter(p => p.name.toLowerCase().includes(query) || p.brand.toLowerCase().includes(query) || p.specs.toLowerCase().includes(query));
  grid.innerHTML = filtered.map(p => {
    const priceDisplay = `KES ${p.price.toLocaleString()}`;
    return `
      <div class="product-card">
        <div class="product-badge ${p.badge}">${BADGE_LABELS[p.badge] || p.badge}</div>
        <div class="product-img">
          <img src="${p.img}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/300x200/0a0a0a/f01a24?text=${encodeURIComponent(p.brand)}'"/>
          <div class="product-overlay">
            <button class="quick-view-btn" onclick='openModal("${p.name.replace(/"/g,"&quot;")}", "${priceDisplay}", "${p.specs.replace(/"/g,"&quot;")}", "${p.img}", ${p.price})'>Quick View</button>
          </div>
        </div>
        <div class="product-info">
          <div class="product-brand">${p.brand}</div>
          <h3>${p.name}</h3>
          <p>${p.specs}</p>
          <div class="product-footer">
            <div class="price-container"><span class="price">${priceDisplay}</span><span class="vat-tag">Excl. VAT</span></div>
            <button class="add-cart" onclick="addToCart('${p.name.replace(/'/g,"\'")}', ${p.price}, 'KES')">Add to Cart</button>
          </div>
        </div>
      </div>
    `;
  }).join("") || `<div class="no-results">No matches found</div>`;
}

document.addEventListener("DOMContentLoaded", () => renderProducts("featured"));
