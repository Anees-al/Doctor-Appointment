import doctorModel from "../models/doctorModel";
import { Request,Response } from "express";
export const createDoctor=async(req:Request,res:Response)=>{
    try {
        const {doctorname,doctoremail,doctorcode,department,fees,languages,hospital,location,qualification,experience}=req.body;
        


        const doctorData=new doctorModel({
            doctorname,
            doctoremail,
            doctorcode,
            department,
            fees:Number(fees),
            location,
            hospital,
            
            languages:Array.isArray(languages) ? languages : languages.split(','),
             qualification:Array.isArray(qualification) ? qualification : qualification.split(','),
             experience:Number(experience)

        })



        await doctorData.save()
        return res.status(201).json({message:'succefully created the doctor',doctorData})
    } catch (error:any) {
        return res.status(400).json({message:error.message})
    }
}



export const getAllDoctors=async(req:Request,res:Response)=>{
    try {
        const doctors= await doctorModel.find();
        return res.status(200).json({message:'successfully fetched the doctors',doctors})
    } catch(error:any) {
        return res.status(400).json({message:error.message})
    }
}


export const getDoctorByDepartment=async(req:Request,res:Response)=>{
    try {
        const {department}=req.params;
        const doctors=await doctorModel.find({department});
    return res.status(200).json({message:'successfully get the doctors',doctors})
    } catch (error:any) {
        res.status(400).json({message:error.message})
    }
}