const ALL_PRODUCTS = [
    {
        "id": "feat-1",
        "brand": "Lenovo",
        "name": "Lenovo X390 I5 8Th 8/256Gb",
        "specs": "x390 i5 8th 8/256gb",
        "price": 22000,
        "category": "exuk business lenovo featured",
        "badge": "exuk",
        "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x390+i5+8th+8/256gb"
    },
    {
        "id": "feat-2",
        "brand": "Lenovo",
        "name": "Lenovo X13 I7 10Th 16/512Gb",
        "specs": "x13 i7 10th 16/512gb",
        "price": 32000,
        "category": "exuk business lenovo featured",
        "badge": "exuk",
        "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x13+i7+10th+16/512gb"
    },
    {
        "id": "feat-3",
        "brand": "Dell",
        "name": "Dell Xps 15 9570 I7 8Th 16/512Gb 4Gb Graphics",
        "specs": "xps 15 9570 i7 8th 16/512gb 4gb Graphics",
        "price": 50000,
        "category": "exuk business dell featured",
        "badge": "exuk",
        "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+xps+15+9570+i7"
    },
    {
        "id": "feat-4",
        "brand": "Dell",
        "name": "Dell Xps 13 9305 I7 11Th 16/512Gb",
        "specs": "xps 13 9305 i7 11th 16/512gb",
        "price": 60000,
        "category": "exuk business dell featured",
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
    },
    {
        "id": "tmp-7844",
        "brand": "Lenovo",
        "name": "Lenovo X1 Carbon I7 8Th 16/512Gb.",
        "specs": "x1 carbon i7 8th 16/512gb.",
        "price": 35000,
        "category": "exuk business lenovo",
        "badge": "exuk",
        "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x1+carbon+i7+8th"
    },
    {
        "id": "tmp-8108",
        "brand": "Dell",
        "name": "Dell Latitude 9410 2In1 I7 10Th 16/512",
        "specs": "latitude 9410 2in1 i7 10th 16/512",
        "price": 45000,
        "category": "exuk business dell",
        "badge": "exuk",
        "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+latitude+9410+2in1+i7"
    },
    {
        "id": "tmp-5610",
        "brand": "Dell",
        "name": "Dell Xps 13 9305",
        "specs": "xps 13 9305 i7 11th",
        "price": 60000,
        "category": "exuk business dell",
        "badge": "exuk",
        "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+9305"
    },
    {
        "id": "tmp-9209",
        "brand": "Dell",
        "name": "Dell Latitude 5400 i5",
        "specs": "Intel Core i5 8th Gen \u2022 8GB RAM \u2022 256GB SSD \u2022 14\" FHD",
        "price": 24000,
        "category": "exuk business dell",
        "badge": "exuk",
        "img": "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-5440-laptop/media-gallery/latitude-5440-laptop-gallery-1.psd?fmt=png-alpha&wid=1000"
    },
    {
        "id": "tmp-2594",
        "brand": "Lenovo",
        "name": "Lenovo Thinkbook 13S G2 Itl I7 11Th 16/512 Touchscreen",
        "specs": "thinkbook 13s G2 ITL i7 11th 16/512 touchscreen",
        "price": 50000,
        "category": "exuk business lenovo",
        "badge": "exuk",
        "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+thinkbook+13s+G2+ITL"
    },
    {
        "id": "tmp-2095",
        "brand": "Dell",
        "name": "Dell Precision 5550 I7 10Th 16/512Gb With 4Gb Nvidia T1000 Graphics",
        "specs": "precision 5550 i7 10th 16/512gb with 4gb nvidia T1000 graphics",
        "price": 70000,
        "category": "exuk business dell",
        "badge": "exuk",
        "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+precision+5550+i7+10th"
    },
    {
        "id": "tmp-2691",
        "brand": "Dell",
        "name": "Dell Latitude 5300 I5 8Th 8/256 Touchscreen",
        "specs": "latitude 5300 i5 8th 8/256 touchscreen",
        "price": 22000,
        "category": "exuk business dell",
        "badge": "exuk",
        "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+latitude+5300+i5+8th"
    },
    {
        "id": "hp-elitebook-840-g10-brand-new",
        "brand": "HP",
        "name": "HP EliteBook 840 G10",
        "specs": "Intel Core i7-1355U \u2022 16GB RAM \u2022 512GB SSD \u2022 14\" WUXGA \u2022 BRAND NEW",
        "price": 224000,
        "category": "business hp",
        "badge": "new",
        "img": "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08483861.png"
    },
    {
        "id": "hp-zbook-firefly-g10-brand-new",
        "brand": "HP",
        "name": "HP ZBook Firefly G10",
        "specs": "Intel Core i7-1355U \u2022 16GB RAM \u2022 512GB SSD \u2022 NVIDIA RTX A500 4GB \u2022 14\" \u2022 BRAND NEW",
        "price": 235000,
        "category": "business hp",
        "badge": "new",
        "img": "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08483842.png"
    },
    {
        "id": "tmp-8547",
        "brand": "Dell",
        "name": "Dell Xps 13 9320 I7 12Th 16/512Gb",
        "specs": "xps 13 9320 i7 12th 16/512gb",
        "price": 95000,
        "category": "exuk business dell",
        "badge": "exuk",
        "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+xps+13+9320+i7"
    },
    {
        "id": "tmp-3831",
        "brand": "Apple",
        "name": "MacBook Pro 13 M2 (2022)",
        "specs": "Apple M2 Chip \u2022 8GB RAM \u2022 512GB SSD \u2022 Retina Display",
        "price": 140000,
        "category": "exuk apple macbook",
        "badge": "hot",
        "img": "https://www.apple.com/v/macbook-pro-13/m/images/overview/hero_endframe__e953p4v88ce2_large.jpg"
    },
    {
        "id": "featured-dell-xps-9330",
        "brand": "Dell",
        "name": "Dell XPS 13 9330",
        "specs": "Intel Core i7 13th Gen \u2022 16GB RAM \u2022 512GB SSD \u2022 InfinityEdge",
        "price": 135000,
        "category": "exuk business dell",
        "badge": "new",
        "img": "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9340/media-gallery/laptop-xps-13-9340-platinum-gallery-1.psd?fmt=png-alpha&wid=1000"
    },
    {
        "id": "featured-dell-xps-9320",
        "brand": "Dell",
        "name": "Dell XPS 13 Plus 9320",
        "specs": "Intel Core i7 12th Gen \u2022 16GB RAM \u2022 512GB SSD \u2022 OLED Touch",
        "price": 110000,
        "category": "exuk business dell",
        "badge": "hot",
        "img": "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9320/media-gallery/laptop-xps-9320-t-silver-gallery-1.psd?fmt=png-alpha&wid=1000"
    },
    {
        "id": "featured-macbook-air-m2",
        "brand": "Apple",
        "name": "MacBook Air 13 M2 (2022)",
        "specs": "Apple M2 Chip \u2022 8GB RAM \u2022 256GB SSD \u2022 Liquid Retina",
        "price": 115000,
        "category": "exuk apple macbook",
        "badge": "new",
        "img": "https://www.apple.com/v/macbook-air-m2/c/images/overview/hero/hero_static__f9clv6u74u6u_large.jpg"
    },
    {
        "id": "featured-lenovo-x1-g10",
        "brand": "Lenovo",
        "name": "ThinkPad X1 Carbon Gen 10",
        "specs": "Intel Core i7 12th Gen \u2022 16GB RAM \u2022 512GB SSD \u2022 14\" Touch",
        "price": 91000,
        "category": "exuk business lenovo",
        "badge": "hot",
        "img": "https://p2-ofp.static.pub/fes/cms/2022/03/18/v7l068r6z9k4z9k4z9k4z9k4z9k4z9763529.png"
    },
    {
        "id": "featured-dell-xps-9310",
        "brand": "Dell",
        "name": "Dell XPS 13 9310",
        "specs": "Intel Core i7 11th Gen \u2022 16GB RAM \u2022 512GB SSD \u2022 FHD+ Touch",
        "price": 85000,
        "category": "exuk business dell",
        "badge": "exuk",
        "img": "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9310/media-gallery/laptop-xps-13-9310-silver-gallery-1.psd?fmt=png-alpha&wid=1000"
    },
    {
        "id": "featured-hp840g8-i7",
        "brand": "HP",
        "name": "HP EliteBook 840 G8 i7",
        "specs": "Intel Core i7 11th Gen \u2022 16GB RAM \u2022 512GB SSD \u2022 14\" FHD",
        "price": 63000,
        "category": "exuk business hp",
        "badge": "hot",
        "img": "https://www.hp.com/ca-en/shop/Html/Merch/Images/c07010411_1750x1285.jpg"
    },
    {
        "id": "featured-dell-xps-7390",
        "brand": "Dell",
        "name": "Dell XPS 13 7390",
        "specs": "Intel Core i7 10th Gen \u2022 16GB RAM \u2022 512GB SSD \u2022 13.3\" FHD",
        "price": 49500,
        "category": "exuk business dell",
        "badge": "exuk",
        "img": "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9315/media-gallery/laptop-xps-13-9315-silver-gallery-1.psd?fmt=png-alpha&wid=1000"
    },
    {
        "id": "lenovo-t490",
        "brand": "Lenovo",
        "name": "ThinkPad T490",
        "specs": "i5 8th Gen \u2022 16GB RAM \u2022 512GB SSD",
        "price": 49500,
        "category": "exuk business lenovo",
        "badge": "exuk",
        "img": "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8OTM3NjB8aW1hZ2UvcG5nfGg0Zi9oMmIvMTEwNjE1NzA2NTA2NTQucG5nfDY0ZGUyNTVmZmI1YzI5ZDY4ZDMwYmI0NmIxZDI1Zjk0ZDA0YjRkZGIzYjYyMDllNDNiZDFmZTc3YjcyYWRmMDM/lenovo-laptop-thinkbook-14-gen-2-intel-hero.png"
    },
    {
        "id": "lenovo-x280",
        "brand": "Lenovo",
        "name": "ThinkPad X280 i5",
        "specs": "i5 8th Gen \u2022 8GB RAM \u2022 256GB SSD",
        "price": 29500,
        "category": "exuk business lenovo",
        "badge": "hot",
        "img": "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8OTM3NjB8aW1hZ2UvcG5nfGg0Zi9oMmIvMTEwNjE1NzA2NTA2NTQucG5nfDY0ZGUyNTVmZmI1YzI5ZDY4ZDMwYmI0NmIxZDI1Zjk0ZDA0YjRkZGIzYjYyMDllNDNiZDFmZTc3YjcyYWRmMDM/lenovo-laptop-thinkbook-14-gen-2-intel-hero.png"
    },
    {
        "id": "part-mac-a2337-battery",
        "brand": "Apple",
        "name": "MacBook Air A2337 Battery",
        "specs": "Original Replacement \u2022 For M1 MacBook Air",
        "price": 14000,
        "category": "parts battery apple macbook",
        "badge": "new",
        "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=MacBook+Battery"
    },
    {
        "id": "part-mac-a2337-screen",
        "brand": "Apple",
        "name": "MacBook Air A2337 Screen",
        "specs": "13.3\" Liquid Retina \u2022 M1 Replacement",
        "price": 39900,
        "category": "parts screen apple macbook",
        "badge": "new",
        "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=MacBook+Screen"
    },
    {
        "id": "hpe-dl380-gen11-16core-elite",
        "brand": "HPE",
        "name": "HPE ProLiant DL380 Gen11 (16-Core)",
        "specs": "Intel Xeon Gold 5416S \u2022 32GB RAM \u2022 2U Rack \u2022 3 Year Warranty \u2022 BRAND NEW",
        "price": 945000,
        "category": "server enterprise hpe",
        "badge": "elite",
        "img": "https://webobjects2.cdw.com/is/image/CDW/7931767?$product-main$"
    },
    {
        "id": "dell-r360-rack-elite",
        "brand": "Dell",
        "name": "Dell PowerEdge R360 Rack Server",
        "specs": "Intel Xeon E-2434 \u2022 32GB RAM \u2022 480GB SSD \u2022 1U Rack \u2022 3 Year Warranty \u2022 BRAND NEW",
        "price": 285000,
        "category": "server enterprise dell",
        "badge": "elite",
        "img": "https://i.dell.com/is/image/DellContent/content/dam/images/products/servers/poweredge/r360/dell-per360-8x2-5-no-bezel-lf-31.psd?fmt=png-alpha&wid=1653"
    },
    {
        "id": "dell-t160-tower-elite",
        "brand": "Dell",
        "name": "Dell PowerEdge T160 Tower Server",
        "specs": "Intel Xeon E-2414 \u2022 16GB RAM \u2022 2TB HDD \u2022 Tower \u2022 3 Year Warranty \u2022 BRAND NEW",
        "price": 255000,
        "category": "server enterprise dell",
        "badge": "elite",
        "img": "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-enterprise-products/enterprise-systems/poweredge/t160/spi/poweredge-server-t160-black-cart-480-left.png"
    },
    {
        "id": "thinkpad-l14-gen5-elite",
        "brand": "Lenovo",
        "name": "ThinkPad L14 Gen 5",
        "specs": "Intel Core Ultra 5 \u2022 16GB RAM \u2022 512GB SSD \u2022 14\" WUXGA \u2022 3 Year Warranty \u2022 BRAND NEW",
        "price": 215000,
        "category": "business lenovo",
        "badge": "elite",
        "img": "https://p3-ofp.static.pub/fes/cms/2023/02/09/p9x68r6z9k4z9k4z9k4z9k4z9k4z9763529.png"
    },
    {
        "id": "latitude-3450-i7-elite",
        "brand": "Dell",
        "name": "Dell Latitude 3450 i7",
        "specs": "Intel Core i7-1355U \u2022 16GB RAM \u2022 512GB SSD \u2022 14\" FHD \u2022 3 Year Warranty \u2022 BRAND NEW",
        "price": 198000,
        "category": "business dell",
        "badge": "elite",
        "img": "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-computing/laptops/latitude/3450/media-gallery/laptop-latitude-3450-non-touch-plastic-gray-gallery-1.psd?fmt=png-alpha&wid=500"
    },
    {
        "id": "hp-840g7-i5-10th",
        "brand": "HP",
        "name": "HP EliteBook 840 G7 i5",
        "specs": "i5 10th Gen \u2022 8GB RAM \u2022 256GB SSD",
        "price": 33000,
        "category": "exuk business hp",
        "badge": "restocked",
        "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=HP+840+G7"
    },
    {
        "id": "lenovo-t480s-i5-8th-touch",
        "brand": "Lenovo",
        "name": "Lenovo ThinkPad T480s i5 Touch",
        "specs": "i5 8th Gen \u2022 8GB RAM \u2022 256GB SSD \u2022 Touchscreen",
        "price": 28500,
        "category": "exuk business lenovo",
        "badge": "restocked",
        "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+T480s+Touch"
    },
    {
        "id": "lenovo-t480s-i5-8th-nontouch",
        "brand": "Lenovo",
        "name": "Lenovo ThinkPad T480s i5 Non-Touch",
        "specs": "i5 8th Gen \u2022 8GB RAM \u2022 256GB SSD \u2022 Non-Touch",
        "price": 26500,
        "category": "exuk business lenovo",
        "badge": "restocked",
        "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+T480s+Non-Touch"
    },
    {
        "id": "lenovo-t480s-i5-7th-touch",
        "brand": "Lenovo",
        "name": "Lenovo ThinkPad T480s i5 7th Gen Touch",
        "specs": "i5 7th Gen \u2022 8GB RAM \u2022 256GB SSD \u2022 Touchscreen",
        "price": 24000,
        "category": "exuk business lenovo",
        "badge": "restocked",
        "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+T480s+i5+7th"
    },
    {
        "path_id": "lenovo-t480s-i7-8th-nontouch",
        "id": "lenovo-t480s-i7-8th-nontouch",
        "brand": "Lenovo",
        "name": "Lenovo ThinkPad T480s i7 Non-Touch",
        "specs": "i7 8th Gen \u2022 8GB RAM \u2022 256GB SSD \u2022 Non-Touch",
        "price": 29000,
        "category": "exuk business lenovo",
        "badge": "restocked",
        "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+T480s+i7"
    },
    {
        "id": "exuk-hp-0",
        "brand": "HP",
        "name": "HP 830 g8 i7 11th touch 16/512",
        "specs": "Ex-UK Premium Grade \u2022 HP Business Series",
        "price": 54000,
        "category": "exuk hp laptop",
        "badge": "exuk",
        "img": "https://images.weserv.nl/?url=https://www.hp.com/content/dam/sites/worldwide/homepage/images/EliteBook_840_G8.png&w=300&output=webp"
    },
    {
        "id": "exuk-lenovo-41",
        "brand": "Lenovo",
        "name": "Lenovo \ufe0fX1 Carbon i7 8th non 16/512",
        "specs": "Ex-UK Premium Grade \u2022 Lenovo Business Series",
        "price": 33000,
        "category": "exuk lenovo laptop",
        "badge": "exuk",
        "img": "https://images.weserv.nl/?url=https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MjY0MDUwfGltYWdlL3BuZ3xoYmYvaGEyLzExMDY4NzAzODUwMDE0LnBuZ3w3MmY1ZjY0MzA0M2Y0ZjM5ZjU0MjY0MzM0ZTU4MzRiNmY0ZjQzZjM5ZjU0MjY0MzM0ZTU4MzRiNmY0ZjQzZjM5/lenovo-laptop-thinkpad-x1-carbon-gen-9-14-subseries-hero.png&w=300&output=webp"
    }
];


