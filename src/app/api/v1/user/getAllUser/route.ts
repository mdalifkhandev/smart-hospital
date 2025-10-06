import { connectDB } from "@/server/lib/db";
import { UserService } from "@/server/modules/user/user.service";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const users = await UserService.getAllUser();

    return NextResponse.json(
      {
        success: true,
        message: "Users retrieved successfully",
        data: users,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("User fetch error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to retrieve users",
        error: error.message || error,
      },
      { status: 500 }
    );
  }
}
