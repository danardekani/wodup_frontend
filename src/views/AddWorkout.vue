<template>
  <div class="container">
    <h1>Add Workout</h1>
    <div>
      name: <input type="text" v-model="newWorkoutName">
      workout_type: <input type="text" v-model="newWorkoutType">
      weight: <input type="text" v-model="newWorkoutWeight">
      reps: <input type="text" v-model="newWorkoutReps">
      notes: <input type="text" v-model="newWorkoutNotes">
      time: <input type="text" v-model="newWorkoutTime">
      <button v-on:click="createNewWorkout()">Add Workout</button>
    </div>
    <!-- <h1>Add Workout</h1> -->
    <div v-for="workout in workouts">
      <h2>{{ workout.name }}</h2>
      <p>name: {{ workout.name }}</p>
      <p>workout_type: {{ workout.workout_type }}</p>
      <p>weight: {{ workout.weight }}</p>
      <p>reps: {{ workout.reps }}</p>
      <p>notes: {{ workout.notes }}</p>
      <p>time: {{ workout.time }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      workouts: [],
      newWorkoutName: "",
      newWorkoutType: "",
      newWorkoutWeight: "",
      newWorkoutReps: "",
      newWorkoutNotes: "",
      newWorkoutTime: ""
    };
  },
  created: function() {
    axios.get("/api/workouts").then(response => {
      this.workouts = response.data;
    });
  },
  methods: {
    createNewWorkout: function() {
      var params = {
        name: this.newWorkoutName,
        workout_type: this.newWorkoutType,
        weight: this.newWorkoutWeight,
        reps: this.newWorkoutReps,
        notes: this.newWorkoutNotes,
        Time: this.newWorkoutTime
      };
      axios.post("/api/workouts", params).then(response => {
        this.newWorkoutName = "";
        this.newWorkoutType = "";
        this.newWorkoutWeight = "";
        this.newWorkoutReps = "";
        this.newWorkoutNotes = "";
        this.newWorkoutTime = "";
      });
    }
  }
};
</script>
