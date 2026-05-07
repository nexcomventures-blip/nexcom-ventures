// Nexcom Quantum - High-End Systems Loader

const renderProducts = (products) => {
    const container = document.getElementById('quantumGrid');
    if (!container) return;

    container.innerHTML = products.map(p => `
        <div class="card">
            <div class="card-img">
                <img src="${p.img}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/600x400/030303/39FF14?text=${p.brand}'">
            </div>
            <div class="card-header">
                <span class="card-brand">${p.brand.toUpperCase()} // SYS.INF</span>
                <span style="font-family:'JetBrains Mono'; font-size:0.6rem; color:#333;">ID: ${p.id.substring(0,8)}</span>
            </div>
            <h3>${p.name}</h3>
            <p class="card-specs">${p.specs}</p>
            <div class="card-footer">
                <div class="card-price">KES ${p.price.toLocaleString()}</div>
                <a href="https://wa.me/254721585784?text=QUANTUM-QUERY: Spec report for ${p.name}" class="btn-quantum">Request Intel</a>
            </div>
        </div>
    `).join('');
};

const init = () => {
    if (typeof ALL_PRODUCTS !== 'undefined') {
        // Elite selection
        const elite = ALL_PRODUCTS
            .filter(p => p.price > 45000)
            .slice(0, 9);
        renderProducts(elite);
    }
};

document.addEventListener('DOMContentLoaded', init);
