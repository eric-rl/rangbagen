<template>
  <div>
    <Navbar class="desktop-navbar" />
    <MobilNavbar class="mobil-navbar">Hej</MobilNavbar>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import MobilNavbar from "./components/MobilNavbar.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Navbar,
    MobilNavbar,
    Footer
  },
  data: () => ({})
};
</script>

<style>
@media screen and (max-width: 960px) {
  .desktop-navbar {
    display: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  .mobil-navbar {
    height: 70px;
    background-color: #e1d7d9;
    position: fixed;
    width: 100vw;
    z-index: 199;
    -webkit-box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
}
@media screen and (min-width: 960px) {
  .mobil-navbar {
    display: none;
  }
}
</style>
