<script setup lang="ts">
import navbar from '@/components/Navbar.vue';
</script>

<template>

  <body>
<!--    <navbar/>-->
  <section id="inleiding">

    <h2>Inleiding</h2>
    <h3> Welkom </h3>
    <p> Op deze website vind je alles over mijn meeloopstage bij Twopine Media en de projecten waaraan ik het afgelopen semester heb gewerkt. Aan elke competentie uit de handleiding heb ik een project gelinkt. Elke competentie een aan het begin een omschrijving van het project en op het eind een korte reflectie over mijn ervaring.</p>

    <h3>Hoe ben ik bij Twopine terechtgekomen?</h3>
    <p>Voordat ik begon met zoeken naar een stageplek, wist ik eigenlijk al dat ik met front-end en design wilde werken. Ik was ook al aan het oriënteren op bedrijven die op zoek waren naar een front-end stagiair. Tijdens de stagemarkt heb ik mijn portfolio laten zien bij de stand van Twopine, waarna ik uiteindelijk werd uitgenodigd voor een gesprek. In eerste instantie sprak het bedrijf mij ook aan omdat het op fietsafstand van mijn huis ligt.</p>
    <p>Op kantoor heb ik een erg fijn gesprek gehad. Ik kreeg ook de indruk dat ik betrokken zou worden bij lopende projecten en dat er veel ruimte was om te leren. Na het gesprek kreeg ik vrijwel direct een stageplek aangeboden (waar ik natuurlijk ja op heb gezegd).</p>

    <h3>Doelen</h3>
    <p>Voorafgaand had ik een paar doelen die ik tijdens deze stage wilde bereiken:</p>
    <ul>
      <li>Ontdekken hoe het is om te werken in een professionele werkomgeving in plaats van op school.</li>
      <li>Meer leren over de professionele werkwijze binnen een bedrijf.</li>
      <li>Hoe vind ik het om fulltime met front-end bezig te zijn?</li>
    </ul>
  </section>


  <section>
    <h2 id="over-twopine" class="twopine">Over Twopine</h2>
    <p>Twopine is een web agency gespecialiseerd in het maken van websites op maat. Opgericht in 2010. Het kantoor is gevestigd in Rijswijk en het team bestaat uit zeven vaste krachten en een stagiair (ik).  </p>
    <p>De grootste klanten van Twopine komen uit de automotive en financiële branche. <br> Bedrijven zoals ABN AMRO en  ikrij.nl </p>
  </section>

  <section id="competenties" class="compententies">
    <h2>Competenties</h2>
    <p>Lijst met competenties</p>
    <ul>
      <li><a href="/home/technische-kennis-en-analyse">Technische kennis en analyse</a></li>
      <li><a href="/home/implementeren-testen-opleveren"> Implementeren, testen en opleveren</a></li>
      <li><a href="/home/ontwerpen-en-prototypen">Ontwerpen en prototype</a></li>
      <li><a href="/home/ondernemende-houding">Ondernemende houding</a></li>
      <li><a href="/home/projectmatig-werken">Projectmatig werken</a></li>
      <li><a href="/home/lerend-vermogen">Lerend vermogen</a></li>
      <li><a href="/home/maatschappelijke-verantwoordelijkheid">Maatschappelijke Verantwoordelijkheid</a></li>
    </ul>
  </section>

  <section id="uitwisseling">
    <h2>Uitwisseling</h2>
    <p>Mijn ervaring op uitwisseling</p>
    <ul>
      <li><a href="/home/uitwisseling">Uitwisseling</a></li>
    </ul>
  </section>

  <section>
    <h2 id="onderzoeksverslag">Onderzoeksverslag</h2>
    <a href="/onderzoeksresultaten.pdf" target="_blank"> Klik hier voor mijn onderzoeksverslag</a>
  </section>
  </body>
</template>

<style scoped>
.twopine{
  text-shadow: 3px 3px #36a52c;
}

</style>