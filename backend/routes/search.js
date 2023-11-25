import express from 'express';
import HotelModel from '../models/Hotels.js';

const router = express.Router();

router.get('/get/allhotels/:city', async (req,res) => {
    const city = req.params.city;

    const hotels = await HotelModel.find({city : city});

    if(!hotels){
        return res.status(404).json({err : "NOT FOUND"});
    }

    return res.status(200).json(hotels);
})

export default router;
