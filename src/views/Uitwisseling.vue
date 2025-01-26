<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
import navbar from '@/components/Navbar.vue';

</script>

<template>
  <navbar/>

<body>
<header>
  <h1>Stage Uitwisseling Ervaring</h1>
</header>

<main>
  <section>
    <h2>Wat wilde ik voorafgaand aan het bezoek uit deze ervaring halen?</h2>
    <p>De stage-uitwisseling was een mooie kans om een kijkje te nemen bij twee totaal verschillende bedrijven. De bedrijven die ik heb bezocht waren DPDK Digital Agency (het stagebedrijf van Mike) en Rate.nl (het stagebedrijf van Suhail).</p>
    <p>Voorafgaand aan de uitwisseling was ik vooral benieuwd naar drie dingen:</p>
    <ul>
      <li>Hoe is het om in een groter bedrijf te werken, met verschillende afdelingen zoals bij DPDK?</li>
      <li>Hoe is het om intern aan een eigen product te werken, in plaats van iets voor een klant te maken, zoals bij Rate.nl?</li>
      <li>De werksfeer binnen deze bedrijven.</li>
    </ul>
    <p>Ik wilde deze dingen vergelijken met mijn eigen ervaringen bij Twopine.</p>
  </section>

  <section>
    <h2>DPDK Digital Agency</h2>
    <p>DPDK is een digital agency dat websites maakt voor verschillende klanten. Een van de projecten waaraan Mike werkte, was de website van Diergaarde Blijdorp. DPDK gebruikt technologieën zoals TypeScript, Next.js, een CMS, en Tailwind voor het bouwen van hun websites. Dit verschilt van de technieken die ik op mijn eigen stage gebruik.</p>
    <p>Het pand van DPDK lijkt op een oud huis met op elke verdieping verschillende afdelingen van het bedrijf. Elke afdeling heeft een aparte kamer en is dus gescheiden van de rest. Iedereen communiceert daarom ook vooral via Slack. Het was ook best rustig op kantoor terwijl het geen thuiswerken dag was. Bij DPDK werkt iedereen 2 dagen thuis, 2 dagen op kantoor en een flex dag (alleen op kantoor als je iets belangrijks hebt).</p>
    <p>Het voelde hierdoor ook wel alsof iedereen met zichzelf en hun werk bezig was. Bijvoorbeeld als je programmeur bent weet je vaak niet wat er op andere afdelingen speelt. Mike vertelde wel dat iedereen bij elkaar gaat zitten tijdens de gezamenlijke lunch. Waar ik ook verbaasd over was, is dat er iemand fulltime is om de lunch klaar te maken en er dus altijd warme broodjes en vers beleg klaar liggen om te pakken.</p>
    <figure>
      <img class="dpdk" src="/img/uitwisseling/dpdk-kantoor.png" alt="Foto DPDK kantoor (bron: google maps)" onclick="openFullscreen(this.src, this.alt)">
      <figcaption>Foto DPDK kantoor (bron: google maps)</figcaption>
    </figure>

  </section>

  <section>
    <h2>Rate.nl</h2>
    <p>Rate.nl is een platform waar klanten online vragenlijsten kunnen maken voor bijvoorbeeld medewerker- en klanttevredenheidsonderzoeken. Veel van hun klanten komen uit de zorgsector. De software bestaat al een tijdje en is qua techniek wat verouderd.</p>
    <p>Het kantoor van Rate.nl was totaal het tegenovergestelde van dat van DPDK. Rate.nl heeft een kantoorunit in het Groot Handelsgebouw in Rotterdam. Het pand heeft een gedeelde keuken en ontmoetingsruimtes voor de verschillende kantoorunits. Er werken ongeveer acht mensen, waaronder twee developers en mensen voor marketing en sales. Het bedrijf richt zich voornamelijk op hun bestaande en nieuwe software.</p>
    <figure>
      <img src="/img/uitwisseling/groothandelsgebouw.png" alt="Foto groothandelsgebouw (bron: google maps)" onclick="openFullscreen(this.src, this.alt)">
      <figcaption>Foto groothandelsgebouw (bron: google maps)</figcaption>
    </figure>
  </section>

  <section>
    <h2>Mijn ervaring</h2>
    <p>Hoe heb ik de uitwisseling ervaren? Ik vond het interessant om bij andere bedrijven te kijken en ervaringen te delen met klasgenoten.</p>
    <p>De werksfeer bij Rate.nl leek erg op die van Twopine. Iedereen kent elkaar, en alle updates en voortgang worden met elkaar gedeeld. Iedereen weet wel van elkaar waar ze mee bezig zijn, wat een teamgevoel creëert doordat iedereen aan hetzelfde product werkt.</p>
    <p>Ik vond DPDK een stuk minder collegiaal en veel individueler. De communicatie verloopt voornamelijk digitaal en je werkt meer in je eigen bubbel dan met mensen van andere afdelingen. Ik snap ook dat dit logisch is bij een groter bedrijf en je met zoveel collega’s niet iedereen bij naam kent. Het helpt ook niet dat bijna iedereen maar twee dagen per week fysiek op kantoor is.</p>
    <p>Als ik de twee bedrijven zou vergelijken met mijn eigen stage, zou ik zeggen: Twopine lijkt een beetje op een mix van beide. De werksfeer van Rate.nl met het type werk van DPDK.</p>
    <p>Ik denk dat ik door deze ervaring wel een voorkeur heb voor kleinere bedrijven. Het collegiale gevoel en het feit dat je echt samen ergens naar toe werkt vind ik zelf belangrijk op de werkvloer. Om dit te bevestigen voordat ik afstudeer zou ik in de toekomst (bijvoorbeeld tijdens mijn afstudeerstage) zelf bij een groot bedrijf werken om te ervaren hoe het is.</p>
    <figure>
      <img src="/img/uitwisseling/gezamelijke-foto.jpg" alt="Foto met z’n drieën op kantoor bij Twopine" onclick="openFullscreen(this.src, this.alt)">
      <figcaption>Foto met z’n drieën op kantoor bij Twopine.</figcaption>
    </figure>
  </section>
</main>
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


.dpdk{
  margin: 20px auto;
  text-align: center;
  max-width: 100%;
  border-radius: 8px;
  overflow: hidden;
  padding: 10px;
  max-height: 500px;
}

</style>

