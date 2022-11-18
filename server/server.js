const express = require('express');
const app = express(); 
const mongoose = require('mongoose');
require('dotenv').config();

const workoutRoutes = require('./routes/workout');
const PORT = process.env.PORT || 8080;


// global middlewares
app.use(express.json())

app.use((req, res, next)=>{
    console.log( req.path, req.method )
    next();
})

// routes
app.use('/api/workouts', workoutRoutes)

// connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        // listening requests
        app.listen(PORT, ()=>{
        console.log( `listening on port ${PORT} ` );
        })
    })
    .catch((err)=>{
        console.log( err );
    })


