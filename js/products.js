const ALL_PRODUCTS = [
  {
    "id": "feat-1",
    "brand": "Dell",
    "name": "Dell XPS 13 9330",
    "specs": "Intel Core i7 13th Gen \u2022 16GB RAM \u2022 512GB SSD",
    "price": 158500,
    "category": "exuk business featured dell laptop",
    "badge": "new",
    "img": "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=800"
  },
  {
    "id": "feat-2",
    "brand": "Apple",
    "name": "MacBook Pro 13 M2",
    "specs": "Apple M2 Chip \u2022 8GB RAM \u2022 512GB SSD",
    "price": 164000,
    "onFlashSale": true,
    "category": "exuk apple featured macbook laptop",
    "badge": "hot",
    "img": "images/macbook_m2.jpg"
  },
  {
    "id": "feat-3",
    "brand": "Lenovo",
    "name": "ThinkPad X1 Carbon Gen 10",
    "specs": "i7 12th Gen \u2022 16GB RAM \u2022 512GB SSD",
    "price": 96000,
    "category": "exuk business featured lenovo laptop",
    "badge": "hot",
    "img": "images/x1_carbon_gen10.jpg"
  },
  {
    "id": "feat-4",
    "brand": "HP",
    "name": "HP EliteBook 840 G8",
    "specs": "i7 11th Gen \u2022 16GB RAM \u2022 512GB SSD",
    "price": 67000,
    "onFlashSale": true,
    "category": "exuk business featured hp laptop",
    "badge": "hot",
    "img": "https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?q=80&w=800"
  },
  {
    "id": "bud-1",
    "brand": "Lenovo",
    "name": "Lenovo 11E Core M5",
    "specs": "8GB RAM \u2022 128GB SSD \u2022 11.6\"",
    "price": 14500,
    "onFlashSale": true,
    "category": "exuk student budget",
    "badge": "student",
    "img": "https://images.unsplash.com/photo-1525547718571-03b05761ad91?q=80&w=800"
  },
  {
    "id": "bud-2",
    "brand": "Lenovo",
    "name": "Lenovo 11E Celeron",
    "specs": "4GB RAM \u2022 128GB SSD \u2022 Rugged",
    "price": 11500,
    "category": "exuk student budget",
    "badge": "student",
    "img": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=800"
  },
  {
    "id": "bud-3",
    "brand": "Lenovo",
    "name": "Lenovo Yoga N23S",
    "specs": "Celeron \u2022 4GB RAM \u2022 128GB SSD \u2022 Touch",
    "price": 15500,
    "category": "exuk student budget",
    "badge": "student",
    "img": "https://images.unsplash.com/photo-1611186871348-b1ec696e520b?q=80&w=800"
  },
  {
    "id": "d-1",
    "brand": "Dell",
    "name": "Dell Latitude 5400 i5",
    "specs": "8th Gen \u2022 8GB \u2022 256GB SSD",
    "price": 26000,
    "category": "exuk business featured dell laptop",
    "badge": "exuk",
    "img": "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=800"
  },
  {
    "id": "d-2",
    "brand": "Dell",
    "name": "Dell Precision 5550 i7",
    "specs": "10th Gen \u2022 16GB \u2022 512GB \u2022 4GB Nvidia",
    "price": 82500,
    "category": "exuk business dell laptop",
    "badge": "pro",
    "img": "https://images.unsplash.com/photo-1661961111184-11317b40adb2?q=80&w=800"
  },
  {
    "id": "d-3",
    "brand": "Dell",
    "name": "Dell XPS 13 9310 i7",
    "specs": "11th Gen \u2022 16GB \u2022 512GB \u2022 Touch",
    "price": 77000,
    "category": "exuk business dell laptop",
    "badge": "premium",
    "img": "https://images.unsplash.com/photo-1661961112134-fbce0fdf3d99?q=80&w=800"
  },
  {
    "id": "h-1",
    "brand": "HP",
    "name": "HP ProBook 640 G5 i5",
    "specs": "8th Gen \u2022 8GB \u2022 256GB SSD",
    "price": 28000,
    "category": "exuk business hp laptop",
    "badge": "exuk",
    "img": "https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?q=80&w=800"
  },
  {
    "id": "h-2",
    "brand": "HP",
    "name": "HP EliteBook 840 G6 i5",
    "specs": "8th Gen \u2022 16GB \u2022 256GB SSD",
    "price": 39000,
    "category": "exuk business featured hp laptop",
    "badge": "hot",
    "img": "https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?q=80&w=800"
  },
  {
    "id": "l-1",
    "brand": "Lenovo",
    "name": "ThinkPad T490s i5",
    "specs": "8th Gen \u2022 8GB \u2022 256GB SSD",
    "price": 27000,
    "category": "exuk business lenovo laptop",
    "badge": "exuk",
    "img": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800"
  },
  {
    "id": "l-2",
    "brand": "Lenovo",
    "name": "ThinkPad X1 Yoga i7",
    "specs": "8th Gen \u2022 16GB \u2022 512GB \u2022 Touch",
    "price": 47500,
    "category": "exuk business featured lenovo laptop",
    "badge": "exuk",
    "img": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800"
  },
  {
    "id": "l-new-1",
    "brand": "Lenovo",
    "name": "Lenovo IdeaPad Slim 3",
    "specs": "Ryzen 5 \u2022 8GB RAM \u2022 512GB SSD",
    "price": 51500,
    "category": "exuk student business lenovo laptop",
    "badge": "new",
    "img": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=800"
  },
  {
    "id": "l-new-2",
    "brand": "Lenovo",
    "name": "ThinkPad E14 Gen 2",
    "specs": "i5 11th Gen \u2022 8GB RAM \u2022 256GB SSD",
    "price": 40500,
    "category": "exuk business lenovo laptop",
    "badge": "exuk",
    "img": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800"
  },
  {
    "id": "l-new-3",
    "brand": "Lenovo",
    "name": "Lenovo ThinkBook 15",
    "specs": "i7 11th Gen \u2022 16GB RAM \u2022 512GB SSD",
    "price": 58500,
    "category": "exuk business featured lenovo laptop",
    "badge": "hot",
    "img": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800"
  },
  {
    "id": "l-new-4",
    "brand": "Lenovo",
    "name": "ThinkPad L13 Yoga",
    "specs": "i5 10th Gen \u2022 8GB RAM \u2022 256GB SSD \u2022 Touch",
    "price": 38500,
    "category": "exuk business lenovo laptop",
    "badge": "exuk",
    "img": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800"
  },
  {
    "id": "s-1",
    "brand": "Dell",
    "name": "PowerEdge T150 Server",
    "specs": "Intel Xeon \u2022 16GB ECC \u2022 2TB HDD",
    "price": 152500,
    "category": "server enterprise new",
    "badge": "server",
    "img": "https://images.unsplash.com/photo-1558494949-ef010978911e?q=80&w=800"
  },
  {
    "id": "s-2",
    "brand": "HP",
    "name": "ProLiant DL380 Gen10",
    "specs": "Dual Xeon \u2022 64GB RAM \u2022 Rack Server",
    "price": 293500,
    "category": "server enterprise exuk",
    "badge": "server",
    "img": "https://images.unsplash.com/photo-1594065296416-aed7ae708d58?q=80&w=800"
  },
  {
    "id": "m-1",
    "brand": "Apple",
    "name": "MacBook Air M1",
    "specs": "Apple M1 Chip \u2022 8GB RAM \u2022 256GB SSD \u2022 13.3-inch Retina",
    "price": 100000,
    "category": "exuk apple macbook laptop",
    "badge": "new",
    "img": "https://images.unsplash.com/photo-1611186871348-b1ec696e523f?q=80&w=800"
  },
  {
    "id": "m-2",
    "brand": "Apple",
    "name": "MacBook Pro 14 M3",
    "specs": "Apple M3 Chip \u2022 16GB RAM \u2022 512GB SSD \u2022 Liquid Retina XDR",
    "price": 333500,
    "category": "new apple macbook premium laptop",
    "badge": "hot",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800"
  },
  {
    "id": "mb-100",
    "brand": "Apple",
    "name": "macbook pro 16 2019 i9 64/1tb with 8 graphics",
    "specs": "macbook pro 16 2019 i9 64/1tb with 8 graphics",
    "price": 134000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800"
  },
  {
    "id": "mb-101",
    "brand": "Apple",
    "name": "macbook pro 16 i9 32/2tb with 8gb graphics",
    "specs": "macbook pro 16 i9 32/2tb with 8gb graphics",
    "price": 134000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800"
  },
  {
    "id": "mb-102",
    "brand": "Apple",
    "name": "macbook pro 16 2019 i9 32/1tb with 4gn graphics",
    "specs": "macbook pro 16 2019 i9 32/1tb with 4gn graphics",
    "price": 120000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800"
  },
  {
    "id": "mb-103",
    "brand": "Apple",
    "name": "macbook pro 16 2019 i7 32/512gb",
    "specs": "macbook pro 16 2019 i7 32/512gb",
    "price": 99000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800"
  },
  {
    "id": "mb-104",
    "brand": "Apple",
    "name": "macbook pro 15 2019 i7 16/512gb 4gb graphics",
    "specs": "macbook pro 15 2019 i7 16/512gb 4gb graphics",
    "price": 89000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800"
  },
  {
    "id": "mb-105",
    "brand": "Apple",
    "name": "macbook pro 15 2018 i7 16/512gb 4gb graphics",
    "specs": "macbook pro 15 2018 i7 16/512gb 4gb graphics",
    "price": 78000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800"
  },
  {
    "id": "mb-106",
    "brand": "Apple",
    "name": "macbook pro 15 2017 i7 16/512gb 4gb graphics",
    "specs": "macbook pro 15 2017 i7 16/512gb 4gb graphics",
    "price": 74000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800"
  },
  {
    "id": "mb-107",
    "brand": "Apple",
    "name": "macbook pro 15 2017 i7 16/512gb 2gb graphics",
    "specs": "macbook pro 15 2017 i7 16/512gb 2gb graphics",
    "price": 71000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800"
  },
  {
    "id": "mb-108",
    "brand": "Apple",
    "name": "macbook pro 15 2015 i7 16/512gb 2gb graphics",
    "specs": "macbook pro 15 2015 i7 16/512gb 2gb graphics",
    "price": 50000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800"
  },
  {
    "id": "mb-109",
    "brand": "Apple",
    "name": "macbook pro m1 13 2020 16/512gb",
    "specs": "macbook pro m1 13 2020 16/512gb",
    "price": 141000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800"
  },
  {
    "id": "mb-110",
    "brand": "Apple",
    "name": "macbook pro m1 13 2020 8/256gb",
    "specs": "macbook pro m1 13 2020 8/256gb",
    "price": 106000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800"
  },
  {
    "id": "mb-111",
    "brand": "Apple",
    "name": "macbook pro 13 i7 2020 16/1tb",
    "specs": "macbook pro 13 i7 2020 16/1tb",
    "price": 92000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800"
  },
  {
    "id": "mb-112",
    "brand": "Apple",
    "name": "macbook pro 13 i7 2020 32/512gb",
    "specs": "macbook pro 13 i7 2020 32/512gb",
    "price": 92000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800"
  },
  {
    "id": "mb-113",
    "brand": "Apple",
    "name": "macbook pro 13 i7 2020 16/512gb",
    "specs": "macbook pro 13 i7 2020 16/512gb",
    "price": 85000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800"
  },
  {
    "id": "mb-114",
    "brand": "Apple",
    "name": "macbook pro 13 2019 i7 16/1tb",
    "specs": "macbook pro 13 2019 i7 16/1tb",
    "price": 99000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800"
  },
  {
    "id": "mb-115",
    "brand": "Apple",
    "name": "macbook pro 13 2019 i7 16/512gb",
    "specs": "macbook pro 13 2019 i7 16/512gb",
    "price": 78000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800"
  },
  {
    "id": "mb-116",
    "brand": "Apple",
    "name": "macbook pro 13 2019 i7 16/256gb",
    "specs": "macbook pro 13 2019 i7 16/256gb",
    "price": 71000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800"
  },
  {
    "id": "mb-117",
    "brand": "Apple",
    "name": "macbook pro 13 2019 i5 16/256gb",
    "specs": "macbook pro 13 2019 i5 16/256gb",
    "price": 64000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800"
  },
  {
    "id": "mb-118",
    "brand": "Apple",
    "name": "macbook pro 13 2019 i5 8/256gb",
    "specs": "macbook pro 13 2019 i5 8/256gb",
    "price": 60000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800"
  },
  {
    "id": "mb-119",
    "brand": "Apple",
    "name": "macbook pro 13 2018 i7 16/256gb",
    "specs": "macbook pro 13 2018 i7 16/256gb",
    "price": 68000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800"
  },
  {
    "id": "mb-120",
    "brand": "Apple",
    "name": "macbook pro 13 2017 i7 16/1tb",
    "specs": "macbook pro 13 2017 i7 16/1tb",
    "price": 71000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800"
  },
  {
    "id": "mb-121",
    "brand": "Apple",
    "name": "macbook pro 13 2017 i7 16/512gb",
    "specs": "macbook pro 13 2017 i7 16/512gb",
    "price": 64000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800"
  },
  {
    "id": "mb-122",
    "brand": "Apple",
    "name": "macbook pro 13 2017 i7 16/256gb",
    "specs": "macbook pro 13 2017 i7 16/256gb",
    "price": 57000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800"
  },
  {
    "id": "mb-123",
    "brand": "Apple",
    "name": "macbook pro 13 2017 i5 8/512gb",
    "specs": "macbook pro 13 2017 i5 8/512gb",
    "price": 54000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800"
  },
  {
    "id": "mb-124",
    "brand": "Apple",
    "name": "macbook pro 13 2017 i5 8/256gb",
    "specs": "macbook pro 13 2017 i5 8/256gb",
    "price": 46000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800"
  },
  {
    "id": "mb-125",
    "brand": "Apple",
    "name": "macbook pro 13 2015 i7 8/256gb",
    "specs": "macbook pro 13 2015 i7 8/256gb",
    "price": 43000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800"
  },
  {
    "id": "mb-126",
    "brand": "Apple",
    "name": "macbook pro 13 2015 i5 16/512gb",
    "specs": "macbook pro 13 2015 i5 16/512gb",
    "price": 46000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800"
  },
  {
    "id": "mb-127",
    "brand": "Apple",
    "name": "macbook pro 13 2015 i5 16/256gb",
    "specs": "macbook pro 13 2015 i5 16/256gb",
    "price": 39000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800"
  },
  {
    "id": "mb-128",
    "brand": "Apple",
    "name": "macbook pro 13 2015 i5 8/256gb",
    "specs": "macbook pro 13 2015 i5 8/256gb",
    "price": 36000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800"
  },
  {
    "id": "mb-129",
    "brand": "Apple",
    "name": "macbook pro 13 2014 i5 8/256gb",
    "specs": "macbook pro 13 2014 i5 8/256gb",
    "price": 33000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800"
  },
  {
    "id": "mb-130",
    "brand": "Apple",
    "name": "macbook pro 13 2013 i5 8/256gb",
    "specs": "macbook pro 13 2013 i5 8/256gb",
    "price": 30500,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800"
  },
  {
    "id": "mb-131",
    "brand": "Apple",
    "name": "macbook pro 13 2013 i7 8/256gb",
    "specs": "macbook pro 13 2013 i7 8/256gb",
    "price": 36000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800"
  },
  {
    "id": "mb-132",
    "brand": "Apple",
    "name": "macbook pro 13 2012 i7 8/256gb",
    "specs": "macbook pro 13 2012 i7 8/256gb",
    "price": 27500,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800"
  },
  {
    "id": "mb-133",
    "brand": "Apple",
    "name": "macbook pro 13 2012 i5 8/256gb",
    "specs": "macbook pro 13 2012 i5 8/256gb",
    "price": 25000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800"
  },
  {
    "id": "mb-134",
    "brand": "Apple",
    "name": "macbook pro 13 2011 i5 8/256gb",
    "specs": "macbook pro 13 2011 i5 8/256gb",
    "price": 22000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800"
  },
  {
    "id": "mb-135",
    "brand": "Apple",
    "name": "macbook air laptops macbook air m1 2022 8/512gb",
    "specs": "macbook air laptops macbook air m1 2022 8/512gb",
    "price": 140000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1611186871348-b1ec696e523f?q=80&w=800"
  },
  {
    "id": "mb-136",
    "brand": "Apple",
    "name": "macbook air m1 2022 8/256gb",
    "specs": "macbook air m1 2022 8/256gb",
    "price": 113000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1611186871348-b1ec696e523f?q=80&w=800"
  },
  {
    "id": "mb-137",
    "brand": "Apple",
    "name": "macbook air m1 2020 8/256gb",
    "specs": "macbook air m1 2020 8/256gb",
    "price": 85000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1611186871348-b1ec696e523f?q=80&w=800"
  },
  {
    "id": "mb-138",
    "brand": "Apple",
    "name": "macbook air 13 2019 i5 16/256gb",
    "specs": "macbook air 13 2019 i5 16/256gb",
    "price": 60000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1611186871348-b1ec696e523f?q=80&w=800"
  },
  {
    "id": "mb-139",
    "brand": "Apple",
    "name": "macbook air 13 2019 i58/256gb",
    "specs": "macbook air 13 2019 i58/256gb",
    "price": 57000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1611186871348-b1ec696e523f?q=80&w=800"
  },
  {
    "id": "mb-140",
    "brand": "Apple",
    "name": "macbook air 13 2018 i5 8/256gb",
    "specs": "macbook air 13 2018 i5 8/256gb",
    "price": 54000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1611186871348-b1ec696e523f?q=80&w=800"
  },
  {
    "id": "mb-141",
    "brand": "Apple",
    "name": "macbook air 13 2017 i7 8/256gb",
    "specs": "macbook air 13 2017 i7 8/256gb",
    "price": 43000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1611186871348-b1ec696e523f?q=80&w=800"
  },
  {
    "id": "mb-142",
    "brand": "Apple",
    "name": "macbook air 13 2017 i5 8/256gb",
    "specs": "macbook air 13 2017 i5 8/256gb",
    "price": 36000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1611186871348-b1ec696e523f?q=80&w=800"
  },
  {
    "id": "mb-143",
    "brand": "Apple",
    "name": "MacBook Air 13 2015 i5 8/256",
    "specs": "MacBook Air 13 2015 i5 8/256",
    "price": 32000,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1611186871348-b1ec696e523f?q=80&w=800"
  },
  {
    "id": "mb-144",
    "brand": "Apple",
    "name": "MacBook Air 13 2014 i7 8/256",
    "specs": "MacBook Air 13 2014 i7 8/256",
    "price": 30500,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1611186871348-b1ec696e523f?q=80&w=800"
  },
  {
    "id": "mb-145",
    "brand": "Apple",
    "name": "MacBook Air 13 2013 i5 8/128",
    "specs": "MacBook Air 13 2013 i5 8/128",
    "price": 27500,
    "category": "apple macbook exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1611186871348-b1ec696e523f?q=80&w=800"
  },
  {
    "id": "mb-146",
    "brand": "Samsung",
    "name": "sam 930 i7 11th 16/512gb",
    "specs": "sam 930 i7 11th 16/512gb",
    "price": 76000,
    "category": "samsung laptop exuk",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=800"
  },
  {
    "id": "hp-500",
    "brand": "HP",
    "name": "hp spectre x360 convertible 15t -df100 i7 10th with 2gb graphics",
    "specs": "hp spectre x360 convertible 15t -df100 i7 10th with 2gb graphics",
    "price": 140000,
    "category": "hp exuk workstation premium premium touchscreen laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?q=80&w=800"
  },
  {
    "id": "hp-501",
    "brand": "HP",
    "name": "hp spectre x360 convertible 15-df0xxx i7 8th 16/512gb with 2gb graphics",
    "specs": "hp spectre x360 convertible 15-df0xxx i7 8th 16/512gb with 2gb graphics",
    "price": 99000,
    "category": "hp exuk workstation premium premium touchscreen laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?q=80&w=800"
  },
  {
    "id": "hp-502",
    "brand": "HP",
    "name": "hp. spectre x360 convertible 15-bl0xx i7 7th 16/512gb with 2gb graphics",
    "specs": "hp. spectre x360 convertible 15-bl0xx i7 7th 16/512gb with 2gb graphics",
    "price": 91000,
    "category": "hp exuk workstation premium premium touchscreen laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?q=80&w=800"
  },
  {
    "id": "hp-503",
    "brand": "HP",
    "name": "hp envy x360 convertible 15m i7 8th 16/512gb",
    "specs": "hp envy x360 convertible 15m i7 8th 16/512gb",
    "price": 82500,
    "category": "hp exuk premium touchscreen laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-504",
    "brand": "HP",
    "name": "hp zbook studio 15 g7 mobile workstation i7 10th 32/512gb with 4gb graphics",
    "specs": "hp zbook studio 15 g7 mobile workstation i7 10th 32/512gb with 4gb graphics",
    "price": 123500,
    "category": "hp exuk workstation premium laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-505",
    "brand": "HP",
    "name": "hp zbook 15 studio g5 i7 9th 16/512gb with 4gb nvidia Quadro p1000",
    "specs": "hp zbook 15 studio g5 i7 9th 16/512gb with 4gb nvidia Quadro p1000",
    "price": 99000,
    "category": "hp exuk workstation premium laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-506",
    "brand": "HP",
    "name": "hp zbook 15 studio i7 8th 16/512gb with 4gb nvidia Quadro p1000",
    "specs": "hp zbook 15 studio i7 8th 16/512gb with 4gb nvidia Quadro p1000",
    "price": 91000,
    "category": "hp exuk workstation premium laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-507",
    "brand": "HP",
    "name": "hp zbook 15 g5 i7 8th 16/512gb with 4gb nvidia Quadro p1000",
    "specs": "hp zbook 15 g5 i7 8th 16/512gb with 4gb nvidia Quadro p1000",
    "price": 91000,
    "category": "hp exuk workstation premium laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-508",
    "brand": "HP",
    "name": "hp zbook 15u g6 i7 8th 16/512gb with 4gb AMD Radeon pro wx3200 graphics",
    "specs": "hp zbook 15u g6 i7 8th 16/512gb with 4gb AMD Radeon pro wx3200 graphics",
    "price": 82500,
    "category": "hp exuk workstation premium laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-509",
    "brand": "HP",
    "name": "hp zbook 15 studio g5 i7 8th 16/512gb with 4gb nvidia quadro p1000",
    "specs": "hp zbook 15 studio g5 i7 8th 16/512gb with 4gb nvidia quadro p1000",
    "price": 91000,
    "category": "hp exuk workstation premium laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-510",
    "brand": "HP",
    "name": "hp zbook g4 i7 7th 16/512gb with 4gb nvidia quadro m1200",
    "specs": "hp zbook g4 i7 7th 16/512gb with 4gb nvidia quadro m1200",
    "price": 66500,
    "category": "hp exuk workstation premium laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-511",
    "brand": "HP",
    "name": "hp zbook 15 g3 i7 6th 16/512gb with 4gb nvidia Quadro m1200",
    "specs": "hp zbook 15 g3 i7 6th 16/512gb with 4gb nvidia Quadro m1200",
    "price": 58000,
    "category": "hp exuk workstation premium laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-512",
    "brand": "HP",
    "name": "hp zbook 14 firefly g7 mobile workstation 32/512gb with 4gb nvidia graphics touchscreen",
    "specs": "hp zbook 14 firefly g7 mobile workstation 32/512gb with 4gb nvidia graphics touchscreen",
    "price": 115500,
    "category": "hp exuk workstation premium laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-513",
    "brand": "HP",
    "name": "hp zbook 14u g6 i7 8th 16/512gb with 4gb AMD Radeon pro wx3200 graphics",
    "specs": "hp zbook 14u g6 i7 8th 16/512gb with 4gb AMD Radeon pro wx3200 graphics",
    "price": 74500,
    "category": "hp exuk workstation premium laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-514",
    "brand": "HP",
    "name": "hp zbook 14u i7 8/256gb with 4gb graphics",
    "specs": "hp zbook 14u i7 8/256gb with 4gb graphics",
    "price": 66500,
    "category": "hp exuk workstation premium laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-515",
    "brand": "HP",
    "name": "hp zbook 14u g5 i7 8th 16/512gb with 2gb AMD Radeon pro wx 3100",
    "specs": "hp zbook 14u g5 i7 8th 16/512gb with 2gb AMD Radeon pro wx 3100",
    "price": 66500,
    "category": "hp exuk workstation premium laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-516",
    "brand": "HP",
    "name": "hp 1040 g8 i7 11th 16/512gb",
    "specs": "hp 1040 g8 i7 11th 16/512gb",
    "price": 81500,
    "category": "hp exuk premium touchscreen laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-517",
    "brand": "HP",
    "name": "hp 1040 g7 i7 10th 16/512gb x360 touchscreen",
    "specs": "hp 1040 g7 i7 10th 16/512gb x360 touchscreen",
    "price": 74000,
    "category": "hp exuk premium touchscreen laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-518",
    "brand": "HP",
    "name": "hp 1040 g6 i7 8th 16/52gb x360 touchscreen",
    "specs": "hp 1040 g6 i7 8th 16/52gb x360 touchscreen",
    "price": 63500,
    "category": "hp exuk premium touchscreen laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-519",
    "brand": "HP",
    "name": "hp 1040 g5 i5 8th 16/512gb x360 touchscreen",
    "specs": "hp 1040 g5 i5 8th 16/512gb x360 touchscreen",
    "price": 54000,
    "category": "hp exuk premium touchscreen laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-520",
    "brand": "HP",
    "name": "hp 1040 g5 i5 8/256gb x360 touchscreen",
    "specs": "hp 1040 g5 i5 8/256gb x360 touchscreen",
    "price": 49000,
    "category": "hp exuk premium touchscreen laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-521",
    "brand": "HP",
    "name": "hp 1040 g3 i5 6th 16/256gb",
    "specs": "hp 1040 g3 i5 6th 16/256gb",
    "price": 36000,
    "category": "hp exuk premium touchscreen laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-522",
    "brand": "HP",
    "name": "hp 1040 g3 i5 6th 8/256gb",
    "specs": "hp 1040 g3 i5 6th 8/256gb",
    "price": 33500,
    "category": "hp exuk premium touchscreen laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-523",
    "brand": "HP",
    "name": "hp 1040 g3 i7 6th 16/512gb",
    "specs": "hp 1040 g3 i7 6th 16/512gb",
    "price": 37500,
    "category": "hp exuk premium touchscreen laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-524",
    "brand": "HP",
    "name": "hp 1030 g8 i7 11th 16/512gb x360 touchscreen",
    "specs": "hp 1030 g8 i7 11th 16/512gb x360 touchscreen",
    "price": 81500,
    "category": "hp exuk premium touchscreen laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-525",
    "brand": "HP",
    "name": "hp 1030 g8 i5 11th 16/512gb x360 touchscreen",
    "specs": "hp 1030 g8 i5 11th 16/512gb x360 touchscreen",
    "price": 74000,
    "category": "hp exuk premium touchscreen laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-526",
    "brand": "HP",
    "name": "hp 1030 g3 i7 16/512gb",
    "specs": "hp 1030 g3 i7 16/512gb",
    "price": 63500,
    "category": "hp exuk premium touchscreen laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-527",
    "brand": "HP",
    "name": "hp 1030 g3 i7 8th 16/256gb",
    "specs": "hp 1030 g3 i7 8th 16/256gb",
    "price": 59500,
    "category": "hp exuk premium touchscreen laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-528",
    "brand": "HP",
    "name": "hp 1030 g3 i7 8th 8/256gb",
    "specs": "hp 1030 g3 i7 8th 8/256gb",
    "price": 52000,
    "category": "hp exuk premium touchscreen laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-529",
    "brand": "HP",
    "name": "hp 1030 g3 i5 8th 16/512gb",
    "specs": "hp 1030 g3 i5 8th 16/512gb",
    "price": 54000,
    "category": "hp exuk premium touchscreen laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-530",
    "brand": "HP",
    "name": "hp 1030 g3 i5 8/256gb",
    "specs": "hp 1030 g3 i5 8/256gb",
    "price": 49000,
    "category": "hp exuk premium touchscreen laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-531",
    "brand": "HP",
    "name": "hp 1030 g2 i7 7th 8/256gb",
    "specs": "hp 1030 g2 i7 7th 8/256gb",
    "price": 50500,
    "category": "hp exuk premium touchscreen laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-532",
    "brand": "HP",
    "name": "hp 1030 g2 i5 16/256gb",
    "specs": "hp 1030 g2 i5 16/256gb",
    "price": 49000,
    "category": "hp exuk premium touchscreen laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-533",
    "brand": "HP",
    "name": "hp 1030 g2 i5 7th 8/256gb",
    "specs": "hp 1030 g2 i5 7th 8/256gb",
    "price": 46500,
    "category": "hp exuk premium touchscreen laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-534",
    "brand": "HP",
    "name": "hp 1020 g2 i5 7th 16/512gb x360 touchscreen",
    "specs": "hp 1020 g2 i5 7th 16/512gb x360 touchscreen",
    "price": 52000,
    "category": "hp exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-535",
    "brand": "HP",
    "name": "hp 1020 g2 i5 7th 8/256gb touchscreen",
    "specs": "hp 1020 g2 i5 7th 8/256gb touchscreen",
    "price": 45000,
    "category": "hp exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-536",
    "brand": "HP",
    "name": "hp elite x2 g4 i7 8th touchscreen",
    "specs": "hp elite x2 g4 i7 8th touchscreen",
    "price": 59500,
    "category": "hp exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-537",
    "brand": "HP",
    "name": "hp elite x2 g2 i5 7th 16/256gb",
    "specs": "hp elite x2 g2 i5 7th 16/256gb",
    "price": 48000,
    "category": "hp exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-538",
    "brand": "HP",
    "name": "hp 840 g10 i7 13th. 16/512gb",
    "specs": "hp 840 g10 i7 13th. 16/512gb",
    "price": 89000,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-539",
    "brand": "HP",
    "name": "hp 840 g9 i7 12th 16/512gb",
    "specs": "hp 840 g9 i7 12th 16/512gb",
    "price": 81500,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-540",
    "brand": "HP",
    "name": "hp 840 g8 i5 11th 8/256gb touchscreen",
    "specs": "hp 840 g8 i5 11th 8/256gb touchscreen",
    "price": 52000,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-541",
    "brand": "HP",
    "name": "hp 840 g8 i5 11th 8/256gb",
    "specs": "hp 840 g8 i5 11th 8/256gb",
    "price": 49000,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-542",
    "brand": "HP",
    "name": "hp 840 g7 i7 10th 8/256gb touchscreen",
    "specs": "hp 840 g7 i7 10th 8/256gb touchscreen",
    "price": 59500,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-543",
    "brand": "HP",
    "name": "hp 840 g7 i5 10th 8/256gb touchscreen",
    "specs": "hp 840 g7 i5 10th 8/256gb touchscreen",
    "price": 50500,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-544",
    "brand": "HP",
    "name": "hp 840 g7 i5 10th 8/256gb",
    "specs": "hp 840 g7 i5 10th 8/256gb",
    "price": 48000,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-545",
    "brand": "HP",
    "name": "hp 840 g5 i7 8th 8/256gb touchscreen",
    "specs": "hp 840 g5 i7 8th 8/256gb touchscreen",
    "price": 48000,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-546",
    "brand": "HP",
    "name": "hp 840 g5 i7 8th 8/256gb",
    "specs": "hp 840 g5 i7 8th 8/256gb",
    "price": 45000,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-547",
    "brand": "HP",
    "name": "hp 840 g5 i5 8th 8/256gb touchscreen",
    "specs": "hp 840 g5 i5 8th 8/256gb touchscreen",
    "price": 42000,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-548",
    "brand": "HP",
    "name": "hp 840 g5 i5 7th 8/256gb touchscreen",
    "specs": "hp 840 g5 i5 7th 8/256gb touchscreen",
    "price": 40500,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-549",
    "brand": "HP",
    "name": "hp 840 g5 i5 8th 8/256gb",
    "specs": "hp 840 g5 i5 8th 8/256gb",
    "price": 39000,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-550",
    "brand": "HP",
    "name": "hp 840 g5 i5 7th 8/256gb",
    "specs": "hp 840 g5 i5 7th 8/256gb",
    "price": 37500,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-551",
    "brand": "HP",
    "name": "hp 840 g2 i5 8/500gb",
    "specs": "hp 840 g2 i5 8/500gb",
    "price": 22500,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-552",
    "brand": "HP",
    "name": "hp 840 g1 i7 8/256gb",
    "specs": "hp 840 g1 i7 8/256gb",
    "price": 25000,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-553",
    "brand": "HP",
    "name": "hp 830 g8 i7 11th 32/512gb x360 touchscreen",
    "specs": "hp 830 g8 i7 11th 32/512gb x360 touchscreen",
    "price": 84500,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-554",
    "brand": "HP",
    "name": "hp 830 g8 i7 11th 16/512gb x360 touchscreen",
    "specs": "hp 830 g8 i7 11th 16/512gb x360 touchscreen",
    "price": 78500,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-555",
    "brand": "HP",
    "name": "hp 830 g8 i5 11th 16/256gb x360 touchscreen",
    "specs": "hp 830 g8 i5 11th 16/256gb x360 touchscreen",
    "price": 59500,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-556",
    "brand": "HP",
    "name": "hp 830 g8 i5 11th 8/256gb x360 touchscreen",
    "specs": "hp 830 g8 i5 11th 8/256gb x360 touchscreen",
    "price": 56500,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-557",
    "brand": "HP",
    "name": "hp 830 g8 i7 11th 8/256gb touchscreen",
    "specs": "hp 830 g8 i7 11th 8/256gb touchscreen",
    "price": 59500,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-558",
    "brand": "HP",
    "name": "hp 830 g8 i5 11th 8/256gb touchscreen",
    "specs": "hp 830 g8 i5 11th 8/256gb touchscreen",
    "price": 50500,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-559",
    "brand": "HP",
    "name": "hp 830 g8 i5 11th 8/256gb",
    "specs": "hp 830 g8 i5 11th 8/256gb",
    "price": 48000,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-560",
    "brand": "HP",
    "name": "hp 830 g7 i7 8/256gb touchscreen",
    "specs": "hp 830 g7 i7 8/256gb touchscreen",
    "price": 56500,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-561",
    "brand": "HP",
    "name": "hp 830 g7 i7 10th 8/256gb",
    "specs": "hp 830 g7 i7 10th 8/256gb",
    "price": 49000,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-562",
    "brand": "HP",
    "name": "hp 830 g7 i5 10th 8/256gb touchscreen",
    "specs": "hp 830 g7 i5 10th 8/256gb touchscreen",
    "price": 49000,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-563",
    "brand": "HP",
    "name": "hp 830 g7 i5 8/256gb",
    "specs": "hp 830 g7 i5 8/256gb",
    "price": 46500,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-564",
    "brand": "HP",
    "name": "hp 830 g6 i7 8th 16/512gb touchscreen",
    "specs": "hp 830 g6 i7 8th 16/512gb touchscreen",
    "price": 54000,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-565",
    "brand": "HP",
    "name": "hp 830 g5 i7 8th 8/256gb",
    "specs": "hp 830 g5 i7 8th 8/256gb",
    "price": 45000,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-566",
    "brand": "HP",
    "name": "hp 830 g5 i7 8th 8/256gb touchscreen",
    "specs": "hp 830 g5 i7 8th 8/256gb touchscreen",
    "price": 48000,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-567",
    "brand": "HP",
    "name": "hp 830 g6 i5 8/256gb touchscreen",
    "specs": "hp 830 g6 i5 8/256gb touchscreen",
    "price": 39000,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-568",
    "brand": "HP",
    "name": "hp 830 g5 i5 8th 8/256gb",
    "specs": "hp 830 g5 i5 8th 8/256gb",
    "price": 37500,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-569",
    "brand": "HP",
    "name": "hp 830 g7 i7 10th 8/256gb x360 touchscreen",
    "specs": "hp 830 g7 i7 10th 8/256gb x360 touchscreen",
    "price": 55500,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-570",
    "brand": "HP",
    "name": "hp 830 g6 i7 8th 8/256gb x360 touchscreen",
    "specs": "hp 830 g6 i7 8th 8/256gb x360 touchscreen",
    "price": 54000,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-571",
    "brand": "HP",
    "name": "hp 830 g6 i5 8th 8/256gb x360 touchscreen",
    "specs": "hp 830 g6 i5 8th 8/256gb x360 touchscreen",
    "price": 48000,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-572",
    "brand": "HP",
    "name": "hp 450 g8 i5 11th 8/256gb",
    "specs": "hp 450 g8 i5 11th 8/256gb",
    "price": 52000,
    "category": "hp exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-573",
    "brand": "HP",
    "name": "hp 850 g8 i5 11th 8/256gb touchscreen",
    "specs": "hp 850 g8 i5 11th 8/256gb touchscreen",
    "price": 62500,
    "category": "hp exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-574",
    "brand": "HP",
    "name": "hp 850 g8 i5 11th 8/256gb",
    "specs": "hp 850 g8 i5 11th 8/256gb",
    "price": 59500,
    "category": "hp exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-575",
    "brand": "HP",
    "name": "hp 850 g7 i5 10th 8/256gb",
    "specs": "hp 850 g7 i5 10th 8/256gb",
    "price": 52000,
    "category": "hp exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-576",
    "brand": "HP",
    "name": "Hp 850 G5 I5 8th 8/256",
    "specs": "Hp 850 G5 I5 8th 8/256",
    "price": 45000,
    "category": "hp exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-577",
    "brand": "HP",
    "name": "hp dreagonfly i5 8th 16/512gb",
    "specs": "hp dreagonfly i5 8th 16/512gb",
    "price": 67000,
    "category": "hp exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-578",
    "brand": "HP",
    "name": "hp 845 g7 ryzen ryzen 7 8/256gb",
    "specs": "hp 845 g7 ryzen ryzen 7 8/256gb",
    "price": 45000,
    "category": "hp exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-579",
    "brand": "HP",
    "name": "hp 835 g8 ryzen 7. 8/256gb",
    "specs": "hp 835 g8 ryzen 7. 8/256gb",
    "price": 48000,
    "category": "hp exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-580",
    "brand": "HP",
    "name": "Hp 745 G6 Ryzen 7 8/256 2gb graphics",
    "specs": "Hp 745 G6 Ryzen 7 8/256 2gb graphics",
    "price": 46500,
    "category": "hp exuk workstation premium laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-581",
    "brand": "HP",
    "name": "Hp 745 Ryzen 5 8/256 touchscreen 2gb graphics",
    "specs": "Hp 745 Ryzen 5 8/256 touchscreen 2gb graphics",
    "price": 45500,
    "category": "hp exuk workstation premium laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-582",
    "brand": "HP",
    "name": "hp 745 g6 ryzen 5 nontouch 8/256gb",
    "specs": "hp 745 g6 ryzen 5 nontouch 8/256gb",
    "price": 37500,
    "category": "hp exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-583",
    "brand": "HP",
    "name": "hp 735 g6 ryzen 7 8/256gb 2gb graphics",
    "specs": "hp 735 g6 ryzen 7 8/256gb 2gb graphics",
    "price": 46500,
    "category": "hp exuk workstation premium laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-584",
    "brand": "HP",
    "name": "hp 640 g9 i5 12th 8/256gb",
    "specs": "hp 640 g9 i5 12th 8/256gb",
    "price": 59500,
    "category": "hp exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-585",
    "brand": "HP",
    "name": "hp probook 630 g8 i5 11th 8/256gb touchscreen",
    "specs": "hp probook 630 g8 i5 11th 8/256gb touchscreen",
    "price": 52000,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-586",
    "brand": "HP",
    "name": "hp probook 430 g7 i5 10th 8/256gb",
    "specs": "hp probook 430 g7 i5 10th 8/256gb",
    "price": 45000,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-587",
    "brand": "HP",
    "name": "hp probook 430 g5 i5 8th 8/256gb",
    "specs": "hp probook 430 g5 i5 8th 8/256gb",
    "price": 34500,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-588",
    "brand": "HP",
    "name": "hp probook g4 i5 8th 8/256gb x360 touchscreen",
    "specs": "hp probook g4 i5 8th 8/256gb x360 touchscreen",
    "price": 34500,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-589",
    "brand": "HP",
    "name": "hp probook g2 i5 7th 8/256gb x360 touchscreen",
    "specs": "hp probook g2 i5 7th 8/256gb x360 touchscreen",
    "price": 29500,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-590",
    "brand": "HP",
    "name": "hp probook 440 g1 i5 7th 8/256gb touchscreen",
    "specs": "hp probook 440 g1 i5 7th 8/256gb touchscreen",
    "price": 37500,
    "category": "hp exuk student business laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-591",
    "brand": "HP",
    "name": "hp folio 9470 i7 4th 8/500gb",
    "specs": "hp folio 9470 i7 4th 8/500gb",
    "price": 25000,
    "category": "hp exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-592",
    "brand": "HP",
    "name": "hp folio 9480 i5 5th 8/500gb",
    "specs": "hp folio 9480 i5 5th 8/500gb",
    "price": 23500,
    "category": "hp exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-593",
    "brand": "HP",
    "name": "hp stream celeron 4/32gb",
    "specs": "hp stream celeron 4/32gb",
    "price": 14000,
    "category": "hp exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-594",
    "brand": "HP",
    "name": "hp stream celeron 2/32gb",
    "specs": "hp stream celeron 2/32gb",
    "price": 13500,
    "category": "hp exuk laptop",
    "badge": "ex-uk",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-745g6-r5",
    "brand": "HP",
    "name": "HP EliteBook 745 G6 Ryzen 5",
    "specs": "Ryzen 5 \u2022 16GB RAM \u2022 256GB SSD \u2022 Touchscreen",
    "price": 35500,
    "category": "exuk business hp laptop",
    "badge": "restocked",
    "img": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=800"
  },
  {
    "id": "hp-640g5-i5",
    "brand": "HP",
    "name": "HP ProBook 640 G5",
    "specs": "i5 8th Gen \u2022 16GB RAM \u2022 256GB SSD",
    "price": 33500,
    "category": "exuk business hp laptop",
    "badge": "restocked",
    "img": "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=800"
  },
  {
    "id": "hp-840g6-i5",
    "brand": "HP",
    "name": "HP EliteBook 840 G6 i5",
    "specs": "i5 8th Gen \u2022 8GB RAM \u2022 256GB SSD",
    "price": 33500,
    "category": "exuk business hp laptop",
    "badge": "restocked",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "dell-7390-x360",
    "brand": "Dell",
    "name": "Dell Latitude 7390 x360",
    "specs": "i5 8th Gen \u2022 8GB RAM \u2022 256GB SSD \u2022 Touchscreen",
    "price": 32500,
    "category": "exuk business dell laptop",
    "badge": "restocked",
    "img": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=800"
  },
  {
    "id": "dell-3420-i5",
    "brand": "Dell",
    "name": "Dell Latitude 3420",
    "specs": "i5 11th Gen \u2022 8GB RAM \u2022 256GB SSD",
    "price": 36500,
    "category": "exuk business dell laptop",
    "badge": "restocked",
    "img": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=800"
  },
  {
    "id": "dell-5410-i5",
    "brand": "Dell",
    "name": "Dell Latitude 5410",
    "specs": "i5 10th Gen \u2022 16GB RAM \u2022 512GB SSD",
    "price": 36500,
    "category": "exuk business dell laptop",
    "badge": "restocked",
    "img": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=800"
  },
  {
    "id": "dell-7420-i5",
    "brand": "Dell",
    "name": "Dell Latitude 7420",
    "specs": "i5 11th Gen \u2022 16GB RAM \u2022 256GB SSD",
    "price": 36500,
    "category": "exuk business dell laptop",
    "badge": "restocked",
    "img": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=800"
  },
  {
    "id": "hp-820g1-i7",
    "brand": "HP",
    "name": "HP EliteBook 820 G1 i7",
    "specs": "i7 4th Gen \u2022 8GB RAM \u2022 128GB SSD \u2022 Touchscreen",
    "price": 27000,
    "category": "exuk business hp laptop",
    "badge": "restocked",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-850g6-i5",
    "brand": "HP",
    "name": "HP EliteBook 850 G6",
    "specs": "i5 8th Gen \u2022 8GB RAM \u2022 256GB SSD",
    "price": 33500,
    "category": "exuk business hp laptop",
    "badge": "restocked",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-pb11g10-i5",
    "brand": "HP",
    "name": "HP ProBook 11 G10",
    "specs": "i5 12th Gen \u2022 8GB RAM \u2022 256GB SSD",
    "price": 32500,
    "category": "exuk business hp laptop",
    "badge": "restocked",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "len-e580-i3",
    "brand": "Lenovo",
    "name": "Lenovo Thinkpad E580",
    "specs": "i3 8th Gen \u2022 8GB RAM \u2022 256GB SSD",
    "price": 31500,
    "category": "exuk business lenovo laptop",
    "badge": "restocked",
    "img": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=800"
  },
  {
    "id": "hp-x2-g8-i5",
    "brand": "HP",
    "name": "HP Elite x2 G8",
    "specs": "i5 11th Gen \u2022 8GB RAM \u2022 256GB SSD",
    "price": 42000,
    "category": "exuk business hp laptop",
    "badge": "restocked",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-840g6-i7-touch",
    "brand": "HP",
    "name": "HP EliteBook 840 G6 i7 Touch",
    "specs": "i7 8th Gen \u2022 8GB RAM \u2022 256GB SSD \u2022 Touchscreen",
    "price": 43000,
    "category": "exuk business hp laptop",
    "badge": "restocked",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-840g6-i7",
    "brand": "HP",
    "name": "HP EliteBook 840 G6 i7",
    "specs": "i7 8th Gen \u2022 8GB RAM \u2022 256GB SSD",
    "price": 38500,
    "category": "exuk business hp laptop",
    "badge": "restocked",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-840g8-i5",
    "brand": "HP",
    "name": "HP EliteBook 840 G8",
    "specs": "i5 11th Gen \u2022 16GB RAM \u2022 256GB SSD",
    "price": 44000,
    "category": "exuk business hp laptop",
    "badge": "restocked",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-zbook-ff14-g7",
    "brand": "HP",
    "name": "HP ZBook Firefly 14 G7 i7 Touch",
    "specs": "i7 10th Gen \u2022 16GB RAM \u2022 256GB SSD \u2022 Touchscreen",
    "price": 53500,
    "category": "exuk workstation hp laptop",
    "badge": "workstation",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-aio-800g5-i5",
    "brand": "HP",
    "name": "HP EliteOne 800 G5 All-in-One",
    "specs": "i5 9th Gen \u2022 16GB RAM \u2022 256GB SSD \u2022 24\" Display",
    "price": 66000,
    "category": "exuk desktop hp laptop",
    "badge": "all-in-one",
    "img": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800"
  },
  {
    "id": "hp-aio-800g4-i5",
    "brand": "HP",
    "name": "HP EliteOne 800 G4 All-in-One",
    "specs": "i5 8th Gen \u2022 16GB RAM \u2022 256GB SSD \u2022 24\" Display",
    "price": 59500,
    "category": "exuk desktop hp laptop",
    "badge": "all-in-one",
    "img": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800"
  },
  {
    "id": "hp-1040g8-i7-32",
    "brand": "HP",
    "name": "HP EliteBook 1040 G8 i7 x360",
    "specs": "i7 11th Gen \u2022 32GB RAM \u2022 512GB SSD \u2022 Touchscreen",
    "price": 80000,
    "category": "exuk business hp laptop",
    "badge": "premium",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-1040g8-i7-16",
    "brand": "HP",
    "name": "HP EliteBook 1040 G8 i7 x360",
    "specs": "i7 11th Gen \u2022 16GB RAM \u2022 512GB SSD \u2022 Touchscreen",
    "price": 73000,
    "category": "exuk business hp laptop",
    "badge": "premium",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-1040g7-i7",
    "brand": "HP",
    "name": "HP EliteBook 1040 G7 i7 x360",
    "specs": "i7 10th Gen \u2022 16GB RAM \u2022 512GB SSD \u2022 Touchscreen",
    "price": 66000,
    "category": "exuk business hp laptop",
    "badge": "premium",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-1030g8-i7",
    "brand": "HP",
    "name": "HP EliteBook 1030 G8 i7 x360",
    "specs": "i7 11th Gen \u2022 16GB RAM \u2022 512GB SSD \u2022 Touchscreen",
    "price": 69000,
    "category": "exuk business hp laptop",
    "badge": "premium",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-1030g7-i7",
    "brand": "HP",
    "name": "HP EliteBook 1030 G7 i7 x360",
    "specs": "i7 10th Gen \u2022 16GB RAM \u2022 512GB SSD \u2022 Touchscreen",
    "price": 64500,
    "category": "exuk business hp laptop",
    "badge": "premium",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "hp-zbook-15g7-32",
    "brand": "HP",
    "name": "HP ZBook 15 G7 Workstation",
    "specs": "i7 10th Gen \u2022 32GB RAM \u2022 512GB SSD \u2022 4GB Graphics",
    "price": 90000,
    "category": "exuk workstation hp laptop",
    "badge": "workstation",
    "img": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=800"
  },
  {
    "id": "hp-zbook-15g7-16",
    "brand": "HP",
    "name": "HP ZBook 15 G7 Workstation",
    "specs": "i7 10th Gen \u2022 16GB RAM \u2022 512GB SSD \u2022 4GB Graphics",
    "price": 88000,
    "category": "exuk workstation hp laptop",
    "badge": "workstation",
    "img": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=800"
  },
  {
    "id": "hp-850g8-i7",
    "brand": "HP",
    "name": "HP EliteBook 850 G8",
    "specs": "i7 11th Gen \u2022 16GB RAM \u2022 512GB SSD \u2022 2GB Graphics",
    "price": 68000,
    "category": "exuk business hp laptop",
    "badge": "premium",
    "img": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800"
  },
  {
    "id": "len-legion5-14th",
    "brand": "Lenovo",
    "name": "Lenovo Legion 5 Gaming",
    "specs": "i7 14th Gen \u2022 32GB RAM \u2022 1TB SSD \u2022 RTX 4070 8GB",
    "price": 323000,
    "category": "gaming lenovo laptop",
    "badge": "new-arrival",
    "img": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=800"
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
      // badgeHTML += `<div class="gift-badge" style="position: absolute; top: 35px; left: 10px; background: #28a745; color: white; padding: 4px 8px; font-size: 0.65rem; font-weight: 800; border-radius: 4px; z-index: 10; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">+ FREE BAG & MOUSE 🎁</div>`;
    }

    if (isFlash) {
      const offerPrice = Math.round(p.price * 0.9);
      priceHTML = `
        <div class="product-price-old" style="text-decoration: line-through; color: #888; font-size: 0.85rem;">KES ${p.price.toLocaleString()}</div>
        <div class="product-price" style="color: #e63946;">KES ${offerPrice.toLocaleString()} ${isLaptop ? '<span style="font-size:0.7rem; color:#28a745; font-weight:900; margin-left:5px;">💼🖱️</span>' : ''}</div>
      `;
      badgeHTML += `<div class="flash-badge" style="position: absolute; top: 10px; right: 10px; background: #e63946; color: white; padding: 4px 8px; font-size: 0.7rem; font-weight: 800; border-radius: 4px; animation: pulse 2s infinite;">10% OFF</div>`;
    } else {
      priceHTML = `<div class="product-price">KES ${p.price.toLocaleString()} ${isLaptop ? '<span style="font-size:0.7rem; color:#28a745; font-weight:900; margin-left:5px;">💼🖱️</span>' : ''}</div>`;
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
    if (newPriceEl) newPriceEl.innerText = `KES ${Math.round(p.price * 0.9).toLocaleString()}`;
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
    const p = ALL_PRODUCTS[dateSeed % ALL_PRODUCTS.length];
    
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
