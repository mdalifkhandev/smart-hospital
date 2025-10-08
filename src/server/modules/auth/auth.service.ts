import { createToken } from "@/server/lib/token"
import { TUserCreated, TUserLogin } from "./auth.interface"
import { User } from "./auth.model"
import bcrypt from "bcrypt"
import { JwtPayload } from "jsonwebtoken"


const userCreadedFromDB = async (data: TUserCreated) => {
    const user = await User.findOne({ email: data.email })
    if (user) {
        throw new Error('Email is Alrady exisit')
    }
    const matchPassword = data.password === data.confirmPassword
    if (!matchPassword) {
        throw new Error('Confirm Password not math')
    }

    const password = await bcrypt.hash(data.password, 10)
    const { confirmPassword, ...rest } = data
    const newData = {
        ...rest,
        password
    }
    const result = await User.create(newData)
    return result
}

const userLoginToDB = async (data: TUserLogin) => {

    const user = await User.findOne({ email: data.email })
    if (!user) {
        throw new Error('User Not Found')
    }
    const matchPassword = await bcrypt.compare(data.password, user.password)

    if (!matchPassword) {
        throw new Error('Password Incored')
    }

    const payload = {
        email: user.email,
        role: user.role
    } as JwtPayload
    const token = createToken(payload, 'Alif', '2h')

    return {
        user,
        token
    }
}

export const AuthService = {
    userCreadedFromDB,
    userLoginToDB
}