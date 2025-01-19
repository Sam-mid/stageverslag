<template>
  <nav class="navbar">
    <div class="navbar-container">
      <!-- Logo / Titel -->
      <div class="navbar-logo">
        <a href="#">Sam</a>
      </div>

      <!-- Hamburger Menu voor mobiel -->
      <button class="navbar-toggle" @click="toggleMenu">
        <span class="toggle-bar"></span>
        <span class="toggle-bar"></span>
        <span class="toggle-bar"></span>
      </button>

      <!-- Navigatie Links -->
      <ul :class="['navbar-links', { 'navbar-links--active': isMenuOpen }]">
        <li><a href="/home#inleiding">Inleiding</a></li>
        <li><a href="/home#colfoon">Colfoon</a></li>
        <li><a href="/home#over-twopine">Over Twopine</a></li>
        <li><a href="/home#competenties">Competenties</a></li>
        <li><a href="/home#uitwisseling">Uitwisseling</a></li>
        <li><a href="/home#onderzoeksverslag">Onderzoeksverslag</a></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
/* Algemene stijlen */
.navbar {
  background-image: url("/navbar_bg.png");
  background-size: cover;
  color: white;
  max-width: 1400px;

  margin-left: auto;
  margin-right: auto;

  padding: 20px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  position: sticky; /* Zorgt ervoor dat de navbar sticky wordt */
  top: 0;          /* Plak aan de bovenkant */
  z-index: 1000;   /* Zorgt dat de navbar boven andere elementen blijft */

  border-radius: 15px; /* Afgeronde randen */
  background-color: rgba(44, 62, 80, 0.9); /* Transparante achtergrond voor beter zicht */
}

.navbar-container {
  display: flex;
  flex-direction: column; /* Plaats alles verticaal */
  justify-content: center;
  align-items: center;
  text-align: center; /* Zorg dat de tekst gecentreerd wordt */
  width: 100%;
}

.navbar-logo a {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  margin-bottom: 20px; /* Ruimte onder het logo */
}

.navbar-links {
  list-style: none;
  display: flex;
  flex-direction: column; /* Links verticaal plaatsen */
  align-items: center; /* Links in het midden uitlijnen */
  gap: 15px;
  margin: 0;
  padding: 0;
}

.navbar-links li a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  padding: 10px 15px; /* Maak de klikbare gebieden groter */
  border-radius: 8px; /* Afgeronde hoeken voor links */
  transition: background-color 0.3s;
}

.navbar-links li a:hover {
  background-color: rgba(255, 255, 255, 0.2); /* Achtergrondkleur bij hover */
}

/* Mobiele weergave */
.navbar-toggle {
  display: none;
}

@media (max-width: 768px) {
  .navbar {
    width: 100%; /* Navbar neemt volledige breedte in op mobiel */
    border-radius: 0; /* Geen afgeronde randen op mobiel */
  }
}
</style>

