import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js';
import cookieParser from 'cookie-parser'
import userRoute from './routes/userRoute.js'
import doctorRoute from './routes/doctorRoute.js'
import cors from 'cors'
import cloudinary from './utils/cloudinary.js';
import upload from './middlewares/multer.js';
dotenv.config()
connectDb()



const app=express();
const port=process.env.PORT || 5000;



app.use(express.json());
app.use(cookieParser());
app.use(cors(
    {
        origin: 'http://localhost:5173',
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization']
    }
))


app.use('/api/user',userRoute);
app.use('/api/doctor',doctorRoute)


app.listen(port,()=>console.log(`server is running in the  port ${port}`))