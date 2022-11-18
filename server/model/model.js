const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  title: {type: String, required: true},
  reps: {type: Number, required: true},
  sets: {type: Number, required: true},
}, {timestamps:true});

module.exports = mongoose.model('workout', workoutSchema)  // 'workout' ko pluralize karke collection bana dega mongo