import { model, models, Schema } from "mongoose";
import { TUserCreated } from "./auth.interface";

const userSchema=new Schema<TUserCreated>({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true
    },
    role:{
        type:String,
        enum:['user','seller']
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    tram:{
        type:Boolean,
        required:true
    }

},{
    timestamps:true
})

export const User=models.User || model<TUserCreated>('User',userSchema)