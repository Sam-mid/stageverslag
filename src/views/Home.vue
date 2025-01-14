<template>
<!--  <div id="app">-->
<!--    <header>-->
<!--      <h1>Welkom op mijn portfolio</h1>-->
<!--      <h3>Ontdek mijn ervaringen en inzichten</h3>-->
<!--      <nav>-->
<!--        <ul>-->
<!--          <li v-for="section in sections" :key="section.id">-->
<!--            <a :href="'#' + section.id">{{ section.title }}</a>-->
<!--          </li>-->
<!--        </ul>-->
<!--      </nav>-->
<!--    </header>-->

<!--    <main>-->
<!--      <section v-for="section in sections" :key="section.id" :id="section.id">-->
<!--        <h2>{{ section.title }}</h2>-->
<!--        <p>{{ section.content }}</p>-->
<!--      </section>-->
<!--    </main>-->
<!--  </div>-->

  <section>
    <h2>Competenties</h2>
    <p>lijst met competenties</p>
    <ul>
      <li><a href="/home/technische-kennis-en-analyse">Technische kennis en analyse</a></li>
      <li><a href="/home/maatschappelijke-verantwoordelijkheid">Maatschappelijke Verantwoordelijkheid</a></li>
      <li><a href="/home/projectmatig-werken">Projectmatig werken</a></li>
      <li><a href="/home/ondernemende-houding">Ondernemende houding</a></li>
    </ul>
  </section>

  <section>
    <h2>Uitwisseling</h2>
    <p>mijn ervaring op uitwisseling</p>
    <ul>
      <li><a href="/home/uitwisseling">uitwisseling</a></li>
    </ul>
  </section>

</template>

<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      sections: [-->
<!--        // { id: "inleiding", title: "Inleiding", content: "Welkom op mijn website. Dit is de introductie." },-->
<!--        // { id: "colofon", title: "Colofon", content: "Hier is de colofon van de website." },-->
<!--        { id: "competenties", title: "Competenties", content: "Dit is een overzicht van mijn competenties." },-->
<!--        { id: "uitwisseling", title: "Uitwisseling", content: "Hier lees je meer over mijn uitwisselingservaringen." },-->
<!--        // { id: "reflectie", title: "Reflectie", content: "Dit is mijn reflectie op mijn werk." },-->
<!--        // { id: "conclusie", title: "Conclusie", content: "Hier trek ik mijn conclusies." },-->
<!--        // { id: "onderzoek", title: "Onderzoek", content: "Meer over het onderzoek dat ik heb uitgevoerd." },-->
<!--      ],-->
<!--    };-->
<!--  },-->
<!--};-->
<!--</script>-->

<style scoped>
@font-face {
  font-family: 'Secular One';
  src: url('/fonts/SecularOne-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Roboto Slab';
  src: url('/fonts/RobotoSlab-VariableFont_wght.ttf') format('truetype');
}

/* Algemene instellingen */
body {
  font-family: 'Roboto Slab', serif;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  background-color: #282828;
  color: #ffffff;
}

/* Header styling */
header {
  color: white;
  padding: 20px;
  text-align: center;
}

header h1 {
  margin: 0;
  font-size: 2.5rem;
  text-shadow: 3px 3px #3a86f9;
}

header h3 {
  position: relative;
  margin: 20px auto;
  max-width: 800px;
  text-align: center;
}

/* Navigatie */
nav ul {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 20px 0 0;
}

nav li {
  margin: 0 15px;
}

nav a {
  color: #ffffff;
  text-decoration: none;
  font-weight: bold;
  font-family: 'Secular One', sans-serif;
}

nav a:hover {
  text-decoration: underline;
}

/* Secties styling */
main {
  position: relative;
  margin: 20px auto;
  max-width: 800px;
}

section {
  position: relative;
  margin: 20px auto;
  max-width: 800px;
  padding: 20px;
  background: transparent;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 1;
}

section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(56, 56, 56);
  filter: blur(15px);
  border-radius: 2vw;
  z-index: -1;
}

h1, h2, h3 {
  font-family: 'Secular One', sans-serif;
}

section h2 {
  color: #ffffff;
  margin-bottom: 10px;
  font-size: 1.8rem;
  text-shadow: 3px 2px #3a86f9;
}

section p {
  margin: 10px 0;
}

/* Responsiviteit */
@media (max-width: 768px) {
  section {
    margin: 10px;
    padding: 15px;
  }

  header h1 {
    font-size: 2rem;
  }

  section h2 {
    font-size: 1.5rem;
  }
}
</style>
