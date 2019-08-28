<template>
  <v-container class="rängbågen-container" fluid>
    <v-row class="rängbågen-heading mb-6 justify-center">
      <v-col xs6 lg6>
        <div class="center">
          Rängbågen är en fristående förskola som
          <br />är
          <strong>Reggio Emilia</strong> inspirerad.
        </div>
      </v-col>
    </v-row>
    <div class="rängbågen-content">
      <v-row>
        <v-flex md5>
          <v-col>
            <h1 class="thin">
              <i>Arbetsätt</i>
            </h1>
            <br />
            <p>
              Vi ser och lyfter fram barnets olika uttryckssätt genom att använda oss av musik, drama, bild, rörelse mm. Genom detta
              arbetssätt får barnet chans att utveckla sina förmågor och på så vis stärks barnets självtillit. Det stimulerar också
              barnets nyfikenhet och lust att söka kunskap. Alla barns olika uttryckssätt är lika viktiga och rangordnas inte.
            </p>
          </v-col>
        </v-flex>
        <v-flex class="margin-auto" md7>
          <v-img max-height="340px" src="../assets/blurred1.jpg"></v-img>
        </v-flex>
      </v-row>
      <v-row class="d-flex flex-wrap-reverse margin-top">
        <v-flex class="margin-auto order-2 pa-2" md7>
          <v-img max-height="340" src="../assets/utemiljö.jpg"></v-img>
        </v-flex>
        <v-flex md5 class="order-1 pa-2">
          <v-col>
            <h1 class="thin">
              <i>Utemiljö</i>
            </h1>
            <br />
            <p>
              På Rängbågen har vi nära till naturen. Förskolan ligger mitt bland åkrar, nära skog och strand. Vår utemiljö är unik
              med 17000 kvm! Här finns en obegränsad möjlighet till fysisk aktivitet med fotbollsplan, bandy- och basketplan,
              hinderbana, gungor, cykelslinga mm, men också gott om klätterträd och kojor.
            </p>
          </v-col>
        </v-flex>
      </v-row>
    </div>
    <v-row class="rängbågen-heading mb-6 justify-center">
      <v-col xs6 lg6>
        <div class="center">
          "Jag tror att de ord som bäst sammanfattar vår
          <br />verksamhet är utforskande och delaktighet."
        </div>
        <div class="left">
          <div class="quote-attr">Loris Malaguzzi</div>
          <div class="quote-info">Förgrundsgestalt, Reggio Emilia</div>
        </div>
      </v-col>
    </v-row>
    <div class="rängbågen-content">
      <v-row>
        <v-flex md5>
          <v-col>
            <h1 class="thin">
              <i>Vår Barnsyn</i>
            </h1>
            <br />
            <p>
              Rängbågen ser barnet som det rika och kompetenta barnet. Ett barn som utvecklas i en miljö präglad av lust och glädje.
              Ett barn vars 100 språk aldrig får tystas, Rängbågen erbjuder en verksamhet med utrymme för en mångfald av uttrycksmedel.
            </p>
          </v-col>
        </v-flex>
        <v-flex class="margin-auto" md7>
          <v-img max-height="340px" src="../assets/barnsyn.jpg"></v-img>
        </v-flex>
      </v-row>
      <v-row class="d-flex flex-wrap-reverse margin-top">
        <v-flex class="margin-auto order-2 pa-2" md7>
          <v-img max-height="340" src="../assets/leken.jpg"></v-img>
        </v-flex>
        <v-flex md5 class="order-1 pa-2">
          <v-col>
            <h1 class="thin">
              <i>Leken</i>
            </h1>
            <br />
            <p>
              Genom att erbjuda barnen olika material och användningsområden ges barnen möjlighet att bearbeta sina intryck och upplevelser.
              I leken utvecklar barnen sin fantasi och genom att leka sig in i olika roller stärker barnet sin identitet.
              Den vuxnes roll är att stödja och uppmuntra barnen i den fria leken.
            </p>
          </v-col>
        </v-flex>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {};
</script>

<style>

.quote-info {
  font-size: 0.5em;
}
.quote-attr {
  font-size: 0.9em;
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
}
</style>