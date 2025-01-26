<template>
  <nav class="navbar">
    <div class="navbar-container">
      <!-- Terug knop aan de linkerkant -->
      <div class="back-button" @click="goBack">
        <svg width="40" height="40" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 12L12 18M12 18L18 24M12 18H24M33 18C33 26.2843 26.2843 33 18 33C9.71573 33 3 26.2843 3 18C3 9.71573 9.71573 3 18 3C26.2843 3 33 9.71573 33 18Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>


      <!-- Navigatie Links in het midden -->
      <ul :class="['navbar-links', { 'navbar-links--active': isMenuOpen }]">
        <li><a href="/home#inleiding">Inleiding</a></li>
        <li><a href="/home#over-twopine">Twopine</a></li>
        <li><a href="/home#competenties">Competenties</a></li>
        <li><a href="/home#uitwisseling">Uitwisseling</a></li>
        <li><a href="/home#onderzoeksverslag">Onderzoeksverslag</a></li>
        <li><a href="/home#reflectie">Reflectie</a></li>
      </ul>
    </div>

    <!-- Overlay voor navigatie (voor mobiel) -->
    <div v-if="isMenuOpen" class="overlay" @click="toggleMenu"></div>
  </nav>
</template>

<style scoped>
/* Algemene stijlen */
.navbar {
  background-image: linear-gradient(to bottom right, #40e55e, rgba(55, 218, 188, 0.73), #3a86f9);
  background-size: cover;
  color: white;
  max-width: 1200px;
  margin: 50px auto;
  padding: 30px 20px; /* Extra padding voor een bredere navbar */
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  position: sticky; /* Zorgt ervoor dat de navbar sticky wordt */
  top: 0; /* Plak aan de bovenkant */
  z-index: 1000; /* Zorgt dat de navbar boven andere elementen blijft */

  border-radius: 50px; /* Maakt de randen volledig rond */
  background-color: rgba(44, 62, 80, 0.9); /* Transparante achtergrond */
}

.navbar-container {
  display: flex;
  justify-content: space-between; /* Zorgt dat de items aan de zijkanten komen */
  align-items: center;           /* Verticaal centreren van de items */
  text-align: center;            /* Zorg dat de tekst gecentreerd wordt */
  width: 100%;
}

.back-button {
  position: absolute;
  left: 20px; /* Plaats de terugknop aan de linker kant */
  cursor: pointer;
}

.navbar-logo {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}

.navbar-logo a {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}

.navbar-links {
  list-style: none;
  display: flex;
  flex-direction: row; /* Links horizontaal plaatsen */
  align-items: center; /* Links in het midden uitlijnen */
  gap: 15px;
  margin: 0;
  padding: 0;
  position: absolute;
  left: 50%; /* Begin in het midden */
  transform: translateX(-50%); /* Zorgt ervoor dat het echt gecentreerd is */
}

.navbar-links li a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  padding: 10px 15px; /* Maak de klikbare gebieden groter */
  border-radius: 8px; /* Afgeronde hoeken voor links */
  transition: background-color 0.3s;
  text-shadow: 2px 2px 10px rgba(67, 67, 67, 0.84);
}

.navbar-links li a:hover {
  background-color: rgba(255, 255, 255, 0.2); /* Achtergrondkleur bij hover */
}

/* Hamburger menu voor mobiel */
.navbar-toggle {
  display: none;
}

@media (max-width: 900px) {
  .navbar {
    width: 100%; /* Navbar neemt volledige breedte in op mobiel */
    padding: 50px 20px; /* Kleiner padding voor mobiel */
    border-radius: 0; /* Geen afgeronde randen op mobiel */
    margin-top: 0;
    display: none;
  ;
  }

  .navbar-toggle {
    display: block;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 2000; /* Zorgt ervoor dat de hamburger-knop altijd boven de andere elementen blijft */
  }

  .navbar-links {
    flex-direction: column;
    gap: 2px;
    //display: none; /* Begin met verborgen links op mobiel */
    position: absolute;
    width: 100%; /* Laat de links de volledige breedte innemen */
    z-index: 1000;
  }

  .navbar-links--active {
    display: flex; /* Toon de links wanneer het menu geactiveerd wordt */
  }

  .navbar-links li {
    width: 100%; /* Maak elk link-item net zo breed als de navbar */
    text-align: center;
    padding: 10px 0;
  }

  .navbar-links li a {
    font-size: 1.2rem; /* Vergroot de tekst op mobiel voor betere leesbaarheid */
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Half-transparante overlay */
    z-index: 500; /* Zorg ervoor dat de overlay boven de navbar komt */
  }
}
</style>

<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;  // Toggle het menu (open/close)
}

const goBack = () => {
  window.history.back();  // Ga terug naar de vorige pagina
}
</script>
