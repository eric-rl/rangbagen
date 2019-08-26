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
      <v-row class="margin-top">
        <v-flex class="margin-auto order-2" md7>
          <v-img max-height="340" src="../assets/loading.jpeg"></v-img>
        </v-flex>
        <v-flex md5 class="order-1">
          <v-col>
            <h1 class="thin">
              <i>Storlek</i>
            </h1>
            <br />
            <p>
              Idag består verksamheten av 80 barn fördelade på fem åldershomogena avdelningar från 1 till 5 år. Vi har en
              fantastisk utemiljö med en gård på 17000 m²!
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
  min-height: 100vh;
  text-align: justify;
  margin: 20px 10%;
  letter-spacing: 1px;
}
</style>