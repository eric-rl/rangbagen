<template>
  <v-container class="kontakt-container" fluid>
    <div class="kontakt-content">
      <v-row>
        <v-flex md6>
          <v-col class="left-contact">
            <h1 class="thin">Telefon</h1>
            <br />
            <p>
              <strong>Rektor</strong>
              <br />Susanne Rasmusson
              <br />040-45 06 25
              <br />Mån-Fre 08-15
            </p>
          </v-col>
        </v-flex>
        <v-flex class="margin-auto" md6>
          <v-img max-height="340" src="../assets/köket-3.jpg"></v-img>
        </v-flex>
      </v-row>
      <v-row class="d-flex flex-wrap-reverse margin-top">
        <v-flex class="margin-auto order-2 pa-2" md6>
          <GmapMap :center="center" :map-type-id="mapTypeId" :zoom="15">
            <GmapMarker
              v-for="(item, index) in markers"
              :key="index"
              :position="item.position"
              @click="center = item.position"
            />
          </GmapMap>
        </v-flex>
        <v-flex md6 class="order-1 pa-2">
          <v-col>
            <h1 class="thin">Adress</h1>
            <br />
            <p>
              Rängsand Vägen 24
              <br />236 91
              <br />Höllviken
            </p>
          </v-col>
        </v-flex>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "KontaktForm",
  data() {
    return {
      center: { lat: 55.406201, lng: 13.001245 },
      mapTypeId: "terrain",
      markers: [{ position: { lat: 55.406201, lng: 13.001245 } }]
    };
  }
};
</script>

<style>
.vue-map-container {
  min-height: 350px;
  max-width: 100%;
  width: 100%;
}
.left-contact {
  text-align: right;
  padding-right: 10%;
  font-weight: 300;
}
.margin-auto {
  margin: auto;
}
.margin-top {
  margin-top: 2em;
}
.thin {
  font-weight: 300;
}
.rängbågen-container {
  margin: 0;
  padding: 0;
}
.center {
  font-style: italic;
}
.kontakt-heading {
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-size: 1.7em;
  align-items: center;
  letter-spacing: 1px;
  text-align: center;
  height: 9em;
  background: #e1e0d7;
}
.kontakt-content {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 1.1em;
  line-height: 1.7em;
  text-align: justify;
  margin: 40px 10%;
  letter-spacing: 1px;
}
</style>