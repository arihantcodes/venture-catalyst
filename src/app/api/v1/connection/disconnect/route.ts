import User, { IUser } from "@/models/user.model"; // Import IUser interface
import { connectDb } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helper/getDataFromToken";


connectDb();

// Route for inserting the user in follower and following list

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get("username");

    const loggedInUserId = getDataFromToken(request); // loggedinuserid

    if (!username) {
      return NextResponse.json({ message: "Username is required" }, { status: 400 });
    }


    if (!loggedInUserId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const user = await User.findOne({ username: username });
    
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    
    const { _id } = user;

    if (!_id) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const loggedInUserData = await User.findById(loggedInUserId);

    if (!loggedInUserData) {
      return NextResponse.json({ message: "Logged in user not found" }, { status: 404 });
    }

    await User.findOneAndUpdate({_id:loggedInUserId},{$pull: { following: _id }});
    await User.findOneAndUpdate({_id:_id},{$pull: { followers: loggedInUserId }});

    return NextResponse.json({ message: "User unfollowed successfully" }, { status: 200 });
   

  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({ message: "ERROR: " + error.message }, { status: 500 });
  }
}
