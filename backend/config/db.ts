import mongoose from 'mongoose';


const connectDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL as string);
        console.log('db connected successfully');
    } catch (error:any) {
        console.log(error.message)
       process.exit(1)
    }
}

export default connectDb;