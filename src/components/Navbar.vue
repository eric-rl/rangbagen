<template>
  <div>
    <div class="nav-desktop">
      <nav id="navbar">
        <router-link class="no-styling" to="/">
          <img src="../assets/rang-logga.png" class="logo" width="77px" height="56px" />
        </router-link>
        <ul id="links">
          <li>
            <router-link to="/" @click="$vuetify.goTo('#rängbågen')">Rängbågen</router-link>
          </li>
          <li>
            <router-link to="/historik">Historik</router-link>
          </li>
          <li>
            <router-link to="/köket">Köket</router-link>
          </li>
          <li>
            <router-link to="/kontakt">Kontakt</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="nav-mobile">
      <v-sheet class="overflow-hidden nav-mobile">
        <v-container class="fill-height">
          <v-row class="flex-center">
            <v-btn @click.stop="drawer = !drawer" text fab>
              <v-icon class="menu-icon">mdi-menu</v-icon>
            </v-btn>
            <p class="rng">Rängbågen</p>
          </v-row>
        </v-container>

        <v-navigation-drawer temporary height="100vh" width="30vw" v-model="drawer">
          <v-divider></v-divider>

          <v-list>
            <v-list-item v-for="item in items" :key="item.title" link>
              <v-list-item-content>
                <router-link :to="item.linking">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </router-link>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-sheet>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: null,
      items: [
        { title: "Startsida", linking: "/" },
        { title: "Rängbågen", linking: "rängbågen" },
        { title: "Historik", linking: "historik" },
        { title: "Köket", linking: "köket" },
        { title: "Kontakt", linking: "kontakt" }
      ]
    };
  },
  components: {},
  methods: {
    handleScroll(event) {
      let nav = document.querySelector("#navbar");
      let ul = document.querySelector("#links");
      if (window.scrollY <= window.innerHeight-82) {
        nav.className = "";
        ul.className = "";
      } else {
        nav.className = "scroll";
        ul.className = "scroll";
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style>
@media only screen and (max-width: 960px) {
  .nav-desktop {
    display: none;
  }
  .nav-mobile {
    height: 5em;
    position: absolute;
    z-index: 99;
    width: 100vw;
    color: transparent;
    background-color: rgba(224, 220, 225, 0.797) !important;
  }
  a,
  .rng {
    color: rgb(0, 0, 0);
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;
    display: inline-block;
    padding: 5px 20px;
    position: relative;
  }
  .flex-center {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .rng {
    padding: 0;
    font-size: 1.4em;
  }
  .menu-icon {
    margin-left: 20p;
  }
}

@media only screen and (min-width: 960px) {
  .nav-mobile {
    display: none;
    z-index: 99;
  }
  .logo{
    margin-top: -6px;
  }
  nav {
    position: fixed;
    height: 5em;
    width: 100%;
    background-color: transparent;
    box-sizing: border-box;
    padding: 12px 25px;
    transition: background-color 0.3s ease-in-out;
    z-index: 999;
    color: whitesmoke;
    display: flex !important;
  }
  .no-styling:after {
    height: 0px;
  }
  nav.scroll {
    background-color: rgb(223, 215, 225);
  }
  ul > li > a {
    cursor: pointer;
  }
  ul.scroll > li > a {
    color: black;
  }

  ul.scroll > li > a:after {
    background: black;
  }

  ul {
    padding: 0;
    list-style: none;
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
  }
  li {
    display: table-cell;
    position: relative;
    margin-left: 30px;
  }
  a {
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;
    display: inline-block;
    padding: 5px 20px;
    position: relative;
  }
  a:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  a:hover:after {
    width: 100%;
    left: 0;
  }
}
</style>