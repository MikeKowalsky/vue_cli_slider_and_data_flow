import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

import secretData from "./config";
console.log(secretData);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
