<template>
  <v-container class="kontakt-container" fluid>
      <div class="kontakt-content">
      <v-row>
        <v-flex md6>
          <v-col>
            <h1 class="thin">
              Kontakt info
            </h1>
            <br />
            <p>
             
            </p>
          </v-col>
        </v-flex>
        <v-flex class="margin-auto" md6>
          <v-img max-height="340px" src="../assets/köket-2.jpg"></v-img>
        </v-flex>
      </v-row>
      <v-row class="d-flex flex-wrap-reverse margin-top">
        <v-flex class="margin-auto order-2 pa-2" md6>
          <v-img max-height="340" src="../assets/köket-3.jpg"></v-img>
        </v-flex>
        <v-flex md6 class="order-1 pa-2">
          <v-col>
            <h1 class="thin">
              <i>Miljön</i>
            </h1>
            <br />
            <p>
              På Rängbågen används halvfabrikat mycket sällan, vi lagar vår mat från grunden av närproducerat och ekologiskt.
              Variation och smakupplevelser är också viktigt för oss, allt från svensk husmanskost till mat från fjärran länder. 
            </p>
          </v-col>
        </v-flex>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "KontaktForm"
};
</script>

<style>
.left {
  text-align: right;
  margin-right: 25%;
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