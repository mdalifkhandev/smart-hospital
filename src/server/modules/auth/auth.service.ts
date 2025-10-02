import { TUser } from "./auth.interface"
import { User } from "./auth.model"

const userCreadedFromDB=async(data:TUser)=>{
    const result=await User.create(data)
    return result
}

export const UserSercices={
    userCreadedFromDB
}