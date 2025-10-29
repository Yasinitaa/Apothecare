// ===============================
// 🧩 DATA
// ===============================
const topProducts = [
  { id: 1, name: "Paracetamol 500mg", price: 3.59 },
  { id: 2, name: "Vitamine C 250mg", price: 4.29 },
  { id: 3, name: "Handgel 100ml", price: 5.99 },
  { id: 4, name: "Zetpil 240mg", price: 2.99 },
  { id: 5, name: "Allergie tablet", price: 7.29 },
];

const products = [
  { id: 1, name: "Paracetamol 500mg", price: 3.59, image: "../img/Paracetamol.jpg" },
  { id: 2, name: "Ibuprofen 200mg", price: 4.99, image: "../img/ibuprofen-200mg-tabletten.png"  },
  { id: 3, name: "Vitamine C 250mg", price: 4.29 },
  { id: 4, name: "Vitamine D 1000IU", price: 6.49 },
  { id: 5, name: "Handgel 100ml", price: 5.99 },
  { id: 6, name: "Allergie tablet", price: 7.29 },
  { id: 7, name: "Zetpil 240mg", price: 2.99 },
  { id: 8, name: "Neusspray", price: 5.49 },
  { id: 9, name: "Hoestsiroop", price: 8.49 },
  { id: 10, name: "Pleisters (20 stuks)", price: 3.99 },
];

// ===============================
// 🛒 CART COUNTER + ANIMATION
// ===============================
function updateCartCount() {
  const count = parseInt(localStorage.getItem("cartCount")) || 0;
  const cart = document.querySelector(".cart");
  if (!cart) return;

  const old = cart.querySelector(".cart-count");
  if (old) old.remove();

  if (count > 0) {
    const badge = document.createElement("span");
    badge.classList.add("cart-count");
    badge.textContent = count > 9 ? "9+" : count;
    cart.appendChild(badge);
  }
}

function incrementCartCount(id) {
  let count = parseInt(localStorage.getItem("cartCount")) || 0;
  count++;
  localStorage.setItem("cartCount", count);
  updateCartCount();

  // add to stored products
  const product = products.find(p => p.id == id);
  if (product) {
    let cart = JSON.parse(localStorage.getItem("cartProducts")) || [];
    cart.push(product);
    localStorage.setItem("cartProducts", JSON.stringify(cart));
  }

  // bounce animation
  const badge = document.querySelector(".cart-count");
  if (badge) {
    badge.classList.remove("cart-bounce");
    void badge.offsetWidth;
    badge.classList.add("cart-bounce");
  }
}

// ===============================
// 🛍️ RENDER PRODUCTS
// ===============================
function renderProducts() {
  const grid = document.querySelector(".product-grid");
  if (!grid) return;

  grid.innerHTML = "";
  products.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("card");

    // ✅ only render <img> if an image property exists
    const imgHTML = p.image
      ? `<img src="${p.image}" alt="${p.name}">`
      : "";

    card.innerHTML = `
      ${imgHTML}
      <h4>${p.name}</h4>
      <div class="price">€${p.price.toFixed(2)}</div>
      <button class="add-to-cart" data-id="${p.id}">Toevoegen</button>
    `;

    grid.appendChild(card);
  });
}

// ===============================
// ⭐ RENDER TOP PRODUCTS (HOME)
// ===============================
function renderTopProducts() {
  const grid = document.querySelector(".top-products");
  if (!grid) return;

  grid.innerHTML = "";
  topProducts.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h4>${p.name}</h4>
      <div class="price">€${p.price.toFixed(2)}</div>
    `;
    grid.appendChild(card);
  });
}

// ===============================
// 🚀 INIT
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

  if (path.includes("home")) renderTopProducts();
  if (path.includes("products")) renderProducts();

  document.body.addEventListener("click", e => {
    const btn = e.target.closest(".add-to-cart");
    if (!btn) return;

    const id = btn.dataset.id;
    incrementCartCount(id);
  });

  updateCartCount();
});

// ===============================
// 💬 CHAT (works on all pages)
// ===============================
function getChatEndpoint() {
  // Always post to home.php (which already handles chat correctly)
  return "home.php";
}

const chatBox = document.getElementById("chatBox");
const chatContent = document.getElementById("chatContent");
const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");

if (chatBox && chatContent && chatForm && userInput) {
  function toggleChat() {
    // --- CLOSE (fade-out) ---
    if (chatBox.classList.contains("open")) {
      chatBox.classList.add("closing");
      chatBox.classList.remove("open");

      const hideAfter = () => {
        chatBox.style.display = "none";
        chatBox.removeEventListener("transitionend", hideAfter);
        chatBox.classList.remove("closing");
      };
      chatBox.addEventListener("transitionend", hideAfter);
      return;
    }

    // --- OPEN (fade-in) ---
    chatBox.style.display = "block";
    requestAnimationFrame(() => chatBox.classList.add("open"));
  }

  window.toggleChat = toggleChat;

  chatForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const message = userInput.value.trim();
    if (!message) return;

    // show user message
    chatContent.innerHTML += `<div class="message userMsg"><strong>Jij:</strong> ${message}</div>`;
    chatContent.scrollTop = chatContent.scrollHeight;
    userInput.value = "";

    const formData = new FormData();
    formData.append("vraag", message);

    try {
      // Always send chat requests to home.php
      const res = await fetch(getChatEndpoint(), {
        method: "POST",
        headers: { "X-Requested-With": "XMLHttpRequest" },
        body: formData,
      });

      const text = await res.text();

      // Avoid printing full HTML pages inside chat
      const looksLikeHtml = /^\s*<!doctype html|^\s*<html/i.test(text);
      chatContent.innerHTML += `<div class="message aiMsg">${
        looksLikeHtml ? "⚠️ De server gaf HTML terug i.p.v. chattekst." : text
      }</div>`;
      chatContent.scrollTop = chatContent.scrollHeight;
    } catch (err) {
      chatContent.innerHTML += `<div class="message aiMsg">⚠️ Er is een fout opgetreden.</div>`;
    }
  });
}
