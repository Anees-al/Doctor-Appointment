import  { Schema, model, Document } from "mongoose";

interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    role:string
    comments:string
}
const userSchema=new Schema<IUser>({
    username:{type:String,required:true,trim:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:{type:String,enum:['admin','user'],default:'user'},
    comments:{type:String,trim:true,minlength:[5,"minimum 5 letters"],maxlength:[100,"not exceeded 100 letters"]}
})



const userModel=model<IUser>('user',userSchema);


export default userModel;