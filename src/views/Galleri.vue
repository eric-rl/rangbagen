<template>
  <v-row>
    <v-col cols="12" md="8" offset-md="2">
      <v-card class="cards">
        <v-container fluid>
          <v-row>
            <v-col v-for="(image, i) in images" :key="i" class="d-flex child-flex" cols="4">
              <template>
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card flat tile class="d-flex">
                      <v-img :src="image.src" aspect-ratio="1.4" class="grey lighten-2"></v-img>
                      <v-fade-transition>
                        <v-overlay v-if="hover" absolute color="#ffffff">
                          <BigImage :image="image.src"/>
                        </v-overlay>
                      </v-fade-transition>
                    </v-card>
                  </template>
                </v-hover>
              </template>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import BigImage from '../components/BigImage'
export default {
  components: {
    BigImage
  },
  data: () => ({
    overlay: false,
    images: [
      { src: require("../image-gallery/Rangbagen1.jpg") },
      { src: require("../image-gallery/Rangbagen2.jpg") },
      { src: require("../image-gallery/Rangbagen3.jpg") },
      { src: require("../image-gallery/Rangbagen4.jpg") },
      { src: require("../image-gallery/Rangbagen5.jpg") },
      { src: require("../image-gallery/Rangbagen6.jpg") },
      { src: require("../image-gallery/Rangbagen7.jpg") },
      { src: require("../image-gallery/Rangbagen8.jpg") },
      { src: require("../image-gallery/Rangbagen9.jpg") },
      { src: require("../image-gallery/Rangbagen10.jpg") },
      { src: require("../image-gallery/Rangbagen11.jpg") },
      { src: require("../image-gallery/Rangbagen12.jpg") },
      { src: require("../image-gallery/Rangbagen13.jpg") },
      { src: require("../image-gallery/Rangbagen14.jpg") },
      { src: require("../image-gallery/Rangbagen15.jpg") },
      { src: require("../image-gallery/Rangbagen16.jpg") },
      { src: require("../image-gallery/Rangbagen17.jpg") },
      { src: require("../image-gallery/Rangbagen18.jpg") },
      { src: require("../image-gallery/Rangbagen19.jpg") },
      { src: require("../image-gallery/Rangbagen20.jpg") },
      { src: require("../image-gallery/Rangbagen21.jpg") },
      { src: require("../image-gallery/Rangbagen22.jpg") },
      { src: require("../image-gallery/Rangbagen23.jpg") },
      { src: require("../image-gallery/Rangbagen24.jpg") },
      { src: require("../image-gallery/Rangbagen25.jpg") },
      { src: require("../image-gallery/Rangbagen26.jpg") },
      { src: require("../image-gallery/Rangbagen27.jpg") }
    ]
  }),
  created() {
    this.$store.commit("setOnHomePage", false);
  }
};
</script>

<style scoped>
.cards {
  margin-top: 100px;
  margin-bottom: 100px;
}
</style>
