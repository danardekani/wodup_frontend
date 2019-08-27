<template>
  <div class="container"> 
    <h1>Leaderboard</h1>
    <select v-model="user_workouts" v-on:change="sortBy()">
      <option text="Strength" >Strength</option>
      <option>Deadlift</option>
      <option>Bench Press</option>
      <option>Push Press</option>
      <option>Back Squat</option> 
      <option>Front Squat</option> 
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
    sortBy: function() {
      console.log(this.user_workouts);
      axios.get("/api/user_workouts?workout_id=44").then(response => {
        this.user_workouts = response.data;
      });
    },
  }
}; 

</script>