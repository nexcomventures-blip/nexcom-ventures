const ALL_PRODUCTS = [
  {
    "id": "feat-1",
    "brand": "Apple",
    "name": "Macbook Pro 13 2015 I5 16/512Gb",
    "specs": "macbook pro 13  2015 i5 16/512gb",
    "price": 43000,
    "category": "exuk apple macbook featured",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Pro+13+2015+I5+16/512Gb"
  },
  {
    "id": "feat-2",
    "brand": "Apple",
    "name": "Macbook Pro 13 2019 I5 16/256Gb",
    "specs": "macbook pro 13 2019 i5 16/256gb",
    "price": 55000,
    "category": "exuk apple macbook featured",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Pro+13+2019+I5+16/256Gb"
  },
  {
    "id": "feat-3",
    "brand": "HP",
    "name": "Hp 830 G6 I7 8Th 8/256Gb x360 Touchscreen",
    "specs": "hp 830 g6 i7 8th 8/256gb\nx360 touchscreen",
    "price": 42499,
    "category": "exuk business hp featured",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Hp+830+G6+I7+8Th+8/256Gb+x360+Touchscreen"
  },
  {
    "id": "feat-4",
    "brand": "Apple",
    "name": "Macbook Pro 13 2015 I7 8/256Gb",
    "specs": "macbook pro 13 2015 i7 8/256gb",
    "price": 41000,
    "category": "exuk apple macbook featured",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Pro+13+2015+I7+8/256Gb"
  },
  {
    "id": "tmp-4959",
    "brand": "Lenovo",
    "name": "Lenovo X1 Carbon I7 8Th 16/512Gb.",
    "specs": "x1 carbon i7 8th 16/512gb.",
    "price": 35000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x1+carbon+i7+8th"
  },
  {
    "id": "tmp-1487",
    "brand": "Dell",
    "name": "Dell 5320 I7 11Th 16/512Gb Touchscreen",
    "specs": "5320 i7 11th 16/512gb touchscreen",
    "price": 40000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+5320+i7+11th+16/512gb"
  },
  {
    "id": "tmp-8197",
    "brand": "Lenovo",
    "name": "Lenovo X13 I7 10Th 16/512Gb",
    "specs": "x13 i7 10th 16/512gb",
    "price": 32000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x13+i7+10th+16/512gb"
  },
  {
    "id": "tmp-7830",
    "brand": "Dell",
    "name": "Dell Xps 15 9570 I7 8Th 16/512Gb 4Gb Graphics",
    "specs": "xps 15 9570 i7 8th 16/512gb 4gb Graphics",
    "price": 50000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+xps+15+9570+i7"
  },
  {
    "id": "tmp-9150",
    "brand": "Dell",
    "name": "Dell Xps 13 9305 I7 11Th 16/512Gb",
    "specs": "xps 13 9305 i7 11th 16/512gb",
    "price": 60000,
    "category": "exuk business dell",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Dell+xps+13+9305+i7"
  },
  {
    "id": "tmp-8284",
    "brand": "Lenovo",
    "name": "Lenovo X390 I5 8Th 8/256Gb",
    "specs": "x390 i5 8th 8/256gb",
    "price": 22000,
    "category": "exuk business lenovo",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Lenovo+x390+i5+8th+8/256gb"
  },
  {
    "id": "hp-hp-850-g7-i7-10th-16/512gb",
    "brand": "HP",
    "name": "Hp 850 G7 I7 10Th 16/512Gb",
    "specs": "hp 850 g7 i7 10th 16/512gb",
    "price": 53499,
    "category": "exuk business hp",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Hp+850+G7+I7+10Th+16/512Gb"
  },
  {
    "id": "hp-hp-840-g10-i7-13th-16/512gb",
    "brand": "HP",
    "name": "Hp 840 G10 I7 13Th 16/512Gb",
    "specs": "hp 840 g10 i7 13th 16/512gb",
    "price": 68499,
    "category": "exuk business hp",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Hp+840+G10+I7+13Th+16/512Gb"
  },
  {
    "id": "hp-hp-840-g8-i5-11th-8/256gb",
    "brand": "HP",
    "name": "Hp 840 G8 I5 11Th 8/256Gb",
    "specs": "hp 840 g8 i5 11th 8/256gb",
    "price": 40499,
    "category": "exuk business hp",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Hp+840+G8+I5+11Th+8/256Gb"
  },
  {
    "id": "hp-hp-840-g7-i7-10th-8/256gb-touchscreen",
    "brand": "HP",
    "name": "Hp 840 G7 I7 10Th 8/256Gb Touchscreen",
    "specs": "hp 840 g7  i7 10th 8/256gb\ntouchscreen",
    "price": 45499,
    "category": "exuk business hp",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Hp+840+G7+I7+10Th+8/256Gb+Touchscreen"
  },
  {
    "id": "hp-hp-840-g7-i5-8/256gb-touchscreen",
    "brand": "HP",
    "name": "Hp 840 G7 I5 8/256Gb Touchscreen",
    "specs": "hp 840 g7 i5 8/256gb \ntouchscreen",
    "price": 40499,
    "category": "exuk business hp",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Hp+840+G7+I5+8/256Gb+Touchscreen"
  },
  {
    "id": "hp-hp-840-g7-i5-10th-8/256gb",
    "brand": "HP",
    "name": "Hp 840 G7 I5 10Th 8/256Gb",
    "specs": "hp 840 g7 i5 10th 8/256gb",
    "price": 35499,
    "category": "exuk business hp",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Hp+840+G7+I5+10Th+8/256Gb"
  },
  {
    "id": "hp-hp-840-g5-i7-8/256gb-touchscreen",
    "brand": "HP",
    "name": "Hp 840 G5 I7 8/256Gb Touchscreen",
    "specs": "hp 840 g5 i7 8/256gb\ntouchscreen",
    "price": 35499,
    "category": "exuk business hp",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Hp+840+G5+I7+8/256Gb+Touchscreen"
  },
  {
    "id": "hp-hp-840-g5-i7-8th-8/256gb",
    "brand": "HP",
    "name": "Hp 840 G5 I7 8Th 8/256Gb",
    "specs": "hp 840 g5 i7 8th 8/256gb",
    "price": 33499,
    "category": "exuk business hp",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Hp+840+G5+I7+8Th+8/256Gb"
  },
  {
    "id": "hp-hp-840-g6-i5-8/256gb",
    "brand": "HP",
    "name": "Hp 840 G6 I5 8/256Gb",
    "specs": "hp 840 g6 i5 8/256gb",
    "price": 30499,
    "category": "exuk business hp",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Hp+840+G6+I5+8/256Gb"
  },
  {
    "id": "hp-hp-840-g5-i5-8th-8/256gb-touchscreen",
    "brand": "HP",
    "name": "Hp 840 G5 I5 8Th 8/256Gb Touchscreen",
    "specs": "hp 840 g5 i5 8th 8/256gb\ntouchscreen",
    "price": 32499,
    "category": "exuk business hp",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Hp+840+G5+I5+8Th+8/256Gb+Touchscreen"
  },
  {
    "id": "hp-hp-840-g5-i5-7th-8/256gb-touchscreen",
    "brand": "HP",
    "name": "Hp 840 G5 I5 7Th 8/256Gb Touchscreen",
    "specs": "hp 840 g5 i5 7th 8/256gb \ntouchscreen",
    "price": 31499,
    "category": "exuk business hp",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Hp+840+G5+I5+7Th+8/256Gb+Touchscreen"
  },
  {
    "id": "hp-hp-840-g1-i5-8/256gb",
    "brand": "HP",
    "name": "Hp 840 G1 I5 8/256Gb",
    "specs": "hp 840 g1  i5 8/256gb",
    "price": 21499,
    "category": "exuk business hp budget",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Hp+840+G1+I5+8/256Gb"
  },
  {
    "id": "hp-hp-840-g1-i7-8/256gb",
    "brand": "HP",
    "name": "Hp 840 G1 I7 8/256Gb",
    "specs": "hp 840 g1 i7 8/256gb",
    "price": 22499,
    "category": "exuk business hp budget",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Hp+840+G1+I7+8/256Gb"
  },
  {
    "id": "hp-hp-820-g1-i7-8/256gb",
    "brand": "HP",
    "name": "Hp 820 G1 I7 8/256Gb",
    "specs": "hp 820 g1   i7 8/256gb",
    "price": 21999,
    "category": "exuk business hp budget",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Hp+820+G1+I7+8/256Gb"
  },
  {
    "id": "hp-hp-820-g2-i7-8/256gb",
    "brand": "HP",
    "name": "Hp 820 G2 I7 8/256Gb",
    "specs": "hp 820 g2 i7 8/256gb",
    "price": 22499,
    "category": "exuk business hp budget",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Hp+820+G2+I7+8/256Gb"
  },
  {
    "id": "hp-hp-830-g8-i7-11th-16/512gb-x360-touchscreen",
    "brand": "HP",
    "name": "Hp 830 G8 I7 11Th 16/512Gb x360 Touchscreen",
    "specs": "hp 830 g8 i7 11th 16/512gb\nx360 touchscreen",
    "price": 61499,
    "category": "exuk business hp",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Hp+830+G8+I7+11Th+16/512Gb+x360+Touchscreen"
  },
  {
    "id": "hp-hp-830-g8-i5-11th-16/512gb-x360-touchscreen",
    "brand": "HP",
    "name": "Hp 830 G8 I5 11Th 16/512Gb x360 Touchscreen",
    "specs": "hp 830 g8 i5 11th  16/512gb \nx360 touchscreen",
    "price": 53499,
    "category": "exuk business hp",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Hp+830+G8+I5+11Th+16/512Gb+x360+Touchscreen"
  },
  {
    "id": "hp-hp-830-g8-i7-11th-8/256gb-touchscreen",
    "brand": "HP",
    "name": "Hp 830 G8 I7 11Th 8/256Gb Touchscreen",
    "specs": "hp 830 g8 i7 11th 8/256gb touchscreen",
    "price": 48499,
    "category": "exuk business hp",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Hp+830+G8+I7+11Th+8/256Gb+Touchscreen"
  },
  {
    "id": "hp-hp-830-g8-i5-11th-8/256gb-touchscreen",
    "brand": "HP",
    "name": "Hp 830 G8 I5 11Th 8/256Gb Touchscreen",
    "specs": "hp 830 g8 i5 11th 8/256gb\ntouchscreen",
    "price": 42499,
    "category": "exuk business hp",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Hp+830+G8+I5+11Th+8/256Gb+Touchscreen"
  },
  {
    "id": "hp-hp-830-g8-i5-11th-8/256gb",
    "brand": "HP",
    "name": "Hp 830 G8 I5 11Th 8/256Gb",
    "specs": "hp 830 g8 i5 11th 8/256gb",
    "price": 40499,
    "category": "exuk business hp",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Hp+830+G8+I5+11Th+8/256Gb"
  },
  {
    "id": "hp-hp-830-g7-i7-11th-8/256gb-touchscreen",
    "brand": "HP",
    "name": "Hp 830 G7 I7 11Th 8/256Gb Touchscreen",
    "specs": "hp 830 g7 i7 11th 8/256gb\ntouchscreen",
    "price": 43499,
    "category": "exuk business hp",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Hp+830+G7+I7+11Th+8/256Gb+Touchscreen"
  },
  {
    "id": "hp-hp-830-g7-i5-10th-8/256gb",
    "brand": "HP",
    "name": "Hp 830 G7 I5 10Th 8/256Gb",
    "specs": "hp 830 g7 i5 10th 8/256gb",
    "price": 40499,
    "category": "exuk business hp",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Hp+830+G7+I5+10Th+8/256Gb"
  },
  {
    "id": "hp-hp-830-g7-i5-10th-8/256gb-touchscreen",
    "brand": "HP",
    "name": "Hp 830 G7 I5 10Th 8/256Gb Touchscreen",
    "specs": "hp 830 g7 i5 10th 8/256gb\ntouchscreen",
    "price": 40499,
    "category": "exuk business hp",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Hp+830+G7+I5+10Th+8/256Gb+Touchscreen"
  },
  {
    "id": "hp-hp-830-g7-i5-10th-8/256gb",
    "brand": "HP",
    "name": "Hp 830 G7 I5 10Th 8/256Gb",
    "specs": "hp 830 g7 i5 10th 8/256gb",
    "price": 35499,
    "category": "exuk business hp",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Hp+830+G7+I5+10Th+8/256Gb"
  },
  {
    "id": "hp-hp-830-g6-i7-8th-16/512gb-touchscreen",
    "brand": "HP",
    "name": "Hp 830 G6 I7 8Th 16/512Gb Touchscreen",
    "specs": "hp 830 g6 i7 8th 16/512gb\ntouchscreen",
    "price": 44499,
    "category": "exuk business hp",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Hp+830+G6+I7+8Th+16/512Gb+Touchscreen"
  },
  {
    "id": "hp-hp-830-g6-i7-8th-8/256gb-touchscreen",
    "brand": "HP",
    "name": "Hp 830 G6 I7 8Th 8/256Gb Touchscreen",
    "specs": "hp 830 g6 i7 8th 8/256gb\ntouchscreen",
    "price": 35499,
    "category": "exuk business hp",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Hp+830+G6+I7+8Th+8/256Gb+Touchscreen"
  },
  {
    "id": "hp-hp-830-g6-i7-8th-8/256gb",
    "brand": "HP",
    "name": "Hp 830 G6 I7 8Th 8/256Gb",
    "specs": "hp 830 g6 i7 8th 8/256gb",
    "price": 32499,
    "category": "exuk business hp",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Hp+830+G6+I7+8Th+8/256Gb"
  },
  {
    "id": "hp-hp-830-g6-i5-8th-8/256gb-touchscreen",
    "brand": "HP",
    "name": "Hp 830 G6 I5 8Th 8/256Gb Touchscreen",
    "specs": "hp 830 g6 i5 8th 8/256gb touchscreen",
    "price": 31499,
    "category": "exuk business hp",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Hp+830+G6+I5+8Th+8/256Gb+Touchscreen"
  },
  {
    "id": "hp-hp-830-g6-i5-8/256gb",
    "brand": "HP",
    "name": "Hp 830 G6 I5 8/256Gb",
    "specs": "hp 830 g6 i5 8/256gb",
    "price": 29499,
    "category": "exuk business hp budget",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Hp+830+G6+I5+8/256Gb"
  },
  {
    "id": "hp-hp-830-g6-i5-8th-16/512gb-x360-touchscreen",
    "brand": "HP",
    "name": "Hp 830 G6 I5 8Th 16/512Gb x360 Touchscreen",
    "specs": "hp 830 g6 i5 8th 16/512gb\nx360 touchscreen",
    "price": 44499,
    "category": "exuk business hp",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Hp+830+G6+I5+8Th+16/512Gb+x360+Touchscreen"
  },
  {
    "id": "hp-hp-835-g8-ryzen-7-8/256gb",
    "brand": "HP",
    "name": "Hp 835 G8 Ryzen 7 8/256Gb",
    "specs": "hp 835 g8 ryzen 7 8/256gb",
    "price": 40499,
    "category": "exuk business hp ryzen",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Hp+835+G8+Ryzen+7+8/256Gb"
  },
  {
    "id": "hp-hp-845-g7-ryzen-7-8/256gb",
    "brand": "HP",
    "name": "Hp 845 G7 Ryzen 7 8/256Gb",
    "specs": "hp 845 g7 ryzen 7 8/256gb",
    "price": 35499,
    "category": "exuk business hp ryzen",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Hp+845+G7+Ryzen+7+8/256Gb"
  },
  {
    "id": "hp-hp-735-g6-ryzen-7-8/256gb-2gb-graphics-touchscreen",
    "brand": "HP",
    "name": "Hp 735 G6 Ryzen 7 8/256Gb 2Gb Graphics Touchscreen",
    "specs": "hp 735 g6 ryzen 7 8/256gb 2gb graphics touchscreen",
    "price": 31499,
    "category": "exuk business hp ryzen",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Hp+735+G6+Ryzen+7+8/256Gb+2Gb+Graphics+Touchscreen"
  },
  {
    "id": "hp-hp-745-ryzen-5-8/256gb-2gb-graphics-touchscreen",
    "brand": "HP",
    "name": "Hp 745 Ryzen 5 8/256Gb 2Gb Graphics Touchscreen",
    "specs": "hp 745 ryzen 5 8/256gb 2gb graphics touchscreen",
    "price": 31499,
    "category": "exuk business hp ryzen",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Hp+745+Ryzen+5+8/256Gb+2Gb+Graphics+Touchscreen"
  },
  {
    "id": "apple-macbook-pro-16-m1-2021-32/512gb",
    "brand": "Apple",
    "name": "Macbook Pro 16 M1 2021 32/512Gb",
    "specs": "macbook pro 16 m1 2021 32/512gb",
    "price": 155000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Pro+16+M1+2021+32/512Gb"
  },
  {
    "id": "apple-macbook-pro-16-i9-32/2tb-with-8gb-graphics",
    "brand": "Apple",
    "name": "Macbook Pro 16 I9 32/2Tb With 8Gb Graphics",
    "specs": "macbook pro 16 i9 32/2tb \nwith 8gb graphics",
    "price": 103000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Pro+16+I9+32/2Tb+With+8Gb+Graphics"
  },
  {
    "id": "apple-macbook-pro-16-2019-i9-32/1tb-with-4gn-graphics",
    "brand": "Apple",
    "name": "Macbook Pro 16 2019 I9 32/1Tb With 4Gn Graphics",
    "specs": "macbook pro 16 2019 i9 32/1tb \nwith 4gn graphics",
    "price": 98000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Pro+16+2019+I9+32/1Tb+With+4Gn+Graphics"
  },
  {
    "id": "apple-macbook-pro-16-2019-i7-4gb-graphics-32/512gb",
    "brand": "Apple",
    "name": "Macbook Pro 16 2019 I7 4Gb Graphics 32/512Gb",
    "specs": "macbook pro 16 2019 i7 4gb graphics 32/512gb",
    "price": 83000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Pro+16+2019+I7+4Gb+Graphics+32/512Gb"
  },
  {
    "id": "apple-macbook-pro-15-2019-i7-16/512gb-4gb-graphics",
    "brand": "Apple",
    "name": "Macbook Pro 15 2019 I7 16/512Gb 4Gb Graphics",
    "specs": "macbook pro 15 2019 i7 16/512gb 4gb graphics",
    "price": 68000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Pro+15+2019+I7+16/512Gb+4Gb+Graphics"
  },
  {
    "id": "apple-macbook-pro-15-2018-i7-16/512gb-4gb-graphics",
    "brand": "Apple",
    "name": "Macbook Pro 15 2018 I7 16/512Gb 4Gb Graphics",
    "specs": "macbook pro 15 2018 i7 16/512gb 4gb graphics",
    "price": 63000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Pro+15+2018+I7+16/512Gb+4Gb+Graphics"
  },
  {
    "id": "apple-macbook-pro-15-2017-i7-16/512gb-4gb-graphics",
    "brand": "Apple",
    "name": "Macbook Pro 15 2017 I7 16/512Gb 4Gb Graphics",
    "specs": "macbook pro 15 2017 i7 16/512gb 4gb graphics",
    "price": 61000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Pro+15+2017+I7+16/512Gb+4Gb+Graphics"
  },
  {
    "id": "apple-macbook-pro-15-2017-i7-16/512gb-2gb-graphics",
    "brand": "Apple",
    "name": "Macbook Pro 15 2017 I7 16/512Gb 2Gb Graphics",
    "specs": "macbook pro 15 2017 i7 16/512gb 2gb graphics",
    "price": 58000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Pro+15+2017+I7+16/512Gb+2Gb+Graphics"
  },
  {
    "id": "apple-macbook-pro-15-2015-i7-16/512gb-2gb-graphics",
    "brand": "Apple",
    "name": "Macbook Pro 15 2015 I7 16/512Gb 2Gb Graphics",
    "specs": "macbook pro 15 2015 i7 16/512gb 2gb graphics",
    "price": 46000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Pro+15+2015+I7+16/512Gb+2Gb+Graphics"
  },
  {
    "id": "apple-macbook-pro-13-i7-2020-16/1tb",
    "brand": "Apple",
    "name": "Macbook Pro 13 I7 2020 16/1Tb",
    "specs": "macbook pro 13 i7 2020 16/1tb",
    "price": 83000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Pro+13+I7+2020+16/1Tb"
  },
  {
    "id": "apple-macbook-pro-13-i7-2020-32/512gb",
    "brand": "Apple",
    "name": "Macbook Pro 13 I7 2020 32/512Gb",
    "specs": "macbook pro 13 i7 2020 32/512gb",
    "price": 83000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Pro+13+I7+2020+32/512Gb"
  },
  {
    "id": "apple-macbook-pro-13-i7-2020-16/512gb",
    "brand": "Apple",
    "name": "Macbook Pro 13 I7 2020 16/512Gb",
    "specs": "macbook pro 13 i7 2020 16/512gb",
    "price": 78000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Pro+13+I7+2020+16/512Gb"
  },
  {
    "id": "apple-macbook-pro-13-2019-i7-16/1tb",
    "brand": "Apple",
    "name": "Macbook Pro 13 2019 I7 16/1Tb",
    "specs": "macbook pro 13 2019 i7 16/1tb",
    "price": 88000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Pro+13+2019+I7+16/1Tb"
  },
  {
    "id": "apple-macbook-pro-13-2019-i7-16/512gb",
    "brand": "Apple",
    "name": "Macbook Pro 13 2019 I7 16/512Gb",
    "specs": "macbook pro 13 2019 i7  16/512gb",
    "price": 63000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Pro+13+2019+I7+16/512Gb"
  },
  {
    "id": "apple-macbook-pro-13-2019-i7-16/256gb",
    "brand": "Apple",
    "name": "Macbook Pro 13 2019 I7 16/256Gb",
    "specs": "macbook pro 13 2019 i7 16/256gb",
    "price": 60000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Pro+13+2019+I7+16/256Gb"
  },
  {
    "id": "apple-macbook-pro-13-2018-i7-16/256gb",
    "brand": "Apple",
    "name": "Macbook Pro 13 2018 I7 16/256Gb",
    "specs": "macbook pro 13 2018 i7 16/256gb",
    "price": 58000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Pro+13+2018+I7+16/256Gb"
  },
  {
    "id": "apple-macbook-pro-13-2019-i5-8/256gb",
    "brand": "Apple",
    "name": "Macbook Pro 13 2019 I5 8/256Gb",
    "specs": "macbook pro 13 2019 i5 8/256gb",
    "price": 53000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Pro+13+2019+I5+8/256Gb"
  },
  {
    "id": "apple-macbook-pro-13-2018-i7-16/256gb",
    "brand": "Apple",
    "name": "Macbook Pro 13 2018 I7 16/256Gb",
    "specs": "macbook pro 13 2018 i7 16/256gb",
    "price": 58000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Pro+13+2018+I7+16/256Gb"
  },
  {
    "id": "apple-macbook-pro-13-2017-i7-16/1tb",
    "brand": "Apple",
    "name": "Macbook Pro 13 2017 I7 16/1Tb",
    "specs": "macbook pro 13 2017 i7 16/1tb",
    "price": 58000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Pro+13+2017+I7+16/1Tb"
  },
  {
    "id": "apple-macbook-pro-13-2017-i7-16/512gb",
    "brand": "Apple",
    "name": "Macbook Pro 13 2017 I7 16/512Gb",
    "specs": "macbook pro 13 2017 i7 16/512gb",
    "price": 55000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Pro+13+2017+I7+16/512Gb"
  },
  {
    "id": "apple-macbook-pro-13-2017-i5-16/256gb",
    "brand": "Apple",
    "name": "Macbook Pro 13 2017 I5 16/256Gb",
    "specs": "macbook pro 13 2017 i5 16/256gb",
    "price": 48000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Pro+13+2017+I5+16/256Gb"
  },
  {
    "id": "apple-macbook-pro-13-2015-i5-8/512gb",
    "brand": "Apple",
    "name": "Macbook Pro 13 2015 I5 8/512Gb",
    "specs": "macbook pro 13 2015 i5 8/512gb",
    "price": 41000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Pro+13+2015+I5+8/512Gb"
  },
  {
    "id": "apple-macbook-pro-13-2015-i5-16/256gb",
    "brand": "Apple",
    "name": "Macbook Pro 13 2015 I5 16/256Gb",
    "specs": "macbook pro 13 2015 i5 16/256gb",
    "price": 41000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Pro+13+2015+I5+16/256Gb"
  },
  {
    "id": "apple-macbook-pro-13-2015-i5-8/256gb",
    "brand": "Apple",
    "name": "Macbook Pro 13 2015 I5 8/256Gb",
    "specs": "macbook pro 13 2015 i5 8/256gb",
    "price": 38000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Pro+13+2015+I5+8/256Gb"
  },
  {
    "id": "apple-macbook-pro-13-2014-i5-8/256gb",
    "brand": "Apple",
    "name": "Macbook Pro 13 2014 I5 8/256Gb",
    "specs": "macbook pro 13 2014 i5 8/256gb",
    "price": 35000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Pro+13+2014+I5+8/256Gb"
  },
  {
    "id": "apple-macbook-pro-13-2013-i5-8/256gb",
    "brand": "Apple",
    "name": "Macbook Pro 13 2013 I5 8/256Gb",
    "specs": "macbook pro 13 2013 i5 8/256gb",
    "price": 33000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Pro+13+2013+I5+8/256Gb"
  },
  {
    "id": "apple-macbook-pro-13-2013-i7-8/256gb",
    "brand": "Apple",
    "name": "Macbook Pro 13 2013 I7 8/256Gb",
    "specs": "macbook pro 13 2013 i7 8/256gb",
    "price": 36000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Pro+13+2013+I7+8/256Gb"
  },
  {
    "id": "apple-macbook-pro-13-2012-i7-8/256gb",
    "brand": "Apple",
    "name": "Macbook Pro 13 2012 I7 8/256Gb",
    "specs": "macbook pro 13 2012 i7 8/256gb",
    "price": 31000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Pro+13+2012+I7+8/256Gb"
  },
  {
    "id": "apple-macbook-pro-13-2012-i5-8/256gb",
    "brand": "Apple",
    "name": "Macbook Pro 13 2012 I5 8/256Gb",
    "specs": "macbook pro 13 2012 i5 8/256gb",
    "price": 30000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Pro+13+2012+I5+8/256Gb"
  },
  {
    "id": "apple-macbook-pro-13-2011-i5-8/256gb",
    "brand": "Apple",
    "name": "Macbook Pro 13 2011 I5 8/256Gb",
    "specs": "macbook pro 13 2011 i5 8/256gb",
    "price": 28000,
    "category": "exuk apple macbook budget",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Pro+13+2011+I5+8/256Gb"
  },
  {
    "id": "apple-macbook-air-m1-2022-8/256gb",
    "brand": "Apple",
    "name": "Macbook Air M1 2022 8/256Gb",
    "specs": "macbook air m1  2022 8/256gb",
    "price": 98000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Air+M1+2022+8/256Gb"
  },
  {
    "id": "apple-macbook-air-m1-2020-8/256gb",
    "brand": "Apple",
    "name": "Macbook Air M1 2020 8/256Gb",
    "specs": "macbook air m1  2020 8/256gb",
    "price": 78000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Air+M1+2020+8/256Gb"
  },
  {
    "id": "apple-macbook-air-13-2019-i5-16/256gb",
    "brand": "Apple",
    "name": "Macbook Air 13 2019 I5 16/256Gb",
    "specs": "macbook air 13 2019 i5 16/256gb",
    "price": 53000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Air+13+2019+I5+16/256Gb"
  },
  {
    "id": "apple-macbook-air-13-2019-i58/256gb",
    "brand": "Apple",
    "name": "Macbook Air 13 2019 I58/256Gb",
    "specs": "macbook air 13 2019 i58/256gb",
    "price": 51000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Air+13+2019+I58/256Gb"
  },
  {
    "id": "apple-macbook-air-13-2018-i5-8/256gb",
    "brand": "Apple",
    "name": "Macbook Air 13 2018 I5 8/256Gb",
    "specs": "macbook air 13 2018 i5 8/256gb",
    "price": 49000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Air+13+2018+I5+8/256Gb"
  },
  {
    "id": "apple-macbook-air-13-2017-i7-8/256gb",
    "brand": "Apple",
    "name": "Macbook Air 13 2017 I7 8/256Gb",
    "specs": "macbook air 13 2017 i7 8/256gb",
    "price": 40000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Air+13+2017+I7+8/256Gb"
  },
  {
    "id": "apple-macbook-air-13-2015-i7-8/256gb",
    "brand": "Apple",
    "name": "Macbook Air 13 2015 I7 8/256Gb",
    "specs": "macbook air 13 2015 i7 8/256gb",
    "price": 36000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Air+13+2015+I7+8/256Gb"
  },
  {
    "id": "apple-macbook-air-13-2017-i5-8/256gb",
    "brand": "Apple",
    "name": "Macbook Air 13 2017 I5 8/256Gb",
    "specs": "macbook air 13 2017 i5 8/256gb",
    "price": 36000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Air+13+2017+I5+8/256Gb"
  },
  {
    "id": "apple-macbook-air-13-2015-i5-8/256",
    "brand": "Apple",
    "name": "Macbook Air 13 2015 I5 8/256",
    "specs": "MacBook Air 13 2015 i5 8/256",
    "price": 33000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Air+13+2015+I5+8/256"
  },
  {
    "id": "apple-macbook-air-13-2013-i5-8/128",
    "brand": "Apple",
    "name": "Macbook Air 13 2013 I5 8/128",
    "specs": "MacBook Air 13 2013 i5 8/128",
    "price": 30000,
    "category": "exuk apple macbook",
    "badge": "exuk",
    "img": "https://via.placeholder.com/300x200/0a0a0a/f01a24?text=Macbook+Air+13+2013+I5+8/128"
  }
];

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
  } else {
    // If no targetBtn provided (e.g. from URL param), try to find the matching button
    const btn = document.querySelector(`.filter-btn[onclick*="'${filter}'"]`);
    if (btn) {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }
  }

  container.innerHTML = '';

  const filtered = filter === 'all' 
    ? ALL_PRODUCTS 
    : ALL_PRODUCTS.filter(p => p.category.includes(filter));

  const itemsToShow = filtered.slice(0, currentLimit);

  itemsToShow.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-img" style="background-image: url('${p.img}')">
        ${p.badge ? `<span class="badge ${p.badge}">${p.badge}</span>` : ''}
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
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-img" style="background-image: url('${p.img}')">
        ${p.badge ? `<span class="badge ${p.badge}">${p.badge}</span>` : ''}
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

  if (loadMoreBtn) loadMoreBtn.style.display = 'none';
}

