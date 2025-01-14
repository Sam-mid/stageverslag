<script>
document.addEventListener("DOMContentLoaded", () => {
  window.openFullscreen = (src, alt) => {
    const fullscreenContainer = document.getElementById('fullscreen-container');
    const fullscreenImage = document.getElementById('fullscreen-image');
    const fullscreenCaption = document.getElementById('fullscreen-caption');

    fullscreenImage.src = src;
    fullscreenCaption.textContent = alt;
    fullscreenContainer.style.display = 'flex';
  };

  window.closeFullscreen = () => {
    const fullscreenContainer = document.getElementById('fullscreen-container');
    fullscreenContainer.style.display = 'none';
  };
});
</script>
<template>

  <header>
    <h1>Ondernemende houding en vaardigheden</h1>
    <h3>
      Ik kijk verder dan wat me gevraagd wordt. Ik bedenk nieuwe oplossingen, vergelijk met bestaande oplossingen en kom uit mezelf met adviezen om waarde te creëren voor de klant of het stagebedrijf.
    </h3>
  </header>


  <section>
    <h2>Over dit project</h2>
    <p><strong>Klant:</strong> bruidshoek.nl</p>
    <p>
      <strong>Opdracht:</strong> Voor deze opdracht werd aan mij gevraagd of ik een oplossing wilde bedenken voor een nieuwe klant van Twopine. De klant was een bruidsmodezaak die op de website hun voorraad aan trouwkleding wil tonen. Alleen komen de foto’s niet met elkaar overeen.
    </p>

    <figure>
      <img src="/img/ondernemende_houding/bruidshoek_website.webp" alt="Foto van de huidige website" onclick="openFullscreen(this.src, this.alt)" />
      <figcaption>foto van de huidige website</figcaption>
    </figure>

    <p>
      Zoals je kunt zien, zijn op sommige foto's de jurken en modellen groter of kleiner dan op andere foto's. Om de website te verbeteren, zouden alle foto’s opnieuw geschaald en bijgesneden moeten worden in Photoshop. Dit kost veel tijd en budget. Daarom is aan mij gevraagd of ik een online tool kon vinden om dit probleem op te lossen.
    </p>
  </section>

  <section>

    <h2>Welke bestaande oplossingen heb ik vergeleken?</h2>
    <p>
      Ik ben op zoek gegaan naar een tool die dit proces makkelijker maakt. Een van de tools die ik heb vergeleken is <strong>crop.photo</strong>. Deze tool is ontworpen om veel foto’s tegelijkertijd te kunnen croppen. Dit was ook zeker het geval, alleen waren de foto's erg inconsistent en niet op de juiste manier gecropt.
    </p>

    <figure>
      <img src="/img/ondernemende_houding/test.webp" alt="Resultaat van crop.photo" onclick="openFullscreen(this.src, this.alt)"/>
      <figcaption>Het resultaat van crop.photo was helaas inconsistent.</figcaption>
    </figure>

  </section>

  <section>
    <h2>Welke oplossing heb ik bedacht?</h2>
    <p>
      Na een aantal oplossingen te hebben vergeleken, ben ik gaan onderzoeken of het mogelijk was om zelf een tool te maken. Ik vond online veel verhalen van mensen die dit zelf hebben gemaakt door middel van AI-gezichtsherkenning. Hierna heb ik ook ChatGPT geraadpleegd om te ontdekken wat ik hiervoor nodig zou hebben.
    </p>
    <p>
      Met al deze informatie heb ik goedkeuring gekregen om het te gaan bouwen. Uiteindelijk heb ik de volgende oplossing gemaakt:
    </p>
    <p>
      Een Python-script dat gezichten herkent in foto’s en vervolgens elke foto bijsnijdt en schaalt, zodat alle foto’s overeenkomen met elkaar. Het script kan honderden foto’s binnen een paar minuten aanpassen.
    </p>

    <figure>
      <img src="/img/ondernemende_houding/voorbeeld1.webp" alt="Resultaat van crop.photo" onclick="openFullscreen(this.src, this.alt)"/>
      <figcaption>Resultaten van het python script.</figcaption>
    </figure>

  <figure>
    <video controls>
      <source src="/img/ondernemende_houding/bruidsdetectie_tool.mp4" type="video/mp4" />
      Je browser ondersteunt het afspelen van video's niet.
    </video>
    <figcaption>Een demonstratie van hoe het Python-script werkt.</figcaption>
  </figure>
</section>

  <section>
  <h3>Hoe heeft dit waarde gecreëerd voor Twopine?</h3>
  <p>
    Met dit script heeft Twopine een stabiele en betrouwbare oplossing voor het probleem, zonder dat ze telkens geld moesten betalen voor een (inconsistente) online tool. Deze oplossing heeft gezorgd voor een product waar zowel Twopine als de klant tevreden mee zijn. Bovendien kan dit script verder worden uitgebreid voor andere klanten en webshops.
  </p>
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
</style>