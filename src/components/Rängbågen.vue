<template>
  <v-container class="rängbågen-container " fluid>
    <v-row class="rängbågen-heading">
      <v-col xs6 lg6>
        <div class="center">
          Rängbågen är en fristående förskola som startade 1984
          <br />och är
          <strong>Reggio Emilia</strong> inspirerad.
        </div>
      </v-col>
    </v-row>
    <div class="rängbågen-content">
      <v-row>
        <v-flex lg5 offset-lg1 md5>
          <v-col>
            <h1 class="thin">
              <i>Arbetsätt</i>
            </h1>
            <br />
            <p>
              Vi ser och lyfter fram barnets olika uttryckssätt genom att använda oss av musik, drama, bild, rörelse mm. Genom detta
              arbetssätt får barnet chans att utveckla sina förmågor och på så vis stärks barnets självtillit. Det stimulerar också
              barnets nyfikenhet och lust att söka kunskap. Alla barns olika uttryckssätt är lika viktiga och rangordnas inte.
              Verksamheten består av cirka 80 barn fördelade på fem ålderhomogena avdelningar från ett till fem år.
            </p>
          </v-col>
        </v-flex>
        <v-flex lg5 md7>
          <v-img max-height="440" :position="position.left" contain src="../image-gallery/Rangbagen10.jpg"></v-img>
        </v-flex>
      </v-row>
      <v-row class="margin-top">
        <v-flex lg5 offset-lg1 md7 order-xs2 order-md1>
          <v-img max-height="440" contain src="../image-gallery/Rangbagen9.jpg"></v-img>
        </v-flex>
        <v-flex lg5 md5 order-xs1 order-md2>
          <v-col>
            <h1 class="thin">
              <i>Utemiljö</i>
            </h1>
            <br />
            <p>
              På Rängbågen har vi nära till naturen. Förskolan ligger mitt bland åkrar, nära skog och strand. Vår utemiljö är unik
              med 10 000 kvm! Här finns en obegränsad möjlighet till fysisk aktivitet med fotbollsplan, bandyplan,
              hinderbana, gungor, cykelslinga mm, men också gott om klätterträd och kojor.
            </p>
          </v-col>
        </v-flex>
      </v-row>
    </div>
    <v-row class="rängbågen-heading">
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
        <v-flex lg5 offset-lg1 md5>
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
        <v-flex lg5 md7>
          <v-img max-height="440" :position="position.left" contain src="../image-gallery/Rangbagen25.jpg"></v-img>
        </v-flex>
      </v-row>
      <v-row class="margin-top">
        <v-flex lg5 offset-lg1 md7 order-xs2 order-md1>
          <v-img max-height="440" contain src="../image-gallery/Rangbagen6.jpg"></v-img>
        </v-flex>
        <v-flex lg5 md5 order-xs1 order-md2 class="order-1 pa-2">
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
export default {
  data: () => ({
    position: ''
  }),
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize ()
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      if (window.innerWidth < 600) {
        this.position = 'center'
      } else {
        this.position = 'left'
      }
    }
  }
}
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
  padding: 0!important;
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
