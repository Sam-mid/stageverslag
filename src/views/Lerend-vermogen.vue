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
    <title>Lerend vermogen</title>
  </head>

  <main>
    <header>
      <h1>Lerend vermogen</h1>
      <h3> <strong> Ik ben kritisch en streef ernaar het beste in mezelf en anderen naar boven te halen. Ik reflecteer structureel op mijn eigen ervaringen en de feedback vanuit het stagebedrijf en trek daaruit lessen voor de toekomst.</strong></h3>
    </header>

    <section>
      <h2>Hoe heb ik gereflecteerd tijdens de stage?</h2>
      <h3>Aantekeningen</h3>
      <p>Ten eerste ligt er altijd een aantekeningenboekje op mijn bureau waarin ik feedback kan opschrijven die ik tussendoor krijg. Bijvoorbeeld wanneer ik een collega om hulp vraag. Dit gaat vaak over handige tips die ik kan gebruiken tijdens het programmeren.</p>
      <figure>
        <img src="/img/lerend_vermogen/aantekening.webp" alt="Foto van mijn aantekeningen" onclick="openFullscreen(this.src, this.alt)">
        <figcaption>
          Hier zie je een bladzijde met mijn aantekeningen:<br>
          <ul>
            “feedback Marijn”
            <li>Altijd width en height weergeven.</li>
            <li>Breakpoints houden op: 600, 900, 1200 px.</li>
            <li>Altijd min-width gebruiken in plaats van max-width.</li>
            <li>Nested CSS is een stuk leesbaarder.</li>
            <li>Mediaqueries altijd inline schrijven voor meer overzicht.</li>
            <li>Mediaqueries onderaan plaatsen voor betere performance.</li>
            <li>Witruimtes altijd met em of px instellen, niet met vw of vh.</li>
            <li>Maak gebruik van WebP in plaats van PNG, dat is een stuk kleiner.</li>
            <li>Gebruik voortaan een button in plaats van een afbeelding.</li>
          </ul>
        </figcaption>
      </figure>
      <p>Dit soort aantekeningen zijn erg handig om naast me te hebben als ik aan het programmeren ben, waardoor mijn code ook steeds beter wordt.</p>
    </section>

    <section>
      <h3>Structurele reflecties</h3>
      <p>Omdat ik het afgelopen halfjaar best veel verschillende opdrachten heb gehad, heb ik aan het eind van elk project een korte reflectie geschreven over:</p>
      <ul>
        <li>Het proces</li>
        <li>Uitdagingen binnen het project</li>
        <li>Wat ik heb geleerd en hoe ik het de volgende keer anders zou aanpakken</li>
      </ul>
      <p>Deze reflecties kwamen ook erg van pas tijdens het schrijven van dit verslag. Op deze manier kon ik alles netjes terugvinden per project, om er uiteindelijk over te schrijven.</p>
      <p>Een van de meest uitgebreide voorbeelden die ik hiervan heb, is van het LOL-Surprise project. Hierin reflecteer ik niet alleen op de technische uitwerking, maar ook op de hele ervaring. Dit project heb ik ook gebruikt in het onderdeel <a href="/home/maatschappelijke-verantwoordelijkheid">maatschappelijke verantwoordelijkheid</a>.</p>
    </section>

    <section>
      <h3>Voorbeeld reflectie</h3>
      <p>In het volgende voorbeeld zie je hoe zo’n reflectie op een project eruitziet.</p>
      <figure>
        <img src="/img/lerend_vermogen/reflectie1.webp" alt="Foto van de developer tools" onclick="openFullscreen(this.src, this.alt)">
        <br>
        <img src="/img/lerend_vermogen/reflectie2.webp" alt="Foto van de developer tools" onclick="openFullscreen(this.src, this.alt)">
        <figcaption>
          Dit zijn twee pagina's aan reflectie over het LOL-Surprise project.
        </figcaption>
      </figure>
    </section>

    <section>
      <h2>Reflectie</h2>
      <p>De manier waarop ik tijdens de stage heb gereflecteerd, zou ik zeker vaker toepassen. Ik heb het gevoel alsof ik er echt wat van op heb gestoken. Ik denk dat ik op deze manier mezelf door de stage heen heb kunnen ontwikkelen door feedback op te slaan om later naar terug te kijken, zowel digitaal als op papier. Ook heb ik er veel aan gehad toen ik begon met het schrijven van dit verslag.</p>
      <p>Volgende keer zou ik een paar dingen anders doen, zoals gestructureerder feedback vragen. Vaak vroeg ik pas om feedback wanneer ik ergens niet uitkwam, in plaats van het inplannen van vaste momenten voor feedback.</p>
    </section>

    <div id="fullscreen-container" onclick="closeFullscreen()">
      <span class="close-button">&times;</span>
      <figure>
        <img id="fullscreen-image" src="" alt="">
        <figcaption id="fullscreen-caption"></figcaption>
      </figure>
    </div>

    <div class="buttons">
      <button id="uitwisseling" @click="navigateTo('/home/projectmatig-werken')">
        <h2>Vorige</h2>
      </button>

      <button id="uitwisseling" @click="navigateTo('/home')">
        <h2>Home</h2>
      </button>

      <button id="reflectie" @click="navigateTo('/home/maatschappelijke-verantwoordelijkheid')">
        <h2>Volgende</h2>
      </button>
    </div>

  </main>
</template>


<style scoped>

figcaption ul{
  text-align: start;
}

</style>