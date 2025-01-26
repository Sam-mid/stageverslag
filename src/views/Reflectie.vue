<script>
</script>

<template>

  <header>
    <h1>Algemene reflectie</h1>
  </header>
  <section>
    <h2>Doelen</h2>
    <p>Voorafgaand aan de stage hed ik drie doelen opgesteld: </p>
    <h3>Ontdekken hoe het is om te werken in een professionele werkomgeving in plaats van op school.  </h3>
    <p>Ik vond het erg prettig om binnen een professionele werkomgeving te werken. Aan het begin van de dag is er een stand-up, zodat je weet waar iedereen mee aan de slag gaat. Iedereen heeft zijn eigen expertise, waardoor je ook van elkaar kunt leren. Tijdens een schoolproject is het hele proces vaak wat chaotischer en heeft iedereen ongeveer dezelfde kennis, aangezien we allemaal dezelfde opleiding volgen.</p>
    <h3>Meer leren over de professionele werkwijze binnen een bedrijf.</h3>
    <p>Ik vond het vooral interessant om te leren hoe andere bedrijven te werk gaan en hoe dat verschilt van de werkwijze op school. Mij viel vooral op hoe snel je nieuwe technieken oppakt als je er tijdens het werken mee bezig bent, zolang je de basiskennis maar hebt.</p>
    <h3>Hoe vind ik het om fulltime met front-end bezig te zijn?</h3>
    <p>Tijdens de stage ben ik erachter gekomen dat ik het leuker vind om verschillende taken door de week heen te hebben in plaats van alleen met front-end bezig te zijn. Daarnaast vind ik het fijn om bij het gehele proces betrokken te zijn, van ontwerpen tot aan het bouwen van een website.</p>
  </section>

  <section>
    <h2>Wat vond ik goed gaan?</h2>
    <p>Het werken in teamverband ging eigenlijk de gehele stage goed. Alles was altijd netjes op tijd af, en als ik ergens mee vastzat, was er altijd wel iemand om te helpen. Ook vind ik dat ik mijzelf in korte tijd heb kunnen aanpassen aan de werkwijze van TwoPine.</p>
  </section>
  <section>
    <h2>Wat neem ik mee naar het volgende semester/ visie op afstuderen?</h2>
    <p>Hoewel ik tijdens de stage veel verschillende projecten heb gehad, heb ik bijna geen doelgroepen testen en onderzoeken opgezet. Dit is iets wat ik op school altijd leuk vond om te doen. Ik zou dit tijdens het vervolg van mijn opleiding of tijdens het afstuderen graag nog willen doen.</p>
    <p>Ook zou ik volgende keer vaker feedbackmomenten willen inplannen. De afgelopen maanden heb ik alleen feedback gekregen als ik ergens niet uitkwam of als ik een project opleverde.</p>
  </section>

  <section>
    <h2>Hoe heb ik mijn stage ervaren?</h2>
    <p>Ik kan niet anders zeggen dan dat ik erg blij ben met hoe mijn stage is verlopen. TwoPine was een perfecte plek om te leren en om te proeven van het bedrijfsleven. Ik zou het dan ook zeker aanraden aan andere studenten om hier stage te lopen.</p>
    <br>
    <p>TwoPine bedankt!</p>

    <section id="fotocollage">
      <div class="collage">
        <img src="/img/fotos/foto1.png" alt="Beschrijving van foto 1" onclick="openFullscreen(this.src, this.alt)">
        <img src="/img/fotos/foto2.jpg" alt="Beschrijving van foto 2" onclick="openFullscreen(this.src, this.alt)">
        <img src="/img/fotos/foto3.png" alt="Beschrijving van foto 3" onclick="openFullscreen(this.src, this.alt)">
        <img src="/img/fotos/foto4.jpeg" alt="Beschrijving van foto 4" onclick="openFullscreen(this.src, this.alt)">
        <img src="/img/fotos/foto5.jpeg" alt="Beschrijving van foto 5" onclick="openFullscreen(this.src, this.alt)">
        <img src="/img/fotos/foto6.png" alt="Beschrijving van foto 6" onclick="openFullscreen(this.src, this.alt)">
        <img src="/img/fotos/foto7.jpeg" alt="Beschrijving van foto 7" onclick="openFullscreen(this.src, this.alt)">
      </div>
    </section>

  </section>

  <div id="fullscreen-container" onclick="closeFullscreen()">
    <span class="close-button">&times;</span>
    <figure>
      <img id="fullscreen-image" src="" alt="">
      <figcaption id="fullscreen-caption"></figcaption>
    </figure>
  </div>

</template>

<style scoped>
/* Fotocollage sectie */
#fotocollage {
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
}

#fotocollage h2 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

/* Grid voor de afbeeldingen */
.collage {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Responsieve kolommen */
  gap: 1rem; /* Ruimte tussen de afbeeldingen */
  justify-items: center;
}

.collage img {
  width: 100%; /* Vul de breedte van het grid-vak */
  height: 150px; /* Stel een vaste hoogte in voor een vierkant */
  object-fit: cover; /* Zorg dat de afbeelding het vak netjes opvult */
  border-radius: 8px; /* Ronde hoeken (optioneel) */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Zachte schaduw */
  transition: transform 0.3s ease; /* Animatie bij hover */
}

.collage img:hover {
  transform: scale(1.05); /* Inzoomen bij hover */
}

#fullscreen-container img {
  max-width: 90%;
  max-height: 1250px;
  border-radius: 8px;
}
</style>

