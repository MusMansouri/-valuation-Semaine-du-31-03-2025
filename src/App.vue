<template>
  <div id="app">
    <nav>
      <div class="gauche">
        <img src="./assets/logo.svg" alt="" />
        <p class="logo">BasicFrit</p>
      </div>
      <div class="droite">
        <router-link to="/">Accueil</router-link>
        <router-link to="/subscription">Abonnement</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
    </nav>
    <router-view class="view" />
  </div>
</template>

<script></script>

<style>
body {
  background-color: #272727;
}
.view {
  background-image: url(./assets/background.svg);
  background-repeat: no-repeat;
  background-position: 50% 0%;
  background-size: cover;
  width: 100%;
  height: 400px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #cddded;
}
nav {
  background-color: #272727;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav a {
  margin-right: 15px;
  text-decoration: none;
  color: rgb(255, 255, 255);
}
.gauche {
  display: flex;
  align-items: center;
  margin-left: 25px;
}
.droite {
  display: flex;
  justify-content: center;
  align-items: center;
}
a {
  padding-top: 10px;
  text-decoration: none;
  color: aliceblue;
  background: #000000;
  border-radius: 6px;
  width: 200px;
  height: 30px;
}
.router-link-active {
  color: #fa6603;
}
.logo {
  font-family: "Noto Sans";
  font-style: italic;
  font-weight: 900;
  font-size: 30px;
  color: #ffffff;
  -webkit-text-stroke: 1px #fa6603;
}
</style>
