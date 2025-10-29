<!doctype html>
<html lang="nl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Apothecare — Over ons</title>
  <link rel="stylesheet" href="../css/style.css" />
 <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
  <header>
    <a href="home.php" class="logo">
      <div class="icon">
        <img src="../Img/logo.png" alt="">
      </div>
      Apothecare
    </a>

    <nav>
      <a href="home.php">Home</a>
      <a href="products.php">Producten</a>
      <a href="about.php" class="active">Over ons</a>
      <a href="contact.php">Contact</a>
    </nav>
    <div class="search">
      <input id="q" placeholder="Zoeken naar product..." />
      <a href="Winkelwagen.php" class="cart" title="Winkelwagen">🛒</a>
    </div>
  </header>

  <main>
    <section class="page">
      <h2>Over ons</h2>
      <p>Bij <strong>Apothecare</strong> geloven we dat goede zorg eenvoudig en toegankelijk moet zijn.
      Onze online apotheek combineert farmaceutische expertise met modern gebruiksgemak.
      We bieden zorgvuldige selectie van geneesmiddelen, supplementen en verzorgingsproducten,
      ondersteund door snelle levering en betrouwbare klantenservice.</p>
    </section>
  </main>

  
  <!-- 💬 Chatbot Icon -->
  <div class="chatbot" title="Chat" onclick="toggleChat()">💬</div>

  <!-- 💬 Chat Popup -->
  <div id="chatBox">
    <div id="chatHeader">
      Chatbot
      <span style="cursor:pointer;" onclick="toggleChat()">✖</span>
    </div>
    <div id="chatContent"></div>
    <form id="chatForm">
      <input type="text" id="userInput" placeholder="Typ je bericht..." required>
      <button type="submit">Send</button>
    </form>
  </div>
<script src="../js/script.js"></script>
</body>
</html>
