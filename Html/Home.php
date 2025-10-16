<?php
// Only handle chat requests that come from JavaScript (AJAX / Fetch)
if (
    $_SERVER['REQUEST_METHOD'] === 'POST' &&
    isset($_SERVER['HTTP_X_REQUESTED_WITH']) &&
    strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest' &&
    isset($_POST['vraag'])
) {
    $vraag = trim($_POST['vraag']);
    if (!empty($vraag)) {
        $cmd = 'ollama run deepseek-coder ' . escapeshellarg($vraag);
        $antwoord = shell_exec($cmd);
        echo '<strong>AI:</strong> ' . nl2br(htmlspecialchars($antwoord));
    } else {
        echo '<strong>AI:</strong> Sorry, ik heb niets ontvangen.';
    }
    exit; // Stop normal page output only for AJAX calls
}
?>

<!doctype html>
<html lang="nl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Apothecare</title>
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
      <a href="home.php" class="active">Home</a>
      <a href="products.php">Producten</a>
      <a href="about.html">Over ons</a>
      <a href="contact.html">Contact</a>
    </nav>

    <div class="search">
      <input placeholder="Zoeken naar product..." />
      <a href="winkelwagen.php" class="cart" title="Winkelwagen">🛒</a>
    </div>
  </header>

  <main>
    <section class="page">
      <div class="hero">
        <div class="promo">
          <h1>Welkom bij je apotheker</h1>
          <p>Gemak en betrouwbare zorg binnen handbereik. Bekijk onze aanbevolen producten en bestel veilig online.</p>
          <a href="products.php" class="btn">Bekijk producten</a>
        </div>

        <div>
          <h2>Top producten</h2>
          <div class="product-grid top-products"></div>
        </div>
      </div>
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
