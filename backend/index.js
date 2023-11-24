import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js'
import hotelRoutes from './routes/hotel.js'
import searchRoutes from './routes/search.js'
import bookingRoutes from './routes/booking.js'
import cors from 'cors'

const app = express();

mongoose.connect(
    'mongodb+srv://yawini296:JaiMataDi@cluster0.o2qoexg.mongodb.net/?retryWrites=true&w=majority'
).then(() => {
    console.log("Connected to mongo")
})

const port = 8000;

app.use(cors())
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/hotel', hotelRoutes);
app.use('/search', searchRoutes);
app.use('/booking',bookingRoutes);

app.listen(port, () => {
    console.log("Listening on port")
})