import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        require : true
    },
    city : {
        type : String,
        require: true
    },
    image : {
        type : String,
        require : true
    },
    capacity : {
        type : String,
        require : true
    }
})

const HotelModel = mongoose.model("Hotels", hotelSchema);

export default HotelModel;