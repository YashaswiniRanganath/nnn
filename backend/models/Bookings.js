import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
    user: {
        type : mongoose.Types.ObjectId,
        require : true
    },
    hotel : {
        type : mongoose.Types.ObjectId,
        require : true
    },
    date : {
        type : String,
        require : true
    }
})

const BookingsModel = mongoose.model('Bookings' , BookingSchema);

export default BookingsModel;