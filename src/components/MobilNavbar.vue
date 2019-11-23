<template>
  <div>
    <Slide @openMenu="handleOpenMenu" @closeMenu="handleCloseMenu" noOverlay width="290">
      <router-link class="mobile-links" to="/">
        <i class="material-icons">home</i>
        <span>Rängbågen</span>
      </router-link>
      <router-link class="mobile-links" to="/galleri">
        <i class="material-icons">photo</i>
        <span>Galleri</span>
      </router-link>
      <router-link class="mobile-links" to="/köket">
        <i class="material-icons">restaurant</i>
        <span>Köket</span>
      </router-link>
      <router-link class="mobile-links" to="/kontakt">
        <i class="material-icons">perm_phone_msg</i>
        <span>Kontakt</span>
      </router-link>
    </Slide>
    <v-overlay :value="isMenuOpen" />
    <div class="mobile-nav-header">
      <span class="nav-mobile-header">RÄNGBÅGEN</span>
    </div>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu' // import the CSS transitions you wish to use, in this case we are using `Slide`
export default {
  data: () => ({
    isMenuOpen: false
  }),
  components: {
    Slide
  },
  methods: {
    handleOpenMenu () {
      this.isMenuOpen = true
    },
    handleCloseMenu () {
      this.isMenuOpen = false
    },
    handleScroll (event) {
      if (window.scrollY <= window.innerHeight) {
        // console.log("innan scroll");
      } else {
        // console.log("efter scroll");
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style soped>
.bm-burger-button {
  z-index: 999;
  position: fixed !important;
  cursor: pointer;
  top: 23px !important;
}

.bm-burger-bars {
  background-color: #000000 !important;
}

.nav-mobile-header {
  font-size: 1.4em;
  float: right;
  margin-right: 10%;
  margin-top: 22px;
  color: black;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  letter-spacing: 5px;
}

.bm-menu {
  background-color: #e1d7d9 !important;
}
.bm-cross {
  background: rgb(90, 87, 91) !important;
}

span.bm-cross {
  width: 4px !important;
  height: 20px !important;
}

.bm-overlay {
  background-color: rgb(0, 0, 0);
}
.line-style {
  height: 12% !important;
}
.mobile-links {
  color: black !important;
  margin-top: 5px;
}
.bm-item-list > * > span {
  font-family: "Lato", sans-serif;
  color: black !important;
  font-weight: 600;
  margin-left: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
}
</style>
