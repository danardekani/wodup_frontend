<!-- <template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
export default {
  name: 'home',
  components: {
    HelloWorld
  }
};
</script> -->

<template>
  <html>
    <head>
      <h1 id="head">Welcome to WodUp.</h1>
      <title></title>
    </head>
    <body>
      <br>
      <br>
      <section class="section-padding" id="about">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-6 col-12 col-md-6">
              <h3 class="section-title m-mt-20"> <span class="rev">Welcome to WodUp</span></h3>
              <p class="mt-2">WodUp was built for athletes to compete on a global scale whenever and wherever they want. Create a profile, submit your scores, and see how you stack up. Are you game?</p>
              <ul class="list-style mt-3 ">
                <li><i class="fa fa-angle-double-right" aria-hidden="true"></i>Access to Global Leaderboard</li>
                <li><i class="fa fa-angle-double-right" aria-hidden="true"></i>Always Free</li>
              </ul>
              <a href="/signup" class="btn btn-primary btn-strock mt-5">Sign Up</a>
            </div>
          </div>
        </div>
      </section>
    </body>
  </html>
</template>
