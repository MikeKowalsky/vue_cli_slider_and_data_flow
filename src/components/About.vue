<template>
  <div class="about">
    <h2>This is an about page</h2>
    <hr>
    <hr>
    <div class="info">
      <h3 class="bold">Hey Guys!</h3>
      <!-- <span>All info about this component you can find here:</span> -->
      <p class="bold">This example 'solves' 3 possible problems:</p>
      <p>1. Passing object through router-link</p>
      <!-- I'm fetching data in App component and passing the whole object to People.
      In People I need to receive data with this.$route.params.fieldNameSetUpInRouterLink.
      Problem: if you refresh the page from /people path then there is no data,
      because to activate this passing process you need to click a link. -->
      <p>2. img :src in vue/cli</p>
      <!-- In simple vue instance it's enough to do this ->
      :src="`../assets/${something}.jpg`"
      but in vue/cli it's more complicate ...
      example in Teams-->
      <p>3. Working simple side menu</p>
      <!-- no comment ;-) -->
      <p class="bold">Some links: </p>

      <a href="https://vuejsexamples.com/an-off-canvas-sidebar-vue-component/" target="_blank">
        Vue Burger Menu - part 1
      </a>
      <br>
      <a href="https://vue-burger-menu.netlify.com/" target="_blank">
        Vue Burger Menu - part 2
      </a>

      <p class="bold">Code is here:</p>
      <a href="https://github.com/MikeKowalsky/vue_cli_slider_and_data_flow" target="_blank">
        Go to Git Hub!
      </a>
    </div>

  </div>
</template>

<style scoped>
  .info{
    width: 85vw;
    background-color: rgba(211, 211, 211, .7);
    color: black;

    margin: auto;
    padding: 5px;
  }
  li{
    display: block;
  }
  .bold {
    font-weight: bold;
  }
  a {
    text-decoration: none;
  }
</style>
