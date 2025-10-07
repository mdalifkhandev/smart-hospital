import { connectDB } from "@/server/lib/db";
import { AuthService } from "@/server/modules/auth/auth.service";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        await connectDB()
        const data = await req.json()
        console.log(data,'aaaaa');
        
        const user = await AuthService.userCreadedFromDB(data)
        return NextResponse.json({
            status: 201,
            success: true,
            message: 'User created successfully',
            data: user
        }, { status: 201 })
    } catch (err: unknown) {
        return NextResponse.json({
            status: 500,
            success: false,
            message: 'User created faild',
            data: err
        }, { status: 500 })
    }
}