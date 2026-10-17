// scripts.js - Common JavaScript functions for KopiHub

// Toggle password visibility (used in index.html)
function togglePassword() {
  const password = document.getElementById('password');
  if (password) {
    password.type = password.type === 'password' ? 'text' : 'password';
  }
}

// Toggle specific input visibility by element id
function toggleFieldVisibility(id) {
  const field = document.getElementById(id);
  if (field) {
    field.type = field.type === 'password' ? 'text' : 'password';
  }
}

// Change quantity (used in detail-product.html)
let qty = 1;
function changeQty(val) {
  qty += val;
  if (qty < 1) qty = 1;
  const qtyElement = document.getElementById('qty');
  if (qtyElement) {
    qtyElement.innerText = qty;
  }
}

// Update quantity and calculate total (used in order.html)
let orderQty = 2;
const price = 120000;
const shipping = 20000;

function updateQty(val) {
  orderQty += val;
  if (orderQty < 1) orderQty = 1;

  const qtyElement = document.getElementById('qty');
  const qtyBoxElement = document.getElementById('qtyBox');
  const subtotalElement = document.getElementById('subtotal');
  const subTotalTextElement = document.getElementById('subTotalText');
  const totalElement = document.getElementById('total');

  if (qtyElement) qtyElement.innerText = orderQty;
  if (qtyBoxElement) qtyBoxElement.innerText = orderQty;

  const subtotal = orderQty * price;
  if (subtotalElement) subtotalElement.innerText = subtotal.toLocaleString('id-ID');
  if (subTotalTextElement) subTotalTextElement.innerText = subtotal.toLocaleString('id-ID');
  if (totalElement) totalElement.innerText = (subtotal + shipping).toLocaleString('id-ID');
}

function submitOrder() {
  alert('Pesanan berhasil dibuat (simulasi)');
}

// Remove item from wishlist (used in wishlist.html)
function removeItem(btn) {
  const card = btn.closest('.bg-white');
  if (card) {
    card.remove();
    const emptyState = document.getElementById('emptyState');
    if (emptyState && document.querySelectorAll('.bg-white').length === 0) {
      emptyState.classList.remove('hidden');
    }
  }
}

function orderNow() {
  alert('Redirect ke halaman pesanan (simulasi)');
}

// Logout function (used in profile.html)
function logout() {
  alert('Logout berhasil (simulasi)');
  window.location.href = '/index.html';
}

// Form submit listeners
document.addEventListener('DOMContentLoaded', function() {
  // Login form (index.html)
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Login berhasil (simulasi)');
      window.location.href = 'pages/home.html';
    });
  }

  // Register form (pages/register.html)
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const pass = document.getElementById('registerPassword')?.value;
      const confirmPass = document.getElementById('confirmPassword')?.value;
      if (pass && confirmPass && pass !== confirmPass) {
        alert('Kata sandi dan konfirmasi kata sandi tidak cocok!');
        return;
      }
      alert('Pendaftaran berhasil (simulasi)! Silakan masuk dengan akun baru Anda.');
      window.location.href = '../index.html';
    });
  }

  // Forgot password form (pages/forgot-password.html)
  const forgotPasswordForm = document.getElementById('forgotPasswordForm');
  if (forgotPasswordForm) {
    forgotPasswordForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('forgotEmail')?.value || 'email Anda';
      alert('Tautan pemulihan kata sandi telah dikirim ke ' + email + ' (simulasi). Silakan periksa kotak masuk email Anda!');
      window.location.href = '../index.html';
    });
  }

  // Home filter & search handler (pages/home.html)
  initHomeFilter();
});

// Category and Search Filtering on home.html
function initHomeFilter() {
  const categoryBtns = document.querySelectorAll('.category-btn');
  const productCards = document.querySelectorAll('.product-card');
  const searchInput = document.getElementById('searchInput');
  const productCount = document.getElementById('productCount');
  const noProducts = document.getElementById('noProducts');

  if (categoryBtns.length === 0 || productCards.length === 0) return;

  // Read URL query parameter: ?category=...
  const urlParams = new URLSearchParams(window.location.search);
  let activeCategory = urlParams.get('category')?.toLowerCase() || 'all';

  function applyFilter() {
    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    let visibleCount = 0;

    productCards.forEach(card => {
      const cardCategories = (card.getAttribute('data-category') || '').toLowerCase();
      const cardName = (card.getAttribute('data-name') || '').toLowerCase();
      const cardOrigin = (card.getAttribute('data-origin') || '').toLowerCase();
      const cardFarmer = (card.getAttribute('data-farmer') || '').toLowerCase();

      // Check category match
      const categoryMatch = (activeCategory === 'all') || cardCategories.includes(activeCategory);

      // Check search keyword match
      const searchMatch = !searchTerm || 
        cardName.includes(searchTerm) || 
        cardOrigin.includes(searchTerm) || 
        cardFarmer.includes(searchTerm);

      if (categoryMatch && searchMatch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // Update count & empty state
    if (productCount) {
      productCount.innerText = `${visibleCount} produk`;
    }
    if (noProducts) {
      if (visibleCount === 0) {
        noProducts.classList.remove('hidden');
      } else {
        noProducts.classList.add('hidden');
      }
    }
  }

  // Update button visual styles
  function updateButtonStyles() {
    categoryBtns.forEach(btn => {
      const cat = btn.getAttribute('data-category');
      if (cat === activeCategory) {
        btn.classList.add('bg-coffee', 'text-white');
        btn.classList.remove('bg-white', 'text-gray-700', 'shadow');
      } else {
        btn.classList.remove('bg-coffee', 'text-white');
        btn.classList.add('bg-white', 'text-gray-700', 'shadow');
      }
    });
  }

  // Bind category button clicks
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      activeCategory = this.getAttribute('data-category');
      updateButtonStyles();
      applyFilter();

      // Update URL without page reload
      const newUrl = new URL(window.location);
      if (activeCategory === 'all') {
        newUrl.searchParams.delete('category');
      } else {
        newUrl.searchParams.set('category', activeCategory);
      }
      window.history.replaceState({}, '', newUrl);
    });
  });

  // Bind search input
  if (searchInput) {
    searchInput.addEventListener('input', applyFilter);
  }

  // Run on initial page load
  updateButtonStyles();
  applyFilter();
}