const BLOG_POSTS = [
    { 
        id: 1, 
        title: '5 Things to Check Before Buying a Refurbished Laptop', 
        excerpt: 'Avoid being scammed. Check battery health, screen pixels, and hinges.', 
        content: `
            <h3>The Nexcom Checklist</h3>
            <p>Buying a used laptop in Nairobi can be tricky. Here is what we check at Nexcom before selling to you:</p>
            <ul>
                <li><b>Battery Health:</b> We ensure every unit holds at least 3-4 hours of charge.</li>
                <li><b>SSD vs HDD:</b> Never buy a laptop with an HDD in 2026. We only stock SSD models for speed.</li>
                <li><b>The Hinge Test:</b> We check for structural integrity so your screen stays firm.</li>
                <li><b>Ports & Connectivity:</b> Wi-Fi, Bluetooth, and every USB port is tested.</li>
                <li><b>Warranty:</b> Always ensure you get at least 3 months to test the motherboard.</li>
            </ul>
        `,
        date: 'June 7, 2026', 
        category: 'Buying Guide', 
        image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800' 
    },
    { 
        id: 2, 
        title: 'MacBook Air M1 vs M2: Is the upgrade worth it?', 
        excerpt: 'Comparing the two kings of portability for the Kenyan professional.', 
        content: `
            <h3>Performance Breakdown</h3>
            <p>The M1 Air remains the best-selling laptop at Nexcom Ventures for a reason.</p>
            <p><b>M1 Air:</b> Perfect for students, office work, and light editing. Best value for money at KES 65k-75k.</p>
            <p><b>M2 Air:</b> Better screen (Liquid Retina) and MagSafe charging. Choose this if you want the modern design and 20% faster processing.</p>
        `,
        date: 'June 5, 2026', 
        category: 'Apple', 
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800' 
    }
];

function showPost(id) {
    const post = BLOG_POSTS.find(p => p.id === id);
    if (!post) return;
    
    const modal = document.createElement('div');
    modal.style = 'position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.8); z-index:9999; display:flex; align-items:center; justify-content:center; padding:20px;';
    modal.onclick = () => modal.remove();
    
    modal.innerHTML = "<div style='background:var(--surface); max-width:600px; width:100%; max-height:90vh; overflow-y:auto; border-radius:15px; position:relative;' onclick='event.stopPropagation()'><img src='" + post.image + "' style='width:100%; height:250px; object-fit:cover;'><div style='padding:30px;'><span style='color:var(--primary); font-weight:600;'>" + post.category + "</span><h2 style='margin-top:10px;'>" + post.title + "</h2><div style='margin-top:20px; line-height:1.6;'>" + post.content + "</div><button onclick='this.parentElement.parentElement.parentElement.remove()' style='margin-top:30px; background:var(--primary); color:white; border:none; padding:10px 20px; border-radius:5px; cursor:pointer;'>Close</button></div></div>";
    document.body.appendChild(modal);
}

function renderBlog() {
    const g = document.getElementById("blogGrid");
    if (!g) return;
    g.innerHTML = BLOG_POSTS.map(p => "<div onclick='showPost(" + p.id + ")' style='background: var(--surface); border-radius: 12px; overflow: hidden; border: 1px solid var(--border); cursor:pointer;'><img src='" + p.image + "' style='width: 100%; height: 200px; object-fit: cover;'><div style='padding: 20px;'><span style='color: var(--primary); font-size: 0.8rem; font-weight: 600;'>" + p.category + "</span><h3 style='margin: 10px 0; font-size: 1.2rem;'>" + p.title + "</h3><p style='color: var(--text-muted); font-size: 0.9rem;'>" + p.excerpt + "</p><p style='color:var(--primary); font-weight:600; font-size:0.8rem; margin-top:10px;'>READ MORE →</p></div></div>").join('');
}
document.addEventListener('DOMContentLoaded', renderBlog);