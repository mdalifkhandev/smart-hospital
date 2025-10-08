export type TUserCreated = {
    name: string
    role: 'user' | 'seller'
    phone: number
    email: string
    address: string
    password: string
    confirmPassword?: string
    tram: boolean
}

export type TUserLogin={
    email:string
    password:string
    tram?:boolean
}