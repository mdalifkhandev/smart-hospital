import { connectDB } from "@/server/lib/db";
import { tokenVerify } from "@/server/lib/token";
import { User } from "@/server/modules/auth/auth.model";
import { UserService } from "@/server/modules/user/user.service";
import { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const cookiesStore = cookies()

    const token = (await cookiesStore).get('token')?.value as string

    const decoded = tokenVerify(token, "Alif") as JwtPayload
    const email = decoded.email
    if (!email) {
      throw new Error('Pleace login and try again')
    }

    const user = await User.findOne({ email });

    if (!user) {
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
        error: error,
      },
      { status: 500 }
    );
  }
}
