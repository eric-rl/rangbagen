<template>
  <div>
    <nav id="navbar">
      <v-img src="../assets/rang-logga.png" width="5px" height="5px"></v-img>
      <ul id="links">
        <li>
          <a href="#">Rängbågen</a>
        </li>
        <li>
          <a href="#">Historik</a>
        </li>
        <li>
          <a href="#">Köket</a>
        </li>
        <li>
          <a href="#">Kontakt</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
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
nav {
  position: fixed;
  height: 5em;
  width: 100%;
  background-color: transparent;
  box-sizing: border-box;
  /* padding: 12px 18px; */
  transition: background-color 0.3s ease-in-out;
  z-index: 999;
  color: whitesmoke;
  display: flex;
  justify-content: right;
  display: flex !important;
}

nav span {
  font-weight: 600;
  letter-spacing: 0.085em;
}

nav.scroll {
  background-color: rgb(223, 215, 225);
}
ul.scroll > li > a {
  color: black;
}
ul {
  padding: 0;
  list-style: none;
  display: table;
  width: 40%;
  text-align: center;
}
li {
  display: table-cell;
  position: relative;
  padding: 30px 0;
}
a {
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;

  display: inline-block;
  /* padding: 5px 20px; */
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
</style>