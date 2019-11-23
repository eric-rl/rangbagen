
<template>
  <v-footer id="bottom-footer" class="pa-5" color="white">
    <v-row>
      <v-flex class="footer-left" md6>
        <v-col>
          <router-link class="mobile-links" to="/">
            <span>Rängbågen</span>
            <i class="material-icons footer-icon">home</i>
          </router-link>
        </v-col>
        <v-col>
          <router-link class="mobile-links" to="/galleri">
            <span>Galleri</span>
            <i class="material-icons footer-icon">photo</i>
          </router-link>
        </v-col>
        <v-col>
          <router-link class="mobile-links" to="/köket">
            <span>Köket</span>
            <i class="material-icons footer-icon">restaurant</i>
          </router-link>
        </v-col>
        <v-col>
          <router-link class="mobile-links" to="/kontakt">
            <span>Kontakt</span>
            <i class="material-icons footer-icon">perm_phone_msg</i>
          </router-link>
        </v-col>
      </v-flex>
      <v-flex class="footer-center" md6>
        <v-col>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps/place/Rängbågens+Förskola/@55.4060488,12.9990353,17z/data=!3m1!4b1!4m5!3m4!1s0x46530cbe5a66daeb:0x6d12cb1c353aa7e3!8m2!3d55.4060488!4d13.001224"
            class="link"
          >
            <i class="material-icons footer-icon">navigation</i>
            <p class="p-class-span">
              <span>Räng sandvägen 24</span>
              236 61 Höllviken
            </p>
          </a>
        </v-col>
        <v-col>
          <i class="material-icons footer-icon">phone</i>
          <p class="p-class-span">
            <span>040-45 06 25</span>
          </p>
        </v-col>
        <v-col>
          <a href="mailto:info@rangbagen.se" class="link">
            <i class="material-icons footer-icon">email</i>
            <p class="p-class-span">info@rangbagen.se</p>
          </a>
        </v-col>
        <v-col>
          <i class="material-icons footer-icon">schedule</i>
          <p class="p-class-span">Mån-Tor 08-16</p>
        </v-col>
      </v-flex>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "BottomFooter"
};
</script>

<style scoped>
.col {
  padding: 0;
}
.footer-left {
  text-align: right;
}
#bottom-footer {
  padding: 20px;
  background-color: #e1d7d9;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.mobile-links {
  color: black;
  text-decoration: none !important;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.p-class-span {
  display: inline-block;
  vertical-align: middle;
}

.footer-center p span {
  display: block;
  font-weight: normal;
  font-size: 17px;
  line-height: 2;
}
.footer-icon {
  background-color: #33383b;
  color: #ffffff;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  text-align: center;
  line-height: 38px;
  margin: 8px 15px;
  vertical-align: middle;
}
.link {
  text-decoration: none !important;
  color: black;
}
@media screen and (max-width: 439px) {
  .footer-left {
    margin-right: -10px;
  }
  .footer-center {
    margin-left: -10px;
  }
  .footer-icon {
    margin: 8px 12px;
  }
}

@media screen and (max-width: 399px) {
  .footer-icon {
    /* width: 0;
    height: auto;
    font-size: 0px; */
    margin: 8px 0px;
    /* display: none; */
  }
  .footer-left {
    margin-right: 2px;
  }
  .footer-center {
    margin-left: 2px;
  }
  #bottom-footer {
    font-size: 0.8em;
  }
}

@media screen and (max-width: 343px) {
  .footer-icon {
    display: none;
  }
  .footer-center {
    min-width: 100vw;
    text-align: center;
    line-height: 3;
  }
  .footer-left {
    min-width: 100vw;
    text-align: center;
    line-height: 3;
  }
  #bottom-footer {
    padding: 0;
    padding-top: 15px;
    padding-bottom: 15px;
  }
}
</style>
