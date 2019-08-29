<template>
  <div class="container">
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h1> Add Workout </h1>
    <br>
    <div>
      <div class="form-group col-md-6">
        <select placeholder="Workout Name" class="form-control" v-model="newWorkoutName">
          <option value="43">Dead lift</option>
          <option value="44">Bench Press</option>
          <option value="45">Push Press </option>
          <option>Back Squat</option> 
          <option>Front Squat</option> 
        </select>
      </div> 
        <div class="form-group col-md-6">
          <input type="text" class="form-control" v-model="newWorkoutType" placeholder="Workout Type">
        </div> 
        <div class="form-group col-md-6">
          <input type="text" class="form-control" v-model="newWorkoutWeight" placeholder="Weight">
        </div> 
        <div class="form-group col-md-6">
          <input type="text" class="form-control" v-model="newWorkoutReps" placeholder="Reps">
        </div>
        <div class="form-group col-md-6">
          <input type="text" class="form-control" v-model="newWorkoutNotes" placeholder="Notes">
        </div>
        <div class="form-group col-md-6">
          <input type="text" class="form-control" v-model="newWorkoutTime" placeholder="Time">
        </div>
        <button class="btn btn-lg btn-primary ml-auto" v-on:click="createNewWorkout()">Add Workout</button>
        <br>
        <br>
      </div>
      <!-- <div v-for="workout in workouts">
        <h2>{{ workout.name }}</h2>
        <p>name: {{ workout.name }}</p>
        <p>workout_type: {{ workout.workout_type }}</p> -->
       <!--  <div v-for="user_workout in workout.user_workouts">
          <p>weight: {{ user_workout.weight }}</p>
          <p>reps: {{ user_workout.reps }}</p>
          <p>notes: {{ user_workout.notes }}</p>
          <p>time: {{ user_workout.time }}</p>
        </div> -->
      <!-- </div> -->
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
    // axios.get("/api/workouts").then(response => {
    //   this.workouts = response.data;
    axios.get("/api/workouts?workout_id=" + this.workouts).then(response => {
      this.workouts = response.data;
    });
  },
  methods: {
    createNewWorkout: function() {
      var params = {
        workout_id: this.newWorkoutName,
        name: this.newWorkoutName,
        workout_type: this.newWorkoutType,
        weight: this.newWorkoutWeight,
        reps: this.newWorkoutReps,
        notes: this.newWorkoutNotes,
        time: this.newWorkoutTime
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
