<template>
  <div class="location">
    <h2>Location</h2>
    <hr><hr>

    <div class="container">

      <button @click="showLocation">Get location</button>

      <div v-if="active" class="location">
        <div v-if="isLoading">
          <p>... loading ...</p>
          <p>... please wait ...</p>
        </div>

        <div v-else>
          <p>Your coordinates</p>
          <p>Lat: {{coordinates.lat}}</p>
          <p>Lng: {{coordinates.lng}}</p>

        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "location",
  data() {
    return {
      coordinates: {},
      isLoading: true,
      active: false
    };
  },
  methods: {
    showLocation() {
      this.active = true;
      // const options = {
      //   enableHighAccuracy: true, //defaults to false
      //   timeout: Infinity, //defaults to Infinity
      //   maximumAge: 1 //defaults to 0
      // };
      this.$getLocation().then(coordinates => {
        // this.$getLocation(options).then(coordinates => {
        this.coordinates = coordinates;
        this.isLoading = false;
        console.log(this.coordinates);
      });
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 10px;
  height: calc(100vh - 160px);
  overflow: scroll;
}
.location {
  margin-top: 30px;
}
button {
  width: 75%;
  height: 40px;
  border: 1px solid black;
  border-radius: 10px;
  opacity: 0.9;

  font-size: 20px;
  margin-top: 50px;
}
button:focus {
  outline: none;
}
p {
  /* color: black; */
  font-size: 20px;
  font-weight: bold;
}
</style>
