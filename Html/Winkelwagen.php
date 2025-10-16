<!doctype html>
<html lang="nl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Apothecare — Winkelwagen</title>
  <link rel="stylesheet" href="../css/style.css" />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
  <header>
    <a href="home.html" class="logo">
      <div class="icon">
        <img src="../Img/logo.png" alt="">
      </div>
      Apothecare
    </a>

    <nav>
      <a href="home.php">Home</a>
      <a href="products.php">Producten</a>
      <a href="about.html">Over ons</a>
      <a href="contact.html">Contact</a>
    </nav>
    <div class="search">
      <input placeholder="Zoeken naar product..." />
      <a href="winkelwagen.php" class="cart active" title="Winkelwagen">🛒</a>
    </div>
  </header>

  <main>
    <section class="page">
      <h2>🛒 Winkelwagen</h2>
      <p id="empty-msg">Je winkelwagen is leeg.</p>
      <div id="cart-container" class="product-grid"></div>

      <div id="cart-footer" style="margin-top:20px;display:none;">
        <p id="cart-total" style="font-weight:600;margin-bottom:15px;"></p>
        <div style="display:flex;gap:10px;">
          <button id="clear-cart" class="btn" style="background:red;">🗑️ Leeg winkelwagen</button>
          <button class="btn" style="background:var(--green);">💳 Afrekenen</button>
        </div>
      </div>
    </section>
  </main>

  <div class="chatbot" title="Chat">💬</div>

  <script>
    const cartContainer = document.getElementById("cart-container");
    const emptyMsg = document.getElementById("empty-msg");
    const cartFooter = document.getElementById("cart-footer");
    const totalDiv = document.getElementById("cart-total");
    const clearBtn = document.getElementById("clear-cart");

    const cart = JSON.parse(localStorage.getItem("cartProducts")) || [];
    let total = 0;

    // Show products if there are any
    if (cart.length > 0) {
      emptyMsg.style.display = "none";
      cartFooter.style.display = "block";

      cart.forEach((p, i) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
          <h4>${p.name}</h4>
          <div class="price">€${p.price.toFixed(2)}</div>
          <button class="remove" data-index="${i}" style="background:red;">❌ Verwijderen</button>
        `;
        cartContainer.appendChild(card);
        total += p.price;
      });

      totalDiv.textContent = `Totaal: €${total.toFixed(2)}`;
    }

    // Remove individual product
    document.body.addEventListener("click", e => {
      if (e.target.classList.contains("remove")) {
        const i = e.target.dataset.index;
        cart.splice(i, 1);
        localStorage.setItem("cartProducts", JSON.stringify(cart));
        let count = parseInt(localStorage.getItem("cartCount")) || 0;
        localStorage.setItem("cartCount", Math.max(count - 1, 0));
        window.location.reload();
      }
    });

    // Clear entire cart
    clearBtn.addEventListener("click", () => {
      localStorage.removeItem("cartProducts");
      localStorage.removeItem("cartCount");
      window.location.reload();
    });
  </script>
</body>
</html>
