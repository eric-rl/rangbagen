<template>
  <v-container class="rängbågen-container" fluid>
    <v-row class="rängbågen-heading mb-6 justify-center">
      <v-col xs6 lg6>
        <div class="center">
          Maten ska inte bara vara näringsrik och energigivande,
          <br />den ska också vara
          <strong>god</strong> och <strong>spännande.</strong>
        </div>
      </v-col>
    </v-row>
    <div class="rängbågen-content">
      <v-row>
        <v-flex md5>
          <v-col>
            <h1 class="thin">
              <i>Maten</i>
            </h1>
            <br />
            <p>
              Vi strävar efter att ge alla barn en bred ”matkultur”. Vi handlar färska råvaror med hög kvalitet från vårt närsamhälle 
              för att slippa mellanhänder, vi undviker också i möjligaste mån halvfabrikat.
              Måltiderna ska vara tilltalande både för gom och öga. Dessutom ska måltiden vara en lugn stund med trevligt umgänge.
              Rängbågens pedagoger äter gemensamt tillsammans med barnen.
            </p>
          </v-col>
        </v-flex>
        <v-flex class="margin-auto" md7>
          <v-img max-height="440px" src="../assets/köket-2.jpg"></v-img>
        </v-flex>
      </v-row>
      <v-row class="d-flex flex-wrap-reverse margin-top">
        <v-flex class="margin-auto" md7>
          <v-img max-height="440" src="../assets/köket-3.jpg"></v-img>
        </v-flex>
        <v-flex md5 class="order-1 pa-2">
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
  name: "KöketInfo"
};
</script>

<style>
/* .left {
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
.rängbågen-heading {
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-size: 1.7em;
  align-items: center;
  letter-spacing: 1px;
  text-align: center;
  height: 9em;
  background: #e1e0d7;
}
.rängbågen-content {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 1.1em;
  line-height: 1.7em;
  text-align: justify;
  margin: 40px 10%;
  letter-spacing: 1px;
} */
</style>