// Nexcom Neo - Dynamic Loading Logic

const renderProducts = (products) => {
    const container = document.getElementById('productGrid');
    if (!container) return;

    container.innerHTML = products.map(p => `
        <div class="product-card">
            <div class="product-image">
                ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
                <img src="${p.img}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/400x300?text=${p.brand}'">
            </div>
            <div class="product-content">
                <div class="product-brand">${p.brand}</div>
                <h3 class="product-name">${p.name || (p.brand + ' Laptop')}</h3>
                <p class="product-specs">${p.specs}</p>
                <div class="product-footer">
                    <div class="product-price">KES ${p.price.toLocaleString()}</div>
                    <a href="https://wa.me/254721585784?text=Hi! I am interested in ${p.name || p.brand}" class="btn btn-primary">Order</a>
                </div>
            </div>
        </div>
    `).join('');
};

const init = () => {
    // Filter for some featured laptops to show on homepage
    // We'll take the first 6 products that are laptops
    if (typeof ALL_PRODUCTS !== 'undefined') {
        const featured = ALL_PRODUCTS
            .filter(p => p.category.includes('laptop'))
            .slice(0, 8);
        renderProducts(featured);
    }
};

document.addEventListener('DOMContentLoaded', init);
