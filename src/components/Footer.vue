<template>
  <footer class="">
    <div class="items">
      <p>Dit verslag is geschreven door <span class="text-white"> <strong>Sam Middendorp</strong></span></p>
      <p><strong>Opleiding: </strong><span class="text-white"> Hogeschool Rotterdam, CMGT leerjaar 3</span></p>
      <p><strong>Stagebedrijf:</strong><span class="text-white"> TwoPine Media</span></p>
      <p><strong>Locatie:</strong><span class="text-white"> Delftweg 58, Rijswijk</span></p>
      <p><strong>Stageperiode:</strong> <span class="text-white">1 September tot 30 Januari</span></p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "ColofonFooter",
};
</script>

<style scoped>
footer {
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
  background-size: cover;
  background-color: #40454a;
  color: white;
  margin-top: 20px;
}

.items{
  display: flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
  gap: 100px;
  padding-left: 20px;
  padding-right: 20px;

  p{
    margin: 5px;
    font-size: 0.9em;
  }
}

@media only screen and (max-width: 900px) {
  .items {
    flex-direction: column;
    gap: 15px;
    align-items: start;
    padding: 5px;

    p{
      margin: 0px;
    }

  }
}
</style>
