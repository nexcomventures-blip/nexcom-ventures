const ALL_PRODUCTS = [
{
  "id": "hp-elitebook-840-g10-brand-new",
  "brand": "HP",
  "name": "HP EliteBook 840 G10",
  "specs": "Intel Core i7-1355U \u2022 16GB RAM \u2022 512GB SSD \u2022 14\" WUXGA \u2022 BRAND NEW",
  "price": 224000,
  "category": "business hp featured",
  "badge": "new",
  "img": "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08483861.png"
},
{
  "id": "hp-zbook-firefly-g10-brand-new",
  "brand": "HP",
  "name": "HP ZBook Firefly G10",
  "specs": "Intel Core i7-1355U \u2022 16GB RAM \u2022 512GB SSD \u2022 NVIDIA RTX A500 4GB \u2022 14\" \u2022 BRAND NEW",
  "price": 235000,
  "category": "business hp featured",
  "badge": "new",
  "img": "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08483842.png"
},
  {
    "id": "feat-1",
    "brand": "Dell",
    "name": "Dell Xps 13 9320 I7 12Th 16/512Gb",
    "specs": "xps 13 9320 i7 12th 16/512gb",
    "price": 95000,
    "category": "exuk business dell featured",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+xps+13+9320+i7"
  },
  {
    "id": "feat-2",
    "brand": "Lenovo",
    "name": "Lenovo X1 Carbon I7 8Th 16/512Gb.",
    "specs": "x1 carbon i7 8th 16/512gb.",
    "price": 35000,
    "category": "exuk business lenovo featured",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x1+carbon+i7+8th"
  },
  {
    "id": "feat-3",
    "brand": "Lenovo",
    "name": "Lenovo X390 I5 8Th 8/256Gb",
    "specs": "x390 i5 8th 8/256gb",
    "price": 22000,
    "category": "exuk business lenovo featured",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x390+i5+8th+8/256gb"
  },
  {
    "id": "feat-4",
    "brand": "Apple",
    "name": "MacBook Pro 13 M2 (2022)",
    "specs": "Apple M2 Chip \u2022 8GB RAM \u2022 512GB SSD \u2022 Retina Display",
    "price": 140000,
    "category": "exuk apple macbook featured",
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
    "id": "exuk-hp840g6",
    "brand": "HP",
    "name": "HP EliteBook 840 G6 i5",
    "specs": "Intel Core i5 8th Gen \u2022 16GB RAM \u2022 256GB SSD \u2022 14\" FHD",
    "price": 36500,
    "category": "exuk business hp",
    "badge": "exuk",
    "img": "https://ssl-product-images.www8-hp.com/digfcpc/c08125553/front_900X900.png"
  },
  {
    "id": "exuk-dell5400",
    "brand": "Dell",
    "name": "Dell Latitude 5400 i5",
    "specs": "Intel Core i5 8th Gen \u2022 8GB RAM \u2022 256GB SSD \u2022 14\" FHD",
    "price": 24000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-5440-laptop/media-gallery/latitude-5440-laptop-gallery-1.psd?fmt=png-alpha&wid=1000"
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
    "id": "exuk-lenovo-x1yogai711th-60000",
    "brand": "Lenovo",
    "name": "Lenovo X1 Yoga I7 11Th 16/512Gb",
    "specs": "x1 yoga i7 11th 16/512gb",
    "price": 60000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x1+yoga+i7+11th"
  },
  {
    "id": "exuk-lenovo-x1yogai78th-40000",
    "brand": "Lenovo",
    "name": "Lenovo X1 Yoga I7 8Th 16/512Gb Grey Metal",
    "specs": "x1 yoga i7 8th 16/512gb grey metal",
    "price": 40000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x1+yoga+i7+8th"
  },
  {
    "id": "exuk-lenovo-x1yogai78th-35000",
    "brand": "Lenovo",
    "name": "Lenovo X1 Yoga I7 8Th 16/256Gb Grey Plastic",
    "specs": "x1 yoga i7 8th 16/256gb grey plastic",
    "price": 35000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x1+yoga+i7+8th"
  },
  {
    "id": "exuk-lenovo-x1yogai78th-30000",
    "brand": "Lenovo",
    "name": "Lenovo X1 Yoga I7 8Th 8/256Gb",
    "specs": "x1 yoga i7 8th 8/256gb",
    "price": 30000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x1+yoga+i7+8th"
  },
  {
    "id": "exuk-lenovo-x1yogai77th-26000",
    "brand": "Lenovo",
    "name": "Lenovo X1 Yoga I7 7Th 16/256Gb",
    "specs": "x1 yoga i7 7th 16/256gb",
    "price": 26000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x1+yoga+i7+7th"
  },
  {
    "id": "exuk-lenovo-thinkbook13sg2itl-50000",
    "brand": "Lenovo",
    "name": "Lenovo Thinkbook 13S G2 Itl I7 11Th 16/512 Touchscreen",
    "specs": "thinkbook 13s G2 ITL i7 11th 16/512 touchscreen",
    "price": 50000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+thinkbook+13s+G2+ITL"
  },
  {
    "id": "exuk-lenovo-x1carboni710th-45000",
    "brand": "Lenovo",
    "name": "Lenovo X1 Carbon I7 10Th 16/512Gb",
    "specs": "x1 carbon i7 10th 16/512gb",
    "price": 45000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x1+carbon+i7+10th"
  },
  {
    "id": "exuk-lenovo-x1carboni58th-32000",
    "brand": "Lenovo",
    "name": "Lenovo X1 Carbon I5 8Th 16/512Gb",
    "specs": "x1 carbon i5 8th 16/512gb",
    "price": 32000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x1+carbon+i5+8th"
  },
  {
    "id": "exuk-lenovo-x1carboni77th-27000",
    "brand": "Lenovo",
    "name": "Lenovo X1 Carbon I7 7Th. 16/256Gb",
    "specs": "x1 carbon i7 7th. 16/256gb",
    "price": 27000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x1+carbon+i7+7th."
  },
  {
    "id": "exuk-lenovo-p50i76th16512gb-35000",
    "brand": "Lenovo",
    "name": "Lenovo P50 I7 6Th 16/512Gb With 4Gb Nvidia",
    "specs": "p50 i7 6th 16/512gb with 4gb nvidia",
    "price": 35000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+p50+i7+6th+16/512gb"
  },
  {
    "id": "exuk-lenovo-p51si77th16512gb-35000",
    "brand": "Lenovo",
    "name": "Lenovo P51S I7 7Th 16/512Gb 2Gb Graphics",
    "specs": "p51s i7 7th 16/512gb 2gb graphics",
    "price": 35000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+p51s+i7+7th+16/512gb"
  },
  {
    "id": "exuk-lenovo-t15i710th16512gb-45000",
    "brand": "Lenovo",
    "name": "Lenovo T15 I7 10Th 16/512Gb 2Gb Graphics",
    "specs": "t15 i7 10th 16/512gb 2gb graphics",
    "price": 45000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+t15+i7+10th+16/512gb"
  },
  {
    "id": "exuk-lenovo-t490si78th16512gb-35000",
    "brand": "Lenovo",
    "name": "Lenovo T490S I7 8Th 16/512Gb Touchscreen",
    "specs": "t490s i7 8th 16/512gb touchscreen",
    "price": 35000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+t490s+i7+8th+16/512gb"
  },
  {
    "id": "exuk-lenovo-t490si58th8256gb-25000",
    "brand": "Lenovo",
    "name": "Lenovo T490S I5 8Th 8/256Gb",
    "specs": "t490s i5 8th 8/256gb",
    "price": 25000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+t490s+i5+8th+8/256gb"
  },
  {
    "id": "exuk-lenovo-t490si58th16256gb-27000",
    "brand": "Lenovo",
    "name": "Lenovo T490S I5 8Th 16/256Gb Touchscreen",
    "specs": "t490s i5 8th 16/256gb touchscreen",
    "price": 27000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+t490s+i5+8th+16/256gb"
  },
  {
    "id": "exuk-lenovo-t480si58th8256gb-23000",
    "brand": "Lenovo",
    "name": "Lenovo T480S I5 8Th 8/256Gb",
    "specs": "t480s i5 8th 8/256gb",
    "price": 23000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+t480s+i5+8th+8/256gb"
  },
  {
    "id": "exuk-lenovo-x390i78th1625gb-26000",
    "brand": "Lenovo",
    "name": "Lenovo X390 I7 8Th 16/25Gb",
    "specs": "x390 i7 8th 16/25gb",
    "price": 26000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x390+i7+8th+16/25gb"
  },
  {
    "id": "exuk-lenovo-yoga390i58th-25000",
    "brand": "Lenovo",
    "name": "Lenovo Yoga 390 I5 8Th 8/256Gb",
    "specs": "yoga 390 i5 8th 8/256gb",
    "price": 25000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+yoga+390+i5+8th"
  },
  {
    "id": "exuk-lenovo-x390i516256gb-24000",
    "brand": "Lenovo",
    "name": "Lenovo X390 I5 16/256Gb",
    "specs": "x390 i5 16/256gb",
    "price": 24000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x390+i5+16/256gb"
  },
  {
    "id": "exuk-lenovo-yoga380i78th-26000",
    "brand": "Lenovo",
    "name": "Lenovo Yoga 380 I7 8Th 8/256Gb",
    "specs": "yoga 380 i7 8th 8/256gb",
    "price": 26000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+yoga+380+i7+8th"
  },
  {
    "id": "exuk-lenovo-yoga380i58th-25000",
    "brand": "Lenovo",
    "name": "Lenovo Yoga 380 I5 8Th 8/256Gb",
    "specs": "yoga 380 i5 8th 8/256gb",
    "price": 25000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+yoga+380+i5+8th"
  },
  {
    "id": "exuk-lenovo-t14i710th8256-30000",
    "brand": "Lenovo",
    "name": "Lenovo T14 I7 10Th 8/256",
    "specs": "T14 i7 10th 8/256",
    "price": 30000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+T14+i7+10th+8/256"
  },
  {
    "id": "exuk-lenovo-x13i710th16512-35000",
    "brand": "Lenovo",
    "name": "Lenovo X13 I7 10Th 16/512 Touchscreen",
    "specs": "X13 i7 10th 16/512 touchscreen",
    "price": 35000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+X13+i7+10th+16/512"
  },
  {
    "id": "exuk-lenovo-x13i710th16512gb-32000",
    "brand": "Lenovo",
    "name": "Lenovo X13 I7 10Th 16/512Gb",
    "specs": "x13 i7 10th 16/512gb",
    "price": 32000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x13+i7+10th+16/512gb"
  },
  {
    "id": "exuk-lenovo-x280i57th8256gb-20000",
    "brand": "Lenovo",
    "name": "Lenovo X280 I5 7Th 8/256Gb",
    "specs": "x280 i5 7th 8/256gb",
    "price": 20000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x280+i5+7th+8/256gb"
  },
  {
    "id": "exuk-lenovo-x280i58th8256gb-21000",
    "brand": "Lenovo",
    "name": "Lenovo X280 I5 8Th 8/256Gb",
    "specs": "x280 i5 8th 8/256gb",
    "price": 21000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x280+i5+8th+8/256gb"
  },
  {
    "id": "exuk-lenovo-x280i58th16256gb-22000",
    "brand": "Lenovo",
    "name": "Lenovo X280 I5 8Th 16/256Gb",
    "specs": "x280 i5 8th 16/256gb",
    "price": 22000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x280+i5+8th+16/256gb"
  },
  {
    "id": "exuk-lenovo-x270i56th8256gb-16000",
    "brand": "Lenovo",
    "name": "Lenovo X270 I5 6Th 8/256Gb",
    "specs": "x270 i5 6th 8/256gb",
    "price": 16000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x270+i5+6th+8/256gb"
  },
  {
    "id": "exuk-lenovo-x260i76th8256gb-17000",
    "brand": "Lenovo",
    "name": "Lenovo X260 I7 6Th 8/256Gb",
    "specs": "x260 i7 6th 8/256gb",
    "price": 17000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x260+i7+6th+8/256gb"
  },
  {
    "id": "exuk-lenovo-x250i75th8256gb-16000",
    "brand": "Lenovo",
    "name": "Lenovo X250 I7 5Th 8/256Gb",
    "specs": "x250 i7 5th 8/256gb",
    "price": 16000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x250+i7+5th+8/256gb"
  },
  {
    "id": "exuk-lenovo-t470si57th8256gb-21000",
    "brand": "Lenovo",
    "name": "Lenovo T470S I5 7Th 8/256Gb Touchscreen",
    "specs": "t470s i5 7th 8/256gb touchscreen",
    "price": 21000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+t470s+i5+7th+8/256gb"
  },
  {
    "id": "exuk-lenovo-t470si57th8256gb-19500",
    "brand": "Lenovo",
    "name": "Lenovo T470S I5 7Th 8/256Gb",
    "specs": "t470s i5 7th 8/256gb",
    "price": 19500,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+t470s+i5+7th+8/256gb"
  },
  {
    "id": "exuk-lenovo-t470si56th8256gb-18500",
    "brand": "Lenovo",
    "name": "Lenovo T470S I5 6Th 8/256Gb",
    "specs": "t470s i5 6th 8/256gb",
    "price": 18500,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+t470s+i5+6th+8/256gb"
  },
  {
    "id": "exuk-lenovo-t470si77th8256gb-22000",
    "brand": "Lenovo",
    "name": "Lenovo T470S I7 7Th 8/256Gb Touchscreen",
    "specs": "t470s i7 7th 8/256gb touchscreen",
    "price": 22000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+t470s+i7+7th+8/256gb"
  },
  {
    "id": "exuk-lenovo-t470si76th8256gb-20000",
    "brand": "Lenovo",
    "name": "Lenovo T470S I7 6Th 8/256Gb",
    "specs": "t470s i7 6th 8/256gb",
    "price": 20000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+t470s+i7+6th+8/256gb"
  },
  {
    "id": "exuk-lenovo-t460si56th8256gb-18000",
    "brand": "Lenovo",
    "name": "Lenovo T460S I5 6Th 8/256Gb Touchscreen",
    "specs": "t460s i5 6th 8/256gb touchscreen",
    "price": 18000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+t460s+i5+6th+8/256gb"
  },
  {
    "id": "exuk-lenovo-t460si56th8256gb-17000",
    "brand": "Lenovo",
    "name": "Lenovo T460S I5 6Th 8/256Gb",
    "specs": "t460s i5 6th 8/256gb",
    "price": 17000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+t460s+i5+6th+8/256gb"
  },
  {
    "id": "exuk-lenovo-t460si76th8256gb-19000",
    "brand": "Lenovo",
    "name": "Lenovo T460S I7 6Th 8/256Gb",
    "specs": "t460s i7 6th 8/256gb",
    "price": 19000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+t460s+i7+6th+8/256gb"
  },
  {
    "id": "exuk-lenovo-yogan23scel4128gb-12000",
    "brand": "Lenovo",
    "name": "Lenovo Yoga N23S Cel 4/128Gb",
    "specs": "yoga n23s cel 4/128gb",
    "price": 12000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+yoga+n23s+cel+4/128gb"
  },
  {
    "id": "exuk-lenovo-11e4128gb-10000",
    "brand": "Lenovo",
    "name": "Lenovo 11E 4/128Gb",
    "specs": "11e 4/128gb",
    "price": 10000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+11e+4/128gb"
  },
  {
    "id": "exuk-lenovo-11ecorem58128gb-13000",
    "brand": "Lenovo",
    "name": "Lenovo 11E Core M5 8/128Gb",
    "specs": "11e core m5 8/128gb",
    "price": 13000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+11e+core+m5+8/128gb"
  },
  {
    "id": "exuk-lenovo-yoga11e4128gbtouchscreen-13000",
    "brand": "Lenovo",
    "name": "Lenovo Yoga 11E 4/128Gb Touchscreen",
    "specs": "yoga 11e 4/128gb touchscreen",
    "price": 13000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+yoga+11e+4/128gb+touchscreen"
  },
  {
    "id": "exuk-dell-precision3561i711th-55000",
    "brand": "Dell",
    "name": "Dell Precision 3561 I7 11Th 16/512Gb With 4Gb Nvidia Graphics",
    "specs": "precision 3561 i7 11th 16/512gb with 4gb nvidia graphics",
    "price": 55000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+precision+3561+i7+11th"
  },
  {
    "id": "exuk-dell-precision5550i710th-70000",
    "brand": "Dell",
    "name": "Dell Precision 5550 I7 10Th 16/512Gb With 4Gb Nvidia T1000 Graphics",
    "specs": "precision 5550 i7 10th 16/512gb with 4gb nvidia T1000 graphics",
    "price": 70000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+precision+5550+i7+10th"
  },
  {
    "id": "exuk-dell-precision5540i99th-60000",
    "brand": "Dell",
    "name": "Dell Precision 5540 I9 9Th 16/512Gb With 4Gb T2000 Nvidia Graphics",
    "specs": "precision 5540 i9 9th 16/512gb with 4gb T2000 nvidia graphics",
    "price": 60000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+precision+5540+i9+9th"
  },
  {
    "id": "exuk-dell-precision5540xeon16512gb-55000",
    "brand": "Dell",
    "name": "Dell Precision 5540 Xeon 16/512Gb With 4Gb Nvidia Graphics",
    "specs": "precision 5540 xeon 16/512gb with 4gb nvidia graphics",
    "price": 55000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+precision+5540+xeon+16/512gb"
  },
  {
    "id": "exuk-dell-precision5540i79th-55000",
    "brand": "Dell",
    "name": "Dell Precision 5540 I7 9Th 16/512Gb With 4Gb Nvidia Graphics",
    "specs": "precision 5540 i7 9th 16/512gb with 4gb nvidia graphics",
    "price": 55000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+precision+5540+i7+9th"
  },
  {
    "id": "exuk-dell-precision5530i78th-50000",
    "brand": "Dell",
    "name": "Dell Precision 5530 I7 8Th 16/512Gb With 4Gb Nvidia Graphics Ksh",
    "specs": "precision 5530 i7 8th 16/512gb with 4gb nvidia graphics ksh",
    "price": 50000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+precision+5530+i7+8th"
  },
  {
    "id": "exuk-dell-xps159570i7-50000",
    "brand": "Dell",
    "name": "Dell Xps 15 9570 I7 8Th 16/512Gb 4Gb Graphics",
    "specs": "xps 15 9570 i7 8th 16/512gb 4gb Graphics",
    "price": 50000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+xps+15+9570+i7"
  },
  {
    "id": "exuk-dell-inspiron15x360i7-45000",
    "brand": "Dell",
    "name": "Dell Inspiron 15 X360 I7 8Th 16/512Gb With 2Gb Nvidia Graphics",
    "specs": "inspiron 15 x360 i7 8th 16/512gb with 2gb nvidia graphics",
    "price": 45000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+inspiron+15+x360+i7"
  },
  {
    "id": "exuk-dell-inspiron7375ryzen7-30000",
    "brand": "Dell",
    "name": "Dell Inspiron 7375 Ryzen 7 8/256Gb X360 Touchscreen",
    "specs": "inspiron 7375 ryzen 7 8/256gb x360 touchscreen",
    "price": 30000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+inspiron+7375+ryzen+7"
  },
  {
    "id": "exuk-dell-inspironryzen58256gb-26000",
    "brand": "Dell",
    "name": "Dell Inspiron Ryzen 5 8/256Gb X360 Touchscreen",
    "specs": "inspiron ryzen 5 8/256gb x360 touchscreen",
    "price": 26000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+inspiron+ryzen+5+8/256gb"
  },
  {
    "id": "exuk-dell-latitude9420i711th-55000",
    "brand": "Dell",
    "name": "Dell Latitude 9420 I7 11Th 16/512Gb.",
    "specs": "latitude 9420 i7 11th 16/512gb.",
    "price": 55000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+latitude+9420+i7+11th"
  },
  {
    "id": "exuk-dell-xps139330i7-110000",
    "brand": "Dell",
    "name": "Dell Xps 13 9330 I7 16/512Gb",
    "specs": "xps 13 9330 i7 16/512gb",
    "price": 110000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+xps+13+9330+i7"
  },
  {
    "id": "exuk-dell-xps139310i7-65000",
    "brand": "Dell",
    "name": "Dell Xps 13 9310 I7 11Th 16/512Gb",
    "specs": "xps 13 9310 i7 11th 16/512gb",
    "price": 65000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+xps+13+9310+i7"
  },
  {
    "id": "exuk-dell-xps139305i7-60000",
    "brand": "Dell",
    "name": "Dell Xps 13 9305 I7 11Th 16/512Gb",
    "specs": "xps 13 9305 i7 11th 16/512gb",
    "price": 60000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+xps+13+9305+i7"
  },
  {
    "id": "exuk-dell-delxps137390-50000",
    "brand": "Dell",
    "name": "Dell Del Xps 13 7390 I7 10Th 16/512Gb",
    "specs": "del xps 13 7390 i7 10th 16/512gb",
    "price": 50000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+del+xps+13+7390"
  },
  {
    "id": "exuk-dell-xps139380i7-40000",
    "brand": "Dell",
    "name": "Dell Xps 13 9380 I7 16/512Gb",
    "specs": "xps 13 9380 i7 16/512gb",
    "price": 40000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+xps+13+9380+i7"
  },
  {
    "id": "exuk-dell-latitude52902in1i5-25000",
    "brand": "Dell",
    "name": "Dell Latitude 5290 2In1 I5 8Th 8/256 Detachable",
    "specs": "latitude 5290 2in1 i5 8th 8/256 detachable",
    "price": 25000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+latitude+5290+2in1+i5"
  },
  {
    "id": "exuk-dell-latitude94102in1i7-45000",
    "brand": "Dell",
    "name": "Dell Latitude 9410 2In1 I7 10Th 16/512",
    "specs": "latitude 9410 2in1 i7 10th 16/512",
    "price": 45000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+latitude+9410+2in1+i7"
  },
  {
    "id": "exuk-dell-7400i78th16512gb-40000",
    "brand": "Dell",
    "name": "Dell 7400 I7 8Th 16/512Gb X360 Touchscreen",
    "specs": "7400 i7 8th 16/512gb x360 touchscreen",
    "price": 40000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+7400+i7+8th+16/512gb"
  },
  {
    "id": "exuk-dell-5320i711th16512gb-40000",
    "brand": "Dell",
    "name": "Dell 5320 I7 11Th 16/512Gb Touchscreen",
    "specs": "5320 i7 11th 16/512gb touchscreen",
    "price": 40000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+5320+i7+11th+16/512gb"
  },
  {
    "id": "exuk-dell-5320i511th8256gb-25000",
    "brand": "Dell",
    "name": "Dell 5320 I5 11Th 8/256Gb",
    "specs": "5320 i5 11th 8/256gb",
    "price": 25000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+5320+i5+11th+8/256gb"
  },
  {
    "id": "exuk-dell-7390i58th8256gb-25000",
    "brand": "Dell",
    "name": "Dell 7390 I5 8Th. 8/256Gb X360 Touchscreen",
    "specs": "7390 i5 8th. 8/256gb x360 touchscreen",
    "price": 25000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+7390+i5+8th.+8/256gb"
  },
  {
    "id": "exuk-dell-latitude5300i58th-22000",
    "brand": "Dell",
    "name": "Dell Latitude 5300 I5 8Th 8/256 Touchscreen",
    "specs": "latitude 5300 i5 8th 8/256 touchscreen",
    "price": 22000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+latitude+5300+i5+8th"
  },
  {
    "id": "exuk-dell-5300i58th8256gb-20000",
    "brand": "Dell",
    "name": "Dell 5300 I5 8Th 8/256Gb",
    "specs": "5300 i5 8th 8/256gb",
    "price": 20000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+5300+i5+8th+8/256gb"
  },
  {
    "id": "exuk-dell-5300i78th8256-25000",
    "brand": "Dell",
    "name": "Dell 5300 I7 8Th 8/256",
    "specs": "5300 i7 8th 8/256",
    "price": 25000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+5300+i7+8th+8/256"
  },
  {
    "id": "exuk-dell-7300i58th8256gb-18000",
    "brand": "Dell",
    "name": "Dell 7300 I5 8Th 8/256Gb",
    "specs": "7300 i5 8th 8/256gb",
    "price": 18000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+7300+i5+8th+8/256gb"
  },
  {
    "id": "exuk-dell-7250i75th8256gb-14000",
    "brand": "Dell",
    "name": "Dell 7250 I7 5Th 8/256Gb",
    "specs": "7250 i7 5th 8/256gb",
    "price": 14000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+7250+i7+5th+8/256gb"
  },
  {
    "id": "exuk-dell-acerlaptopacertravelmate-13000",
    "brand": "Dell",
    "name": "Dell Acer Laptop Acer Travelmate 4/128Gb X360 Touchscreen",
    "specs": "Acer laptop acer travelmate 4/128gb x360 touchscreen",
    "price": 13000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+Acer+laptop+acer+travelmate"
  },
  {
    "id": "exuk-lenovo-lenovox1yoga-60000",
    "brand": "Lenovo",
    "name": "Lenovo X1 Yoga",
    "specs": "x1 yoga i7 11th 16/512gb",
    "price": 60000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+Yoga"
  },
  {
    "id": "exuk-lenovo-lenovox1yoga-40000",
    "brand": "Lenovo",
    "name": "Lenovo X1 Yoga",
    "specs": "x1 yoga i7 8th 16/512gb",
    "price": 40000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+Yoga"
  },
  {
    "id": "exuk-lenovo-lenovox1yoga-35000",
    "brand": "Lenovo",
    "name": "Lenovo X1 Yoga",
    "specs": "x1 yoga i7 8th 16/256gb",
    "price": 35000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+Yoga"
  },
  {
    "id": "exuk-lenovo-lenovox1carbo-35000",
    "brand": "Lenovo",
    "name": "Lenovo X1 Carbon",
    "specs": "x1 carbon i7 8th",
    "price": 35000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+Carbon"
  },
  {
    "id": "exuk-lenovo-lenovop50-35000",
    "brand": "Lenovo",
    "name": "Lenovo P50",
    "specs": "p50 i7 6th 16/512gb",
    "price": 35000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+P50"
  },
  {
    "id": "exuk-lenovo-lenovop51s-35000",
    "brand": "Lenovo",
    "name": "Lenovo P51S",
    "specs": "p51s i7 7th 16/512gb",
    "price": 35000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+P51S"
  },
  {
    "id": "exuk-lenovo-lenovot15-45000",
    "brand": "Lenovo",
    "name": "Lenovo T15",
    "specs": "t15 i7 10th 16/512gb",
    "price": 45000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+T15"
  },
  {
    "id": "exuk-lenovo-lenovot490s-35000",
    "brand": "Lenovo",
    "name": "Lenovo T490S",
    "specs": "t490s i7 8th 16/512gb",
    "price": 35000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+T490S"
  },
  {
    "id": "exuk-lenovo-lenovot490s-27000",
    "brand": "Lenovo",
    "name": "Lenovo T490S",
    "specs": "t490s i5 8th 16/256gb",
    "price": 27000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+T490S"
  },
  {
    "id": "exuk-lenovo-lenovoyoga390-25000",
    "brand": "Lenovo",
    "name": "Lenovo Yoga 390",
    "specs": "yoga 390 i5 8th",
    "price": 25000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+390"
  },
  {
    "id": "exuk-lenovo-lenovox13-35000",
    "brand": "Lenovo",
    "name": "Lenovo X13",
    "specs": "X13 i7 10th 16/512",
    "price": 35000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+X13"
  },
  {
    "id": "exuk-lenovo-lenovot470s-21000",
    "brand": "Lenovo",
    "name": "Lenovo T470S",
    "specs": "t470s i5 7th 8/256gb",
    "price": 21000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+T470S"
  },
  {
    "id": "exuk-lenovo-lenovot470s-22000",
    "brand": "Lenovo",
    "name": "Lenovo T470S",
    "specs": "t470s i7 7th 8/256gb",
    "price": 22000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+T470S"
  },
  {
    "id": "exuk-lenovo-lenovot460s-18000",
    "brand": "Lenovo",
    "name": "Lenovo T460S",
    "specs": "t460s i5 6th 8/256gb",
    "price": 18000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+T460S"
  },
  {
    "id": "exuk-lenovo-lenovoyoga11e-13000",
    "brand": "Lenovo",
    "name": "Lenovo Yoga 11E 4/128Gb",
    "specs": "yoga 11e 4/128gb",
    "price": 13000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+4/128Gb"
  },
  {
    "id": "exuk-dell-dellxps15957-50000",
    "brand": "Dell",
    "name": "Dell Xps 15 9570",
    "specs": "xps 15 9570 i7 8th 16/512gb",
    "price": 50000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+9570"
  },
  {
    "id": "exuk-dell-dell8256gbx3-30000",
    "brand": "Dell",
    "name": "Dell 8/256Gb X360",
    "specs": "8/256gb x360",
    "price": 30000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+X360"
  },
  {
    "id": "exuk-dell-dellinspiron-26000",
    "brand": "Dell",
    "name": "Dell Inspiron",
    "specs": "inspiron ryzen 5 8/256gb",
    "price": 26000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+Inspiron"
  },
  {
    "id": "exuk-dell-dellxps13930-60000",
    "brand": "Dell",
    "name": "Dell Xps 13 9305",
    "specs": "xps 13 9305 i7 11th",
    "price": 60000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+9305"
  },
  {
    "id": "exuk-dell-dell7400-40000",
    "brand": "Dell",
    "name": "Dell 7400",
    "specs": "7400 i7 8th 16/512gb",
    "price": 40000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+7400"
  },
  {
    "id": "exuk-dell-dell5320-40000",
    "brand": "Dell",
    "name": "Dell 5320",
    "specs": "5320 i7 11th 16/512gb",
    "price": 40000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+5320"
  },
  {
    "id": "exuk-dell-dell7390-25000",
    "brand": "Dell",
    "name": "Dell 7390",
    "specs": "7390 i5 8th. 8/256gb",
    "price": 25000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+7390"
  },
  {
    "id": "exuk-dell-delllatitude5-22000",
    "brand": "Dell",
    "name": "Dell Latitude 5300",
    "specs": "latitude 5300 i5 8th 8/256",
    "price": 22000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+5300"
  },
  {
    "id": "exuk-acer-acertravelmate-13000",
    "brand": "Acer",
    "name": "Acer Travelmate 4/128Gb",
    "specs": "travelmate 4/128gb",
    "price": 13000,
    "category": "exuk business acer",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Acer+4/128Gb"
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
