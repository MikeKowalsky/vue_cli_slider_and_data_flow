<template>
  <div class="people">
    <h2>Teams</h2>
    <hr><hr>

    <div v-if="isLoading">
        <p>Loading ...</p>
    </div>

    <div v-else>
        <div class="container">
            <div v-for="(item, index) in teamCodesArray" :key="index" class="item">
                <p>Team name: <span>{{ teamNames[index] }}</span></p>
                <p>Code: <span>{{ item }}</span></p>
                <img :src="require(`../assets/team-logos/${item}.svg`)">
            </div>
        </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'teams',
  data () {
    return {
      teamNames: null,
      teamCodesArray: null,
      isLoading: true
    }
  },
  beforeCreate () {
    fetch('https://gitcdn.xyz/repo/drraq/PremierLeague.json/master/data.json')
      .then(response => response.json())
      .then(dataFromServer => {
        this.teamNames = dataFromServer.participating_clubs
        this.teamCodesArray = dataFromServer.teams_codes
        // console.log(this.teamNames)
        // console.log(this.teamCodesArray)
        this.isLoading = false
      })
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 10px;
    height: calc(100vh - 160px);
    overflow: scroll;
  }
  .item{
      width: 70vw;
      background-color: rgba(211, 211, 211, .4);
      margin: 5px 0;
      padding: 5px 0;
  }
  img {
    width: 45vw;
    /* height: 45vh; */
  }
  p {
      margin: 3px;
  }
</style>
