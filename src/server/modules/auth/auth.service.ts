import { TUserCreated } from "./auth.interface"
import { User } from "./auth.model"

const userCreadedFromDB=async(data:TUserCreated)=>{
    const result=await User.create(data)
    return result
}

export const AuthService={
    userCreadedFromDB
}