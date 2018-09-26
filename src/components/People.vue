<template>
  <div class="people">
    <h2>People</h2>
    <hr><hr>

    <div class="container">
      <div v-for="(item, index) in dataInPeople" :key="index">
        <h3>Name: {{item.name}}</h3>
        <p>Telefon no: <span>{{item.phone}}</span></p>
        <p>Email: <span>{{item.email}}</span></p>
        <hr>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'people',
  // two solutions are fine, computed or data + created
  computed: {
    dataInPeople () {
      return this.$route.params.dataToPass
    }
  }
  // data () {
  //   return {
  //     dataInPeople: null
  //   }
  // },
  // created () {
  //   this.dataInPeople = this.$route.params.dataToPass
  //   console.log(this.dataInPeople)
  // },
}
</script>

<style scoped>
  .container {
    margin-top: 10px;
    height: calc(100vh - 160px);
    overflow: scroll;
  }
</style>
