import Profile from "@/models/profile.model";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import { connectDb } from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helper/getDataFromToken";

connectDb(); 

export async function GET(request: NextRequest) {
    try {
      
      const userId = getDataFromToken(request);
      if (!userId) {
        return NextResponse.json({ message: "User not found" }, { status: 404 });
      }
  
      
      const [user, profile] = await Promise.all([
        User.findOne({ _id: userId }),
        Profile.findOne({ userId }),
      ]);
  
      if (!user || !profile) {
        return NextResponse.json({ message: "User or profile not found" }, { status: 404 });
      }
  
      
      const { username, fullname  } = user || {}; 
      const { ventureName , bio, linkedinUrl, profilePictureUrl } = profile || {}; 

     
      return NextResponse.json({ username, fullname, ventureName, profilePictureUrl, bio, linkedinUrl }, { status: 200 });
    } catch (error: any) {
      console.error(error); 
      return NextResponse.json({ message: "Failed to get user details" }, { status: 500 });
    }
  }
