const Workout = require('../model/workoutModel');
const mongoose = require('mongoose');

// get all workouts
const getAll = async (req, res)=>{
    const user_id = req.user._id;

    const workouts = await Workout.find({user_id}).sort({createdAt: -1})
    res.json(workouts);
}

// get a single workout
const getOne = async (req, res)=>{
    const {id} = req.params; 
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "invalid ID hai "})
    }

    const workout = await Workout.findById(id)

    if(!workout){
        res.status(400).json({error: "aisa koi workout hai hi nahi"})
    }
    res.status(200).json(workout);
}

// create new workout
const create = async (req, res)=>{
    const {title, reps, sets} = req.body;

    let emptyFields = []
    if(!title) emptyFields.push('title')
    if(!sets) emptyFields.push('sets')
    if(!reps) emptyFields.push('reps')
    if(emptyFields.length > 0){
        return res.status(400).json({error: 'empty fields me plants ugana hai kya? fill karo unko ', emptyFields})
    }
    
    try{
        const user_id = req.user._id;
        const workout = await Workout.create({title, reps, sets, user_id}); 
        res.status(200).json(workout)
    }
    catch(err){
        res.status(400).json({error: err.message})
    }
}

// update a workout 
const update = async (req, res)=>{
    const {id} = req.params; 
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "invalid ID hai "})
    }

    const workout = await Workout.findOneAndUpdate({_id: id},{
        ...req.body
    });

    if(!workout){
        res.status(400).json({error: "aisa koi workout hai hi nahi"})
    }
    res.status(200).json(workout);
}

// delete a workout 
const deletee = async (req, res)=>{
    const {id} = req.params; 
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "invalid ID hai "})
    }

    const workout = await Workout.findOneAndDelete({_id: id});

    if(!workout){
        res.status(400).json({error: "aisa koi workout hai hi nahi"})
    }
    res.status(200).json(workout);
}


module.exports = {
    create,
    getAll,
    getOne,
    update,
    deletee
}
