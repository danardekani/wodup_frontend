<template>
  <div class="login">
    <div class="container">
      <div id="login-spacing">
        <body>        
          <form v-on:submit.prevent="submit()">
            <head>  
            
            </head>
            <h1>Login</h1>
            <ul>
              <li class="text-danger" v-for="error in errors">{{ error }}</li>
            </ul>
            <div class="form-group">
              <label id="login-email">Email:</label>
              <input type="email" class="form-control" v-model="email">
            </div>
            <div class="form-group">
              <label>Password:</label>
              <input type="password" class="form-control" v-model="password">
            </div>
            <input type="submit" class="btn btn-primary" value="Login">
            <!-- Google -->
            <!-- Google -->
          </form>
        </body>
      </div>
    </div>
  </div>
</template>

<!-- /*** Google Sign on ***/ -->

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>
<!-- 
**** GOOGLE **** -->
<!-- <script type="text/javascript">
  
this.$gAuth.getAuthCode()
.then(authCode => {
  //on success
  return this.$http.post('localhost:3000/auth/google', { code: authCode, redirect_uri: 'postmessage' })
})
.then(response => {
  //after ajax
})
.catch(error => {
  //on fail do something
})
</script> -->