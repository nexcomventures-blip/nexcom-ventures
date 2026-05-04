const ALL_PRODUCTS = [
    {
        "id": "hpe-dl380-gen11-16core",
        "brand": "HPE",
        "name": "HPE ProLiant DL380 Gen11 (16-Core)",
        "specs": "Intel Xeon Gold 5416S \u2022 32GB RAM \u2022 2U Rack \u2022 1 Year Warranty \u2022 BRAND NEW",
        "price": 1014390,
        "category": "server enterprise hpe featured brandnew",
        "badge": "new",
        "img": "https://expresscomputersystems.com/cdn/shop/files/hpe-dl380-gen11-12-edsff_800x.jpg?v=1731626706"
    },
    {
        "id": "hpe-dl380-gen11-12core",
        "brand": "HPE",
        "name": "HPE ProLiant DL380 Gen11 (12-Core)",
        "specs": "Intel Xeon Silver 4410Y \u2022 32GB RAM \u2022 2U Rack \u2022 1 Year Warranty \u2022 BRAND NEW",
        "price": 985660,
        "category": "server enterprise hpe featured brandnew",
        "badge": "new",
        "img": "https://expresscomputersystems.com/cdn/shop/files/hpe-dl380-gen11-12-edsff_800x.jpg?v=1731626706"
    },
    {
        "id": "lenovo-yoga-7-ultra7",
        "brand": "Lenovo",
        "name": "Lenovo Yoga 7 2-in-1 OLED",
        "specs": "Intel Core Ultra 7 155H \u2022 16GB RAM \u2022 1TB SSD \u2022 14\" 2.8K OLED Touch \u2022 BRAND NEW",
        "price": 309400,
        "category": "laptop premium lenovo featured brandnew",
        "badge": "new",
        "img": "https://p1-ofp.static.pub//medias/30154096055_Yoga7_2in1_14AHP9_PureDarkGray_202311010313361715631777266.png"
    },
    {
        "id": "dell-latitude-3450-i7",
        "brand": "Dell",
        "name": "Dell Latitude 3450 (i7 13th Gen)",
        "specs": "Intel Core i7 1355U \u2022 8GB RAM \u2022 512GB SSD \u2022 14\" FHD \u2022 BRAND NEW",
        "price": 209729,
        "category": "laptop business dell featured brandnew",
        "badge": "new",
        "img": "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/latitude-14-3450-laptop/media-gallery/laptop-latitude-14-3450-black-gallery-1.psd?fmt=png-alpha&wid=1000"
    },
    {
        "id": "exuk-hp-0",
        "brand": "HP",
        "name": "",
        "specs": "Ex-UK Premium Grade \u2022 HP Business Series",
        "price": 1352,
        "category": "exuk hp",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/hp-elite.png"
    },
    {
        "id": "exuk-hp-1",
        "brand": "HP",
        "name": "Hp 830 G8 core i7 16 GB Ram 512 SSD 11th Gen non touch",
        "specs": "Ex-UK Premium Grade \u2022 HP Business Series",
        "price": 54600,
        "category": "exuk hp touch",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/hp-elite.png"
    },
    {
        "id": "exuk-hp-2",
        "brand": "HP",
        "name": "Hp 830 g8 core i5 8 gb ram 256 ssd Touch screen 11th gen",
        "specs": "Ex-UK Premium Grade \u2022 HP Business Series",
        "price": 41600,
        "category": "exuk hp touch",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/hp-elite.png"
    },
    {
        "id": "exuk-hp-3",
        "brand": "HP",
        "name": "830 G7 Core i5 8GB RAM 256 SSD Touchscreen 10Gen",
        "specs": "Ex-UK Premium Grade \u2022 HP Business Series",
        "price": 40300,
        "category": "exuk hp touch",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/hp-elite.png"
    },
    {
        "id": "exuk-hp-4",
        "brand": "HP",
        "name": "Hp",
        "specs": "Ex-UK Premium Grade \u2022 HP Business Series",
        "price": 1339,
        "category": "exuk hp",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/hp-elite.png"
    },
    {
        "id": "exuk-hp-5",
        "brand": "HP",
        "name": "Hp",
        "specs": "Ex-UK Premium Grade \u2022 HP Business Series",
        "price": 1339,
        "category": "exuk hp",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/hp-elite.png"
    },
    {
        "id": "exuk-hp-6",
        "brand": "HP",
        "name": "Hp",
        "specs": "Ex-UK Premium Grade \u2022 HP Business Series",
        "price": 1339,
        "category": "exuk hp",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/hp-elite.png"
    },
    {
        "id": "exuk-hp-7",
        "brand": "HP",
        "name": "Hp 840 G5 core i7 16 GB ram 512 ssd Touch screen",
        "specs": "Ex-UK Premium Grade \u2022 HP Business Series",
        "price": 46800,
        "category": "exuk hp touch",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/hp-elite.png"
    },
    {
        "id": "exuk-hp-8",
        "brand": "HP",
        "name": "Hp 840 g5 core i7 16 GB ram 512 ssd non touch",
        "specs": "Ex-UK Premium Grade \u2022 HP Business Series",
        "price": 44200,
        "category": "exuk hp touch",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/hp-elite.png"
    },
    {
        "id": "exuk-hp-9",
        "brand": "HP",
        "name": "Hp 840 G5 core i5 8 GB Ram 256 SSD Touchscreen 8 Gen ",
        "specs": "Ex-UK Premium Grade \u2022 HP Business Series",
        "price": 35100,
        "category": "exuk hp touch",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/hp-elite.png"
    },
    {
        "id": "exuk-hp-10",
        "brand": "HP",
        "name": "HP 840 G5 core i5 8 Genration 8/256. 8GEN",
        "specs": "Ex-UK Premium Grade \u2022 HP Business Series",
        "price": 32500,
        "category": "exuk hp",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/hp-elite.png"
    },
    {
        "id": "exuk-hp-11",
        "brand": "HP",
        "name": "Hp 830 g5 /6 core i5 8GB /256 SSD Touch x360 8 gen",
        "specs": "Ex-UK Premium Grade \u2022 HP Business Series",
        "price": 40300,
        "category": "exuk hp touch",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/hp-elite.png"
    },
    {
        "id": "exuk-hp-12",
        "brand": "HP",
        "name": "HP 830 G5 core i5 8/256 non touch 8 gen",
        "specs": "Ex-UK Premium Grade \u2022 HP Business Series",
        "price": 31200,
        "category": "exuk hp touch",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/hp-elite.png"
    },
    {
        "id": "exuk-hp-13",
        "brand": "HP",
        "name": "Hp 840 G4 core i7 non touch. 8/256",
        "specs": "Ex-UK Premium Grade \u2022 HP Business Series",
        "price": 29900,
        "category": "exuk hp touch",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/hp-elite.png"
    },
    {
        "id": "exuk-hp-14",
        "brand": "HP",
        "name": "HP 840 G3 core i7 Non touch. 8/256",
        "specs": "Ex-UK Premium Grade \u2022 HP Business Series",
        "price": 28600,
        "category": "exuk hp touch",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/hp-elite.png"
    },
    {
        "id": "exuk-hp-15",
        "brand": "HP",
        "name": "HP 840 G4 core i5 non 8/256. 7th generation",
        "specs": "Ex-UK Premium Grade \u2022 HP Business Series",
        "price": 27300,
        "category": "exuk hp",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/hp-elite.png"
    },
    {
        "id": "exuk-hp-16",
        "brand": "HP",
        "name": "HP 840 G3 core i5 8/256. Non touch",
        "specs": "Ex-UK Premium Grade \u2022 HP Business Series",
        "price": 26000,
        "category": "exuk hp touch",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/hp-elite.png"
    },
    {
        "id": "exuk-hp-17",
        "brand": "HP",
        "name": "Hp 820 G3 core i5 8/256 6th gen",
        "specs": "Ex-UK Premium Grade \u2022 HP Business Series",
        "price": 23400,
        "category": "exuk hp",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/hp-elite.png"
    },
    {
        "id": "exuk-hp-18",
        "brand": "HP",
        "name": "Hp 840 G2 core i5 8 GB Ram 256 SSD non",
        "specs": "Ex-UK Premium Grade \u2022 HP Business Series",
        "price": 22100,
        "category": "exuk hp",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/hp-elite.png"
    },
    {
        "id": "exuk-hp-19",
        "brand": "HP",
        "name": "Hp 640 G3 core i5 8 GB Ram 256 SSD 7th gen",
        "specs": "Ex-UK Premium Grade \u2022 HP Business Series",
        "price": 23400,
        "category": "exuk hp",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/hp-elite.png"
    },
    {
        "id": "exuk-hp-20",
        "brand": "HP",
        "name": "Hp 640 G2 core i5 8/256 6th gen",
        "specs": "Ex-UK Premium Grade \u2022 HP Business Series",
        "price": 22100,
        "category": "exuk hp",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/hp-elite.png"
    },
    {
        "id": "exuk-hp-21",
        "brand": "HP",
        "name": "Hp 640 G1 core i5 8 GB RAM/500 GB HDD",
        "specs": "Ex-UK Premium Grade \u2022 HP Business Series",
        "price": 16900,
        "category": "exuk hp",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/hp-elite.png"
    },
    {
        "id": "exuk-hp-22",
        "brand": "HP",
        "name": "Hp",
        "specs": "Ex-UK Premium Grade \u2022 HP Business Series",
        "price": 12311,
        "category": "exuk hp",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/hp-elite.png"
    },
    {
        "id": "exuk-hp-23",
        "brand": "HP",
        "name": "Hp",
        "specs": "Ex-UK Premium Grade \u2022 HP Business Series",
        "price": 12324,
        "category": "exuk hp",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/hp-elite.png"
    },
    {
        "id": "exuk-hp-24",
        "brand": "HP",
        "name": "Hp 11G6 core i5 8 GB Ram 256 SSD Touchscreen. 10 GEN",
        "specs": "Ex-UK Premium Grade \u2022 HP Business Series",
        "price": 26000,
        "category": "exuk hp touch",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/hp-elite.png"
    },
    {
        "id": "exuk-hp-25",
        "brand": "HP",
        "name": "Hp11G2 8GB RAM 128 SSD 7th generation Touch x360",
        "specs": "Ex-UK Premium Grade \u2022 HP Business Series",
        "price": 18200,
        "category": "exuk hp touch",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/hp-elite.png"
    },
    {
        "id": "exuk-hp-26",
        "brand": "HP",
        "name": "Hp 11G1 4GB RAM /128 SSD. Touch screen x360. Only",
        "specs": "Ex-UK Premium Grade \u2022 HP Business Series",
        "price": 15600,
        "category": "exuk hp touch",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/hp-elite.png"
    },
    {
        "id": "exuk-hp-27",
        "brand": "HP",
        "name": "Hp",
        "specs": "Ex-UK Premium Grade \u2022 HP Business Series",
        "price": 10998,
        "category": "exuk hp",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/hp-elite.png"
    },
    {
        "id": "exuk-hp-28",
        "brand": "HP",
        "name": "Hp",
        "specs": "Ex-UK Premium Grade \u2022 HP Business Series",
        "price": 11141,
        "category": "exuk hp",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/hp-elite.png"
    },
    {
        "id": "exuk-dell-29",
        "brand": "Dell",
        "name": "Dell",
        "specs": "Ex-UK Premium Grade \u2022 Dell Business Series",
        "price": 6890,
        "category": "exuk dell",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/dell-lat.png"
    },
    {
        "id": "exuk-dell-30",
        "brand": "Dell",
        "name": "Dell",
        "specs": "Ex-UK Premium Grade \u2022 Dell Business Series",
        "price": 9451,
        "category": "exuk dell",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/dell-lat.png"
    },
    {
        "id": "exuk-dell-31",
        "brand": "Dell",
        "name": "Dell",
        "specs": "Ex-UK Premium Grade \u2022 Dell Business Series",
        "price": 9451,
        "category": "exuk dell",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/dell-lat.png"
    },
    {
        "id": "exuk-dell-32",
        "brand": "Dell",
        "name": "Dell",
        "specs": "Ex-UK Premium Grade \u2022 Dell Business Series",
        "price": 9425,
        "category": "exuk dell",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/dell-lat.png"
    },
    {
        "id": "exuk-dell-33",
        "brand": "Dell",
        "name": "DELL",
        "specs": "Ex-UK Premium Grade \u2022 Dell Business Series",
        "price": 9412,
        "category": "exuk dell",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/dell-lat.png"
    },
    {
        "id": "exuk-dell-34",
        "brand": "Dell",
        "name": "DELL",
        "specs": "Ex-UK Premium Grade \u2022 Dell Business Series",
        "price": 9412,
        "category": "exuk dell",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/dell-lat.png"
    },
    {
        "id": "exuk-dell-35",
        "brand": "Dell",
        "name": "Dell",
        "specs": "Ex-UK Premium Grade \u2022 Dell Business Series",
        "price": 4147,
        "category": "exuk dell",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/dell-lat.png"
    },
    {
        "id": "exuk-lenovo-36",
        "brand": "Lenovo",
        "name": "Lenovo X1YOGA core i7 16 GB Ram 512 SSD. 8 GEN Touchscreen x360. With stylus",
        "specs": "Ex-UK Premium Grade \u2022 Lenovo Business Series",
        "price": 44200,
        "category": "exuk lenovo touch",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/lenovo-think.png"
    },
    {
        "id": "exuk-lenovo-37",
        "brand": "Lenovo",
        "name": "Lenovo yoga x390 core i7 16 GB Ram 512 SSD Touchscreen x360 with  pen",
        "specs": "Ex-UK Premium Grade \u2022 Lenovo Business Series",
        "price": 44200,
        "category": "exuk lenovo touch",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/lenovo-think.png"
    },
    {
        "id": "exuk-lenovo-38",
        "brand": "Lenovo",
        "name": "Lenovo yoga 380 core i7 16 GB Ram. 256 SSD touch screen x360 with stylus pen ",
        "specs": "Ex-UK Premium Grade \u2022 Lenovo Business Series",
        "price": 41600,
        "category": "exuk lenovo touch",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/lenovo-think.png"
    },
    {
        "id": "exuk-lenovo-39",
        "brand": "Lenovo",
        "name": "Lenovo yoga X380 core i5 8 GB Ram 256 SSD Touchscreen x360 with ",
        "specs": "Ex-UK Premium Grade \u2022 Lenovo Business Series",
        "price": 31200,
        "category": "exuk lenovo touch",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/lenovo-think.png"
    },
    {
        "id": "exuk-lenovo-40",
        "brand": "Lenovo",
        "name": "Lenovo yoga 370 core i7 8 GB Ram 256 SSD Touch screen X360 with stylus pen ",
        "specs": "Ex-UK Premium Grade \u2022 Lenovo Business Series",
        "price": 32500,
        "category": "exuk lenovo touch",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/lenovo-think.png"
    },
    {
        "id": "exuk-lenovo-41",
        "brand": "Lenovo",
        "name": "LENOVO Yoga X370 core i5 8 GB Ram 256 GB SSD Touchscreen x360 with stylus pen",
        "specs": "Ex-UK Premium Grade \u2022 Lenovo Business Series",
        "price": 27300,
        "category": "exuk lenovo touch",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/lenovo-think.png"
    },
    {
        "id": "exuk-lenovo-42",
        "brand": "Lenovo",
        "name": "Lenovo yoga 260 core i7 8 GB Ram 256 SSD Touchscreen x360 with stylus pen",
        "specs": "Ex-UK Premium Grade \u2022 Lenovo Business Series",
        "price": 27300,
        "category": "exuk lenovo touch",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/lenovo-think.png"
    },
    {
        "id": "exuk-lenovo-43",
        "brand": "Lenovo",
        "name": "Lenovo yoga 260 core i5 8 GB ram 256 ssd Touch x360 with stylus pen",
        "specs": "Ex-UK Premium Grade \u2022 Lenovo Business Series",
        "price": 25350,
        "category": "exuk lenovo touch",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/lenovo-think.png"
    },
    {
        "id": "exuk-lenovo-44",
        "brand": "Lenovo",
        "name": "Lenovo yoga 300 e. 8 GB Ram 128 SSD Touchscreen x360 with stylus pen ",
        "specs": "Ex-UK Premium Grade \u2022 Lenovo Business Series",
        "price": 18200,
        "category": "exuk lenovo touch",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/lenovo-think.png"
    },
    {
        "id": "exuk-lenovo-45",
        "brand": "Lenovo",
        "name": "T490 s core i5 8 GB RAM 256 SSD non Touch",
        "specs": "Ex-UK Premium Grade \u2022 Lenovo Business Series",
        "price": 29250,
        "category": "exuk lenovo touch",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/lenovo-think.png"
    },
    {
        "id": "exuk-lenovo-46",
        "brand": "Lenovo",
        "name": "T480 s core i5 8 GB Ram/256 SSD",
        "specs": "Ex-UK Premium Grade \u2022 Lenovo Business Series",
        "price": 27950,
        "category": "exuk lenovo",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/lenovo-think.png"
    },
    {
        "id": "exuk-lenovo-47",
        "brand": "Lenovo",
        "name": "Lenovo T470 s core i5 8 GB RAM 256 SSD",
        "specs": "Ex-UK Premium Grade \u2022 Lenovo Business Series",
        "price": 22100,
        "category": "exuk lenovo",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/lenovo-think.png"
    },
    {
        "id": "exuk-lenovo-48",
        "brand": "Lenovo",
        "name": "Lenovo T440 s core i5 8 GB Ram 500 HDD 14 inch screen",
        "specs": "Ex-UK Premium Grade \u2022 Lenovo Business Series",
        "price": 19500,
        "category": "exuk lenovo",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/lenovo-think.png"
    },
    {
        "id": "exuk-lenovo-49",
        "brand": "Lenovo",
        "name": "Lenovo T440 s core i7 8 GB Ram 500 HDD. 14 inch screen",
        "specs": "Ex-UK Premium Grade \u2022 Lenovo Business Series",
        "price": 19500,
        "category": "exuk lenovo",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/lenovo-think.png"
    },
    {
        "id": "exuk-lenovo-50",
        "brand": "Lenovo",
        "name": "Lenovo x280 core i5 8 GB Ram 256 SSD Touchscreen",
        "specs": "Ex-UK Premium Grade \u2022 Lenovo Business Series",
        "price": 26000,
        "category": "exuk lenovo touch",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/lenovo-think.png"
    },
    {
        "id": "exuk-lenovo-51",
        "brand": "Lenovo",
        "name": "Lenovo X390 core i5 16 GB Ram 256 SSD Touchscreen 8 gen",
        "specs": "Ex-UK Premium Grade \u2022 Lenovo Business Series",
        "price": 33800,
        "category": "exuk lenovo touch",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/lenovo-think.png"
    },
    {
        "id": "exuk-lenovo-52",
        "brand": "Lenovo",
        "name": "Lenovo X270 core i5 8/256 Touch screen ",
        "specs": "Ex-UK Premium Grade \u2022 Lenovo Business Series",
        "price": 24700,
        "category": "exuk lenovo touch",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/lenovo-think.png"
    },
    {
        "id": "exuk-lenovo-53",
        "brand": "Lenovo",
        "name": "Lenovo X270 core i5 8 GB Ram 256 SSD.non",
        "specs": "Ex-UK Premium Grade \u2022 Lenovo Business Series",
        "price": 22100,
        "category": "exuk lenovo",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/lenovo-think.png"
    },
    {
        "id": "exuk-lenovo-54",
        "brand": "Lenovo",
        "name": "Lenovo x260 core i7 8 GB Ram 256 SSD non touch",
        "specs": "Ex-UK Premium Grade \u2022 Lenovo Business Series",
        "price": 20800,
        "category": "exuk lenovo touch",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/lenovo-think.png"
    },
    {
        "id": "exuk-lenovo-55",
        "brand": "Lenovo",
        "name": "Lenovo yoga 11E core i3 8 GB Ram 128 SSD Touchscreen x360. 7th generation",
        "specs": "Ex-UK Premium Grade \u2022 Lenovo Business Series",
        "price": 18200,
        "category": "exuk lenovo touch",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/lenovo-think.png"
    },
    {
        "id": "exuk-lenovo-56",
        "brand": "Lenovo",
        "name": "Lenovo yoga 11E core i3 4 GB Ram 128 SSD Touchscreen x360 7th generation",
        "specs": "Ex-UK Premium Grade \u2022 Lenovo Business Series",
        "price": 16900,
        "category": "exuk lenovo touch",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/lenovo-think.png"
    },
    {
        "id": "exuk-lenovo-57",
        "brand": "Lenovo",
        "name": "Lenovo yoga 300 E. 8 GB Ram 128 SSD Touchscreen x360 with ",
        "specs": "Ex-UK Premium Grade \u2022 Lenovo Business Series",
        "price": 18200,
        "category": "exuk lenovo touch",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/lenovo-think.png"
    },
    {
        "id": "exuk-lenovo-58",
        "brand": "Lenovo",
        "name": "Lenovo x230 core i5 4GB /320 GB hdd",
        "specs": "Ex-UK Premium Grade \u2022 Lenovo Business Series",
        "price": 10400,
        "category": "exuk lenovo",
        "badge": "exuk",
        "img": "https://nexcomventures.co.ke/js/lenovo-think.png"
    }
];

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

