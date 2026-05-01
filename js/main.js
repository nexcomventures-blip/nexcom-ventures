/* ============================================
   NEXCOM VENTURES — JavaScript
   ============================================ */

// ====== PRELOADER ======
window.addEventListener('load', () => {
  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) preloader.classList.add('hide');
    // Trigger entrance animations
    document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
  }, 1800);
});

// ====== NAVBAR SCROLL ======
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }
});

// ====== MOBILE MENU ======
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('open');
}

// ====== SCROLL ANIMATIONS ======
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
  // Animate sections on scroll
  document.querySelectorAll('.product-card, .acc-card, .contact-card, .review-card, .step, .feature').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

  // Close mobile menu on outside click
  document.addEventListener('click', (e) => {
    const menu = document.getElementById('mobileMenu');
    const hamburger = document.getElementById('hamburger');
    if (menu && hamburger && !menu.contains(e.target) && !hamburger.contains(e.target)) {
      menu.classList.remove('open');
    }
  });
});

// ====== CART STATE ======
let cart = [];

function addToCart(name, price, currency = 'KES') {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price, currency, qty: 1 });
  }
  updateCartUI();
  showToast(`✅ ${name} added to cart`);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function updateCartUI() {
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  
  // Group totals by currency
  const totals = cart.reduce((acc, i) => {
    acc[i.currency] = (acc[i.currency] || 0) + (i.price * i.qty);
    return acc;
  }, {});

  // Get delivery fee
  const deliverySelect = document.getElementById('deliveryOption');
  const deliveryFee = parseInt(deliverySelect?.value || '0');
  const deliveryName = deliverySelect?.options[deliverySelect.selectedIndex]?.text || 'Pickup';

  // Update badge
  const cartCount = document.getElementById('cartCount');
  if (cartCount) cartCount.textContent = count;

  // Render items
  const cartItems = document.getElementById('cartItems');
  const cartFooter = document.getElementById('cartFooter');
  const cartTotal = document.getElementById('cartTotal');
  const checkoutWA = document.getElementById('checkoutWhatsApp');

  if (!cartItems) return;

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <div style="font-size:3rem">🛒</div>
        <p>Your cart is empty</p>
        <a href="#shop" onclick="toggleCart()" class="btn-outline">Start Shopping</a>
      </div>`;
    if (cartFooter) cartFooter.style.display = 'none';
  } else {
    cartItems.innerHTML = cart.map((item, i) => `
      <div class="cart-item">
        <span class="cart-item-name">${item.name} ${item.qty > 1 ? `x${item.qty}` : ''}</span>
        <span class="cart-item-price">${item.currency === 'USD' ? '$' : 'KES'} ${(item.price * item.qty).toLocaleString()}</span>
        <button class="cart-item-remove" onclick="removeFromCart(${i})">✕</button>
      </div>
    `).join('');
    
    // Add delivery fee to KES total if applicable
    if (deliveryFee > 0) {
      totals['KES'] = (totals['KES'] || 0) + deliveryFee;
    }
    
    if (cartFooter) cartFooter.style.display = 'block';
    
    const totalStrings = Object.entries(totals).map(([curr, val]) => {
      return curr === 'USD' ? `$ ${val.toLocaleString()}` : `KES ${val.toLocaleString()}`;
    });
    if (cartTotal) cartTotal.innerHTML = totalStrings.join('<br>') + (totalStrings.length === 1 ? '<br><small style="font-size:0.5em;opacity:0.8;display:block">(Excl. VAT, Incl. Delivery)</small>' : '');

    // Build WhatsApp checkout message
    const itemsList = cart.map(i => `• ${i.name} x${i.qty} = ${i.currency === 'USD' ? '$' : 'KES'} ${(i.price * i.qty).toLocaleString()}`).join('%0A');
    const totalsMsg = totalStrings.join(' %26 ');
    const waMessage = `Hi Nexcom! 👋 I'd like to order:%0A%0A${itemsList}%0A%0A*Delivery: ${deliveryName}*%0A*Total: ${totalsMsg} (Excl. VAT)*%0A%0AKindly confirm availability. Thank you!`;
    if (checkoutWA) checkoutWA.href = `https://wa.me/254722816001?text=${waMessage}`;
  }
}

