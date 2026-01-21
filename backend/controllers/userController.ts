import userModel from "../models/userModel.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import {Request,Response} from 'express'
import {AuthRequest}  from '../types/authtypes.js'

export const createUser=async(req:Request,res:Response)=>{
     try {
         const {username,email,password,confirmpassword}=req.body;

      if(!username||!email||!password||!confirmpassword){
        return res.status(400).json({messase:'please fill all the fields'})
      }


 
      const existingEmail=await userModel.findOne({email});

      if(existingEmail){
        return res.status(400).json({message:'there is already person with this account'})
      }


      if(password!==confirmpassword){
        return res.status(400).json({message:'password is not matching'})
      }




      const hashpassword=await bcrypt.hash(password,10);
      const newUser=new userModel({username,email,password:hashpassword})


      const token =jwt.sign({
             id:newUser._id
      },process.env.JWT_SECRET as string,
    {expiresIn:'1d'})


    res.cookie('token',token,{
        httpOnly:true,
        secure:process.env.NODE_ENV === 'production',
        sameSite:process.env.NODE_ENV === 'production' ?'none':'strict',
        maxAge:7*24*60*60*1000
    })


    await newUser.save();

    return res.status(201).json({message:'successfully created the new user',newUser,success:true})
     } catch (error:any) {
        return res.status(400).json({message:error.message})
     }
}




export const login=async(req:Request,res:Response)=>{
           try {
            const {email,password}=req.body;
            if(!email||!password){
              return res.status(400).json({message:'please fill all the fields'});
            }

            const existingUser=await userModel.findOne({email});
            if(!existingUser){
              return res.status(400).json({message:'please sign in first'})
            }

            const comparepassword=await bcrypt.compare(password,existingUser.password);

            if(!comparepassword){
            return res.status(400).json({message:'password is incorrect'})
        }


        const token =jwt.sign({
             id:existingUser._id
      },process.env.JWT_SECRET as string,
    {expiresIn:'1d'})


    res.cookie('token',token,{
        httpOnly:true,
        secure:process.env.NODE_ENV === 'production',
        sameSite:process.env.NODE_ENV === 'production' ?'none':'lax',
        maxAge:7*24*60*60*1000
    })
            return res.status(200).json({message:'successfully loged in',existingUser,success:true});
           } catch (error:any) {
            return res.status(400).json({message:error.message})
           }
}



export const logout=async(req:Request,res:Response)=>{
  try {
    res.clearCookie('token',{
       httpOnly:true,
        secure:process.env.NODE_ENV === 'production',
        sameSite:process.env.NODE_ENV === 'production' ?'none':'strict',
        
    })


    return res.status(200).json({message:'successfully logout'});
  } catch (error:any) {
    return res.status(400).json({message:error.message})
  }
}


export const getAllUsers=async(req:Request,res:Response)=>{
  try {
    const users=await userModel.find().select('username comments');
    return res.status(200).json({message:'successfully fetched',users})
  } catch (error:any) {
    return res.status(400).json({message:error.message})
  }
}

export const getUserById=async(req:Request,res:Response)=>{
  try {
    const {id}=req.params;
    const user=await userModel.findById(id);
    if(!user){
      return res.status(400).json({message:'user not found'})
    }
    return res.status(200).json({message:'successfully fetched the user',user})
  } catch (error:any) {
    return res.status(400).json({message:error.message})
  }
}




export const deleteUserById=async(req:Request,res:Response)=>{
  try {
    const {id}=req.params;
    const deleteuser=await userModel.findByIdAndDelete(id);
    if(!deleteuser){
      return res.status(400).json({message:'user not found'});
    }

    return res.status(200).json({message:'successfully deleted the user'});
  } catch (error:any) {
    return res.status(400).json({message:error.message})
  }
}



export const updateUserComment=async(req:Request,res:Response)=>{
  try {
    const {id}=req.params;
    const {comments}=req.body;

    const updateComment=await userModel.findByIdAndUpdate(id,{ $set: { comments: comments } },{ new: true, runValidators: true });

    if(!updateComment){
      return res.status(400).json({message:'user not found'});
    }

    return res.status(200).json({message:'successfully updated the user'});
  } catch (error:any) {
    return res.status(400).json({message:error.message});
  }
}




export const cheackAuth=async(req:Request,res:Response)=>{
  try {
    const authReq = req as AuthRequest;
    return res.status(200).json({message:'succefully auth',success:true,user:authReq.user});

  } catch (error:any) {
    return res.status(400).json({message:error.message})
  }
}


