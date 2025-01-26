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
    <title>Maatschappelijke Verantwoordelijkheid</title>
  </head>

  <body>
  <header>
    <h1>Maatschappelijke Verantwoordelijkheid</h1>
    <h3>Ik verdiep me naast de directe gebruikers ook in andere stakeholders en maatschappelijke ontwikkelingen. Ik kan maatschappelijke en ethische implicaties van producten waaraan ik meewerk benoemen, en er een onderbouwde mening over vormen.</h3>
  </header>

  <section>
    <h2>Over dit project</h2>
    <p><strong>Klant:</strong> Jimmy's Agency</p>
    <p><strong>Project:</strong> Voor dit onderdeel wil ik graag mijn ervaring delen over een project waar ik aan het begin van mijn stage aan heb gewerkt, namelijk: een interactieve webreclame voor het speelgoedmerk LOL Surprise. Een interactieve webreclame is een reclame die meestal wordt afgespeeld voordat je een website bezoekt, en waar interactie in verwerkt zit, bijvoorbeeld een "call to action" om naar een productpagina te navigeren. In de briefing stond dat de doelgroep voor deze reclames meisjes van 4 tot 8 jaar zijn.</p>
    <p>Ik heb voor deze klant twee reclames geprogrammeerd, waarvan ik er zelfs één heb ontworpen (opmaak gemaakt op basis van aangeleverde voorbeelden van de klant). Ik heb nog nooit eerder voor zo’n jonge doelgroep iets gemaakt, dus wil ik in dit onderdeel reflecteren op de maatschappelijke/ethische implicaties van de reclames en wat ik er uiteindelijk zelf van vond om aan dit project te werken.</p>
    <figure>
      <img src="/img/maatschappelijke-verandwwordelijkheid/lol-pagina.webp" alt="Foto van de developer tools" onclick="openFullscreen(this.src, this.alt)">
      <figcaption>De pagina die ik heb gemaakt voor de klant.</figcaption>
    </figure>
  </section>

  <section>
    <h2>De invloed van reclames op kinderen</h2>
    <p>Kinderen onder de 8 jaar kunnen meestal nog geen onderscheid maken tussen de website die ze zoeken en de reclame daarop. Dit heet reclamewijsheid. Ook begrijpen zij het commerciële doel van reclames nog niet. Dit betekent dus dat ze niet weten wanneer ze aangespoord worden om iets te kopen.</p>
    <p><a href="https://netwerkmediawijsheid.nl/bitefile-reclamewijsheid/#:~:text=Kinderen%20die%20reclame%20minder%20leuk,geadverteerde%20producten%20minder%20graag%20hebben" target="_blank">Bron: over reclamewijsheid</a></p>
    <p>Dit lijkt mij al helemaal misleidend bij de LOL reclames. Hier zit namelijk interactie in verwerkt, waardoor het nog meer lijkt op een spelletje in plaats van een reclame.</p>
  </section>

  <section>
    <h2>Regelgeving</h2>
    <p>De regelgeving rondom kinderreclames is erg streng; er zijn dus ook een hoop regels om rekening mee te houden. Zelf weet ik niet zeker bij welke stap van het proces er gecontroleerd wordt of alles voldoet aan de regels. Ik denk dat dit bij het marketingbureau gebeurt waar Twopine de reclames voor maakt.</p>
    <p>Ook zijn er specifieke regels rondom reclames die lijken op games. Op reclamecode.nl vond ik dit:</p>
    <blockquote>
      <p>(in-) Game advertising moet door optische, virtuele en/of akoestische middelen en passend bij het bevattingsvermogen van kinderen duidelijk herkenbaar zijn en zich onderscheiden van de game.</p>
      <p>(In-) Game advertising gericht op kinderen moet in de game en voordat de game begonnen kan worden duidelijk en ondubbelzinnig, en passend voor het bevattingsvermogen van de kinderen, verder aangeven dat de game, of delen daarvan, reclame is en voor welke adverteerder.</p>
    </blockquote>
    <p>Dit betekent dus dat de reclame duidelijk te onderscheiden moet zijn van de website/game die de doelgroep gaat bezoeken, en dat er duidelijk aangegeven moet worden dat het een reclame is.</p>
    <p><a href="https://www.reclamecode.nl/kind-reclame/#:~:text=(In%2D)Game%20advertising,voor%20welke%20adverteerder" target="_blank">Bron: over regelgeving rond kind-reclames</a></p>
  </section>

  <section>
    <h2>Overconsumptie in de speelgoedindustrie en overbodig plastic</h2>
    <p>Naast de reclames is er ook nog een andere manier waarop het speelgoed maatschappelijke invloed heeft, namelijk het plasticafval dat de industrie produceert. Bijna 90% van al het kinderspeelgoed is gemaakt van plastic. Daarnaast is de speelgoedindustrie een van de meest vervuilende industrieën met betrekking tot plastic.</p>
    <p><a href="https://www.theworldcounts.com/challenges/consumption/other-products/environmental-impact-of-toys" target="_blank">Bron: over de impact van speelgoed op het milieu</a></p>
    <h3>Wat doet LOL Surprise hieraan?</h3>
    <p>In 2022 is het moederbedrijf van LOL Surprise (MGA Entertainment, Inc. (MGA)) overgestapt op “biodegradable plastic”. De verpakking wordt gemaakt van materialen zoals bamboe, hout, suikerriet en andere natuurlijke grondstoffen.</p>
    <p><a href="https://www.packagingstrategies.com/articles/96786-new-lol-surprise-earth-love-has-eco-friendly-packaging#:~:text=%E2%84%A2%20iconic%20spherical%20packaging%20using,is%20the%20all%20new%20L.O.L" target="_blank">Bron: over de duurzame verpakkingen van LOL Surprise</a></p>
    <p>Maar is dit wel echt zo? Het speelgoed (poppetje) is nog steeds plastic en het wordt nog steeds verpakt in een grote plastic bal. Alleen de wrapper en de zakjes in de bal zijn recyclebaar. Er wordt dus nog steeds veel onnodig plastic geproduceerd.</p>
  </section>

  <section>
    <h2>Reflectie</h2>
    <p>Wat vind ik zelf van dit project nadat ik onderzoek heb gedaan?</p>
    <p>Ik zie sowieso geen nut in het verzamelen van deze poppetjes en het lijkt me dat ze ook zo weer weggegooid worden. De ‘lol’ van dit product lijkt me vooral in het uitpakken en het mysterie-element te zitten.</p>
    <p>Als ik kritisch kijk naar de advertentie die ik heb gemaakt, weet ik niet zeker of alles voldoet aan de regels die ik eerder benoemde. Ook vind ik het interessant dat er nergens iets over regelgeving in de briefing stond. De reclame lijkt best veel op een spelletje en er wordt nergens specifiek vermeld dat het een reclame is. Dit kan nog aangepast zijn door de klant voordat de reclame live is gegaan, maar dat weet ik niet zeker. Als het zo blijft, dan is het niet heel maatschappelijk verantwoord.</p>
    <p>Op het moment dat ik deze opdracht kreeg, had ik niet heel veel moeite met het maken van deze advertentie, maar nu ik al dit onderzoek heb gedaan, vind ik het toch wel een lastig onderwerp. Als ik zou kunnen kiezen, zou ik veel liever aan meer verantwoorde projecten werken. Maar ik snap ook dat je niet altijd kan kiezen als bedrijf en dat je soms ook dit soort projecten moet doen om geld te verdienen.</p>
  </section>

  <section>
    <h2>Een les voor de toekomst</h2>
    <p>In de toekomst zou ik zeker eerst wat onderzoek doen naar het bedrijf of merk waar ik de reclame voor maak, om meer inzicht te krijgen in wat mijn rol precies is binnen dit project en wat ik toevoeg op maatschappelijk en ethisch gebied.</p>
    <p>Zou ik in de toekomst dit soort projecten afwijzen? Dat vind ik lastig om te zeggen. Ik zal in de toekomst zeker niet op zoek gaan naar dit soort projecten, maar in sommige gevallen heb je niet de luxe om voor specifieke projecten te kiezen en moet je het doen met wat je aangeboden krijgt.</p>
  </section>

  <div class="buttons">
    <button id="uitwisseling" @click="navigateTo('/home/lerend-vermogen')">
      <h2>Vorige</h2>
    </button>

    <button id="uitwisseling" @click="navigateTo('/home')">
      <h2>Home</h2>
    </button>

  </div>

  </body>

  <div id="fullscreen-container" onclick="closeFullscreen()">
    <span class="close-button">&times;</span>
    <figure>
      <img id="fullscreen-image" src="" alt="">
      <figcaption id="fullscreen-caption"></figcaption>
    </figure>
  </div>
</template>

<style>
</style>

