import express from 'express';
import BookingsModel from '../models/Bookings.js';
import UserModel from '../models/User.js';

const router = express.Router();

router.post('/make/booking', async (req,res) => {
    const {userId,hotelId} = req.body;

    const user = await UserModel.findOne({_id : userId});

    if(!user){
        return res.status(404).json({err : "User Not Found"});
    }

    const date = (new Date().getDate().toString()) + '/11/2023';

    const newBooking = {user : userId, hotel : hotelId, date: date};

    const b = await BookingsModel.create(newBooking);

    const booking = await b.save();

    const bookingtoReturned = {...booking.toJSON()}

    user.bookings.push(bookingtoReturned._id);
    
    await user.save()

    return res.status(200).json(bookingtoReturned);


})

export default router;