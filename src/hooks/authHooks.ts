import axiosInstance from "@/lib/axios"
import { TUserCreated, TUserLogin } from "@/server/modules/auth/auth.interface"
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"

export const useUserRegister = () => {
    return useMutation({
        mutationFn: async (data: TUserCreated) => {
            const result = await axiosInstance.post('/auth/signup', data)
            return result
        },
        onSuccess: (data) => {
            console.log('Success:', data)
            toast.success('User created successfully')
        },
        onError: (error) => {
            console.error('Error:', error)
            toast.error('User creation failed')
        }
    })
}

export const useUserLogin=()=>{
    return useMutation({
        mutationFn:async (data:TUserLogin)=>{
            const result=await axiosInstance.post('/auth/login',data)
            console.log(result.data.data);
            
            return result
        },
        onSuccess:()=>{
            toast.success('User Login successfully')
        },
        onError:()=>{
            toast.error('User Login faild')
        }
    })
}