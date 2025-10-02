import { Schema, model, models } from "mongoose";
import { TUser } from "./auth.interface";

const userSchema = new Schema<TUser>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {   
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isDelete:{
    type:Boolean,
    default:false
  }
});

export const User = models.User || model<TUser>("User", userSchema);