document.addEventListener("DOMContentLoaded", () => {
  renderProducts("featured");
  setupDailySpecial();
});

// Daily Special Logic
function setupDailySpecial() {
  const section = document.getElementById("daily-special");
  if (!section || ALL_PRODUCTS.length === 0) return;

  // Use current date to pick a unique item from ALL_PRODUCTS every day
  const today = new Date();
  const dateSeed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  const productIndex = dateSeed % ALL_PRODUCTS.length;
  const p = ALL_PRODUCTS[productIndex];

  // Apply 10% discount
  const oldPrice = p.price;
  const newPrice = Math.floor(oldPrice * 0.9);
  
  // Update DOM
  document.getElementById("special-title").innerText = p.name;
  document.getElementById("special-specs").innerText = p.specs;
  document.getElementById("special-old-price").innerText = `KES ${oldPrice.toLocaleString()}`;
  document.getElementById("special-new-price").innerText = `KES ${newPrice.toLocaleString()}`;
  document.getElementById("special-img").src = p.img;
  
  const banner = document.getElementById("special-banner");
  banner.onclick = () => {
    const text = encodeURIComponent(`Hi Nexcom! I want to claim today's special deal: ${p.name} at KES ${newPrice.toLocaleString()} (10% OFF)`);
    window.open(`https://wa.me/254722816001?text=${text}`, '_blank');
  };

  section.style.display = "block";
}
