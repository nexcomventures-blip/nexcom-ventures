const translations = { en: { experience: "The Experience", tours: "Tours & Safaris", expeditions: "Expeditions", logistics: "Logistics", curate_nav: "Curate My Journey", hero_tagline: "Boutique Safari Curators in Nairobi", hero_h1: "Luxury Kenya Safaris & <br><em>Wilderness</em> Expeditions.", hero_p: "We don't just book tours. We curate soulful, luxury expeditions for academic minds, romantic souls, and private groups seeking the authentic pulse of Kenya's wild heritage.", btn_explore: "Explore Expeditions", btn_chat: "Chat with a Concierge", condition: "Condition", service_transfers: "Airport Transfers", service_transfers_p: "Seamless private arrivals with vetted professional handlers.", service_hotels: "Boutique Stays", service_hotels_p: "Hand-picked luxury lodges and hidden city gems.", service_tickets: "Air Tickets", service_tickets_p: "Hassle-free domestic and international flight curation.", service_charters: "Private Helicopter Charters", service_charters_p: "Exclusive aerial access to remote conservancies and northern frontiers.", tours_h2: "Popular Tours & Safaris", tours_p: "Hand-picked itineraries combining Kenya's most iconic wildlife and landscapes.", builder_subtitle: "Bespoke Curation", builder_h2: "Design Your Unique Path.", builder_p: "Every soul seeks a different wilderness. Choose your elements, and we'll weave them into a singular Kenyan tapestry.", builder_regions: "Choose Regions", builder_focus: "Focus Areas", exp_honeymoon: "Safari Honeymoon Edition", exp_heritage: "Elephant Heritage Trail", exp_migration: "Mara Migration Expedition", btn_explore_card: "Explore Detail" }, es: { experience: "La Experiencia", tours: "Tours y Safaris", expeditions: "Expediciones", logistics: "Logística", curate_nav: "Curar Mi Viaje", hero_tagline: "Curadores de Safari Boutique en Nairobi", hero_h1: "Safaris de Lujo en Kenia y <br>Expediciones en la <em>Naturaleza</em>.", hero_p: "No solo reservamos tours. Curamos expediciones de lujo con alma para mentes académicas, almas románticas y grupos privados que buscan el pulso auténtico del patrimonio salvaje de Kenia.", btn_explore: "Explorar Expediciones", btn_chat: "Chatea con un Conserje", condition: "Condición", service_transfers: "Traslados al Aeropuerto", service_transfers_p: "Llegadas privadas impecables con personal profesional verificado.", service_hotels: "Estancias Boutique", service_hotels_p: "Alojamientos de lujo seleccionados a mano y joyas ocultas en la ciudad.", service_tickets: "Boletos de Avión", service_tickets_p: "Curación de vuelos nacionales e internacionales sin complicaciones.", service_charters: "Vuelos Privados en Helicóptero", service_charters_p: "Acceso aéreo exclusivo a reservas remotas y fronteras del norte.", tours_h2: "Tours y Safaris Populares", tours_p: "Itinerarios seleccionados a mano que combinan la vida silvestre y los paisajes más icónicos de Kenia.", builder_subtitle: "Curación a Medida", builder_h2: "Diseña Tu Camino Único.", builder_p: "Cada alma busca una naturaleza diferente. Elige tus elementos y los tejeremos en un tapiz keniano singular.", builder_regions: "Elige Regiones", builder_focus: "Áreas de Enfoque", exp_honeymoon: "Edición Luna de Miel Safari", exp_heritage: "Sendero del Patrimonio del Elefante", exp_migration: "Expedición Migración del Mara", btn_explore_card: "Explorar Detalle" } }; const weatherData = [ { loc: "Nairobi", temp: "24°C", icon: "fa-sun" }, { loc: "Maasai Mara", temp: "28°C", icon: "fa-cloud-sun" }, { loc: "Amboseli", temp: "26°C", icon: "fa-sun" }, { loc: "Diani", temp: "30°C", icon: "fa-water" } ]; document.addEventListener('DOMContentLoaded', () => { 
    // Force reveal immediately
    document.querySelectorAll('.reveal').forEach(el => {
        el.classList.add('active');
        el.style.opacity = "1";
        el.style.visibility = "visible";
        el.style.transform = "none";
    });
    document.querySelectorAll('.card-media img, .card-media video, img').forEach(el => {
        el.classList.add('active');
        el.style.opacity = "1";
        el.style.visibility = "visible";
    });

    // 1. Preloader
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('fade-out');
            preloader.style.opacity = "0";
            preloader.style.visibility = "hidden";
            setTimeout(() => { preloader.style.display = 'none'; }, 500);
        }, 300);
    }

    // 2. Smart Navbar Scroll (Hide on down, show on up)
    const nav = document.querySelector('.main-nav');
    let lastScrollY = 0;
    let navHidden = false;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        // Add scrolled class for styling (background, shadow)
        if (currentScrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        // Hide nav when scrolling down, show when scrolling up
        if (currentScrollY > 200) {
            if (currentScrollY > lastScrollY && !navHidden) {
                // Scrolling down - hide nav
                nav.style.transform = 'translateY(-100%)';
                navHidden = true;
            } else if (currentScrollY < lastScrollY && navHidden) {
                // Scrolling up - show nav
                nav.style.transform = 'translateY(0)';
                navHidden = false;
            }
        } else {
            // At top of page - always show
            nav.style.transform = 'translateY(0)';
            navHidden = false;
        }
        
        lastScrollY = currentScrollY;
    });

    // 3. Scroll Reveal (Fallback support)
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('active'); } }); }, observerOptions);
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // 4. Weather Rotation
    let weatherIdx = 0; setInterval(() => { weatherIdx = (weatherIdx + 1) % weatherData.length; const data = weatherData[weatherIdx]; const locEl = document.getElementById('weather-location'); const tempEl = document.getElementById('weather-temp'); const descEl = document.getElementById('weather-desc'); if(locEl && tempEl && descEl) { locEl.style.opacity = 0; tempEl.style.opacity = 0; setTimeout(() => { locEl.textContent = data.loc; tempEl.textContent = data.temp; descEl.innerHTML = `<i class="fas ${data.icon}"></i>`; locEl.style.opacity = 1; tempEl.style.opacity = 1; }, 300); } }, 2000);

    // 5. Language Handling
    window.setLanguage = (lang) => { 
        document.querySelectorAll('.lang-selector span').forEach(s => s.classList.remove('active')); 
        const activeSpan = document.querySelector(`.lang-selector span[onclick*="${lang}"]`);
        if(activeSpan) activeSpan.classList.add('active');
        const t = translations[lang]; 
        document.querySelectorAll('[data-i18n]').forEach(el => { 
            const key = el.dataset.i18n; 
            if (t[key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') { el.placeholder = t[key]; } else { el.innerHTML = t[key]; }
            }
        });
        document.querySelectorAll('.exp-card').forEach(card => {
            const price = card.querySelector('.price-val');
            const btn = card.querySelector('.btn-explore');
            if(price) price.textContent = t[price.dataset.i18n];
            if(btn) btn.textContent = t.btn_explore_card;
        });
    };

    // 6. Tag Toggle
    document.querySelectorAll('.tag').forEach(tag => { tag.addEventListener('click', () => { tag.classList.toggle('active'); }); });

    // 7. Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars'); icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times'); icon.classList.add('fa-bars');
            }
        });
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                icon.classList.remove('fa-times'); icon.classList.add('fa-bars');
            });
        });
    }

    // 8. Image Gallery Auto-Rotation
    const initImageRotation = () => {
        const containers = document.querySelectorAll('.card-media');
        containers.forEach(container => {
            const media = container.querySelectorAll('img, video');
            if (media.length <= 1) return;
            let currentIndex = 0;
            setInterval(() => {
                media[currentIndex].classList.remove('active');
                currentIndex = (currentIndex + 1) % media.length;
                media[currentIndex].classList.add('active');
            }, 4000);
        });
    };
    initImageRotation();
});

