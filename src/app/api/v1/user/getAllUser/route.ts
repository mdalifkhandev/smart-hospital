import { connectDB } from "@/server/lib/db";
import { tokenVerify } from "@/server/lib/token";
import { User } from "@/server/modules/auth/auth.model";
import { UserService } from "@/server/modules/user/user.service";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const cookiesStore=cookies()

    const token=(await cookiesStore).get('token')?.value as string

    const decoded = tokenVerify(token, "Alif");
    let email: string | undefined;
    if (typeof decoded === "object" && decoded !== null && "data" in decoded && typeof (decoded as any).data?.email === "string") {
      email = (decoded as any).data.email;
    } else {
      throw new Error("Invalid token payload: email not found");
    }
    const user = await User.findOne({ email });
    
    if(!user){
      throw new Error('Pleace login and try again')
    }
    const users = await UserService.getAllUser();

    return NextResponse.json(
      {
        success: true,
        message: "Users retrieved successfully",
        data: users,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("User fetch error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to retrieve users",
        error:  error,
      },
      { status: 500 }
    );
  }
}
