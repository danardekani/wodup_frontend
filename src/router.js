import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Signup from './views/Signup.vue';
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import AddWorkout from './views/AddWorkout.vue';
import WodUp  from './views/WodUp.vue';
import Leaderboard from './views/Leaderboard.vue';
import GSignInButton from 'vue-google-signin-button';
Vue.use(GSignInButton);
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/vue-google-signin-button',
      name: 'vue-google-signin-button',
      component: GSignInButton
    },
    {
      path: '/leaderboard',
      name: 'leaderboard',
      component: Leaderboard
    },
    {
      path: '/wodup',
      name: 'wodup',
      component: WodUp
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    { 
      path: "/login", 
      name: "login", 
      component: Login 
    },
    { 
      path: "/logout", 
      name: "logout", 
      component: Logout 
    },
    {
      path: "/addworkout",
      name: 'addworkout',
      component: AddWorkout
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
});
