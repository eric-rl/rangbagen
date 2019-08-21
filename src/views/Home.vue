<template>
  <div>
    <div class="section">
      <h1>Welcome To Paradise</h1>

      <div class="video-container">
        <video loop muted>
          <source src="../assets/drone.mp4" type="video/mp4" />
        </video>
      </div>
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
  /* width: 100%; */
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
  bottom: 0;
  min-width: 100%;
  min-height: 100%; 
  overflow: hidden;
}

.video-container video{
  object-fit: cover;
  width: 100%;
  height: 100%;
}


 @media (min-aspect-ratio: 16/9) {
  #video-container {
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
