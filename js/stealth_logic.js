// Nexcom Stealth - Dynamic Loader

const renderProducts = (products) => {
    const container = document.getElementById('inventory');
    if (!container) return;

    container.innerHTML = products.map(p => `
        <div class="card">
            ${p.badge ? `<div class="card-badge">${p.badge.toUpperCase()}</div>` : ''}
            <div class="card-img">
                <img src="${p.img}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/400x300/111/fff?text=${p.brand}'">
            </div>
            <div class="card-content">
                <div style="color:var(--primary); font-size:0.75rem; font-weight:700; text-transform:uppercase; margin-bottom:0.25rem;">${p.brand}</div>
                <h3>${p.name || 'Premium Device'}</h3>
                <p class="card-specs">${p.specs}</p>
                <div class="card-footer">
                    <div class="card-price">KSH ${p.price.toLocaleString()}</div>
                    <a href="https://wa.me/254721585784?text=Requesting Stealth quote for: ${p.name}" class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.7rem;">Buy Now</a>
                </div>
            </div>
        </div>
    `).join('');
};

const init = () => {
    if (typeof ALL_PRODUCTS !== 'undefined') {
        // Focus on high-end / featured
        const featured = ALL_PRODUCTS
            .filter(p => p.price > 50000 || p.badge === 'new')
            .slice(0, 9);
        renderProducts(featured);
    }
};

document.addEventListener('DOMContentLoaded', init);
