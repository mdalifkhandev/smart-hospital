import { connectDB } from "@/server/lib/db";
import { AuthService } from "@/server/modules/auth/auth.service";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        await connectDB()
        const data = await req.json()
        const user = await AuthService.userLoginToDB(data)
        const token = user.token
            ; (await cookies()).set({
                name: 'token',
                value: token,
                httpOnly: true,
                secure: true,
                path: '/',
                maxAge: 60 * 60 * 24 * 7
            })
        return NextResponse.json({
            status: 201,
            success: true,
            message: 'User login successfully',
            data: user
        }, { status: 201 })
    } catch (err: unknown) {
        return NextResponse.json({
            status: 500,
            success: false,
            message: 'User login faild',
            data: err
        }, { status: 500 })
    }
}