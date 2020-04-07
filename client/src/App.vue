<template>
  <div id="app">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <Navbar/>
    <carousel carouselTitle="Networking"/>
    <Login/>
    <Homepage/>
  </div>
</template>

<script>
import Homepage from './components/Homepage.vue'
import Login from './components/Login.vue'
import Navbar from './components/Navbar.vue'
import Carousel from './components/Carousel.vue'

export default {
  name: 'App',
  components: {
    Homepage,
    Login,
    Navbar,
    Carousel
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&family=Prompt&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.title{
    font-family: 'Comfortaa', cursive;
    font-size: 210%;
    padding: 0%;
    margin: 0%;
}

.hide{
  display: none;
}
.show{
  display: block;
}

</style>