let currentLimit = 24;
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

  currentLimit = 24;
  renderFiltered();
}

function loadMoreProducts() {
  currentLimit += 24;
  renderFiltered();
}

function renderFiltered() {
  const container = document.getElementById("productsGrid");
  if (!container) return;

  const displayList = currentProducts.slice(0, currentLimit);
  
  container.innerHTML = displayList.map(p => {
    const isFlash = p.onFlashSale || false;
    let priceHTML = `<div class="product-price">KES ${p.price.toLocaleString()}</div>`;
    let badgeHTML = `<div class="product-badge ${p.badge}">${p.badge}</div>`;
    
    return `
      <div class="product-card ${p.category}">
        <div class="product-img-container">
          <div class="product-img">
            <img src="${p.img}" alt="${p.name}" loading="lazy">
            ${badgeHTML}
            <div class="product-actions">
              <button class="action-btn" onclick="window.open('https://wa.me/254721585784?text=Hi%20Nexcom!%20I%20want%20to%20order%20the%20${p.name}', '_blank')">
                <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.766-5.764-5.766m3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.001.332.005c.109.004.258-.041.404.311.159.387.542 1.32.59 1.416s.079.21.014.339c-.065.129-.098.21-.195.324-.097.114-.204.256-.292.348-.107.113-.219.236-.095.449.124.214.55.908 1.185 1.472.818.729 1.505.955 1.719 1.062s.346.079.475-.069c.129-.148.556-.648.705-.871.149-.223.298-.187.502-.112s1.288.608 1.512.72c.224.112.374.168.43.264.056.096.056.556-.088.961m-3.392-11.244c-5.452 0-9.887 4.435-9.889 9.888-.002 2.028.513 4.003 1.49 5.772l-1.583 5.786 5.922-1.553a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
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

  const btn = document.getElementById('loadMoreBtn');
  if (btn) {
    btn.style.display = currentLimit >= currentProducts.length ? 'none' : 'block';
  }
}

function renderProducts(filter = "all", btn = null) {
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

  currentLimit = 24;
  renderFiltered();
}

function filterCategory(cat) {
  renderProducts(cat);
}

function setupDailySpecial() {
  const overlay = document.getElementById('promoOverlay');
  if (!overlay) return;

  const today = new Date();
  const dateSeed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  const p = ALL_PRODUCTS[dateSeed % ALL_PRODUCTS.length];

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
    if (waEl) waEl.href = `https://wa.me/254721585784?text=Hi%20Nexcom!%20I%20want%20to%20order%20the%20Special:%20${p.name}`;
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
