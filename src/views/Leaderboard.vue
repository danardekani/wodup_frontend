<template>
  <div class="container"> 
    <h1>Leaderboard</h1>
    <select v-model="user_workouts" v-on:change="">
      <option disabled value="">Workouts</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
      <option>D</option> 
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
  }
}; 

</script>