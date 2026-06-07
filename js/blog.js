const BLOG_POSTS = [
    { 
        id: 1, 
        title: '5 Things to Check Before Buying a Refurbished Laptop', 
        excerpt: 'Avoid being scammed. Check battery health, screen pixels, and hinges.', 
        content: `
            <h3 style="color: #00BDD6; margin-bottom: 15px;">The Nexcom Checklist</h3>
            <p style="color: #ffffff; margin-bottom: 10px;">Buying a used laptop in Nairobi can be tricky. Here is what we check at Nexcom before selling to you:</p>
            <ul style="color: #ffffff; line-height: 1.6; padding-left: 20px;">
                <li><b style="color: #00BDD6;">Battery Health:</b> We ensure every unit holds at least 3-4 hours of charge.</li>
                <li><b style="color: #00BDD6;">SSD vs HDD:</b> Never buy a laptop with an HDD in 2026. We only stock SSD models for speed.</li>
                <li><b style="color: #00BDD6;">The Hinge Test:</b> We check for structural integrity so your screen stays firm.</li>
                <li><b style="color: #00BDD6;">Ports & Connectivity:</b> Wi-Fi, Bluetooth, and every USB port is tested.</li>
                <li><b style="color: #00BDD6;">Warranty:</b> Always ensure you get at least 3 months to test the motherboard.</li>
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
            <h3 style="color: #00BDD6; margin-bottom: 15px;">Performance Breakdown</h3>
            <p style="color: #ffffff; margin-bottom: 10px;">The M1 Air remains the best-selling laptop at Nexcom Ventures for a reason.</p>
            <p style="color: #ffffff; margin-bottom: 10px;"><b style="color: #00BDD6;">M1 Air:</b> Perfect for students, office work, and light editing. Best value for money at KES 65k-75k.</p>
            <p style="color: #ffffff;"><b style="color: #00BDD6;">M2 Air:</b> Better screen (Liquid Retina) and MagSafe charging. Choose this if you want the modern design and 20% faster processing.</p>
        `,
        date: 'June 5, 2026', 
        category: 'Apple', 
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800' 
    }
,
  {
    id: 9,
    title: "Where to get the best Laptop Repairs in Nairobi CBD",
    excerpt: "Looking for reliable laptop repairs on Mama Ngina St? Learn why Nexcom is the top choice for screen, battery, and motherboard fixes.",
    content: "When your laptop breaks down in Nairobi, you need a technician you can trust. Located on Mama Ngina Street, Nexcom Ventures offers same-day repairs for MacBook, HP, Dell, and Lenovo. From simple screen replacements to complex motherboard soldering, we use genuine parts and provide a warranty on all fixes. Don't risk your data with unqualified 'fundis'—visit us for professional diagnostic services and transparent pricing.",
    date: "June 7, 2026",
    tag: "Repair Guide",
    img: "https://images.unsplash.com/photo-1591405351990-4726e331f141?q=80&w=800"
  }
,
  {
    id: 10,
    title: "Top 10 Student Laptops in Nairobi (2026 Edition)",
    excerpt: "From Lenovo ThinkPads to HP ProBooks, find the most durable and affordable laptops for campus life in Kenya.",
    content: "University life in Nairobi requires a laptop that is fast, light, and has a long-lasting battery. For 2026, we recommend the Lenovo ThinkPad T480s for its durability, or the HP EliteBook 840 G5 for its premium feel at a student budget. At Nexcom, we offer special student discounts and ensure every laptop comes pre-loaded with Microsoft Office and essential research tools.",
    date: "June 7, 2026",
    category: "Buying Guide",
    image: "https://images.unsplash.com/photo-1523240715630-9918c13bc1ad?q=80&w=800"
  },
  {
    id: 11,
    title: "HP EliteBook vs Dell Latitude: Which is best for Kenyan Offices?",
    excerpt: "A deep dive into the two most popular office laptops in Nairobi to help you decide.",
    content: "Nairobi businesses often debate between HP and Dell. EliteBooks are known for their sleek aluminum design and superior screens, while Dell Latitudes are praised for their robust build and ease of repair. In our experience at Nexcom, EliteBooks are perfect for sales teams and executives, while Latitudes are workhorses for back-office operations. Both offer excellent security features for corporate data.",
    date: "June 7, 2026",
    category: "Comparison",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800"
  },
  {
    id: 12,
    title: "MacBook Air M1 in 2026: Still the king of value in Kenya?",
    excerpt: "Why the M1 Air remains our top-selling MacBook for remote workers and students in Nairobi.",
    content: "Even in 2026, the MacBook Air M1 is the best-value Apple laptop you can buy in Kenya. Its battery life easily lasts a full day of meetings or classes, and it runs silent without fans. For designers and writers in Nairobi, it offers professional performance at a fraction of the cost of newer models. We stock pristine Ex-UK M1 units starting from KES 65,000.",
    date: "June 7, 2026",
    category: "Apple",
    image: "https://images.unsplash.com/photo-1611186871348-b1ec696e5237?q=80&w=800"
  },
  {
    id: 13,
    title: "The Ultimate Coding Laptop Guide for Nairobi Developers",
    excerpt: "Looking for a machine that handles VS Code, Docker, and Android Studio? Here's what you need.",
    content: "Kenyan developers need high RAM and fast SSDs. We recommend at least 16GB of RAM for local development. The Lenovo ThinkPad T14 or the MacBook Pro 14-inch are our top picks for devs in Nairobi. They offer the ports you need and the processing power to handle heavy compilations. Visit Nexcom to test our dedicated dev-spec machines.",
    date: "June 7, 2026",
    category: "Tech Guide",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800"
  },
  {
    id: 14,
    title: "Best Laptops for Graphic Design & Video Editing in Kenya",
    excerpt: "High-color accuracy and dedicated GPUs: What to look for in a creative workstation.",
    content: "Graphic designers in Nairobi shouldn't settle for average screens. You need 100% sRGB color accuracy. We recommend the Dell XPS series or high-end HP ZBooks. For video editors, the MacBook Pro M1/M2 Max remains the industry standard. At Nexcom, we help you find machines with dedicated NVIDIA graphics to speed up your rendering times.",
    date: "June 7, 2026",
    category: "Creative",
    image: "https://images.isson.com/photo-1558655146-d09347e92766?q=80&w=800"
  }
];

