<!doctype html>
<html lang="nl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Apothecare — Contact</title>
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
      <a href="about.php">Over ons</a>
      <a href="contact.php" class="active">Contact</a>
    </nav>
    <div class="search">
      <input id="q" placeholder="Zoeken naar product..." />
      <a href="Winkelwagen.php" class="cart" title="Winkelwagen">🛒</a>
    </div>
  </header>

  <main>
    <section class="page">
      <h2>Contact</h2>
      <p>Vul onderstaand formulier in en we nemen zo snel mogelijk contact op.</p>
      <form onsubmit="alert('Bericht verzonden!'); return false;">
        <input class="field" type="text" name="name" placeholder="Naam" required />
        <input class="field" type="email" name="email" placeholder="E-mail" required />
        <textarea class="field" name="message" rows="6" placeholder="Bericht"></textarea>
        <button class="btn" type="submit">Versturen</button>
      </form>
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