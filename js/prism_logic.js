// Nexcom Prism - Dynamic Interactive Loader

const renderProducts = (products) => {
    const container = document.getElementById('prismGrid');
    if (!container) return;

    container.innerHTML = products.map(p => `
        <div class="card">
            <div class="card-img">
                ${p.badge ? `<div class="card-tag">${p.badge.toUpperCase()}</div>` : ''}
                <img src="${p.img}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/400x300/0A0A0B/00F5FF?text=${p.brand}'">
            </div>
            <div class="card-info">
                <div style="font-size: 0.7rem; font-weight: 700; color: var(--primary-purple); text-transform: uppercase; margin-bottom: 0.5rem; letter-spacing: 2px;">${p.brand}</div>
                <h3>${p.name || 'High Performance Machine'}</h3>
                <p class="card-specs">${p.specs}</p>
                <div class="card-footer">
                    <div class="card-price">KSH ${p.price.toLocaleString()}</div>
                    <a href="https://wa.me/254721585784?text=PRISM-ORDER: I want to purchase ${p.name}" class="btn btn-cyan" style="padding: 0.6rem 1.2rem; font-size: 0.7rem; border-radius: 8px;">Order Now</a>
                </div>
            </div>
        </div>
    `).join('');
};

const init = () => {
    if (typeof ALL_PRODUCTS !== 'undefined') {
        // High-end mix
        const prismSet = ALL_PRODUCTS
            .filter(p => p.price > 25000)
            .sort(() => 0.5 - Math.random())
            .slice(0, 8);
        renderProducts(prismSet);
    }
};

document.addEventListener('DOMContentLoaded', init);
