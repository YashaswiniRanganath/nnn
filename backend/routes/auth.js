import express from "express";
import UserModel from "../models/User.js";

const router = express.Router();

router.post('/register', async (req,res) => {
    const {name,email,password} = req.body;

    const search = await UserModel.findOne({email : email})

    if(search){
        return res.status(400).json({err : "User already exists"});
    }

    const newUser = {name : name , email: email, password : password , bookings : []};

    const user = await UserModel.create(newUser);

    const UserToBeReturned = await user.save();

    const n = {...UserToBeReturned.toJSON()};

    delete n.password;

    return res.status(200).json(n);
})


router.post('/login', async (req,res) => {
    const {email, password} = req.body;

    const user = await UserModel.findOne({email : email})

    if(!user){
        return res.status(404).json({err : "user not found"});
    }

    if(user.password === password){
        const newUser = {...user.toJSON()}
        delete newUser.password

        return res.status(200).json(newUser);
    }
    else{
        return res.status(400).json({err : "password is incorrect"});
    }
})

export default router;