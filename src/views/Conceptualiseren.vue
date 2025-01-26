<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
import navbar from '@/components/Navbar.vue';

import { useRouter } from 'vue-router';

const router = useRouter();

const navigateTo = (url: string) => {
  router.push(url); // Navigeren naar een andere route binnen de app
};
</script>

<template>
  <navbar />
  <header>
    <h1>Conceptualiseren</h1>
    <h3>
      Ik ben in staat me te verdiepen in de probleemstelling en de doelgroep. Ik pas creatieve technieken toe om tot
      verschillende ideeën te komen en een concept te ontwerpen dat relevant is voor deze doelgroep.
    </h3>
  </header>

  <section>
    <h2>Over dit project</h2>
    <p><strong>Klant:</strong> Twopine</p>
    <p>
      <strong>Project:</strong> Twopine heeft een oplossing nodig waarmee ze op een leuke manier de features van de websockettechnologie kunnen laten zien aan bestaande of nieuwe klanten om hen enthousiast te maken voor deze techniek. Dit moest in de vorm van een webgame. Mijn taak was om hier een leuk concept voor te bedenken.
    </p>
    <h3>Wat is websockettechnologie?</h3>
    <p>
      Websocket is een techniek die wordt gebruikt voor client-servercommunicatie (communicatie tussen je browser en een server). In tegenstelling tot andere client-servercommunicatiemiddelen, zoals HTTP, is websocket bidirectioneel, wat betekent dat er heen en weer wordt gecommuniceerd tussen client en server.
    </p>
    <p>
      Een websocketverbinding maakt het mogelijk om realtime webapplicaties te ontwikkelen. Een voorbeeld hiervan is een webgame, waarbij je meerdere apparaten kunt verbinden met de server en ze met elkaar kunt laten communiceren.
    </p>
  </section>

  <section>
    <h2>Concept bedenken</h2>
    <p>Voordat ik begon met brainstormen, had ik al een aantal punten waar het concept aan moest voldoen:</p>
    <ul>
      <li>Het spel moet makkelijk te begrijpen zijn.</li>
      <li>Meerdere apparaten moeten met elkaar kunnen communiceren.</li>
      <li>Multiplayer functies.</li>
    </ul>
    <p>
      Met deze criteria ben ik gaan brainstormen met twee collega’s en hebben we een concept uitgewerkt: het idee is om een digitaal shuffleboard te maken. Hierbij kun je meerdere telefoons tegen elkaar aan leggen om een groot speelveld te creëren. Je kunt het zo groot maken als je wilt, zolang je genoeg telefoons hebt.
    </p>
    <figure>
      <img src="/img/conceptualiseren/concept.webp" alt="uitgewerkt concept" onclick="openFullscreen(this.src, this.alt)" />
      <figcaption>Hier zie je het uitgewerkte shuffleboardconcept</figcaption>
    </figure>
  </section>

  <section>
    <h2>Concept uitwerken</h2>
    <p>Als eerste heb ik het concept uitgewerkt op papier.</p>
    <figure>
      <img src="/img/conceptualiseren/schetsen.webp" alt="foto van uitgeschreven concept" onclick="openFullscreen(this.src, this.alt)" />
      <figcaption>Uitgeschreven en geschetst shuffleboardconcept</figcaption>
    </figure>
    <p>Vervolgens heb ik een Figma-bestand opgezet en het concept daarin digitaal uitgewerkt.</p>
    <figure>
      <video controls>
        <source src="/img/conceptualiseren/figma_uitwerking.mp4" type="video/mp4" />
        Je browser ondersteunt geen video-afspeelformaat.
      </video>
      <figcaption>Hier zie je de eerste versie van de pagina.</figcaption>
    </figure>
  </section>

  <section>
    <h2>Proof of concept</h2>
    <p>Nadat ik het in Figma had uitgewerkt, ben ik een proof of concept gaan bouwen (wel zonder de websocketimplementatie).</p>
    <figure>
      <video controls>
        <source src="/img/conceptualiseren/proof_of_concept.mp4" type="video/mp4" />
        Je browser ondersteunt geen video-afspeelformaat.
      </video>
      <figcaption>Hier zie je een werkend proof of concept.</figcaption>
    </figure>
  </section>

  <section>
    <h2>Reflectie</h2>
    <p>
      Ondertussen is er niet heel veel meer met het concept gebeurd, omdat het erg druk werd met andere projecten. Ik heb het echter wel op de gezamenlijke repository gezet, zodat iemand er in de toekomst mee verder kan. De doelgroep voor dit project was niet heel concreet, waardoor ik me niet echt kon verdiepen in hun behoeften.
    </p>
    <p>
      Wat ik goed vond gaan, is dat ik uiteindelijk een eerste proof of concept heb kunnen maken dat ik aan het bedrijf kon laten zien. De volgende keer zou ik meer creatieve technieken willen toepassen in plaats van alleen te brainstormen. Hierdoor had ik meer verschillende ideeën kunnen genereren. Het concept zou ook nog verder uitgewerkt kunnen worden. Bijvoorbeeld: wat doet speler 3? En kan het bord oneindig lang worden?
    </p>
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
      <img id="fullscreen-image" src="" alt="" />
      <figcaption id="fullscreen-caption"></figcaption>
    </figure>
  </div>
</template>

<style scoped></style>