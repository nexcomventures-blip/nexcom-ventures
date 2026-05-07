// Nexcom Crimson - Bold White & Red Loader

const renderProducts = (products) => {
    const container = document.getElementById('crimsonGrid');
    if (!container) return;

    container.innerHTML = products.map(p => `
        <div class="card">
            <div class="card-img">
                <img src="${p.img}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/600x400/F8F8F8/990000?text=${p.brand}'">
            </div>
            <span class="card-brand">${p.brand}</span>
            <h3>${p.name}</h3>
            <p class="card-specs">${p.specs}</p>
            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #EEE; padding-top: 1.5rem;">
                <div class="card-price">KSH ${p.price.toLocaleString()}</div>
                <a href="https://wa.me/254721585784?text=Interested in ${p.name}" class="btn-crimson" style="padding: 0.6rem 1.2rem; font-size: 0.75rem;">Inquire</a>
            </div>
        </div>
    `).join('');
};

const init = () => {
    if (typeof ALL_PRODUCTS !== 'undefined') {
        const set = ALL_PRODUCTS.sort(() => 0.5 - Math.random()).slice(0, 9);
        renderProducts(set);
    }
};

document.addEventListener('DOMContentLoaded', init);
