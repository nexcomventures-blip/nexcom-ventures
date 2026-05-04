const ALL_PRODUCTS = [{
    id: "featured-dell-xps-9330",
    brand: "Dell",
    name: "Dell XPS 13 9330",
    specs: "Intel Core i7 13th Gen • 16GB RAM • 512GB SSD • InfinityEdge",
    price: 135000,
    category: "exuk business featured dell",
    badge: "new",
    img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9340/media-gallery/laptop-xps-13-9340-platinum-gallery-1.psd?fmt=png-alpha&wid=1000"
  },
{
    id: "featured-dell-xps-9320",
    brand: "Dell",
    name: "Dell XPS 13 Plus 9320",
    specs: "Intel Core i7 12th Gen • 16GB RAM • 512GB SSD • OLED Touch",
    price: 110000,
    category: "exuk business featured dell",
    badge: "hot",
    img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9320/media-gallery/laptop-xps-9320-t-silver-gallery-1.psd?fmt=png-alpha&wid=1000"
  },
{
    id: "featured-lenovo-x1-g10",
    brand: "Lenovo",
    name: "ThinkPad X1 Carbon Gen 10",
    specs: "Intel Core i7 12th Gen • 16GB RAM • 512GB SSD • 14\" Touch",
    price: 91000,
    category: "exuk business featured lenovo",
    badge: "hot",
    img: "https://p2-ofp.static.pub/fes/cms/2022/03/18/v7l068r6z9k4z9k4z9k4z9k4z9k4z9763529.png"
  },
{
    id: "featured-dell-xps-9310",
    brand: "Dell",
    name: "Dell XPS 13 9310",
    specs: "Intel Core i7 11th Gen • 16GB RAM • 512GB SSD • FHD+ Touch",
    price: 85000,
    category: "exuk business featured dell",
    badge: "exuk",
    img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9310/media-gallery/laptop-xps-13-9310-silver-gallery-1.psd?fmt=png-alpha&wid=1000"
  },
{
    id: "featured-hp840g8-i7",
    brand: "HP",
    name: "HP EliteBook 840 G8 i7",
    specs: "Intel Core i7 11th Gen • 16GB RAM • 512GB SSD • 14\" FHD",
    price: 63000,
    category: "exuk business featured hp",
    badge: "hot",
    img: "https://www.hp.com/ca-en/shop/Html/Merch/Images/c07010411_1750x1285.jpg"
  },
{
    id: "featured-dell-xps-7390",
    brand: "Dell",
    name: "Dell XPS 13 7390",
    specs: "Intel Core i7 10th Gen • 16GB RAM • 512GB SSD • 13.3\" FHD",
    price: 49500,
    category: "exuk business featured dell",
    badge: "exuk",
    img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9315/media-gallery/laptop-xps-13-9315-silver-gallery-1.psd?fmt=png-alpha&wid=1000"
  },
{
    id: "lenovo-t490",
    brand: "Lenovo",
    name: "ThinkPad T490",
    specs: "i5 8th Gen • 16GB RAM • 512GB SSD",
    price: 49500,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8OTM3NjB8aW1hZ2UvcG5nfGg0Zi9oMmIvMTEwNjE1NzA2NTA2NTQucG5nfDY0ZGUyNTVmZmI1YzI5ZDY4ZDMwYmI0NmIxZDI1Zjk0ZDA0YjRkZGIzYjYyMDllNDNiZDFmZTc3YjcyYWRmMDM/lenovo-laptop-thinkbook-14-gen-2-intel-hero.png"
  },
{
    id: "lenovo-x280",
    brand: "Lenovo",
    name: "ThinkPad X280 i5",
    specs: "i5 8th Gen • 8GB RAM • 256GB SSD",
    price: 29500,
    category: "exuk business lenovo",
    badge: "hot",
    img: "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8OTM3NjB8aW1hZ2UvcG5nfGg0Zi9oMmIvMTEwNjE1NzA2NTA2NTQucG5nfDY0ZGUyNTVmZmI1YzI5ZDY4ZDMwYmI0NmIxZDI1Zjk0ZDA0YjRkZGIzYjYyMDllNDNiZDFmZTc3YjcyYWRmMDM/lenovo-laptop-thinkbook-14-gen-2-intel-hero.png"
  },
{
    id: "exuk-hp840g6",
    brand: "HP",
    name: "HP EliteBook 840 G6 i5",
    specs: "Intel Core i5 8th Gen • 16GB RAM • 256GB SSD • 14\" FHD",
    price: 36500,
    category: "exuk business hp",
    badge: "exuk",
    img: "https://ssl-product-images.www8-hp.com/digfcpc/c08125553/front_900X900.png"
  },
{
    id: "exuk-dell5400",
    brand: "Dell",
    name: "Dell Latitude 5400 i5",
    specs: "Intel Core i5 8th Gen • 8GB RAM • 256GB SSD • 14\" FHD",
    price: 24000,
    category: "exuk business dell",
    badge: "exuk",
    img: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-5440-laptop/media-gallery/latitude-5440-laptop-gallery-1.psd?fmt=png-alpha&wid=1000"
  },
{
    id: "exuk-lenovo-x1yogai711th-60000",
    brand: "Lenovo",
    name: "Lenovo X1 Yoga I7 11Th 16/512Gb",
    specs: "x1 yoga i7 11th 16/512gb",
    price: 60000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x1+yoga+i7+11th"
  },
{
    id: "exuk-lenovo-x1yogai78th-40000",
    brand: "Lenovo",
    name: "Lenovo X1 Yoga I7 8Th 16/512Gb Grey Metal",
    specs: "x1 yoga i7 8th 16/512gb grey metal",
    price: 40000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x1+yoga+i7+8th"
  },
{
    id: "exuk-lenovo-x1yogai78th-35000",
    brand: "Lenovo",
    name: "Lenovo X1 Yoga I7 8Th 16/256Gb Grey Plastic",
    specs: "x1 yoga i7 8th 16/256gb grey plastic",
    price: 35000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x1+yoga+i7+8th"
  },
{
    id: "exuk-lenovo-x1yogai78th-30000",
    brand: "Lenovo",
    name: "Lenovo X1 Yoga I7 8Th 8/256Gb",
    specs: "x1 yoga i7 8th 8/256gb",
    price: 30000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x1+yoga+i7+8th"
  },
{
    id: "exuk-lenovo-x1yogai77th-26000",
    brand: "Lenovo",
    name: "Lenovo X1 Yoga I7 7Th 16/256Gb",
    specs: "x1 yoga i7 7th 16/256gb",
    price: 26000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x1+yoga+i7+7th"
  },
{
    id: "exuk-lenovo-thinkbook13sg2itl-50000",
    brand: "Lenovo",
    name: "Lenovo Thinkbook 13S G2 Itl I7 11Th 16/512 Touchscreen",
    specs: "thinkbook 13s G2 ITL i7 11th 16/512 touchscreen",
    price: 50000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+thinkbook+13s+G2+ITL"
  },
{
    id: "exuk-lenovo-x1carboni710th-45000",
    brand: "Lenovo",
    name: "Lenovo X1 Carbon I7 10Th 16/512Gb",
    specs: "x1 carbon i7 10th 16/512gb",
    price: 45000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x1+carbon+i7+10th"
  },
{
    id: "exuk-lenovo-x1carboni78th-35000",
    brand: "Lenovo",
    name: "Lenovo X1 Carbon I7 8Th 16/512Gb.",
    specs: "x1 carbon i7 8th 16/512gb.",
    price: 35000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x1+carbon+i7+8th"
  },
{
    id: "exuk-lenovo-x1carboni58th-32000",
    brand: "Lenovo",
    name: "Lenovo X1 Carbon I5 8Th 16/512Gb",
    specs: "x1 carbon i5 8th 16/512gb",
    price: 32000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x1+carbon+i5+8th"
  },
{
    id: "exuk-lenovo-x1carboni77th-27000",
    brand: "Lenovo",
    name: "Lenovo X1 Carbon I7 7Th. 16/256Gb",
    specs: "x1 carbon i7 7th. 16/256gb",
    price: 27000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x1+carbon+i7+7th."
  },
{
    id: "exuk-lenovo-p50i76th16512gb-35000",
    brand: "Lenovo",
    name: "Lenovo P50 I7 6Th 16/512Gb With 4Gb Nvidia",
    specs: "p50 i7 6th 16/512gb with 4gb nvidia",
    price: 35000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+p50+i7+6th+16/512gb"
  },
{
    id: "exuk-lenovo-p51si77th16512gb-35000",
    brand: "Lenovo",
    name: "Lenovo P51S I7 7Th 16/512Gb 2Gb Graphics",
    specs: "p51s i7 7th 16/512gb 2gb graphics",
    price: 35000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+p51s+i7+7th+16/512gb"
  },
{
    id: "exuk-lenovo-t15i710th16512gb-45000",
    brand: "Lenovo",
    name: "Lenovo T15 I7 10Th 16/512Gb 2Gb Graphics",
    specs: "t15 i7 10th 16/512gb 2gb graphics",
    price: 45000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+t15+i7+10th+16/512gb"
  },
{
    id: "exuk-lenovo-t490si78th16512gb-35000",
    brand: "Lenovo",
    name: "Lenovo T490S I7 8Th 16/512Gb Touchscreen",
    specs: "t490s i7 8th 16/512gb touchscreen",
    price: 35000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+t490s+i7+8th+16/512gb"
  },
{
    id: "exuk-lenovo-t490si58th8256gb-25000",
    brand: "Lenovo",
    name: "Lenovo T490S I5 8Th 8/256Gb",
    specs: "t490s i5 8th 8/256gb",
    price: 25000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+t490s+i5+8th+8/256gb"
  },
{
    id: "exuk-lenovo-t490si58th16256gb-27000",
    brand: "Lenovo",
    name: "Lenovo T490S I5 8Th 16/256Gb Touchscreen",
    specs: "t490s i5 8th 16/256gb touchscreen",
    price: 27000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+t490s+i5+8th+16/256gb"
  },
{
    id: "exuk-lenovo-t480si58th8256gb-23000",
    brand: "Lenovo",
    name: "Lenovo T480S I5 8Th 8/256Gb",
    specs: "t480s i5 8th 8/256gb",
    price: 23000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+t480s+i5+8th+8/256gb"
  },
{
    id: "exuk-lenovo-x390i78th1625gb-26000",
    brand: "Lenovo",
    name: "Lenovo X390 I7 8Th 16/25Gb",
    specs: "x390 i7 8th 16/25gb",
    price: 26000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x390+i7+8th+16/25gb"
  },
{
    id: "exuk-lenovo-yoga390i58th-25000",
    brand: "Lenovo",
    name: "Lenovo Yoga 390 I5 8Th 8/256Gb",
    specs: "yoga 390 i5 8th 8/256gb",
    price: 25000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+yoga+390+i5+8th"
  },
{
    id: "exuk-lenovo-x390i516256gb-24000",
    brand: "Lenovo",
    name: "Lenovo X390 I5 16/256Gb",
    specs: "x390 i5 16/256gb",
    price: 24000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x390+i5+16/256gb"
  },
{
    id: "exuk-lenovo-x390i58th8256gb-22000",
    brand: "Lenovo",
    name: "Lenovo X390 I5 8Th 8/256Gb",
    specs: "x390 i5 8th 8/256gb",
    price: 22000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x390+i5+8th+8/256gb"
  },
{
    id: "exuk-lenovo-yoga380i78th-26000",
    brand: "Lenovo",
    name: "Lenovo Yoga 380 I7 8Th 8/256Gb",
    specs: "yoga 380 i7 8th 8/256gb",
    price: 26000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+yoga+380+i7+8th"
  },
{
    id: "exuk-lenovo-yoga380i58th-25000",
    brand: "Lenovo",
    name: "Lenovo Yoga 380 I5 8Th 8/256Gb",
    specs: "yoga 380 i5 8th 8/256gb",
    price: 25000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+yoga+380+i5+8th"
  },
{
    id: "exuk-lenovo-t14i710th8256-30000",
    brand: "Lenovo",
    name: "Lenovo T14 I7 10Th 8/256",
    specs: "T14 i7 10th 8/256",
    price: 30000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+T14+i7+10th+8/256"
  },
{
    id: "exuk-lenovo-x13i710th16512-35000",
    brand: "Lenovo",
    name: "Lenovo X13 I7 10Th 16/512 Touchscreen",
    specs: "X13 i7 10th 16/512 touchscreen",
    price: 35000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+X13+i7+10th+16/512"
  },
{
    id: "exuk-lenovo-x13i710th16512gb-32000",
    brand: "Lenovo",
    name: "Lenovo X13 I7 10Th 16/512Gb",
    specs: "x13 i7 10th 16/512gb",
    price: 32000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x13+i7+10th+16/512gb"
  },
{
    id: "exuk-lenovo-x280i57th8256gb-20000",
    brand: "Lenovo",
    name: "Lenovo X280 I5 7Th 8/256Gb",
    specs: "x280 i5 7th 8/256gb",
    price: 20000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x280+i5+7th+8/256gb"
  },
{
    id: "exuk-lenovo-x280i58th8256gb-21000",
    brand: "Lenovo",
    name: "Lenovo X280 I5 8Th 8/256Gb",
    specs: "x280 i5 8th 8/256gb",
    price: 21000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x280+i5+8th+8/256gb"
  },
{
    id: "exuk-lenovo-x280i58th16256gb-22000",
    brand: "Lenovo",
    name: "Lenovo X280 I5 8Th 16/256Gb",
    specs: "x280 i5 8th 16/256gb",
    price: 22000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x280+i5+8th+16/256gb"
  },
{
    id: "exuk-lenovo-x270i56th8256gb-16000",
    brand: "Lenovo",
    name: "Lenovo X270 I5 6Th 8/256Gb",
    specs: "x270 i5 6th 8/256gb",
    price: 16000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x270+i5+6th+8/256gb"
  },
{
    id: "exuk-lenovo-x260i76th8256gb-17000",
    brand: "Lenovo",
    name: "Lenovo X260 I7 6Th 8/256Gb",
    specs: "x260 i7 6th 8/256gb",
    price: 17000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x260+i7+6th+8/256gb"
  },
{
    id: "exuk-lenovo-x250i75th8256gb-16000",
    brand: "Lenovo",
    name: "Lenovo X250 I7 5Th 8/256Gb",
    specs: "x250 i7 5th 8/256gb",
    price: 16000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x250+i7+5th+8/256gb"
  },
{
    id: "exuk-lenovo-t470si57th8256gb-21000",
    brand: "Lenovo",
    name: "Lenovo T470S I5 7Th 8/256Gb Touchscreen",
    specs: "t470s i5 7th 8/256gb touchscreen",
    price: 21000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+t470s+i5+7th+8/256gb"
  },
{
    id: "exuk-lenovo-t470si57th8256gb-19500",
    brand: "Lenovo",
    name: "Lenovo T470S I5 7Th 8/256Gb",
    specs: "t470s i5 7th 8/256gb",
    price: 19500,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+t470s+i5+7th+8/256gb"
  },
{
    id: "exuk-lenovo-t470si56th8256gb-18500",
    brand: "Lenovo",
    name: "Lenovo T470S I5 6Th 8/256Gb",
    specs: "t470s i5 6th 8/256gb",
    price: 18500,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+t470s+i5+6th+8/256gb"
  },
{
    id: "exuk-lenovo-t470si77th8256gb-22000",
    brand: "Lenovo",
    name: "Lenovo T470S I7 7Th 8/256Gb Touchscreen",
    specs: "t470s i7 7th 8/256gb touchscreen",
    price: 22000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+t470s+i7+7th+8/256gb"
  },
{
    id: "exuk-lenovo-t470si76th8256gb-20000",
    brand: "Lenovo",
    name: "Lenovo T470S I7 6Th 8/256Gb",
    specs: "t470s i7 6th 8/256gb",
    price: 20000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+t470s+i7+6th+8/256gb"
  },
{
    id: "exuk-lenovo-t460si56th8256gb-18000",
    brand: "Lenovo",
    name: "Lenovo T460S I5 6Th 8/256Gb Touchscreen",
    specs: "t460s i5 6th 8/256gb touchscreen",
    price: 18000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+t460s+i5+6th+8/256gb"
  },
{
    id: "exuk-lenovo-t460si56th8256gb-17000",
    brand: "Lenovo",
    name: "Lenovo T460S I5 6Th 8/256Gb",
    specs: "t460s i5 6th 8/256gb",
    price: 17000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+t460s+i5+6th+8/256gb"
  },
{
    id: "exuk-lenovo-t460si76th8256gb-19000",
    brand: "Lenovo",
    name: "Lenovo T460S I7 6Th 8/256Gb",
    specs: "t460s i7 6th 8/256gb",
    price: 19000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+t460s+i7+6th+8/256gb"
  },
{
    id: "exuk-lenovo-yogan23scel4128gb-12000",
    brand: "Lenovo",
    name: "Lenovo Yoga N23S Cel 4/128Gb",
    specs: "yoga n23s cel 4/128gb",
    price: 12000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+yoga+n23s+cel+4/128gb"
  },
{
    id: "exuk-lenovo-11e4128gb-10000",
    brand: "Lenovo",
    name: "Lenovo 11E 4/128Gb",
    specs: "11e 4/128gb",
    price: 10000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+11e+4/128gb"
  },
{
    id: "exuk-lenovo-11ecorem58128gb-13000",
    brand: "Lenovo",
    name: "Lenovo 11E Core M5 8/128Gb",
    specs: "11e core m5 8/128gb",
    price: 13000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+11e+core+m5+8/128gb"
  },
{
    id: "exuk-lenovo-yoga11e4128gbtouchscreen-13000",
    brand: "Lenovo",
    name: "Lenovo Yoga 11E 4/128Gb Touchscreen",
    specs: "yoga 11e 4/128gb touchscreen",
    price: 13000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+yoga+11e+4/128gb+touchscreen"
  },
{
    id: "exuk-dell-precision3561i711th-55000",
    brand: "Dell",
    name: "Dell Precision 3561 I7 11Th 16/512Gb With 4Gb Nvidia Graphics",
    specs: "precision 3561 i7 11th 16/512gb with 4gb nvidia graphics",
    price: 55000,
    category: "exuk business dell",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+precision+3561+i7+11th"
  },
{
    id: "exuk-dell-precision5550i710th-70000",
    brand: "Dell",
    name: "Dell Precision 5550 I7 10Th 16/512Gb With 4Gb Nvidia T1000 Graphics",
    specs: "precision 5550 i7 10th 16/512gb with 4gb nvidia T1000 graphics",
    price: 70000,
    category: "exuk business dell",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+precision+5550+i7+10th"
  },
{
    id: "exuk-dell-precision5540i99th-60000",
    brand: "Dell",
    name: "Dell Precision 5540 I9 9Th 16/512Gb With 4Gb T2000 Nvidia Graphics",
    specs: "precision 5540 i9 9th 16/512gb with 4gb T2000 nvidia graphics",
    price: 60000,
    category: "exuk business dell",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+precision+5540+i9+9th"
  },
{
    id: "exuk-dell-precision5540xeon16512gb-55000",
    brand: "Dell",
    name: "Dell Precision 5540 Xeon 16/512Gb With 4Gb Nvidia Graphics",
    specs: "precision 5540 xeon 16/512gb with 4gb nvidia graphics",
    price: 55000,
    category: "exuk business dell",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+precision+5540+xeon+16/512gb"
  },
{
    id: "exuk-dell-precision5540i79th-55000",
    brand: "Dell",
    name: "Dell Precision 5540 I7 9Th 16/512Gb With 4Gb Nvidia Graphics",
    specs: "precision 5540 i7 9th 16/512gb with 4gb nvidia graphics",
    price: 55000,
    category: "exuk business dell",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+precision+5540+i7+9th"
  },
{
    id: "exuk-dell-precision5530i78th-50000",
    brand: "Dell",
    name: "Dell Precision 5530 I7 8Th 16/512Gb With 4Gb Nvidia Graphics Ksh",
    specs: "precision 5530 i7 8th 16/512gb with 4gb nvidia graphics ksh",
    price: 50000,
    category: "exuk business dell",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+precision+5530+i7+8th"
  },
{
    id: "exuk-dell-xps159570i7-50000",
    brand: "Dell",
    name: "Dell Xps 15 9570 I7 8Th 16/512Gb 4Gb Graphics",
    specs: "xps 15 9570 i7 8th 16/512gb 4gb Graphics",
    price: 50000,
    category: "exuk business dell",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+xps+15+9570+i7"
  },
{
    id: "exuk-dell-inspiron15x360i7-45000",
    brand: "Dell",
    name: "Dell Inspiron 15 X360 I7 8Th 16/512Gb With 2Gb Nvidia Graphics",
    specs: "inspiron 15 x360 i7 8th 16/512gb with 2gb nvidia graphics",
    price: 45000,
    category: "exuk business dell",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+inspiron+15+x360+i7"
  },
{
    id: "exuk-dell-inspiron7375ryzen7-30000",
    brand: "Dell",
    name: "Dell Inspiron 7375 Ryzen 7 8/256Gb X360 Touchscreen",
    specs: "inspiron 7375 ryzen 7 8/256gb x360 touchscreen",
    price: 30000,
    category: "exuk business dell",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+inspiron+7375+ryzen+7"
  },
{
    id: "exuk-dell-inspironryzen58256gb-26000",
    brand: "Dell",
    name: "Dell Inspiron Ryzen 5 8/256Gb X360 Touchscreen",
    specs: "inspiron ryzen 5 8/256gb x360 touchscreen",
    price: 26000,
    category: "exuk business dell",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+inspiron+ryzen+5+8/256gb"
  },
{
    id: "exuk-dell-latitude9420i711th-55000",
    brand: "Dell",
    name: "Dell Latitude 9420 I7 11Th 16/512Gb.",
    specs: "latitude 9420 i7 11th 16/512gb.",
    price: 55000,
    category: "exuk business dell",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+latitude+9420+i7+11th"
  },
{
    id: "exuk-dell-xps139330i7-110000",
    brand: "Dell",
    name: "Dell Xps 13 9330 I7 16/512Gb",
    specs: "xps 13 9330 i7 16/512gb",
    price: 110000,
    category: "exuk business dell",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+xps+13+9330+i7"
  },
{
    id: "exuk-dell-xps139320i7-95000",
    brand: "Dell",
    name: "Dell Xps 13 9320 I7 12Th 16/512Gb",
    specs: "xps 13 9320 i7 12th 16/512gb",
    price: 95000,
    category: "exuk business dell",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+xps+13+9320+i7"
  },
{
    id: "exuk-dell-xps139310i7-65000",
    brand: "Dell",
    name: "Dell Xps 13 9310 I7 11Th 16/512Gb",
    specs: "xps 13 9310 i7 11th 16/512gb",
    price: 65000,
    category: "exuk business dell",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+xps+13+9310+i7"
  },
{
    id: "exuk-dell-xps139305i7-60000",
    brand: "Dell",
    name: "Dell Xps 13 9305 I7 11Th 16/512Gb",
    specs: "xps 13 9305 i7 11th 16/512gb",
    price: 60000,
    category: "exuk business dell",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+xps+13+9305+i7"
  },
{
    id: "exuk-dell-delxps137390-50000",
    brand: "Dell",
    name: "Dell Del Xps 13 7390 I7 10Th 16/512Gb",
    specs: "del xps 13 7390 i7 10th 16/512gb",
    price: 50000,
    category: "exuk business dell",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+del+xps+13+7390"
  },
{
    id: "exuk-dell-xps139380i7-40000",
    brand: "Dell",
    name: "Dell Xps 13 9380 I7 16/512Gb",
    specs: "xps 13 9380 i7 16/512gb",
    price: 40000,
    category: "exuk business dell",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+xps+13+9380+i7"
  },
{
    id: "exuk-dell-latitude52902in1i5-25000",
    brand: "Dell",
    name: "Dell Latitude 5290 2In1 I5 8Th 8/256 Detachable",
    specs: "latitude 5290 2in1 i5 8th 8/256 detachable",
    price: 25000,
    category: "exuk business dell",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+latitude+5290+2in1+i5"
  },
{
    id: "exuk-dell-latitude94102in1i7-45000",
    brand: "Dell",
    name: "Dell Latitude 9410 2In1 I7 10Th 16/512",
    specs: "latitude 9410 2in1 i7 10th 16/512",
    price: 45000,
    category: "exuk business dell",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+latitude+9410+2in1+i7"
  },
{
    id: "exuk-dell-7400i78th16512gb-40000",
    brand: "Dell",
    name: "Dell 7400 I7 8Th 16/512Gb X360 Touchscreen",
    specs: "7400 i7 8th 16/512gb x360 touchscreen",
    price: 40000,
    category: "exuk business dell",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+7400+i7+8th+16/512gb"
  },
{
    id: "exuk-dell-5320i711th16512gb-40000",
    brand: "Dell",
    name: "Dell 5320 I7 11Th 16/512Gb Touchscreen",
    specs: "5320 i7 11th 16/512gb touchscreen",
    price: 40000,
    category: "exuk business dell",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+5320+i7+11th+16/512gb"
  },
{
    id: "exuk-dell-5320i511th8256gb-25000",
    brand: "Dell",
    name: "Dell 5320 I5 11Th 8/256Gb",
    specs: "5320 i5 11th 8/256gb",
    price: 25000,
    category: "exuk business dell",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+5320+i5+11th+8/256gb"
  },
{
    id: "exuk-dell-7390i58th8256gb-25000",
    brand: "Dell",
    name: "Dell 7390 I5 8Th. 8/256Gb X360 Touchscreen",
    specs: "7390 i5 8th. 8/256gb x360 touchscreen",
    price: 25000,
    category: "exuk business dell",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+7390+i5+8th.+8/256gb"
  },
{
    id: "exuk-dell-latitude5300i58th-22000",
    brand: "Dell",
    name: "Dell Latitude 5300 I5 8Th 8/256 Touchscreen",
    specs: "latitude 5300 i5 8th 8/256 touchscreen",
    price: 22000,
    category: "exuk business dell",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+latitude+5300+i5+8th"
  },
{
    id: "exuk-dell-5300i58th8256gb-20000",
    brand: "Dell",
    name: "Dell 5300 I5 8Th 8/256Gb",
    specs: "5300 i5 8th 8/256gb",
    price: 20000,
    category: "exuk business dell",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+5300+i5+8th+8/256gb"
  },
{
    id: "exuk-dell-5300i78th8256-25000",
    brand: "Dell",
    name: "Dell 5300 I7 8Th 8/256",
    specs: "5300 i7 8th 8/256",
    price: 25000,
    category: "exuk business dell",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+5300+i7+8th+8/256"
  },
{
    id: "exuk-dell-7300i58th8256gb-18000",
    brand: "Dell",
    name: "Dell 7300 I5 8Th 8/256Gb",
    specs: "7300 i5 8th 8/256gb",
    price: 18000,
    category: "exuk business dell",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+7300+i5+8th+8/256gb"
  },
{
    id: "exuk-dell-7250i75th8256gb-14000",
    brand: "Dell",
    name: "Dell 7250 I7 5Th 8/256Gb",
    specs: "7250 i7 5th 8/256gb",
    price: 14000,
    category: "exuk business dell",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+7250+i7+5th+8/256gb"
  },
{
    id: "exuk-dell-acerlaptopacertravelmate-13000",
    brand: "Dell",
    name: "Dell Acer Laptop Acer Travelmate 4/128Gb X360 Touchscreen",
    specs: "Acer laptop acer travelmate 4/128gb x360 touchscreen",
    price: 13000,
    category: "exuk business dell",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+Acer+laptop+acer+travelmate"
  },
{
    id: "exuk-lenovo-lenovox1yoga-60000",
    brand: "Lenovo",
    name: "Lenovo X1 Yoga",
    specs: "x1 yoga i7 11th 16/512gb",
    price: 60000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+Yoga"
  },
{
    id: "exuk-lenovo-lenovox1yoga-40000",
    brand: "Lenovo",
    name: "Lenovo X1 Yoga",
    specs: "x1 yoga i7 8th 16/512gb",
    price: 40000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+Yoga"
  },
{
    id: "exuk-lenovo-lenovox1yoga-35000",
    brand: "Lenovo",
    name: "Lenovo X1 Yoga",
    specs: "x1 yoga i7 8th 16/256gb",
    price: 35000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+Yoga"
  },
{
    id: "exuk-lenovo-lenovox1carbo-35000",
    brand: "Lenovo",
    name: "Lenovo X1 Carbon",
    specs: "x1 carbon i7 8th",
    price: 35000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+Carbon"
  },
{
    id: "exuk-lenovo-lenovop50-35000",
    brand: "Lenovo",
    name: "Lenovo P50",
    specs: "p50 i7 6th 16/512gb",
    price: 35000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+P50"
  },
{
    id: "exuk-lenovo-lenovop51s-35000",
    brand: "Lenovo",
    name: "Lenovo P51S",
    specs: "p51s i7 7th 16/512gb",
    price: 35000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+P51S"
  },
{
    id: "exuk-lenovo-lenovot15-45000",
    brand: "Lenovo",
    name: "Lenovo T15",
    specs: "t15 i7 10th 16/512gb",
    price: 45000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+T15"
  },
{
    id: "exuk-lenovo-lenovot490s-35000",
    brand: "Lenovo",
    name: "Lenovo T490S",
    specs: "t490s i7 8th 16/512gb",
    price: 35000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+T490S"
  },
{
    id: "exuk-lenovo-lenovot490s-27000",
    brand: "Lenovo",
    name: "Lenovo T490S",
    specs: "t490s i5 8th 16/256gb",
    price: 27000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+T490S"
  },
{
    id: "exuk-lenovo-lenovoyoga390-25000",
    brand: "Lenovo",
    name: "Lenovo Yoga 390",
    specs: "yoga 390 i5 8th",
    price: 25000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+390"
  },
{
    id: "exuk-lenovo-lenovox13-35000",
    brand: "Lenovo",
    name: "Lenovo X13",
    specs: "X13 i7 10th 16/512",
    price: 35000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+X13"
  },
{
    id: "exuk-lenovo-lenovot470s-21000",
    brand: "Lenovo",
    name: "Lenovo T470S",
    specs: "t470s i5 7th 8/256gb",
    price: 21000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+T470S"
  },
{
    id: "exuk-lenovo-lenovot470s-22000",
    brand: "Lenovo",
    name: "Lenovo T470S",
    specs: "t470s i7 7th 8/256gb",
    price: 22000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+T470S"
  },
{
    id: "exuk-lenovo-lenovot460s-18000",
    brand: "Lenovo",
    name: "Lenovo T460S",
    specs: "t460s i5 6th 8/256gb",
    price: 18000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+T460S"
  },
{
    id: "exuk-lenovo-lenovoyoga11e-13000",
    brand: "Lenovo",
    name: "Lenovo Yoga 11E 4/128Gb",
    specs: "yoga 11e 4/128gb",
    price: 13000,
    category: "exuk business lenovo",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+4/128Gb"
  },
{
    id: "exuk-dell-dellxps15957-50000",
    brand: "Dell",
    name: "Dell Xps 15 9570",
    specs: "xps 15 9570 i7 8th 16/512gb",
    price: 50000,
    category: "exuk business dell",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+9570"
  },
{
    id: "exuk-dell-dell8256gbx3-30000",
    brand: "Dell",
    name: "Dell 8/256Gb X360",
    specs: "8/256gb x360",
    price: 30000,
    category: "exuk business dell",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+X360"
  },
{
    id: "exuk-dell-dellinspiron-26000",
    brand: "Dell",
    name: "Dell Inspiron",
    specs: "inspiron ryzen 5 8/256gb",
    price: 26000,
    category: "exuk business dell",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+Inspiron"
  },
{
    id: "exuk-dell-dellxps13930-60000",
    brand: "Dell",
    name: "Dell Xps 13 9305",
    specs: "xps 13 9305 i7 11th",
    price: 60000,
    category: "exuk business dell",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+9305"
  },
{
    id: "exuk-dell-dell7400-40000",
    brand: "Dell",
    name: "Dell 7400",
    specs: "7400 i7 8th 16/512gb",
    price: 40000,
    category: "exuk business dell",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+7400"
  },
{
    id: "exuk-dell-dell5320-40000",
    brand: "Dell",
    name: "Dell 5320",
    specs: "5320 i7 11th 16/512gb",
    price: 40000,
    category: "exuk business dell",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+5320"
  },
{
    id: "exuk-dell-dell7390-25000",
    brand: "Dell",
    name: "Dell 7390",
    specs: "7390 i5 8th. 8/256gb",
    price: 25000,
    category: "exuk business dell",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+7390"
  },
{
    id: "exuk-dell-delllatitude5-22000",
    brand: "Dell",
    name: "Dell Latitude 5300",
    specs: "latitude 5300 i5 8th 8/256",
    price: 22000,
    category: "exuk business dell",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+5300"
  },
{
    id: "exuk-acer-acertravelmate-13000",
    brand: "Acer",
    name: "Acer Travelmate 4/128Gb",
    specs: "travelmate 4/128gb",
    price: 13000,
    category: "exuk business acer",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Acer+4/128Gb"
  },,
{
    id: "apple-macbook-pro-16-2019-i9-64-1tb-with-8-graphics-133000",
    brand: "Apple",
    name: "MacBook Pro 16 2019 i9 64/1TB with 8 graphics",
    specs: "16 2019 i9 64/1TB with 8 graphics",
    price: 133000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/hero_intro_endframe__e671bev6066u_large.jpg"
  },
{
    id: "apple-macbook-pro-16-i9-32-2tb-with-8gb-graphics-133000",
    brand: "Apple",
    name: "MacBook Pro 16 i9 32/2TB with 8gb graphics",
    specs: "16 i9 32/2TB with 8gb graphics",
    price: 133000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/hero_intro_endframe__e671bev6066u_large.jpg"
  },
{
    id: "apple-macbook-pro-16-2019-i9-32-1tb-with-4gn-graphics-119000",
    brand: "Apple",
    name: "MacBook Pro 16 2019 i9 32/1TB with 4gn graphics",
    specs: "16 2019 i9 32/1TB with 4gn graphics",
    price: 119000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/hero_intro_endframe__e671bev6066u_large.jpg"
  },
{
    id: "apple-macbook-pro-16-2019-i7-32-512gb-98000",
    brand: "Apple",
    name: "MacBook Pro 16 2019 i7 32/512gb",
    specs: "16 2019 i7 32/512gb",
    price: 98000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/hero_intro_endframe__e671bev6066u_large.jpg"
  },
{
    id: "apple-macbook-pro-15-2019-i7-16-512gb-4gb-graphics-88000",
    brand: "Apple",
    name: "MacBook Pro 15 2019 i7 16/512gb 4gb graphics",
    specs: "15 2019 i7 16/512gb 4gb graphics",
    price: 88000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP794/macbook-pro-15-touch-2019.png"
  },
{
    id: "apple-macbook-pro-15-2018-i7-16-512gb-4gb-graphics-77000",
    brand: "Apple",
    name: "MacBook Pro 15 2018 i7 16/512gb 4gb graphics",
    specs: "15 2018 i7 16/512gb 4gb graphics",
    price: 77000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP794/macbook-pro-15-touch-2019.png"
  },
{
    id: "apple-macbook-pro-15-2017-i7-16-512gb-4gb-graphics-73000",
    brand: "Apple",
    name: "MacBook Pro 15 2017 i7 16/512gb 4gb graphics",
    specs: "15 2017 i7 16/512gb 4gb graphics",
    price: 73000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP794/macbook-pro-15-touch-2019.png"
  },
{
    id: "apple-macbook-pro-15-2017-i7-16-512gb-2gb-graphics-70000",
    brand: "Apple",
    name: "MacBook Pro 15 2017 i7 16/512gb 2gb graphics",
    specs: "15 2017 i7 16/512gb 2gb graphics",
    price: 70000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP794/macbook-pro-15-touch-2019.png"
  },
{
    id: "apple-macbook-pro-15-2015-i7-16-512gb-2gb-graphics-49000",
    brand: "Apple",
    name: "MacBook Pro 15 2015 i7 16/512gb 2gb graphics",
    specs: "15 2015 i7 16/512gb 2gb graphics",
    price: 49000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP794/macbook-pro-15-touch-2019.png"
  },
{
    id: "apple-macbook-pro-m1-13-2020-16-512gb-140000",
    brand: "Apple",
    name: "MacBook Pro M1 13 2020 16/512gb",
    specs: "M1 13 2020 16/512gb",
    price: 140000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Nexcom+Ventures"
  },
{
    id: "apple-macbook-pro-m1-13-2020-8-256gb-105000",
    brand: "Apple",
    name: "MacBook Pro M1 13 2020 8/256gb",
    specs: "M1 13 2020 8/256gb",
    price: 105000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Nexcom+Ventures"
  },
{
    id: "apple-macbook-pro-13-i7-2020-16-1tb-91000",
    brand: "Apple",
    name: "MacBook Pro 13 i7 2020 16/1tb",
    specs: "13 i7 2020 16/1tb",
    price: 91000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP818/mbp13touch-silver.png"
  },
{
    id: "apple-macbook-pro-13-i7-2020-32-512gb-91000",
    brand: "Apple",
    name: "MacBook Pro 13 i7 2020 32/512gb",
    specs: "13 i7 2020 32/512gb",
    price: 91000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP818/mbp13touch-silver.png"
  },
{
    id: "apple-macbook-pro-13-i7-2020-16-512gb-84000",
    brand: "Apple",
    name: "MacBook Pro 13 i7 2020 16/512gb",
    specs: "13 i7 2020 16/512gb",
    price: 84000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP818/mbp13touch-silver.png"
  },
{
    id: "apple-macbook-pro-13-2019-i7-16-1tb-98000",
    brand: "Apple",
    name: "MacBook Pro 13 2019 i7 16/1tb",
    specs: "13 2019 i7 16/1tb",
    price: 98000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP818/mbp13touch-silver.png"
  },
{
    id: "apple-macbook-pro-13-2019-i7-16-512gb-77000",
    brand: "Apple",
    name: "MacBook Pro 13 2019 i7 16/512gb",
    specs: "13 2019 i7 16/512gb",
    price: 77000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP818/mbp13touch-silver.png"
  },
{
    id: "apple-macbook-pro-13-2019-i7-16-256gb-70000",
    brand: "Apple",
    name: "MacBook Pro 13 2019 i7 16/256gb",
    specs: "13 2019 i7 16/256gb",
    price: 70000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP818/mbp13touch-silver.png"
  },
{
    id: "apple-macbook-pro-13-2019-i5-16-256gb-63000",
    brand: "Apple",
    name: "MacBook Pro 13 2019 i5 16/256gb",
    specs: "13 2019 i5 16/256gb",
    price: 63000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP818/mbp13touch-silver.png"
  },
{
    id: "apple-macbook-pro-13-2019-i5-8-256gb-59000",
    brand: "Apple",
    name: "MacBook Pro 13 2019 i5 8/256gb",
    specs: "13 2019 i5 8/256gb",
    price: 59000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP818/mbp13touch-silver.png"
  },
{
    id: "apple-macbook-pro-13-2018-i7-16-256gb-67000",
    brand: "Apple",
    name: "MacBook Pro 13 2018 i7 16/256gb",
    specs: "13 2018 i7 16/256gb",
    price: 67000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP818/mbp13touch-silver.png"
  },
{
    id: "apple-macbook-pro-13-2017-i7-16-1tb-70000",
    brand: "Apple",
    name: "MacBook Pro 13 2017 i7 16/1tb",
    specs: "13 2017 i7 16/1tb",
    price: 70000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP818/mbp13touch-silver.png"
  },
{
    id: "apple-macbook-pro-13-2017-i7-16-512gb-63000",
    brand: "Apple",
    name: "MacBook Pro 13 2017 i7 16/512gb",
    specs: "13 2017 i7 16/512gb",
    price: 63000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP818/mbp13touch-silver.png"
  },
{
    id: "apple-macbook-pro-13-2017-i7-16-256gb-56000",
    brand: "Apple",
    name: "MacBook Pro 13 2017 i7 16/256gb",
    specs: "13 2017 i7 16/256gb",
    price: 56000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP818/mbp13touch-silver.png"
  },
{
    id: "apple-macbook-pro-13-2017-i5-8-512gb-53000",
    brand: "Apple",
    name: "MacBook Pro 13 2017 i5 8/512gb",
    specs: "13 2017 i5 8/512gb",
    price: 53000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP818/mbp13touch-silver.png"
  },
{
    id: "apple-macbook-pro-13-2017-i5-8-256gb-45000",
    brand: "Apple",
    name: "MacBook Pro 13 2017 i5 8/256gb",
    specs: "13 2017 i5 8/256gb",
    price: 45000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP818/mbp13touch-silver.png"
  },
{
    id: "apple-macbook-pro-13-2015-i7-8-256gb-42000",
    brand: "Apple",
    name: "MacBook Pro 13 2015 i7 8/256gb",
    specs: "13 2015 i7 8/256gb",
    price: 42000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP818/mbp13touch-silver.png"
  },
{
    id: "apple-macbook-pro-13-2015-i5-16-512gb-45000",
    brand: "Apple",
    name: "MacBook Pro 13 2015 i5 16/512gb",
    specs: "13 2015 i5 16/512gb",
    price: 45000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP818/mbp13touch-silver.png"
  },
{
    id: "apple-macbook-pro-13-2015-i5-16-256gb-38000",
    brand: "Apple",
    name: "MacBook Pro 13 2015 i5 16/256gb",
    specs: "13 2015 i5 16/256gb",
    price: 38000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP818/mbp13touch-silver.png"
  },
{
    id: "apple-macbook-pro-13-2015-i5-8-256gb-35000",
    brand: "Apple",
    name: "MacBook Pro 13 2015 i5 8/256gb",
    specs: "13 2015 i5 8/256gb",
    price: 35000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP818/mbp13touch-silver.png"
  },
{
    id: "apple-macbook-pro-13-2014-i5-8-256gb-32000",
    brand: "Apple",
    name: "MacBook Pro 13 2014 i5 8/256gb",
    specs: "13 2014 i5 8/256gb",
    price: 32000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP818/mbp13touch-silver.png"
  },
{
    id: "apple-macbook-pro-13-2013-i5-8-256gb-29500",
    brand: "Apple",
    name: "MacBook Pro 13 2013 i5 8/256gb",
    specs: "13 2013 i5 8/256gb",
    price: 29500,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP818/mbp13touch-silver.png"
  },
{
    id: "apple-macbook-pro-13-2013-i7-8-256gb-35000",
    brand: "Apple",
    name: "MacBook Pro 13 2013 i7 8/256gb",
    specs: "13 2013 i7 8/256gb",
    price: 35000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP818/mbp13touch-silver.png"
  },
{
    id: "apple-macbook-pro-13-2012-i7-8-256gb-26500",
    brand: "Apple",
    name: "MacBook Pro 13 2012 i7 8/256gb",
    specs: "13 2012 i7 8/256gb",
    price: 26500,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP818/mbp13touch-silver.png"
  },
{
    id: "apple-macbook-pro-13-2012-i5-8-256gb-24000",
    brand: "Apple",
    name: "MacBook Pro 13 2012 i5 8/256gb",
    specs: "13 2012 i5 8/256gb",
    price: 24000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP818/mbp13touch-silver.png"
  },
{
    id: "apple-macbook-pro-13-2011-i5-8-256gb-21000",
    brand: "Apple",
    name: "MacBook Pro 13 2011 i5 8/256gb",
    specs: "13 2011 i5 8/256gb",
    price: 21000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP818/mbp13touch-silver.png"
  },
{
    id: "apple-macbook-air-m1-2022-8-512gb-119000",
    brand: "Apple",
    name: "MacBook Air M1 2022 8/512gb",
    specs: "M1 2022 8/512gb",
    price: 119000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://www.apple.com/v/macbook-air-m2/c/images/overview/hero/hero_static__f9clv6u74u6u_large.jpg"
  },
{
    id: "apple-macbook-air-m1-2022-8-256gb-112000",
    brand: "Apple",
    name: "MacBook Air M1 2022 8/256gb",
    specs: "M1 2022 8/256gb",
    price: 112000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://www.apple.com/v/macbook-air-m2/c/images/overview/hero/hero_static__f9clv6u74u6u_large.jpg"
  },
{
    id: "apple-macbook-air-m1-2020-8-256gb-84000",
    brand: "Apple",
    name: "MacBook Air M1 2020 8/256gb",
    specs: "M1 2020 8/256gb",
    price: 84000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://www.apple.com/v/macbook-air-m2/c/images/overview/hero/hero_static__f9clv6u74u6u_large.jpg"
  },
{
    id: "apple-macbook-air-13-2019-i5-16-256gb-59000",
    brand: "Apple",
    name: "MacBook Air 13 2019 i5 16/256gb",
    specs: "13 2019 i5 16/256gb",
    price: 59000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP773/sp773-mbair-13-gold.png"
  },
{
    id: "apple-macbook-air-13-2019-i5-8-256gb-56000",
    brand: "Apple",
    name: "MacBook Air 13 2019 i5 8/256gb",
    specs: "13 2019 i5 8/256gb",
    price: 56000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP773/sp773-mbair-13-gold.png"
  },
{
    id: "apple-macbook-air-13-2018-i5-8-256gb-53000",
    brand: "Apple",
    name: "MacBook Air 13 2018 i5 8/256gb",
    specs: "13 2018 i5 8/256gb",
    price: 53000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP773/sp773-mbair-13-gold.png"
  },
{
    id: "apple-macbook-air-13-2017-i7-8-256gb-42000",
    brand: "Apple",
    name: "MacBook Air 13 2017 i7 8/256gb",
    specs: "13 2017 i7 8/256gb",
    price: 42000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP773/sp773-mbair-13-gold.png"
  },
{
    id: "apple-macbook-air-13-2017-i5-8-256gb-35000",
    brand: "Apple",
    name: "MacBook Air 13 2017 i5 8/256gb",
    specs: "13 2017 i5 8/256gb",
    price: 35000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP773/sp773-mbair-13-gold.png"
  },
{
    id: "apple-macbook-air-13-2015-i5-8-256-31000",
    brand: "Apple",
    name: "MacBook Air 13 2015 i5 8/256",
    specs: "13 2015 i5 8/256",
    price: 31000,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP773/sp773-mbair-13-gold.png"
  },
{
    id: "apple-macbook-air-13-2014-i7-8-256-29500",
    brand: "Apple",
    name: "MacBook Air 13 2014 i7 8/256",
    specs: "13 2014 i7 8/256",
    price: 29500,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP773/sp773-mbair-13-gold.png"
  },
{
    id: "apple-macbook-air-13-2013-i5-8-128-26500",
    brand: "Apple",
    name: "MacBook Air 13 2013 i5 8/128",
    specs: "13 2013 i5 8/128",
    price: 26500,
    category: "exuk apple macbook",
    badge: "exuk",
    img: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP773/sp773-mbair-13-gold.png"
  },
{
    id: "samsung-sam930-i7-11th",
    brand: "Samsung",
    name: "Samsung Sam 930 i7 11th 16/512gb",
    specs: "i7 11th Gen • 16GB RAM • 512GB SSD",
    price: 84000,
    category: "exuk business samsung",
    badge: "premium",
    img: "https://images.samsung.com/is/image/samsung/p6pim/uk/np930xdb-ka1uk/gallery/uk-galaxy-book-pro-np930xdb-ka1uk-393282173?$650_519_PNG$"
  }];

