<template>
  <div>
    <div class="section">
      <h1>Welcome To Paradise</h1>

      <div class="video-container">
        <div class="color-overlay"></div>
        <video autoplay loop muted>
          <source src="../assets/drone.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <div style="height:400px;width:100%">
      <p>sdflksdjflkjsdfkjsdhfkjdsh kjsdhfkdsbf dskjfhkjdshfds sdhfkjdsh</p>
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
  /* display: flex;
  align-items: center;
  justify-content: center; */
  overflow: hidden;
}

.section h1 {
  text-align: center;
  font-size: 6rem;
  font-family: "Cookie";
  padding: 20px;
  margin: 15px;
  z-index: 1;
  opacity: 0.7;
}

.video-container {
  position: absolute;
  /* top: 0; */
  /* left: 0;ss */
  width: 100%;
  height: 100vh;
  /* overflow: hidden; */
  /* size: auto; */
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

/* .color-overlay {
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  width: 100%;
  height: 100vh;
  opacity: 0.5;
} */
</style>
