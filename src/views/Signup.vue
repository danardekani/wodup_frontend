<template>
  <div class="signup">
    <div class="container">
      <div id="signup-spacing">
        <form v-on:submit.prevent="submit()">
          <h1>Sign Up</h1>
          <ul>
            <li class="text-danger" v-for="error in errors">{{ error }}</li>
          </ul>
          <div id="first-name-signup" class="form-group">
            <label>First Name:</label> 
            <input type="text" class="form-control" v-model="first_name">
          </div><div class="form-group">
            <label>Last Name:</label> 
            <input type="text" class="form-control" v-model="last_name">
          </div>
          <div class="form-group">
            <label>Email:</label>
            <input type="email" class="form-control" v-model="email">
          </div>
          <div class="form-group">
            <label>Password:</label>
            <input type="password" class="form-control" v-model="password">
          </div>
          <div class="form-group">
            <label>Password confirmation:</label>
            <input type="password" class="form-control" v-model="passwordConfirmation">
          </div>
          <input type="submit" class="btn btn-primary" value="Submit">
        </form>
      </div>
      <br>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
<<<<<<< HEAD
          this.errors = error.response.data.errors;
          this.errors = ["Password and password confirmation do not match."];
          this.password_confirmation = "";
=======
          this.errors = ["Invalid user information"];
          // this.errors = error.response.data.errors;
          this.email = "";
>>>>>>> 7e98154ccc4957b8c886877427f8131917fe4361
          this.password = "";
        });
    }
  }
};
</script>
