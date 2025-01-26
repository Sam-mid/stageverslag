<template>
  <div id="app">
    <router-view></router-view> <!-- Hier wordt de routecomponent getoond -->
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Voeg hier je algemene styling toe */

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

/* Secties styling */
main {
  position: relative;
  margin: 20px auto;
  max-width: 1000px;
}

section {
  position: relative;
  margin: 20px auto;
  max-width: 1000px;
  padding: 20px 50px;
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
  filter: blur(0px);
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

section h3 {
  color: #ffffff;
  margin-bottom: 8px;
  font-size: 1.4rem;
}

section p {
  margin: 10px 0;
}

section blockquote {
  margin: 20px 0;
  padding: 15px 20px;
  background-color: #e9edf8;
  border-left: 5px solid #3a86f9;
  font-style: italic;
  color: #555;
}

/* Links */
section a {
  color: #ffffff;
  text-decoration: underline #3a86f9;
  text-decoration-thickness: 3px;
  font-weight: bold;
}

section a:hover {
  text-decoration: underline #40e55e;
  text-decoration-thickness: 3px;

}

/* Styling voor figuren binnen secties */
section figure {
  margin: 20px auto;
  text-align: center;
  max-width: 100%;
  border-radius: 8px;
  overflow: hidden;
  background-color: rgba(51, 51, 51, 0); /* Match achtergrondkleuren of gebruik een lichte highlight */
  padding: 10px;
}

#fullscreen-container {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: scroll;
}

#fullscreen-container img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 8px;
}

#fullscreen-container figcaption {
  color: #fff;
  font-size: 1rem;
  margin-top: 10px;
}

#fullscreen-container .close-button {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
}

section figure img {
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: 4px; /* Kleine afronding voor een modernere uitstraling */
}

section figure video {
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: 4px; /* Kleine afronding voor een modernere uitstraling */
}


section figure figcaption {
  margin-top: 10px;
  font-size: 0.9rem;
  color: #bbb; /* Subtiele tekstkleur voor onderschrift */
  font-style: italic;
}

.buttons{
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px;

  @media (max-width: 900px) {
    flex-direction: column;

  }
}

button{
  position: relative;
  padding: 20px 50px;
  background: rgb(56, 56, 56);
  border-radius: 30px;
  z-index: 1;

  h2{
    color: #ffffff;
    font-size: 1.5rem;
    text-shadow: 3px 2px #3a86f9;
    margin: 0;
    padding: 5px;
  }
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

  section h3 {
    font-size: 1.2rem;
  }

}

</style>


