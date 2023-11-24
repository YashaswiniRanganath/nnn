import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    bookings : [
        {
            type : mongoose.Types.ObjectId,
            require : false
        }
    ]
})

const UserModel = mongoose.model('Users',userSchema)

export default UserModel;