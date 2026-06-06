const BLOG_POSTS = [
    { id: 1, title: 'How to Choose the Right Refurbished Laptop in Nairobi', excerpt: 'Expert tips on specs, battery, and warranty.', date: 'June 7, 2026', category: 'Buying Guide', image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800' },
    { id: 2, title: 'MacBook Air vs. Pro: Which is for you?', excerpt: 'Breaking down Apple machines for your budget.', date: 'June 5, 2026', category: 'Apple', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800' }
];
function renderBlog() {
    const g = document.getElementById("blogGrid");
    if (!g) return;
    g.innerHTML = BLOG_POSTS.map(p => "<div style='background: var(--surface); border-radius: 12px; overflow: hidden; border: 1px solid var(--border);'><img src='" + p.image + "' style='width: 100%; height: 200px; object-fit: cover;'><div style='padding: 20px;'><span style='color: var(--primary); font-size: 0.8rem; font-weight: 600;'>" + p.category + "</span><h3 style='margin: 10px 0; font-size: 1.2rem;'>" + p.title + "</h3><p style='color: var(--text-muted); font-size: 0.9rem;'>" + p.excerpt + "</p></div></div>").join('');
}
document.addEventListener('DOMContentLoaded', renderBlog);