function showPost(id) {
    const post = BLOG_POSTS.find(p => p.id === id);
    if (!post) return;
    
    const modal = document.createElement('div');
    modal.style = 'position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.9); z-index:9999; display:flex; align-items:center; justify-content:center; padding:20px; font-family: sans-serif;';
    modal.onclick = () => modal.remove();
    
    modal.innerHTML = "<div style='background:#1a1a1a; max-width:600px; width:100%; max-height:90vh; overflow-y:auto; border-radius:15px; position:relative; border: 1px solid #333;' onclick='event.stopPropagation()'><img src='" + post.image + "' style='width:100%; height:250px; object-fit:cover;'><div style='padding:30px;'><span style='color:#00BDD6; font-weight:600; text-transform: uppercase; font-size: 0.8rem;'>" + post.category + "</span><h2 style='margin-top:10px; color: #ffffff;'>" + post.title + "</h2><div style='margin-top:20px; line-height:1.6;'>" + post.content + "</div><button onclick='this.parentElement.parentElement.parentElement.remove()' style='margin-top:30px; background:#00BDD6; color:white; border:none; padding:12px 25px; border-radius:8px; cursor:pointer; font-weight: bold; width: 100%;'>Close Reading</button></div></div>";
    document.body.appendChild(modal);
}

function renderBlog() {
    const g = document.getElementById("blogGrid");
    if (!g) return;
    g.innerHTML = BLOG_POSTS.map(p => "<div onclick='showPost(" + p.id + ")' style='background: #1a1a1a; border-radius: 12px; overflow: hidden; border: 1px solid #333; cursor:pointer;'><img src='" + p.image + "' style='width: 100%; height: 200px; object-fit: cover; opacity: 0.8;'><div style='padding: 20px;'><span style='color: #00BDD6; font-size: 0.8rem; font-weight: 600; text-transform: uppercase;'>" + p.category + "</span><h3 style='margin: 10px 0; font-size: 1.2rem; color: #ffffff;'>" + p.title + "</h3><p style='color: #aaaaaa; font-size: 0.9rem;'>" + p.excerpt + "</p><p style='color:#00BDD6; font-weight:600; font-size:0.8rem; margin-top:15px;'>READ ARTICLE →</p></div></div>").join('');
}
document.addEventListener('DOMContentLoaded', renderBlog);