// Badge color map
const BADGE_LABELS = {
  new: "New Arrival",
  hot: "🔥 Bestseller",
  refurb: "Refurbished",
  exuk: "Ex-UK Grade A"
};

let currentLimit = 12;
let currentFilter = "featured";

// Render products
function renderProducts(filter = "featured") {
  const grid = document.getElementById("productsGrid");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  if (!grid) return;

  currentFilter = filter;
  const filtered = filter === "all"
    ? ALL_PRODUCTS
    : filter === "featured"
    ? ALL_PRODUCTS.filter(p => p.category.includes("featured"))
    : ALL_PRODUCTS.filter(p => p.category.includes(filter));

  const toShow = filtered.slice(0, currentLimit);

  grid.innerHTML = toShow.map(p => {
    const isServer = p.category.includes('server');
    const currency = isServer ? 'USD' : 'KES';
    const symbol = isServer ? '$' : 'KES';
    const priceVal = p.price;
    const priceDisplay = `${symbol} ${priceVal.toLocaleString()}`;

    return `
      <div class="product-card">
        <div class="product-badge ${p.badge}">${BADGE_LABELS[p.badge] || p.badge}</div>
        <div class="product-img">
          <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x200/0a0a0a/f01a24?text=${encodeURIComponent(p.brand)}'"/>
          <div class="product-overlay">
            <button class="quick-view-btn" onclick='openModal("${p.name.replace(/"/g,"&quot;")}", "${priceDisplay}", "${p.specs.replace(/"/g,"&quot;")}", "${p.img}", ${priceVal})'>Quick View</button>
          </div>
        </div>
        <div class="product-info">
          <div class="product-brand">${p.brand}</div>
          <h3>${p.name}</h3>
          <p>${p.specs}</p>
          <div class="product-footer">
            <div class="price-container">
              <span class="price">${priceDisplay}</span>
              <span class="vat-tag">Excl. VAT</span>
            </div>
            <button class="add-cart" onclick="addToCart('${p.name.replace(/'/g,"\\'")}', ${priceVal}, '${currency}')">Add to Cart</button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  if (loadMoreBtn) {
    loadMoreBtn.style.display = currentLimit >= filtered.length ? "none" : "inline-block";
  }
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
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  if (!grid) return;

  if (!query) { renderProducts(currentFilter); return; }
  
  const filtered = ALL_PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(query) || 
    p.brand.toLowerCase().includes(query) || 
    p.specs.toLowerCase().includes(query)
  );

  grid.innerHTML = filtered.map(p => {
    const isServer = p.category.includes('server');
    const currency = isServer ? 'USD' : 'KES';
    const symbol = isServer ? '$' : 'KES';
    const priceVal = p.price;
    const priceDisplay = `${symbol} ${priceVal.toLocaleString()}`;

    return `
      <div class="product-card">
        <div class="product-badge ${p.badge}">${BADGE_LABELS[p.badge] || p.badge}</div>
        <div class="product-img">
          <img src="${p.img}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/300x200/0a0a0a/f01a24?text=${encodeURIComponent(p.brand)}'"/>
          <div class="product-overlay">
            <button class="quick-view-btn" onclick='openModal("${p.name.replace(/"/g,"&quot;")}", "${priceDisplay}", "${p.specs.replace(/"/g,"&quot;")}", "${p.img}", ${priceVal})'>Quick View</button>
          </div>
        </div>
        <div class="product-info">
          <div class="product-brand">${p.brand}</div>
          <h3>${p.name}</h3>
          <p>${p.specs}</p>
          <div class="product-footer">
            <div class="price-container">
              <span class="price">${priceDisplay}</span>
              <span class="vat-tag">Excl. VAT</span>
            </div>
            <button class="add-cart" onclick="addToCart('${p.name.replace(/'/g,"\\'")}', ${priceVal}, '${currency}')">Add to Cart</button>
          </div>
        </div>
      </div>
    `;
  }).join("") || `<div class="no-results">No matches found for "${query}"</div>`;
  
  if (loadMoreBtn) loadMoreBtn.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => renderProducts("featured"));
