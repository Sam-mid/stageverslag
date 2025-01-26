<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
import navbar from '@/components/Navbar.vue';
</script>

<template>
  <navbar/>
  <header>
    <h1>Implementeren, testen en opleveren</h1>
    <h3>Ik ben in staat iteratief te ontwikkelen, waarbij analyse van een iteratie tot verbeteringen leidt in de volgende iteratie. Hierbij heb ik functionele testen opgezet, die vooraf door de klant of het stagebedrijf zijn goedgekeurd, om de correcte werking te garanderen. Het geheel lever ik op met het oog op doorontwikkeling.</h3>
  </header>
  <main>
    <section>
      <h2>Over dit project</h2>
      <p><strong>Klant:</strong> Jimmy's Agency</p>
      <p><strong>Project:</strong> Het maken van een interactieve webreclame voor het bordspel Sequence. Het was belangrijk dat deze reclame zo in elkaar zat dat het vertaald kon worden naar meerdere talen. Voor deze reclame heb ik ook het ontwerp gemaakt, maar op deze pagina vertel ik meer over het ontwikkelproces.</p>
      <p>De webpagina werd telkens geüpload op Weborama. Dat is een online tool waarmee je webreclames kan uploaden en verspreiden. Binnen Weborama kan je bijvoorbeeld ook bijhouden wanneer en hoe vaak er op je reclame geklikt wordt.</p>

    </section>

    <section>
      <h2>Ik ben in staat iteratief te ontwikkelen, waarbij analyse van een iteratie tot verbeteringen leidt in de volgende iteratie.</h2>
      <p>De manier waarop ik dit project ontwikkelde was:</p>
      <ul>
        <li>Implementeren van nieuwe feedback van de klant.</li>
        <li>Nieuwe versie uploaden op Weborama en de techniek / performance testen.</li>
        <li>Opsturen naar de klant. Dit ging via een collega met wie ik de links en video’s telkens deelde.</li>
      </ul>
      <p>Nadat de klant het ontwerp had goedgekeurd, ben ik begonnen met het bouwen van de pagina.</p>
      <figure>
        <video controls>
          <source src="/img/implementeren/versie1.mp4" type="video/mp4">
          Je browser ondersteunt geen video-afspeelformaat.
        </video>
        <figcaption>Hier zie je de eerste versie van de pagina.</figcaption>
      </figure>
    </section>

    <section>
      <h3>Feedback van de klant</h3>
      <p>Na het opleveren van de eerste versie kreeg ik de volgende feedback.</p>
      <ul>
        <li>In de openingszin denk ik dat het toch handiger is om “een Sequence” te vervangen door: “vijf op een rij”. Dan wordt het dus deze zin: “Team blauw, kies een kaart op het bord om vijf fiches op een rij te krijgen!”</li>
        <li>Wanneer je het scherm krijgt dat je een verkeerde plek hebt gekozen, komt er een blauw vak om het Sequence-logo heen. Dit zouden wij ook graag in dezelfde kleur willen als de rest van de achtergrond.</li>
        <li>In het filmpje heb je nog een tweede poging om nog een keer het goede antwoord te raden. Is dat ook mogelijk tijdens de echte advergame? Dan graag nog aangeven wat iemand moet doen om het nog een keer te proberen.</li>
        <li>Tot slot zouden we graag nog duidelijker maken dat je het speelt op een spelbord. Wellicht dat we nog een rand kunnen maken om echt een spelbord te krijgen en dan een andere achtergrondkleur kunnen gebruiken?</li>
      </ul>

      <figure>
        <img src="/img/implementeren/feedback.webp" alt="Foto van de developer tools" onclick="openFullscreen(this.src, this.alt)">
        <figcaption>Dit is hoe ik de feedback opgeleverd kreeg.</figcaption>
      </figure>

      <p>Deze feedback heb ik meegenomen in een tweede versie:</p>
      <figure>
        <video controls>
          <source src="/img/implementeren/versie2.mp4" type="video/mp4">
          Je browser ondersteunt geen video-afspeelformaat.
        </video>
        <figcaption>Hier zie je de verbeterde versie met de feedback van de klant verwerkt.</figcaption>
      </figure>
    </section>

    <section>
      <h2>Hierbij heb ik functionele testen opgezet, die vooraf door de klant of het stagebedrijf zijn goedgekeurd, om de correcte werking te garanderen.</h2>
      <h3>Testen</h3>
      <p>Wat belangrijk is voor de klant, is dat ze terug kunnen vinden hoe vaak er op een bepaalde knop is geklikt. Er is een bepaald stuk code waarmee ze dat kunnen checken. Voordat ik de pagina aan de klant stuurde, is het belangrijk dat alle knoppen het doen en dat ze worden gecontroleerd via Weborama.</p>
      <p>De manier waarop ik de knoppen test is via de Weborama Developer Tools. Dit is een apart menu waar je verschillende “events” kan controleren, bijvoorbeeld "wrong answer" of "right answer".</p>
      <figure>
        <video controls>
          <source src="/img/implementeren/debug_voorbeeld.mp4" type="video/mp4">
          Je browser ondersteunt geen video-afspeelformaat.
        </video>
        <figcaption>Hier zie je hoe ik verschillende knoppen test via de developer tools.</figcaption>
      </figure>

      <figure>
        <img class="dev-tool" src="/img/implementeren/dev_tools.png" alt="Foto van de developer tools" onclick="openFullscreen(this.src, this.alt)">
        <figcaption>Foto van het menu van dichtbij.</figcaption>
      </figure>
    </section>

    <section>
      <h2>Het geheel lever ik op met het oog op doorontwikkeling.</h2>
      <h3>Doorontwikkelen</h3>
      <p>De reclame zou in acht verschillende talen getoond worden en moest dus nog zeven keer vertaald worden. Hier heb ik ook rekening mee gehouden bij het ontwikkelen.</p>
      <p>Een voorbeeld hiervan is het bestand waarin de code voor de pop-ups staat. Hierin heb ik elk stuk tekst apart gezet, zodat het makkelijk te vinden is om aan te passen.</p>
      <figure>
        <img src="/img/implementeren/code.webp"  alt="Foto van de developer tools" onclick="openFullscreen(this.src, this.alt)">
        <figcaption>Foto van het menu van dichtbij.</figcaption>
      </figure>

      <h3>Link opleveren</h3>
      <p>Het laatste wat er nog moest gebeuren, is het leveren van de link naar de klant. Voor dit project ging dat via een collega. Het enige wat ik hoefde te doen, was de link sturen via Slack.</p>
    </section>

    <section>
      <h2>Reflectie</h2>
      <p>Ik ben wel tevreden met het eindresultaat. Tijdens het ontwikkelproces zou ik volgende keer wel een paar dingen anders doen</p>
      <p> Ik zou het leuk vinden om bij aankomende projecten ook in contact te zijn met de klant en niet alleen maar de link te versturen. Ik denk dat dit belangrijk is bij deze manier van ontwikkelen.</p>
      In de toekomst zou ik ook uitgebreider willen testen door andere mensen erbij te betrekken. Voor deze opdracht was er niet echt een duidelijke doelgroep meegegeven, waardoor ik niet goed heb kunnen testen of de pagina wel aansloot bij gebruikers.
      <p> Tijdens het project merkte ik ook dat de klant niet altijd mee werkte. Zelfs nadat het ontwerp was goedgekeurd, kreeg ik nog feedback over het ontwerp. Dit heeft het hele proces vertraagd. Ik neem deze ervaring mee als leerpunt voor de toekomst.</p>
    </section>
  </main>

  <div id="fullscreen-container" onclick="closeFullscreen()">
    <span class="close-button">&times;</span>
    <figure>
      <img id="fullscreen-image" src="" alt="">
      <figcaption id="fullscreen-caption"></figcaption>
    </figure>
  </div>

</template>
<style scoped>

.dev-tool{
  margin: 20px auto;
  text-align: center;
  max-width: 100%;
  border-radius: 8px;
  overflow: hidden;
  padding: 10px;
  max-height: 500px;
}

</style>
