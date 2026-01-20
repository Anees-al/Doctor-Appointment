import { Schema,Document,model, Types } from "mongoose";


interface IAppointment extends Document{
    user:Types.ObjectId;
    doctor:Types.ObjectId;
    appointmentDate:Date;
    appointmenttime:string;
    status:"pending" | "confirmed" | "cancelled"

}


const appointmentSchem=new Schema<IAppointment>({
    user:{type:Schema.Types.ObjectId,required:true,ref:'user'},
    doctor:{type:Schema.Types.ObjectId,required:true,ref:'doctor'},
    appointmentDate:{type:Date,required:true},
    appointmenttime:{type:String,required:true},
    status:{type:String,default:'pending'}

},{timestamps:true})



const appointmentModel=model<IAppointment>('appointment',appointmentSchem);
export default appointmentModel;