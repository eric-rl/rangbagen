<template>
  <div>
    <div class="section">
      <h1 style="font-style:italic">
        Välkommen till
        <br />Rängbågen
      </h1>

      <div class="video-container">
        <video
          preload="none"
          onclick="this.paused ? this.play():this.pause();"
          loop
          muted
          autoplay
          poster="../assets/loading.jpeg"
        >
          <source src="../assets/drone.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="image-container">
        <!-- <img src="../assets/mobile-landingpage.jpg" alt /> -->
      </div>
      <a class="icon-down-open-big hero-arrow">
        <v-icon id="rängbågen" @click="$vuetify.goTo('#rängbågen')" x-large dark>mdi-chevron-down</v-icon>
      </a>
      <p class="info">Tryck på videon för att pausa eller spela</p>
    </div>
    <Rängbågen />
  </div>
</template>

<script>
import Rängbågen from "./Rängbågen.vue";
export default {
  components: {
    Rängbågen
  }
};
</script>

<style>
.section {
  position: relative;
  /* width: 100%; */
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: black;
}
/* .h1-text {
  text-align: center;
  font-size: 2em;
  text-transform: uppercase;
  font-weight: 100;
  letter-spacing: 0.1em;
} */

.section h1 {
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

@media (min-aspect-ratio: 16/9) {
  #video-container {
    width: 100vw;
    height: auto;
  }
}
@media (max-aspect-ratio: 16/9) {
  #video-container {
    width: auto;
    height: 100vh;
  }
}
@media only screen and (max-width: 960px) {
  .video-container {
    display: none;
  }
  .info{
    display: none;
  }
  .hero-arrow {
    display: none;
  }
  .image-container {
    background-image: url("../assets/loading.jpeg");
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
}
@media only screen and (min-width: 960px) {
  .image-container {
    display: none !important;
  }
  .hero-arrow {
    color: #fff;
    position: absolute;
    bottom: 2.1em;
    display: block;
    left: 50%;
    margin-left: -15px;
    font-size: 1em;
    cursor: pointer;
    z-index: 10;
  }
  .info {
    color: #fff;
    position: absolute;
    bottom: 2.9em;
    display: block;
    left: 4%;
    margin-left: -15px;
    font-size: 1em;
    z-index: 10;
  }
  .video-container {
    position: absolute;
    top: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    overflow: hidden;
  }

  .video-container video {
    object-fit: cover;
    width: 100%;
    height: 100%;
    opacity: 0.7;
  }
}
</style>
