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
  <body>
  <header>
    <h1>Projectmatig werken en communiceren</h1>
    <h3>Hoe zorg ik ervoor dat ik mijn deadlines en afspraken nakom en duidelijk communiceer met de belanghebbenden?</h3>
  </header>

  <main>
    <section>
      <h3>Wat zijn de communicatiemiddelen binnen Twopine?</h3>
      <ul>
        <li><strong>Notion</strong>: projectomgeving voor bijvoorbeeld planning en features, zoals Trello</li>
        <li><strong>Slack</strong>: algemene communicatie over projecten</li>
        <li><strong>Figma</strong>: creatieve omgeving om bijvoorbeeld samen te werken aan designs</li>
        <li><strong>Beanstalk</strong>: git-omgeving waar alle projecten staan</li>
        <li><strong>Paymo</strong>: het bijhouden van uren per project voor het berekenen van gewerkte tijd</li>
      </ul>
      <p>Bij Twopine worden verschillende tools gebruikt om te communiceren. Veel van deze tools gebruik ik dagelijks tijdens het werken aan de verschillende projecten. In dit onderdeel vertel ik hoe ik deze tools inzet om in teamverband te werken.</p>
    </section>

    <section>
      <h2>Projectomgeving (Notion)</h2>
      <p>Elk project begint met een briefing, verschillende meetings, planning en veel gegevens. Al deze data wordt bijgehouden in de projectomgeving, die via Notion wordt ingericht. In Notion kan je per project een omgeving maken en daar alle belangrijke bestanden, planning en notities overzichtelijk bijhouden.</p>
      <p>Ik gebruik Notion vooral als verzamelpunt voor een project. Als ik iets nodig heb of als iets nog niet duidelijk is, kan ik altijd op Notion kijken en alles terugvinden over het project.</p>
      <figure>
        <video controls>
          <source src="/img/projectmatig_werken/notion_voorbeeld_video.mp4" type="video/mp4">
          Je browser ondersteunt het afspelen van video's niet.
        </video>
        <figcaption>Hier zie je een Notion-bord van een van de projecten waar ik aan meegewerkt heb. Hier kan ik de planning bekijken en bestanden zoals de design PSD’s terugvinden.</figcaption>
      </figure>
    </section>

    <section>
      <h2>Algemene communicatie (Slack)</h2>
      <p>Voor algemene communicatie gebruiken we Slack. Ik gebruik het zelf vooral om vragen te stellen, bestanden te versturen of om feedback vanuit de klant door te krijgen.</p>
      <figure>
        <img src="/img/projectmatig_werken/slack1.webp" alt="Voorbeeld van Slack-communicatie" onclick="openFullscreen(this.src, this.alt)">
        <figcaption>Hier zie je hoe ik een projectbriefing doorgestuurd krijg via Slack</figcaption>
        <br>
        <img src="/img/projectmatig_werken/slack2.webp" alt="Voorbeeld van Slack-communicatie" onclick="openFullscreen(this.src, this.alt)">
        <br>
        <img src="/img/projectmatig_werken/slack3.webp" alt="Voorbeeld van Slack-communicatie" onclick="openFullscreen(this.src, this.alt)">
        <figcaption>Ook stuur ik veel van mijn werk door via Slack</figcaption>
      </figure>
    </section>

    <section>
      <h2>Creatieve processen (Figma)</h2>
      <p>Voor het maken van concepten en ontwerpen wordt Figma gebruikt. Wat Figma zo handig maakt, is dat je met meerdere personen aan hetzelfde bestand kunt werken. Het is daarom belangrijk dat het bestand goed wordt opgezet, zodat iedereen het begrijpt en er meteen mee aan de slag kan.</p>
      <figure>
        <video controls>
          <source src="/img/projectmatig_werken/figma_voorbeeld.mp4" type="video/mp4">
          Je browser ondersteunt het afspelen van video's niet.
        </video>
        <figcaption>In deze video zie je hoe ik al mijn designonderdelen netjes op de pagina heb neergezet, zodat ook mijn collega's alles terug kunnen vinden.</figcaption>
      </figure>
      <figure>
        <img src="/img/projectmatig_werken/klassebank_figma.webp" alt="Voorbeeld van een commit in PHP Storm" onclick="openFullscreen(this.src, this.alt)">
        <figcaption>Screenshot uit Figma. Hierin zie je hoe ik de lagen van een project indeel.</figcaption>
      </figure>
    </section>

    <section>
      <h2>Versiebeheer (Beanstalk)</h2>
      <p>Het beheren van de verschillende projectversies gebeurt via Beanstalk. Het is gebruikelijk om elke nieuwe feature of pagina waar je aan werkt apart te pushen en er een duidelijke omschrijving bij te geven (in het Engels). Zo kun je per versie terugkijken wat er is veranderd.</p>
      <figure>
        <img src="/img/projectmatig_werken/voorbeeld_commit.webp" alt="Voorbeeld van een commit in PHP Storm" onclick="openFullscreen(this.src, this.alt)">
        <figcaption>Dit is hoe een van mijn commits eruitziet in PHP Storm.</figcaption>
      </figure>
      <figure>
        <img src="/img/projectmatig_werken/voorbeeld_commit_Beanstalk.webp" alt="Voorbeeld van een commit in Beanstalk" onclick="openFullscreen(this.src, this.alt)">
        <figcaption>Dit is hoe een van mijn commits eruitziet in Beanstalk.</figcaption>
      </figure>
    </section>

    <section>
      <h2>Uren bijhouden (Paymo)</h2>
      <p>Voor het bijhouden van uren wordt binnen Twopine het programma Paymo gebruikt. Binnen Paymo kan je per dag verschillende taken toevoegen aan een tijdlijn. Hier kun je uiteindelijk overzichtelijk zien wat je die dag/week hebt gedaan.</p>
      <figure>
        <img src="/img/projectmatig_werken/paymo_taak.webp" alt="Voorbeeld van een dagplanning in Paymo" onclick="openFullscreen(this.src, this.alt)">
        <figcaption>Dit is hoe een taak in Paymo eruitziet.</figcaption>
      </figure>
      <figure>
        <img src="/img/projectmatig_werken/paymo_day.webp" alt="Voorbeeld van een dagplanning in Paymo" onclick="openFullscreen(this.src, this.alt)">
        <figcaption>Dit is hoe de planning van een dag eruitziet.</figcaption>
      </figure>
      <figure>
        <img src="/img/projectmatig_werken/paymo_weekoverzicht.webp" alt="Voorbeeld van een weekplanning in Paymo" onclick="openFullscreen(this.src, this.alt)">
        <figcaption>Dit is hoe een weekplanning eruitziet.</figcaption>
      </figure>
    </section>

    <section>
      <h2>Reflectie</h2>
      <p> Ik vind dat ik in de loop van de stageperiode steeds meer gewend ben geraakt aan het werken in teamverband en dat ik daar ook beter in ben geworden. Dit komt mede door het gebruik van de verschillende communicatiemiddelen die ik heb laten zien. Natuurlijk is dat niet alles; ik bespreek projecten ook vaak in persoon. Toch ben ik het ermee eens dat dit soort tools helpen om een project overzichtelijk te houden, vooral wanneer je er met meerdere mensen aan werkt.</p>
      <p>Wat ik nog lastig vind, is het vinden van de juiste benamingen in bijvoorbeeld Figma of in mijn code. Bij grote projecten wordt dit snel onoverzichtelijk en lastig te lezen. In de toekomst wil ik hier graag beter in worden om mijn werk nog duidelijker over te brengen naar de belanghebbenden.</p>
    </section>

    <div class="buttons">
      <button id="uitwisseling" @click="navigateTo('/home/ondernemende-houding')">
        <h2>Vorige</h2>
      </button>

      <button id="uitwisseling" @click="navigateTo('/home')">
        <h2>Home</h2>
      </button>

      <button id="reflectie" @click="navigateTo('/home/lerend-vermogen')">
        <h2>Volgende</h2>
      </button>
    </div>

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
</style>
