<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="800px" height="550px" data-app>
      <template v-slot:activator="{ on }">
        <v-btn color="red lighten-2" dark v-on="on">Se större</v-btn>
      </template>

      <v-img
        aspect-ratio="1"
        class="grey lighten-2"
        max-width="800px"
        max-height="535px"
        :src="image"
      >
        <v-btn dark @click="dialog = false" class="floating-btn">Stäng</v-btn>
      </v-img>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialog: false
    };
  },
  props: {
    image: {}
  },
  methods: {
    test () {
      this.dialog = true;
      console.log(this.dialog)
    }
  }
};
</script>

<style scoped>
.floating-btn{
margin-left: 45%;
margin-top: 60%;
}
</style>
