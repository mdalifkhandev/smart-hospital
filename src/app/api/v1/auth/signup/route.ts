import { connectDB } from "@/server/lib/db";
import { UserSercices } from "@/server/modules/auth/auth.service";
import { NextResponse } from "next/server";

export async function POST(req:Request){
    try{
        await connectDB()
        const data= await req.json()
        const user=await UserSercices.userCreadedFromDB(data)
        return NextResponse.json({
            status:201,
            success:true,
            message:'User created successfully',
            data:user
        })
    }catch(err:unknown){
        return NextResponse.json({
            status:500,
            success:false,
            message:'User created faild',
            data:err
        })
    }
}