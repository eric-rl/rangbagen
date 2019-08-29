<template>
  <div>
    <Navbar class="desktop-navbar" />
    <MobileNavbar class="mobile-navbar" />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import MobileNavbar from "./components/MobileNavbar.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Navbar,
    MobileNavbar,
    Footer
  },
  data: () => ({
    //
  })
};
</script>

<style>
@media screen and (max-width: 960px) {
    .desktop-navbar{
      display: none
    }
}
@media screen and (min-width: 960px) {
    .mobile-navbar{
      display: none;
    }
}


</style>
