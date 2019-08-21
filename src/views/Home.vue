<template>
  <div class="section">
    <h1 class="h1Räng">Rängbågen</h1>
    <div class="bild">
      <video id="videoBG" poster="../assets/asd.jpg" autoplay muted>
        <source src="../assets/drone.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style>
.section {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.h1Räng {
  text-align: center;
  font-size: 6rem;
  font-family: "Cookie";
  padding: 20px;
  margin: 15px;
  z-index: 1;
  opacity: 0.7;
  color: white;
}
.bild {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: red;
  height: 100vh;
  opacity: 0.9;
}

#videoBG {
  /* position:absolute; */
  /* top:0; */
  /* left:0; */
  /* height:80%; */
  /* overflow:hidden; */
  /* min-height: 100%;
  min-width: 100%; */
}

h1 {
  font-weight: 300;
  margin-top: 24px;
}

@media (min-aspect-ratio: 16/9) {
  #videoBG {
    width: 100vw;
    height: auto;
  }
}
@media (max-aspect-ratio: 16/9) {
  #videoBG {
    width: auto;
    height: 110vh;
  }
}
@media (max-width: 960px) {
  #videoBG {
    display: none;
  }
  .section {
    background-image: url("../assets/asd.jpg");
    background-size: cover;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>
