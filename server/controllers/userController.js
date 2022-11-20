const User = require('../model/userModel');
const jwt = require('jsonwebtoken');

const createToken = (_id)=>{
    return jwt.sign({_id}, process.env.SECRET_STRING, {expiresIn: '3d'})
}

// login user 
    // compare token with with existing things on database
const logInUser = async (req, res)=>{
    const {email, password} = req.body;

    try{
        const user = await User.login(email, password);

        // create token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    }
    catch(err){
        res.status(400).json({error: err.message})
    }
}

// signup user 
const signUpUser = async (req, res)=>{
    const {email, password} = req.body;

    try{
        const user = await User.signup(email, password);

        // create token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    }
    catch(err){
        res.status(400).json({error: err.message})
    }
}

module.exports = {
    logInUser,
    signUpUser
}