<template>
  <div>
    <div class="nav-desktop">
      <nav id="navbar">
        <img src="../assets/rang-logga.png" width="57px" height="57px" />
        <ul id="links">
          <li>
            <router-link to="rängbågen">Rängbågen</router-link>
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
          <v-row align="center" justify="center">
            <v-btn dark @click.stop="drawer = !drawer" outlined fab color="teal">
              <v-icon color="black">mdi-menu</v-icon>
            </v-btn>
          </v-row>
        </v-container>

        <v-navigation-drawer temporary height="80vh" dark v-model="drawer">
          <v-divider></v-divider>

          <v-list>
            <v-list-item v-for="item in items" :key="item.title" link>
              <v-list-item-content>
                <v-list-item-title>
                  <router-link to="/rangbagen"></router-link>
                  {{ item.title }}
                </v-list-item-title>
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
      items: [{ title: "Home", to: "rängbågen" }, { title: "About" }]
    };
  },
  components: {},
  methods: {
    handleScroll(event) {
      let nav = document.querySelector("#navbar");
      let ul = document.querySelector("#links");
      //   console.log(window.scrollY)
      if (window.scrollY <= 20) {
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
    position: fixed;
    z-index: 99;
    width: 100vw;
    color: transparent;
    background-color: rgba(254, 254, 254, 0.557) !important;
  }
}

@media only screen and (min-width: 960px) {
  .nav-mobile {
    display: none;
    z-index: 99;
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