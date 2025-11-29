// public/js/cart.js

const CART_KEY = 'encanto_rosa_cart';

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function getCartCount(cart) {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function updateCartBadge() {
  const cart = loadCart();
  const count = getCartCount(cart);
  document.querySelectorAll('.cart-count').forEach(span => {
    span.textContent = count;
  });
}

// Adicionar item
function addToCart(name, price) {
  const cart = loadCart();
  const existing = cart.find(item => item.name === name);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }

  saveCart(cart);
  updateCartBadge();
}

// Remover item (tudo)
function removeFromCart(name) {
  let cart = loadCart();
  cart = cart.filter(item => item.name !== name);
  saveCart(cart);
  renderCartPage();
  updateCartBadge();
}

// Renderizar página do carrinho
function renderCartPage() {
  const tbody = document.getElementById('cart-items');
  const wrapper = document.getElementById('cart-table-wrapper');
  const empty = document.getElementById('cart-empty');
  const totalSpan = document.getElementById('cart-total');

  if (!tbody || !wrapper || !empty || !totalSpan) return;

  const cart = loadCart();

  if (cart.length === 0) {
    wrapper.style.display = 'none';
    empty.style.display = 'block';
    return;
  }

  wrapper.style.display = 'block';
  empty.style.display = 'none';

  tbody.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const subtotal = item.price * item.qty;
    total += subtotal;

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${item.name}</td>
      <td>${item.qty}</td>
      <td>R$ ${item.price.toFixed(2).replace('.', ',')}</td>
      <td>R$ ${subtotal.toFixed(2).replace('.', ',')}</td>
      <td>
        <button class="btn btn-sm btn-outline-danger btn-remove-item" data-name="${item.name}">
          Remover
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  totalSpan.textContent = 'R$ ' + total.toFixed(2).replace('.', ',');

  // Botões de remover
  document.querySelectorAll('.btn-remove-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.getAttribute('data-name');
      removeFromCart(name);
    });
  });
}

// WhatsApp
function setupWhatsAppButton() {
  const btn = document.getElementById('btn-whatsapp');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const cart = loadCart();
    if (cart.length === 0) {
      alert('Seu carrinho está vazio.');
      return;
    }

    let message = 'Olá, Encanto Rosa Doceria!%0AQuero fazer um pedido:%0A%0A';
    let total = 0;

    cart.forEach(item => {
      const subtotal = item.price * item.qty;
      total += subtotal;
      message += `• ${item.qty}x ${item.name} - R$ ${subtotal.toFixed(2).replace('.', ',')}%0A`;
    });

    message += `%0ATotal: R$ ${total.toFixed(2).replace('.', ',')}%0A`;
    message += '%0AForma de entrega: (retirada/entrega?)%0A';
    message += 'Nome:%0ABairro:%0A';

    const phone = '556992020634';
    const url = `https://wa.me/${phone}?text=${message}`;

    window.open(url, '_blank');
  });
}

// Listener para os botões "+ Carrinho"
function setupAddButtons() {
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', event => {
      event.preventDefault();
      const name = btn.getAttribute('data-name');
      const price = parseFloat(btn.getAttribute('data-price') || '0');

      if (!name || !price) return;

      addToCart(name, price);
      alert('Produto adicionado ao carrinho!');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  setupAddButtons();
  renderCartPage();
  setupWhatsAppButton();
});
