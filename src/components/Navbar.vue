<template>
  <nav id="navbar">
    <span>Hello, It's me</span>
    <button>Pickles!</button>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    navbar() {
      window.onscroll = () => {
        let nav = document.querySelector("#navbar");
        if (this.scrollY <= 10) nav.className = "";
        else nav.className = "scroll";
      };
    }
  }
};
</script>

<style>
nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 3em;
  width: 100%;
  background-color: #eee;
  box-sizing: border-box;
  padding: 12px 18px;
  box-shadow: 0px 4px 7px #777;
  transition: background-color 0.4s ease-out;
  z-index: 999;
}

nav span {
  font-weight: 600;
  letter-spacing: 0.085em;
}

nav button {
  position: absolute;
  top: 0;
  transform: translateY(50%);
  right: 0;
  min-height: 1.5em;
  min-width: 80px;
  background-color: #eee;
  color: #222;
  border: 0px;
  border-radius: 2px;
  margin-right: 18px;
  text-transform: uppercase;
}

nav.scroll {
  background-color: #a1572f;
  color: #eef;
}
</style>