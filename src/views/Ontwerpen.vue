<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
import navbar from '@/components/Navbar.vue';
</script>

<template>
  <navbar/>
  <body>
  <header>
    <h1>Ontwerpen en Prototypen</h1>
    <h3>Ik kan vanuit user stories een interactie-ontwerp opstellen als basis voor verschillende prototypes.
      Middels gestructureerde gebruikerstesten doe ik aanbevelingen om tot een product te komen dat aansluit bij de doelgroep.
    </h3>
  </header>

  <section>
    <h2>Over dit project</h2>
    <p><strong>Klant:</strong> Stichting ADO Historie</p>
    <p> <strong>Opdracht:</strong> De stichting ADO Historie is een onafhankelijk onderdeel van ADO Den Haag dat samen met ADO de volledige clubhistorie wil vastleggen.
      Dit hebben ze gedaan door een clubboek uit te brengen met alle statistieken van 1905 tot 2023. Nu willen ze uitbreiden naar een digitale omgeving die ze over de jaren bij kunnen houden.
      Samen met Twopine willen ze de statistieken en verhalen uit het boek digitaliseren.
    </p>
    <p>
      Het Historie-onderdeel wordt een nieuwe pagina op <a href="https://www.adodenhaag.nl" target="_blank">adodenhaag.nl</a>, en ik mocht de landingspagina hiervoor ontwerpen.
    </p>
  </section>

  <section>
    <h2>Ik kan vanuit user stories een interactie-ontwerp opstellen. Als basis voor verschillende prototypes</h2>
    <h3>Briefing</h3>
    <p>
      Het project begon bij een briefing van de klant. Dit was een opgeleverd Word-document met daarin een aantal voorwaarden waar de landingspagina aan moet voldoen:
    </p>
    <ul>
      <li>De kleuren en fonts moeten overeenkomen met de huisstijl van ADO.</li>
      <li>De structuur moet helder en makkelijk te gebruiken zijn (ook door oudere gebruikers).</li>
      <li>Er zijn acht menu-items die op de landingspagina moeten komen.</li>
    </ul>
    <figure>
      <img src="/img/ontwerpen/briefing.webp" alt="Foto van de briefing" onclick="openFullscreen(this.src, this.alt)">
      <figcaption>Hier zie je hoe de voorwaarden in de briefing gesteld zijn.</figcaption>
    </figure>
  </section>


  <section>
    <h3>Eerste ontwerp</h3>
    <p>
      Binnen Twopine wordt eigenlijk niet met user stories gewerkt. Ik ben gelijk met de punten uit de briefing een eerste versie gaan ontwerpen.
      Voor de eerste versie heb ik inspiratie genomen van andere clubwebsites en natuurlijk de huisstijl van ADO zelf.
    </p>
    <figure>
      <img src="/img/ontwerpen/blockout.webp" alt="Foto van eerste ontwerp" onclick="openFullscreen(this.src, this.alt)">
      <figcaption>Hier zie je de eerste versie van mijn ontwerp.</figcaption>
    </figure>
    <p>
      Dit ontwerp heb ik uiteindelijk uitgebreid tot een eerste interactie-ontwerp en een mobiele versie:
    </p>
    <figure>
      <video controls>
        <source src="/img/ontwerpen/hoover_menu.mp4" type="video/mp4">
        Je browser ondersteunt geen video-afspeelformaat.
      </video>
      <figcaption>Video van het eerste interactie-ontwerp.</figcaption>
    </figure>
    <figure>
      <img class="mobile" src="/img/ontwerpen/mobiel_menu.webp" alt="Foto van mobiele versie" onclick="openFullscreen(this.src, this.alt)">
      <figcaption>Mobiele versie van het ontwerp.</figcaption>
    </figure>
  </section>

  <section class="content-section">
    <h3>Feedback en verbeteringen</h3>
    <p>
      Over deze twee versies kreeg ik binnen Twopine feedback dat het interactie-ontwerp lastig zou werken op mobiel, omdat je geen muis hebt om te hoveren,
      en dat in de mobiele versie de tekst te klein was. Met deze tips heb ik een derde ontwerp gemaakt, één die op zowel mobiel als desktop werkt.
      Deze versie heeft verschillende menublokken die de klant kan hernoemen of verschuiven.
    </p>
    <figure>
      <img src="/img/ontwerpen/blokken.webp" alt="Foto van derde ontwerp" onclick="openFullscreen(this.src, this.alt)">
      <figcaption>Hier zie je hoe het derde ontwerp eruitziet.</figcaption>
    </figure>
    <p>
      Dit ontwerp heb ik in een online meeting laten zien. Op basis daarvan kreeg ik nog een lijst met feedback, hoewel de klant al positief was over het ontwerp.
    </p>
    <p><strong>Belangrijke feedbackpunten:</strong></p>
    <ul>
      <li>Sommige blokken moesten verplaatst worden.</li>
      <li>Sommige blokken moesten iets kleiner.</li>
      <li>Een contactknop aan de onderkant toevoegen.</li>
      <li>Een blok uit de eerste briefing was vergeten.</li>
    </ul>
    <figure>
      <img src="/img/ontwerpen/feedback_verwerkt.webp" alt="Foto van verbeterd ontwerp" onclick="openFullscreen(this.src, this.alt)">
      <figcaption>Het verbeterde ontwerp na verwerking van de feedback.</figcaption>
    </figure>
  </section>

  <section class="content-section">
    <h3>Gebruikerstesten</h3>
    <p>
      Een week later was er een workshop die een collega van mij zou geven aan de leden van de stichting. Een aantal van de leden zijn wat ouder en vallen binnen de doelgroep oudere gebruikers.
      Dit was een mooi moment om hun mening over het ontwerp te vragen. Ik ging mee naar deze bijeenkomst, die plaatsvond in het stadion.
    </p>
    <p>
      Tijdens de workshop waren er vijf leden van de stichting aanwezig. De workshop begon met het tonen van het nieuwe ontwerp. Iedereen leek het menu te begrijpen, maar ze waren het erover eens dat ze zelf de foto’s in het menu willen kunnen uitkiezen.
    </p>
  </section>

  <section>
    <h2> Reflectie </h2>
    <p>Dit is misschien wel mijn favoriete project van mijn stageperiode. Ik vind het supergaaf om iets gemaakt te hebben dat uiteindelijk ook op de website van ADO Den Haag komt te staan. Natuurlijk is dit niet het uiteindelijke ontwerp, en zullen er in de toekomst nog wat aanpassingen worden gemaakt. Wat dit project extra leuk maakt, is dat ik meerdere keren met de klant heb kunnen spreken, zowel online als in persoon.</p>
    <p>Wat ik volgende keer wel anders zou doen, is een meer gestructureerde test opzetten en echt met de doelgroep in gesprek gaan. Voor dit project was daar helaas niet echt ruimte voor (ook al vind ik dat de leden van de stichting ook onder de doelgroep vallen).</p>
    <p>Ik merk wel dat zulke uitgebreide gebruikerstests niet echt gebruikelijk zijn bij TwoPine vanwege een gebrek aan tijd. Maar in de toekomst, bijvoorbeeld tijdens mijn afstudeerstage, zou ik dit graag nog eens willen doen.</p>
  </section>
  </body>

  <div id="fullscreen-container" onclick="closeFullscreen()">
    <span class="close-button">&times;</span>
    <figure>
      <img id="fullscreen-image" src="" alt="">
      <figcaption id="fullscreen-caption"></figcaption>
    </figure>
  </div>

</template>
<style scoped>

.mobile{
  margin: 20px auto;
  text-align: center;
  max-width: 100%;
  border-radius: 8px;
  overflow: hidden;
  padding: 10px;
  max-height: 2000px;
}

</style>