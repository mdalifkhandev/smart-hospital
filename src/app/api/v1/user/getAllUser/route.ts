// app/api/user/getalluser/route.js
import { connectDB } from "@/server/lib/db";
import { tokenVerify } from "@/server/lib/token";
import { User } from "@/server/modules/auth/auth.model";
import { UserService } from "@/server/modules/user/user.service";
import { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    await connectDB();

    // const cookieStore = cookies();
    // const token = (await cookieStore).get('token')?.value;

    // if (!token) {
    //   return NextResponse.json(
    //     {
    //       success: false,
    //       message: "Authentication token missing",
    //     },
    //     { status: 401 }
    //   );
    // }

    // let decoded;
    // try {
    //   decoded = tokenVerify(token, "Alif") as JwtPayload;
    // } catch (error) {
    //   return NextResponse.json(
    //     {
    //       success: false,
    //       message: "Invalid token",
    //     },
    //     { status: 401 }
    //   );
    // }

    // const email = decoded.email;
    // if (!email) {
    //   return NextResponse.json(
    //     {
    //       success: false,
    //       message: "Please login and try again",
    //     },
    //     { status: 401 }
    //   );
    // }

    // // Verify the user exists
    // const user = await User.findOne({ email });
    // if (!user) {
    //   return NextResponse.json(
    //     {
    //       success: false,
    //       message: "User not found",
    //     },
    //     { status: 404 }
    //   );
    // }

    // Get all users
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
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}