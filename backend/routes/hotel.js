import express from "express"
import HotelModel from "../models/Hotels.js";

const router = express.Router();

router.post('/add/hotel', async (req, res) => {
    const {name, city , image , capacity} = req.body;

    const newHotel = await HotelModel.create({name, city,image,capacity});

    const hotelReturned = await newHotel.save();

    const h = {...hotelReturned.toJSON()};

    return res.status(200).json(h);

})

export default router;