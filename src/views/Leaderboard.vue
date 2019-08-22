<template>
  <div class="container"> 
    <h1>Leaderboard</h1>
      <div v-for="user_workout in user_workouts">
        <p>Athlete: {{ user_workout.name }} </p>
        <p>Weight: {{ user_workout.weight }}</p>
 <!--        <p>Reps: {{ user_workout.reps }}</p>
        <p>Notes: {{ user_workout.notes }}</p>
        <p>Time: {{ user_workout.time }}</p> -->
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