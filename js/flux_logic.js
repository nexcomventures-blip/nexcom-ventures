// Nexcom Flux - Vibrant Dynamic Loader

const renderProducts = (products) => {
    const container = document.getElementById('fluxGrid');
    if (!container) return;

    container.innerHTML = products.map(p => `
        <div class="card">
            <div class="img-area">
                <img src="${p.img}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/600x400/F8F9FD/FF3CAC?text=${p.brand}'">
            </div>
            <div style="font-size: 0.75rem; font-weight: 800; color: #784BA0; text-transform: uppercase; margin-bottom: 0.5rem; letter-spacing: 1px;">${p.brand}</div>
            <h3>${p.name}</h3>
            <p class="card-specs">${p.specs}</p>
            <div class="card-bottom">
                <div class="price">KSH ${p.price.toLocaleString()}</div>
                <a href="https://wa.me/254721585784?text=Interested in the ${p.name}" class="btn-flux" style="padding: 0.6rem 1.4rem; font-size: 0.75rem; box-shadow: none;">View</a>
            </div>
        </div>
    `).join('');
};

const init = () => {
    if (typeof ALL_PRODUCTS !== 'undefined') {
        const displaySet = ALL_PRODUCTS
            .sort(() => 0.5 - Math.random())
            .slice(0, 9);
        renderProducts(displaySet);
    }
};

document.addEventListener('DOMContentLoaded', init);
