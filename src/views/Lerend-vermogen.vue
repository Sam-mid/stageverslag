<script>
</script>

<template>

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lerend vermogen</title>
  </head>

  <main>
    <header>
      <h1>Lerend vermogen</h1>
      <h3> <strong> Ik ben kritisch en streef ernaar het beste in mezelf en anderen naar boven te halen. Ik reflecteer structureel op eigen ervaringen en feedback vanuit het stagebedrijf en trek Daaruit volgen lessen voor de toekomst.</strong></h3>
    </header>

    <section>
      <h2> Hoe heb ik gereflecteerd tijdens de stage?</h2>
        <h3>Aantekeningen</h3>
        <p>Als eerste heb ik altijd een aantekeningenboekje op mijn bureau liggen waarin ik feedback kan opschrijven die ik tussendoor krijg. Bijvoorbeeld als ik een collega om hulp vraag.
          Dit gaat vaak over handige tips die ik kan gebruiken tijdens het programmeren.</p>
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
      <p>Dit soort aantekeningen zijn erg handig om naast me te hebben als ik aan het programmeren ben. Waardoor mijn code ook steeds beter wordt. </p>
    </section>

    <section>
      <h3> Structurele reflecties</h3>
      <p>Omdat ik het afgelopen half jaar best veel verschillende opdrachten heb gehad. Heb ik aan het eind van elke project een korte reflectie geschreven over: </p>
      <ul>
        <li>Het proces</li>
        <li>Uitdagingen binnen het project</li>
        <li>Wat ik heb geleerd en hoe ik het de volgende keer zal aanpakken</li>
      </ul>
      <p>Deze reflecties kwamen ook erg van pas tijdens het schrijven van dit verslag. Op deze manier kon ik alles netjes terugvinden per project, om er uiteindelijk over te schrijven.</p>
      <p>Een van de meest uitgebreide voorbeelden die ik hiervan heb, is van het LOL-Surprise project. Hierin reflecteer ik niet alleen op de technische uitwerking, maar ook op de hele ervaring. Dit project heb ik ook gebruikt in het onderdeel <a href="/home/maatschappelijke-verantwoordelijkheid"> maatschappelijke verantwoordelijkheid</a>.</p>
    </section>

    <section>
      <h3>Voorbeeld reflectie</h3>
      <p>In het volgende voorbeeld zie je hoe zo’n reflectie op een project er uit ziet.</p>
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
      <p>De manier waarop ik tijdens de stage heb gereflecteerd zou ik zeker vaker doen. Ik heb het gevoel alsof ik er echt wat van op heb gestoken. Ik denk dat ik op deze manier mijzelf door de stage heen heb kunnen ontwikkelen door feedback op te slaan om later naar terug te kijken, zowel digitaal als op papier. Ook heb ik er veel aan gehad toen ik begon met het schrijven van dit verslag.</p>
      <p>Volgende keer zou ik wel een paar dingen anders doen. Namelijk nog gestructureerden om feedback te vragen. Ik vroeg vaak pas om feedback als ik ergens niet uitkwam in plaats van dat ik om vaste feedback momenten heb ingepland.</p>
    </section>

    <div id="fullscreen-container" onclick="closeFullscreen()">
      <span class="close-button">&times;</span>
      <figure>
        <img id="fullscreen-image" src="" alt="">
        <figcaption id="fullscreen-caption"></figcaption>
      </figure>
    </div>
  </main>
</template>

<style scoped>

figcaption ul{
  text-align: start;
}

</style>