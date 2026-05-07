// Nexcom Aura - Minimalist Loader

const renderProducts = (products) => {
    const container = document.getElementById('auraInventory');
    if (!container) return;

    container.innerHTML = products.map(p => `
        <div class="item-card">
            <div class="img-box">
                ${p.badge ? `<div class="badge">${p.badge.toUpperCase()}</div>` : ''}
                <img src="${p.img}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/500x500/F5F5F7/333?text=${p.brand}'">
            </div>
            <div class="item-info">
                <div style="font-size: 0.7rem; font-weight: 700; color: #999; text-transform: uppercase; margin-bottom: 0.2rem;">${p.brand}</div>
                <h3>${p.name || 'Premium Notebook'}</h3>
                <p class="item-specs">${p.specs}</p>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span class="item-price">KES ${p.price.toLocaleString()}</span>
                    <a href="https://wa.me/254721585784?text=Interested in the ${p.name}" class="btn-dark btn" style="padding: 0.5rem 1.2rem; font-size: 0.75rem;">Inquire</a>
                </div>
            </div>
        </div>
    `).join('');
};

const init = () => {
    if (typeof ALL_PRODUCTS !== 'undefined') {
        // High end selection
        const auraSet = ALL_PRODUCTS
            .filter(p => p.price > 30000)
            .sort(() => 0.5 - Math.random()) // Randomize for variety
            .slice(0, 9);
        renderProducts(auraSet);
    }
};

document.addEventListener('DOMContentLoaded', init);
