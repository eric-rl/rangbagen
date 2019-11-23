<template>
  <v-container>
    <v-row class="gallery-heading mb-6 justify-center" />
    <div class="gallery-container">
      <Stack
        class="heeeej"
        :column-min-width="350"
        :gutter-width="15"
        :gutter-height="15"
        monitor-images-loaded
      >
        <Stack-item v-for="(image, i) in images" :key="i" style="transition: transform 300ms">
          <img :src="image.src" alt="bild" />
        </Stack-item>
      </Stack>
    </div>
  </v-container>
</template>

<script>
import { Stack, StackItem } from 'vue-stack-grid'
export default {
  name: 'app',
  components: {
    Stack,
    StackItem
  },
  data: () => ({
    overlay: false,
    images: [
      { src: require('../image-gallery/Rangbagen1.jpg') },
      { src: require('../image-gallery/Rangbagen2.jpg') },
      { src: require('../image-gallery/Rangbagen3.jpg') },
      { src: require('../image-gallery/Rangbagen4.jpg') },
      { src: require('../image-gallery/Rangbagen5.jpg') },
      { src: require('../image-gallery/Rangbagen6.jpg') },
      { src: require('../image-gallery/Rangbagen7.jpg') },
      { src: require('../image-gallery/AK9I1378.jpg') },
      { src: require('../image-gallery/Rangbagen8.jpg') },
      { src: require('../image-gallery/Rangbagen9.jpg') },
      { src: require('../image-gallery/Rangbagen10.jpg') },
      { src: require('../image-gallery/Rangbagen11.jpg') },
      { src: require('../image-gallery/Rangbagen12.jpg') },
      { src: require('../image-gallery/Rangbagen13.jpg') },
      { src: require('../image-gallery/Rangbagen14.jpg') },
      { src: require('../image-gallery/Rangbagen15.jpg') },
      { src: require('../image-gallery/Rangbagen16.jpg') },
      { src: require('../image-gallery/Rangbagen17.jpg') },
      { src: require('../image-gallery/Rangbagen18.jpg') },
      { src: require('../image-gallery/Rangbagen19.jpg') },
      { src: require('../image-gallery/Rangbagen20.jpg') },
      { src: require('../image-gallery/Rangbagen21.jpg') },
      { src: require('../image-gallery/Rangbagen22.jpg') },
      { src: require('../image-gallery/Rangbagen23.jpg') },
      { src: require('../image-gallery/Rangbagen24.jpg') },
      { src: require('../image-gallery/Rangbagen25.jpg') },
      { src: require('../image-gallery/Rangbagen26.jpg') },
      { src: require('../image-gallery/Rangbagen27.jpg') }
    ]
  }),
  created () {
    this.$store.commit('setOnHomePage', false)
  }
}
</script>

<style scoped>
.gallery-container {
  margin-top: 100px;
  width: 80vw;
  margin: 0 auto;
}
img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}
.gallery-heading {
  height: 8em;
}
</style>
