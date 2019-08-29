<template>
  <div class="container"> 
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h1>Leaderboard</h1>
    <select v-model="user_workouts" v-on:change="leaderBoardFilter()">
      <option value="" disabled selected>Workout</option>
      <option value="43">Dead lift</option>
      <option value="44">Bench Press</option>
      <option value="45">Push Press </option>
      <option value="101">Front Squat</option> 
      <option value="102">Back Squat</option> 
    </select>
      <div v-for="user_workout in user_workouts">
        <p>Athlete: {{ user_workout.first_name }} {{ user_workout.last_name }}</p>
        <p>Workout: {{ user_workout.name }} </p>
        <p>Weight: {{ user_workout.weight }}</p>
        <p>Notes: {{ user_workout.notes }}</p>
        <p>Time: {{ user_workout.time }}</p> 
      </div>
  </div>
</template>

<script type="text/javascript">
import axios from "axios";

export default {
  data: function() {
    return {
      user_workouts: []
    };
  },
  created: function() {
    axios.get("/api/user_workouts").then(response => {
      this.user_workouts = response.data;
    });
  },
  methods: {
    leaderBoardFilter: function() {
      console.log(this.user_workouts);
      axios.get("/api/user_workouts?workout_id=" + this.user_workouts).then(response => {
        this.user_workouts = response.data;
      });
    }
  }
}; 

</script>