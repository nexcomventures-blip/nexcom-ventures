const translations = {
    en: {
        experience: "The Experience",
        expeditions: "Expeditions",
        logistics: "Logistics",
        curate_nav: "Curate My Journey",
        hero_tagline: "Boutique Safari Curators",
        hero_h1: "Redefining the <br><em>Wilderness</em> Connection.",
        hero_p: "We don't just book tours. We curate soulful expeditions for academic minds, romantic souls, and private groups seeking the authentic pulse of Kenya.",
        btn_explore: "Explore Expeditions",
        btn_chat: "Chat with a Concierge",
        condition: "Condition"
    },
    es: {
        experience: "La Experiencia",
        expeditions: "Expediciones",
        logistics: "Logística",
        curate_nav: "Curar Mi Viaje",
        hero_tagline: "Curadores de Safari Boutique",
        hero_h1: "Redefiniendo la <br>Conexión con lo <em>Salvaje</em>.",
        hero_p: "No solo reservamos tours. Curamos expediciones con alma para mentes académicas, almas románticas y grupos privados que buscan el pulso auténtico de Kenia.",
        btn_explore: "Explorar Expediciones",
        btn_chat: "Hablar con un Conserje",
        condition: "Condición"
    },
    zh: {
        experience: "体验",
        expeditions: "远征",
        logistics: "物流",
        curate_nav: "策划我的旅程",
        hero_tagline: "精品萨法里策划师",
        hero_h1: "重新定义 <br><em>荒野</em> 连接。",
        hero_p: "我们不仅仅是预订旅游。我们为学术头脑、浪漫灵魂和寻求肯尼亚真实脉搏的私人团体策划充满灵魂的探险。",
        btn_explore: "探索远征",
        btn_chat: "与礼宾部聊天",
        condition: "状况"
    },
    fr: {
        experience: "L'Expérience",
        expeditions: "Expéditions",
        logistics: "Logistique",
        curate_nav: "Organiser Mon Voyage",
        hero_tagline: "Curateurs de Safari Boutique",
        hero_h1: "Redéfinir la <br>Connexion à la <em>Nature</em>.",
        hero_p: "Nous ne nous contentons pas de réserver des visites. Nous organisons des expéditions inspirantes pour les esprits académiques, les âmes romantiques et les groupes privés.",
        btn_explore: "Explorer les Expéditions",
        btn_chat: "Discuter avec un Concierge",
        condition: "Condition"
    },
    de: {
        experience: "Das Erlebnis",
        expeditions: "Expeditionen",
        logistics: "Logistik",
        curate_nav: "Meine Reise Kuratieren",
        hero_tagline: "Boutique Safari Kuratoren",
        hero_h1: "Neudefinition der <br><em>Wildnis</em> Verbindung.",
        hero_p: "Wir buchen nicht nur Touren. Wir kuratieren seelenvolle Expeditionen für akademische Köpfe, romantische Seelen und private Gruppen.",
        btn_explore: "Expeditionen Erkunden",
        btn_chat: "Mit dem Concierge Chatten",
        condition: "Zustand"
    }
};

const weatherData = [
    { loc: "Nairobi", temp: "24°C", desc: "Sunny", icon: "fa-sun" },
    { loc: "Maasai Mara", temp: "26°C", desc: "Clear", icon: "fa-cloud-sun" },
    { loc: "Amboseli", temp: "28°C", desc: "Warm", icon: "fa-temperature-high" },
    { loc: "Laikipia", temp: "22°C", desc: "Breezy", icon: "fa-wind" },
    { loc: "Mombasa", temp: "30°C", desc: "Humid", icon: "fa-water" }
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. Preloader
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.classList.add('fade-out');
    }, 1500);

    // 2. Navbar Scroll
    const nav = document.querySelector('.main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // 3. Scroll Reveal
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // 4. Weather Rotation
    let weatherIdx = 0;
    setInterval(() => {
        weatherIdx = (weatherIdx + 1) % weatherData.length;
        const data = weatherData[weatherIdx];
        const locEl = document.getElementById('weather-location');
        const tempEl = document.getElementById('weather-temp');
        const descEl = document.getElementById('weather-desc');
        
        if(locEl && tempEl && descEl) {
            locEl.style.opacity = 0;
            tempEl.style.opacity = 0;
            setTimeout(() => {
                locEl.textContent = data.loc;
                tempEl.textContent = data.temp;
                descEl.innerHTML = `<i class="fas ${data.icon}"></i>`;
                locEl.style.opacity = 1;
                tempEl.style.opacity = 1;
            }, 500);
        }
    }, 4000);

    // 5. Language Handling
    window.setLanguage = (lang) => {
        document.querySelectorAll('.lang-selector span').forEach(s => s.classList.remove('active'));
        const activeSpan = document.querySelector(`.lang-selector span[onclick*="${lang}"]`);
        if(activeSpan) activeSpan.classList.add('active');

        // Apply translations
        const t = translations[lang];
        document.querySelector('a[href="#experience"]').textContent = t.experience;
        document.querySelector('a[href="#expeditions"]').textContent = t.expeditions;
        document.querySelector('a[href="#logistics"]').textContent = t.logistics;
        document.querySelector('.nav-cta').textContent = t.curate_nav;
        document.querySelector('.hero-tagline').textContent = t.hero_tagline;
        document.querySelector('.hero-v3 h1').innerHTML = t.hero_h1;
        document.querySelector('.hero-v3 p').textContent = t.hero_p;
        document.querySelector('.btn-outline-gold').textContent = t.btn_explore;
        document.querySelector('.btn-wa').innerHTML = `<i class="fab fa-whatsapp"></i> ${t.btn_chat}`;
        document.querySelector('[data-i18n="condition"]').textContent = t.condition;
    };
});
