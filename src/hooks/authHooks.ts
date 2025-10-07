import axiosInstance from "@/lib/axios"
import { TUserCreated } from "@/server/modules/auth/auth.interface"
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



