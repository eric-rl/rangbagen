
<template>
  <v-footer id="bottom-footer" class="pa-5" color="white">
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.google.com/maps/place/Rängbågens+Förskola/@55.4060488,12.9990353,17z/data=!3m1!4b1!4m5!3m4!1s0x46530cbe5a66daeb:0x6d12cb1c353aa7e3!8m2!3d55.4060488!4d13.001224"
      class="link"
    >Räng Sandvägen 24 <br> 236 91 <br> Höllviken</a>
    <p class="link">040-45 06 26</p>
    <a href="mailto:info@tree.com" class="link">info@rangbagen.se</a>
    <p class="link">Rängbågens Förskola&copy; {{ new Date().getFullYear() }}</p>
  </v-footer>
</template>

<script>
export default {
  name: "BottomFooter"
};
</script>

<style>
#bottom-footer {
  display: flex;
  justify-content: center;
  justify-content: space-around;
  height: 200px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-decoration: none !important;
  color: black;
}
.link {
  text-decoration: none !important;
  color: black;
  margin-bottom: 15px;
}
</style>