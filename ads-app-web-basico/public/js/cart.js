// public/js/cart.js

const CART_KEY = 'encanto_rosa_cart';

// -------------------------
// Utilidades do carrinho
// -------------------------
function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const cart = loadCart();
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = count;
  });
}

// -------------------------
// Controles + / - na página de CARDÁPIO
// -------------------------
function setupQuantityButtons() {
  const controls = document.querySelectorAll('.cart-controls');
  if (!controls.length) return; // se estiver na página do carrinho, ignora

  controls.forEach(control => {
    const qtySpan = control.querySelector('.quantity');
    const btnPlus = control.querySelector('.btn-plus');
    const btnMinus = control.querySelector('.btn-minus');
    const addBtn = control.querySelector('.btn-add');

    let qty = 0;
    qtySpan.textContent = qty;

    function refreshAddBtn() {
      addBtn.style.opacity = qty > 0 ? '1' : '0.4';
    }
    refreshAddBtn();

    btnPlus.addEventListener('click', () => {
      qty++;
      qtySpan.textContent = qty;
      refreshAddBtn();
    });

    btnMinus.addEventListener('click', () => {
      if (qty > 0) qty--;
      qtySpan.textContent = qty;
      refreshAddBtn();
    });

    addBtn.addEventListener('click', () => {
      if (qty === 0) return;

      const name = control.dataset.name;
      const price = Number(control.dataset.price || '0');

      if (!name || !price) return;

      const cart = loadCart();
      const existing = cart.find(item => item.name === name);

      if (existing) {
        existing.qty += qty;
      } else {
        cart.push({ name, price, qty });
      }

      qty = 0;
      qtySpan.textContent = 0;
      refreshAddBtn();
      saveCart(cart);
    });
  });
}

// -------------------------
// Renderizar PÁGINA DO CARRINHO
// -------------------------
function renderCartPage() {
  const tbody = document.getElementById('cart-items');
  const wrapper = document.getElementById('cart-table-wrapper');
  const emptyBox = document.getElementById('cart-empty');
  const totalSpan = document.getElementById('cart-total');

  // Se não estiver na página do carrinho, sai
  if (!tbody || !wrapper || !emptyBox || !totalSpan) return;

  const cart = loadCart();

  if (cart.length === 0) {
    wrapper.style.display = 'none';
    emptyBox.style.display = 'block';
    totalSpan.textContent = 'R$ 0,00';
    return;
  }

  wrapper.style.display = 'block';
  emptyBox.style.display = 'none';

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

  document.querySelectorAll('.btn-remove-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.getAttribute('data-name');
      let cart = loadCart();
      cart = cart.filter(item => item.name !== name);
      saveCart(cart);
      renderCartPage();
    });
  });
}

// -------------------------
// WhatsApp (finalizar pedido)
// -------------------------
function setupWhatsAppButton() {
  const btn = document.getElementById('btn-whatsapp');
  if (!btn) return; // se não estiver na página do carrinho, ignora

  btn.addEventListener('click', () => {
    const cart = loadCart();
    if (cart.length === 0) {
      alert('Seu carrinho está vazio.');
      return;
    }

    let message = 'Olá, Encanto Doceria!%0AQuero fazer um pedido:%0A%0A';
    let total = 0;

    cart.forEach(item => {
      const subtotal = item.price * item.qty;
      total += subtotal;
      message += `• ${item.qty} - ${item.name} - R$ ${subtotal.toFixed(2).replace('.', ',')}%0A`;
    });

    message += `%0ATotal: R$ ${total.toFixed(2).replace('.', ',')}%0A`;

    const name = document.getElementById('client-name')?.value.trim() || '';
    const street = document.getElementById('client-street')?.value.trim() || '';
    const number = document.getElementById('client-number')?.value.trim() || '';
    const neighborhood = document.getElementById('client-neighborhood')?.value.trim() || '';
    const cep = document.getElementById('client-cep').value.trim();
    const payment = document.getElementById('payment-method').value;
    const changeValue = document.getElementById('client-change') ? document.getElementById('client-change').value.trim() : '';


    if (!name || !street || !number || !neighborhood) {
      alert('Por favor, preencha nome, rua, número e bairro.');
      return;
    }

    message += `%0ACliente: ${name}`;
    message += `%0AEndereço: ${street}, Nº ${number} - ${neighborhood}`;
    if (cep) {
      message += `%0ACEP: ${cep}`;
    }
    // Forma de Pagamento
    if (!payment) {
      alert('Selecione uma forma de pagamento!');
      return;
    }

    message += `%0A Forma de pagamento: ${payment}`;

    if (payment === 'Dinheiro' && changeValue) {
      message += `%0A Troco para: R$ ${Number(changeValue).toFixed(2).replace('.', ',')}`;
    }


    const phone = '556992020634';
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, '_blank');
  });
}

// -------------------------
// Inicialização
// -------------------------
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  setupQuantityButtons();
  renderCartPage();
  setupWhatsAppButton();

  const paymentSelect = document.getElementById('payment-method');
  const changeField = document.getElementById('change-wrapper');

  if (paymentSelect && changeField) {
    // Esconde inicialmente
    changeField.style.display = "none";

    paymentSelect.addEventListener('change', () => {
      if (paymentSelect.value === "Dinheiro") {
        changeField.style.display = "block";
      } else {
        changeField.style.display = "none";
      }
    });
  }
});
