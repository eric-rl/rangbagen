<template>
  <div>
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

        <v-navigation-drawer height="100vh" width="60vw" v-model="drawer">
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
      if (window.scrollY <= window.innerHeight - 82) {
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
<style scoped>

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
</style>