function setupDailySpecial() {
  const overlay = document.getElementById('daily-special');
  if (!overlay) return;

  const featured = ALL_PRODUCTS.filter(p => p.category.includes('featured'));
  if (featured.length > 0) {
    const p = featured[Math.floor(Math.random() * featured.length)];
    const titleEl = document.getElementById('special-title');
    const specsEl = document.getElementById('special-specs');
    const priceEl = document.getElementById('special-new-price');
    const oldPriceEl = document.getElementById('special-old-price');
    const imgEl = document.getElementById('special-img');
    const bannerEl = document.getElementById('special-banner');
    
    if (titleEl) titleEl.innerText = p.name;
    if (specsEl) specsEl.innerText = p.specs;
    if (priceEl) priceEl.innerText = `KES ${(p.price * 0.9).toLocaleString()}`;
    if (oldPriceEl) oldPriceEl.innerText = `KES ${p.price.toLocaleString()}`;
    if (imgEl) imgEl.src = p.img;
    
    if (bannerEl) {
      bannerEl.onclick = () => {
        window.location.href = `https://wa.me/254721585784?text=Hi%20Nexcom!%20I%20want%20to%20order%20the%20Special:%20${encodeURIComponent(p.name)}`;
      };
    }
  }

  overlay.style.display = 'block';
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
    renderProducts(filterParam);
    // Smooth scroll to laptops section if filter is present
    setTimeout(() => {
      const laptopsEl = document.getElementById('laptops');
      if (laptopsEl) laptopsEl.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  } else {
    renderProducts('featured');
  }
});
