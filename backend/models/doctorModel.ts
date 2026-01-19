import {Schema,model,Document} from 'mongoose';


interface IDoctor extends Document {
    doctorname: string;
    doctoremail: string;
    doctorcode:string
    department:string
    doctorimage:string
    fees:number
    languages: string[]
    qualification:string[]
    experience:number
    location:string
    hospital:string
    available:boolean
    
    

}
const doctorSchema=new Schema<IDoctor>({
     doctorname:{type:String,trim:true,required:true},
     doctorcode:{type:String,unique:true,required:true},
     doctoremail:{type:String,unique:true,required:true},
     department:{type:String},
     doctorimage:{type:String},
     fees:{type:Number,required:true},
     languages:{type:[String],required:true},
     qualification:{type:[String],required:true},
     experience:{type:Number,required:true},
     location:{type:String,required:true},
     hospital:{type:String,required:true},
     available:{type:Boolean,required:true,default:true}
})



const doctorModel=model<IDoctor>('doctor',doctorSchema);

export default doctorModel;
