<template>
<div>
    <div class="kontakt-section">
      <h1 style="font-style:italic">Kontakta <br> Rängbågen</h1>
      <div class="kontakt-bg-section"></div>
      <a class="icon-down-open-big hero-arrow">
        <v-icon id="rängbågen" @click="$vuetify.goTo('#rängbågen')" x-large dark>mdi-chevron-down</v-icon>
      </a>
    </div>
    <KontaktForm></KontaktForm>
  </div>
</template>

<script>
import KontaktForm from "@/components/KontaktForm.vue";
export default {
    components: {
        KontaktForm,

    }
};
</script>

<style>
.bg-black {
  background-color: black;
}
.kontakt-section {
  position: relative;
  /* width: 100%; */
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: black;
}
.kontakt-section h1 {
  text-align: center;
  font-size: 2em;
  text-transform: uppercase;
  font-weight: 100;
  letter-spacing: 0.1em;
  color: #fff;
  padding: 20px;
  margin: 15px;
  z-index: 1;
  margin-bottom: 5%;
}
.kontakt-bg-section {
  background-image: url("../assets/kontakt.jpg");
  opacity: 0.7;
  background-size: cover;
  background-position: center;
  height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
}
</style>