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

const orders = [
  { date: "2025-10-01", client: "S. Jansen", total: "€ 12,90", status: "Verzonden" },
  { date: "2025-10-02", client: "M. de Vries", total: "€ 8,30", status: "In behandeling" },
  { date: "2025-10-03", client: "A. Bakker", total: "€ 23,10", status: "Geleverd" },
];

// ===============================
// ⚙️ HELPER FUNCTIONS
// ===============================

// Shortcut selectors
function $(sel) { return document.querySelector(sel); }
function $all(sel) { return document.querySelectorAll(sel); }

// Simulated add to cart (for later use)
function addToCart(id) {
  const product = topProducts.find(p => p.id === id);
  alert(`✅ ${product.name} toegevoegd aan winkelmand!`);
}

// ===============================
// 🛍️ PRODUCTS
// ===============================
function renderProducts() {
  const productGrid = document.querySelector(".product-grid");
  if (!productGrid) return; // Stop if we're not on the home page

  productGrid.innerHTML = "";
  topProducts.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h4>${product.name}</h4>
      <div class="price">€${product.price.toFixed(2)}</div>
    `;
    productGrid.appendChild(card);
  });
}

// ===============================
// 📦 ORDERS (Dashboard)
// ===============================
function renderOrders() {
  const tableBody = document.querySelector("tbody");
  if (!tableBody) return; // Stop if we're not on the dashboard page

  tableBody.innerHTML = "";
  orders.forEach(order => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${order.date}</td>
      <td>${order.client}</td>
      <td>${order.total}</td>
      <td>${order.status}</td>
    `;
    tableBody.appendChild(row);
  });
}

// ===============================
// 🔍 FUTURE EXTRAS (search etc.)
// ===============================
function setupSearch() {
  const searchInput = document.querySelector(".search input");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    console.log("Zoeken naar:", e.target.value);
    // Later kun je hier filters of suggesties toevoegen
  });
}

// ===============================
// 🚀 INIT (runs on every page)
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderOrders();
  setupSearch();
});
