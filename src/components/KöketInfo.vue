<template>
  <v-container class="köket-container" fluid>
    <v-row class="köket-heading mb-6 justify-center">
      <v-col class="köket-heading-text" xs6 lg6>
        <div class="center">
          Maten ska inte bara vara näringsrik och energigivande,
          <br />den ska också vara
          <strong>god</strong> och <strong>spännande.</strong>
        </div>
      </v-col>
    </v-row>
    <div class="köket-content">
      <v-row>
        <v-flex md6>
          <v-col>
            <h1 class="thin">
              <i>Måltiden</i>
            </h1>
            <br />
            <p>
              Vi strävar efter att ge alla barn en bred ”matkultur”. Vi handlar råvaror med hög kvalitet samt undviker i möjligaste mån halvfabrikat.
              Måltiderna ska vara tilltalande både för gom och öga. Dessutom ska måltiden vara en lugn stund med trevligt umgänge.
              Rängbågens pedagoger äter tillsammans med barnen.
            </p>
          </v-col>
        </v-flex>
        <v-flex class="margin-auto" md6>
          <v-img max-height="440px" src="../image-gallery/Rangbagen28.jpg"></v-img>
        </v-flex>
      </v-row>
      <v-row class="d-flex flex-wrap-reverse margin-top">
        <v-flex class="margin-auto" order-xs2 sm6 order-sm2 order-md1>
          <v-img max-height="440" src="../image-gallery/Rangbagen29.jpg"></v-img>
        </v-flex>
        <v-flex class="pa-2" order-xs1 sm6 order-sm1 order-md2>
          <v-col>
            <h1 class="thin">
              <i>Maten</i>
            </h1>
            <br />
            <p>
              Vår kock ansvarar för att maten ska vara varierad och näringsriktig med olika smakupplevelser,
              allt från svensk husmanskost till mat från fjärran länder.
            </p>
          </v-col>
        </v-flex>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'KöketInfo'
}
</script>

<style>
.köket-heading-text{
  margin-top: 40px;
}
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
.köket-container {
  margin: 0;
  padding: 0;
}
.center {
  font-style: italic;
}
.köket-heading {
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-size: 1.7em;
  align-items: center;
  letter-spacing: 1px;
  text-align: center;
  height: 14em;
  background: #e1e0d7;
}
.köket-content {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 1.1em;
  line-height: 1.7em;
  text-align: justify;
  margin: 40px 10%;
  letter-spacing: 1px;
}
</style>
