<template>
  <div class="container">
    <div id="add-workout-padding">      
      <h1 id="h1-padding"> Add Workout </h1>
        <div id="workout-name-padding">
          <div id="work" class="form-group col-md-6">
            <select placeholder="Workout Name" class="form-control" v-model="newWorkoutName">
              <option value="" disabled selected>Workout Name</option>
              <option value="43">Dead lift</option>
              <option value="44">Bench Press</option>
              <option value="45">Push Press </option>
              <option value="101">Front Squat</option> 
              <option value="102">Back Squat</option> 
            </select>
          </div>
        </div> 
          <div class="form-group col-md-6" >
            <select type="text" class="form-control" v-model="newWorkoutType" >
              <option value="" disabled selected>Workout Type</option>
              <option>Strength</option>
              <option>Endurance</option>
            </select>
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
