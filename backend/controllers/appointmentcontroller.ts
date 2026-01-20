import appointmentModel from "../models/appointmentModel.js";
import {Response,Request} from 'express'
import {AuthRequest}  from '../types/authtypes.js'


export const createAppointment=async(req:Request,res:Response)=>{
  try {
    const { doctorId } = req.params;

    const authReq = req as AuthRequest;
    const userId = authReq.user.id;

    const {appointmentDate,time}=req.body;


    const newAppointment=new appointmentModel({
      user:userId,
      doctor:doctorId,
      appointmentDate,
      appointmenttime:time
    })

    const appointment=await newAppointment.save() ;
    return res.status(200).json({message:'succefully created the appointment',appointment})

  } catch (error:any) {
    return res.status(400).json({message:error.message})
  }
}
   

export const getAllAppointments=async(req:Request,res:Response)=>{
  try {
    const appointments=await appointmentModel.find();
    return res.status(200).json({message:'successfully fetched all the appointments',appointments})
  } catch (error:any) {
    return res.status(400).json({message:error.message});
  }
}


export const getAppointmentByDoctorId=async(req:Request,res:Response)=>{
  try {
    const {doctorId}=req.params;
    const appointments=await appointmentModel.find({doctor:doctorId});
    return res.status(200).json({message:'succefully get the appointments',appointments})
  } catch (error:any) {
    return res.status(400).json({message:error.message})
  }
}