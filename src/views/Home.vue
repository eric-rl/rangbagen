<template>
  <div>
    <div class="section">
      <h1 style="">
        Välkommen till
        <br />Rängbågen
      </h1>

      <div class="video-container">
        <video
          preload="none"
          onclick="this.paused ? this.play():this.pause();"
          loop
          muted
          poster="../image-gallery/Rangbagen27.jpg"
        >
          <source src="../assets/drone.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="image-container">
      </div>
      <a class="icon-down-open-big hero-arrow">
        <v-icon id="rängbågen" @click="$vuetify.goTo('#rängbågen')" x-large dark>mdi-chevron-down</v-icon>
      </a>
      <p class="info">Tryck på bilden för att spela eller pausa videon</p>
    </div>
    <Rängbågen />
  </div>
</template>

<script>
import Rängbågen from '../components/Rängbågen'
export default {
  components: {
    Rängbågen
  },
  created () {
    this.$store.commit('setOnHomePage', true)
  }
}
</script>

<style scoped>
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
  .info {
    display: none;
  }
  .hero-arrow {
    display: none;
  }
  .image-container {
    background-image: url("../image-gallery/Rangbagen27.jpg");
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
  .padding-left,
  .padding-right {
    padding: 0;
  }
}
@media only screen and (min-width: 960px) {
  .padding-right {
    padding-right: 5%;
  }
  .padding-left {
    padding-left: 5%;
  }
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

<style scoped>
@media only screen and (min-width: 960px) {
  a {
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;
    display: inline-block;
    padding: 5px;
  }
  a:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  a:hover:after {
    width: 100%;
    left: 0;
  }
}
</style>