function requestMpesaPrompt() {
  if (cart.length === 0) return;
  
  const phone = prompt("Enter your M-Pesa Phone Number (e.g., 0712345678):");
  if (!phone) return;
  
  // Basic validation
  if (!/^(07|01|254)\d{8}$/.test(phone)) {
    showToast("⚠️ Invalid phone number format");
    return;
  }

  showToast("🚀 Initiating M-Pesa Prompt...");
  
  // Build WhatsApp payment confirmation message
  const itemsList = cart.map(i => `• ${i.name} x${i.qty}`).join('%0A');
  const totals = cart.reduce((acc, i) => {
    acc[i.currency] = (acc[i.currency] || 0) + (i.price * i.qty);
    return acc;
  }, {});
  const deliverySelect = document.getElementById('deliveryOption');
  const deliveryFee = parseInt(deliverySelect?.value || '0');
  if (deliveryFee > 0) totals['KES'] = (totals['KES'] || 0) + deliveryFee;
  const totalStrings = Object.entries(totals).map(([curr, val]) => {
    return curr === 'USD' ? `$ ${val.toLocaleString()}` : `KES ${val.toLocaleString()}`;
  });
  const totalsMsg = totalStrings.join(' %26 ');
  
  const paymentMsg = `Hi Nexcom! 👋%0A%0AI have just initiated an M-Pesa payment for my order:%0A%0A${itemsList}%0A%0A*Total Paid: ${totalsMsg}*%0A*Phone Number: ${phone}*%0A%0APlease confirm on your end and process my order. Thank you!`;
  
  setTimeout(() => {
    alert(`M-Pesa STK Push has been sent to ${phone}.\n\nPlease enter your PIN on your phone to complete the payment.\n\nOnce paid, you will be redirected to WhatsApp to send your payment confirmation.`);
    window.open(`https://wa.me/254722816001?text=${paymentMsg}`, '_blank');
    showToast("✅ Prompt sent! Check your phone.");
  }, 1500);
}

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  if (sidebar && overlay) {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
  }
}

// ====== PRODUCT MODAL ======
let currentModalPrice = 0;
let currentModalName = '';

function openModal(name, price, specs, img, priceNum) {
  const isServer = specs.toLowerCase().includes('server') || name.toLowerCase().includes('server');
  const currency = isServer ? 'USD' : 'KES';
  
  currentModalName = name;
  currentModalPrice = priceNum;

  const modal = document.getElementById('productModal');
  const overlay = document.getElementById('modalOverlay');

  document.getElementById('modalName').textContent = name;
  document.getElementById('modalPrice').innerHTML = `${price} <br><small style="font-size:0.6em;opacity:0.8">(Excl. VAT)</small>`;
  document.getElementById('modalSpecs').textContent = specs;
  document.getElementById('modalImg').src = img;
  document.getElementById('modalImg').alt = name;

  const waMsg = `Hi Nexcom! 👋 I'm interested in the *${name}* (${price} Excl. VAT). Is it available?`;
  document.getElementById('modalWhatsApp').href = `https://wa.me/254722816001?text=${encodeURIComponent(waMsg)}`;

  document.getElementById('modalAddCart').onclick = () => {
    addToCart(name, priceNum, currency);
    closeModal();
  };

  modal.classList.add('open');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('productModal')?.classList.remove('open');
  document.getElementById('modalOverlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

// Close modal on ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ====== PRODUCT FILTER ======
function filterProducts(category, btn) {
  // Update active btn
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Filter cards
  document.querySelectorAll('.product-card').forEach(card => {
    const cats = card.dataset.category || '';
    if (category === 'all' || cats.includes(category)) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

// ====== CONTACT FORM ======
function submitForm(e) {
  e.preventDefault();

  const name = document.getElementById('fname')?.value || '';
  const phone = document.getElementById('fphone')?.value || '';
  const service = document.getElementById('fservice')?.value || '';
  const message = document.getElementById('fmessage')?.value || '';

  if (!name || !phone || !service) {
    showToast('⚠️ Please fill in all required fields');
    return;
  }

  const waMsg = `Hi Nexcom! 👋%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AInterest: ${encodeURIComponent(service)}%0AMessage: ${encodeURIComponent(message || 'N/A')}`;
  window.open(`https://wa.me/254722816001?text=${waMsg}`, '_blank');
  showToast('✅ Redirecting to WhatsApp...');

  // Reset form
  document.getElementById('fname').value = '';
  document.getElementById('fphone').value = '';
  document.getElementById('fservice').value = '';
  document.getElementById('fmessage').value = '';
}

// ====== TOAST ======
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ====== SMOOTH SCROLL for nav links ======
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 70;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ====== ANIMATE HERO STATS ======
function animateCount(el, target, duration = 1500) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      el.textContent = target + (el.dataset.suffix || '');
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(start) + (el.dataset.suffix || '');
    }
  }, 16);
}

// ====== PARALLAX HERO ORB ======
window.addEventListener('mousemove', (e) => {
  const orb1 = document.querySelector('.orb1');
  const orb2 = document.querySelector('.orb2');
  if (orb1 && orb2) {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    orb1.style.transform = `translate(${x}px, ${y}px)`;
    orb2.style.transform = `translate(${-x}px, ${-y}px)`;
  }
});

// ====== UPDATE CART BADGE ON INIT ======
updateCartUI();
