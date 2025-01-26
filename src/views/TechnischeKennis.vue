<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
import navbar from '@/components/Navbar.vue';

import { useRouter } from 'vue-router';

const router = useRouter();

const navigateTo = (url: string) => {
  router.push(url); // Navigeren naar een andere route binnen de app
};
</script>

<template>
  <navbar/>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Technische kennis en analyse</title>
  </head>
  <body>

<!--  <navbar />-->

  <header>
    <h1>Technische kennis en analyse</h1>
    <h3>Ik ben flexibel genoeg om me snel de professionele werkwijze van het stagebedrijf en gebruikte technieken eigen
      te maken. Ik kan technische oplossingen bedenken voor praktische problemen die bij deze werkwijze aansluiten.</h3>
  </header>

  <section>
    <h2>Wat is de professionele werkwijze van TwoPine?</h2>
    <p>De professionele werkwijze van TwoPine is als volgt: Voor de meeste projecten wordt gebruikgemaakt van een
      combinatie van <strong>Laravel en Vue.js.</strong> Laravel wordt gebruikt als PHP-framework en Vue is een
      front-end framework. Voor het stylen van de pagina’s wordt er binnen het bedrijf Tailwind gebruikt. Sinds ik
      vooral als front-end stagiair werk, heb ik het meeste over <strong>Vue.js en Tailwind </strong> geleerd.</p>

    <h3>Wat is Vue.js?</h3>
    <p>Vue is een JavaScript-framework dat wordt gebruikt om websites interactief en gebruiksvriendelijk te maken. Vue
      werkt met componenten, herbruikbare bouwblokken of code, en maakt het eenvoudig om dynamische functionaliteiten
      aan websites toe te voegen. Deze componenten maken de code van de website ook een stuk overzichtelijker. Dit is
      vooral fijn als je in een team ergens aan werkt.</p>

    <h3>Wat is Tailwind?</h3>
    <p>Tailwind is een CSS-framework dat gebruikmaakt van voorgeschreven HTML-classes. Hierdoor ben je minder tijd kwijt
      aan het schrijven van CSS en helpt het met het consistent maken van de styling van je website. In Tailwind is het
      gebruikelijk om stylesheets te maken. Dit is een bestand waarin je dingen zoals fonts en kleuren definieert voor
      je gehele website.</p>
    <p>Het is dus belangrijk dat deze componenten en stylesheets goed zijn ingesteld zodat ze in het gehele project
      hergebruikt kunnen worden.</p>

  </section>

  <section>
    <h2>Hoe heb ik deze technieken eigen gemaakt?</h2>
    <p>Een voordeel van Vue.js is dat het redelijk te vergelijken is met React. React is een framework waar ik al wat
      ervaring in had door lessen op school. Ook is er online uitgebreide Vue.js- en Tailwind-documentatie. Als ik
      ergens vastzat, kon ik het altijd vragen aan een collega en er waren een paar projecten waarvan de front-end al af
      was waarvan ik kon leren.</p>

    <h2>Welke technische oplossing/toepassing <br> heb ik hiermee gemaakt?</h2>
    <h3> Over dit project</h3>
    <p><strong>Klant:</strong> Febelfin (Federatie van de Belgische bankensector)</p>
    <p><strong>Project:</strong> Het project waar ik deze werkwijze heb toegepast is een dashboard voor de klant
      Febelfin. Hiervoor moest ik een Figma-ontwerp namaken (dat ik zelf had gemaakt) met Vue.js, Tailwind en HTML. Dit
      was een mooi project om te oefenen met de werkwijze van TwoPine.</p>

    <h3>Vue.js-componenten</h3>
    <p>In het Figma-ontwerp staan verschillende componenten. Vaak zijn dit bepaalde knoppen of invoervelden die over de
      gehele website worden hergebruikt.</p>

    <figure>
      <img src="/img/technische-kennis/componenten_code.webp" alt="Foto van de huidige website" onclick="openFullscreen(this.src, this.alt)" />
      <figcaption>
        <p>Hier zie je een voorbeeld van hoe ik een knop (<code>PrimaryButton</code>) meerdere keren hergebruik in de code.</p>
      </figcaption>
    </figure>

    <figure>
      <img src="/img/technische-kennis/componenten_voorbeeld.webp" alt="Foto van de huidige website" onclick="openFullscreen(this.src, this.alt)" />
      <figcaption>
        <p>Hier zie je hoe de knopper er op de pagina uitzien.</p>
      </figcaption>
    </figure>

    <h3>Tailwind-stylesheet</h3>
    <p>Voor dit project heb ik ook een stylesheet geschreven. Hierin heb ik de kleuren, fonts en schermgroottes bepaald
      voor het gehele project.</p>
    <figure>
      <img src="/img/technische-kennis/febelfin_stylesheet.webp" alt="Foto van de huidige website" onclick="openFullscreen(this.src, this.alt)" />
      <figcaption>
        <p>Hier zie je de Tailwind-stylesheet die ik heb geschreven voor dit project.</p>
      </figcaption>
    </figure>
  </section>

  <section>
    <h2>Reflectie</h2>
    <p> Natuurlijk is dit maar een klein voorbeeld van wat er mogelijk is met Vue.js en Tailwind. Ik heb nu ook ingezien dat deze manier van programmeren (modulair programmeren) vaak de basis vormt van veel grote en professionele front-end projecten. Hoewel er nog veel andere technieken en mogelijkheden zijn binnen deze twee frameworks, heb ik het gevoel dat ik de basis nu aardig onder de knie heb.</p>
    <p> Wat ik vooral goed vond gaan, was het leren via de documentatie van Vue en Tailwind. Dit was heel handig tijdens het leren en zou ik zeker aanraden aan anderen die hier ook mee willen beginnen. </p>
    <p>Iets wat ik in het algemeen nog lastig vind, is het vinden van de juiste benaming voor componenten. Dit is iets waar ik tijdens het programmeren in het algemeen nog moeite mee heb.</p>
    <h3>Zou ik Vue.js en Tailwind in de toekomst weer gebruiken?</h3>
    <p> Ja, zeker! Ik heb nu de smaak aardig te pakken. Zelfs dit verslag is met behulp van Vue.js gemaakt! </p>
  </section>

<div class="buttons">
  <button id="uitwisseling" @click="navigateTo('/home')">
    <h2>Home</h2>
  </button>

  <button id="reflectie" @click="navigateTo('/home/implementeren-testen-opleveren')">
    <h2>Volgende</h2>
  </button>
</div>

  </body>

  <div id="fullscreen-container" onclick="closeFullscreen()">
    <span class="close-button">&times;</span>
    <figure>
      <img id="fullscreen-image" src="" alt="">
      <figcaption id="fullscreen-caption"></figcaption>
    </figure>
  </div>

</template>
<style>
.buttons {
  display: flex;
  justify-content: center;
  margin: 20px;
}
</style>