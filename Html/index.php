<!doctype html>
<html lang="nl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Inloggen — Apothecare</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
  <main class="page" style="max-width:400px;margin:80px auto;text-align:center">
    <h2>Inloggen</h2>
    <p>Welkom terug! Log in om toegang te krijgen tot je account of dashboard.</p>

    <form id="loginForm" style="display:grid;gap:14px;margin-top:24px">
      <input class="field" type="email" name="email" placeholder="E-mail" required />
      <input class="field" type="password" name="password" placeholder="Wachtwoord" required />
      <button class="btn" type="submit">Inloggen</button>
    </form>

    <p style="margin-top:16px;font-size:14px">
      Nog geen account? <a href="#">Registreer</a>
    </p>
  </main>

  <script>
    document.getElementById("loginForm").addEventListener("submit", e => {
      e.preventDefault();
      alert("Inloggen succesvol (mock)");
  window.location.href = "index.html"; // terug naar hoofdpagina
    });
  </script>
</body>
</html>
