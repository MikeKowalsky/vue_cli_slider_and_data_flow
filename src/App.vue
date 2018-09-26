<template>
  <div id="app">

    <div v-if="isLoading">
      <p>Loading ...</p>
    </div>

    <div v-else>
      <Slide width="200">
        <router-link to="/">
          <span>Home</span>
        </router-link>
        <router-link to="/about">
          <span>About</span>
        </router-link>
        <router-link :to="{ name: 'people', params: { dataToPass: this.data } }">
          <span>People</span>
        </router-link>
        <router-link to="/teams">
          <span>Teams</span>
        </router-link>
        <router-link to="/contact">
          <span>Contact</span>
        </router-link>
      </Slide>

      <div class="basicView">
        <router-view/>
      </div>
    </div>

  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'

export default {
  components: {
    Slide
  },
  data () {
    return {
      data: null,
      isLoading: true
    }
  },
  beforeCreate () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(dataFromServer => {
        this.data = dataFromServer
        // console.log(this.data)
        this.isLoading = false
      })
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;

  height: 100vh;
  width: 100vw;
  background: url(assets/bcg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

/* !! overwriting imported sidebar styles !! */
.basicView {
  padding-top: 70px;
}

.bm-menu {
  background-color: rgba(255, 193, 7, .9) !important;
}

.bm-cross {
  background: blue !important;
}

.bm-item-list > * > span {
  color: blue !important;
}

.bm-burger-bars {
  background-color: white !important;
}
</style>
