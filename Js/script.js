const products = [
  { id: 1, name: "Paracetamol 500mg", price: 3.59 },
  { id: 2, name: "Vitamine C 250mg", price: 4.29 },
  { id: 3, name: "Handgel 100ml", price: 5.99 },
  { id: 4, name: "Zink supplement", price: 6.49 },
  { id: 5, name: "Allergie tablet", price: 7.29 }
];

const orders = [
  { date: "2025-10-01", client: "S. Jansen", total: "€ 12,90", status: "Verzonden" },
  { date: "2025-10-02", client: "M. de Vries", total: "€ 8,30", status: "In behandeling" },
  { date: "2025-10-03", client: "A. Bakker", total: "€ 23,10", status: "Geleverd" }
];

function $(sel) { return document.querySelector(sel); }
function $all(sel) { return document.querySelectorAll(sel); }

function renderProducts() {
  const grid = $("#products-grid");
  const home = $("#home-products");
  grid.innerHTML = "";
  home.innerHTML = "";
  products.forEach(p => {
    const card = `
      <div class="card">
        <img alt="Product ${p.name}" />
        <h4>${p.name}</h4>
        <div class="price">€ ${p.price.toFixed(2)}</div>
        <button class="btn" onclick="addToCart(${p.id})">In winkelmand</button>
      </div>
    `;
    grid.innerHTML += card;
  });
  home.innerHTML = grid.innerHTML;
}

function renderOrders() {
  const tbody = $("#orders-table");
  tbody.innerHTML = "";
  orders.forEach(o => {
    tbody.innerHTML += `
      <tr>
        <td>${o.date}</td>
        <td>${o.client}</td>
        <td>${o.total}</td>
        <td>${o.status}</td>
      </tr>
    `;
  });
}

// Enkelvoudige addToCart functie
let cartCount = 0;
const cartCountElement = document.getElementById('cart-count');

function addToCart(quantity = 1) {
  cartCount += quantity;
  cartCountElement.textContent = cartCount;
  alert("Product toegevoegd aan winkelmand (mock): " + quantity);
}

// Navigatie
function navigateTo(view) {
  $all("nav a").forEach(a => a.classList.toggle("active", a.dataset.view === view));
  ["home", "products", "dashboard", "about", "contact"].forEach(v => {
    const el = $("#view-" + v);
    el.style.display = (v === view) ? "" : "none";
  });
}

$all("nav a").forEach(a => {
  a.addEventListener("click", e => {
    // let the browser redirect normally
  });
});

renderProducts();
renderOrders();
navigateTo("home");
