<template>
  <div class="section">
    <!-- <div class="text-annat">
      <h1>asasdasdasdd</h1>
    </div>-->
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
/* .text-annat {
  background-color: rgba(255, 255, 255, 0.3);
  position: absolute;
  z-index: 1;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  border-radius: 20px;
  height: 100px;
  width: 200;
} */

#videoBG {
  /* position:absolute; */
  /* top:0; */
  /* left:0; */
  /* height:80%; */
  /* overflow:hidden; */
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
    height: 100vh;
  }
}
@media (max-width: 960px) {
  #videoBG {
    display: none;
  }
  .bild {
    background-image: url("../assets/asd.jpg");
    background-size: cover;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>