// Chat Logic
let chatStep = 0;
function toggleChat() { const chat = document.getElementById('chat-widget'); chat.style.display = chat.style.display === 'flex' ? 'none' : 'flex'; }
function sendMessage() {
    const input = document.getElementById('chat-input');
    const body = document.getElementById('chat-body');
    const text = input.value.trim();
    if (!text) return;
    const userDiv = document.createElement('div');
    userDiv.className = 'message user-msg';
    userDiv.innerHTML = `<p>${text}</p><span class="time">Just now</span>`;
    body.appendChild(userDiv);
    input.value = '';
    body.scrollTop = body.scrollHeight;
    chatStep++;
    setTimeout(() => {
        const botDiv = document.createElement('div');
        botDiv.className = 'message bot-msg';
        let replyText = "";
        if (chatStep === 1) {
            replyText = "Thank you for contacting Roam Kenya! We're delighted to assist you. How can we help curate your experience today? Please note that payment details are provided after the curation and booking phase is complete.";
        } else {
            replyText = "<strong>[Auto-Reply]</strong> Received! A concierge specialist is reviewing your request and will respond directly in a moment. We typically reply within 5-10 minutes during business hours.";
        }
        botDiv.innerHTML = ` <p>${replyText}</p><span class="time">Just now</span> `;
        body.appendChild(botDiv);
        body.scrollTop = body.scrollHeight;
    }, 1000);
}

window.addEventListener('load', () => { 
    setTimeout(() => { 
        const preloader = document.querySelector('.preloader'); 
        if (preloader) {
            preloader.classList.add('fade-out');
            preloader.style.opacity = "0";
            preloader.style.visibility = "hidden";
            setTimeout(() => { preloader.style.display = 'none'; }, 500);
        }
        document.querySelectorAll('.reveal').forEach(el => {
            el.classList.add('active');
            el.style.opacity = "1";
            el.style.visibility = "visible";
            el.style.transform = "none";
        });
    }, 500);
});
