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
  <header>
    <h1>Conceptualiseren</h1>
    <h3>Ik ben in staat me te verdiepen in de probleemstelling en de doelgroep. Ik pas creatieve technieken toe om tot
      verschillende ideeën te komen en een concept te ontwerpen dat relevant is voor deze doelgroep.</h3>
  </header>

  <section>
    <h2>Over dit project</h2>
    <p><strong>Klant:</strong>Twopine</p>
    <p><strong>Project:</strong> TwoPine heeft een oplossing nodig waarmee ze op een leuke manier features van de websocket technologie kunnen laten zien aan bestaande of nieuwe klanten om ze enthousiast te maken voor deze techniek. In de vorm van een webgame. Mijn taak was om hier een leuk concept voor te bedenken.</p>
    <h3>Wat is websocket technologie?</h3>
    <p>Websocket is een techniek die wordt gebruikt voor client-servercommunicatie (communicatie tussen je browser en een server). In tegenstelling tot andere client-servercommunicatiemiddelen, zoals HTTP, is websocket bidirectioneel, wat betekent dat er heen en weer wordt gecommuniceerd tussen client en server.</p>
    <p>Een websocketverbinding maakt het mogelijk om realtime webapplicaties te ontwikkelen. Een voorbeeld hiervan is een webgame, waarbij je meerdere apparaten kunt verbinden met de server en ze met elkaar kunt laten communiceren.</p>
  </section>

  <section>
    <h2>Concept bedenken</h2>
    <p> Voordat ik ben gaan brainstormen had ik al een aantal punten waar het concept aan moest voldoen: </p>
    <ul>
      <li>Spel moet makkelijk te begrijpen zijn.</li>
      <li>Meerdere apparaten die met elkaar communiceren. </li>
      <li>Multiplayer functies</li>
    </ul>
    <p>Met deze criteria ben ik gaan brainstormen met twee collega’s en hebben we een concept uitgewerkt: Het idee is om een digitaal shuffleboard te maken. Waar je meerdere telefoons tegen elkaar aan kan leggen om een groot speelveld te creëren. Je kan het zo groot maken als je wilt zolang je genoeg telefoons hebt.</p>
    <figure>
      <img src="/img/conceptualiseren/concept.webp" alt="uitgewerkt concept" onclick="openFullscreen(this.src, this.alt)">
      <figcaption>Hier zie je het uitgewerkte shuffleboard concept</figcaption>
    </figure>
  </section>

  <section>
   <h2> Concept uitwerken</h2>
    <p>Als eerst heb ik het concept uitgewerkt op papier. </p>
    <figure>
      <img src="/img/conceptualiseren/schetsen.webp" alt="foto van uitgeschreven concept" onclick="openFullscreen(this.src, this.alt)">
      <figcaption> Uitgeschreven en geschetst shuffleboard concept</figcaption>
    </figure>
    <p>Vervolgens heb ik een Figma bestand opgezet en het daarin digitaal uitgewerkt.</p>
    <figure>
      <video controls>
        <source src="/img/conceptualiseren/figma_uitwerking.mp4" type="video/mp4">
        Je browser ondersteunt geen video-afspeelformaat.
      </video>
      <figcaption>Hier zie je de eerste versie van de pagina.</figcaption>
    </figure>
  </section>

  <section>
    <h2>Proof of concept</h2>
    <p>Nadat ik het ik het in Figma had staan ben ik een proof of concept gaan bouwen. ( Wel zonder de websocket implementatie).</p>
    <figure>
      <video controls>
        <source src="/img/conceptualiseren/proof_of_concept.mp4" type="video/mp4">
        Je browser ondersteunt geen video-afspeelformaat.
      </video>
      <figcaption>Hier zie je een werkend proof op concept.</figcaption>
    </figure>
  </section>

  <section>
    <h2>Reflectie</h2>
    <p>Ondertussen is er niet heel veel meer met het concept gebeurd omdat het erg druk werd met andere projecten. Maar ik heb het wel op de gezamenlijke repository gezet zodat er iemand in de toekomst mee verder kan. De doelgroep voor dit project was niet heel concreet dus ik heb me niet echt kunnen verdiepen. </p>
    <p>Wat goed vond gaan is dat ik uiteindelijk ook een eerste proof of concept heb kunnen maken dat ik kon laten zien aan het bedrijf. De volgende keer zou ik wat meer creatieve technieken toepassen in plaats van alleen te brainstormen. Hierdoor had ik ook niet zo veel verschillende ideeën. Het concept zou nog verder uitgewerkt kunnen worden. bijvoorbeeld, wat doe speler 3? en kan het bord oneindig lang worden?</p>
  </section>

  <div class="buttons">
    <button id="uitwisseling" @click="navigateTo('/home/implementeren-testen-opleveren')">
      <h2>Vorige</h2>
    </button>

    <button id="uitwisseling" @click="navigateTo('/home')">
      <h2>Home</h2>
    </button>

    <button id="reflectie" @click="navigateTo('/home/ontwerpen-en-prototypen')">
      <h2>Volgende</h2>
    </button>
  </div>

  <div id="fullscreen-container" onclick="closeFullscreen()">
    <span class="close-button">&times;</span>
    <figure>
      <img id="fullscreen-image" src="" alt="">
      <figcaption id="fullscreen-caption"></figcaption>
    </figure>
  </div>

</template>
<style scoped></style>