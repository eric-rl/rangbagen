<template>
  <v-container class="kontakt-container" fluid>
    <v-row class="kontakt-heading mb-6 justify-center">
      <v-col class="kontakt-heading-text" xs6 lg6>
        <div class="center">
          Rängbågens förskola ligger med
          <strong>åkerlandskap</strong>
          <br />på ena sidan och
          <strong>Rängbågsbyn</strong>
          på andra.
          <br />
        </div>
      </v-col>
    </v-row>
    <div class="kontakt-content">
      <v-row justify="start" class="justify-start">
        <v-flex sm6>
          <v-col class="left-contact">
            <h1 class="thin">Info</h1>
            <br />
            <p>
              <strong>Rektor</strong>
              <br />Susanne Rasmusson
              <br />040-45 06 26
              <br />info@rangbagen.se
              <br />Mån-Tor 08-16
            </p>
          </v-col>
        </v-flex>
        <v-flex sm6 justify="left">
          <v-img
            class="big-screen"
            height="340"
            position="left"
            contain
            src="../assets/susanne.jpeg"
          ></v-img>
          <v-img class="small-screen" height="340" contain src="../assets/susanne.jpeg"></v-img>
        </v-flex>
      </v-row>
      <v-row class="margin-top">
        <v-flex md6 order-xs2 order-md1 xs12>
          <GmapMap :center="center" :map-type-id="mapTypeId" :zoom="15">
            <GmapMarker
              v-for="(item, index) in markers"
              :key="index"
              :position="item.position"
              @click="center = item.position"
            />
          </GmapMap>
        </v-flex>
        <v-flex md6 order-xs1 order-md2 class="pa-2">
          <v-col>
            <h1 class="thin adress">Adress</h1>
            <br />
            <p class="adress">
              Räng sandsvägen 24
              <br />236 61
              <br />Höllviken
            </p>
          </v-col>
        </v-flex>
      </v-row>
      <v-row class="form">
        <v-flex class="pa-2">
          <div id="abbum-queue"></div>
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
  },
  created() {
    let script = document.createElement("script");
    script.setAttribute("src", "https://code.jquery.com/jquery-3.4.1.min.js");
    document.head.appendChild(script);

    script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
    );
    document.head.appendChild(script);

    script = document.createElement("script");
    script.setAttribute("src", "https://abbum.se/rosatornet/queue-form.js");
    document.head.appendChild(script);
  },
  mounted() {
    setTimeout(() => {

      let list = document.getElementsByTagName("input");
      let textArea = document.getElementById("abbum-queue-message")

      if (list) {
        textArea.className="form-input"
        for (let item of list) {
          item.className = "form-input";
        }
      }
    }, 500);
  }
};
</script>

<style>
#abbum-queue{
  margin-top: 4em;
  margin-bottom: 4em;
}
.form-input {
  border-style: solid !important;
  border: 1px gray;
}
.v-image__image {
  background-position: left !important;
}
.v-image__image--contain {
  background-position: left !important;
}
.vue-map-container {
  min-height: 400px;
}
.left-contact {
  text-align: right;
  font-weight: 300;
  padding: 12px !important;
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
  height: 14em;
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
.container {
  padding: 0;
}

.kontakt-heading-text {
  margin-top: 4rem;
}

.apply-button {
  margin-top: 2rem;
  font-style: normal;
}

.link-no-styling {
  text-decoration: none;
}

@media screen and (max-width: 960px) {
  .adress {
    text-align: center;
  }
}
@media screen and (min-width: 600px) {
  .small-screen {
    display: none;
  }
}
@media screen and (max-width: 600px) {
  .left-contact {
    text-align: center;
  }
  .big-screen {
    display: none;
  }
}
</style>
