import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from "axios";
import 'bootstrap';
// import GAuth from 'vue-google-oauth2';

axios.defaults.baseURL = 
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/WodUp";

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

// const gauthOption = {
//   clientId: '594048284716-ds6bdvimvhp94bs9799qp8baev8ar9c8.apps.googleusercontent.com',
//   scope: 'profile email',
//   prompt: 'select_account',
//   fetch_basic_profile: true
// };
// Vue.use(GAuth, gauthOption);