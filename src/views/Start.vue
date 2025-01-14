<template>
  <div class="start">
    <ThreeScene />
  </div>
</template>

<script>
import ThreeScene from '../components/ThreeScene.vue';

export default {
  name: 'Start',
  components: {
    ThreeScene
  }
};
</script>

<style scoped>
.start {
  @apply flex justify-center items-center flex-col;
  background-image: url('/bg.png'); /* Pas het pad naar je afbeelding aan */
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh; /* Zorg ervoor dat de achtergrond het volledige scherm bedekt */
}
</style>
