import jwt from  'jsonwebtoken';
import { Request,Response } from 'express';
import { AuthRequest } from "../types/authtypes.js";
const authenticate=async(req:Request,res:Response,next:any)=>{

    const  token =req.cookies?.token;
        const authReq = req as AuthRequest;
    if(!token){
        return res.status(400).json({message:'no userlogined'})
    }
    try {
       const decoded=jwt.verify(token,process.env.JWT_SECRET as string)as { id: string; role?: string }; ;
        authReq.user = {
      id: decoded.id,
      role: decoded.role
    };
       next()
    } catch (error:any) {
        res.status(400).json({message:error.message})
    }
}


export default authenticate