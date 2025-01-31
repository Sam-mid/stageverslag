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
    <h1>Ondernemende houding en vaardigheden</h1>
    <h3>
      Ik kijk verder dan wat me gevraagd wordt. Ik bedenk nieuwe oplossingen, vergelijk deze met bestaande oplossingen en kom
      uit mezelf met adviezen om waarde te creëren voor de klant of het stagebedrijf.
    </h3>
  </header>

  <section>
    <h2>Over dit project</h2>
    <p><strong>Klant:</strong> bruidshoek.nl</p>
    <p>
      <strong>Opdracht:</strong> Voor deze opdracht werd aan mij gevraagd of ik een oplossing wilde bedenken voor een
      nieuwe klant van Twopine. De klant was een bruidsmodezaak die op de website hun voorraad aan trouwkleding wilde
      tonen. Alleen kwamen de foto’s niet met elkaar overeen.
    </p>

    <figure>
      <img src="/img/ondernemende_houding/bruidshoek_website.webp" alt="Foto van de huidige website"
           onclick="openFullscreen(this.src, this.alt)"/>
      <figcaption>Foto van de huidige website</figcaption>
    </figure>

    <p>
      Zoals je kunt zien, zijn op sommige foto's de jurken en modellen groter of kleiner dan op andere foto's. Om de
      website te verbeteren, zouden alle foto’s opnieuw geschaald en bijgesneden moeten worden in Photoshop. Dit kost
      veel tijd en budget. Daarom werd aan mij gevraagd of ik een online tool kon vinden om dit probleem op te lossen.
    </p>
  </section>

  <section>

    <h2>Welke bestaande oplossingen heb ik vergeleken?</h2>
    <p>
      Ik ben op zoek gegaan naar een tool die dit proces makkelijker maakt. Een van de tools die ik heb vergeleken, is
      <strong>crop.photo</strong>. Deze tool is ontworpen om veel foto’s tegelijkertijd te kunnen croppen. Dit was ook
      zeker het geval, maar de foto's waren erg inconsistent en niet op de juiste manier gecropt.
    </p>

    <figure>
      <img src="/img/ondernemende_houding/test.webp" alt="Resultaat van crop.photo"
           onclick="openFullscreen(this.src, this.alt)"/>
      <figcaption>Het resultaat van crop.photo was helaas inconsistent.</figcaption>
    </figure>

  </section>

  <section>
    <h2>Welke oplossing heb ik bedacht?</h2>
    <p>
      Na een aantal oplossingen te hebben vergeleken, ben ik gaan onderzoeken of het mogelijk was om zelf een tool te
      maken. Ik vond online veel verhalen van mensen die dit zelf hadden gemaakt door middel van AI-gezichtsherkenning.
      Hierna heb ik ook ChatGPT geraadpleegd om te ontdekken wat ik hiervoor nodig zou hebben.
    </p>
    <p>
      Met al deze informatie heb ik goedkeuring gekregen om het te gaan bouwen. Uiteindelijk heb ik de volgende
      oplossing gemaakt:
    </p>
    <p>
      Een Python-script dat gezichten herkent in foto’s en vervolgens elke foto bijsnijdt en schaalt, zodat alle foto’s
      overeenkomen. Het script kan honderden foto’s binnen een paar minuten aanpassen.
    </p>

    <figure>
      <img src="/img/ondernemende_houding/voorbeeld1.webp" alt="Resultaten van het python script."
           onclick="openFullscreen(this.src, this.alt)"/>
      <figcaption>Resultaten van het Python-script.</figcaption>
    </figure>

    <figure>
      <video controls>
        <source src="/img/ondernemende_houding/bruidsdetectie_tool.mp4" type="video/mp4"/>
        Je browser ondersteunt het afspelen van video's niet.
      </video>
      <figcaption>Een demonstratie van hoe het Python-script werkt.</figcaption>
    </figure>
  </section>

  <section>
    <h2>Hoe heeft dit waarde gecreëerd voor Twopine?</h2>
    <p>
      Met dit script heeft Twopine een stabiele en betrouwbare oplossing voor het probleem, zonder dat ze telkens geld
      moesten betalen voor een (inconsistente) online tool. Deze oplossing heeft gezorgd voor een product waar zowel
      Twopine als de klant tevreden mee zijn. Bovendien kan dit script verder worden uitgebreid voor andere klanten en
      webshops.
    </p>
  </section>

  <section>
    <h2>Reflectie</h2>
    <p>
      Ik denk dat ik voor dit onderdeel aan alle eisen voldoe. Van tevoren had ik niet gedacht dat ik zelf een oplossing zou kunnen bouwen voor dit probleem. Maar doordat ik ervoor koos om me verder te verdiepen toen mijn eerste poging niet lukte, is het toch gelukt. Ik ben blij dat ik iets heb kunnen maken dat in de toekomst hergebruikt kan worden binnen Twopine, ook wanneer mijn stage voorbij is.
    </p>
    <h3>Wat zou ik volgende keer anders doen?</h3>
    <p>
      Hoewel het resultaat goed werkt, weet ik niet of ik de volgende keer dezelfde aanpak zou gebruiken. Ik zou de huidige code niet heel veel meer kunnen uitbreiden, aangezien ik weinig verstand heb van Python-code. Omdat de huidige code afkomstig is van internet en ChatGPT, heb ik tijdens dit project ook weinig nieuws geleerd over Python.
    </p>
    <p>
      Achteraf gezien had ik het misschien beter kunnen proberen in JavaScript (ik ben er vrij zeker van dat dat ook had gekund).
    </p>
  </section>

  <div class="buttons">
    <button id="uitwisseling" @click="navigateTo('/home/ontwerpen-en-prototypen')">
      <h2>Vorige</h2>
    </button>

    <button id="uitwisseling" @click="navigateTo('/home')">
      <h2>Home</h2>
    </button>

    <button id="reflectie" @click="navigateTo('/home/projectmatig-werken')">
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


<style scoped>
</style>